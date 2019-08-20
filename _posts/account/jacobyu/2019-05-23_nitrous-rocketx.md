
---
title: 'Nitrous, rocketX 동작 테스트'
permlink: nitrous-rocketx
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-05-23 14:24:48
categories:
- sct
tags:
- sct
- kr-dev
- busy
- jjm
- habit
thumbnail: 'https://files.steempeak.com/file/steempeak/jacobyu/lRSjASJi-EC8AA4ED81ACEBA6B0EC83B7202019-05-232021-53-28.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


여러가지 할일들이 많지만!! 
호기심에 니트로와 로켓X를 동작시켜봤습니다.

니트로 (Nitrous), 로켓X (rocketX)가 어떻게 돌아가는지 궁금했습니다.
그리고 스팀엔진이 하는걸 공짜로 해볼수 있지 않을까?
스팀컨텐서가 도대체 뭘까?
여러가지 궁금증, 호기심 덕분에..

콘덴서를 로컬에서 돌려보기로 결심했습니다!
그리고 동작시켜봤습니다.

---

## 1. 니트로와 로켓X

니트로는 여러분들이 많이 아시는 서비스인데요. 
블록체인스튜디오님이 잘 소개해주셨는데, 아래와 같습니다.
> steemit.com과 같은 customized UI (순정 스팀잇의 경우 condenser라고 부름) 위드캐시나 스팀코인판 같은 사이트 UI를 담당합니다. 얼마전 오픈소스화 되어 누구나 커스터마이징 가능합니다 -@blockchainstudio

---

로켓X는 freedomX에서 만든 것입니다.
freedomX에서도 비스무리한 UI condenser의 소스를 공개했습니다.
그게 바로 로켓X(rocketX)인데요.
아래는 로켓x에 대한 설명입니다.
> Condenser is the react.js web interface to the world's first and best blockchain-based social media platform, RocketX. It uses STEEM and SteemSmartContracts, a blockchain powered by DPoS Governance and ChainBase DB to store JSON-based content for a plethora of web applications.

---

## 2. 로컬에서 동작시킨 니트로

니트로를 동작시켜보니 weedcash와 연결돼있었습니다.
그래서 마약일기를 봐보고 댓글도 달아봤습니다. 잘 동작합니다.
![스크린샷, 20190523 215328.png](https://files.steempeak.com/file/steempeak/jacobyu/lRSjASJi-EC8AA4ED81ACEBA6B0EC83B7202019-05-232021-53-28.png)

---

## 3. 여러가지 설정을 수정

다음에는 여러가지 설정을 수정해봤습니다.
아무것도 안보입니다. ㅜㅜ

![image.png](https://files.steempeak.com/file/steempeak/jacobyu/HiAz5K6Z-image.png)

---

## 4. 느낀점

개발자 관점에서 느낀점을 적어보겠습니다.

##### 1. 니트로, 로켓X 모두 스팀컨덴서를 포크해서 만든 프로젝트로 보입니다.

전 로켓x를 좀 더 파보기로 결심했습니다.
니트로는 스콧봇과 뗄수없는 거의 한몸같은 것 같지만,
로켓x는 스팀, 스팀엔진 토큰까지만 연결된 느낌이였습니다.

##### 2. 콘덴서를 도커에서 동작할 수 있도록 했다.

도커.. 아주 편리합니다.
서버셋팅, 환경셋팅, 빌드, 라이브러리 설치
다 필요없습니다.  도커 짱!
도커를 활용해서 콘덴서를 동작시킬 수 있도록 했고,,, 생략.

##### 3. 로켓X에 대한 기대

여기서 뭔가 수정을 하면
원하는 태그의 글만 볼 수 있으며,
보팅할 때 내 토큰을 사람들에게 줄 수 있고,
광고도 붙여보고,
카테고리도 만들어보고
**스팀엔진에 돈 안내고** 다 해볼 수 있겠다!

**딱 느낌이 왔습니다.**
문제는 제가 웹개발을 취미로 시작한지 얼마 안돼서.. 
원하는 결과물을 잘 만들어낼 수 있을까? 그런 걱정이 드네요.

---


좀더 진행을 해보고 유의미한 결과물이 나오면 
한번 다시 포스팅을 해보겠습니다.

글을 생각나는대로 막 적어서.. 읽기가 불편할 것 같군요ㅜㅜ

여러 스팀잇 유저님들의 글을 보면서 글쓰기 실력을 키우도록 하겠습니다.

뿅!

----

#### 참고

콘덴서의 깃헙 주소
* https://github.com/freedomexio/rocketx-condenser
* https://github.com/eonwarped/nitrous/

스팀엔진 용어 설명
* https://steempeak.com/kr-dev/@jacobyu/2177-steem-engine-terms
* https://steempeak.com/kr/@blockchainstudio/smt-vs-steem-engine-1


- - -

This page is synchronized from the post: ['Nitrous, rocketX 동작 테스트'](https://steemit.com/@jacobyu/nitrous-rocketx)
