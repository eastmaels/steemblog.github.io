
---
title: 'How to check if your PC is already patched against meltdown and spectre'
permlink: how-to-check-if-your-cp-is-already-patched-against-meltdown-and-spectre
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-10 12:39:36
categories:
- security
tags:
- security
- meltdown
- spectre
- safety
- intel
thumbnail: 'https://steemitimages.com/DQmURTr6rBazuy2p1nN55KcF38bZaKJJFy2dNrHvcirhDnK/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I found an easy and convinient way for checking the status of your  pc.

## Windows PC
Steps:
* Go to https://github.com/vrdse/MeltdownSpectreReport
* Download or clone the repository [Download link](https://github.com/vrdse/MeltdownSpectreReport/archive/master.zip)
* Unzip
* Open _powershell_
* Drap and drop _MeltdownSpectreReport.ps1_ into the _powershell_ window
* Or go the the directory with the ps1 script and enter _.\MeltdownSpectreReport.ps1_

![](https://steemitimages.com/DQmURTr6rBazuy2p1nN55KcF38bZaKJJFy2dNrHvcirhDnK/image.png)

If you have a lot of False returns,  as i have, the protection is not there. Be careful. A detailed explanation how to interpret the  results can be found here https://github.com/vrdse/MeltdownSpectreReport.

## Linux PC
Steps:

* Go to https://github.com/speed47/spectre-meltdown-checker
* Download or clone ([Download link](https://github.com/speed47/spectre-meltdown-checker/archive/master.zip))
* unzip master.zip, if downloaded
* open terminal 
* go into directory with spectre-meltdown-checker.sh
* run the script as root: _sudo ./spectre-meltdown-checker.sh_
Example output (taken from [github](https://github.com/speed47/spectre-meltdown-checker))
![](https://steemitimages.com/DQmesr1BdRRfbwNK64Aobdk7QyhGLFcnf3SBVGyMER5Dysp/image.png)

A detailed explanation of the results can be found here: https://github.com/speed47/spectre-meltdown-checker.

- - -

This page is synchronized from the post: ['How to check if your PC is already patched against meltdown and spectre'](https://steemit.com/@holger80/how-to-check-if-your-cp-is-already-patched-against-meltdown-and-spectre)
