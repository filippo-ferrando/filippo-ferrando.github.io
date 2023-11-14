---
layout: "../../layouts/ProjectLayout.astro"
title: "Telegram and Homelab"
description: "Using telegram to gather info from my machines in my homelab"
pubDate: "Sep 18 2023"
updateDate: "Nov 14 2023"
heroImage: "/post_image/post_img25.jpg"
---

# Telegram controlled Homelab

### The problem 
Lately I've finally moved my rack to another floor in my house.
This on the one hand is more convenient in terms of space management, but brings a series of complications from the management and maintenance of the servers inside the rack; Furthermore, with the fact that I live (almost) permanently in Turin to pursue my university studies, finding a solution to take a quick look at the situation of the machines becomes an imperative.

### My solution
**Telegram.** <br>
Telegram is an application that makes remote communication between man and machine relatively easy thanks to bots. <br>
Using the Telegram API and a bit of python code I'm developing a script to be able to execute commands on the servers, check the status of the containers or simply see if all the hosts are up

### Remote integration
The Project is almost complete, in now in testing phase.
Basically all it does is send various types of command (ansible playbook) and send back server statuses ecc.
I used Ansible for basically all the "command sender" part, it makes easier to send complete playbook to different host starting from a single node; then i had to code the custom command runner (so a single command not in a playbook) and i also used ansible because i didn't want to use different kind of comunication protocol.

Other than have a remote "control" of physical machines i also added a docker support (even this is made with ansible) needed in a homelab to see the status of some container in my home servers.

<br>
<br>
You can see the code written so far on my [GitHub repository](https://github.com/filippo-ferrando/telegram-homelab-remote) dedicated to this project. Any kind of contribution is welcome!


#### Authors

- [@filippo-ferrando](https://www.github.com/filippo-ferrando)