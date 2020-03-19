
---
title: '[dCRYPTO] 이더리움 이스탄불 업데이트 이후 유의해야 할 점 by HAECHI AUDIT'
permlink: dcrypto-by-haechi-audit
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-12-09 23:02:45
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
- s
- union
- dblog
- busy
thumbnail: 'https://cdn.steemitimages.com/DQmYAKmXnzGeeCNgnk4MBhMNbYQZbQpdGmQ1KtozwnkCfxx/haechi%20labs.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![haechi labs.png](https://cdn.steemitimages.com/DQmYAKmXnzGeeCNgnk4MBhMNbYQZbQpdGmQ1KtozwnkCfxx/haechi%20labs.png)
<center><sub> <Image source : [HAECHI AUDIT Medium](https://medium.com/haechi-audit-kr/ethereum-istanbul-update-aeb4f6f94b1)></sub></center>

안녕하세요, 디온입니다. 어제 포스팅에서 [이더리움 이스탄불 하드포크(Ethereum Istanbul HF)에 대한 개략적인 내용](https://www.steemcoinpan.com/sct/@donekim/dcrypto-ethereum-istanbul-hf)을 정리했었는데, 이번 이스탄불 하드포크 업데이트 이후 특히나 "스마트 컨트랙트 작성 시 유의해야 할 점"을 포함하고 있는 [EIP-1884](https://eips.ethereum.org/EIPS/eip-1884)와 관련하여 자세한 내용을 HAECHI AUDIT에서 정리해주어 해당 내용을 소개드립니다.

- 원문 링크 : [이더리움 이스탄불 업데이트 이후 스마트 컨트랙트 개발자가 유의해야 할 점](https://medium.com/haechi-audit-kr/ethereum-istanbul-update-aeb4f6f94b1)

> 내용이 굉장히 전문적이고 개발자가 아닌 경우 모든 내용을 이해하기는 어려울 수 있으나, 현재 이더리움 2.0으로의 변화 방향이 어떤 것인지를 조금이라도 자세히 이해하기에 꽤 좋은 글인 듯 싶습니다.


## #1. HAECHI AUDIT이란?
---
![thumbnail.png](https://cdn.steemitimages.com/DQmes5MhwPX9LBLEPYx5qJMQENBamsn8i9tXJEMZiq5biLa/thumbnail.png)

다년간 블록체인 기술 연구 개발 경험을 보유하고 있는 전문가들로 구성된 "스마트 컨트랙트 보안 감사 및 개발 전문 기업"으로 국내 프로젝트들 중에서는 캐리 프로토콜, 그라운드엑스, 메타디움 등의 AUDIT REPORT를 발간하기도 한 곳입니다. 

이더리움에서 프로젝트를 진행하고 있는 개발자나, 이더리움 관련 디앱들을 매일 같이 자주 사용하는 유저가 아니라면 이번 이스탄불 하드포크로 인한 업데이트가 크게 체감될만한 것은 사실 없지만, 해당 포스팅을 읽어보시면 **EVM에 생기는 변화가 이더리움의 기존 스마트 컨트랙트에 미치게 될 영향**에 대해서 간접적으로나마 이해하는데 도움이 많이 됩니다.

## #2. 일부 기능 작동정지 현상
---

가장 핵심적인 내용을 요약하자면 **이번 하드포크 이후 이더리움 가상 머신(EVM)에 생기는 변화로 인해 기존 스마트 컨트랙트들의 일부 기능이 작동을 멈출 수 있다**는 것입니다.

현재 HAECHI AUDIT에서 대표적인 예로 들고 있는 프로젝트들은 **Kyber Network, Gods Unchained, Aragon**입니다. 물론 해당 프로젝트팀들은 기존에 배포한 솔리디티 코드를 이번 업데이트에 맞춰 대응을 하고 있는 상태이므로, 혹시라도 해당 디앱들을 사용하심에 있어 큰 우려는 하지 않으셔도 될 것 같습니다.

HAECHI AUDIT팀에서는 결과적으로 **이스탄불 업데이트 이후 스마트 컨트랙트를 새로 배포하는 경우에는 다음과 같은 2가지 사항을 주의할 것을 제안**하고 있습니다. 

**(1) fallback 함수 작성시 gas cost의 소모가 적은 방식으로 작성하는 것이 필수적**

**(2) fallback 함수에서 향후 gas cost가 증가할 가능성이 높은 OPCOED를 실행시키지 않을 것**


## #3. 유저들이 주의해야 할 점 요약
---
이번 하드포크 이후 분명히 해당 프로젝트팀의 노하우 부족이나 늦장 대응 등으로 인해 **기존에는 정상적으로 작동하던 디앱이 정상적으로 작동하지 않은 문제 상황이 발생할 가능성**이 있습니다. 

특히나 Ether를 다른 토큰과 교환하거나 Ether을 가지고 무언가를 구매하는 경우 **Ether를 받는 쪽 스마트 컨트랙트의 fallback 함수가 정상동작하지 않는 것**이 바로 그 발생가능한 오류의 전형적인 형태입니다. 

예를 들어 내 지갑에서는 ETH가 정상적으로 빠져나갔으나 내가 구매한 다른 ERC-20 토큰이 내 지갑에 들어오지 않는다거나, 해당 게임 아이템이 들어오지 않는 것과 같은 오류입니다.

저는 개인적으로 이더리움 블록체인 기반의 DEX나 게임을 이용하고 있지는 않지만, 혹시라도 토큰 스왑이나 온체인 상의 DEX를 통한 토큰 거래, 게임 아이템 구매 등의 활동을 하고 있는 유저분들이 계시다면, 해당 프로젝트 측에 **이번 이스탄불 업데이트 이후에 EIP-1884 관련 이슈에 대한 업데이트가 있었는지를 문의**해 보시는 것이 좋을 것 같습니다.

- - -

This page is synchronized from the post: ['[dCRYPTO] 이더리움 이스탄불 업데이트 이후 유의해야 할 점 by HAECHI AUDIT'](https://steemit.com/@donekim/dcrypto-by-haechi-audit)
