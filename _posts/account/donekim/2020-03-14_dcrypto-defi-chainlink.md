
---
title: '[dCRYPTO] 여러 DeFi가 의존하고 있는 체인링크(Chainlink)의 업데이트 중단 사태'
permlink: dcrypto-defi-chainlink
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-03-14 04:29:54
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
- s
- union
- sct
- busy
- mini
thumbnail: 'https://cdn.steemitimages.com/DQmXpSNzzGyN7dU56oZh9dSTVLaYw5g3cgz4wGoQd1xBZ1x/chainlink.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![chainlink.jpg](https://cdn.steemitimages.com/DQmXpSNzzGyN7dU56oZh9dSTVLaYw5g3cgz4wGoQd1xBZ1x/chainlink.jpg)

안녕하세요, 디온입니다. 암호화폐의 급격한 가격변동으로 인해 이더리움 블록체인에도 혼잡 모드(congestion)가 발생하면서 여러 트랜잭션들이 먹통 상태가 되어버렸습니다. 

네트워크 혼잡모드가 벌어졌을 때 이오스에 비해 이더리움이 가지는 상대적인 장점은, 네트워크가 혼잡해지는 상황에서도 사용자들이 트랜잭션을 일으킬 수 있다는 것인 반면에 **기존에 지불하던 트랜잭션 수수료에 비해 훨씬 높은 수수료를 지불해야 한다는 한계**도 동시에 가지게 됩니다. 

그러다 보니, **엄청나게 높은 수수료를 지불하거나 지불해야 하는 불상사**가 나타나기도 하고, **일반적인 상황을 가정하여 자동화되어 있는 트랜잭션의 경우 온체인 트랜잭션이 먹통이 되어버리는 현상**이 나타나기도 합니다.

지난 1년 동안 가격적인 움직임에서도 그렇고, 이더리움 생태계에서 DeFi 생태계를 이끌어왔던 하나의 축으로 일컬어졌던 **탈중앙화된 오라클 솔루션 블록체인 미들웨어 체인링크(Chainlink)**도 여기에서 자유로울 수 없었던 것으로 보입니다. 지난밤 약 6시간 동안 체인링크의 가격 피드 업데이트가 먹통이 되었었다고 하네요.

![band twitter.jpg](https://cdn.steemitimages.com/DQmZfnzvpfvuKu4jz8teWX9aPpWHfiXYiKvS5exqfCR73RU/band%20twitter.jpg)
<center><sub><Image Source : https://twitter.com/BAND_Jedi/status/1238159760291061760></sub></center>

- 우리나라 시간으로 지난 3월 13일 17:48분 부터 3월 14일 오전 1시 28분 사이에 **약 6시간 동안 ETH/USD가격을 업데이트하는 체인링크의 가격 레퍼런스 스마트 컨트랙트의 작동이 중지**되었습니다.

- 암호화폐 가격 하락과 함께 이더리움 블록체인에 대거 트랜잭션들이 몰리면서,**트랜잭션을 발생시킬 수 있는 최소 안전 수량이 150~200 Gwei로 상승**하였고, 이에 따라 **체인링크 노드들이 트랜잭션 마다 지불해야 하는 수수료가 $20불 이상으로 상승**하였습니다. 

![chart.png](https://cdn.steemitimages.com/DQmVBvGqXMu8DHwTM7ba4s3GEvjBdr1aKoRPNpLuvXrCsuX/chart.png)
<center><sub><Image Source : https://twitter.com/BAND_Jedi/status/1238159762727948288></sub></center>

![fee.jpg](https://cdn.steemitimages.com/DQmUut3uti1kyENJGkk8x22MmPM5P3KUhSDgUf4GKiXAHLM/fee.jpg)

- 체인링크에서 제공하는 ETH/USD 가격 피드 업데이트가 약 6시간 가량 중단이 되면서, 체인링크 오라클 서비스에 의존하고 있던 DeFi들의 가격 업데이트도 중단이 되어 버렸습니다.

- Gas 가격의 급격한 상승으로 **각 검증자(validator)들이 지불해야 하는 이더리움 네트워크 수수료가 트랜잭션당 20불, 하루에 150불 정도**로 천문학적인 금액으로 치솟게 되었는데 이를 지불하지 못했던 것입니다.

- 현재 이더리움 기반의 Synthetix, Aave, Set Protocol 등 다수의 DeFi 프로젝트들이 체인링크의 가격 피드 데이터에 의존하고 있는데, 이것이 제대로 작동하지 못하면서 DeFi 네트워크도 약 6시간 동안 제대로 작동하지 못했습니다.

![link chart.jpg](https://cdn.steemitimages.com/DQmW51cp99ac6RmEDtGReS8tG3XYPFjqdZxvk4ijppyw9Fn/link%20chart.jpg)

- 이번 데이터 업데이트 중단 문제로 인해 바이낸스에서는 LINK토큰이 개당 0.0001 달러에 거래되며 90달러로 LINK토큰을 90만개를 살 수 있었던 사태가 벌어졌다고 합니다.

> 이 위의 주장은 해당 트위터 유저의 주장일 뿐이며, 실제로 가격 피드 업데이트가 되지 않았던 문제와는 별개인 것으로 보이긴 합니다.  


블록체인 네트워크가 혼잡해지는 상황에서 여러 디앱들과 사용자들이 해당 네트워크를 어떻게 사용할 수 있는가에 대한 문제가 계속해서 중요해지고 있는 것 같습니다. 

이오스와 이더리움 모두 네트워크 혼잡 모드에서는 취약한 모습을 보여주었던 것이 사실이고, 이는 디앱 서비스 플랫폼 운영자들의 입장에서 서비스 품질 및 신뢰도의 문제가 될 뿐 아니라 DeFi와 같이 자산과 관련된 서비스의 경우 엄청나게 막대한 피해를 입을 수도, 끼칠 수도 있기 때문입니다.

- - -

This page is synchronized from the post: ['[dCRYPTO] 여러 DeFi가 의존하고 있는 체인링크(Chainlink)의 업데이트 중단 사태'](https://steemit.com/@donekim/dcrypto-defi-chainlink)
