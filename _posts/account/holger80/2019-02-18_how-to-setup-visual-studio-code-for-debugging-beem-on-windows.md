
---
title: 'How to setup Visual Studio Code for debugging beem on windows?'
permlink: how-to-setup-visual-studio-code-for-debugging-beem-on-windows
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-02-18 12:55:51
categories:
- beem
tags:
- beem
- steemdev
- python
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmR1wD1UMqo5V4qHPjgP69qCzjb5GfwczFUHFS4JYeuFcT'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Installing Visual Studio Code
At first we need to download [Visual Studio Code](https://code.visualstudio.com/Download)

![image.png](https://ipfs.busy.org/ipfs/QmR1wD1UMqo5V4qHPjgP69qCzjb5GfwczFUHFS4JYeuFcT)

## Setup Python
Please follow all steps from my last post:
https://steemit.com/beempy/@holger80/how-to-setup-a-minimal-python-for-using-beempy-on-windows

There is now a python environment in `C:\beem\env` or any other path (just replace this path by the correct one). The `beem` package is installed.

## Setup Visual Studio Code
We need to install a extensions for using python:
Open the extensions tab (or press `Ctrl + Shift + X`)
Enter `ms-python.python` in the search field and install the python extension

![image.png](https://ipfs.busy.org/ipfs/QmaRYbowaRXxgo5Lkb2GmQD8AMFDUVpwMrztFKWcKggHRW)

In the next step we setup our python interpreter.
Open the settings tap (or press `Strg+,`) and enter `pythonPath` in the search field. Enter the pyth to the python.exe in the Python Path field. In my case, I installed an environment in `C:\beem\env`, so my path is `C:\beem\env\Scripts\python.exe`. Replace the path to the python.exe with the one on your PC.

![image.png](https://ipfs.busy.org/ipfs/QmPzz2Zz1wv9rZkuGBYNBc6DL2KxBf9YkYjijqq2m6iXpK)

It is also possible to edit the settings.json (by pressing `Edit in settings.json` in the Settings tab:)
```
"python.pythonPath": "C:\\beem\\env\\Scripts\\python.exe"
```
Replace the path to the python.exe with the one on your PC.

![image.png](https://ipfs.busy.org/ipfs/QmR335mUYV6HpgYRGgd21EeZEhrDtdbnLr7iLRFxLpT77k)


There may be a prompt, if we want to install  the pylint package:
![image.png](https://ipfs.busy.org/ipfs/QmZLM4YqW5UEGoDWfcdhQBYw6522MzRiLQ6mf4Ubbc8RSr)

In my case, installation failed with:
![image.png](https://ipfs.busy.org/ipfs/QmPdHDUKpWTT6x28kvnaso1MPA4bNYW8GJZ4gFucjhpCcw)

and I installed it manually by opening the  powershell and entering the following commands:
```
cd C:\beem
.\env\Scripts\activate
pip install pylint
```

## Debugging a beem python script

Create a new file (`Ctrl+N`) and copy the following into it:
```
from beem import Steem
from beem.account import Account

if __name__ == '__main__':
    stm = Steem()
    acc = Account("holger80", steem_instance=stm)
    print("My vote power: " + acc.vp)
```
Store the file as `py_test.py`.

![image.png](https://ipfs.busy.org/ipfs/QmPsrCGPsAa3xixkp3CJdR5BQMdABs1DfCsA4CtMAogKFW)


We will now run the script without debugger (`Ctrl+F5` or using the menu: Debug/Start without Debugger). The script crashes with a error message:
```
    print("My vote power: " + acc.vp)
TypeError: can only concatenate str (not "float") to str
```

Now we will investigate. We enter a breakpoint at line 7 by pressing left to the line number.

![image.png](https://ipfs.busy.org/ipfs/QmPrnSvNMTQSDRXLGNvEvYB5NLRrAnLBVFF3Kczr3pvw1n)


We start the script with Debugging (`F5`) and click on the DEBUG CONSOLE:

![image.png](https://ipfs.busy.org/ipfs/QmeRHtE7hdSbHPxnvsofmmCm8nmG81c9xDzxbnCA8dt8gt)

Now we can investigate the error in the debug console:

At first we check `acc.vp` by writing it into the terminal:

![image.png](https://ipfs.busy.org/ipfs/Qmbda3wYYBTMVPMAQQat56jgssSxy3n1yJa9HRL1YBpfNM)

So this works, now we enter the string inside the print command:

```
"My vote power: " + acc.vp
```
![image.png](https://ipfs.busy.org/ipfs/QmU2UqKXEvJkAthfJciz2j1GTUqH4WFhAemfBqdPr9KWmi)

The problem is that the `+` does not work with a Float and a String. We try to fix it in the debug console by entering:

```
"My vote power: %.2f" % acc.vp
```
![image.png](https://ipfs.busy.org/ipfs/QmaujWjx2j9VD3z6uLa2rpoZNWCWhSXbtAdx1CgT776nM9)

This works and we can fix the script.

We replace the line with
```
print("My vote power: %.2f" % acc.vp)
```
save the script and press restart:
![image.png](https://ipfs.busy.org/ipfs/QmeAZB7bojSQAVw9LvpvV3FHRQNLFswgV3kWTtT9S96brU)
It stops at the breakpoint and we can press `F5` for continue.
Now everything runs through!





- - -

This page is synchronized from the post: ['How to setup Visual Studio Code for debugging beem on windows?'](https://steemit.com/@holger80/how-to-setup-visual-studio-code-for-debugging-beem-on-windows)
