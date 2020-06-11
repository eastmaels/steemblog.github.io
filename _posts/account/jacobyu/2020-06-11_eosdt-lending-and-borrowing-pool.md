
---
title: 'EOSDT lending and borrowing pool'
permlink: eosdt-lending-and-borrowing-pool
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-06-11 13:20:45
categories:
- sct-kr
tags:
- sct-kr
- sct-freeboard
- zzan
- kr
- union
- s
- sct
thumbnail: 'https://cdn.steemitimages.com/DQmbX9gbqE8YgddNTm93ua3wGGLSKw1CBKtnJPFDjxQNvKF/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


eosdt의 이자율에 대한 설명입니다.

현재 eosdt의 이자율은 ㅋㅋ 28프로입니다.

![](https://cdn.steemitimages.com/DQmbX9gbqE8YgddNTm93ua3wGGLSKw1CBKtnJPFDjxQNvKF/image.png)

어떻게 28프로가 될 수 있는지 궁금했고, 기술문서를 봐봅니다.
https://knowledgebase.equilibrium.io/tools-and-products/products/moneymarket


* eosdt를 맡기는 사람이 있고, 담보를 맡기고 eosdt를 빌려가는 사람이 있다.

* 맡기고, 빌리는 행위는 스마트컨트랙으로 이루어지며, 이부분은 누구나 할 수 있다. 맡기고 빌려가는 eosdt는 eosdt 풀에 저장하게 된다. 이 풀은 누구도 건들 수 없다. 

* 이자는 공급과 수요에 의해 결정된다. 빌려가는 사람이 많으면 (eos를 담보로 eosdt를 가져가는 사람이 많으면) eosdt의 이자율이 올라간다. **eosdt의 풀이 작아져도 이자율은 올라간다.**

> Interest rates are determined by the supply and demand of the underlying asset. When demand to borrow an asset grows (or when supply is removed) interest rates increase to incentivize additional liquidity.

* 이자는 변동성이 있다. 그때그때 공급과 수요에 따라 다르다.
![](https://cdn.steemitimages.com/DQmPojQPHDxf3Rmvs5v8q9pfdqnpvWjX4v5EAfLbCDsE6JB/image.png)


이자에 대한 식이다.


> * Lenders earn an implicit interest rate based on actual borrowing utilization.
> * Borrowing interest rate model: 
r = r0 + total borrowed / (total borrowed + total supply) * rX

---

현재 eosdt의 상태에 대해 살펴본다.
https://equilibrium.io/system-monitor/ko/overview

담보로 맡긴 eos : 4,009,762.84 eos = $10,866,457.2964
생성된 eosdt : 2,721,322 eosdt
pool에 있는 eosdt : 183,861.69 eosdt

현재 eos 4,009,762.84개가 eosdt를 생성을 위해 담보로 묶여있다.
생성된 eosdt의 가치의 4배 정도이다.

eosdt가 1달러의 가치를 잃으려면요. 아무도 담보를 추가 안하고 eos가격이 $0.88로 폭락하면 eosdt 망한다고 볼 수 있다.

생성된 eosdt의 93.3퍼센트는 이미 밖으로 (거래소로) 나간 상태이다. 한 6.7퍼센트만 eosdt 풀에 있다.  즉, eos 담보를 맡기고 내는 이자를 eosdt 풀에 넣은 사용자들이 받고 있다. 그러니깐 93.3퍼센트의 eosdt의 대출 이자를 6.7% 의 스테이킹 풀 사용자가 나눠갖고 있으니 이자가 높은 것이다.

여기서 궁금한게 생긴다. 

1) eosdt를 만든 사람들은 eosdt의 스테이킹 풀 이자보다 더 수익률을 낼 수 있는것인가? eosdt를 만들어서 어디에 쓰니? 집샀나 차샀나? 비트코인에 투자했나? 참. eosdt를 빌린 입장에서는 실제로 2%정도만 이자를 내면 되니깐 2%이상 수익을 낼 수 있으면 어디든 좋은거긴 하다.

2) eosdt 45%가 eosdt 스테이킹 홀더들에게 돌아간다면, 나머지 55퍼는 어디로 가는가?

eosdt ..
대박인듯..
좀더 봐야겠다.

- - -

This page is synchronized from the post: ['EOSDT lending and borrowing pool'](https://steemit.com/@jacobyu/eosdt-lending-and-borrowing-pool)
