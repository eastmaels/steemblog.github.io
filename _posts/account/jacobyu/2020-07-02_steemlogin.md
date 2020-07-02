
---
title: '스팀로그인 (steemlogin) 소개'
permlink: steemlogin
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-07-02 10:09:57
categories:
- sct-kr
tags:
- sct-kr
- sct-freeboard
- union
- s
- zzan
- mini
- sct
thumbnail: 'https://cdn.steemitimages.com/DQmcY7Ffz18gDSPrELv2UVnhPgFPtWaYjAK9KLVF1ymrsN7/Screenshot_20200702-184634_Chrome.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


#### 스팀로그인

스팀 dapp에서  코인을 전송하거나, 글을 쓰거나 여러 트랜잭션을 하기 위해서는 private key가 필요합니다. 근데 나의 private key를 아무 서비스에나 입력할 수는 없습니다. 왜냐하면, 그 dapp에서 내 키를 악용할 수도 있으니까요.

여기서 필요한건 믿을 수 있는 인증 서비스입니다. 내 키를 안심하고 맡길 수 있는 지갑이 필요하죠. 스팀로그인은 써드파티 인증 서비스입니다. 이 서비스에 내 키를 입력하고요. 다른 앱들은 이 서비스에서 토큰을 받거나, 이 서비스에 트랜잭션을 요청합니다.

예를 들면요. 스팀로그인을 믿는다면, 아래 링크를 통해 스팀을 전송할 수 있습니다. 컴퓨터에서든, 핸드폰에서든요.

 https://steemlogin.com/sign/transfer?to=jacobyu&amount=0.001STEEM&memo=test&redirect_uri=https%3A%2F%2Fjacobyu.net


![Screenshot_20200702-184634_Chrome.jpg](https://cdn.steemitimages.com/DQmcY7Ffz18gDSPrELv2UVnhPgFPtWaYjAK9KLVF1ymrsN7/Screenshot_20200702-184634_Chrome.jpg)

(스팀커넥트와 같은 역할을 합니다. 스팀커넥트가 서비스 종료를 선언하고, 스팀로그인은 스팀커넥트가 하는 역할을 대신합니다.)

스팀로그인과 유사한걸로 스팀 키체인이 있고요, 이더리움의 메타마스크, 이오스의 스캐터, 트론의 트론링크 등이 있습니다. 우리는 이 지갑들에 나의 private key를 넣고, dapp들은 이 지갑들에 필요한 트랜잭션을 요청합니다.

#### 그렇다면 이 스팀로그인이란걸 어떻게 믿을 수 있을까요?
스팀로그인의 코드가 공개돼있습니다. 누구나 접근할 수 있고, 코드를 살필 수 있죠. 그 코드를 믿고 쓰는것입니다.

현재 드럭워, 스팀스캔을 만든 @futurewitness (퓨처쇼크 팀)에서 이 서비스를 관리하고 있습니다. 누구나 이 코드를 볼 수 있고, 기여할 수 있습니다.

깃헙 : https://github.com/FutureShockco/steemlogin

---

스팀에서 dapp들이 많이 나오려면 스팀 키체인, 스팀로그인이 필수입니다.

 새로 dapp이 나왔는데 그 dapp에서 액티브 키를 입력하라고 하면 사용하기가 어렵습니다. 그 dapp이 스틴로그인을 통해 스팀을 전송하라고 하면, 스팀로그인을 믿는다면 보낼 수 있죠.

스팀키체인은 웹 플러그인이라 스마트폰에서는 사용할 수 없습니다. 스팀 연동 모바일  dapp을 만든다면 스팀로그인을 사용하면 됩니다.

 
스팀로그인에 대해 소개글을 적어봤습니다.
감사합니당.

- - -

This page is synchronized from the post: ['스팀로그인 (steemlogin) 소개'](https://steemit.com/@jacobyu/steemlogin)
