---
layout: "../../layouts/ProjectLayout.astro"
title: "My house offline guestbook"
description: "Basic Guestbook with flask"
pubDate: "Feb 12 2023"
heroImage: "/project_image/project_img6.jpg"
badge: "House"
---

# Guestbook with Python3 | Flask

This is just a little poorly written experiment of what could be guest book visiting my house in Turin

### Features

This program allows you to leave a name, a comment and above all a photo that the program will render on the homepage of the site.

At the moment the html file is absolutely rubbish, the implementation has only the jinja2 part needed to send data to the webserver, the UI is oversimplistic and visibly awful.

### Repo

Inside this [repo](https://github.com/filippo-ferrando/quelli-silenziosi) you can find all the code used, from the webserver to the HTML

#### Structure
```bash
.
├── static
│   └── img
│       └── images..
├── templates
│   └── index.html
├── app.py
└── entries.txt
```
