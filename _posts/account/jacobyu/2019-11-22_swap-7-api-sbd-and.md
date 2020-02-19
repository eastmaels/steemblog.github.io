
---
title: '[개발] 스팀코인판 Swap 기능 #7 가격 api 소개 (스팀,SBD 가격 피드 가져오기 & 환율 가져오기)'
permlink: swap-7-api-sbd-and
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-11-22 16:26:18
categories:
- sct
tags:
- sct
- sct-kr
- sct-dev
- union
- busy
- sct-freeboard
thumbnail: 'https://steemitimages.com/300x0/https://cdn.steemitimages.com/DQmYyZgt6Lyobg8pKq44C9cdFLAoSuQxAjcNYW7vqRSSQMz/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


안녕하세요. 

Swap 시스템의 가격api를 업데이트했습니다.
https://jacobyu.net/categories/프로젝트/Swap/ 에서 이전 글들을 확인할 수 있습니다.

## 1. 스팀코인판 Swap  토큰 가격

스팀코인판은 업비트 api와 스팀엔진api를 사용해서 swap시스템에 사용할 가격정보를 업데이트합니다.


SCT:  steem-engine에서 체결된 SCT/STEEM 3일 평균가 
SCTM:  steem-engine에서 체결된 SCTM/STEEM 3일 평균가 
SBD:  (SBD/KRW 2시간 평균가) / (STEEM/KRW 2시간 평균가)
KRWP: 1000원 / (STEEM/KRW 2시간 평균가)



## 2. 코인/스팀/스팀엔진 가격 feed api 모음 (2019.11)

@dakesi, @sct.tom님이 몇 개 api를 알려주셨습니다. 감사합니다!

#### upbit

업비트 공식 api입니다. 다양한 정보를 제공하니 문서를 확인해보셔요.

https://docs.upbit.com/docs/upbit-quotation-restful-api
https://api.upbit.com/v1/candles/minutes/10?market=KRW-STEEM&count=12

위의 api를 호출하면, 10분 간격으로 STEEM/KRW를 12개 출력합니다. 

#### 코인개코

코인개코 api입니다. 여러 거래소에서 시세를 가져옵니다.

https://api.coingecko.com/api/v3/simple/price?ids=steem&vs_currencies=usd

#### cryptocompare

cryptocompare라는 곳인데요. 여러 거래소에서 시세를 가져옵니다.

apikey를 발급받아서 사용하면, 세부 조정이 가능해보입니다.

https://min-api.cryptocompare.com/ 
https://min-api.cryptocompare.com/data/price?fsym=SBD&tsyms=KRW
https://min-api.cryptocompare.com/data/price?fsym=SBD&tsyms=USD


#### 스몬 api
스몬에서도 카드구매를 할 때 steem/sbd가격이 중요합니다. 
bittrex에서만 정보 가져오고 12시간 평균가랍니다. (@dakesi)

https://steemmonsters.com/purchases/settings 

#### KRW-USD 환전 api

두나무에서 제공하는 quotation api입니다.
https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD

관련 문서는 확인 못했는데요, 아시는분 있으면 댓글 달아주세요.

## 3. 스왑시스템 테스트

가격 api를 적용하고 스왑시스템을 확인해봤습니다. 보시면, 1SBD는 0.737KRWP로 전환됩니다. 0.737KRWP는 737원이고요. 업비트에서 가격을 확인해보니 2시간 평균이 잘 적용된걸 볼 수 있습니다.


![](https://steemitimages.com/300x0/https://cdn.steemitimages.com/DQmYyZgt6Lyobg8pKq44C9cdFLAoSuQxAjcNYW7vqRSSQMz/image.png)

가격 api는 업비트, 스팀엔진에서 거래가를 기반으로 만들어집니다. 시장이 급변하는 경우, 스왑시스템의 비율도 생각한것과 다를 수 있습니다. 전환하기 전에 비율을 확인하고 해주시면 좋겠습니다.



![](https://cdn.steemitimages.com/DQmWFssRPYWC67m1n6JinpEE4mV9BNpw5FGa4uHYzFG9wfs/image.png)


감사합니다.

- - -

This page is synchronized from the post: ['[개발] 스팀코인판 Swap 기능 #7 가격 api 소개 (스팀,SBD 가격 피드 가져오기 & 환율 가져오기)'](https://steemit.com/@jacobyu/swap-7-api-sbd-and)
