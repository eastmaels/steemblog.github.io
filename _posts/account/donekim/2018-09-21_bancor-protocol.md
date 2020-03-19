
---
title: '[이오스 이야기]  이오스 블록체인으로 확장 계획을 발표한 뱅코르 프로토콜(Bancor Protocol) 알아보기!'
permlink: bancor-protocol
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-09-21 07:39:30
categories:
- coinkorea
tags:
- coinkorea
- kr-coin
- kr-series
- eos
- jjangjjangman
thumbnail: 'https://cdn.steemitimages.com/DQmVqig7tJfGTnDf5v1fe5bZ7Qb3TTGtydJYRU5BoekFJTM/main%20deonkim%20eos.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![main deonkim eos.png](https://cdn.steemitimages.com/DQmVqig7tJfGTnDf5v1fe5bZ7Qb3TTGtydJYRU5BoekFJTM/main%20deonkim%20eos.png)

![steemit_logo.png](https://cdn.steemitimages.com/DQmaZsenPDf5Qn5nJzDZNkVg1aCQUyXNwqwK1fk8qe4jhKa/steemit_logo.png)

안녕하세요, 디온(@donekim)입니다. **이더리움 블록체인 기반의 가장 대표적인 댑(DApp)이라고 할 수 있는 뱅코르(Bancor)가 이오스 블록체인으로의 확장 계획을 발표**하였습니다. 뱅코르는 현재 24시간 사용자 수를 기준으로 6위에 해당하는 이더리움의 대표 댑 중 하나입니다. 최근 일주일간의 트랜잭션 수로 따지면 IDEX 다음으로 가장 많은 트랜잭션을 발생시키는 댑이기도 합니다.

![dappradar bancor.png](https://cdn.steemitimages.com/DQmPSzt8EAYdYpWc9bMReaNiwJCMjMNBjD8VwNvNrFXDtHK/dappradar%20bancor.png)


사실 뱅코르에서는 이미 리퀴드이오스(LiquidEOS)라는 이오스 블록프로듀서 후보가 출마하면서부터 "뱅코르가 이오스로 마이그레이션 하는 것은 아닐까?"하는 소문들도 있었던 만큼, 뱅코르의 확장 계획은 어느 정도 예상이 되던 일이긴 했지만, 뱅코르의 이오스로의 공식 확장 계획 발표는 꽤나 반가운 소식인 것 같습니다.

![what-is-bancor-1300x866.jpg](https://cdn.steemitimages.com/DQmUU9b5ki28djNTizwrPohUepxv3LXJfowxQtW66UuKRHX/what-is-bancor-1300x866.jpg)



혹시라도 아직까지 뱅코르가 무엇인지에 대해서 잘 모르시는 분들을 위해서 간략하게 설명을 하면, 뱅코르(Bancor)는 세계 최대의 탈중앙화된 유동성 네트워크(Liquidity network)로 우리가 사용하고 있는 암호화폐 거래소와 같이 **"사용자가 두 개의 토큰 간의 변환을 가능하게 해주는 기능을 지원"**합니다. 

![bancor network.png](https://cdn.steemitimages.com/DQmTsVonezc64U2NzRai1coa8QDxyzbTXFHsizLz1Aetgoz/bancor%20network.png)

아직까지 별도의 크로스 블록체인 토큰 변환까지 지원하고 있는 것은 아니지만, **이더리움 기반의 ERC-20토큰들은 뱅코르 네트워크를 통해서 토큰 간 변환을 하는 것이 가능**합니다.

![convert.png](https://cdn.steemitimages.com/DQmbHEQjUcyVuZqojtzB8Fts4TRweuCmC47QPX19ykGnD8t/convert.png)

ERC-20 토큰 중 하나인 오미세고(OMG)와 엘프(ELF)를 예로 들어서 설명해보겠습니다. 기존 암호화폐 거래소를 이용하는 사용자가 만약 자신이 보유하고 있는 오미세고 토큰을 처분하고 엘프에 투자하고 싶은 경우에는 BTC마켓에서 오미세고 토큰을 비트코인으로 전환한 다음에 엘프 토큰을 비트코인으로 구매하거나, 원화 마켓에서 오미세고를 처분하고 처분 대가로 얻은 원화를 가지고 엘프를 매수해야만 합니다.

그러나 뱅코르 네트워크를 이용하면 **원화나 비트코인, 이더리움과 같은 거래소 마켓에서 사용 중인 기축통화를 거칠 필요 없이 Bancor formula가 커넥터와 스마트 컨트랙트(릴레이)간의 균형을 유지하기 위해 끊임없이 재계산하고 있는 알고리즘화된 변환율에 따라 오미세고 토큰을 곧바로 엘프 토큰으로 변환**할 수 있게 됩니다. 

예치금과 오더북을 기반으로 운영하는 중앙화된 암호화폐 거래소와는 달리 릴레이로 불리우는 뱅코르의 스마트 컨트랙트는 거래소에 자금을 예치하거나 토큰 구매자들 간의 매칭이 필요하지 않으며 바로 토큰의 즉석 변환을 가능하게 한다는 장점을 가집니다. 예치금을 특정한 주체에게 맡겨놓을 필요가 없기 때문에 해킹 등의 공격으로부터 매우 안전하다는 특징이 있습니다.

**뱅코르를 통해 토큰 변환을 하는 사용자들은 자신이 보유하고 있는 토큰을 자신이 필요로 하는 토큰으로 쉽고 빠르게 변환할 수 있으며, 이러한 과정에서 매수호가, 매도호가 입력 실수 등을 걱정할 필요도 없습니다.** 위에서 이야기 한 것처럼 특정 가격에 해당 토큰을 매수하려는 수요자와 공급자가 만나서 교환을 하는 교환거래 방식을 따르는 것이 아니기 때문입니다. 사용자들은 알고리즘화 되어 계산된 변환율에 따라 자동화된 변환을 하게 되기 때문에 변환 과정에서 인적오류가 개입되는 불상사가 발생할 염려가 전혀 없습니다.  

![Bancor X.png](https://cdn.steemitimages.com/DQmdyDpy4W2gjXZDU5y3FDWZ1jW9DEp9z2m3ymHXiyW9pkC/Bancor%20X.png)

이렇게 토큰 변환에 있어 혁신적인 기술을 만들어 낸 뱅코르가 이오스 테스트넷 상에 스캐터를 통해 이오스 블록체인 기반 토큰들의 변환을 가능하게 하는 내장형 유저 인터페이스를 출시하였는데, 그 이름은 **뱅코르엑스(BancorX)**입니다. **전 세계 최초 크로스 블록체인 탈중앙화 유동성 네트워크**를 표방하는 뱅코르엑스 출시를 통해 앞으로 많은 사용자들은 놀라운 경험을 할 수 있게 될 것으로 보입니다. 


![start converting.png](https://cdn.steemitimages.com/DQmPq8Lunn6CRFicHwVohktwM3qTHxJG1Pzme1RQtH6M6Mk/start%20converting.png)


먼저, 아직 구체적인 출시 시기는 밝혀지지 않았으나 **뱅코르엑스는 ①이오스 기반의 토큰끼리의 변환, 그리고 ②이오스와 이더리움 기반의 토큰끼리의 교환을 가능**하게 합니다. 이오스 기반의 토큰끼리의 변환은 이전에 이더리움 블록체인 위에서 ERC-20 토큰 간의 교환을 가능하게 해주었던 것과 매우 유사하나, 이더리움 블록체인에 비해 다음과 같은 강점을 가지고 있습니다.

**(1) 매우 빠른 트랜잭션 속도를 경험할 수 있습니다.** (이더리움에서는 10초 이상 걸렸던 트랜잭션 속도가 이오스에서는 1초로 단축됩니다)

**(2) 트랜잭션 수수료가 없습니다.** (이더리움에서는 최대 50달러에 이르는 수수료를 부담해야 하는 경우도 발생할 수 있습니다)

**(3) 프론트러닝 리스크가 없습니다.** (이더리움에서는 가스수수료에 따라 트랜잭션의 우선순위가 바뀌었던 반면에, 이오스에서는 별도의 수수료가 없기 때문에 수수료가 높은 트랜잭션이 먼저 처리되어 버리는 프론트러닝 리스크가 발생하지 않습니다)


![about bancor.png](https://cdn.steemitimages.com/DQmNp1hF8L8MngenYtiVD9gRfewxkNrR9FPurL4kp62fnGB/about%20bancor.png)

더불어 많은 사람들이 기대하고 있으며 가장 파워풀한 기능이 될 것으로 예상되는 것은 바로 **"크로스체인 유동화 프로토콜(X-Chain Liquidity Protocol) 기능"**입니다. 뱅코르엑스(Bancor X)가 120개가 넘어가는 ERC-20토큰을 이오스 생태계와 연결하는 브릿지 역할을 수행하게 된다면 그 파급력은 실로 어마어마할 것으로 보입니다. 

예를 들어 엘프의 메인넷 출시 전에 엘프 토큰을 일부 구매하고 싶은 이오스 토큰 홀더는 거래소에 원화를 입금하거나 이오스 토큰을 이체하여 원화로 판매하고 엘프 토큰을 사야 하는 번거로운 절차를 거칠 필요 없이, **뱅코르엑스와 스캐터를 통해서 "로그인, 컨버팅, 서명"이라는 몇 번의 클릭을 통해 곧바로 컨버팅**만 해주면 됩니다. 

**개인적으로 기존의 이더리움 기반의 뱅코르는 이더리움 네트워크에 과부하가 있는 경우 계속해서 올라가는 가스수수료로 인해 실제 사용이 불가능에 가까운 수준**이었습니다. 특히나 큰 금액을 거래하는 일반 사용자들에게 소액의 자산을 컨버팅 할 때마다 몇 천원에 해당하는 수수료는 엄청난 부담으로 다가올 수 밖에 없기 때문입니다. 

그러나 사용자들에게 트랜잭션 수수료를 부과하지 않은 이오스 생태계에서의 뱅코르는 정말 많은 사용자들에게 사랑받는 댑이 되지 않을까 생각합니다. 특히나 ERC-20토큰과 연결되는 그 날이 온다면, 중앙화된 암호화폐 거래소는 말 그대로 원화를 이오스로 환전하는 환전소 수준으로만 이용하게 되는 날이 올지도 모르겠습니다. :D






<center>![donekim.gif](https://cdn.steemitimages.com/DQmP5rc6mLfZAU56skFU2MkzywZQ5qWruKpyU2hq5nT7md7/donekim.gif)</center>


<center>![behind banner.gif](https://cdn.steemitimages.com/DQmXBUz3S7u2z13jB39UNUder7HUADC9DvHibUEu7DTu3MR/behind%20banner.gif)



<center><pre> H O P E   F O R   T H E   B E S T , 
P L A N   F O R   T H E   W O R S T</pre>
<sub> https://steemit.com/@dONekim</sub></center>

- - -

This page is synchronized from the post: ['[이오스 이야기]  이오스 블록체인으로 확장 계획을 발표한 뱅코르 프로토콜(Bancor Protocol) 알아보기!'](https://steemit.com/@donekim/bancor-protocol)
