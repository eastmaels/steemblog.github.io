
---
title: '[EOS FUD BREAKER] EOS 메인넷 정지 문제에 대한 발빠른 커뮤니티의 대응'
permlink: eos-fud-breacker-eos
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-06-16 21:44:42
categories:
- coinkorea
tags:
- coinkorea
- kr-coin
- kr-series
- koreos
- jjangjjangman
thumbnail: 'https://cdn.steemitimages.com/DQmXtyCKVuBzrk9hq24b98ksXSCrtLm9XErcRxEookTffuJ/eosmainnet.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![eosmainnet.png](https://cdn.steemitimages.com/DQmXtyCKVuBzrk9hq24b98ksXSCrtLm9XErcRxEookTffuJ/eosmainnet.png)


![steemit_logo.png](https://cdn.steemitimages.com/DQmaZsenPDf5Qn5nJzDZNkVg1aCQUyXNwqwK1fk8qe4jhKa/steemit_logo.png)



안녕하세요, 디온(@donekim)입니다. **우리나라 시간으로 6월 16일(토) 18:53분경 원인을 파악할 수 없는 문제로 EOS블록체인 상위 21개 블록프로듀서들 중 다수가 블록생성에 실패하기 시작**하였습니다. 급작스러운 상황 발생으로 인해 1027597블록을 최후 비가역 블록(LIB; Last Irreversible Block)으로 지정하고 락업 및 블록생성 관련 이슈 발생에 관한 내용이 각 BP들로부터 공지되었습니다. 

문제가 발생하자마자 곧바로 전세계의 BP들이 컨퍼런스 콜을 통해서 문제를 파악하기 시작하였으나 **각종 커뮤니티와 카페, 트위터 등을 통해 블록생성 실패 소식이 순식간에 퍼져나가며 순간적인 FUD가 발생**하기도 했습니다. 

![eos chart.png](https://cdn.steemitimages.com/DQmVNJ3YwGPxAa74DvDKaCBFWNXQse8mijZs5bKWiBQH8VM/eos%20chart.png)
 

**EOS 메인체인이 정지된 원인은 지연 트랜잭션(deferred transactions)을 처리하는 방법에 이슈가 있었기 때문인 것으로 파악**되었고, 모든 EOS 메인BP들과 많은 스탠바이BP들, 그리고 블록원이 함께하여 문제 상황에 발 빠르게 대응했던 덕분에 **문제 발생 후 약 5시간만에 패치 배포 및 메인넷 복구가 완료**되었습니다.  다음은 메인넷 일시 중단에 따른 블록원과 BP들의 시간별 대응 내용입니다. 



***

![photo_2018-06-17_04-23-11.jpg](https://cdn.steemitimages.com/DQmauhErCSp8EvmUtD9zRVy3WnXh7b8URGeybtewTHj99Na/photo_2018-06-17_04-23-11.jpg)

***





- **[6월 16일(토) 18:53]** 원인을 알 수 없는 문제로 BP중 다수가 블록생성에 실패

- **[6월 16일(토) 18:56]** EOS 메인넷이 블록체인 생산을 중단 

- **[6월 16일(토) 19:01]** 메인BP들과 다수의 스탠바이BP들이 모두 모여서 메인넷 정지에 대한 문제를 확인하고 문제를 해결하기 위해서 글로벌 컨퍼런스 콜(국제 전화회의) 시작 

- **[6월 16일(토) 19:57]** 모든 스탠바이BP들이 자신의 노드를 중지하고 분석에 사용하기위해서 문제해결에 도움이 될 만한 모든 정보들을 백업하기로 결정

- **[6월 16일(토) 20:02]** 체인을 다시 시작할 방법 모색. 정상적인 EOS 체인 기능이 3~6시간 이내에 이용이 가능할 것으로 예상. EOS 메인넷 트랜잭션을 시도하기 전에 상위 21개 BP로부터 업데이트된 소식을 기다릴 것을 공지.

- **[6월 16일(토) 22:03]** 블록생성 실패 문제에 대한 원인 확인. 복구 작업 진행

- **[6월 16일(토) 22:09]** 블록원이 몇 시간내로 1.0.5 패치를 발표할 예정이며 다음과 같은 작업이 수행될 것임을 안내. 

> 수행되는 작업 목록
> 1. nodeos 수정사항이 출시
> 2. 블록프로듀서 노드 업그레이드
> 3. 블록을 로컬로 생성한 BP는 블록을 1027926까지 재동기화
> 4. 모든 노드들이 버전 1.0.5로 업그레이드
> 5. 블록프로듀서들이 블록 생산을 재개하기 위해 상호간 동기화
> 6. 공개적인 접근을 위한 체인 오픈 예정

- **[6월 16일(토) 22:28]** 문제의 근본적인 원인이 **지연 트랜잭션(deferred transactions)을 처리하는 방법에 이슈가 있었기 때문**인 것으로 밝혀짐

- **[6월 16일(토) 22:36]** EOSIO 소프트웨어는 이런 형태의 에러가 발생했을 때 체인 생성을 멈춰서 하드포크를 방지할 수 있도록 설계되어 있고, 모든 블록프로듀서들은 합의에 문제를 감지하면 블록생성을 멈춘다는 사실 안내. 코드 픽스 완성. 블록프로듀서 커뮤니티에 의해 테스트 후 실제 네트워크로 배포 예정

- **[6월 16일(토) 23:13]** 블록원이 1.0.5 패치 발표(https://github.com/EOS-Mainnet/eos/tree/mainnet-1.0.5)

- **[6월 16일(토) 23:87]** 네트워크가 정상상태로 복귀. 최후 비가역블록(LIB)인 1027926을 기점으로 체인 재가동 완료. 


***

![eos network.png](https://cdn.steemitimages.com/DQmP9WP3mR1dJawR8kSyFRR7tuGjdfbvB1qk6mXtr1Ny8eS/eos%20network.png)



현재는 위와 같이 **EOS 메인넷이 정상적으로 가동 중**입니다.


EOS 메인넷 일시 중단 소식이 각종 SNS를 통해 빠르게 퍼져나가며 순간적으로 FUD가 나타나며 홀더들을 비롯해서 많은 사람들이 EOS 블록체인에 대해 우려의 목소리를 높이기도 했습니다. 확실히 최근 들어서는 카르다노의 찰스 호스킨슨이나 라이트코인의 찰리리 등 암호화폐씬의 많은 유명인들도 무조건적으로 EOS를 헐뜯는 내용을 자주 트윗하는 것 같습니다. (저는 에이다나 라이트코인도 투자하고 있지만, 개인적으로는 이들도 가장 핫한 이슈가 되고 있는 EOS를 조금 질투하고 있는 것이 아닌가 싶은 생각이 드네요)

혹시라도 **많은 EOS홀더분들이 이번 일로 우려를 하고 계실지도 모르겠지만, 이번의 상황은 EOS 블록체인이 건강하다는 것을 증명한 사례** 중의 하나가 된다고 생각합니다. 소프트웨어 버그를 별도의 포킹 없이 BP커뮤니티들이 해결하였고, 이런 문제 상황이 발생했을 때를 대비한 대응 메뉴얼에 따른 대처가 매우 순조로웠습니다. 

일부의 다른 암호화폐 프로젝트 커뮤니티에서는 **"확장성을 위해서 탈중앙화를 포기한 DPoS의 결과가 고작 이거냐"**는 비난을 하기도 했지만, **여태껏 블록체인에 장애 또는 문제가 발생했을 때 별도의 포킹 없이 커뮤니티 주도 하에 이렇게 빠른 시간 내에 문제를 해결한 경우는 없지 않았나 생각**합니다. 모두가 합심하여 문제 상황을 발 빠르게 해결한 상위 21개 BP들 및 스탠바이BP들 그리고 블록원에게 박수를 보내며 EOS 생태계가 보다 건강하게 성장해나가기를 기대합니다 :D





![steemit_eng.png](https://cdn.steemitimages.com/DQmXyvEeNrzp6hFun3B8ho6pRCRnvnNthGA67HH7G5Fe6Gx/steemit_eng.png)

<center>![behind banner.gif](https://cdn.steemitimages.com/DQmXBUz3S7u2z13jB39UNUder7HUADC9DvHibUEu7DTu3MR/behind%20banner.gif)</center>







<center><pre> H O P E   F O R   T H E   B E S T , 
P L A N   F O R   T H E   W O R S T</pre>
<sub> https://steemit.com/@dONekim</sub></center>

- - -

This page is synchronized from the post: ['[EOS FUD BREAKER] EOS 메인넷 정지 문제에 대한 발빠른 커뮤니티의 대응'](https://steemit.com/@donekim/eos-fud-breacker-eos)
