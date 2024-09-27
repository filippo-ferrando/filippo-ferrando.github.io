---
title: "Signing Mac OS packages"
slug: "signing-macos-packages"
description: "My experience after a month of working on macOS"
pubDate: "Aug 7 2024"
tags: ["MacOS", "CI"]
coverImage: "./post_img30.avif"
---
# macOS Code Signing: How It Works

Let's start by saying that the process actually seems very simple. It consists of three main steps: code signing, notarisation, and stapling. We'll delve into what each step involves and why they are necessary.

Here is a simple pipeline of the process:

```
[Code Signing] --> [Notarisation] --(Apple approval)--> [Stapling] --(Notarisation "applied" to package)--> [Signed App]
```

## Prerequisites

Before we can sign code, we must have an **identity** to certify the validity of the signature. This identity is provided by a certificate issued by Apple, known as the **Developer ID Application**. Once assigned to your specific Apple Developer account, this certificate allows you to *sign* pieces of code.

You will also need a valid Apple ID and an application-specific password, both generated and issued by Apple Developer. This complex process involves multiple certificates and passwords rather than a single token directly assigned to the Apple account.

#### Small Tip

Do not try to import certificates directly into your **keychain**. **Though it may seem logical, it's not the best approach.** Instead, download Xcode and use its settings to import the certificates assigned to your account.

## Code Signing

The first step is signing the code. Initially, I thought this would be done with a ready-made package, such as a .dmg or a working package. However, this is not the case. When signing a macOS application, all the files that are part of the final application must be signed individually using the ```codesign``` utility.
Is this useful? I'm not sure. Necessary? Perhaps. A waste of time? Absolutely. To sign the files, we need to import our identity provided by the Developer certificate into our system keychain. This gives us a "valid identity" we can use. Wouldn't it have been easier to sign the final package directly? I think we'll never know.

## Notarisation

The second step is notarisation. After signing the entire package, we need to ask Apple to confirm that we haven't messed anything up. We take our signed app, zip it, and send it to Apple, which will conduct thorough checks on our package and return it in a *reasonable* timeframe.

To do this, we need our Apple ID, app-specific password, and Team ID. When we get the package back, we'll know if it has been properly notarised or if there's something considered unworthy or unsafe for publication.

## Stapling

The final stage is stapling. This process involves integrating the notarisation ticket into the final package, making it distributable as a secure package. This ensures that the package has not been tampered with after notarisation. Without this step, we will not be able to run the application on macOS since Gatekeeper, not seeing the embedded ticket, will not recognise the package as signed.

## My Thoughts

I've been a Linux user for 10 years, and this is the first time I've had to go through such a process to run an application on an operating system. There are too many steps that can go wrong and too many requirements for developers. While this process greatly reduces poorly written applications, it does not justify the time wasted. In my case, build times increased by about 20 minutes due to Apple's response times for notarisation, which also does not always succeed regardless of the code sent. This increase in build times can translate to higher costs, especially in automated build scenarios hosted on platforms like GitHub or any CI/CD platform.

The cost is not the main issue, though. The real difficulty lies in configuring a remote macOS machine to sign applications, from importing certificates to managing responses after stapling. Most of my headaches come from automating these processes. It is not guaranteed that importing the certificate from the command line will be effective, nor that invoking notarisation on a partially configured remote runner will be successful. The worst part is the vague error messages from Apple or the tools themselves, making it very difficult to understand where the error lies.

## Conclusion

At this point, I have not yet successfully configured a remote runner that can return a correctly signed package, despite positive responses from all the used tools. I can't explain why signing, notarisation, and stapling, which consistently yield positive responses, still fail to sign a package. I will probably opt for using self-hosted runners, so I can configure everything once via the graphical interface. I'll keep you updated.

Thanks, Apple, for these weeks of intense fun.