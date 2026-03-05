---
title: "CI/CD and Container: a DevOps story"
slug: "docker-devops-cicd"
description: "Tales of a DevOps"
pubDate: "Sep 30 2025"
tags: ["Container", "CI"]
coverImage: "./post_img38.png"
---

## The Beginning

A few months ago, I found myself embarking on a new CI/CD adventure: building C++ code with GitHub Actions. The challenge wasn’t compiling the code itself, but rather figuring out all the dependencies the project needed. Unsurprisingly, the `ubuntu:latest` image provided by GitHub was missing many of them. Some dependencies weren’t even available in the official repositories, which meant I had to manually compile them during the workflow—a true nightmare.

## First Solution (A Giant Mess)

My initial thought was, “No big deal, I’ll just install the libraries I need before compiling, and voilà, job done.” Well, that wasn’t such a brilliant idea. I had to manually compile `libboost`, which is notoriously time-consuming. The workflow ended up taking between one and two hours to complete—far too long and costly to be sustainable.

## Second Approach (The Successful One)

### A Bit of Context

In my previous post, I introduced **Docker**, docker-compose, and Dockerfiles—now industry standards for deploying services without the headaches of manual OS configuration. But containerization is much more than just a deployment tool. Containers have become essential for developers, providing consistent, isolated environments throughout the entire software development lifecycle.

With this in mind, I looked for a way to use pre-configured containers in my workflow. Thankfully, GitHub Actions supports running workflows inside custom containers, allowing us to define the exact environment our code needs. This not only saves time but also reduces costs, since we can reuse prebuilt Docker images with all the necessary tools already installed.

By leveraging containers, teams can ensure that code behaves identically on every machine—from a developer’s laptop to a production server. This consistency eliminates the infamous “it works on my machine” problem and makes onboarding new team members much smoother. Containers can also be versioned and shared, making it easy to roll back to a previous environment if something goes wrong or a dependency update causes issues.

### Why `ubuntu:latest` Isn’t Always the Best Choice

The code I was trying to ship required, as mentioned earlier, `libboost`—a heavy library to compile. However, that same library is natively shipped with AlmaLinux, the distribution I often use for my experiments. This led me to create a custom Dockerfile based on AlmaLinux to build the project.

Choosing the right base image for your container is crucial. While `ubuntu:latest` is a safe default, it may not always be the most efficient or secure option for your specific needs. Custom images let you tailor the environment to your project’s requirements, including only the necessary dependencies and tools. This not only speeds up your CI/CD pipelines but also reduces the attack surface by minimizing unnecessary packages.

## Using a Custom Container in GitHub Actions

If you want to leverage a custom container in your GitHub Actions workflow, you only need to add a few parameters to your workflow YAML file:

```yml
container:
    image: ${{ secrets.IMAGE_NAME }}
    credentials:
        username: ${{ github.actor }}
        password: ${{ secrets.PASSWORD }}
```

With this configuration, your workflow steps will execute inside the specified container. This approach ensures a consistent, reproducible environment for your builds and can save you significant time and effort in maintaining your CI/CD pipelines.

You can build and push your custom Docker image to a container registry such as Docker Hub or GitHub Container Registry. By referencing the image in your workflow, you guarantee that every run uses the exact same environment. This is especially useful for complex projects with many dependencies or for teams that need to enforce strict version control over their build tools.

Additionally, using containers in CI/CD workflows can help with security and compliance. You can scan your images for vulnerabilities before deploying them, and you can ensure that sensitive credentials are managed securely through GitHub Secrets.

## My Perspective and Experience

Looking back, adopting containers for CI/CD has been transformative. Early on, I struggled with excessive runtimes and costs, not to mention the complexity of the workflow itself. With the custom container I created, build times were cut by more than half, and the overall complexity decreased significantly. Now, I only need to maintain a single workflow and Dockerfile for any updates or changes.

## Conclusion

Containerization is a powerful tool not just for deployment, but also for building and testing your applications. By using custom Docker images in your CI/CD workflows, you can avoid repetitive setup tasks, ensure consistency across builds, and focus on delivering value through your code. If you haven’t tried this approach yet, I highly recommend giving it a shot in your next automation project!

Embracing containers in your development and CI/CD processes can lead to faster builds, fewer errors, and a more reliable software delivery pipeline. As the DevOps landscape continues to evolve, mastering containerization will become an increasingly valuable skill for developers and operations teams alike. In my experience, it’s an investment that pays off quickly—and one I wish I’d made even sooner.
