---
title: "CFS vs SCHED_DEADLINE"
slug: "cfs-vs-sched-deadline"
description: "Technical overview over linux scheduler"
pubDate: "Nov 26 2024"
tags: ["Linux"]
coverImage: "./post_img33.webp"
---

## CFS

When we talk about schedulers, the default choice for non-real-time processes in most Linux distributions is the CFS (Completely Fair Scheduler). 
Its operations are based on the concept of fairness, aiming to allocate CPU time to each process proportionally to their priorities (nice value).

### Operating Principles

- **Balancing CPU Usage**: CFS maintains an "ideal view" where each process receives its fair share of CPU time. It uses a red-black tree (an ordered data structure) to organize processes based on their accumulated virtual runtime.
- **Virtual Runtime**: This time accounts for priorities; a process with higher priority increments its virtual runtime more slowly, thereby receiving more CPU time.
- **Continuous Scheduling**: CFS avoids rigid interruptions, distributing available time among processes without fixed time slices, instead aiming for theoretical fairness.

#### Best Cases

- **Balanced Workloads**:
    - When all processes have similar priorities and moderate tasks, CFS performs optimally.
    - Example: Five processes with identical priorities performing lightweight operations like file read/write. CFS distributes CPU time fairly and smoothly.

- **Interactivity**:
    - For interactive applications like a text editor or a web browser, CFS excels by prioritizing short processes waiting for user input, ensuring a quick response.

#### Worst Cases

- **Processes with Large Priority Disparities**:
    - Example: A low-priority process (nice +19) running alongside a high-priority process (nice -20). The low-priority process may suffer from starvation, receiving minimal CPU time.
    - Applications: A background backup process might take much longer than expected if a high-priority process monopolizes the CPU.

- **Real-Time Workloads**:
    - CFS is not designed to handle strict deadlines.
    - Example: An industrial robot control system. Even with high-priority processes, CFS cannot guarantee task completion within precise deadlines.

- **High Process Count**:
    - With thousands of active processes, managing the red-black tree can introduce overhead, reducing overall efficiency.

### Nicing

Nicing is the mechanism Linux uses to influence a process's priority in the operating system. It is based on a value called the nice value, which represents how "kind" a process is in sharing CPU resources with others.

#### How It Works

- **Nice Value Range**:
    - The nice value ranges from -20 (highest priority) to +19 (lowest priority).
    - By default, a process starts with a nice value of 0, indicating normal priority.

- **Impact of Nice Value**:
    - Processes with a lower nice value get more CPU time.
    - Processes with a higher nice value receive less CPU time, yielding resources to higher-priority processes.

- **Effect on Virtual Runtime**:
    - CFS uses the nice value to adjust the rate of virtual runtime progression: processes with low nice values increment virtual runtime more slowly, gaining more CPU time, and vice versa.

#### Interacting with the Nice Value

- **Initial Assignment**: You can set a process's nice value when launching it with the command:

    ```bash
    nice -n <nice_value> <command>
    ```

    Example: `nice -n 10 ./my_program`

- **Dynamic Modification**: To change the nice value of an already running process, use:

    ```bash
    renice <nice_value> -p <PID>
    ```

    Example: renice -5 -p 1234 (decreases the nice value, increasing priority).

- **Practical Examples**

    - Background Backups: Assign a high nice value (e.g., +19) to a backup process to ensure it has low priority and does not interfere with other activities.
    - Critical Applications: Assign a low nice value (e.g., -10) to important processes like a web server to improve their responsiveness.

nicing is a simple yet powerful system for controlling how processes share CPU time, adapting to the priority needs of various applications.

### In Summary

CFS is excellent for general usage scenarios that require high interactivity and fairness among processes. It is well-suited for daily use but exhibits clear limitations when handling a large number of processes or processes with significant priority disparities.

## SCHED_DEADLINE

SCHED_DEADLINE is a scheduler designed for time-critical tasks. Based on the EDF (Earliest Deadline First) model, it provides precise temporal management, ensuring processes meet fixed deadlines.

### Operating Principles

- **Key Attributes**: Each process scheduled with SCHED_DEADLINE requires three main parameters:
    - Runtime (R): The maximum CPU time the process can use within a period.
    - Deadline (D): The time by which the process must complete its execution.
    - Period (T): The interval within which the process is repeatedly activated (usually, D ≤ T).

    In short: the process requests R units of CPU time within a window of length D, repeating every T.

- **Dynamic Priority**:
    - Processes are scheduled based on the nearest deadline. The process with the most imminent deadline has the highest priority.
    - The algorithm ensures deadlines are met, provided the CPU is not overloaded (i.e., the sum of R/T for all processes is ≤ 1).

-** Preemption**:
    - SCHED_DEADLINE is preemptive: a process with a closer deadline can interrupt the currently running process.

#### Best Cases

- **Real-Time Applications with Predictable Deadlines**:
    - Example: An industrial robot control system requiring motion sequences every 10 ms.
    - Why It’s Optimal: SCHED_DEADLINE ensures each movement is completed within the specified deadline, meeting critical timing requirements.

- **Multimedia and Streaming**:
    - Example: Video or audio playback requiring periodic decoding (e.g., every 20 ms).
    - Advantage: Ensures frames or audio packets are processed on time, avoiding interruptions or latency.

#### Worst Cases

- **CPU Overload**:
    - Example: Three processes each request 50% of the CPU (sum = 150%). In this case, it is impossible to satisfy all requests, and some processes will miss their deadlines.
    - Impact: When the system is overloaded, there is no guarantee that processes will meet their timing constraints.

- **Unpredictable or Bursty Processes**:
    - Example: A web server handling sporadic requests where defining fixed runtime and period is difficult.
    - Problem: SCHED_DEADLINE is not designed for non-deterministic workloads; such processes may be better handled by CFS.

- **Competition with Non-SCHED_DEADLINE Processes**:
    - Example: A backup process (handled by CFS) attempting intensive operations while SCHED_DEADLINE processes are active.
    - Impact: SCHED_DEADLINE processes monopolize the CPU to meet deadlines, causing starvation in non-real-time processes.

### Parameterization

In SCHED_DEADLINE, there is no tool like nice, but runtime, deadline, and period parameters can be adjusted for each process.
Configuring SCHED_DEADLINE

These parameters can be configured using:

- **`chrt`: Command-Line Tool**:

    chrt is used to manage and set scheduling policies for processes in Linux, including SCHED_DEADLINE.

    **Example**:

    To set a process with SCHED_DEADLINE:

    ```bash
    sudo chrt --deadline <period> --runtime <runtime> <command>
    ```

    Parameters:

        --deadline: Specifies the deadline (e.g., 10 ms).
        --runtime: Specifies the maximum CPU time (e.g., 2 ms).
        <command>: The process to run.

    **Full Example**:

    ```bash
    sudo chrt --deadline 10000000 --runtime 2000000 ./my_program
    ```

    This assigns 2 ms of CPU time within a 10 ms deadline.

    **Limitations of `chrt`**: chrt is useful for configuring new processes but cannot dynamically modify parameters of an already running process.

- **`sched_setattr` (Linux API)**:

    For greater flexibility, use the sched_setattr API in C. This allows configuration and modification of SCHED_DEADLINE parameters for a running process.

    Example:
    ```c
    #include <linux/sched.h>
    #include <sys/syscall.h>
    #include <unistd.h>

    struct sched_attr {
        uint32_t size;
        uint32_t sched_policy;
        uint64_t sched_flags;
        uint64_t sched_runtime;
        uint64_t sched_deadline;
        uint64_t sched_period;
    };

    int set_sched_deadline(pid_t pid, uint64_t runtime, uint64_t deadline, uint64_t period) {
        struct sched_attr attr = {0};
        attr.size = sizeof(attr);
        attr.sched_policy = SCHED_DEADLINE;
        attr.sched_runtime = runtime;
        attr.sched_deadline = deadline;
        attr.sched_period = period;

        return syscall(SYS_sched_setattr, pid, &attr, 0);
    }
    ```

    With this C function, you can modify the parameters of a specific process programmatically.

- **Advanced Tools**:

    Some Linux distributions offer tools (e.g., via `sysfs` or `cgroups`) to configure SCHED_DEADLINE in more complex environments, such as containers or embedded systems.

#### Comparison with Nice

Unlike nice, which simply modifies a numeric value to influence relative priority, SCHED_DEADLINE requires explicit configuration of temporal parameters, as it is designed for applications with precise real-time constraints. While less straightforward, tools like chrt and the sched_setattr API provide powerful and detailed control.

### In Summary

SCHED_DEADLINE excels in real-time applications with predictable and strictly defined deadlines. However, its performance deteriorates under CPU overload or workloads that are hard to model with fixed timing constraints. For such cases, schedulers like CFS are typically more appropriate.

