
---
title: 'NextColony - first update has arrived'
permlink: nextcolony-first-update-has-arrived
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-04-24 20:48:54
categories:
- nextcolony
tags:
- nextcolony
- game
- dapp
- steemdev
- busy
thumbnail: 'https://files.steempeak.com/file/steempeak/rondras/c54NCLYc-NextColony-Teaser-1.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![NextColonyTeaser1.jpg](https://files.steempeak.com/file/steempeak/rondras/c54NCLYc-NextColony-Teaser-1.jpg)

After working hard on the backend, a new update of the backend was rolled out today. 

A complete replay with an empty Database was performed from the genesis block 32247771. This assures that the update do not break something.

## Minor fixes and changes
* The explorer lost rate was set to 5%. This means that in 5 % of all explore space missions, the explorer will be lost and will not return.
*  usernames will be checked when gifting items 
* The log output was reduced

## Mission control
There is a new skill, which limits the number of ongoing missions. A mission can be transporting of resources, exploring space or deploying ships. Each level of missioncontrol allows one more parallel mission. It is not yet visible on the frontend, but it can be already enhanced with the `enhance` custom_json command.


## New giftplanet custom_json
It is now possible to gift  planets  to other users. Only explored planets can be gifted. The planet itself will not move and all buildings and its resources will remain unchanged. We made an exception for legendary planet buyers, they are allowed to gift their legendary start planet. As a player must have a start planet, they will then receive a new start planet at a new location.

Today, urachem used this feature and gifted his legendary planet to dachcolony.
![image.png](https://ipfs.busy.org/ipfs/QmUctQaSy8XHmNzPhxndYYbgvQwLiPAsdTgdwbfdQCox6f)

The command is:
```
{"username": "urachem", "type": "giftplanet", "command": {"tr_var1": "1003", "tr_var2": "dachcolony"}}

```
* `tr_var1`: planet id of the planet that should be gifted
* `tr_var2`: username will receive the planet and will be the new owner

We are considering enforcing required_auths for the custom_json, in order to increase security.

It is possible to broadcast the cusotm_json with steemconnect:
https://app.steemconnect.com/sign
by entering:
![image.png](https://ipfs.busy.org/ipfs/QmXxy2CGwF2pG1txLHFPsg1WUbLPD5dAHnbuscZ2VCnPop)
The custom_json is not yet supported by the frontend.

## Deploy ships to other planets
This new custom_json will move a fleet of up to 25 ships to a new planet and changes the ownership of the ships to the owner of the planet on which the ships have arrived. It is possible to transport resources to the coordinates.

```
{"username":"holger80","type":"deploy","command":{"tr_var1":"S-ZKZHNR9O31C;S-ZRUVBR6EXGW","tr_var2":"-265","tr_var3":"-38","tr_var4":"0","tr_var5":"0","tr_var6":"0","tr_var7":"100"}}
```

* `tr_var1`: List of ship id, seperated by ;
* `tr_var2`: horizontal space coordinate of a planet
* `tr_var3`: vertical space coordinate of a planet
* `tr_var4`: amount of coal (can be a positive float or 0)
* `tr_var5`: amount of ore (can be a positive float or 0)
* `tr_var6`: amount of copper (can be a positive float or 0)
* `tr_var7`: amount of uranium (can be a positive float or 0)

The arrival time is determined by the slowest ship. The ownership is changed when the ships have arrived on the destination.

- - -

This page is synchronized from the post: ['NextColony - first update has arrived'](https://steemit.com/@holger80/nextcolony-first-update-has-arrived)
