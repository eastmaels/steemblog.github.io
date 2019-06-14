
---
title: 'Protect your Windows PC against Meldown and Spectre'
permlink: protect-your-windows-pc-against-meldown-and-spectre
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-09 20:31:06
categories:
- cybersecurity
tags:
- cybersecurity
- meltdown
- spectre
- technology
- security
thumbnail: 'https://steemitimages.com/DQmcm2Zy98i27DGKaoci3kBfVDV4BsKF7enNrWrvCiPpgnR/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


# Meltdown (CVE-2017-5754)
![](https://steemitimages.com/DQmcm2Zy98i27DGKaoci3kBfVDV4BsKF7enNrWrvCiPpgnR/image.png)
Meltdown breaks the fundamental isolation between user applications and the operating system.
# Spectre (CVE-2017-5753 and CVE-2017-5715)
![](https://steemitimages.com/DQmZQLAoni5M7zBAWBsk9Vyn1gYBQzDjLkpXCndo8Ac4EbE/image.png)
Spectre breaks the isolation between different applications.

An attacker can use both vulnerabilities for stealing passworts and sensitive data. More information can be found at https://meltdownattack.com/.

# How to check if your pc is vulnerable
Visit the official microsoft site for more information https://support.microsoft.com/en-us/help/4073119/protect-against-speculative-execution-side-channel-vulnerabilities-in.
## Open powershell as admin
Open the start-menu and write powershell. Right click and select  “Run as Administrator”. Click yes on the dialog for running as admin. 
## Install the PowerShell Module
Typ the following into the powershell.
```
 Install-Module SpeculationControl
```
Press two times 'y' for installing the module.
## Run the PowerShell module to validate the protections are enabled
Enter the following commands (You can also copy the commands from [the official microsoft site](https://support.microsoft.com/en-us/help/4073119/protect-against-speculative-execution-side-channel-vulnerabilities-in))
```
$SaveExecutionPolicy = Get-ExecutionPolicy
Set-ExecutionPolicy RemoteSigned -Scope Currentuser
```
Press 'y' for changing the Execution Policy
```
Import-Module SpeculationControl
Get-SpeculationControlSettings
```
After this enter
```
Set-ExecutionPolicy $SaveExecutionPolicy -Scope Currentuser
```
Press 'y' for changing the Execution Policy to the original state

Your are protected against meldown and spectre when you seeing only green-colored True's.
If you have an old motherboard as i have and not getting any bios or firmware upgrade, then it will look like this:
![](https://steemitimages.com/DQmUFaHXBniFCQzrE3yTccUEir2UysNRASCLK1uUg1GTMX3/image.png)
This means that i am protected against meltdown but not against spectre.

You can see Spectre in action using this small program from github https://github.com/stephanvandekerkhof/cpp-spectre-meltdown-vulnerability-windows-test
Download spectre-meltdown-vulnerability-windows-test.exe and excecute it:
If you see the following output (as i see on my PC)
![](https://steemitimages.com/DQmb6LBnyR2LAUnPDofAgGFQw2UHJAkQ4ftGeAS945eUUwx/image.png)
then your are vulnerable against Spectre.

This program creates a variable 
```
char *secret = "MELTDOWN/SPECTRE-POC by Stephan of EHVSN";
```
and uses Spectre to read its content.

# What to do, if you are not protected against Spectre (like me)
* Update your Browser and maybe use chrome.
* If you are using chrome, activate Strict site isolation by entering 
```
chrome://flags/#enable-site-per-process
```
into the address bar.
   * Activate Strict site isolation and restart chrome. If it is activated, it should now look like this:
![](https://steemitimages.com/DQmeNaAHAwS8kj7Z8Q72G4zW7VE2jEjAg1c8vDtLKrQBd6G/image.png)

* Chrome tries to prevent attacks with javascripts, as you can read here: https://sites.google.com/a/chromium.org/dev/Home/chromium-security/ssca
* Buy a new PC (?) as your old one will most likely not get any new BIOS upgrade. The last update for my BIOS was 2015. But lets hope and wait.

Do you have also some usefull tips for windows user which are vulnerable against Spectre? Please let me know!

- - -

This page is synchronized from the post: ['Protect your Windows PC against Meldown and Spectre'](https://steemit.com/@holger80/protect-your-windows-pc-against-meldown-and-spectre)
