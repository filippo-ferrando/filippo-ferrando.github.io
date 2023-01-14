---
layout: "../../layouts/ProjectLayout.astro"
title: "Indoor locator via AI and WiFi"
description: "Final school project"
pubDate: "Jan 14 2023"
heroImage: "/project_image/project_img4.png"
badge: "School"
---
# Indoor locator via wifi

Our team is developing a robot🤖 that, through the **triangulation** 📐 of the different WiFi networks of our school, is able to **orient** itself within the school buildings 🏫.

### If you want to know the team go [here](https://github.com/cassis-squad/about-us)!

## Roadmap 🗺️

 1. Figure out the problems with the different script
 2. Unify all the single script in one program
 3. Test the final result
 4. Go rock!

## What have we done ↗️

 - We can now succesfully see the wifi positioning system working (also thanks to [@Andrea-Tomatis](https://github.com/Andrea-Tomatis))
 - The Lidarr is working (we are struggling to manage the amount of data that we receive)
 - Raspberry and Arduino work prefectly together (thanks to [@samu4ne](https://github.com/samu4ne))

## Actual Result 🔝

At the present time we have created a system to integrate the Lidarr into the movement system, the communication between Arduino and Raspberry Pi and the recognition of the area through a machine learing model.

## Technologies Used 🖥️

The main technologies we will use are **lidarr** for mapping the environment and managing the movements of the robot in small spaces and **wifi** for triangulating the position inside the internal rooms.
On the software side we will use **Python** as a programming language and various libraries to be able to communicate with everything; then we will use **C** for programming an Arduino.
On the hardware side, a **Raspberry Pi** will be used as the main brain and an **Arduino Uno** for managing the motors. 
