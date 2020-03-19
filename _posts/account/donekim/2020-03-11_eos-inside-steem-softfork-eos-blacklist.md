
---
title: '[EOS Inside] STEEM Softfork의 나비효과 : EOS Blacklist 계정 동결 해제'
permlink: eos-inside-steem-softfork-eos-blacklist
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-03-11 03:35:51
categories:
- hive-101145
tags:
- hive-101145
- sct-kr
- sct-coin
- liv
- zzan
- palnet
- steemleo
- union
- dblog
- sct
thumbnail: 'https://cdn.steemitimages.com/DQmTLUdwQfG8CJbZkaKcaCt6UzRVrVcQ8MhMcbYcwCSNKnN/eosnation.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![eosnation.jpg](https://cdn.steemitimages.com/DQmTLUdwQfG8CJbZkaKcaCt6UzRVrVcQ8MhMcbYcwCSNKnN/eosnation.jpg)
<center><sub><Image Source : https://www.eosgo.io/></sub></center>

안녕하세요, 디온입니다. 스팀 블록체인에서 상위권 증인들이 담합하여 소프트포크 22.2를 통해 저스틴썬과 Steemit Inc의 지분을 동결시켰던 사건이 크립토씬에서 꽤나 여파가 큰 것 같습니다.

이 사태는 **탈중앙화된 생태계에서 나름의 의사결정 권한을 가지고 있는 소수의 증인 또는 BP들이 특정 계정을 제한하는 것이 타당한가?**라는 근본적인 문제에 대한 화두가 되고 있습니다. 

![eosnation.png](https://cdn.steemitimages.com/DQmTF2kMC1aQ49cDqqgHK9Gtfgx9pv7JZ4ujbA2JC6hD1fa/eosnation.png)

해당 사태를 지켜본 EOS메인넷의 액티브BP 중 한 팀인 **EOS Nation에서는 다음 주에 producer configurations에서 블랙리스트를 제거할 예정**이라는 사실을 발표했습니다. 

### #1. 블랙리스트(Blacklist)란?
---
블랙리스트란 **모든 액티브BP들이 반드시 업데이트 상태를 유지해야 하는 EOS 계정 리스트**로서, 일반적으로 다른 토큰홀더들의 계정들로부터 해킹한 EOS를 보유하고 있는 해커들의 계정을 의미하고, 지금까지 이 블랙리스트는 토큰 홀더를 보호하기 위한 조치로 사용되어 왔습니다.

<center>![ecaf black.png](https://cdn.steemitimages.com/DQmX46vcHLS4j74f3VYTDXKEMd5ApnGPM59hcGUd8sxchRt/ecaf%20black.png)</center>

블랙리스트는 이오스 메인넷 출범 당시 임시 헌법(Interim Constitution)에 따라 ECAF(EOS Core Arbitration Forum)가 사기, 절도 등과 같은 행위들을 중재하는 역할을 수행하는데 사용되는 하나의 도구였습니다. 

![ecaf state.jpg](https://cdn.steemitimages.com/DQmdbp1kD87fDeR8gkGoTJKw9hsjN2dVxTajX4p5aEpHaVV/ecaf%20state.jpg)

이오스 메인넷 상의 특정 계정이 타인 계정의 해킹과 같은 불법적인 행위를 하는 경우, **해킹을 당한 토큰홀더들 뿐만 아니라, 해커들이 훔친 EOS를 시장에 무분별하게 내던지는 행위 등을 방지**하기 위해 중재 명령을 통해 해당 계정을 블랙리스트로 지정하여 트랜잭션을 발생시키지 못하게 함으로써 토큰 홀더들의 이익을 보호하는 역할을 수행해왔습니다. 

### #2. EOS User Agreement
---

![eua.png](https://cdn.steemitimages.com/DQmPU22RhMWKFFUFKAx9Wn9aSHp9xUF9sqznFbkyVASoHaG/eua.png)

그러나 ECAF가 존재하는 근간이 되었던 임시 헌법은 **지난 2019년 4월 12일 액티브BP들의 MSIG 프로포절 동의를 통해 EOS User Agreement로 대체**가 되었으며, 더이상 ECAF는 중재 역할을 수행하지 않게 되었습니다.

그럼에도 불구하고 이미 블랙리스트로 지정이 되어 있었던 계정에 대해서는 기존과 같이 정보 업데이트를 유지해 왔던 것이죠.

그런데 어제 EOS Nation에서는 다음과 같은 발표를 합니다. 

> Here is the statement we issued to our follow BPs.
>
>"After careful consideration, and in light of the Steem events, EOS Nation will be removing the blacklists from our producer configurations next week.
>
> Blacklists are a relic of a time when EOS BPs thought it wise to affect property on chain, such as the witnesses did with the freeze on Justin's tokens
>
> EOS as a network no longer has that baselayer belief system that was in the interim Constitution
>
> Keeping the blacklists has been an embarrassment for property rights and the validity of EOS as a blockchain and we believe it is time to move on
>
> Once EOS Nation removes the blacklists, each of your respective burdens will be lifted
>
> Each BP currently maintains them, but if only one of us removes them, the funds will likely flow out.
>
> The interim constitution and ECAF is a stain on EOS and the blacklists is the lingering mark that's been tarnishing our collective reputation for two years
>
> EOS Nation was deeply involved in the writing and design of the constitution as well as ECAF and we recognize this path was not the right one. Out of all the BPs we are one of the most intimate with all the history and with this in mind we make this decision.
>
> We chose to inform you and give you all a heads up as a courtesy and out of respect for our shared responsibility in a decentralized system."


발표 내용은 다음과 같이 요약할 수 있습니다.

- 심사숙고 끝에 최근 스팀에서 발생한 사태 등을 고려하여 EOS Nation은 다음 주에 우리의 프로듀서 설정에서 블랙리스트를 제거하기로 결정했다.

- **블랙리스트는 EOS 블록프로듀서들이 스팀의 증인들이 저스틴썬의 토큰에 동결조치를 취했던 것처럼 체인 상의 재산에 영향을 미치는 것이 현명하다고 생각한 시간의 유물이다.**

-  네트워크로서의 EOS는 더 이상 임시 헌법에 있던 베이스레이어 신뢰 시스템을 가지고 있지 않다.

- 블랙리스트를 유지하는 것은 **특정인의 재산권, 그리고 블록체인으로서의 EOS의 타당성에 있어 일종의 수치**이며, 이제는 앞으로 나아가야 할 시점이라고 생각합니다.

- 현재는 모든 BP들이 블랙리스트를 관리하고 있지만, 한 명의 BP라도 블랙리스트를 해제하는 경우 해당 계정으로부터 얼마든지 토큰이 빠져나갈 수 있습니다. 

- 임시 헌법과 ECAF는 EOS 메인넷에 오점으로 남았고, 블랙리스트는 지난 2년 동안 우리 공동체의 명성을 훼손시켰던 대표 사례입니다.

### #3. 공통점과 차이점
---

스팀의 22.2 소프트포크도 그렇고, 이번 EOS Nation의 발표도 그렇고 공통점이 있다면 **(1) 특정 소수의 결정이 해당 네트워크 참여자 모두에게 직접적인 영향을 미친다는 것, 그리고 (2) 커뮤니티의 충분한 공론화 과정을 거치지 않는다는 것**입니다. 

소프트포크는 저스틴썬이 적법하게 취득에 대한 대가를 지불했는지 여부에 관계 없이 **이전 점유자가 부당한 방식으로 취득을 한 자산이라는 이유로 특정 개인의 자산을 동결조치**한 행위였고, 

블랙리스트는 **현재의 점유자가 부당한 방식으로 취득을 한 자산이라는 이유로 특정 개인의 자산을 동결조치**한 행위라는 점에서 차이가 있습니다. 

그리고 EOS Nation은 스팀 증인들의 행위를 보면서, **특정 소수가 힘을 합치면 누군가의 재산이 동결되는 것이 탈중앙화된 블록체인 생태계의 근본적인 신뢰성에 문제**가 될 수 있다고 생각을 한 것으로 보입니다.

> "해커의 계정이면 동결해야 된다. 그러나 다른 계정은 동결하면 안된다."

이렇게 단순하게 끝날 수 있는 문제가 아니라 참 어려운 문제입니다. 내 자산이 언제든 15개의 BP 또는 16명의 증인에 의해 동결될 수 있다는 것은 블록체인 네트워크와 거버넌스 컨센서스의 근본적인 신뢰성의 문제이기 때문입니다. 

프라이빗키를 알고 있는 나 이외에 그 누구도 내 자산에 손을 댈 수 없다는 것이 블록체인 기술의 출발점인데, 그 근간부터가 무너진다면 해당 네트워크가 무슨 퍼블릭 블록체인이냐고 반문했을 때, 이는 참 대답하기 어려운 질문이 되지 않나 싶습니다.

개인적으로 일단은 EOS Nation에서는 어떤 생각으로 가지고 어떤 결정을 내리든지, 그 전에 충분한 공론화 절차를 거쳐봤으면 좋겠네요.

- - -

This page is synchronized from the post: ['[EOS Inside] STEEM Softfork의 나비효과 : EOS Blacklist 계정 동결 해제'](https://steemit.com/@donekim/eos-inside-steem-softfork-eos-blacklist)
