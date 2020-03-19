
---
title: '[블록체인 기초개념] 컨센서스(Consensus)란 무엇인가? - 비잔틴 장군문제(BGP)란?'
permlink: consensus-bgp
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-09 05:23:45
categories:
- kr
tags:
- kr
- coinkorea
- consensus
- bitcoin
- byzantine
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


## [블록체인 기초개념] 컨센서스(Consensus)란 무엇인가? - 비잔틴 장군문제(BGP)란?
***


지난 포스팅인 [블록체인 기초개념 컨센서스(Consensus)란 무엇인가? - PoW/PoS/DPoS 알아보기](https://steemit.com/kr/@donekim/consensus-pow-pos-dpos)에 이어지는 포스팅입니다. 비트코인에 대해서 공부하다가 보면 비잔틴 장군 문제(Byzantine General's Problem) 또는 PBFT(Practical Byzantine Fault Tolerance)라는 단어들이 등장하게 됩니다. 컴퓨터 공학 전공자가 아닌 우리들에게는 매우 낯선 단어들입니다. 아마도 이것들이 도대체 무슨 개념이고 비트코인과 어떠한 연관성을 가지고 있는지 궁금한 분들이 있으실 것 같습니다. 사실 비트코인이나 블록체인에 대해서 공부하기 위해서는 한 번쯤 가볍게 알아볼 필요가 있는 개념들입니다. 

**비트코인이 최초의 블록체인 기술을 적용한 실용화된 기술로서 큰 의미를 가지는 이유이자 컴퓨터 과학자들이 비트코인의 성공에 흥분하는 이유**는 "비잔틴 장군 문제"라는 **오래된 난제에 대해 실용적인 해답을 제공했기 때문**입니다. 이번에는 역사적으로 조금 더 거슬러 올라가서 컨센서스, 즉 합의의 문제에 대해 고민이 시작되었던 비잔틴 장군 문제(Byzantine Generals' Problem)에 대해서 포스팅 하도록 하겠습니다.



## 1. 합의문제(Consensus Problem)의 역사
---

![decentralized.jpg](https://steemitimages.com/DQmNu5ukTw3T5Upx2cdrQcdkzu93EQjCPk6vLjoZ7mcPiAe/decentralized.jpg)
<출처 : https://www.linkedin.com/pulse/byzantine-generals-problem-kiran-vaidya/>

블록체인(Blockchain)은 기본적으로 분산 시스템입니다. 이전 포스트에서 이야기 했던 것처럼 **컨센서스(Consensus)에 대한 문제는 블록체인이라는 "분산 시스템(Decentralized System)"을 유지하기 위해 굉장히 중요한 개념**으로서 블록체인을 지탱하는 핵심 기술이라고 말할 수 있습니다. 

우리는 비트코인을 통해 알게된 블록체인 기술에서 매우 중요한 개념으로 합의문제(Consensus problem)가 등장한다는 것을 알게 되었습니다. 더불어 블록체인의 시스템이 잘 작동하기 위해 매우 중요하다는 것도 알게 되었습니다. 그래서 **"블록체인의 등장 = 합의문제의 등장"**으로 생각하게 됩니다. 그러나 **사실 합의 문제는 분산 시스템의 신뢰도를 보장하기 위해 나온 개념으로 블록체인이 나오기 전부터 존재하던 것**입니다. 

1982년으로 약 36년 정도의 역사를 거슬러 올라가서 "블록체인 기술의 등장 이전에 논의되었던 합의문제(Consensus Problem)"에 대해서 한 번 알아보도록 하겠습니다. 이른바 비잔틴 장군 문제(The Byzantine General's Problem)이라고 불리는 합의문제의 가장 대표적인 사례입니다.



## 2. 비잔틴 장군 문제(The Byzantine Generals' Problem)

---
![byzantine.jpeg](https://steemitimages.com/DQmWXELywYcF99uTcBtt417HH1CcFAyqjRzknLPfnuawzpp/byzantine.jpeg)
<출처 : https://www.linkedin.com/pulse/byzantine-generals-problem-kiran-vaidya/>

비잔틴 장군 문제는 레슬리 램포트(Leslie Lamport)*와 쇼스탁, 피스가 공저한 1982년 논문 **"The Byzantine Generals' Problem"**(https://dl.acm.org/citation.cfm?doid=357172.357176)에서 처음 언급되었습니다. 

> 레슬리 램포트(Leslie Lamport)는?
미국의 컴퓨터 과학자로 매사추세츠 공과대학교에서 1960년에 학사 학위를 받은 뒤 브랜다이스 대학교에서 석사와 박사학위를 받았다. 램포트는 분산 시스템에 대한 연구와 LaTeX 문서 조판 시스템의 초기 개발자로 잘 알려져 있으며, 2013년에는 튜링상을 받았다.

**"상호 간에 원격으로 통신을 통해 어떤 합의를 해야 하는 경우, 통신에 어떤 문제가 발생하게 되는 경우나 고의로 정보를 변경해 가짜 정보를 전달할 가능성이 있을 때 전체가 올바른 합의를 형성할 수 있는가"**가 논문의 주제입니다. 저자들은 분산화된 컴퓨팅 시스템이 올바로 작동할 수 있는 방법에 대해 고민하고 있었습니다.

그들의 논문은 실제로 존재하는 비잔틴 제국의 역사에 대해서 서술한 것이 아니라 **고대 동로마제국(비잔틴 제국)에 빗대어 가상의 역사적 사건을 만들어 신뢰할 수 있는 분산형 컴퓨팅 시스템 알고리즘을 찾는 방법에 대해 설명**한 논문입니다. 

이는 중앙집권화된 시스템이 아닌 **"분산형 시스템"이 갖는 특성을 해결하기 위한 고민에서 출발**한 것입니다. 사실 중앙집권화된 시스템은 컨센서스 알고리즘이라는 것에 대해서 전혀 고민할 필요가 없습니다. 왜냐하면 모든 커뮤니케이션과 의사결정이 중앙집권화된 의사결정자에 의해 통제되기 때문에 이른바 **"배신 또는 불신의 문제"**가 발생하지 않기 때문입니다. 

예를 들어 한 부대에 장군이 있고 부하A와 부하B, 부하C가 있다고 할 때, 부하A, 부하B, 부하C는 장군으로부터 직접 공격 명령을 하달 받게 되고 부하들이 행동은 장군에게 철저하게 감시, 통제받게 됩니다. 따라서 결과적으로는 "공격"이라는 동일한 행동을 하게 됩니다. 왜냐하면 "공격"을 하지 않고 도망치거나 적에게 해당 정보를 흘리는 등의 행동을 하는 부하는 장군에게 처벌을 받게 되기 때문입니다.



![byzantine2.png](https://steemitimages.com/DQmefqYZS47y14rNkdRga8YpJgtSLGB9czALJesJNoNGoDd/byzantine2.png)<출처 : https://medium.com/@DebrajG/how-the-byzantine-general-sacked-the-castle-a-look-into-blockchain-370fe637502c>

이 논문에서 저자들은 **적군의 도시를 공격하려는 비잔틴 제국군 장군들이 적의 성 함락이라는 공격계획에 대해서 서로 합의를 하는 문제를 제시**합니다. 비잔틴 제국군은 적군의 도시를 점령하기로 결정하였습니다. 비잔틴 군대는 도시를 완전히 둘러 싸고 있는데, 도시 내에서는 치열한 저항이 계속되고 있습니다. 물론 비잔틴 제국군은 각 장군들이 한마음 한 뜻으로 똘똘 뭉쳐서 한날 한시에 공격을 하면 성을 함락하고 승리하기에 충분한 전력이 있습니다. 그러나 문제는 현재 비잔틴 제국군에는 각 분대별로 장군들이 있고 이 장군들 사이에는 의견 대립 등으로 인해 분열이 존재하고 있습니다. 지휘관이나 전령 중 일부는 배신자가 섞여 있을 수 있고, 배신자는 규칙을 충실히 따르는 충직한 지휘관들과 달리 규칙에 얽매이지 않고 마음대로 행동할 수 있습니다. 

**요약하면, 비잔틴 장군들은 아래와 같은 상황에 있습니다.**

**1. 비잔틴 제국군의 각 부대는 지리적으로 멀리 떨어져 있다.** 
**2. 장군들 중에는 배신자가 있다.**
**3. 장군들에게 메세지를 전하는 전령을 통해서만 의사소통이 가능하다.** 
**4. 전령은 문제가 생겨 죽을 수도 있고 도중에 메세지가 위조될 수도 있다.**



이 때 **배신자의 존재에도 불구하고 충직한 지휘관들이 동일한 공격 계획을 세우기 위해서는 충직한 지휘관들의 수가 얼마나 있어야 하며, 이 지휘관들이 어떤 규칙을 따라 교신해야 하는지에 대한 문제**가 비잔틴 장군 문제입니다.

과연, 이 비잔틴 장군들이 당면한 문제를 해결할 수 있는 방법이 존재할까요? 만약에 존재한다면 어떻게 해결할 수 있을까요? 이는 분산형 시스템이 당면했던 가장 중요한 문제로 수많은 사람들이 이에 대한 해답에 대해 끊임 없이 고민해왔던 이슈입니다. 다음 번 포스팅에서는 비트코인이 이 난제에 대해서 어떻게 실용적인 해답을 제시했는지를 살펴보도록 하겠습니다.

- - -

This page is synchronized from the post: ['[블록체인 기초개념] 컨센서스(Consensus)란 무엇인가? - 비잔틴 장군문제(BGP)란?'](https://steemit.com/@donekim/consensus-bgp)
