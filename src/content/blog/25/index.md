---
title: "GIT 101"
slug: "git-101"
description: "Short and simple git introduction"
pubDate: "Oct 8 2023"
tags: ["Git", "CI"]
coverImage: "./post_img25.webp"
---

# Basic Commands

### Create a new repository

Navigate in the directory where you want to init a new local git repo:

```bash
git init
```

### Adding a remote repo

To push you change on a remote server you have to add the origin:

```bash
git remote add origin <link to your repo>
```

## Work with files | Staging

Whenever you create new file or modify existing one you have to stage, commit and push; i'll show the way i use it (but there are more)

```bash
git add .
```

This command stage all the new/modified file in the working folder
Your can add only certain file specifing the file name

```bash
git add <filename>
```

Now we have staged file ready to be committed, you can prepare the commit with the commnad
```bash
git commit -m "useful message"
```

Is good practice writing useful commit message for tracking and rollbacking purpose

The modifies are now ready to be push, so let's push them on the remote

```bash
git push
```

## Branching

Branching is a very useful practice when you use a version-control system, i'll leave you a more detailed description on how it works [here](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell), in this artcle i will only show you the basic command to efficently manage this feature.

### Create a branch
Move in your working directory and type the command:
```bash
git checkout -b <branch name>
```
This instruction tell git to create a branch named ```<branch name>``` 

### Enter a branch that alredy exists
To work in a pre-existing branch you can use:
```bash
git checkout <branch name>
```

## Ending
For this post is all, maybe i will do a 102 post later this year.

#### Authors

- [@filippo-ferrando](https://www.github.com/filippo-ferrando)


