
---
title: 'python steemmonsters 0.0.13 released - several improvements'
permlink: python-steemmonsters-0-0-13-released-several-improvements
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-10-26 13:36:39
categories:
- utopian-io
tags:
- utopian-io
- development
- steemmonsters
- steemtank
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmRSnmYxHs9CZWXhoad14f5g7yvCW2mrFQ8b1ZjEefERmW'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


#### Repository

https://github.com/holgern/steemmonsters

steemmonsters is a python command line tool for playing steemmonsters. Decks, player name and other settings are defined in a json file. Before playing, the posting key has to be stored inside the beem wallet. The password which is used to encrypt the posting key, can be stored in the config file or entered each time on start.



## New features
### Load different settings files on startup
It is possible to load different config json files on startup:
```
steemmonsters -c config2.json
```
or 
```
python steemmonsters.py -c config2.json
```
### The wallet password must not anymore stored in the config file
Instead of storing the wallet password, it can now be entered each time when the tool is started. Just removed the `wallet_password` line from the config file.

### Play mode can be aborted with ctrl+c when waiting
When `play_delay` is set in the config file, playing a new match can be aborted by pressing ctrl+c after a match when the line
```
waiting 5 seconds
```
is shown. When pressing ctrl+c at this time point, the program itself is not terminated.

### Unit tests and CI integration added
A simple unit test for testing generate_key and generate_team_hash has been added. Integration into [travis-ci](https://travis-ci.org/holgern/steemmonsters/) and [appveyor.com](https://ci.appveyor.com/project/holger80/steemmonsters) has been done.

![image.png](https://ipfs.busy.org/ipfs/QmRSnmYxHs9CZWXhoad14f5g7yvCW2mrFQ8b1ZjEefERmW)

![image.png](https://ipfs.busy.org/ipfs/QmX7zN5X5ro6r6j3tdFa1CTtBGKHQUjqnMinnbUeu46Vv8)

## steemmonsters can be used without the need to install python on windows
After downloading the standalone version of beempy (https://github.com/holgern/beem/releases) and the standalone version of steemmonsters in hte [release-site](https://github.com/holgern/steemmonsters/releases/tag/0.0.12), they can be extracted and used to play steemmonsters.

Two versions can be downloaded, a packed one-file exe or a directory containing. The packed one-file is easier to handle, but slower on startup:
* [steemmonsters-0.0.13-29-21b9a931-py36_win64.zip](https://github.com/holgern/steemmonsters/releases/download/0.0.13/steemmonsters-0.0.13-29-21b9a931-py36_win64.zip)
* [steemmonsters-onefile-0.0.13-29-21b9a931-py36_win64.zip](https://github.com/holgern/steemmonsters/releases/download/0.0.13/steemmonsters-onefile-0.0.13-29-21b9a931-py36_win64.zip)

Both zip files are created inside the appveyor CI:
![image.png](https://ipfs.busy.org/ipfs/QmULbSFkhb54u4YJWGLqwi9bXEE9z2No5JexbsizyBm4n4)


After unpacking the beem and the steemmonsters zip file into two different directories, they can be used. Open e.g. the Windows PowerShell and go into the directory containing beem.
When not already a wallet was created:
```
.\beempy.exe createwallet
```
Adding the posting key of the playing steem account:
```
.\beempy.exe addkey
```
On Windows PowerShell, the key can be pasted, using a right click.

Create a config.json as shown in https://github.com/holgern/steemmonsters.

Go to the directory containing steemmonsters.exe
```
.\steemmonsters.exe
```
or
```
.\steemmonsters.exe -c ..\path\to\config.json
```
## Short help texts were added for all commands
When entering `?` or `help` all available commands can be seen:
![image.png](https://ipfs.busy.org/ipfs/QmR949oB1ZFx2N5tVLYnxB9ALtaYgMHfkT2khu22BUh572)


## Stop play when reaching a loosing streak
In the config file, `stop_on_loosing_streak` can be defined. When set, playing stops when loosing the defined number in a row.

## Commit history
### Release 0.0.13 
* [21b9a93](https://github.com/holgern/steemmonsters/commit/21b9a931f77068fee93196631a5df4f01fd758d7)
* ctrl+c can be used after a battle to abort playing
* the wallet password can be removed from the config.json and entered each time instead

### Release 0.0.12
* [commit 4fbd84c](https://github.com/holgern/steemmonsters/commit/4fbd84ca9f09a1a8dcaacadbdfc422aba6c74c0d)
* Help text for commands added
* Option to change the config file on startup
* Fix bug in stream

### Release 0.0.11
* [commit bc810e4](https://github.com/holgern/steemmonsters/commit/bc810e41de34f8b0b4137bbdefd50f58a51d8f77)
* CI tools (travis and appveyor) added
* pep8 formating fixed
* steemmonsters play function improved
  * more information
  * better handling
* new configuration added:
   * stop_on_loosing_streak - stops fighting when a loosing streak is reached
* Unit test for utils added
* spec files for standalone executable added
### Release 0.0.10
* [commit b3e4e85](https://github.com/holgern/steemmonsters/commit/b3e4e85ef2fd3fbdb0fa53a4a30d41f5303941af)
* New options added for play
* several bug fixes
* readme improved

#### GitHub Account
https://github.com/holgern/

- - -

This page is synchronized from the post: ['python steemmonsters 0.0.13 released - several improvements'](https://steemit.com/@holger80/python-steemmonsters-0-0-13-released-several-improvements)
