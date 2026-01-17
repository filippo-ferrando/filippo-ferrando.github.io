---
title: "Homelabbing with Docker Swarm"
slug: "homabbling-with-docker-swarm"
description: "Deploy services using Docker Swarm for a robust homelab setup."
pubDate: "Jan 17 2026"
tags: ["Selfhosted"]
coverImage: "./post_img40.jpg"
---

# Homelabbing with Docker Swarm 🐳

In December 2025 I started experimenting with **Docker Swarm** to manage my homelab services. But first, let’s understand what Docker Swarm actually is.

## Docker Swarm?

Swarm is Docker’s native clustering and orchestration solution (kind of like **Kubernetes**, but much simpler and lighter). It allows you to create and manage a cluster of Docker nodes as a single virtual system. This makes it easier to deploy, scale, and manage containerized applications across multiple hosts.

One really mind-blowing feature of Docker Swarm is mesh networking. It allows containers running on different nodes to communicate with each other seamlessly, as if they were on the same host. This is achieved through an overlay network that spans all nodes in the swarm, so each service can be accessed from any node in the cluster (on the port exposed by the service).

## Starting point

In my setup I have 3 nodes: a Jetson Nano (my manager node) and 2 worker nodes (an i7-4790 and a 10th-gen i5). All nodes are running AlmaLinux 9 with Docker installed.

To have a web dashboard, I set up [Portainer](https://www.portainer.io/) on a different server (my main network router) and created a Portainer agent service that runs on each node of the swarm. This is not necessary at all, but it gives a nice web UI to manage everything.

After initializing the swarm on the manager node and joining the worker nodes, I was ready to deploy services.

I set up different labels for each node to have more **granularity** in service deployment. For example, I have a HandBrake service that requires quite a lot of CPU power, so deploying it on the Jetson Nano would be pointless. I labeled the worker nodes with `handbrake=true` and deployed the service only on those nodes.

I don’t really leverage the **high-availability** features of Docker Swarm since my homelab is not that critical, but it’s nice to have the option to redeploy services on other nodes in case of failure. Also, most of my services are stateful (like Nextcloud, Home Assistant, etc.), so true high availability is not really an option anyway.

## Storage configuration

Besides the main router (an old Lenovo office PC running OPNsense) and the swarm hosts, I have a dedicated storage server (another i7-4790 with less RAM) running AlmaLinux, configured with NFS shares for each folder I want to share between the swarm nodes.

Obviously, this is not the best storage setup in the world, but it works fine for my needs.

I tried configuring GlusterFS many months ago, but my network was not powerful enough to handle the overhead of a distributed filesystem. So I opted for a simple NFS setup instead.

Each swarm node mounts the NFS shares (via an entry in `/etc/fstab`) at the same path. This way, when deploying services, I just have to mount the correct path inside the container. This allows me to write generic Docker Compose files that can be deployed on any node without changing volume paths.

### And the backups?

Yeah… this has been my headache for a while.

Since a distributed filesystem is not a viable option for me, I had to find a way to back up my important data (I don’t care if I lose movies or TV shows, but my Git repositories and Nextcloud data are critical).

The solution I followed is really simple and pretty primitive, but it works fine for my needs: [Syncthing](https://syncthing.net/).

Two nodes in my homelab have some storage capabilities (the router has a 2 TB disk, and one worker node has a RAID 5 array with 1.5 TB of usable storage). I installed Syncthing on those nodes and configured it to sync the data served over NFS from the storage server to them.

Syncthing allows nodes to be configured as push, pull, or both. My NAS is the only push node, while the other two nodes are pull-only. This way I have a redundant copy of my most important data in case of disk failure or other issues on the storage server.

It’s not the most elegant solution, but it works fairly well for my setup. Since it’s a synchronization solution and not a real backup solution, I can’t easily recover accidentally deleted files, but at least I have copies of my data on different nodes. (Syncthing does support file versioning, but I haven’t looked into that yet.)

## Reverse proxy (?)

At this stage, the swarm is still pretty new in my homelab setup, so I’m still using [Nginx Proxy Manager](https://nginxproxymanager.com/) (a container hosted on my router machine) to manage all my services with a custom domain and SSL certificates.

My home network **doesn’t** provide a public IP (or rather is costs and additional 10 euros 😒), so I mainly use the reverse proxy to obtain SSL certificates via a DNS challenge (using Dynu DDNS pointing to the IP address of the reverse proxy).

In the near future, I want to keep NPM for my _not-on-swarm_ services, but I also want to add a Traefik instance directly into the swarm to automatically manage services deployed there. This would also allow me to avoid exposing ports on the swarm nodes, since all traffic would be routed through the reverse proxy.

I know this might seem a bit overkill for a homelab, but all of this is just **for fun and learning** how to manage more complex clustering solutions. Many of the things I host and set up are not really necessary for my daily usage.

## Ok, but which services are you running on the swarm?

At the moment, I have several services running on my swarm:

- [HandBrake](https://handbrake.fr/) (1 replica) for video transcoding tasks
- [Jellyfin](https://jellyfin.org/) (1 replica) to manage my movie and TV show library
- [Forgejo](https://forgejo.org/) (1 replica) to host my private Git repositories
- [Bytestash](https://github.com/jordan-dalby/ByteStash) (1 replica) as a private pastebin-like service

In the near future, I want to migrate my [Nextcloud](https://nextcloud.com/) instance (Nextcloud, Redis, PostgreSQL, Collabora) into the swarm (still with only 1 replica per service). I also want to experiment with [Garage S3](https://garagehq.deuxfleurs.fr/) to play around with S3-compatible object storage in a cluster. And, as mentioned before, I want to set up Traefik as the reverse proxy for swarm services.

## My experience so far

I’ve found Docker Swarm to be a much better solution for my homelab compared to Kubernetes. It’s more lightweight, easier to manage, and the learning curve is not that steep. The documentation is also pretty good. Most of the features provided by Kubernetes are simply not necessary in a homelab environment, so Swarm fits my needs perfectly.

One of the biggest downsides I’ve encountered is the difficulty of running local services on swarm nodes. Since the swarm manager controls service deployment, worker nodes are not really supposed to run standalone containers. This can be annoying if you want to run services that are not designed for Swarm (like Stirling PDF).

Other than that, my experience with Docker Swarm has been very positive so far, and I plan to keep using it for my homelab... maybe with a different storage solution in the future.

Stay tuned for more updates on my homelab journey!

