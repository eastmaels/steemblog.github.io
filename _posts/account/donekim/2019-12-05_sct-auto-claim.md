
---
title: '[SCT] 스팀코인판의 오토클레임(Auto Claim) 기능'
permlink: sct-auto-claim
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-12-05 23:11:09
categories:
- sct
tags:
- sct
- sct-kr
- sct-userguide
- liv
- zzan
- palnet
- steemleo
- s
- union
- dblog
- busy
- mini
thumbnail: 'https://files.steempeak.com/file/steempeak/donekim/c1Rl6UiM-autoclaim.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![autoclaim.png](https://files.steempeak.com/file/steempeak/donekim/c1Rl6UiM-autoclaim.png)

안녕하세요, 디온(@donekim)입니다. 이미 인지하고 계시는 분들도 많으시겠지만**현재 스팀코인판에서는 SCT토큰의 오토클레임(Auto Claim) 기능을 적용**하고 있습니다. 

해당사항에 대해 아직 별도의 포스팅이 없는 관계로, 혹시라도 모르고 계실 분들을 위해 SCT토큰 오토클레임에 대해서 설명을 드립니다.

## #1. 오토클레임이란?
---

오토클레임(Auto Claim)은 유저 본인이 별도로 클레임을 하지 않더라도 **1일 1회 자동으로 토큰 클레임이 되어 내 지갑으로 토큰이 들어오게 되는 기능**입니다. 

![claim.png](https://cdn.steemitimages.com/DQmW6f4LxPHHLuF8tNKxKNWGBrzC3q37dAVASoJ3JrJDArL/claim.png)

일반적으로 스티밋이나 다른 스팀엔진 트라이브에서는 위와 같이 `내 지갑으로 입금하기`라는 버튼을 클릭해야만 보상이 온전하게 내 지갑으로 들어와 토큰 전송, 파워업 등이 가능해집니다.

> Steemauto나 블스(@blockchainstudio)님의 Scotauto 서비스를 이용하고 있는 유저의 경우에는 일정한 주기를 두고 오토클레임을 하게 되어 있으나, 일반적으로는 유저 본인이 수동 클레임을 진행하는 것이 원칙입니다.

그러나, 스팀코인판에서는 모든 활성유저들이 신청여부에 관계없이 1일 1회 자동으로 클레임이 진행됩니다. 

## #2. 오토클레임 주기
---

개인적으로 확인을 해 본 결과, **오토클레임은 거의 정확하게 24시간 주기로 진행**됩니다. 앞 뒤로 약간의 시차가 존재하긴 하지만 그 차이가 1분 이내로 거의 24시간에 딱 맞추어 진행이 된다고 생각하시면 됩니다.

다만, 모든 유저들의 오토클레임이 일괄적으로 동일한 시간에 진행되는 것은 아닙니다. 

일단 해당 기능은 12월 1일부터 테스트 적용이 된 것으로 보이는데, 각 유저별로 12월 1일에 클레임이 되었던 시각을 기준으로 **각각 고유한 24시간 주기**로 움직입니다.  

![date3.png](https://cdn.steemitimages.com/DQmP9xRM3Q6zpzjxi5hfu7K1hW6V2Hg4zjk46YtyESdqBqD/date3.png)

![date2.png](https://cdn.steemitimages.com/DQmNk7ioWhpBpSNNykKL37gbvRdCrVA3CXsTxeBkuwYFyW3/date2.png)

![date.png](https://cdn.steemitimages.com/DQmWpq4ppbE5ZBz1qjksietpz7iGYZJFxL9w8UKiSTuYZNK/date.png)

스팀엔진 익스플로러에서 트랜잭션 내역을 확인해보시면, 제 계정의 경우에는 3시 36분, **우리나라 시간 기준으로는 오후 12시 46분 쯤에 오토클레임이 실행**되고 있음을 알 수 있습니다. 

## #3. 오토클레임 주의사항
---
오토클레임 기능이 적용된 12월 1일부터 **SCT토큰은 유저 본인이 수동으로 클레임을 하더라도 바로 클레임이 되지 않는다는 점을 주의**하셔야 합니다. 

**SCT토큰은 나의 24시간 주기가 돌아오는 그 시각에 맞춰 1일 1회만 클레임이 가능**합니다. 리워드 내역에서는 포스팅 페이아웃 시점에 맞춰 몇 개의 토큰이 클레임 가능한지 확인할 수 있는 것은 기존과 동일하지만, 1일 2회 이상의 클레임은 불가능한 것입니다.

혹시라도 저자 보상으로 받은 SCT를 홍보소각 목적으로 활용하려고 계획하시는 경우에는 반드시 이 점을 참고로 하여 SCT잔액 관리를 하실 필요가 있습니다.

개인적으로 추측해봤을 때 스팀코인판 운영진에서 이렇게 1일 1회 오토클레임 기능을 세팅한 이유는 **SCT토큰의 발행 수량이 일별로 차이가 발생했던 것을 해결하기 위함**이 아닐까 생각합니다.

> @sct.state 계정의 리포트를 살펴보면 SCT토큰의 월별 발행량은 일정한 반면, 일 단위 또는 주 단위로 체크해보는 경우에는 토큰 발행 수량에 차이가 발생하는 것을 확인할 수 있습니다. 별도의 퍼센티지를 설정한 M이나 dev, ref 풀의 경우에는 일일 발행 수량도 정확한 반면에, 저자 및 큐레이터 보상풀의 발행량은 불안정한 모습을 보여주고 있습니다.

스팀코인판 운영팀에 문의해서 받은 답변에 따르면 **오토클레임 기능이 새로운 기능이라 안정적으로 돌아가는 것이 확인되면 클레임 주기가 좀 더 짧게 조정될 예정**이라고 하니 지금은 혹시나 조금 불편하시더라도 여유 있게 잔액을 관리하시는 것이 좋을 것 같습니다^^

- - -

This page is synchronized from the post: ['[SCT] 스팀코인판의 오토클레임(Auto Claim) 기능'](https://steemit.com/@donekim/sct-auto-claim)
