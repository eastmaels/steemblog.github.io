
---
title: '[블록체인 기초개념] 컨센서스(Consensus)란 무엇인가? - PoW/PoS/DPoS 알아보기'
permlink: consensus-pow-pos-dpos
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-27 02:14:27
categories:
- kr
tags:
- kr
- coinkorea
- pos
- pow
- dpos
thumbnail: 'https://steemitimages.com/DQmcdZ7RCXZpjGeNzFTX2bAV6UhEDs3ENhsmgbEY6171UeE/Talk%20about%20crypto.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![Talk about crypto.png](https://steemitimages.com/DQmcdZ7RCXZpjGeNzFTX2bAV6UhEDs3ENhsmgbEY6171UeE/Talk%20about%20crypto.png)



## 1. 컨센서스(Consensus)는 무엇인가?

---

블록체인의 데이터는 중앙화된 서버 대신 전세계에 흩어져 있는 수많은 노드(Node)에 보관되기 때문에 각각의 노드들은 블록에 기록하는 데이터가 위변조되지 않은 원본이라는 것을 상호간에 합의하는 과정이 필요합니다. 만약 블록을 생성하는 특정 노드가 악의를 품고 조작된 데이터를 저장하거나 네트워크에 전파한다면 시스템 전체의 신뢰도가 떨어지게 됩니다. 이런 **악의적인 상황이 발생하더라도 네트워크를 올바른 방향으로 이끌고자하는 다수의 노드들이 상호 검증을 거쳐 올바른 블록 생성을 이끌어내는 프로세스와 알고리즘을 바로 컨센서스(합의)**라고 합니다.

![Distributed Consensus Mechanism.png](https://steemitimages.com/DQmVPMUU8GVs4LwCKSb26TQnX61sR1wnybQFDrwzH8ZNuyH/Distributed%20Consensus%20Mechanism.png)


[출처: https://assets.kpmg.com/content/dam/kpmg/pdf/2016/06/kpmg-blockchain-consensus-mechanism.pdf]

**컨센서스는 블록체인에서 가장 중요한 개념 중 하나**이기 때문에, **어떤 컨센서스 알고리즘을 사용하는지는 블록체인의 기술력과 경쟁력**으로 여겨지기도 합니다. 비트코인과 이더리움은 PoW(Proof-of-Work)라는 작업증명 방식의 컨센서스 알고리즘을 사용하고 있으며, 이오스는 스팀이나 비트쉐어와 같은 DPoS 방식의 컨센서스 알고리즘을 사용하고 있습니다. 참고적으로 이더리움은 PoW의 단점을 개선하기 위해 컨센서스 알고리즘을 PoS(Proof-of-Stake)라는 지분증명 방식으로 변경하는 것을 준비 중에 있습니다. 이를 위해 캐스퍼(Casper)라는 이름의 알고리즘을 개발하는 중입니다. 컨센서스 알고리즘은 계속해서 다양한 모델이 개발되고 있으나, 가장 기본적으로는 PoW, PoS, DPoS가 있습니다. 이에 대한 간단한 개념에 대해 아래와 같이 정리해 보겠습니다.



## 2. 컨센서스(Consensus)의 종류에는 무엇이 있는가?

---



**(1) PoW (Proof-of-Work) : 작업증명**


![Proofofwork.jpg](https://steemitimages.com/DQmeLqWE7DcMHB8qgecDUu5Qku85oQUDybV2WeRZoobNSDR/Proofofwork.jpg)
[출처 : http://www.datadriveninvestor.com/2017/11/12/blockchain-consensus-algorithm-pow-pos-and-beyond/]

PoW는 최초의 블록체인인 비트코인을 창시한 Satoshi Nakamoto가 제안한 컨센서스입니다. 영문 뜻 그대로 **"작업증명"** 방식으로 불리는데, **블록 생성 시간동안 가장 많은 해시파워를 제공한 노드가 블록을 생성할 수 있도록 설계**가 되어 있습니다. 해시파워를 만드는 과정은 채굴 또는 마이닝(Mining)이라고 부르는데, **컴퓨팅 파워를 통해 블록체인 네트워크에 전송된 암호화된 거래정보를 푼 뒤, 새로운 블록을 체인에 연결하는 작업을 하는 것을 의미**합니다. 

작업증명은 **가장 먼저 나온 컨센서스 알고리즘이며 암호화폐 시장 초기에는 가장 보편화되어 있는 컨센서스 알고리즘**이기도 했습니다. 비트코인 계열이라고 할 수 있는 비트코인 캐시, 비트코인 골드, 라이트코인 등도 이 방식을 사용하고 있습니다. PoW에서는 브랜치가 생긴 경우 가장 긴 블록체인이 남을 때까지 서로 경쟁하여 이긴 브랜치가 최종적인 브랜치로 채택이 되며, 다른 브랜치는 버려지도록 설계되었습니다.

① 장점(pros)

- 현재 높은 시장 가치를 형성하고 있는 주류 코인들이 채택하고 있습니다.

> PoW 컨센서스 채택 코인 : 비트코인, 비트코인 캐시, 비트코인 골등 라이트코인 등 (이더리움은 PoW에서 PoS로 변경 작업 중에 있음)

- 강력한 보안성을 제공합니다.
- 서비스 남용을 쉽게 방지할 수 있습니다.

② 단점(cons)

- 높은 전력소모를 통해 자원을 낭비합니다.
- 지속적으로 해시파워를 유지해야 합니다.
- 특정 마이닝 세력의 해시 독점으로 인한 생태계(ecosystem)의 교란 우려가 있습니다.



**(2) PoS (Proof-of-Stake) : 지분증명**


![Proofofstake.jpg](https://steemitimages.com/DQmetRQo6yrT7Nf9QR9JzmawjzA9MMYdeuHFcg6zGa3MFNF/Proofofstake.jpg)
[출처: http://www.datadriveninvestor.com/2017/11/12/blockchain-consensus-algorithm-pow-pos-and-beyond/]

PoS는 코인을 보유한 지분율에 따라 새롭게 생성하는 코인을 분배받는 방식의 컨센서스 알고리즘입니다. 영문 뜻 그대로 **"지분증명"**방식으로 불립니다. PoW와는 다르게 **일정 수 이상의 코인을 보관하고 있는 지갑을 블록체인 네트워크에 연결시켜 놓기만 하면 보상**을 받을 수 있습니다. 보상의 경우, PoW와 마찬가지로 블록이 생성될 때 보상이 지급되는데 차이점은 **이자와 같은 방식으로 코인이 지급된다는 것이 차이점**입니다. 

PoS 컨센서스 알고리즘을 채택한 1세대 코인으로는 대표적으로 NXT가 있으며, 현재는 다양한 코인들이 PoS방식을 채택하고 있는 추세입니다.**PoS는 지분을 많이 가지고 있는 노드에게 블록을 생성할 권한**을 줍니다. 블록 생성자와 지분 생성자의 이해관계를 일치시킴으로써 블록을 나쁜 의도로 생성할 동기부여를 없애며, 잘못 생성할 경우 패널티를 부여합니다. 

① 장점(pros)

- 해시파워가 많이 필요하지 않으므로 경제적이고 친환경적입니다.

> PoW방식은 채굴노드가 하드웨어를 직접적으로 갖춰야 하고 에너지 소모가 굉장히 크며, 대량의 채굴기를 돌리기 위해서는 지리적으로 최적화된 입지를 확보해야 합니다. (채굴기 자체에서 발생하는 열과 소음이 상당합니다.)

- 블록 생산자의 탈중앙화로 안정성을 확보할 수 있습니다.

>PoW에서 51%의 해시파워를 가지는 비용 = 약 1조
PoS에서 51%의 전세계 자산을 가지는 비용 = 약 100조

- 블록을 생성하기 위해 지분을 담보로 잡아야하기 때문에 덤핑을 방지할 수 있습니다.

② 단점(cons)

- 보안성이 강한지에 대한 여부가 아직까지 정확히 검증되지 않았습니다.
- 지분이 많은 이른바 고래(Whale)들이 권력을 독점할 가능성이 존재합니다.

> 일반적으로는 해당 코인을 발행한 개발진들이 고래들의 권력 독점을 방지하기 위해서 시중에 발행하는 코인의 비율을 조절하기 때문에 특정 고래가 권력을 독점하는 것은 현실적으로 불가능에 가깝습니다. 


![powvspos.jpg](https://steemitimages.com/DQmcrnis8LMnPBB5f6WSzWSPyWSXbNekGKtY9DPCsRMFrcT/powvspos.jpg)




**(3) DPoS (Delegated Proof-of-Stake) : 위임된 지분증명**

![dpos.jpeg](https://steemitimages.com/DQmbaMvszC6HMoAxLxDdGX3kjMmB4V2Qp8rQk1WUKVag5oV/dpos.jpeg)

[출처 : https://hackernoon.com/explain-delegated-proof-of-stake-like-im-5-888b2a74897d]

DPoS는 PoS 컨센서스 알고리즘을 변형한 형태로 위임된 지분증명 방식을 말합니다. 모든 노드의 자격을 가진 주주들이 블록생성에 참여하는 방식(PoS방식) 대신에 네트워크의 모든 노드의 투표 결과로 선출한 상위 노드(이를 증인* 또는 Witness라고 일컫습니다.)에게 권한을 위임하여 합의하도록 하는 방식입니다. 일정 수의 증인들은 모든 권한을 위임 받아 블록 생성을 담당합니다. PoS방식이 직접민주주의 방식이라면, DPoS는 간접민주주의 방식이라고 할 수 있습니다.

> 권한을 위임 받아 블록생성을 담당하는 "증인"은 Steem의 경우 20명, EOS의 경우 21명입니다.

EOS의 개발자인 댄 라리머는 DPoS 컨센서스를 사용하는 그리핀(Graphene)엔진을 토대로 Steem과 Bitshare를 만들고 이에 대한 성능을 검증한 바 있습니다. DPoS는 합의에 참여하는 노드의 수가 한정되어 있기 때문에 매우 빠른 성능과 확장성을 보여주고 있지만, 완전히 탈중앙화된 블록체인이 아니라는 비판을 받기도 합니다. 

(1) 장점(pros)

- PoS에 비해 많은 트랜잭션을 빠르게 처리할 수 있습니다.
- PoW에 비해 비용이 낮습니다.
- 하드포크의 위험이 낮습니다.
- 증인들이 투표에 참여할 인센티브가 분명합니다.

(2) 단점(cons)

- 증인끼리 담합할 위험이 존재합니다.
- 공개된 소수의 증인에 대한 디도스(DDoS)*공격 위험이 있습니다.

> 디도스(DDoS)란?
분산서비스 거부(Distributed Denial of Service)의 약자로서 수십 대에서 많게는 수백만 대의 PC를 원격 조종해 특정 웹사이트에 동시에 접속시킴으로써 단시간 내에 과부하를 일으키는 행위
공격자들은 서버나 네트워크 대역이 감당할 수 없는 많은 양의 트래픽을 순간적으로 일으켜 서버를 마비시키는데, 그에 따라 일반 사용자들의 사이트 접근 및 사용이 차단됩니다. 디도스 공격의 목적은 자료를 유출하거나 삭제하는 것이 아니라 단순히 서버를 마비시키는 것입니다. 은행, 온라인 쇼핑몰, 관공서 등 지속적인 서비스 운영이 필수인 사이트를 공략하여 치명적인 피해를 입도록 하는  것입니다.

- - -

This page is synchronized from the post: ['[블록체인 기초개념] 컨센서스(Consensus)란 무엇인가? - PoW/PoS/DPoS 알아보기'](https://steemit.com/@donekim/consensus-pow-pos-dpos)
