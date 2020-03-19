
---
title: '[STEEM] 새로운 Full RPC node 추가 소식 및 RPC노드 설명'
permlink: steem-full-rpc-node-rpc
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-12-29 05:06:09
categories:
- sct
tags:
- sct
- sct-kr
- sct-coin
- liv
- zzan
- palnet
- steemleo
- s
- union
- dblog
- busy
- mini
thumbnail: 'https://cdn.steemitimages.com/DQmcWnAsaR1GxSNXCeWbPfr32WaMP4ArEUDhTwXrojXygAZ/thumbnail.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![thumbnail.png](https://cdn.steemitimages.com/DQmcWnAsaR1GxSNXCeWbPfr32WaMP4ArEUDhTwXrojXygAZ/thumbnail.png)

안녕하세요, 디온입니다. 지난 달에 증인으로서의 출사표를 던졌던 @techcoderx가 Full RPC 노드 운영을 시작한다고 합니다. 

해당 증인 출마자인 @techcoderx와는 아무런 관계도 없고 개인적인 친분도 없으나, 나름의 비전을 가지고 베어마켓에서도 스팀 증인에 출마한 것을 응원할 겸, 그리고 Full RPC 노드에 대한 간략한 설명도 전달해 드릴겸 해서 해당 포스팅을 소개드립니다.



- 원문 링크 : [Announcing techcoderx.com Steem full RPC node](https://steemit.com/witness/@techcoderx/announcing-techcoderx-com-steem-full-rpc-node)

## #1. 스팀 풀 노드란?
---

일반적으로 스팀 노드들은 다른 작업들을 수행하거나 다른 종류의 애플리케이션을 구동하기 위한 목적에 따라 다양한 형태의 노드가 존재합니다. 일반적인 노드들의 종류는 다음과 같습니다.

- 시드 노드(Seed node)
- 증인 노드(Witness node)
- 네트워크 브로드캐스트 노드(Network broadcast node)
- 하이브마인드 API 노드 (Hivemind API node)
- 풀 RPC 노드(Full RPC 노드)

오늘 발표하고자 하는 것이 풀 RPC 노드에 관한 것이므로 풀 RPC 노드에 중점을 두고 설명을 하겠습니다.

**풀 RPC 노드는 스팀 블록체인의 모든 데이터(예를 들어 포스팅 데이터, 큐레이션 데이터, 계정 기록 등)가 필요한 스팀 애플리케이션의 기능에 중요**합니다. 

풀 RPC 노드가 없으면 steemit.com, steempeak.com, esteem.app과 같은 인터페이스가 존재할 수 없으며 아마도 이 포스팅도 읽을 수 없을 것입니다.

 

## #2. 풀 노드의 현재 상태
---

포스팅 작성일 기준으로 현재까지 완벽하게 작동하는 풀 RPC 노드는 7개 뿐입니다. 스팀 풀 노드를 더 많이 운영하는 것은 스팀 블록체인을 보다 탈중앙화시키는 데 있어서 꽤나 중요합니다. 현재 완벽하게 작동하고 있는 풀 노드는 다음과 같습니다.

- api.steemit.com (@steemit)
- api.steem.house (@gtg)
- anyx.io (@anyx)
- steemd.privex.io (@privex)
- rpc.esteem.app (@esteemapp)
- steemd.minnowsupportproject.org (@minnowsupport)
- api.timcliff.com (@timcliff)

최근 MIRA와 Hivemind의 개발을 통해 풀 노드를 운영하기 위한 서버의 요구사항이 줄어들면서 비용도 대폭 감소하였기 때문에, 이러한 풀 노드를 운영하지 않을 이유가 없습니다.

## #3. 기술 및 성능
---

> 기술 및 성능 등과 관련된 전문적인 내용은 별도로 번역하지 않았습니다. 해당 내용이 궁금하신 분들은 원문 내용을 참고해주시기 바랍니다.

현재의 증인 순위에서는 2.8일에 한 개의 블록을 생성하는 수준이기 때문에 현재의 예산으로 엄청나게 좋은 세팅과 성능을 기대하는 것은 현실적으로 어렵습니다. 

![techcoderx.png](https://cdn.steemitimages.com/DQmWNvirFDbRpMEigsK7Cby9rokHberhALr3G1Z9q2Ro1Am/techcoderx.png)
> @techcoderx는 포스팅 작성일 기준 180위 정도였던 것으로 보이며, 현재는 순위가 조금 상승했으나 아직도 꽤나 하위권에 위치하고 있습니다.


그렇다고 해서 성능이 굉장히 뒤쳐지는 수준인 것도 아닙니다. 

**techcoderx.com은 모든 스팀 애플리케이션에서 사용할 수 있는 RPC 엔드포인트**입니다. 애플리케이션 또는 프로그래밍 인터페이스에서 Steem API 설정을 변경하여 활용할 수 있습니다. 

다른 풀 RPC 노드와의 성능 테스트를 수행해본 결과값은 다음과 같습니다.

**(1) Steemd API 성능**

|![Screenshot 20191227 at 10.06.41 AM.png](https://files.steempeak.com/file/steempeak/techcoderx/c2gErrDW-Screenshot202019-12-2720at2010.06.4120AM.png)|![Screenshot 20191227 at 10.10.31 AM.png](https://files.steempeak.com/file/steempeak/techcoderx/CqpWnMbx-Screenshot202019-12-2720at2010.10.3120AM.png)|
|-|-|
|<center>**Individual**</center>|<center>**Total**</center>|




**(2) Hivemind API 성능**

|![Screenshot 20191227 at 10.28.41 AM.png](https://files.steempeak.com/file/steempeak/techcoderx/rSbEg2TU-Screenshot202019-12-2720at2010.28.4120AM.png)|![Screenshot 20191227 at 10.29.06 AM.png](https://files.steempeak.com/file/steempeak/techcoderx/JK5IKieq-Screenshot202019-12-2720at2010.29.0620AM.png)|
|-|-|
|<center>**Individual**</center>|<center>**Total**</center>|


## #4. 로드맵
---

2020년에 수행할 예정인 작업들은 다음과 같습니다.

- 컨센서스 노드 설정 비디오 튜토리얼 및 백업 증인 노드 운영
- 서버 리소스 사용량에 대한 상세한 최신 리포트 주 단위 발행
- Ledger에서 스팀 하드웨어 월렛 애플리케이션 작업

## #5. 개인적인 생각
---

일전에 SMT출시와 함께 DPoS를 LPoS로의 전환하는 것이 필수적이라는 개인적인 생각을 적으면서, **증인들에게도 각각 고유한 필수적이고 추가적인 역할이 부여될 필요**가 있지 않나 생각을 해봤습니다.

예를 들어, LPoS가 되고 STEEM이나 SBD의 저자 보상 및 큐레이션 보상이 사라지게 된다면, SMT를 통해 커뮤니티를 형성하고자 하는 운영진들이 증인 출마를 하고 각각의 고유한 커뮤니티의 의견을 대변해야만 STEEM이 거버넌스 유틸리티를 제대로 가지게 되지 않을까 생각합니다.

그것이 아니라면, 이와 같이 Full RPC 노드를 운영한다든가 아니면 애플리케이션을 개발하는 등 각각의 고유한 영역을 담당하고 그것이 적당히 잘 역할 분담이 되어야만, **저가로 임대받은 스팀파워를 가지고 다운보팅이나 남발하는 불필요한 증인들을 끌어내리고 스팀 블록체인 생태계에 실질적으로 기여하는 증인들이 선출**될 수 있지 않을까 싶네요. 

동시에 STEEM이 곧 SMT 커뮤니티의 파워가 되어주기 때문에 스테이킹에 대한 인센티브도 생길거구요. 아무튼 계속해서 시세가 끝없이 하락하고 있는 베어마켓에서 나름의 비전을 가지고 등장하는 새로운 증인 출마자에게는 커뮤니티의 응원이 필요한 것 같습니다.

- - -

This page is synchronized from the post: ['[STEEM] 새로운 Full RPC node 추가 소식 및 RPC노드 설명'](https://steemit.com/@donekim/steem-full-rpc-node-rpc)
