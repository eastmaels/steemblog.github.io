
---
title: 'Introducing the Powerdown Status Tool/API'
permlink: introducing-the-powerdown-status-tool-api
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-19 14:28:33
categories:
- busy
tags:
- busy
- steemapps
- steemtools
- steemit
- steemstem
thumbnail: https://cdn.pixabay.com/photo/2018/02/16/03/24/steel-3156848_960_720.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://cdn.pixabay.com/photo/2018/02/16/03/24/steel-3156848_960_720.jpg)
*Image Credit: Pixabay.com*

Do you want to know the details of powerdown status? I have made an easy-to-use online tool with a easy-to-use API (subject to fair use policy)

Tool URL: https://helloacm.com/tools/steemit/powerdown/

Enter at least 1 ID. 
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519049880/jelyxffbxybrzjayn3tc.png)

You can also enter multiple IDs that are separated by comas, for example

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519049986/toybqgksba4pxye0c1br.png)

If the account is currently in progress of powerdown, it will be listed with information: the amount of Steem Power, vesting_shares, when the powerdown started and currently at which week (0 to 12).

## API of Powerdown Status
```
curl -X POST https://helloacm.com/api/steemit/powerdown/ -d "id=justyy"
```

@justyy is not currently powering down, and it will return []. 

```
curl -X POST https://helloacm.com/api/steemit/powerdown/ -d "id=dan"
```

it will print:

```
[{"account": "dan", "vesting_shares": 604746709.22, "week": 3, "timestamp": "2018-01-27 15:39:54", "sp": 295856.23537349683}]
```

Multiple IDs return multiple elements in the JSON array. For example,

```
curl -X POST https://helloacm.com/api/steemit/powerdown/ -d "id=deanliu,dan"
```

```
[{"account": "dan", "vesting_shares": 604746709.22, "sp": 295856.2500438119, "timestamp": "2018-01-27 15:39:54", "week": 3}, {"account": "deanliu", "vesting_shares": 18943971.25, "sp": 9267.834300730126, "timestamp": "2017-12-26 05:02:21", "week": 7}]
```

You can give parameters simply via GET, for example
```
https://helloacm.com/api/steemit/powerdown/?cached&id=justyy
https://helloacm.com/api/steemit/powerdown/?cached&id=jubi,deanliu
```

All API calls return JSON data with fields of account, timestamp, sp, vesting_share and week. If an steemit account has no current powerdown, it will be skipped in the output array. If $_GET parameter s is not specified, this API will use the $_POST variable id instead.

### SteemIt API Servers
You could use the following four SteemIt API servers globally (free of charge, subject to fair use policy):

- East USA: helloacm.com
- Tokyo Japan: happyukgo.com
- London UK: uploadbeta.com
- West USA: steakovercooked.com

### Please also have a look at:  [SteemIt Tools, APIs and Tutorial](https://helloacm.com/tools/steemit/)

- - -

This page is synchronized from the post: [Introducing the Powerdown Status Tool/API](https://steemit.com/@justyy/introducing-the-powerdown-status-tool-api)
