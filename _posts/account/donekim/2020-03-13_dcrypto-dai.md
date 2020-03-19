
---
title: '[dCRYPTO] 급격한 가격변동에도 스테이블코인 DAI는 괜찮았을까?'
permlink: dcrypto-dai
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-03-13 04:00:09
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
thumbnail: 'https://cdn.steemitimages.com/DQma67owvKE4BP9sTS1PiLY7Ty8JaddHWNJ9qzLzwTG4pA1/makerdao.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![makerdao.jpg](https://cdn.steemitimages.com/DQma67owvKE4BP9sTS1PiLY7Ty8JaddHWNJ9qzLzwTG4pA1/makerdao.jpg)

안녕하세요, 디온입니다. COVID-19로 인한 WHO의 판데믹 선언이 기존 주식시장 뿐만 아니라 암호화폐 시장에도 미치는 영향력이 정말 어마무시한 것 같습니다. 

현금과 같은 유동성 자산에 대한 선호도가 급격히 증가할 수 밖에 없는 절박한 상황이 벌어지면 결국 "위기 때 빛을 발하는 비트코인"도 존재할 수 없고, 모든 투자 시장들이 급격히 붕괴되는 것은 피할 수 없겠죠.

개인적으로 암호화폐 시장의 대부인 비트코인이 하루 동안 30% 이상 빠져버리는 상황 속에서 **변동성이 높은 자산을 담보로 하고 있었던 DeFi 모델들은 어떻게 버틸 수 있을지**에 대해서 궁금해했었는데, 오늘 MakerDAO에서 이와 관련한 공지가 있었습니다. 

- 원문 링크 : [Recent Market Activity and Next Steps](https://blog.makerdao.com/recent-market-activity-and-next-steps/)

### #1. 대규모 청산과 경매
---

어제(3월 12일) ETH의 가격이 24시간 만에 30%이상 가치 하락이 발생하며 GAS수수료의 증가 - 메이커 프로토콜 및 이더리움 DeFi 네트워크 스트레스 증가로 이어졌습니다.

이러한 상황으로 인해 ETH를 포함하여 여러 ERC20토큰의 담보물 대규모 청산이 야기되었고, **차익거래를 통해 가격 안정화에 기여하는 키퍼(keeper)들이 경매에서 50 ETH를 0 DAI에 가까운 가격으로 취득하게 되는 해프닝**이 벌어졌었다고 합니다. 

> 담보물의 청산은 경매를 통해 진행되기 때문에 담보물의 급격한 가격 변동 시에 위와 같은 상황이 벌어지는 것은 프로토콜의 오류라고 볼 수는 없다고 합니다.


### #2. 오라클의 오류
---
그러나 ETH의 가격이 급락한다고 하여 청산 담보물의 경매 가격이 0 DAI에 가까운 가격으로 진행되었던 것의 또 다른 이유는 **Maker오라클이 최신 가격을 제공하는데 시간이 걸렸기 때문**입니다.

이는 결국, 담보물의 청산을 통해 가격을 안정화하는 프로토콜의 논리에 문제가 없었다고 해도, **아직 시스템적 오류로 인한 리스크가 존재하고 있음을 의미**하고 있습니다.

### #3. 미상환 채무
---

결국 이번의 사태는 메이커다오에 400만 달러 규모의 미상환채무를 발생시켰고, 이에 따라 프로토콜의 변경을 위한 커뮤니티 투표를 진행할 예정이라고 합니다.

더불어, 미상환채무는 메이커다오의 거버넌스 토큰인 MKR의 경매를 진행하여 상환할 예정이라고 합니다. 


결국 요약하면, 약간의 시스템적인 오류는 있었지만 **MakerDAO는 급격한 변동성으로 인한 담보물의 가치하락에도 DAI를 스테이블하게 운영할 수 있는 로직을 잘 갖추고 있으며, 잔인할 정도의 실전 스트레스 테스트에서도 급격히 무너지지는 않는 모습**을 보였다고 볼 수 있습니다.

---



번외로 몇 달 전의 EOS 네트워크 혼잡 현상에 이어, 어제는 이더리움의 네트워크 혼잡 현상이 발생했네요. 하루만에 트랜잭션 수수료가 이렇게 급상승하고 사실상 네트워크가 마비 상태가 온 것은 2017년 말 이후에 굉장히 오랜만인 것 같습니다.

![chart.png](https://cdn.steemitimages.com/DQmQuuiNYDUPjgusReZFKm4DGYC5TkVS1CMRtSnRp7QWnaU/chart.png)


![chart (1).png](https://cdn.steemitimages.com/DQme8zWxXGkkEt4Y9a1JSB2KLFjeLPX496eWMrLQQVSTJTR/chart%20(1).png)


![chart (2).png](https://cdn.steemitimages.com/DQmR4WyfQ9FBVLwuApzz7rSsKbFJ1vbXKanb6CpbTmrzKYv/chart%20(2).png)

이더리움은 DeFi를 통해서 엄청난 금액의 자금을 자신들의 블록체인에 스테이킹 시켜놓음으로써 디앱 플랫폼의 대표 주자가 될 것으로 예상했던 EOS와 트론에 1차 압승을 거두고 있는 상황입니다.

어쩔 수 없이 돈이 있는 곳에 커뮤니티가 있을 수 밖에 없기 때문에, 이더리움은 전당포라고 놀림을 받으면서도 DeFi를 통해 위기를 한차례 넘겼다고 볼 수 있겠네요.

그런데, 이번 상황을 보면서 **혹시라도 결제 수단으로의 사용을 위한 ERC20은 정말 의미가 없다**라는 생각이 들기도 하고, **혼잡 현상이 한 번도 벌어지지 않은 이 오래된 스팀 블록체인도 참 대단하다**라는 생각이 듭니다.

- - -

This page is synchronized from the post: ['[dCRYPTO] 급격한 가격변동에도 스테이블코인 DAI는 괜찮았을까?'](https://steemit.com/@donekim/dcrypto-dai)
