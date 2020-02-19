
---
title: 'steem hivemind로 할 수 있는 것'
permlink: steem-hivemind
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-12-18 16:28:42
categories:
- sct
tags:
- sct
- sct-kr
- sct-freeboard
- sct-altcoin
- sct-dev
- union
- busy
thumbnail: 'https://cdn.steemitimages.com/DQmbUWyEcsQiW3GB9zRZoM1T6pYs7zfY3ssYKEzrmHNK6cu/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


안녕하세요. 제이콥입니다.

[하이브마인드 sps](jacobyu.net/SPS-제안-살펴보기-하이브마인드-sql-서비스-feat-투표권을-행사하세요/)에서 하이브마인드에 대해 간단히 적어봤었는데요. 




> 하이브마인드를 활용해서 옛날 글을 찾을 수도 있고요. 또 다른 예를 들어보면, 오늘 SCT 홍보소각한 사람들의 리스트를 보고 싶다. 이것도 하이브마인드를 활용하면 좀더 쉽게 찾을 수 있을것 입니다.

> 쉽게 예를 들어보겠습니다. 기존의 스팀 api를 활용해서 원하는 것을 찾는 것은 도서관에서 직접 걸어다니면서 원하는 책을 찾는것입니다. 하이브마인드를 활용하는 것은 도서관에 검색기능이 있어서 원하던 책을 쉽게 찾는것입니다.

아래 2개의 글을 읽고 hivemind를 써보기로 맘먹었습니다.

* https://steempeak.com/hivemind/@emrebeyler/hivemind-sql-users

* https://steempeak.com/hivemind/@contrabourdon/follow-the-leader-or-stalking-all-accounts-that-someone-else-follows-using-emrebeyler-s-hivemind


@contrabourdon라는 분이  @emrebeyler 읽기 권한을 받아서 특정유저의 팔로워를 가져오는 걸 포스팅했습니다.

아래 사진들은 @contrabourdon의 포스팅에서 가져왔습니다.

#### 하이브마인드

![](https://cdn.steemitimages.com/DQmbUWyEcsQiW3GB9zRZoM1T6pYs7zfY3ssYKEzrmHNK6cu/image.png)

#### steem-js

![](https://cdn.steemitimages.com/DQmXPK8ebrtE9hwwxCUKk9LVLobn6DkN4BSX2mrkCVHpAdV/image.png)


첫번째 코드는 hivemind를 활용한 것, 두번째 코드는 steemjs를 활용한 것입니다. 두 개의 결과는 같지만, 위의 코드가 훨씬 짧고 빠르고 가독성도 좋죠.




####  스팀블로그에 사용할 글을 하이브마인드로 가져오기


제 블로그 (https://jacobyu.net)은 제 스팀계정의 모든글을 가져와서 블로그를 만든 것입니다.  그 중에서 몇개만 업데이트를 하고 싶거나, 특정 태그의 글, 혹은 제가 메타정보에넣은 카테고리로 분류된 글을 뽑아서 업데이트하고 싶습니다.

하이브마인드를 사용한다면 훨씬 빠르고 쉽게 원하는 글을 가져올 수 있습니다. 코드 양도 줄어들거에요.

---

셋팅작업은 오래걸리고 어려울 것 같으니.. 
@emrebeyler에게 권한을 받아서 사용해볼 수 있으면 너무 좋겠군요.
부디 제 댓글을 봐주길..
굿굿!

- - -

This page is synchronized from the post: ['steem hivemind로 할 수 있는 것'](https://steemit.com/@jacobyu/steem-hivemind)
