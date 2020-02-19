
---
title: '[개발] Steemcoinpan 큐레이션 보팅 시스템 #3'
permlink: steemcoinpan-3
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-10-13 12:28:12
categories:
- sct
tags:
- sct
- sct-kr
- sct-freeboard
- sct-dev
- busy
- zzan
- jjm
- kr
thumbnail: 'https://cdn.steemitimages.com/DQmPfGUF7hnyBWXeo3mjtCqxMJ3WZSU7h5oSB8q56UQLBoM/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


안녕하세요. 제이콥입니다.

스팀코인판 큐레이션 시스템을 계속 손보고 있습니다. 한번에 잘 동작하면 좋겠지만, 하나씩 생각못하는 부분이 있었습니다. 

저는 구현해야할 기능들을 하나씩 메모장에 적어놓고 밑줄을 적으면서 하고있었는데요.


* ~~보팅퍼센트 체크하기, 보팅파워가 100퍼센트가 아니면 보팅 x~~
* ~~보팅파워가 100프로 이상일때, 어떻게 처리할 것인가?~~
    * ~~기존 - 나머지에게 동일하게 분배~~
    * ~~업데이트 예정 - 1번 더 퍼센트별로 분배, 그리고 동일하게 분배~~

---

이번 주말에는 아래 내역을 작업했습니다.

* 보팅내역은 주말중에 html로 해서 스팀코인판에서 잘 볼수있도록 한다.
* 계산에 사용된 소각내역이나, 소유 비율도 같이 테이블에 넣기
* 9시 2분에, 9시까지 소각된것만 활용한다. (9시 1분에 소각한것은 다음날에 적용됨.)

기존에는 마크다운으로 큐레이션리스트를 보여줬었는데요. 스팀코인판에서는 이상하게 보이는 경우가 있어서, 이걸 html로 보여주는 작업을 했습니다. 개발팀에서 이미 잘 만들어놓은게 있어서 참고해서 만들었어요. ㅎㅎ

큐레이션 리스트에 보팅비율을 계산하기 위해 사용된 소각량, sct비율,krwp비율 등을 같이 표에 적어봤습니다.

오늘 아침 8시 59분에 소각한 내역이 보팅 리스트에 포함되지 않는 경우가 있었습니다. 원래는 9시 정각에 9시 이전에 소각한걸 체크하는 거였다면, 9시 2분 정도에 9시까지 소각된 내역을 체크하는걸로 바꿨습니다. 이렇게 하면, 9시 1분에 소각된 건 다음날 적용될 것이고, 8시 59분에 소각한건 바로 적용될 것입니다.


![](https://cdn.steemitimages.com/DQmPfGUF7hnyBWXeo3mjtCqxMJ3WZSU7h5oSB8q56UQLBoM/image.png)

스팀코인판의 큐레이션/홍보 소각 시스템이 점점 보완되고있고 안정적으로 돌아가고 있습니다. 다음주에는 개발팀에서 상의해서 따봉 소각도 홍보 소각에 적용될 수 있도록 해보겠습니다.

감사합니다.

- - -

This page is synchronized from the post: ['[개발] Steemcoinpan 큐레이션 보팅 시스템 #3'](https://steemit.com/@jacobyu/steemcoinpan-3)
