
---
title: 'uniswap 방식의 sct-swap 시스템 업데이트 계획'
permlink: uniswap-sct-swap
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-01-05 09:12:00
categories:
- sct
tags:
- sct
- sct-kr
- sct-dev
- busy
thumbnail: 'https://steemitimages.com/700x0/https://files.steempeak.com/file/steempeak/jacobyu/F1RT87rL-image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


안녕하세요. 제이콥입니다.

우리 스왑시스템을 uniswap과 동일한 방식으로 동작하도록 개발 계획중입니다. 
기존에 했던 스왑시스템을 보완하고, 아예 뜯어내야할 부분은 뜯어낼 것입니다.

유니스왑을 적용하는데 예상 개발 기간은 1개월 정도로 생각하고 있습니다.
개발 경과에 대해서는 간간히 포스팅으로 해보겠습니다.

유니스왑에 대해 궁금하시다면 아래 링크를 참고하셔요.
* https://jacobyu.net/categories/암호화폐/uniswap/

* [유니스왑 수식](https://github.com/runtimeverification/verified-smart-contracts/blob/uniswap/uniswap/x-y-k.pdf)
* [유니스왑 백서](https://hackmd.io/C-DvwDSfSxuh-Gd4WKE_ig#Providing-Liquidity)
* [유니스왑 공급자관점 좋은설명](https://medium.com/@pintail/uniswap-a-good-deal-for-liquidity-providers-104c0b6816f2)
* [전체적인 설명](https://medium.com/block-journal/uniswap-understanding-the-decentralised-ethereum-exchange-5ee5d7878996?)
* [uniswap roi](https://zumzoom.github.io/analytics/uniswap/roi.html)
* [dai growth](https://uniswap.info/token/0x6b175474e89094c44da98b954eedeac495271d0f )


감사합니다.

---


이 시스템이 갖춰지면 크게 아래 3가지가 바뀝니다.

0. UI
1. 누구나 유동성 공급자가 될 수 있음.
2. 자동으로 조절되는 토큰 간에 교환 가격.
---

#### 1. 

UI는 유니스왑과 유사하게 할 예정입니다.
https://uniswap.exchange/swap


![image.png](https://steemitimages.com/700x0/https://files.steempeak.com/file/steempeak/jacobyu/F1RT87rL-image.png)

#### 2.

유동성 공급자는 유동성을 제공할 token pair를 token pool에 제공하고, liqudity token을 받게됩니다. liqudity token는 pool의 자신의 지분을 나타냅니다. 이것을 소각함으로써, pool에서 출금이 가능합니다.

예를 들어, A,B,C가 같은 비율로 token pair를 공급했습니다. 그 후에는 아무도 공급자가 되지 않았습니다. 두 토큰의 거래가 지속적으로 되면서 fee가 쌓입니다. pool은 fee로 인해 커지나, A, B, C가 갖고 있는 pool의 지분은 동일합니다.

새로 들어오는 사람의 지분 = 전체 liqudity token * krwp 입금 / 현재 krwp pool에 있는 krwp
(여기서 krwp와 대응하는 토큰은 입금하는 krwp의 가치만큼 입금되야합니다.)

![](https://steemitimages.com/0x0/https://cdn.steemitimages.com/DQmXpBgZxeKHJhzZcpRTdTYWLCTNEPgmdne15TqXK2PrzxF/image.png)
---

#### 3.

현 스왑시스템 방식에서는 외부 거래소의 가격을 바탕으로 토큰 간에 교환 가격이 결정됐습니다. 토큰 풀에 잔고가 있다면, 10sct를 krwp로 바꾸던, 100sct를 krwp로 바꾸던 같은 교환가격으로 토큰을 변환할 수 있었습니다. 

2번이 적용되면 이부분이 자동적으로 조절됩니다. 유니스왑 방식으로는 한 번에 많은 토큰을 교환하려면 토큰 교환가격에서 불이익을 받을수 있도록 설계돼있습니다. (여기서 많은 토큰이란, 토큰 풀의 비율을 크게 바꿀 거래량)

아래 사진들을 보시면, 1ETH, 10ETH, 100ETH를 한번에 교환신청할 때, 
1DAI = 0.007367 (1ETH), 
1DAI = 0.007374 (10ETH), 
1DAI = 0.007444 (100ETH)
로 교환되는 비율을 볼 수 있습니다.

https://uniswap.exchange/swap

![](https://steemitimages.com/700x0/https://cdn.steemitimages.com/DQmZBinVPR82QHk9si41bQh99xSBcsMGDbk38UF1LSo1FD6/image.png) 

![](https://steemitimages.com/700x0/https://cdn.steemitimages.com/DQmRCjYZ9MyCMaLiy4ZYyyKsAgjZjg49bTYcThDAw5gTe8a/image.png)

![](https://steemitimages.com/700x0/https://cdn.steemitimages.com/DQmdFedLfKcnxNxvv2jsS6vCxQ2tfNbKJnYjXRrFgEf1KY8/image.png)

- - -

This page is synchronized from the post: ['uniswap 방식의 sct-swap 시스템 업데이트 계획'](https://steemit.com/@jacobyu/uniswap-sct-swap)
