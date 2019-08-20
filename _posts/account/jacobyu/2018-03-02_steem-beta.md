
---
title: 'Steem 기반 격투게임, 스팀파이터 Beta, 컴퓨터와 싸우자'
permlink: steem-beta
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-02 22:51:36
categories:
- kr-dev
tags:
- kr-dev
- kr
- busy
- jjangjjangman
- coinkorea
thumbnail: 'https://steemitimages.com/0x0/https://res.cloudinary.com/hpiynhbhq/image/upload/v1519313053/grgohigtrsbgcozpaouq.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


안녕하세요. 제이콥입니다.

스팀파이터라고 아시나요?

지난주에 스팀파이터에 대한 소개 글을 작성했었습니다.

<a href="https://steemit.com/kr-dev/@jacobyu/steem">최초의 STEEM 기반의 격투게임를 꿈꾼다.</a>

많은 사람들이 관심을 가져주셔서 너무 감사했습니다.

매주 1회 이상 개발 진행 상황에 대해 작성하고자 합니다.

<img src="https://steemitimages.com/0x0/https://res.cloudinary.com/hpiynhbhq/image/upload/v1519313053/grgohigtrsbgcozpaouq.png" alt="U5ds1swNmbukvRq8N5hqms79Y8vkXNn_1680x8400.png" />

스팀파이터를 통해 원하는 것은 아래와 같습니다.
<ul>
 	<li>게임을 통한 보팅
<ul>
 	<li>인공지능 대결</li>
 	<li>1:1 대결</li>
 	<li>배틀그라운드</li>
</ul>
</li>
 	<li>서로간의 소통
<ul>
 	<li>자신 만의 캐릭터를 만든다.</li>
 	<li>싸이월드 같은 공간을 만든다.</li>
 	<li>싸움 뿐만 아니라 서로 이야기한다.</li>
</ul>
</li>
</ul>
<ul>
 	<li>스팀 기반의 웹게임
<ul>
 	<li>누구든 편하게 접속</li>
 	<li>성공적인 서비스</li>
 	<li>스팀 가격상승!!!!!!!!!</li>
</ul>

이러한 목표를 갖고, 게임을 열심히 개발중입니다.

<hr />

## 현재상황 - 인공지능 대결
1차 구현 목표인 인공지능 대결을 완성하였습니다.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520030204/uwojbadrxnswocmlufqx.png)

아래와 같은 로직으로 운영합니다.

1. 먼저 SteemConnect2를 이용하여 로그인을 합니다. 로그인을 안할 경우, 랭킹에 들어가지 않습니다.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520032942/wgsrqgnmgfqvgrsfemrp.png)

2. 로그인을 한 후, 게임을 시작합니다.

3. 게임이 종료 된 후, DB에 승/패가 기록이 됩니다.

4. 컴퓨터에게 진다면 소소한 보팅? (5%)을 @steemfighter에게 하도록 하였습니다.
이기면 1%보팅을 합니다.

또한, @steemfighter의 최신글에 이겼다, 졌다라는 댓글을 남기게 됩니다.

이 경우는, 원하지 않을 경우 빼려고 합니다.

----

이와 같은 방식으로 서비스를 운영을 하여,

유저들에게 보팅을 받아 운영금을 모을 예정이며,

주기적으로 랭킹을 발표할 예정입니다.

상위 랭킹이신분들은 상금이라던가, 상품이라던가,

고민을 해보겠습니다.

<hr />

## 추후 계획
인공 지능 대결의 완성도 높이기
<ul>
 	<li>서비스 운영하기</li>
 	<li>할수록 컴퓨터의 난이도가 높아진다.
<ul>
 	<li>스테이지 완료 정도에 따른 랭킹을 만든다.</li>
</ul>
</li>
</ul>
유저 간의 대결
<ul>
 	<li>유저 간의 대결을 통해 서로 보팅을 할 수 있도록 한다.</li>
 	<li>랭킹을 만든다.</li>
</ul>

<hr />

## 기여&amp;지원
이 서비스를

저 혼자 만들기에는

시간도 부족하며, 능력도 부족하다는 것을

많이 느끼고 있습니다.
<ul>
 	<li>아이디어</li>
 	<li>디자인</li>
 	<li>운영</li>
 	<li>개발</li>
 	<li>보안</li>
</ul>
기여&amp;지원을 원하시는 분은 steemit.chat @jacobyu로 연락주세요.

궁금한 것이 있다면 언제든지 물어보세요!

-----

## 게임 플레이
아래 두 링크 중 하나로 접속을 하시면 됩니다.
[스팀파이터.oa.to](http://스팀파이터.oa.to)
[steemfighter.oa.to](http://steemfighter.oa.to)

### 기술
키는 wsad tyu입니다.

* u + d + t
* u + d + y
* 나머지는 비밀..

## 감사합니다.

- - -

This page is synchronized from the post: ['Steem 기반 격투게임, 스팀파이터 Beta, 컴퓨터와 싸우자'](https://steemit.com/@jacobyu/steem-beta)
