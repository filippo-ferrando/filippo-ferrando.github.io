---
layout: "../../layouts/ProjectLayout.astro"
title: "Image steganography"
description: "Image steganography implementation in Python3"
pubDate: "Jan 20 2023"
heroImage: "/project_image/project_img5.jpeg"
badge: "CS"
---
# Image steganography in python

## What is steganography
Image Steganography is the process of hiding information which can be text, image or video inside a cover image. The secret information is hidden in a way that it not visible to the human eyes.

## How?
The intention is to hide any kind of data (in this demonstration we are using text) in a picture using the fact that a phot is only an interpretation of pixels (3-value type of data)

## Example
Suppose that the message we want to hide is "Hello", since the message made of 5 byte, the pixels required for the encoding are 3·5=15, so a 4x4 image will be good to hide that kind of information

```
H = 72 = 01001000
e = 101 = 01100101
l = 108 = 01101100
o = 111 = 01101111
```
Now take a random 4x3 image made like this (total of 12 pixels):
```
[(86,23,54),(12,53,85),(132,22,210),(61,19,249),
 (60,81,40),(37,195,64),(191,129,188),(151,130,63),
 (120,3,92),(219,175,215),(132,102,101),(146,248,141),
 (107,230,44),(224,120,196),(160,228,212),(94,215,135)]
```
Now, to encode the message pick the binary encoding of the letter and if the number is 1 change the number to odd, if its a 0 change the number to an even
Let's make an example with the H:

- Take the binary in group of the letter ('H' in this case): ```01001000```
- Pick the first 3 pixels of the image: ```(86,23,54),(12,53,85),(132,22,210)```
- Create the new pixels with the method descripted:
```
(86,23,54),(12,53,84),(132,22,210)
```

** Do the same thing for all the letter **

```
[(86,23,54),(12,53,84),(132,22,210),(61,19,248),
 (60,81,40),(37,194,63),(191,128,187),(151,130,62),
 (120,3,91),(218,175,215),(132,102,100),(145,247,140),
 (107,229,43),(223,120,196),(160,228,212),(94,215,135)]
```

## How to decode the data?
When the image is put in the decoder, it will controll every pixel, if the number is odd then it's a 1, if it's even a 0, then all will be reconverted from binary to normal text


### Before encoding 'hello'
![img before enc](https://github.com/filippo-ferrando/image-steganography/blob/main/image.png?raw=true)

### Afeter encoding 'hello'
![img after enc](https://github.com/filippo-ferrando/image-steganography/blob/main/image_hello_enc.png?raw=true)

*** You can find all the code in my repo! ***