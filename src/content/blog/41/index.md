---
title: "Nimbus: file tranfer for poor connections"
slug: "nimbus-parallel-file-transfer"
description: "Move files relialy over poor connections with SSH"
pubDate: "Jan 30 2026"
tags: ["Bash", "Networking", "SSH", "File Transfer"]
coverImage: "./post_img41.png"
---

# Nimbus: File Transfer for Poor Connections

Working in a field environment often means dealing with unreliable network connections. Transferring large files over SSH can be a frustrating experience when connections drop or become unstable.
In my work life, i had countless times where i needed to transfer big files from and to servers were the only available protocol was SSH, and the connection was not _that_ stable, so i writed `nimbus`, a simple bash script that allows you to transfer files in parallel with chunking and resuming capabilities.

## Some technical details

`nimbus` works by compressing the file on-the-fly, splitting it into n chunks, and transfer each chunk in parrallel using `scp`. If the connection drops, it can resume the transfer from where it left off by checking which chunks have already been transferred.
Moreover, `nimbus` uses controls each chunk by hashing it with `sha256sum`, so if a chunk is corrupted during transfer, it will be re-transferred.

It works in this scenarios:

- local to remote transfer
- remote to local transfer
- local to local transfer (for testing purposes)

One nice feature of `nimbus` is that it asks only once for the SSH password, even when transferring multiple chunks in parallel.

Feel free to check the code and give it a try! You can find it in the project's tab of my [website](https://filippo-ferrando.github.io/projects/) or directly on [GitHub](https://github.com/filippo-ferrando/nimbus)
