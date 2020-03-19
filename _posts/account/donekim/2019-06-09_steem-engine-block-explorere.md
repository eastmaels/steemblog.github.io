
---
title: '스팀엔진 블록 익스플로러(Steem Engine Block Explorere)를 소개합니다'
permlink: steem-engine-block-explorere
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-06-09 09:02:51
categories:
- sct
tags:
- sct
- userguide
- sct-ubi
- aaa
- palnet
thumbnail: 'https://cdn.steemitimages.com/DQmVFco9Z21dczHvTdXLX5LTYPHG32dv9HUh6qPBAafbqFi/block%20explorer%20logo.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![block explorer logo.png](https://cdn.steemitimages.com/DQmVFco9Z21dczHvTdXLX5LTYPHG32dv9HUh6qPBAafbqFi/block%20explorer%20logo.png)


안녕하세요, 디온(@donekim)입니다. 오늘은 스팀코인판, 트리플에이, PALnet 등 Steemit.com 포크 프로젝트에서 활동 중이신 분들께 꼭 필요한 **스팀엔진 블록 익스프로러(Steem Engine Block Explorer)**를 소개드릴까 합니다. 

사실 최근 들어 스팀엔진 SCOT기반의 다양한 프로젝트들을 통칭할 수 있는 단어가 뭐가 있을지 고민을 하고 있었는데, 해외 커뮤니티에서는 스티밋 포크(Steemit.com forks)라는 단어를 사용하더군요. `(스팀 블록체인 포크가 아닙니다)` 

어떻게 보면, SCOT은 직관적인 의미에서 **스티밋 포크**라고 부르는 게 기존 스티밋 사용자들에게 이해하기 더 쉬운 단어일 수 있겠다는 생각이 들어서 저도 앞으로는 스티밋 포크라는 단어를 사용해볼까 합니다.



## #1. 스팀엔진 블록 익스플로러
---
![main0.png](https://cdn.steemitimages.com/DQmduChB2Qvxjn5JPucYaJ3A2qkBf7EWRRzB4s5APRT8Hkq/main0.png)

- 사이트 주소 : https://steem-engine.rocks/
 
스팀 블록체인 익스플로러인 steemd.com 처럼 스팀엔진 기반 토큰들도 위와 같은 블록익스플로러가 있습니다. 위의 사이트로 접속하시면 **스팀엔진 기반 토큰들의 모든 트랜잭션들을 조회**하실 수 있습니다.

## #2. 스팀엔진 기반 토큰 정보 확인하기
---
![main.png](https://cdn.steemitimages.com/DQmcZSFM7V9JrwYfQBjBRSMkG6uWuTJy3yg2FYxwZDE3g4Q/main.png)

스팀엔진 기반 토큰들의 종류가 엄청나게 많아지면서, **어떤 토큰들이 발행되어 있는지** 그리고 **스테이킹 기능을 지원하는 토큰들은 뭐가 있는지**, 스티밋 포크라고 할 수 있는 **SCOT 프로젝트들은 어떤 것들이 있는지** 확인하고 싶으신 분들이 많을 것 같습니다.

스팀엔진 블록 익스프로러에서는 토큰 종류별로 이를 한 눈에 확인하는 것이 가능합니다. 

- 스팀엔진 기반 모든 토큰 조회 : https://steem-engine.rocks/tokens
- 스테이킹 기능을 지원하는 모든 토큰 조회 : https://steem-engine.rocks/tokens?only_stake_enabled=true
- SCOT 조회 : https://steem-engine.rocks/tokens?only_scot=true

## #3. 주요 SCOT 트랜잭션 조회 (SCT, AAA, PAL)
---

스팀엔진 블록 익스플로러에서 직접 해당 SCOT의 티커를 입력하여 조회를 하실 수도 있지만, 혹시라도 바로 숏컷 즐겨찾기를 설정하고자 하는 분들을 위해서 주요 SCOT프로젝트들의 트랜잭션 조회 링크를 정리해봤습니다.

**① Steemcoinpan (#SCT)** : https://steem-engine.rocks/@sct

![block explorer.png](https://cdn.steemitimages.com/DQmbFKtUFPnT9gjaWRFUZY9X9BrvENFctcFDgyAuHu6xz3Q/block%20explorer.png)

**② TripleA reviews (#AAA)** : https://steem-engine.rocks/@aaa

![aaa.png](https://cdn.steemitimages.com/DQmaWfWsx8r8PLDsRFtC7JKyN4LucrgBp84EFfmukXKv3ba/aaa.png)

**③ PALnet (#palnet)** : https://steem-engine.rocks/@pal

![palnet.png](https://cdn.steemitimages.com/DQmTu7AqHW8FV5bSYHvoPv1zasnamNRfEmj29qtAp3PftLJ/palnet.png)


스팀엔진 블록 익스플로러에서도 우측 상단을 보면 **각 토큰들의 오더리스트(스팀엔진 마켓에서의 주문내역) 및 리치 리스트 등을 지원**합니다. 

![quick links.png](https://cdn.steemitimages.com/DQmQ2kfM131ShtnwVVy6VMCTjsFh4VHTHTVNNpdrjr32sfN/quick%20links.png)

하지만 SCT와 AAA 관련 오더북 및 리치리스트 확인은 @morning님의 툴을 통해 확인하시는게 훨씬 보기가 좋기 때문에, PAL 또는 기타 토큰들 확인시에 사용하시면 좋을 것 같습니다^^

- SCT Richlist 확인하기 : https://coin-on.com/rich
- SCT Orderbook : https://coin-on.com/sct
- AAA Richlist 확인하기 : https://coin-on.com/steem/aaa/richlist
- AAA Orderbook 확인하기 : https://coin-on.com/steem/aaa/orderbook



<center><img src='https://i.imgur.com/SAXfzqa.png' /></center><br />


**[#1] 스팀코인판 필수 링크 모음**

- 스팀코인판 사이트 : https://www.steemcoinpan.com/
- 스팀코인판 보팅파워 확인 : https://economicstudio.github.io/vp/?a=계정명&t=SCT `(계정명 입력 시 @제외)`
> [예시] 계정이름이 donekim인 경우 https://economicstudio.github.io/vp/?a=donekim&t=SCT
- 스팀엔진 사이트 : https://steem-engine.com/
- 스팀엔진 블록 익스플로러 : https://steem-engine.rocks/
- 스팀코인판토큰(SCT) 블록 익스플로러 : https://steem-engine.rocks/@sct
- 스팀엔진 지갑 링크 : https://steem-engine.com/?p=balances&a=계정명 `(계정명 입력 시 @제외)`
- 스팀코인판토큰(SCT) 거래 사이트 : https://steem-engine.com/?p=market&t=SCT
- 스팀코인판토큰 리치리스트 확인 : https://coin-on.com/rich
- 스팀코인판토큰 오더북 실명 확인 : https://coin-on.com/SCT


**[#2] 스팀코인판 유저가이드 모음**

- [0편] : [스팀코인판 관련 주요 Q&A](https://www.steemcoinpan.com/sct/@donekim/sct-q-and-a)
- [1편] : [스팀 키체인(Steem Keychain) 가이드](https://www.steemcoinpan.com/sct/@donekim/sct-1-steem-keychain)
- [2편] : [스팀엔진과 SCOT의 히스토리 알아보기](https://www.steemcoinpan.com/sct/@donekim/sct-2-scot)
- [3편] : [스팀엔진 소개 및 토큰거래 방법 가이드](https://steemit.com/steemengine/@donekim/1551985452874-steem-engine-dex-------)
- [4편] : [스티밋과 스팀코인판의 차이 및 스팀코인판 사용방법](https://www.steemcoinpan.com/sct/@donekim/sct-3-and)
- [5편] : [스티밋 사용 기본 툴 알아보기](https://www.steemcoinpan.com/sct/@donekim/sct-4)
- [6편] : [스팀코인판 포스팅 프로모션 기능 사용방법](https://www.steemcoinpan.com/sct/@donekim/2mdnsf-sct)
- [7편] : [6월 스팀코인판 관전포인트 3가지](https://www.steemcoinpan.com/sct/@donekim/sct-6-3)

<center><img src='https://i.imgur.com/SAXfzqa.png' /></center><br />

<center>![sct logo.png](https://cdn.steemitimages.com/DQmSkZtSMrTaaVvEbwTiTeG9Zmf2BRR5V5p6ZoHkeMMAKvb/sct%20logo.png)</center>
<center>![steemcoinpan.png](https://cdn.steemitimages.com/DQmYeNdN5spxj8fjwpQdWTSyFx2JbQPmxpmHz1f2AiDaeNR/steemcoinpan.png)</center>

**[간단요약]** [스티밋](https://www.steemit.com)이나 [스팀코인판](https://www.steemcoinpan.com/) 사이트에서 **#sct태그를 달고 블록체인이나 크립토애셋(코인) 관련 글을 작성**하시면 스팀, 스팀달러 뿐만 아니라 스팀코인판토큰(SCT)도 얻으실 수 있습니다.

- - -

This page is synchronized from the post: ['스팀엔진 블록 익스플로러(Steem Engine Block Explorere)를 소개합니다'](https://steemit.com/@donekim/steem-engine-block-explorere)
