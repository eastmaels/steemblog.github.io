
---
title: 'Uniswap #1 스팀코인판 swap시스템에 적용'
permlink: uniswap-1-swap
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-12-28 08:47:54
categories:
- sct
tags:
- sct
- sct-kr
- sct-dev
- zzan
- kr
- busy
- union
- s
- kr-dev
thumbnail: 'https://cdn.steemitimages.com/DQmb2cuJrk1ZiZF1Wrb3GG1vWx2jQSvpCyUgQ5rcQdn9Dp6/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


안녕하세요. 제이콥입니다.

이전 글에서 Uniswap에 대해 소개했습니다. 예시로 들었던 내용은 수수료가 없다고 가정한 예시였습니다. 이번에는 수수료가 있는 경우, 어떤식으로 계산되는지 적어보겠습니다. 
(https://www.steemcoinpan.com/sct/@jacobyu/uniswap-1)

https://github.com/runtimeverification/verified-smart-contracts/blob/uniswap/uniswap/x-y-k.pdf 에는 자세한 수식이 적혀있습니다. 이걸 바탕으로 uniswap의 거래방식을 스팀코인판 swap에 적용할 예정입니다.

---

#### 수수료를 고려한 uniswap 거래방식

![](https://cdn.steemitimages.com/DQmb2cuJrk1ZiZF1Wrb3GG1vWx2jQSvpCyUgQ5rcQdn9Dp6/image.png)

식에서 사용하는 변수들에 대해 간단히 적어봅니다. x,y는 거래할 2개의 토큰입니다. △x는 입금한 토큰의양, △y는 사용자가 받게될 토큰의 양입니다. p는 수수료입니다. 우리는 수수료가 3%이니 p는 0.03이됩니다. r = 1-p인데, 수수료가 0이면 r은 1이됩니다.

먼저 저번 포스팅에서 계산했던걸 이 식으로 다시 해보겠습니다. 
x = 10, y= 500 이라고 가정합니다. (이더리움 10개, OMG 500개) 수수료는 0입니다. 

#### 1ETH 입금할 경우, 얼마의 OMG를 받아야하나?
△y를 구하면 됩니다. 수수료를 0으로 가정했으니, r은 1입니다.
> △x = 1
α = 1/10 = 0.1
△y = 0.1* 1 / (1+0.1)* 500 
△y = 0.1/1.1 * 500
△y = 1/11 * 500 = 45.5 OMG

45.5omg입니다. 저번 포스팅에서 계산한것과 똑같죠?
x * y = x' * y'=5000으로 일정합니다.

---

#### 1ETH 입금할 경우, 얼마의 OMG를 받아야하나? (수수료 적용)
수수료를 3퍼센트로 설정합니다. 그러면 r은 0.97입니다.

> △x = 1
α = 1/10 = 0.1
△y = 0.1* 0.97 / (1+0.1 * 0.97)* 500 
△y = 0.097/1.097 * 500
△y = 97/1097 * 500 = 44.211 OMG

44.211 OMG를 받아야합니다.
수수료가 적용되면 x' * y'= k'는 업데이트가 됩니다.
> x * y = k
x' * y' = k' 
k' > k
k' = 5013.6736554239

---

위에서 적은 식을 활용하여 두 토큰간의 교환비율 계산하는 걸 우리 시스템에 적용할 것입니다. 이걸 적용하면 적정 교환가격을 유지할 수 있는 스왑시스템을 만들 수 있을것입니다.

감사합니다.

- - -

This page is synchronized from the post: ['Uniswap #1 스팀코인판 swap시스템에 적용'](https://steemit.com/@jacobyu/uniswap-1-swap)
