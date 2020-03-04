
---
title: 'sct swap 모니터링 하면서..'
permlink: 4prffq-sct-swap
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-03-04 16:52:18
categories:
- hive-101145
tags:
- hive-101145
- sct-kr
- sct-freeboard
- sct-dev
- kr
- zzan
- s
- union
- sct
thumbnail: 'https://cdn.steemitimages.com/DQmX17B68PS82u9hxJoZzzSLuvTJCRxWqnpQD9rLQcMSjm2/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


sct swap 시스템을 키고 1시간이 지났습니다.  잤다가 문제 생길까봐 스왑시스템 동작하는걸 지켜봤습니다. 잘 동작하는것 같군요.

모니터링하다가 재밌는걸 발견했습니다.
거래소는 2가지 방식이 있는데요.

1. 매수/매도가 있는 방식 (스팀엔진 거래소, 기존 거래소 - 매수 매도가 있음.)
2. 유니스왑 방식 (Pool에 있는 두 토큰의 비율로 교환 비율 결정)

1번에서는 매수와 매도에 가격차이가 있을 수 있습니다. 그래서, 한쪽에서 포기를 해야합니다. 좀더 비싸게 살까. 아니면 싸게 살까.

2번은 Pool에 잔고가 있다면 언제든지 교환이 가능합니다. 만약 한쪽으로 거래가 지속되면 교환 비율이 변경될 뿐이죠.

---

2번 유니스왑방식은 기존 거래소를 따라서 자동으로 교환비율이 현재가를 쫓아가게 된다는걸 알았습니다. 이런느낌이죠. 거래소 차익거래하는거랑 똑같습니다. 글로 설명하기 어렵군요. 가격 차이가 많이 나면 사용자들이 자신들의 이득을 위해 교환을 합니다.

제가 읽었던 글을 인용하는게 낫겠네요. 

https://medium.com/block-journal/uniswap-understanding-the-decentralised-ethereum-exchange-5ee5d7878996?
![](https://cdn.steemitimages.com/DQmX17B68PS82u9hxJoZzzSLuvTJCRxWqnpQD9rLQcMSjm2/image.png)

즉, 차익거래를 원하는 사용자들에 의해 가격이 알아서 조정된다는 의미입니다.
가격이 알아서 조정되면서 거래가 계속 진행되고, pool에는 수수료가 계속 쌓입니다.

예를 들면, 

DAI <->ETH 스왑쌍이 uniswap에 있다고 합시다.
DAI랑 ETH는 기존 거래소에서도 살 수 있습니다.

Uniswap의 DAI<->ETH의 비율이 기존거래소보다 유리하면 uniswap에서 사면 되는거고요. 아니라면 기존 거래소에서 사면 됩니다. 즉, 유리한곳에서 사서 양쪽으로 잘 왔다갔다하면서 가격이 유지됩니다.

---

## 결론

uniswap방식의 sct-swap 시스템이 런칭했습니다. 이 시스템이 krwp를 1000원으로 무조건 보장해주는것이 아닙니다. 차익거래를 원하는 사람들에 의해 가격이 조정될 것입니다. 

sct-swap의 목적은 좀 더 쉽고 빠르게 steem-engine 기반 토큰들의 스왑을 해주는것에 있다고 생각합니다. (추후 확장할 수도 있고요.)

감사합니다.

- - -

This page is synchronized from the post: ['sct swap 모니터링 하면서..'](https://steemit.com/@jacobyu/4prffq-sct-swap)
