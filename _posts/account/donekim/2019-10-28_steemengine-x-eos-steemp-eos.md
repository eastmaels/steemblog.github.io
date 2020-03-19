
---
title: '[SteemEngine X EOS] STEEMP를 이오스 메인넷에서 EOS로 바로 교환할 수 있다고?'
permlink: steemengine-x-eos-steemp-eos
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-10-28 20:02:18
categories:
- sct
tags:
- sct
- sct-kr
- sct-freeboard
- liv
- zzan
- palnet
- steemleo
- s
- union
- dblog
- busy
thumbnail: 'https://cdn.steemitimages.com/DQmZY4z3XXqT2Zk21949dB2nocigWXcHgzWWJfCFDSF3YWe/steemengine_thumbnail.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![steemengine_thumbnail.png](https://cdn.steemitimages.com/DQmZY4z3XXqT2Zk21949dB2nocigWXcHgzWWJfCFDSF3YWe/steemengine_thumbnail.png)

안녕하세요, 디온(@donekim)입니다. 스팀엔진 마켓의 기축통화이자 STEEM의 페깅 토큰으로 활용되고 있는 **STEEMP토큰이 이오스 메인넷을 지원**합니다. 

현재 이오스 메인넷 상에서의 STEEMP토큰은 테스트 중인 단계로 아직 탈중앙화거래소(DEX)등 에서의 거래가 가능하지는 않지만, **추후 EOS를 기축으로 하는 거래소 상장을 통해  STEEMP토큰을  이오스 메인넷에서 거래하는 것이 가능해질 예정**입니다. 

> - **STEEMP토큰이란?**
> STEEM peg 토큰으로 스팀엔진 사이드체인에서 스팀엔진 기반 토큰들의 교환 목적으로 사용할 수 있는 토큰으로 스팀(STEEM)과 1:1로 페깅되어 있는 토큰입니다.  

<center>![withdraw.png](https://cdn.steemitimages.com/DQmcbZu3ppnDbHc2RLSRD9o6RQncYJkNbcYQq4JGfZ5MydY/withdraw.png)</center>

현재 STEEMP토큰의 경우에는 **스팀엔진 사이드체인 ↔  스팀 블록체인 간의 1:1 교환만 가능**했으나, STEEMP토큰을 이오스 메인넷으로 직접 전송하여 EOS로 거래를 하는 것이 조만간에 가능해질 것으로 보입니다. 

## #1. 요약(TL;DR)
---

기존에 STEEMP를 현금화하기 위해서는 STEEM으로 환전한 후에 다시 거래소에서 매도하는 절차가 필요했고, 반대로 STEEMP를 구매하기 위해서는 사실상 STEEM을 STEEMP로 전환하는 방법 밖에는 없었습니다.

> 비트코인페깅(BTCP), 라이트코인페깅(LTCP), 이오스페깅(EOSP) 등이 있으나 매수/매도 호가 갭이 굉장히 컸기 때문에 실질적으로는 STEEM-STEEMP간 교환이 주를 이루었습니다.

그러나 이제는 **STEEMP를 EOS로 전환하거나, EOS를 STEEMP로 전환하는 것도 가능**해질 것으로 보입니다. 


![STEEMP eos.png](https://cdn.steemitimages.com/DQmXutQcCbdAdFNJmogpEnh3aMfDiUomEiTyUNgiYpNjJci/STEEMP%20eos.png)

- 링크 : https://bloks.io/account/steemoneosio

## #2. 스팀엔진 → 이오스 메인넷
---

아직 스팀엔진팀의 공식 가이드가 발표되지는 않은 상태이기 때문에, **아래에서 안내드리는 내용은 단순히 참고 및 테스트용으로만 활용**해보시는 것을 추천드립니다. `(체인간 이동 시에는 STEEMP-STEEM교환과 동일하게 1%의 수수료가 부과됩니다)`

> 더불어, 아직 STEEMP가 이오스 메인넷 상의 DEX에 상장된 상태는 아니기 때문에 **스팀엔진 사이드체인에서 곧바로 이오스 메인넷으로 실시간 전송이 가능한지 여부 확인**정도 이외의 별다른 기능은 없음을 미리 말씀드립니다.

<center>![steem_to_eos.png](https://cdn.steemitimages.com/DQmcMdKiQ4m2X2RBRwQ9baLE8T7tyqfm3d4HZcZ6X2EmYav/steem_to_eos.png)</center>

먼저, 스팀엔진 월렛에 있는 STEEMP를 이오스 메인넷으로 전송하는 방법입니다. `(물론 전송을 위해서는 이오스 메인넷 계정이 있어야 합니다)`아래와 같이 순서대로 입력을 하신 뒤에 전송을 하시면 됩니다.

- 수신계정명 : `steem-tokens`
- 보낼 수량 : 보내고자 하는 수량 입력
- 메모 : `EOSSTEEM 이오스계정명`

> 위의 이미지에서는 제 이오스 메인넷 계정인 `steemdonekim`계정으로 STEEMP를 보내기 위해 입력한 예시입니다.

![steem_to_eos2.png](https://cdn.steemitimages.com/DQmbUehhfEVMfmsPyKCuce58htDgbEVj1bVadnb7Fe2Pudk/steem_to_eos2.png)

트랜잭션을 살펴보면 @steem-tokens라는 계정으로 1 STEEMP가 보내진 것을 확인할 수 있습니다. 그러면 이오스 계정에 진짜 STEEMP가 들어오는지 볼까요?

![eos transaction.png](https://cdn.steemitimages.com/DQmPadFab3kvswtw6bx1yD7J4CWXjAQZFJsvbSN3kNmJ6EN/eos%20transaction.png)

이오스 메인넷 트랜잭션 조회화면입니다. `steemoneosio`라는 계정에서 제 계정인 `steemdonekim`계정에 0.99 STEEMP를 보내준 것을 확인할 수 있습니다. 

> 위에서 말씀드렸던 것처럼, STEEMP-STEEM간 교환과 동일하게 전송수수료는 1%입니다. 그리고 잘못된 계정명을 입력한 경우 자동으로 반환되는 기능은 구현되어 있지 않으니, 잘못된 계정명을 입력하지 않도록 주의하세요!

현재 이오스 메인넷의 STEEMP는 steemoneosio라는 계정이 보유하고 있는 STEEMP수량을 초과하여 입금 요청이 있는 경우에 **스팀엔진에서 입금 트랜잭션을 확인 → STEEMP토큰 추가 발행 → 전송**순의 방식으로 트랜잭션이 이루어집니다.

## #3. 이오스 메인넷 → 스팀엔진
---

이번에는 반대로 이오스 메인넷 계정에 보관 중인 STEEMP를 스팀엔진 월렛으로 입금하는 방법에 대해서 살펴보겠습니다. `(이번에도 위와 같이 전송수수료가 1% 부과됩니다)`

![eos_to_steem.png](https://cdn.steemitimages.com/DQmegBLQBCuKxyBUXDUEv1sEhQwZbwzZtvK3HfpoTz3NQns/eos_to_steem.png)

- 받을계정명 : `steemoneosio`
- 보낼 수량 : 보내고자 하는 수량 입력
- 메모 : `STEEMP 스팀계정명`

> 위의 이미지에서는 제 스팀 계정인 `donekim`계정으로 STEEMP를 보내기 위해 입력한 예시입니다.

![eos_to_steem2.png](https://cdn.steemitimages.com/DQmdMZyLYBAvC2qz7M825oyvxganitJVF7ESJRDgD9vUYDo/eos_to_steem2.png)

전송 후 조금 기다리면, 위와 같이 내 스팀엔진 월렛으로 STEEMP가 다시 들어오는 것을 확인하실 수 있습니다.

## #4. 개인적인 생각
---
![steemengine.png](https://cdn.steemitimages.com/DQmed4Z4rPPZKomkyXWdVc75AdudPSFnTMBg3descj6Gq5t/steemengine.png)

STEEMP를 시작으로 스팀엔진 기반 토큰들이 하나둘씩 이오스 메인넷에 올라가기 시작하는 것은 **STEEM이외의 암호화폐로의 교환, 현금화를 위한 추가적인 옵션**이 생기게 되는 것을 의미합니다. 

반대로 STEEMP를 필요로 하는 유저들의 경우 꼭 STEEM을 살 필요 없이 EOS로 STEEMP를 구매하는 것도 가능하겠죠.

기존에 스팀엔진 토큰 마켓의 연결통로가 STEEM에만 한정되어 있었다는 것이 스팀엔진 생태계의 가장 큰 약점이기도 했고, **스팀엔진 팀에서는 SMT출시 이후에 SMT vs S.E`(Steem Engine)`구도가 되었을 때 고유의 생태계를 지키기 위한 대비 절차**가 필요하다고 생각했을 수도 있습니다.

![tokens.png](https://cdn.steemitimages.com/DQmfWcdG6XZdSy8mVBQrUpmqnaRgoRGQBwWmuuynq8UL61K/tokens.png)

물론, 현재 이오스 메인넷에서 가장 많은 거래량을 자랑하는 탈중앙화거래소인 Newdex의 경우에는 정말 많은 이오스 기반 디앱 토큰들이 상장되어 있고, **여기서 STEEMP나 스팀엔진 기반 토큰들의 거래가 얼마나 활성화될 수 있을지는 미지수**입니다.

하지만 생태계의 게이트웨이가 다른 생태계로 연결 및 확장될수록 스팀엔진 생태계의 성장가능성이 계속 높아질 것이고, 양쪽 체인 모두에 관심을 가지고 있는 커뮤니티의 크기가 꽤 크다는 점은 어느 정도 기대를 걸어도 좋을 것으로 보이는 대목입니다. 

이와 더불어, **이미 잘 구축되어 있는 EOS모바일 월렛, 텔레그램 팁 봇 등의 기능이 자연스럽게 트라이브 토큰(SCOTBOT 토큰)들에게도 적용될 가능성**이 높고, 양쪽의 생태계가 비교우위를 가진 아이템을 가지고 서로에게 침투해 들어갈 때 예상치 못한 시너지 효과들이 발생할 수 있을지도 모르겠네요.

- - -

This page is synchronized from the post: ['[SteemEngine X EOS] STEEMP를 이오스 메인넷에서 EOS로 바로 교환할 수 있다고?'](https://steemit.com/@donekim/steemengine-x-eos-steemp-eos)
