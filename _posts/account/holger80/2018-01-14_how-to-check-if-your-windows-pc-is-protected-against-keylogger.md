
---
title: 'How to check if your Windows PC is protected against keylogger'
permlink: how-to-check-if-your-windows-pc-is-protected-against-keylogger
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-14 12:34:39
categories:
- security
tags:
- security
- keylogger
- windows
- comodo
thumbnail: 'https://steemitimages.com/DQmaviExCRrE9cP4purFdmtCwvZkNSqdbqCMuzk9dpFw3KX/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


A keylogger running in the background could record all your keystrokes and send them away if your PC is connected to the internet. There is small program AKLT (AntiKeyLoggerTester) which can be used to check the protection of your PC against keylogger.  The homepage of this tool is offline, as it was written 2010, but it can be download here:
http://www.snapfiles.com/get/antikeyloggertester.html

You can check that AKLT.exe will most likely pass your antivirus-software:
https://www.virustotal.com/de/file/fdbb91d383615b64e6abaf327d1ec5567f3289657197faacbc57ced90f975b7f/analysis/

If you are want to check if AKLT.exe is legit, you can take look at wilderssecurity: https://www.wilderssecurity.com/threads/aklt-exe-firewall-leaktester.239170/

Start AKLT.exe, most likely your antivirus will do nothing:
![](https://steemitimages.com/DQmaviExCRrE9cP4purFdmtCwvZkNSqdbqCMuzk9dpFw3KX/image.png)

Now press the _GetKeyState_ and write something somewhere else (AKLT is out of focus).

If AKLT is now looking like this:
![](https://steemitimages.com/DQmdqKUX3ZPT9KxGSoJjjXRSHpCW7Yrefy1jFMAWuntWPr7/image.png)
then your system is unproteced against keylogger. Be carefully when entering the secret key phrase into your wallet...

## Comodo Free Firewall
I'm using Comodo Free Firewall to protect my PC. The standard setup is not sufficient. I'm using the setup from cruelsister1, which is shown here: 
https://www.youtube.com/watch?v=FoIu3Z2ImO8

With this setup, all unkown programms and scripts are running automatically inside a sandbox.
This is shown by a green box.
![](https://steemitimages.com/DQmPUxbvqWztbsZ4rZWfG1C9DCpmQyjESdUrxVtafSiHho2/image.png)
After pressing _GetKeyState_, AKLT is not able to record my key strokes:
![](https://steemitimages.com/DQmcQHyEAKdLgMVaSEsaHnyYihnc3mPLcSteExm2BX2L46D/image.png)

How do you protect your Windows PC against keylogger?

- - -

This page is synchronized from the post: ['How to check if your Windows PC is protected against keylogger'](https://steemit.com/@holger80/how-to-check-if-your-windows-pc-is-protected-against-keylogger)
