
---
title: '[SCT] 스팀코인판 유저가이드 #1 스팀 키체인(Steem Keychain) 가이드'
permlink: sct-1-steem-keychain
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-05-21 04:13:09
categories:
- sct
tags:
- sct
- userguide
- jjm
- mini
- kr-series
thumbnail: 'https://cdn.steemitimages.com/DQmUC1MWPhAEkaDj4M7JuH5a76shA28YpJkUK2e6euZA22k/keychain%20logo.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center>![keychain logo.png](https://cdn.steemitimages.com/DQmUC1MWPhAEkaDj4M7JuH5a76shA28YpJkUK2e6euZA22k/keychain%20logo.png)</center>

안녕하세요, 디온(@donekim)입니다. 스팀코인판(https://www.steemcoinpan.com/)의 등장 이후에 SCOT를 활용한 스팀엔진 기반의 커뮤니티에 어떻게 참여해야 하는지, 그리고 어떻게 사용해야 하는지, 스티밋과의 차이점은 무엇인지 등에 대해서 궁금해 하시는 분들이 많은 것 같아서 **초심자분들을 위한 스팀코인판 유저가이드**를 하나씩 연재를 해볼까 합니다. 

<center>![sct logo.png](https://cdn.steemitimages.com/DQmSkZtSMrTaaVvEbwTiTeG9Zmf2BRR5V5p6ZoHkeMMAKvb/sct%20logo.png)</center>
<center>![steemcoinpan.png](https://cdn.steemitimages.com/DQmYeNdN5spxj8fjwpQdWTSyFx2JbQPmxpmHz1f2AiDaeNR/steemcoinpan.png)</center>

오늘은  그 첫번째 유저가이드로 **스팀 키체인(Steem Keychain)**에 대해서 설명을 드려볼까 합니다. 사실 스티밋 계정을 가지고 있는 스티미언이라면 반드시 스팀 키체인을 사용하지 않아도 스팀코인판을 포함한 스팀엔진 기반 커뮤니티 활동을 하는데 아무런 문제가 없습니다. 다만, **스팀 키체인을 사용하시면 보다 편리한 스티밋 생활**을 하실 수 있습니다.

## #1. 스팀 키체인(Steem Keychain)이란 무엇인가?

---
<center>![keychain logo.png](https://cdn.steemitimages.com/DQmUC1MWPhAEkaDj4M7JuH5a76shA28YpJkUK2e6euZA22k/keychain%20logo.png)</center>

스팀  키체인은 스팀 블록체인 상에 존재하는 나의 계정정보(권한별 키쌍 정보)를 저장하고, 이 저장된 정보를 기반으로 스팀 블록체인 상에서 서명이 필요한 다양한 트랜잭션에 클릭하나만으로 승인을 할 수 있는 **크롬 익스텐션 신원인증 툴**입니다.

스팀 키체인을 통해 사용할 수 있는 기능들은 다음과 같습니다.


**① 권한별 키쌍(퍼블릭키/프라이빗키) 저장 및 관리**

**② 스팀 블록체인을 활용한 트랜잭션 서명 및 승인** `(STEEM 또는 SBD전송, 게임하기 등)`

**③ 스팀엔진 기반 토큰들의 거래, 전송, 스테이킹 및 언스테이킹, 클레임**

**④ SCOT를 활용한 스팀엔진 기반 커뮤니티(예: 스팀코인판) 로그인**

**⑤ 스팀 블록체인 증인 투표**


> **[참고사항] 크롬 브라우저에 계정 동기화 설정을 해 놓은 경우에도, 스팀 키체인 크롬 익스텐션은 모바일 크롬 브라우저에서는 지원되지 않습니다**

## #2. 스팀 키체인은 필수일까?
---
위에서도 말씀드렸지만, **스티밋이나 스팀코인판에서 활동하기 위해서 스팀 키체인이 반드시 필수적인 것은 아닙니다.** 다만 권한별 키쌍에 대한 개념이 모호하시거나, 권한별 프라이빗키 관리가 어렵게 느껴지시는 분들이라면 스팀 키체인을 통해 보다 쾌적하고 편리하게 스팀 생태계를 즐기실 수 있습니다.

![steemcoinpan3.png](https://cdn.steemitimages.com/DQmSEt8i3Li5vKWwRi5M1uGtH8G33HFX12kDKFzA6ik9ggn/steemcoinpan3.png) 

대표적인 예를 들어서 설명을 드리면, 위와 같이 스팀코인판 사이트(https://www.steemcoinpan.com/)에 접속하는 경우에 스팀 키체인을 사용하지 않으면 위와 같이 포스팅키 또는 액티브키 등을 입력해야 하지만,

![steemcoinpan18-1.png](https://cdn.steemitimages.com/DQmXSzwmpQsEP5oKPNN4Qd4kL7oVXUefGb9KjV1p4r4UmMj/steemcoinpan18-1.png)

![steemcoinpan19.png](https://cdn.steemitimages.com/DQmZwLggeSzfDAmQqGZhpMBoRBjjuHcBsTk57vYjRbtJJpU/steemcoinpan19.png)

스팀 키체인을 사용하는 경우에는 사전에 저장해놓은 프라이빗키 정보를 이용하여 **①계정명 입력 → ② 메시지 서명 승인**만으로 간편하게 로그인을 하실 수 있습니다.

<center>![keychain.png](https://cdn.steemitimages.com/DQmcDYD1FDV6kcPtjcvfsYEbg2xHgV3hZqhrMTzJgNB92zi/keychain.png)</center>

이 뿐만 아니라 스티밋 지갑(https://steemitwallet.com/)에 로그인하기 위해 포스팅키 또는 액티브키를 추출이 필요한 경우에는 언제든지 스팀 키체인에서 확인하실 수도 있습니다.

<center>![claim2.png](https://cdn.steemitimages.com/DQmabdJViHZDYbNt8vGxjUoBWXYpeLoyXPucHjUESBzqTwN/claim2.png)</center>

스팀엔진에서 토큰을 클레임하거나 스테이크/언스테이크 하는 경우에도 스팀 키체인을 사용하실 수 있구요.


## #3. 스팀 키체인 설치방법
---

이제 스팀 키체인이 왜 필요하고, 언제 사용되는지에 대해서는 어느 정도가 이해가 되었으니 스팀 키체인을 설치하고 기본 세팅을 하는 방법에 대해서 살펴보겠습니다.

일단 **스팀 키체인은 크롬 확장 프로그램이기 때문에 크롬 브라우저를 사용**해야 합니다. 

![github.png](https://cdn.steemitimages.com/DQmet3LUwiJcmGpoD34gP6t6ccdTj79nEHMv6px44MHRxJp/github.png)

①  먼저 스팀 키체인 공식 깃헙 사이트(https://github.com/MattyIce/steem-keychain)로 접속해주세요. (아래의 단계를 모두 뛰어넘어서 바로 스팀 키체인 다운로드 화면으로 접속하고 싶으신 분들은 [여기](https://chrome.google.com/webstore/detail/steem-keychain/lkcjlnjfpbikmcmbachjpdbijejflpcm/related?hl=ko)를 클릭하세요)

![github2.png](https://cdn.steemitimages.com/DQmTzp2Zn9XNWqaLGLMDhYMZ3Tn1kGk8Km32vic3dZpoGGj/github2.png)

② 그 다음 마우스 스크롤을 내려서 **Google Chrome 다운로드 링크를 클릭**해주세요

![steemcoinpan6.png](https://cdn.steemitimages.com/DQmUyWyvNe14EXk3LV4p9HVD67ufuFymrp78BNN4s3vitY7/steemcoinpan6.png)

③ Chrome에 추가 버튼을 클릭합니다.

![steemcoinpan7.png](https://cdn.steemitimages.com/DQmRwkMp6q7LyqUKQfMEaoGaZeGhbTk8FHeaBLeaGt4BK7e/steemcoinpan7.png)

④ 위와 같은 팝업창이 나타나면 `확장 프로그램 추가`버튼을 클릭해주세요

![steemcoinpan8.png](https://cdn.steemitimages.com/DQmdmxF2h4TVSkZ6TRB7tgCsj7w5oFYoAu9NX1HBgeyrpKM/steemcoinpan8.png)

⑤ 크롬 브라우저 상단에 위와 같이 열쇠 모양의 아이콘이 생긴 것을 확인하실 수 있습니다. 이제 **기초적인 세팅 및 계정정보를 저장하기 위해 해당 아이콘을 클릭**해주세요

![steemcoinpan9.png](https://cdn.steemitimages.com/DQmUHQMcaaPZB8e5bfVvEwnVbFev6zZGZqxxVSv1sJ3pDxy/steemcoinpan9.png)

⑥ `NEW PASSWORD`란에 **스팀 키체인 로그인에 사용할 비밀번호를 입력**해주세요. `(CONFIRM란에는 NEW PASSWORD란에 입력한 비밀번호와 동일한 비밀번호를 입력해주세요)`

![steemcoinpan10.png](https://cdn.steemitimages.com/DQmcqp18CtHsufUbHN9x6GPTyb1zCzmnHsTDAL3iHR5ywWv/steemcoinpan10.png)

⑦ **USERNAME란에는 @를 제외한 스팀잇 계정명을 입력**하시고, **PRIVATE KEY란에는 액티브 프라이빗키를 입력**해주세요 `(액티브 프라이빗키 대신에 마스터 패스워드를 입력하셔도 됩니다)`

![steemcoinpan11.png](https://cdn.steemitimages.com/DQmetFr6bCJiSPAzhwzQjB6FYjhpBqZLPXERi6Fd3UUQDsT/steemcoinpan11.png)

⑧ 위와 같이 입력이 완료되었으면 **`IMPORT KEYS`버튼을 클릭**해주세요


![steemcoinpan12.png](https://cdn.steemitimages.com/DQmbeJH8BEEvrtcPjKHUF1fduCVNMsfXoAPDpAWVerNiJo9/steemcoinpan12.png)

⑨ 그 다음에는 **`SAVE`버튼을 클릭**합니다

![steemcoinpan13.png](https://cdn.steemitimages.com/DQmbe6hh4qCcEjoSJK8Tr9DJ3yV6CgqLArdEiJTRrFoaKeE/steemcoinpan13.png)

⑩ 위와 같은 화면이 나타나면 **나의 스티밋 계정 정보 저장이 모두 완료된 것**입니다. 


## #4. 스팀 키체인에서 프라이빗키 확인하기
---

혹시라도 권한별 키쌍(액티브키, 포스팅키, 메모키 등)에 대한 개념이 아직 명확하지 않은 분들은 대부분 마스터키만 활용하시는 경우가 많은데, **계정 해킹피해 방지 및 보안성 향상**을 위해 최근에 스티밋에서는 스티밋 로그인 시에는 포스팅키를 사용하도록 하고 있습니다. 

![wallet login.png](https://cdn.steemitimages.com/DQmcn8pKFUZL1oxeAJPHHxBDxXgXMAptDxGCMDxmeQjhiM7/wallet%20login.png)

따라서 마스터키 말고 액티브키나 포스팅키를 확인하기 위해서는 스팀잇 월렛(https://steemitwallet.com/)에 접속한 뒤에 각 권한별 키를 확인하고 따로 저장을 해둘 필요가 있습니다.

![wallet login3.png](https://cdn.steemitimages.com/DQmNqTpf78jbpC42UgnuGRbaPeeLbRHhNXgjJzuRmSYoX4x/wallet%20login3.png)

마스터키 하나 뿐만이 아니라 각 권한별 프라이빗키를 저장해야 하다보니 어려움을 느끼시는 분들이 많은데, **위와 같이 스팀 키체인에 계정 정보를 저장해 놓으시는 경우 각 권한별 프라이빗키를 편리하게 확인 가능**합니다.

![steemcoinpan13-1.png](https://cdn.steemitimages.com/DQmZU9mpYLXnkfSot9ZtpNZ7qRKCfhxm4GDtgCZLm4DDk8X/steemcoinpan13-1.png)

① 스팀 키체인에서 네모난 아이콘 버튼을 클릭하고,

![steemcoinpan14.png](https://cdn.steemitimages.com/DQmNqqToEuyAEvAmPUMuE68dUWbYUHoBHo8eifairegrvPi/steemcoinpan14.png)

② 위와 같은 화면이 나타나면 `Manage Accounts`버튼을 클릭합니다.

![steemcoinpan15-1.png](https://cdn.steemitimages.com/DQmWbnhzqNYMfC5RmeyNZ5Mtzn7cfzAiypXPbU568aMyE1B/steemcoinpan15-1.png)

③ 그러면 기존에 저장해놓은 각 권한별 키쌍 정보(포스팅키, 액티브키, 메모키)가 나타납니다. 화면과 같이 STM로 시작하는 키들은 퍼블릭키이기 때문에 **프라이빗키를 보기 위해서는 `Click to show private key`라는 문구를 클릭**하셔야 합니다. 


지금까지 스팀 블록체인 생태계에서 유용하게 사용할 수 있는 신원인증 툴 스팀 키체인에 대해서 살펴보았습니다. **스팀코인판 사이트(https://www.steemcoinpan.com)에 접속하여 스티밋 계정으로 로그인하실 때 지금까지는 프라이빗키를 입력하여 로그인을 해오셨다면 스팀 키체인 크롬 익스텐션을 설치하고 나서는 새로운 로그인 방법이 생긴 것을 확인**하실 수 있습니다.  

![steemcoinpan3.png](https://cdn.steemitimages.com/DQmSEt8i3Li5vKWwRi5M1uGtH8G33HFX12kDKFzA6ik9ggn/steemcoinpan3.png)

> [Before] 스팀 키체인 설치 전 로그인 화면

![steemcoinpan17.png](https://cdn.steemitimages.com/DQmejwKdB71q3ycEo687TniHgjZLKAxeMdiLhwA1vqaFaa5/steemcoinpan17.png)

> [After] 스팀 키체인 설치 후 로그인 화면 **(Use keychain extension이라는 메뉴 추가)**

![steemcoinpan18-1.png](https://cdn.steemitimages.com/DQmXSzwmpQsEP5oKPNN4Qd4kL7oVXUefGb9KjV1p4r4UmMj/steemcoinpan18-1.png)

![steemcoinpan19.png](https://cdn.steemitimages.com/DQmZwLggeSzfDAmQqGZhpMBoRBjjuHcBsTk57vYjRbtJJpU/steemcoinpan19.png)

![steemcoinpan20.png](https://cdn.steemitimages.com/DQmPHEifCJgrrcP1mN1EWg2S7bT7kW5d6w7DvxPge1CAwtp/steemcoinpan20.png)

짜잔? 어떠신가요? 프라이빗키를 입력할 필요 없이 간단한 계정명 입력 및 클릭만으로 스팀코인판에 로그인이 가능합니다. 물론, 로그인 유지 기능이 있기는 하지만 매번 새로운 스팀엔진 기반의 커뮤니티가 생길 때마다 번거롭게 프라이빗키를 입력하지 마시고 스팀 키체인을 활용하시기 바랍니다 :)

<center>![custom.png](https://cdn.steemitimages.com/DQmXkxLG83zEU78doowsxR3dsK4AVzErrFcQa17e5B94CFg/custom.png)</center>


> **[마지막 꿀팁] 계속해서 나타나는 팝업창이 번거로운 경우**
> 팝업창 하단에 체크박스를 클릭하신 후에 CONFIRM을 클릭해보세요. **해당 기능은 동일한 종류의 트랜잭션에 대해서 화이트리스트를 설정하는 기능**으로, 자주 반복되는 기능의 경우 매번 서명을 확인할 필요없이 바로 승인이 이루어질 수 있도록 하는 기능입니다 :)

- - -

This page is synchronized from the post: ['[SCT] 스팀코인판 유저가이드 #1 스팀 키체인(Steem Keychain) 가이드'](https://steemit.com/@donekim/sct-1-steem-keychain)
