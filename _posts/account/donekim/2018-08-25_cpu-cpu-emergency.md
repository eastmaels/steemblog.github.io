
---
title: '[이오스 이야기] CPU가 없어서 추가로 스테이킹도 할 수 없을때는? CPU Emergency서비스를 이용해보자!'
permlink: cpu-cpu-emergency
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-08-25 19:07:15
categories:
- coinkorea
tags:
- coinkorea
- kr-coin
- kr-series
- eos
- jjangjjangman
thumbnail: 'https://cdn.steemitimages.com/DQmVqig7tJfGTnDf5v1fe5bZ7Qb3TTGtydJYRU5BoekFJTM/main%20deonkim%20eos.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![main deonkim eos.png](https://cdn.steemitimages.com/DQmVqig7tJfGTnDf5v1fe5bZ7Qb3TTGtydJYRU5BoekFJTM/main%20deonkim%20eos.png)

> 이오스 포스팅 열심히 쓰라고 멋진 대문을 선물해주신 @designkoi님께 감사드립니다 :D

![steemit_logo.png](https://cdn.steemitimages.com/DQmaZsenPDf5Qn5nJzDZNkVg1aCQUyXNwqwK1fk8qe4jhKa/steemit_logo.png)


안녕하세요, 디온(@donekim)입니다. **얼마 전에 EOS 네트워크 상에서 트랜잭션 과부하로 인하여 자신의 계정에 소량의 이오스만을 스테이킹한 사용자들이 몇 시간 동안 자신들의 계정을 사용하지 못하는 해프닝**이 벌어졌었습니다. 

이는 **트랜잭션 과부하에 따라 대역폭 안정화 알고리즘이 작동을 하면서 발생한 일**인 것으로 밝혀졌는데요, 해당 사건에 대해서는 코남(@jxwonah)님께서 아주 쉬운 예를 들어 친절하게 설명해주신 영상을 참고해보시면 좋을 것 같습니다. 해당 영상은 [[EOS 에어드랍 이벤트 + 댓글 보팅 이벤트] EOS 가 디도스 공격을 받았다고?](https://steemit.com/dlive/@jxwonah/92fa0e39-a819-11e8-9b42-0242ac110003)라는 포스팅을 참고하시기 바랍니다. 

오늘은 이오스 생태계에서 **이렇게 급작스러운 트랜잭션 과부하에 따라 일시적으로 CPU자원이 부족해졌을 때, 이를 해결할 수 있는 솔루션이 등장했다는 기쁜 소식**을 전해드리려고 합니다. 


사실 최근의 대역폭 안정화 알고리즘이 작동했을 때 많은 수량의 이오스를 스테이킹 시켜놓은 계정 사용자들의 경우에는 해당 사태가 벌어졌는지 인지도 하지 못하고 있는 경우도 더러 있었습니다. 그렇지만, 이오스에 대해서는 아직 잘 모르지만 이오스나이츠라는 게임을 즐기기 위해서 새로운 계정을 생성하고 소량의 이오스 토큰을 스테이킹 시킨 상태에서 게임을 즐기시던 분들은 게임에 접속조차 하지 못해서 멘붕상태에 빠지기도 했습니다. 

그래서 이오스나이트 텔레그램 방이나 커뮤니티에서는 최근 블록트위터의 스팸 트랜잭션으로 인해 CPU자원이 급작스럽게 변동되는 문제에 대해 많은 분들이 우려의 목소리를 높였습니다. 왜냐하면 이오스 토큰 홀더나 투자자가 아니라 단순히 게임을 즐기기 위해서 많은 양의 이오스를 스테이킹 해야 하는 것은 너무나 비합리적으로 받아들여지기 때문이었습니다. 그래서 BP차원에서 뭔가 해결방안을 내놓아 달라는 의견들이 많이 있었습니다.


**사실 CPU자원의 급작스러운 변동 시 이를 사전에 예방하거나 해결할 수 있는 방법**은 아래와 같이 4가지 정도가 있다고 할 수 있습니다.

**① 자신의 계정에 미리 여유있는 수량의 이오스를 스테이킹 시켜 놓을 것**

**② 미리 여유있는 수량의 이오스를 스테이킹 시켜 놓은 지인이 있을 것**

**③ 이오스 블록프로듀서들이 여유 있게 CPU를 제공할 것**

**④ 악의적으로 대규모의 스팸 트랜잭션을 만드는 계정에 대한 블랙리스트 또는 그레이리스트를 BP들이 관리할 것**


단순히 호기심과 재미로 인해 게임을 개인적으로 즐기는 분들은 1번이나 2번과 같은 솔루션은 현실적으로 불가능에 가까웠기 때문에 3번이나 4번 솔루션을 요구하는 목소리가 높지 않았나 싶습니다. 하지만 BP들 입장에서 현재도 충분히 여유 있는 CPU를 혹시나 모르는 사태를 대비해서 항상 추가로 제공하는 것은 부담이 될 수 있고, 이오스 네트워크에서 발생가능한 상황들에 대해 battle-test를 하고 있는 계정의 트랜잭션을 무조건 막아 버리는 것은 원칙이나 기준을 정립하는 과정에서 여간 어려운 일이 아닐 수 없습니다.

**그러던 중 이오스 블록프로듀서 후보 중 하나인 EOS New York에서 CPU의 순간적인 부족 문제를 해결해주는 솔루션을 발표**하였습니다. 


![EOS New York.png](https://cdn.steemitimages.com/DQmQPSsWmWB1Uj4etqyENzDDMq2XPwSC7r1cxyXZHYCdyBS/EOS%20New%20York.png)

> 출처 : [EOS New York 관련 트위터 ](https://twitter.com/eosnewyork/status/1033335163168714752)

**그 솔루션은 바로 CPU Emergency라는 것**입니다. 

<center>![cpu time.png](https://cdn.steemitimages.com/DQmRBjTXKmoiweQGCxQVuVjJy5CSEcKbExmFG71oqVpUvS7/cpu%20time.png)</center>

CPU Emergency라는 서비스를 이용하는 경우, 만약에 어떤 사용자가 게임을 하던 도중 급작스러운 CPU의 변동으로 위와 같은 메시지가 나타났을 때 이를 해결할 수 있는 방법이 생겨납니다. 제가 한 번 테스트를 해 보겠습니다.

![resource.png](https://cdn.steemitimages.com/DQmPyBRQkTsmKNJPqVgw1AWVLcvUFF4L7aCysFnBVfxNGTG/resource.png)

만약에 나의 계정에 최소 스테이킹 수량이라고 할 수 있는 0.1EOS만이 스테이킹 되어 있는 경우에 현재 CPU는 1.32ms / 2.44ms가 되어서 이오스 네트워크 상에서 transfer나 staking 등의 트랜잭션을 발생시키는 액션이 불가능합니다. 이런 상태가 문제가 되는 것은 **거래소에서 추가로 이오스 토큰을 구매해서 오더라도 이미 해당 계정에 스테이킹되어 있는 이오스 토큰의 수량이 불충분하기 때문에 나 혼자서는 스테이킹도 할 수 없는 상황에 빠지게 되고, 다른 사람으로부터 구원의 손길을 기다려야 한다는 문제가 발생**하게 됩니다. 

이제는 위와 같은 상황이 발생했을 때는 CPU Emergency서비스를 이용할 수 있습니다. 먼저 CPU Emergency 사이트(https://www.cpuemergency.com/)에 접속을 합니다. 

![cpu emergency.png](https://cdn.steemitimages.com/DQmfBVYcZ7tt5FM4kcrKKXa9MuMdN4HQAUsdixLQsj7usWc/cpu%20emergency.png)

CPU Emergency 서비스를 신청하는 방법은 굉장히 간단합니다. 위와 같은 화면에서 `Account Name`이라는 칸에 자신의 계정이름을 입력하고, `로봇이 아닙니다`를 체크한 뒤에 `Submit`만 클릭하면 됩니다.

![cpu emergency2.png](https://cdn.steemitimages.com/DQmab9UR41YgQGUAFcHqNQJDetMAR6GN5ZNYMopDDqEAgNf/cpu%20emergency2.png)

이런 화면이 나타난다면 신청이 완료된 것입니다. 그러면, 어떻게 변화가 되었는지 확인해보겠습니다.

![resource.png](https://cdn.steemitimages.com/DQmPyBRQkTsmKNJPqVgw1AWVLcvUFF4L7aCysFnBVfxNGTG/resource.png)

![resource2.png](https://cdn.steemitimages.com/DQmX4Avv9xQvWdUKJRRGuRaPEoKkDKsN9A4k3KVfA8hjDg1/resource2.png)

기존 2.44ms에서 6.49ms로 약간의 CPU가 증가된 것을 확인하실 수 있습니다. 기존보다 0.25개의 이오스가 추가로 스테이킹 되었습니다. 이렇게 증가된 CPU를 통해서 계정 사용자는 자신의 계정으로 전송한 이오스 토큰을 myeoskit 또는 eostoolkit 등을 통해서 추가로 스테이킹함으로써 CPU자원을 추가로 사용할 수 있게 됩니다. 


![cpuemergency account.png](https://cdn.steemitimages.com/DQmZQK9CtVBsysLbpMcQJqdwZoiPUPCzCYPRMJkQy4J37Cj/cpuemergency%20account.png)

사용가능한 CPU가 없는 응급상황에서 나의 계정에 이렇게 최소한의 활동이 가능하도록 CPU자원을 스테이킹 해주는 계정은 `cpuemergency`라는 계정입니다. 

![delegated list.png](https://cdn.steemitimages.com/DQmaw6ZnCoSXEi1ymG1YJLvmDgDW6ovoyb2aevR6r3Wz3p9/delegated%20list.png)

신청을 하는 여러 계정들에게 스테이킹을 해주는 것을 확인할 수 있습니다. 그렇다면 이 서비스는 아무때나 신청할 수 있는 것일까요? 아무래도 해당 서비스를 제공하는 입장에서도 보유하고 있는 이오스 토큰의 한계가 있다보니, CPU Emergency서비스에는 다음과 같은 요건이 있습니다.

**① 신청자의 계정에 사용가능한 CPU자원이 10ms보다 적게 남아 있어야 합니다.**

**② 위에서 살펴본 cpuemergency라는 계정에 언스테이킹되어 있는 이오스 토큰의 수량에 여유가 있어야 합니다.** (만약 언스테이킹 되어 있는 수량에 여유가 없는 경우 신규로 스테이킹을 해줄 수 있는 가용자원이 없기 때문입니다)

③ 매일마다 사용할 수는 없고 언스테이킹된 이오스 토큰 수량의 여유가 있는 경우에 한하여, **약 3일에 한 번만 이용이 가능**합니다. 

④ 지원을 받는 CPU자원은 0.25이오스로 정해져 있으며, **4시간 동안만 사용이 가능**합니다. 



**사실 엄밀히 말해서, CPU Emergency서비스는 지원 받을 수 있는 CPU자원의 양이 그리 많지 않기 때문에 이오스 네트워크에서 트랜잭션 과부하에 따라 대역폭 안정화 알고리즘이 작동하는 경우 바로 해당 계정의 CPU를 여유 있게 만들 수 있는 서비스는 아닙니다.** (계정마다 스테이킹 되어 있는 이오스 토큰의 수량이 각기 다르고, 경우에 따라 CPU를 여유 있게 만들어주기 위해서는 엄청난 수량이 필요할 수 있기 때문에 아주 최소로만 지원을 해줄 수 밖에 없을 것 같습니다.)


이오스 계정생성 서비스를 이용해서 계정을 처음 만드신 분들이나, 다른 분들에게 계정 생성을 위탁하신 분들이 처음에 받게 되는 계정의 대부분이 최소 기준에 해당하는 0.1EOS정도만 CPU에 스테이킹 되어 있다보니, **거래소에서 가지고 있었던 이오스 토큰을 자신의 계정으로 보내서 추가로 스테이킹을 하고 싶은데도 불구하고 스테이킹 자체를 못해서 계정을 이용하지 못하는 경우를 대비하는 서비스**라고 보시는 게 좋습니다.

사실 게임과 같은 반복적으로 다수의 트랜잭션을 발생시키는 댑을 사용하기 위해서는 기본적으로 10개 이상의 이오스를 스테이킹 해 놓으시는 것을 추천합니다.  이더리움의 GAS처럼 트랜잭션을 발생시킬 때마다 소모되는 것도 아니고, 추후에 게임을 더이상 즐기지 않아서 회수하고자 하는 경우에는 언스테이킹을 통해서 얼마든지 회수가 가능하기 때문에 넉넉한 수량을 스테이킹 해 놓는 것을 아까워하실 필요가 없습니다.


이전과 같은 대역폭 안정화 알고리즘이 작동하는 경우, 바로 대처하는 것까지는 불가능하겠지만 어느 정도 CPU가 다시 안정화될 때까지 기다렸다가 이러한 CPU Emergency서비스를 통해서 계정을 사용할 수 있는 최소한의 숨통을 트여주는 서비스가 생겨났다는 사실이 개인적으로는 참 놀랍습니다. 

이오스 생태계에서 가장 중요한 한 축을 담당하고 있는 BP들이 항상 이오스 생태계에서 발생하는 여러 상황들에 대해서 주시를 하고 있고, 이를 해결하기 위한 유저 편의 시스템들을 계속해서 만들어주고 있다는 점에 대해서 감사합니다. :D





![steemit_eng.png](https://cdn.steemitimages.com/DQmXyvEeNrzp6hFun3B8ho6pRCRnvnNthGA67HH7G5Fe6Gx/steemit_eng.png)


<center>![behind banner.gif](https://cdn.steemitimages.com/DQmXBUz3S7u2z13jB39UNUder7HUADC9DvHibUEu7DTu3MR/behind%20banner.gif)



<center><pre> H O P E   F O R   T H E   B E S T , 
P L A N   F O R   T H E   W O R S T</pre>
<sub> https://steemit.com/@dONekim</sub></center>

- - -

This page is synchronized from the post: ['[이오스 이야기] CPU가 없어서 추가로 스테이킹도 할 수 없을때는? CPU Emergency서비스를 이용해보자!'](https://steemit.com/@donekim/cpu-cpu-emergency)
