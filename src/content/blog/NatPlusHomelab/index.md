---
title: "NAT + Homelab?"
slug: "homelab-tailscale-integration"
description: "Access to your sevices even on heavily natted network"
pubDate: "Nov 11 2025"
tags: ["Networking", "Selfhosted"]
coverImage: "./post_img39.png"
---

## Tailscale + Homelab?

For a long time i accessed my local services using Twingate, with it's pros and cons, it's a very straightforward solution, but it has some limitations, like the free plan only allows 3 devices, and the performance is not the best.
Though a collegue a discovered Tailscale, and i was amazed by it's simplicity and performance, so i decided to give it a try.
The limitations of the free plan are accettable for my use case and the idea of using Wireguard as the underlying protocol is very appealing, i like the idea to create a mesh network in my homelab, in case one of my devices goes down, i can still access my services from other devices.

## Setup

In my homelab i have multiple physical servers (all old x64 machine and a jetson nano) running AlmaLinux with my docker instances, services, ecc.
I've installed Tailscale via the official repo, following the [official guide](https://tailscale.com/kb/1347/installation) then setup my tailnet making my servers "expose" my lan address to be able to access all my hosts and services from outside my home.

I also installed Tailscale on a raspberry pi zero w (DietPI) to have a "deployable" node to use when i'm out, this way i can expose the lan were the pi is attached to my tailnet, this way i can use it like a phisical bridge to access resource were i need.

## Really cool feature

After a couple of days of trying things, my eyes fell for a really interesting feature, the "funnel" option, this allow you to expose a local service to the internet via a Tailscale node, this is really useful when you want to expose a service that is behind a NAT or firewall, without the need to open ports or configure your router, or if you have a heavy NATted network like myself.
This is super cool then you want to share files, projects or beta with friends or collegues (with the full control, the services have a manual trigger to start the funnel, so you can decide when to expose the service).
