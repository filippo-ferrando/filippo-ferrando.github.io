---
title: "Selfhosting #4"
slug: "selfhosting-4"
description: "Series of n articles in which I will show my homelab, from the hardware to the software."
tags: ["Selfhosted", "Hardware", "VPN"]
pubDate: "Jan 29 2023"
coverImage: "./post_img8.webp"
---
# Selfhosting | My experience pt.4

Series of n articles in which I will show my homelab, from the hardware to the software.

## How i connect from external networks

Today we talk about Twingate!
Twingate is my service of choice for connection remotly to my homelab.

There are many services to be able to connect remotely, from nginx reverse proxy to wireguard, all of these in one way or another can be used to connect remotely to your LAN.

## Why?

This question is very easily answered by putting it the other way around, why shouldn't I be able to access my containers remotely? These are private, used only by me and hardly down, so I see no reason not to use these services outside the home as well.

[This](https://www.twingate.com/) is the twingate site where you can find installation and operation information, i'll give you also a list of alternatives to this:
- [NGINX](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/)
- [Wireguard](https://www.wireguard.com/)
- [OpenVPN](https://openvpn.net/)
- [Tor Hidden Services](https://community.torproject.org/onion-services/overview/)

#### Authors

- [@filippo-ferrando](https://www.github.com/filippo-ferrando)
