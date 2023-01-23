---
layout: "../../layouts/ProjectLayout.astro"
title: "Selfhosting"
description: "Series of n articles in which I will show my homelab, from the hardware to the software."
pubDate: "Jan 23 2023"
heroImage: "/post_image/post_img6.jpg"
---
# Selfhosting | My experience pt.2

Series of n articles in which I will show my homelab, from the hardware to the software.

## Software
As i mentioned in the previos article, i have two machines in my homelab, a proper pc and a Raspberry pi (which we'll going to see in the next article).

I wnat to show you the various container i use on my system and the proper OS i've instlled on this particular machine

### OMV
OpenMediaVault is the distro that perfectly suits my need as it has a great disk management UI that permit to create create, delete, mount and dismount all the file system present, it can also create and manage RAIDS very well and a lot of other things (you can find out on they're [website](link)).

For OMV exist a package called [omv-extras](link) that enable on-UI containerizing feature like a docker installer, a portainer installer to get started with cointainers in a matter of few minutes.

Why i opted for this distro? I finded it more confortable for managing all the disks i have putted inside this machines, also it is a straight debian-based distro, so it should be more stable than other like Ubuntu or other alternative.

### Containers
This machines serves 2 different scopes:
1. NAS
2. Homelab

Given that i don't like to fuck up things directly on the base system, i use containers to do experiments os host web-app as they don't require to install nothing on the base os except for docker.

So witch conteiners i'm running right now? I'll make a list with links and an a brief explanation for you:
- [Heimdall](https://heimdall.site/) My favourite dashboard
- [Emby](https://emby.media/) Media server A.K.A selfhosted netflix
- [code-server](https://code.visualstudio.com/docs/remote/vscode-server) Instance of a containerized Vs-code accesible from the web
- [uptime-kuma](https://uptime.kuma.pet/) Monitoring tool
- [portainer](https://www.portainer.io/) Container manager
- [yatch](https://yacht.sh/) Another (faster, but with less feature) container manager 
- [fresh-rss](https://freshrss.org/) rss news aggregator
- [paperless-ng](https://github.com/jonaswinkler/paperless-ng)
- [taisun](https://www.taisun.io/) Docker server management
- [kasm](https://www.kasmweb.com/) Streaming containerized apps and desktops to end-users

### Coming up next

In the next part we will explore what's on my Raspberry Pi

#### Authors

- [@filippo-ferrando](https://www.github.com/filippo-ferrando)
