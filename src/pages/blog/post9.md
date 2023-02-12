---
layout: "../../layouts/ProjectLayout.astro"
title: "Funny sorting algorithm"
description: "Stupid post for a stupid algorithm"
pubDate: "Feb 12 2023"
heroImage: "/post_image/post_img9.png"
---

# Bogosort
## The most useless and stupid sorting algorithm

### How it works?

Well, let's say that the basic operation of this algorithm is really very simple, this checks an array asking each time if it is sorted, if it is not, the array is randomized and the cycle repeats.

Unlike all the other algorithms this one doesn't make any sense.

### Time of execution

This sorting algorithm is probabilistic in nature. If all elements to be sorted are different, the complexity is: ```O(n × n!)```

The reason why the algorithm almost certainly arrives at a conclusion is explained by the [tireless monkey theorem](https://en.wikipedia.org/wiki/Infinite_monkey_theorem): with each attempt there is a probability of getting the sort right, so given an unlimited number of attempts, it should eventually succeed.

Almost certainly, here, it is a precise mathematical term.

### Implementation

This is a simple Python3 implement of this kind of algo

```python
import random

def bogo_sort(a):
    i = 0
    while not is_sorted(a):
        print(f"Iteration {i}: {a}")
        random.shuffle(a)
        i += 1
    return a

def is_sorted(a):
    for i in range(len(a) - 1):
        if a[i] > a[i + 1]:
            return False
    return True

def main():
    a = []
    l = input("Insert array length: ")
    for i in range(int(l)):
        a.append(random.randint(0, 1000))
    bogo_sort(a)
    print(f"Final iteration: {a}")

if __name__ == "__main__":
    main()
```

### Visualize Execution

<iframe width="560" height="315" src="https://www.youtube.com/embed/DaPJkYo2quc" title="Bogo Sort algo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

#### Authors

- [@filippo-ferrando](https://www.github.com/filippo-ferrando)