
---
title: '[개발, 분석] steemwallet #2 스팀엔진 토큰 적용하기'
permlink: steemwallet-2
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-11-04 16:33:42
categories:
- sct
tags:
- sct
- sct-kr
- sct-dev
- kr-dev
- union
- kr
- zzan
thumbnail: 'https://steemitimages.com/300x0/https://cdn.steemitimages.com/DQmZyPUBdUgTaMVHy3XfvwnS5CZWJiwiYEQbBoqsPYRxr2D/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


안녕하세요. 제이콥입니다.

[[개발, 분석] steemwallet #1 소개 및 설치)](https://www.steemcoinpan.com/sct/@jacobyu/steemwallet-1)에서 로랜드가 개발한 스팀월렛을 소개하고 직접 설치해서 동작시켜봤습니다.

로랜드의 스팀월렛은 가볍고 지갑에 집중한 앱인데요. 스팀과 스달만 지원했었기 때문에 제가 여기다가 스팀엔진 토큰을 적용가능한지 테스트 해봤습니다. 

결과적으로는 sct토큰을 스팀월렛에 넣는 작업을 성공했고, 충분히 스팀엔진 기능들을 이 지갑에 넣어볼 수 있겠다. 판단했습니다.

![](https://steemitimages.com/300x0/https://cdn.steemitimages.com/DQmZyPUBdUgTaMVHy3XfvwnS5CZWJiwiYEQbBoqsPYRxr2D/image.png)

---

### 생소하다. Appcelerator titanium

이 앱에 스팀엔진 토큰을 넣는데 가장 크게 느껴진 장벽은 생소한 플랫폼이였습니다. 스팀월렛 코드가 `Appcelerator titanium`라는 생소한 플랫폼이라 코드를 이해하는데 어려움이 조금 있었습니다. 

코드가 그나마 적은 편이라 분석하기 괜찮았는데요. 안드로이드와 유사한 구성을 갖고 있습니다. 하나의 화면에 대해 xml과 javascript 코드를 갖고 있습니다.

원하는대로 ui를 변경하려면 플랫폼 공부를 좀 해야할 것 같아요. 지금은 유저가 갖고 있는 sct토큰 정보만 띄우는걸 해봤습니다.

#### sscjs 라이브러리를 사용하지 않고 스팀엔진 사용자 잔고 가져오기


또, 스팀엔진 토큰을 불러오는 기능을 구현하려면 sscjs라이브러리를 사용하는데요. Appcelerator titanium에서는 sscjs 라이브러리를 사용하지 못했습니다. 왜냐하면 sscjs가 사용하는 axios라이브러리를 Appcelerator titanium플랫폼에서 지원하지 않았기 때문입니다.

sscjs 라이브러리를 사용하지 않고 스팀엔진 토큰 정보를 가져오기 위해 직접 post 요청하는걸로 해결했습니다. 쉽게 복사 할 수 있도록 아래 코드로도 넣었습니다.

![](https://cdn.steemitimages.com/DQmQCtEv2dqKWSyxTkLvDeeSYfNZMCNAoY5jDJMTqYtaJyq/image.png)

```
url : https://api.steem-engine.com/rpc/contracts
body:
{
        "jsonrpc":"2.0",
        "id":10,
        "method":"find",
        "params":{
            "contract":"tokens",
            "table":"balances",
            "query":{"account":"계정명"},
            "limit":1000,
            "offset":0,
            "indexes":""
        }
}
```

이부분에서는 아래 글들이 도움이 됐습니다. sscjs 라이브러리를 사용하지 못할거라곤 생각 못했거든요.

* https://github.com/harpagon210/steemsmartcontracts/wiki/JSON-RPC-server
* https://www.steemcoinpan.com/sct/@morning/6r2inf-sct
* https://steemit.com/steemengine/@wonsama/steem-engine-with-nodejs

----

추가적으로 해볼 수 있는 것은 아래 내용입니다.

1. 스팀엔진 토큰 전송하기
2. 스팀엔진 토큰 전송기록 확인하기

2가지 작업인데요. 
이 작업들도 진행되면 포스팅 간단히 하겠습니다.



감사합니다.

- - -

This page is synchronized from the post: ['[개발, 분석] steemwallet #2 스팀엔진 토큰 적용하기'](https://steemit.com/@jacobyu/steemwallet-2)
