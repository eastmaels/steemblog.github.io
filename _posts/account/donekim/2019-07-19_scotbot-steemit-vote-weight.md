
---
title: '[가이드] SCOTBOT과 STEEMIT의 보팅가중치(vote weight)를 구분하여 사용하는 방법'
permlink: scotbot-steemit-vote-weight
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-07-19 19:44:36
categories:
- sct
tags:
- sct
- s
- liv
- steemleo
- zzan
- palnet
- stem
- creativecoin
thumbnail: 'https://files.steempeak.com/file/steempeak/donekim/TZOoxvq4-holger.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![holger.png](https://files.steempeak.com/file/steempeak/donekim/TZOoxvq4-holger.png)

안녕하세요, 디온(@donekim)입니다. 오늘 홀거(@holger80)가 포스팅을 통해 **스캇봇에서의 보팅가중치(vote weight)를 스티밋과 구분하여 사용할 수 있게 되었음을 공지**하였습니다. 이제부터 간단한 세팅을 통해서 스팀코인판과 같은 스팀엔진 트라이브에서는 50%로 보팅을 하지만, 스티밋에서는 25%로만 보팅이 되도록 사전에 설정을 해 놓을 수 있습니다. 

보다 자세한 원문 내용이 궁금하신 분들은 아래의 링크를 참고해주시기 바랍니다. 아래에서는 보팅가중치를 설정하는 방법에 대해서 안내를 드리도록 하겠습니다.

- 원문 : [scotbot: it is now possible to set vote/downvote weight multiplier to balance the all the different vote power](https://www.steemcoinpan.com/scot/@holger80/scotbot-it-is-now-possible-to-set-vote-downvote-weight-multiplier-to-balance-the-all-the-different-vote-power) by @holger80

## #1. 세팅방법
---

스캇봇과 스티밋의 보팅가중치를 다르게 구분하여 사용하기 위한 세팅방법을 설명하기에 앞서, **본 방법은 스캇봇과 스티밋의 보팅가중치가 완전히 독립적으로 작동하는 세팅이 아니라는 점**을 먼저 말씀드립니다. 

이 세팅방법은 **보팅 배율(vote multiplier)을 사전에 정해놓는 방법**으로, 예를 들자면 `스팀잇에서의 보팅파워에 비해 2배로 스팀코인판에서 보팅`이 되도록 설정을 하는 방식입니다. 만약 스티밋에서의 보팅 가중치에 비해 2배로 스팀코인판에서 자동보팅 되도록 설정을 하고 스티밋에서 50%로 보팅을 하면 스팀코인판에서는 100% 보팅이 되는 것입니다.

> **[예시]**
> - 보팅 배율을 스티밋 : 스캇봇 = 1 : 2 (=2배)로 설정하는 경우 → 스티밋에서 50%로 보팅하면 스팀코인판에서는 자동으로 100%의 보팅가중치로 보팅을 하게 됨
> - 보팅 배율을 스티밋 : 스캇봇 = 2 : 1 (=0.5배)로 설정하는 경우 → 스티밋에서 50%로 보팅하면 스팀코인판에서는 자동으로 25%의 보팅가중치로 보팅을 하게 됨

![vote1.png](https://files.steempeak.com/file/steempeak/donekim/tAYghdXL-vote1.png)

① https://eonwarped.github.io/steem/sk/main.html 사이트에 접속합니다

![vote2.png](https://files.steempeak.com/file/steempeak/donekim/s964QWzN-vote2.png)

② 그 다음 위와 같이 Custom_JSON이라고 적혀있는 부분을 찾습니다

![vote3.png](https://files.steempeak.com/file/steempeak/donekim/rC5KdPau-vote3.png)

③ 여기서 우리가 입력해야 하는 부분은 위의 화면에서 볼 수 있는 것처럼 **①username, ②id, ③custom_json**입니다. 다음과 같이 입력을 하시면 됩니다.

- username : 나의 스티밋 계정 `(예시 : donekim)`
- id : `scot_set_vote`
- custom_json : `{"symbol": "토큰심볼", "vote_weight_multiplier": 배수}`

custom_json의 경우, 만약 스티밋에서의 보팅가중치의 2배로 스팀코인판에서 보팅이 들어가도록 설정하고자 하는 경우에는 다음과 같이 입력하시면 됩니다.

> {"symbol": "SCT", "vote_weight_multiplier": 2}

![vote4.png](https://files.steempeak.com/file/steempeak/donekim/TmnW5vRL-vote4.png)

④ 위와 같이 입력이 완료되었으면 **send 버튼을 클릭**합니다.

<center>![vote5.png](https://files.steempeak.com/file/steempeak/donekim/mfpETDe7-vote5.png)</center>

⑤ 위와 같이 스팀키체인 팝업창이 나타나면 **[CONFIRM]을 클릭**합니다.

![vote6.png](https://files.steempeak.com/file/steempeak/donekim/TC3apZhR-vote6.png)

⑥ https://steemd.com/@계정명 으로 접속하여 위와 같은 트랜잭션이 정상적으로 발생했는지를 확인합니다. 


## #2. 보팅가중치 테스트해보기
---

**저 같은 경우에는 스티밋 : 스팀코인판 = 1 : 1/10 으로 설정**해보았습니다. 즉, 스티밋에서 100%의 보팅가중치로 보팅을 하는 경우, 스팀코인판에서는 10%만 보팅이 들어가도록 설정을 한 것입니다.

![steem vote.png](https://files.steempeak.com/file/steempeak/donekim/eI2IPgEY-steem20vote.png)

홀거의 포스팅에 스티밋에서 100%의 풀보팅을 해 본 결과,

![sct vote.png](https://files.steempeak.com/file/steempeak/donekim/16t9XYcH-sct20vote.png)

스팀코인판에서는 풀보팅의 1/10인 10%로 보팅이 된 것을 확인할 수 있습니다.

## #3. 주의사항
---

위에서 소개드린 Vote Multiplier를 세팅한 뒤에 큐레이팅을 하며 주의해야 할 점은 **어디서 보팅을 하는지는 전혀 상관이 없다는 점**입니다. 

**스티밋 : 스팀코인판 = 100 : 50 으로 설정한 경우**의 예를 들어보겠습니다.

이와 같이 설정한 경우, 스티밋에서 #sct태그를 사용한 포스팅에 100% 풀보팅을 하면 당연히 스팀코인판에서는 50%로 보팅이 된다는 것에 대해서는 헷갈리시는 분들이 없겠지만, **스팀코인판에서 보팅을 하는 경우가 문제**입니다. 

![test1.png](https://files.steempeak.com/file/steempeak/donekim/B8un40qn-test1.png)

**만약에 스팀코인판에서 50%로 보팅을 하면 스티밋에서는 100% 풀보팅이 될까요?**

정답은 **그렇지 않다**입니다.

여기서 조금 혼란이 올 수 있는데 스팀코인판에서 보팅을 하시든 트리플에이에서 보팅을 하시든 **우리가 보는 보팅바는 그냥 스티밋의 보팅바로 생각**을 하셔야 합니다. 

![test2.png](https://files.steempeak.com/file/steempeak/donekim/F30I2ByE-test2.png)

위의 화면에서 보실 수 있는 것처럼 **스팀코인판에서 50%로 보팅을 하면, 스티밋에서 50%로 보팅을 한 것으로 인식을 하면서 스팀코인판에서는 50%의 50%인 25%로 보팅**이 들어가게 되기 때문입니다. 

따라서 Vote Multiplier세팅 후 스팀엔진 트라이브 니트로스 인스턴스 사이트에서 큐레이팅 활동을 하실 때는 **비록 스티밋 포크 사이트에 있다고 하더라도 스티밋에 있다고 생각을 하고 보팅을 해야 헷갈리지 않을 수 있습니다.** 혹시라도 보팅가중치를 분리하여 사용할 생각이 있으신 분들은 이 점을 잘 고려하시어 배율 등을 설정하시기 바랍니다. 


> **[보너스 소식]**
> - **SCOTBOT 운영진들이 이제부터 자신들의 스팀엔진 트라이브에서 특정 태그와 앱을 제외하는 설정이 가능**합니다. 이 말인 즉슨, 운영진이 사전에 설정해놓은 금지 태그 및 앱을 사용한 포스팅은 이제부터 다른 사용자들에게 보이지 않게 되고 보상도 받을 수 없도록 엄격한 운영이 가능해진다는 뜻입니다.

- - -

This page is synchronized from the post: ['[가이드] SCOTBOT과 STEEMIT의 보팅가중치(vote weight)를 구분하여 사용하는 방법'](https://steemit.com/@donekim/scotbot-steemit-vote-weight)
