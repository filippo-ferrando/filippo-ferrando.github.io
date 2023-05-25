---
layout: "../../layouts/ProjectLayout.astro"
title: "IOLI CrackMe"
description: "Wrtieup from lv.0 to lv.6"
pubDate: "May 17 2023"
updateDate: "May 25 2023"
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

## Level 0x03
The fourth level use a different function to confront the input, let's take a look:

**main function**
```c
int __cdecl _main(int _Argc,char **_Argv,char **_Env)

{
  size_t in_stack_ffffffe0;
  int local_8;
  
  __alloca(in_stack_ffffffe0);
  ___main();
  _printf("IOLI Crackme Level 0x03\n");
  _printf("Password: ");
  _scanf("%d",&local_8);
  _test(local_8,0x52b24);
  return 0;
}
```
We see the ```test``` function which take the input, and a string; this is ```test```:
```c
void __cdecl _test(int param_1,int param_2)

{
  if (param_1 == param_2) {
    _shift("Sdvvzrug#RN$$$#=,");
  }
  else {
    _shift("Lqydolg#Sdvvzrug$");
  }
  return;
}
```
Also this function uses another procedure called ```shift```, this is it:
```c
void __cdecl _shift(char *param_1)

{
  size_t sVar1;
  uint local_80;
  char local_7c [120];
  
  local_80 = 0;
  while( true ) {
    sVar1 = _strlen(param_1);
    if (sVar1 <= local_80) break;
    local_7c[local_80] = param_1[local_80] + -3;
    local_80 = local_80 + 1;
  }
  local_7c[local_80] = '\0';
  _printf("%s\n",local_7c);
  return;
}
```
If we take a closer look, we can see that in the main function the confronted value is the same as the Level 0x02, the differnce here is how the check is done in the ```_test``` function.
So we can put the same passowrd as Level 0x02 and the solution is founded!

## Level 0x04
In the fifth level we can see an actual change of the check function, let's take a look on the ```main``` to see this:
```c
int __cdecl _main(int _Argc,char **_Argv,char **_Env)

{
  size_t in_stack_ffffff60;
  char local_7c [120];
  
  __alloca(in_stack_ffffff60);
  ___main();
  _printf("IOLI Crackme Level 0x04\n");
  _printf("Password: ");
  _scanf("%s",local_7c);
  _check(local_7c);
  return 0;
}
```
You can clearly see the ```_check``` function before the return that control the inputted value, let's look the control function:
```c
void __cdecl _check(char *param_1)

{
  size_t sVar1;
  char local_11;
  uint local_10;
  int local_c;
  int local_8;
  
  local_c = 0;
  local_10 = 0;
  while( true ) {
    sVar1 = _strlen(param_1);
    if (sVar1 <= local_10) {
      _printf("Password Incorrect!\n");
      return;
    }
    local_11 = param_1[local_10];
    _sscanf(&local_11,"%d",&local_8);
    local_c = local_c + local_8;
    if (local_c == 0xf) break;
    local_10 = local_10 + 1;
  }
  _printf("Password OK!\n");
                    /* WARNING: Subroutine does not return */
  _exit(0);
}
```
Let's analyse this, you can see the first if control if the password length is less than the ```local_10``` param, that param is updated by 1 on every cicle of the while, the next part controll a specified value, ```0xf```, so the sum of the value in the provided password must be less that 15.

## Level 0x05
This level is the same as before, this is the check function:
```c
void __cdecl _check(char *param_1)

{
  size_t sVar1;
  char local_11;
  uint local_10;
  int local_c;
  int local_8;
  
  local_c = 0;
  local_10 = 0;
  while( true ) {
    sVar1 = _strlen(param_1);
    if (sVar1 <= local_10) break;
    local_11 = param_1[local_10];
    _sscanf(&local_11,"%d",&local_8);
    local_c = local_c + local_8;
    if (local_c == 0x10) {
      _parell(param_1);
    }
    local_10 = local_10 + 1;
  }
  _printf("Password Incorrect!\n");
  return;
}
```
This is basically a copy of the function in the previous level, the only difference is the sum value, this time it is ```0x10``` which is 16, so every password with a sum of it's value equal to 16 is correct.

## Level 0x06
This level is a modified version of the previous 2 levels, this is the main function:
```c
int __cdecl _main(int _Argc,char **_Argv,char **_Env)

{
  size_t in_stack_ffffff60;
  char local_7c [120];
  
  __alloca(in_stack_ffffff60);
  ___main();
  _printf("IOLI Crackme Level 0x06\n");
  _printf("Password: ");
  _scanf("%s",local_7c);
  _check(local_7c,(int)_Env);
  return 0;
}
```
You can see that the ```_check``` function takes the value inputted by the user, and another value, an environment variable.

```c
void __cdecl _check(char *param_1,int param_2)

{
  size_t sVar1;
  char local_11;
  uint local_10;
  int local_c;
  int local_8;
  
  local_c = 0;
  local_10 = 0;
  while( true ) {
    sVar1 = _strlen(param_1);
    if (sVar1 <= local_10) break;
    local_11 = param_1[local_10];
    _sscanf(&local_11,"%d",&local_8);
    local_c = local_c + local_8;
    if (local_c == 0x10) {
      _parell(param_1,param_2);
    }
    local_10 = local_10 + 1;
  }
  _printf("Password Incorrect!\n");
  return;
}
```
This function is basically the same as before, but this time we can see another function ```_parell```, that takes the password and the environment variable, let's see:
```c
void __cdecl _parell(char *param_1,int param_2)

{
  int iVar1;
  int local_c;
  uint local_8;
  
  _sscanf(param_1,"%d",&local_8);
  iVar1 = _dummy(local_8,param_2);
  if (iVar1 != 0) {
    for (local_c = 0; local_c < 10; local_c = local_c + 1) {
      if ((local_8 & 1) == 0) {
        _printf("Password OK!\n");
                    /* WARNING: Subroutine does not return */
        _exit(0);
      }
    }
  }
  return;
}
```
```c
undefined4 __cdecl _dummy(undefined4 param_1,int param_2)

{
  int iVar1;
  int local_8;
  
  local_8 = 0;
  do {
    if (*(int *)(local_8 * 4 + param_2) == 0) {
      return 0;
    }
    iVar1 = local_8 * 4;
    local_8 = local_8 + 1;
    iVar1 = _strncmp(*(char **)(iVar1 + param_2),"LOLO",3);
  } while (iVar1 != 0);
  return 1;
}
```

Before the numeric checks, ```_parell``` call the ```_dummy``` funtion which check if an Environment Variable named "LOLO" exists (Actually it controls only te first three characters, so any variable startin with "LOL" is valid), if so then parell check if the value inserted is odd or even.
So, if you set an environment variable named "LOL*" and input an even value.

