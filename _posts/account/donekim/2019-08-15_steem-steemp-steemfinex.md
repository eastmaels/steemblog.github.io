
---
title: '[중급자 가이드] 스팀(STEEM) ↔ 스팀피(STEEMP) 양방향 자동환전 시스템 스팀피넥스(STEEMFINEX) 오픈!'
permlink: steem-steemp-steemfinex
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-08-15 03:47:06
categories:
- sct
tags:
- sct
- sct-kr
- liv
- zzan
- steemleo
- palnet
- s
- union
- jjm
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

안녕하세요, 디온(@donekim)입니다. 이틀 전에 블록체인스튜디오(@blockchainstudio)님께서 스팀엔진 마켓 유저들을 위해 **STEEM ↔ STEEMP 양방향 자동환전 시스템**을 만들어주셨습니다. 

스팀엔진 마켓에서 토큰 구매를 위해 스팀(STEEM)을 스팀페깅토큰(STEEMP)으로 전환하거나, 스팀엔진 마켓에서 토큰 판매를 통해 얻은 스팀페깅토큰(STEEMP)을 스팀(STEEM)으로 바꾸고 싶은 경우 이제는 **스팀피넥스(STEEMFINEX)를 통해 1%보다 저렴한 수수료로 자동환전이 가능**합니다. 

스팀피넥스에 대한 소개나 보다 상세한 사용방법은 아래의 원문을 확인하시기 바랍니다.

- 링크 1 : [[Steemfinex] 최저 수수료 0% 스팀 <-> 스팀P 자동환전시스템. 대기시간만큼 수수료 인하. 테스트기간중 더 저렴한 수수료 적용](https://www.steemcoinpan.com/steemfinex/@blockchainstudio/steemfinex-low-fee-steem-steemp-exchange)

- 링크 2 : [[steemfinex] 스팀<->스팀P 자동환전시스템 수수료 페이백 / 3배 보팅 이벤트 / 사용후기에도 보팅](https://www.steemcoinpan.com/steemfinex/@blockchainstudio/steemfinex-zero-fee-event)


## #1. 사용방법
---

일단 직관적으로 간단하게 설명을 하면 **@steemfinex라는 계정으로 환전을 원하는 만큼의 스팀(STEEM) 또는 스팀피(STEEMP)를 전송**하시면 됩니다. 

- 스팀(STEEM)을 스팀피(STEEMP)로 바꾸고 싶은 경우 : @steemfinex로 원하는 만큼의 스팀(STEEM) 전송

- 스팀피(STEEMP)를 스팀(STEEM)으로 바꾸고 싶은 경우 : @steemfinex로 원하는 만큼의 스팀피(STEEMP) 전송

다만, **곧바로 환전을 하고자 하시는 분들은 토큰을 전송하기 전에 스팀피넥스에 즉시 이체가 가능한 토큰이 있는지를 먼저 확인**하셔야 합니다. 

![steemfinex.png](https://cdn.steemitimages.com/DQmZWKCWcFUfLgNEJr9sKLnbvFDuHM8FnAm7XyVe9cHVNbd/steemfinex.png)

- 스팀피넥스 지갑 잔액 확인 : https://steempeak.com/@steemfinex/transfers

위와 같은 경우에는 현재 스팀피넥스 계정에 122 STEEMP가 있으므로, **122개 미만의 스팀(STEEM)을 스팀피넥스 계정으로 전송하는 경우 즉시 스팀피(STEEMP)를 환전** 받으실 수 있습니다.

<center>![steemfinex0.png](https://cdn.steemitimages.com/DQmPYSjLu3sjXwWzQ7fhL7eyqD8GVBCzdBbUdbq5Fo4wwod/steemfinex0.png)</center>

이런 식으로 스팀키체인을 사용하셔도 되고, 스티밋월렛에서 전송을 하셔도 되며 **즉시 환전이 가능한 수량을 보내는 경우에는 별도로 메모를 입력하지 않아도 됩니다**

## #2. 잔액보다 많은 환전을 원하는 경우
---

어느 정도 예상을 하고 계시겠지만, 스팀피넥스(@steemfinex)는 본 서비스를 운영하시는 블록체인스튜디오님께서 모든 유동성을 공급하는 서비스가 아니라 **양쪽`(스팀을 원하는 유저와 스팀피를 원하는 유저)`에서 유저들이 서로 유동성을 상호 공급하게 되는 방식**입니다.

> 물론, 블록체인스튜디오님께서 스팀피(STEEMP)의 경우에는 어느 정도 유동성을 공급할 계획이시라고 합니다

- 빠른 환전을 원하는 경우 : 환전 수수료를 더 많이 내고 빠르게 환전

- 저렴한 환전을 원하는 경우 : 미리 토큰을 전송해놓고 저렴하게 환전

즉, **환전이 급하지 않은 유저들이 스팀(STEEM)이나 스팀피(STEEMP)를 미리 전송해놓으면, 환전히 급한 유저들이 조금 더 높은 수수료를 내고 먼저 환전을 해갈 수 있게 되는 시스템**인 것입니다.

<center>![steemfinex4.5.png](https://cdn.steemitimages.com/DQmNw1WX4nMKW9AxBa7Um3Kfmtz6YmFXGninsDZjRSxafkB/steemfinex4.5.png)</center>

잔액 보다 많은 환전을 원하는 경우에는 **내가 얼마든지 대기해도 문제 없는 시간을 메모에 기입**하시면 됩니다. 

예를 들어, 위와 같이 **메모에 4.5를 입력한 경우에는 4시간 30분 이후에 환전이 진행**되는 것입니다.

**[참고] 메모 입력방법**

- 메모는 시간을 기준으로 입력합니다. `ex) 1일 → 24 입력 / 30분 → 0.5 입력
- 메모를 입력하지 않은 경우 또는 잘못 입력한 경우 
   → 환전 가능한 잔액이 있는 경우 : 바로 환전처리 
   → 환전 가능한 잔액이 없는 경우 : 5분 대기 후 환불 

## #3. 대기 시간을 입력하는 이유?
---

현재 스팀피넥스(@steemfinex)의 **즉시 전환 수수료는 0.025%**로 이미 충분히 저렴한 편이지만  **1시간 경과 시마다 전환 수수료를 할인**받게 되어, 25시간 이상을 대기하였다가 전환을 하는 경우에는 수수료 없이 전환이 됩니다. 

즉 **스팀이나 스팀피로의 전환을 계획 중이기는 하지만 급하지 않은 유저들이 유동성 공급자**가 되어 계속해서 양방향의 교환이 이뤄지게 되는 것입니다.

급한 유저들은 조금 더 높은 수수료를 내고 바로 전환할 수 있어서 좋고, 급하지 않은 유저들은 유동성을 공급하는 대신 수수료를 절감받아 최종적으로는 수수료 없이 전환할 수 있어서 좋다는 장점이 있는 것입니다.

![memo.png](https://cdn.steemitimages.com/DQmUF7baWirU1eZjZa3TmzTTHfGFjHjqNSTMxZvuFuaQdVP/memo.png)

환전을 신청한 금액 중 얼마가 남아 있고, 어떤 수수료를 적용받았는지 등에 대한 정보는 메모에 남아 있기 때문에 헷갈리시는 분들은 메모를 확인하시면 됩니다.

---

블스님의 스팀피넥스를 이용하는 유저들이 많아질수록 양방향에서의 유동성 공급자들이 늘어나기 때문에, 오랜 대기시간 없이도 얼마든지 기존보다 저렴한 수수료로 자동환전이 가능해질 것으로 보입니다. 그리고 이를 통해 STEEMP로의 전환 수요 또는 STEEM으로의 현금화 수요 등에 대한 꽤나 유의미한 통계자료도 산출이 가능하지 않을까 싶네요.

유저들을 위해 멋진 자동화 환전 시스템을 만들어주신 블록체인스튜디오님께 감사드립니다^^

- - -

This page is synchronized from the post: ['[중급자 가이드] 스팀(STEEM) ↔ 스팀피(STEEMP) 양방향 자동환전 시스템 스팀피넥스(STEEMFINEX) 오픈!'](https://steemit.com/@donekim/steem-steemp-steemfinex)
