---
title: "Selfhosting #3"
slug: "selfhosting-3"
description: "Series of n articles in which I will show my homelab, from the hardware to the software."
tags: ["Selfhosted", "RaspberryPI"]
pubDate: "Jan 24 2023"
coverImage: "./post_img7.png"
---
# Selfhosting | My experience pt.3

Series of n articles in which I will show my homelab, from the hardware to the software.

## Raspberry Pi
My raspberry is my always-on machine, it host a Pi-hole instance and a Pi.alert.

But why i use a secondary pc for this service? It's really simple, consumptions!

That's right, my server isn't powered on all the time due to it's electrical consumption, it is programmed to turn itself on at 10 Am and poweroff at 1 Am, mainly beacuse i don't really need it in that moment of the day.
But some service requires to stay active 24/7, like the DNS (pi-hole) and the network scanner (pi alert), so i had to use a separate machine that only consumes few watts of power.

### Services
[Pi-hole](https://pi-hole.net/): network-wide ad-blocker
[Pi-alert](https://github.com/pucherot/Pi.Alert): network devices scanner


### Coming up next

In the next episode i will explain how i use my homelab services from outside my home-network

#### Authors

- [@filippo-ferrando](https://www.github.com/filippo-ferrando)
