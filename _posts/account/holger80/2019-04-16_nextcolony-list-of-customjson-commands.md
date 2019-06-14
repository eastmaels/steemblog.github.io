
---
title: 'NextColony -  list of custom_json commands'
permlink: nextcolony-list-of-customjson-commands
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-04-16 20:27:48
categories:
- nextcolony
tags:
- nextcolony
- dapp
- game
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

NextColony is a true blockchain game on steem, thus almost all actions are triggered by custom_json operations (buying an item is initiated by a transfer).  In the following you will find a list of commands that will be supported at launch. More commands will follow afterwards.

## Structure of a custom_json operation
A custom_json command consists of an id and a json field. All commands in nextcolony have the same id:
```
nextcolony
```
and the json field has the following structure:
```
{"username":"holger80","type":"newuser","command":{"tr_var1":"holger80"}}
```
where `username` is the username (currently not used and can be skipped).
`type` defines the command type and `command` consists of a dict with the keys `tr_var1` to `tr_var8`.
The command is applied to the user defined in the `required_posting_auths` field.

## newuser
```
{"username":"holger80","type":"newuser","command":{"tr_var1":"holger80"}}
```
Creates a new game account with the steem account name. 
The command uses one field:
* `tr_var1`: steem username

## enhance
```
{"username":"holger80","type":"enhance","command":{"tr_var1":"holger80","tr_var2":"P-ZN2FTQ9F3W0","tr_var3":"coalmine"}}
```
Starts learning of a skill which is necessary for building a higher level or being able to build ships.
* `tr_var1`: username, who will learn the skill
* `tr_var2`: planet uid from which the resources are taken
* `tr_var3`: skill name

Skill names are:
#### depots and mines
```
coalmine, oremine, coppermine, uraniummine,
coaldepot, oredepot, copperdepot, uraniumdepot
```
#### special buildings
```
base, researchcenter, shipyard
```
#### booster
```
coalbooster, orebooster, copperbooster, uraniumbooster
```
#### ships
```
Explorer, Transporter, Corvette, Frigate, Destroyer, Cruiser, Battlecruiser, Carrier, Dreadnought
```

## upgrade
```
{"username":"holger80","type":"upgrade","command":{"tr_var1":"P-ZN2FTQ9F3W0","tr_var2":"researchcenter"}}
```
Starts the upgrade of a building. Conditions (sufficient resources and sufficient skill level) must be met.
* `tr_var1`: planet uid from which the resources are taken and on which the building is upgraded
* `tr_var2`: building name

Building names are:
#### depots and mines
```
oredepot, copperdepot, coaldepot, uraniumdepot, 
oremine, coppermine, coalmine, uraniummine
```

#### special buildings
```
shipyard,  base, researchcenter
```

## buildship
```
{"username":"holger80","type":"buildship","command":{"tr_var1":"P-ZN2FTQ9F3W0","tr_var2":"explorership"}}
```
Builds one ship when the conditions (resources, no other ship is build, shipyard level and ship skill level) are met. 
* `tr_var1`: planet uid from which the resources are taken and on which the ship is build
* `tr_var2`: ship name

Possible ship names are:
```
explorership,  transportship, corvette, frigate, destroyer,
cruiser, battlecruiser, carrier, dreadnought
```

## explorespace
```
{"username":"holger80","type":"explorespace","command":{"tr_var1":"P-ZN2FTQ9F3W0","tr_var2":53,"tr_var3":-317}}
```
Starts a exploration mission, a explorer must be available and ready on the planet.
* `tr_var1`: planet uid from which the explorership starts and the uranium is taken for providing fuel for the flight
* `tr_var2`: horizontal space coordinate
* `tr_var3`: vertical space coordinate

## transport
```
{"username":"holger80","type":"transport","command":{"tr_var1":2,"tr_var2":"P-ZN2FTQ9F3W0","tr_var3":"52","tr_var4":"-321","tr_var5":15,"tr_var6":15,"tr_var7":15,"tr_var8":15}}
```
Transports resources to a location and returns to the start position afterwards.
* `tr_var1`: number of transporter which should be used, must be available and ready on the planet
* `tr_var2`: planet uid from which the transportship starts and the resources are taken 
* `tr_var3`: horizontal space coordinate of a planet
* `tr_var4`: vertical space coordinate of a planet
* `tr_var5`: amount of coal (can be a positive float or 0)
* `tr_var6`: amount of ore (can be a positive float or 0)
* `tr_var7`: amount of copper (can be a positive float or 0)
* `tr_var8`: amount of uranium (can be a positive float or 0)

## activate
```
{"username":"holger80","type":"activate","command":{"tr_var1":"C3-ZSQFKQ5LW9S","tr_var2":"P-ZN2FTQ9F3W0"}}
```
Activates an item, the effect depends on the item.
* `tr_var1`: item uid, must be owned by the user
* `tr_var2`: planet uid on which the item is activated

## giftitem
```
{"username":"holger80","type":"giftitem","command":{"tr_var1":"C3-ZUA1B4B7UPS","tr_var2":"holger.random"}}
```
Gifts an item to another player.
* `tr_var1`: item uid, must be owned by the user
* `tr_var2`: username to which the item is gifted

___
[NextColony](https://nextcolony.io/) will start on

April 21, 2019 20:00:00 UTC

See you in the game :)

- - -

This page is synchronized from the post: ['NextColony -  list of custom_json commands'](https://steemit.com/@holger80/nextcolony-list-of-customjson-commands)
