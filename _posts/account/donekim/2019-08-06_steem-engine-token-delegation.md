
---
title: '[중급자 가이드] 스팀엔진 토큰(Steem-Engine Token) 임대내역(delegation) 확인하기'
permlink: steem-engine-token-delegation
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-08-06 01:36:33
categories:
- sct
tags:
- sct
- liv
- steemleo
- zzan
- palnet
- s
- nahasct
- jjm
- union
- upfundme
- busy
thumbnail: 'https://cdn.steemitimages.com/DQmZnE78YfJsuatDvNAU1gxawzfjWVibCLbhqz28RnuEmZy/sct%20logo_modified.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![sct logo_modified.png](https://cdn.steemitimages.com/DQmZnE78YfJsuatDvNAU1gxawzfjWVibCLbhqz28RnuEmZy/sct%20logo_modified.png)

안녕하세요, 디온(@donekim)입니다. SCOTBOT토큰들의 종류가 많아지고 보유하게 되는 토큰들이 많아짐에 따라 각 트라이브 별로 부계정을 운영하는 분들이 많아지고 있습니다. 

본계정의 스팀파워와 스캇파워의 보팅가중치 배율을 조정하는 방법도 있기는 하지만 아무래도 **여러 트라이브 태그들을 사용된 포스팅에 보팅하는 경우에는 해당 계정에서 스테이킹하고 있는 트라이브 토큰들의 중복 보팅**이 들어갈 수 있다보니, 뜻하지 않은 다른 트라이브의 스캇파워를 소모하게 되는 경우가 있어서 부계정의 사용이 필수불가결한 선택이 되어가고 있습니다.

그래서 여러 트라이브들에서 활발하게 활동하시는 분들은 스팀코인판용 큐레이팅 계정, 트리플에이용 큐레이팅 계정, 스팀짱용 큐레이팅 계정 등을 만들어서 해당 부계정으로 토큰을 이동하여 큐레이팅을 하는 경우도 있고, **주계정에서 부계정으로 임대(delegation) 기능을 활용하는 경우**도 있습니다. 

오늘은 **스팀엔진 토큰들의 임대내역을 간편하게 확인하는 [스팀엔진 툴(Steem Engine Tool)](https://steem.tools/steemengine/delegations.php)**에 대해서 소개를 드릴까 합니다.


## #1. 스팀엔진 툴(Steem Engine Tool)이란?
---

![delegation viewer.png](https://cdn.steemitimages.com/DQmNdsFsoiRgmdU9PtLewyZxDq2YLVXXUES3kQYf8ppqV5j/delegation%20viewer.png)

**스팀엔진툴(Steem Engine Tool)이란 스팀엔진 기반 토큰들을 임대해준 내역 또는 임대받은 내역을 간편하고 빠르게 조회할 수 있는 툴**로 @cadawg가 만든 것입니다.

- 주소 : https://steem.tools/steemengine/delegations.php

위의 주소로 접속하시면 **아주 간단하게 계정명 입력만을 통해서 임대를 해준 계정 및 토큰 종류, 수량을 한 번에 확인**하실 수 있습니다. 

## #2. 임대해준 내역 확인하기
---

내 계정에서 부계정이나 보팅풀(조합) 등에 임대를 해준 경우, 어떤 계정에 어떤 토큰을 얼마나 임대해주었는지를 한 번에 조회할 수 있는 기능입니다.

![delegation viewer2.png](https://cdn.steemitimages.com/DQmdnB3LsBJRp2RaiAjcKEfTaMWCCNs21PkoM3Yt3JJkc6r/delegation%20viewer2.png)

① [스팀엔진툴](https://steem.tools/steemengine/delegations.php)에 접속한 뒤 `From`이라고 되어 있는 입력란에 내 계정명을 입력합니다. 그러면 위와 같이 스팀엔진 토큰들을 임대(delegation)해준 계정들을 확인하실 수 있습니다.

![delegation viewer3.png](https://cdn.steemitimages.com/DQmYVDfvfWR19M7uMWjnrYcFJcmSS7aME4MESzHGR68oo2G/delegation%20viewer3.png)

② 스크롤을 아래로 내리면 **어떤 계정에, 어떤 토큰을, 몇 개나, 언제 임대해줬는지를 확인**하실 수 있습니다.


## #3. 임대받은 내역 확인하기 
---

이번에는 반대로 다른 유저들로부터 토큰을 위임받아 보팅풀이나 조합 등을 운영 중이신 분들이 임대내역 스냅샷을 찍기 위해 임대받은 내역을 한 번에 조회할 수 있는 기능입니다.

![delegation viewer4.png](https://cdn.steemitimages.com/DQmaC6yzPrq4rrhModYLu6ZohjN1g52SfkzbqJrUQiwAWqn/delegation%20viewer4.png)

① [스팀엔진툴](https://steem.tools/steemengine/delegations.php)에 접속한 뒤 `To`라고 되어 있는 입력란에 운영 중인 계정명을 입력합니다.

![list.png](https://cdn.steemitimages.com/DQmbqZGvEZBn8HiKvjpGEgxrsHm1DTc9viUp5z32mzFwFzj/list.png)

② 스크롤을 아래로 내리면 **어떤 계정으로부터 몇 개의 토큰을 위임받고 있는지를 간편하게 확인**하실 수 있어서 임대수량 스냅샷을 간편하게 찍기에 좋습니다.

---

참고로 위에서 설명드린 스팀엔진툴 말고도 SCOT토큰의 임대내역을 포함한 여러 정보들을 확인할 수 있는 툴이 있습니다. 안피곤(@anpigon)님께서 개발하신 HAPPIGON앱인데, 아래의 링크로 접속하시면 간편하게 정보 조회가 가능합니다.

- 접속 링크 : https://happigon.github.io/#/wallet/계정명
- 접속 예시 : https://happigon.github.io/#/wallet/union.sct

보다 자세한 소개는 [안피곤님의 포스팅](https://www.steemcoinpan.com/zzan/@anpigon/scot)에서 참고하실 수 있습니다.

- - -

This page is synchronized from the post: ['[중급자 가이드] 스팀엔진 토큰(Steem-Engine Token) 임대내역(delegation) 확인하기'](https://steemit.com/@donekim/steem-engine-token-delegation)
