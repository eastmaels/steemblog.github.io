
---
title: 'Bug: Trigger different behavior of "Replies to me" tab using different clicking style'
permlink: bug-trigger-different-behavior-of-replies-to-me-tab-using-different-clicking-style
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-02 16:25:18
categories:
- utopian-io
tags:
- utopian-io
- steemit
- teammalaysia
- bugs
thumbnail: 'https://steemitimages.com/DQmSVZMas9yymVTZ8DQiNz64B2B3tBQNnPpNcoHqSV7Y5A3/1.PNG'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---




In the "Replies to me" tab, the correct result of clicking on the reply should be bringing the page to the exact line of reply which is also wrapped in a rectangle bracket like the snapshot below. The URL pointed to the comment will be in this format:
`https://steemit.com/[tag of post]/[@owner of post]/[title of post]#[@owner of reply]/re-[the target of reply]-[title of post]-[unique hash of this reply]`

![1.PNG](https://steemitimages.com/DQmSVZMas9yymVTZ8DQiNz64B2B3tBQNnPpNcoHqSV7Y5A3/1.PNG)

There is a [reported bug](https://utopian.io/utopian-io/@ewuoso/easy-accesibility-to-message-replies-now-missing-on-steemit) for clicking on the reply does not consistently bring us to the exact reply. I would like to add some detail to this bug which might help the debugging and development process. I've noticed some different behaviors of the result depending on how we open the reply link. 

While clicking on the reply under "Replies to me" tab will definitely bring us to the correct URL, there is two possible outcome: **Page shows the reply**(correct outcome), or **page shows the top of the post**(incorrect outcome).

## Different behaviors under "Replies to me" tab

- ***Left-click* on the new reply**

  Current tab turns to the related post at the top of the post. Incorrect outcome.

- **Go back, and *left-click* the same reply**

  Current tab turns to the related post at the exact line of the reply. Correct outcome.

- **Go back, and *left-click* on all other replies which under the same post.**

  Current tab turns to the related post at the exact line of the reply. Correct outcome.

- **Waited one hour and above, *left-click* on the same reply**

  Current tab turns to the related post at the top of the post. Incorrect outcome.

- ***Middle-click*(scroll button) on the new or old reply**

  Opens a new tab and shows the exact line of the reply. Correct outcome.

- ***Right-click* on the reply and select "Open link in new tab".**

  Opens a new tab and shows the exact line of the reply. Correct outcome.

## Conclusion

Incorrect outcome only occurs with left-click every time with the new reply. Leave it for some moment like at least for one hour, open old reply with left-click produce the same incorrect outcome again.

## Environment

Operating system: Windows 10
Browser: Google Chrome Version 62.0.3202.94 (Official Build) (64-bit)

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@fr3eze/bug-trigger-different-behavior-of-replies-to-me-tab-using-different-clicking-style">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['Bug: Trigger different behavior of "Replies to me" tab using different clicking style'](https://steemit.com/@fr3eze/bug-trigger-different-behavior-of-replies-to-me-tab-using-different-clicking-style)
