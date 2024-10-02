---
title: "Github Actions"
slug: "gh-action"
description: "Automatize processes with Github Action"
pubDate: "Oct 2 2024"
tags: ["CI"]
coverImage: "./post_img31.jpg"
---

# Automatize build processes with Github

In the last period I have been dealing with Github Action for different applications, from translation to building projects in different programming languages and for different platforms; there are a number of features that make this product (in my opinion) superior to other CI/CD tools on the market today, this the reason why I chose to use this tool.
Actions offers terrific integration with repositories on Github, as it should and this makes it very intuitive and “easy” to use, through just writing a yaml file you can automate most of the tasks that previously had to be done by hand.

## Pros and Cons

Let's start by saying that all that glitters is not gold, nice integration and simplicity, but there are some shortcomings, such as the lack of runners with specific platforms not directly provided, etc...
It remains that actions are a really great tool if you want to automate any process within a repository, on the dedicated marketplace there are a lot of ready-to-use actions that you just need to import into your yaml file, greatly reducing the time needed to complete simple and repetitive tasks (such as ssh connection to another client or setup of a specific java version)

The biggest downside, in my experience, is the usage limits that GitHub imposes. In order to test and develop an action from scratch that meets all your needs in the best way, and most importantly, works, it takes time and a huge number of runs on the platform. Sooner or later, this will impact the final costs of this solution.

## How it works (in short)

The setup is very intuitive. On the repository where you want to use this tool, navigate to the "Actions" tab and start creating a new action, either from scratch or using a pre-existing template. Once the file is completed, it will be runned on a specified runner (defined in the file), which can be Linux, Windows, or Mac, at specific moments (also defined in the file) called triggers. Triggers can vary, from a push to a specific branch to the acceptance of a pull request on another branch. This allows for great flexibility and enables the automation of not only build processes but also tasks that are not strictly related to code.

## My favorite functionality

As I explained in the previous post, I had quite a few issues automating code signing on a remote Mac runner, so I opted for a local runners instead. In my opinion, this is one of the best features GitHub offers to developers, as it allows automations triggered by the usual events to run on local machines, which can be configured exactly as needed, with all the necessary precautions to keep certificates, tokens, and passwords of various kinds "on-site".

By using a local runner, you can avoid using the YAML file to configure secrets or other sensitive information that you may prefer not to store online, even if you're using a private repository or other form of protection.

## Conclusion
In conclusion, GitHub Actions has proven to be an incredibly powerful and flexible tool for automating build processes and more. While there are some limitations, such as platform-specific runner availability and potential cost concerns from extensive usage, the ease of integration with GitHub repositories and the extensive marketplace of pre-built actions make it a strong choice for developers. The ability to use local runners for more secure, customizable automation only adds to its appeal. Whether you are managing builds, deployments, or other repetitive tasks, GitHub Actions can significantly streamline your workflow and improve productivity.