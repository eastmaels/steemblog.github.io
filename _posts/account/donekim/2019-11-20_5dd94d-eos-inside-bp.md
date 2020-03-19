
---
title: '[EOS Inside] 페이만 받고 있는 정체불명의 껍데기 BP 제명에 관한 제안서 소개'
permlink: 5dd94d-eos-inside-bp
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-11-20 23:32:03
categories:
- sct
tags:
- sct
- sct-kr
- sct-freeboard
- liv
- zzan
- palnet
- steemleo
- union
- upfundme
- dblog
thumbnail: 'https://cdn.steemitimages.com/DQmaXtLhBKvvSuC6WW2KFT8ieHQkfBRodyb3ZGP7FVzhUBK/aloha%20eos.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![aloha eos.png](https://cdn.steemitimages.com/DQmaXtLhBKvvSuC6WW2KFT8ieHQkfBRodyb3ZGP7FVzhUBK/aloha%20eos.png)

안녕하세요, 디온(@donekim)입니다. BP 및 프록시 계정들에 대한 정보를 제공하는 포털을 운영하며 스탠바이 BP로 활동 중인 AlohaEOS팀에서 **블록프로듀서 동의서(Block Producer Agreement)를 제대로 시행할 것을 제안**하였습니다.

현재 해당 제안에 대해서 많은 BP들이 관심을 가지고 있으며, 커뮤니티에서도 과연 해당 제안이 어떻게 진행이 되어 가는지에 관심을 두는 것도 좋을 것 같아 소개를 드립니다.

## #1. 요약(TL;DR)
---
![alohaeos.png](https://cdn.steemitimages.com/DQme983CtXDvi58VMTdThkLvCKXPFmdLASqV1gAmMYnR19B/alohaeos.png)

- 원문 링크 : [Enforcing the EOS Block Producer Agreement](https://decentium.org/alohaeosprod/enforcing-the)

시간이 없으신 분들을 위해서 해당 내용에 대해서 간단하게 요약을 하자면, **동의서에 명시된 최소한의 의무사항을 이행하지 않고 있는 정체 불명의 껍데기 BP를 제거하자는 것**입니다. 

말 그대로 누군지도 모르는 팀이 BP로 등록해서 일정 순위 이상으로 올라온 다음에 BP로서의 기본적인 의무도 준수하지 않은 채 BP 페이만 받고 있는 것을 방관하고 있지 말자는 제안입니다.

보다 자세한 내용은 아래에서 다루겠습니다.


## #2. 제안서 번역
---
2019년 7월, EOS42는 커뮤니티의 많은 의견을 수렴하여 새로운 블록프로듀서 동의서(Block Producer Agreement)를 제안했고, 8월에 액티브BP들이 이 새로운 동의서를 승인하고 실행하였습니다.

이 동의서는 EOS `regproducer`에 대한 리카르디안 컨트랙트의 형태이며 EUA(EOS User Agreement)와 함께 블록프로듀서로 등록된 모든 EOS 계정에 대하여 구속력이 있다고 명시가 되어 있습니다.

- 전체 동의서 원문 : [바로가기](https://eosauthority.com/constitution?network=eos#BlockProducerAgreement)

![api endpoint.png](https://cdn.steemitimages.com/DQmXN2ZMGz4snkQW8UgifEgKDcYdmdhr19UkXUPV5MJAdWJ/api%20endpoint.png)

저희들은 BPA의 6항에 명시된 내용에 집중하고자 합니다. 해당 조항에 따르면 **블록프로듀서는 작동 및 쿼리 가능한 공개 P2P 및 API 엔드포인트를 제공할 것**이라고 명시가 되어 있습니다. 

엔드포인트 정보를 공유하는 방법에 대해서는 구체적으로 설명하고 있지 않으나 현재 블록프로듀서들은 [EOS BP Information Standard](https://github.com/eosrio/bp-info-standard)를 사용하고 있으며 `regproducer`를 호출할 때 웹 사이트를 포함하고 있습니다.

그런데, 현재 페이를 받고 있는 스탠바이BP들의 리스트를 살펴보면 **정상적으로 작동하는 웹사이트를 제공하지 않은 관계로 API 또는 P2P 엔드포인트를 제공하지 않은 것으로 보이는 후보가 존재**합니다.

![list.png](https://cdn.steemitimages.com/DQmWC2UGM9TpgWwWzca1hmnbCuSxfSnvUWUWYJKda4UkLCu/list.png)

물론 가장 좋은 방법은 해당 BP팀에게 연락해서 무슨 문제가 있었는지에 대해서 직접 문의하는 것이겠지만, 웹사이트나 연락처 정보가 없기 때문에 그 또한 불가능합니다.

![msig.png](https://cdn.steemitimages.com/DQmVUAtNNUC73Xss8o2SReusuPYT5ViPsMTMJjrXewkH34m/msig.png)

그래서 우리 팀에서는 해당 동의서의 13항에 따라 **BPA를 준수하고 있지 않은 6개 팀을 BP후보에서 제거하는 `rmvproducer` MSIG 제안서를 제출**하였습니다.

물론, 해당 제안서가 액티브BP들에 의해서 승인되기 전에 웹사이트 및 API/P2P 엔드포인트가 표시되도록 계정 정보가 업데이트되면 해당 제안서는 취소됩니다. 

해당되는 정체불명의 BP팀들의 명단과 해당 팀들을 BP에서 제명하기 위한 MSIG제안서의 링크는 다음과 같습니다. 

- stargalaxybp : https://bloks.io/msig/alohaeosprod/rmvsbpone

- eosrainbowbp : https://bloks.io/msig/alohaeosprod/rmvsbptwo

- validatoreos : https://bloks.io/msig/alohaeosprod/rmvsbpthree

- eosathenabp1 : https://bloks.io/msig/alohaeosprod/rmvsbpfour

- eosunioniobp : https://bloks.io/msig/alohaeosprod/rmvsbpfive

- eoszeusiobp1 : https://bloks.io/msig/alohaeosprod/rmvsbpsix

## #3. 개인적인 생각
---

이미 국내 커뮤니티에 계신 분들은 잘 알고 계시겠지만, **실제로 팀원도 없고, 아무런 활동이 없음에도 불구하고 BP보상만 취득하고 있는 껍데기 BP들**이 꽤나 있어왔습니다. 

노드, 검증자, 증인, 블록프로듀서(BP) 등 이름은 다르지만 다양한 크립토 프로젝트의 생태계의 구심점이라고 할 수 있는 블록생성 및 검증자들의 역할은 매우 중요하고, 아무런 실체와 활동이 없는 팀이나 개인에 대해서는 **당연히 시스템적으로 필터링을 할 수 있는 기능**이 필요하다고 생각합니다. 

어떤 분들께서는 **서버 사양만 좋고 블록 생성만 잘하면 되지 않냐**는 관점을 가지고 계시기도 하지만, BP이 받는 리워드의 반대급부로 최소한의 의무사항들이 존재한다고 생각합니다. 특히나 정체도 알려지지 않은 BP들이 페이를 받아간다는 것은 생태계에 구멍이 나서 물이 새고 있다는 것 밖에는 안되겠죠.

이번 아로하의 제안서가 어떻게 진행되는지, 액티브BP들 중에서 누가 관심을 보이고 누가 반응이 없는지, 그리고 과연 제명 대상에 오른 BP들의 정보가 업데이트 될 것인지 등이 매우 흥미로운 관찰포인트가 될 것 같습니다.

- - -

This page is synchronized from the post: ['[EOS Inside] 페이만 받고 있는 정체불명의 껍데기 BP 제명에 관한 제안서 소개'](https://steemit.com/@donekim/5dd94d-eos-inside-bp)
