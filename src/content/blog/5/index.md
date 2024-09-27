---
title: "Selfhosting #1"
slug: "selfhosting-1"
description: "Series of n articles in which I will show my homelab, from the hardware to the software."
tags: ["Selfhosted", "Hardware"]
pubDate: "Jan 22 2023"
coverImage: "./post_img5.jpg"
---
# Selfhosting | My experience pt.1

Series of n articles in which I will show my homelab, from the hardware to the software.

## Hardware

When I started this project, so almost 5 years ago, I had almost no components at my disposal, so my rack consisted of an aluminum cabinet from IKEA where I had housed a very old desktop computer (with an Intel Celeron and 2gb RAM) and a 10/100 switch salvaged from a landfill.

Over time I have salvaged here and there almost everything I have now, starting with the rack cabinet that was salvaged thanks to a small company in the place where I live that was getting rid of it, an HP gigabit switch that was given up for broken (actually it was just to be cleaned), a desktop computer with an i7-4790 and 16gb of RAM that may not sound like much, but for now it performs excellently everything I need to do with relatively low power consumption.

To complete the setup I included a Raspberry Pi that acts as a sd-blocker with Pi-Hole and could not miss a Mikrotik hAp to generate a secondary wifi network starting from the main one at my home

In short the components are these:
 - Raspberry pi 3b
 - Mikrotik hAp
 - Server (Intel i7 4790, 16gbram, 4tb main raid, 1tb second raid)
 - Hp ProCruve 2510 gigabit switch
 - 3com 10/100 switch
 - tp-link 5 port gigabit switch
 - 24 port patch panel
 - 2x 200 Aerocool fan
 - Aliexpress 12v fan controller


I leave some pictures of how it came to the whole

![front](https://gist.githubusercontent.com/filippo-ferrando/aa4de30d03f228cd72f3f62ac6a56abf/raw/492866425e8da4c0833e9df5a30797803ebd391c/front.jpg)

![rear](https://gist.githubusercontent.com/filippo-ferrando/aa4de30d03f228cd72f3f62ac6a56abf/raw/492866425e8da4c0833e9df5a30797803ebd391c/rear.jpg)

![inside-1](https://gist.githubusercontent.com/filippo-ferrando/aa4de30d03f228cd72f3f62ac6a56abf/raw/492866425e8da4c0833e9df5a30797803ebd391c/inside-1.jpg)

![inside-2](https://gist.githubusercontent.com/filippo-ferrando/aa4de30d03f228cd72f3f62ac6a56abf/raw/492866425e8da4c0833e9df5a30797803ebd391c/inside-2.jpg)

I forgot to mention the 2 cheapest 200 fans on amazon and a fan-controller picked up from aliexpress to provide some air recirculation (especially for the switches)


### Coming up next

In the next part I will appronfond everything that is installed on my main server

#### Authors

- [@filippo-ferrando](https://www.github.com/filippo-ferrando)
