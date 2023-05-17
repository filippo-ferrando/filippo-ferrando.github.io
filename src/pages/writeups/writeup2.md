---
layout: "../../layouts/ProjectLayout.astro"
title: "IOLI CrackMe"
description: "Wrtieup from lv.0 to lv.2"
pubDate: "Mag 17 2023"
heroImage: "/writeup_image/wu_img1.png"
---

## Level 0x00
The first level is quite simple, i used Ghidra to decompile the executable file, then find the main function
```c
int __cdecl _main(int _Argc,char **_Argv,char **_Env)

{
  int iVar1;
  size_t in_stack_ffffffc0;
  char local_1c [24];
  
  __alloca(in_stack_ffffffc0);
  ___main();
  _printf("IOLI Crackme Level 0x00\n");
  _printf("Password: ");
  _scanf("%s",local_1c);
  iVar1 = _strcmp(local_1c,"250382");
  if (iVar1 == 0) {
    _printf("Password OK :)\n");
  }
  else {
    _printf("Invalid Password!\n");
  }
  return 0;
}
```
We can clearly see that the string that the program take in input (```local_1c```) is being compared to "250382" so if we input that number the crackme is solved

## Level 0x01
The second level is very similar to the first, this is the script:
```c
int __cdecl _main(int _Argc,char **_Argv,char **_Env)

{
  size_t in_stack_ffffffe0;
  int local_8;
  
  __alloca(in_stack_ffffffe0);
  ___main();
  _printf("IOLI Crackme Level 0x01\n");
  _printf("Password: ");
  _scanf("%d",&local_8);
  if (local_8 == 0x149a) {
    _printf("Password OK :)\n");
  }
  else {
    _printf("Invalid Password!\n");
  }
  return 0;
}
```
So we can see that it does the same exact compare on the inputted value, but this time is not comparing with a string but with a hex value, we can simply convert it in decimal
```
0x149a = 5274
```
And that's the solution

## Level 0x02
The third level is equivalent to the second, only with a different control value
```c
int __cdecl _main(int _Argc,char **_Argv,char **_Env)

{
  size_t in_stack_ffffffe0;
  int local_8;
  
  __alloca(in_stack_ffffffe0);
  ___main();
  _printf("IOLI Crackme Level 0x02\n");
  _printf("Password: ");
  _scanf("%d",&local_8);
  if (local_8 == 0x52b24) {
    _printf("Password OK :)\n");
  }
  else {
    _printf("Invalid Password!\n");
  }
  return 0;
}
```
With the same procedure we can convert ```0x52b25``` in decimal ```338724``` and thats the solution right here
