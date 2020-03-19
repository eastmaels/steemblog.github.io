
---
title: '[이오스 이야기] EOS 툴킷(ToolKit) 사용방법 살펴보기 #3. 블록스닷아이오(Bloks.io) 3편(계정생성)'
permlink: eos-toolkit-3-bloks-io-3
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-14 00:09:36
categories:
- dclick
tags:
- dclick
- coinkorea
- kr-series
- busy
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



안녕하세요, 디온(@donekim)입니다. 오늘은 [[이오스 이야기] EOS 툴킷(ToolKit) 사용방법 살펴보기 #3. 블록스닷아이오(Bloks.io) 2편(토큰전송)](https://steemit.com/coinkorea/@donekim/eos-toolkit-3-bloks-io-2)에 이어 블록스닷아이오 툴킷을 활용한 **자계정(또는 세컨드 계정) 생성방법**을 소개해 드리도록 하겠습니다. 이미 자계정 생성 방법에 대해서는 기존 포스팅들을 통해 여러 번 설명드리기는 했지만, 처음 시도하시는 분들의 경우 툴킷이 달라지면 어려움을 느끼시는 경우도 많은 것 같아 블록스닷아이오에서는 어떻게 진행해야 하는지 다시 한 번 자세히 설명을 드리도록 하겠습니다.


- [참고] [이오스 블록체인에 새로운 계정 만드는 방법(마이이오스킷(MyEOSKit 사용)](https://steemit.com/dclick/@donekim/-1--1539307707488)

- [참고] [이오스 생태계에서 멀티 계정이 필요한 이유](https://steemit.com/dclick/@donekim/--1538720744523)


## #1. 간단 계정 생성방법
---

![east ca.png](https://cdn.steemitimages.com/DQmVRhuwRx63WypTu5hxcb9wC2xjQEf1KFxtEf8bdL2oSnj/east%20ca.png)

먼저, **블록스닷아이오 사이트(https://bloks.io/wallet/new-account)에 접속**해주세요. 그 다음에는 우측 상단에 보이는 `Login`이라는 버튼을 클릭해서 **스캐터 데스크탑으로 로그인**을 해주세요. 

**① 새로운 계정 이름(New account to create)** : 사용하고자 하는 `영문+숫자(1~5)로 조합된 12자리 계정명`을 입력해주세요.

새로운 계정을 생성하려고 하시는 분들이 일반적으로 저지르는 실수들의 유형은 아래와 같이 크게 3가지 정도로 구분할 수 있습니다.

> **[잘못된 예제1] 12자리 이하로 입력한 경우**

![short.png](https://cdn.steemitimages.com/DQmVmKgTgEU7CMEHTBDPA5qNSZS86z8dpG9vy992vdqS3k1/short.png)

> **[잘못된 예제2] 숫자 1부터 5사이 이외의 다른 숫자를 입력한 경우**

![number.png](https://cdn.steemitimages.com/DQmTGvUJW6rM1b1zJPRniZaznVr1aodQDJJ6MnhV5GMAvCD/number.png)

> **[잘못된 예제3] 이미 존재하는 아이디를 입력한 경우**

![exist.png](https://cdn.steemitimages.com/DQmNZ4S4tCYBDoDpMdeZeNrkdWDfDasAiCJghS62rBNTe7w/exist.png)


**② 오너키와 액티브키(Owner and Active Key)** : 간단 계정생성(Easy Create Account) 메뉴에서는 **오너키와 액티브키를 동일한 키쌍으로 연결하는 기능만 지원**합니다. (만약 오너키와 액티브키를 각각 다른 키쌍으로 연결하고 싶으신 경우에는 `Easy Create Account`메뉴 대신에 `Advanced Create Account`메뉴를 사용하셔야 합니다. 구체적인 사용방법은 후술하도록 하겠습니다)

![generating.png](https://cdn.steemitimages.com/DQmWV6ZsqvZYuqz4Fyga8VAe3TZmBNQfzjhi357TufumLmV/generating.png)

블록스닷아이오에 별도로 신규 키쌍을 생성하는 링크가 연결되어 있지는 않기 때문에 사전에 따로 저장해놓은 키쌍이 있지 않으시다면 [EOS Key Generation](https://nadejde.github.io/eos-token-sale/)사이트에 접속하여 키를 생성하신 뒤에 `Generate EOS key
`버튼을 클릭하여 키를 생성하여야 합니다. 생성된 키쌍 중 **5로 시작하는 프라이빗키는 안전한 곳에 잘 보관**하고, **EOS로 시작하는 퍼블릭키는 복사하여 `Owner and Active Key`라는 칸에 붙여넣기** 해주세요.

![key input.png](https://cdn.steemitimages.com/DQmS95zgB5gmdr7EHBnMxey24rpWCXU5jDQfPV3XDvpabYY/key%20input.png)

이런 식으로 **EOS로 시작하는 퍼블릭키**를 입력하셨다면 이제 `Next Step`이라는 버튼을 클릭해서 그 다음으로 넘어가주세요.


**③ 계정생성비용 지불방법 선택** : `Next Step`버튼을 클릭하면 계정 생성비용을 지불하는 방법을 선택하는 메뉴가 나타나게 됩니다.

![pay.png](https://cdn.steemitimages.com/DQmRPAk1jcVGGAx7BSmpraDVkmpoFGJaztLHjNKrndGmATo/pay.png)

 2가지 방법을 중에 취사선택이 가능한데 하나는 **"거래소에서 `signupeoseos`라는 계정으로 메모문구와 함께 0.4597EOS를 전송하는 것**이고, 다른 하나는 **"현재 스캐터로 로그인한 계정에서 `signupeoseos`라는 계정으로 메모문구와 함께 0.4597EOS를 전송하는 것**입니다. 

만약 스캐터로 로그인한 계정에 0.4597EOS 이상이 있는 경우에는 `Transfer 0.4597 EOS to create 신규계정이름`이라는 버튼을 클릭하면 손쉽게 계정생성절차를 마무리하실 수 있습니다. 

![actions.png](https://cdn.steemitimages.com/DQmYLkPNksBDauakm4jKynLt1LPw2Awzqckvk4LDX8GsiJi/actions.png)

해당 버튼을 클릭하면 위와 같이 스캐터 데스크탑의 팝업창이 뜨는데 `체크박스(v)`를 클릭하시면 **0.4597 EOS가 signupeoseos라는 계정으로 송금이 되면서 신규 계정 생성이 완료**됩니다. (메모는 위의 화면에서 볼 수 있는 것처럼 자동으로 삽입이 되게끔 세팅되어 있습니다)




## #2. 일반 계정 생성방법
---

![detail ca.png](https://cdn.steemitimages.com/DQmS7PmSASM7T465tyf1v9o4L4acEBSKAUypUJQuzGin47Y/detail%20ca.png)

이번에는 화면 좌측에 보이는 `Advanced Create Account`라는 메뉴를 클릭하거나 **블록스닷아이오 사이트(https://bloks.io/wallet/create-account)에 접속**해주세요. 위의 그림과 같이 **간단 계정 생성방법에 비해서 확실히 입력해야 되는 것들이 많은 편**이라는 것을 확인하실 수 있습니다. 


신규 계정을 생성하면서 조금 디테일한 것들을 세팅하고자 하는 분들은 이 `Advanced Create Account`를 사용하시면 세부적인 것들을 한 번에 설정할 수 있어 편리하지만, **계정 생성을 처음 해보는 분들의 경우에는 가급적 위에서 설명한 간단 계정 생성방법에 따라 계정을 생성하시는 것들 추천**드립니다. (액티브  권한, 오너 권한 및 스테이킹 위임/전송의 구분 등에 대한 개념을 모두 이해하신 뒤에 사용하시는 것이 좋습니다)

![part1.png](https://cdn.steemitimages.com/DQmYjA9kGH6SV3tY2t9iwfTg1SWB4kBALTnDp16fv7znpTR/part1.png)


간단 계정 생성방법과는 달리 일반 계정 생성방법에서는 **"오너키와 액티브키에 다른 키쌍을 연결**할 수 있습니다. 

![part1_input.png](https://cdn.steemitimages.com/DQmXZh6qsm9MnLmYYwroDUHdDFCjRFjFkYugibCFwvH8TiP/part1_input.png)

**만약에 오너키와 액티브키에 동일한 키쌍을 연결하여 사용하고자 하는 경우에는 위와 같이 동일한 키쌍의 퍼블릭키를 넣어주셔도 무방**합니다. 그러나 다른 키쌍을 사용하고자 하는 경우에는 2개의 키쌍을 생성한 뒤 각각 다른 퍼블릭키를 입력할 수도 있습니다.

![part2.png](https://cdn.steemitimages.com/DQmYyGAD8wAGPfEmj3M6Xxu2CXoFyb8menLfmkZoBU8UbfN/part2.png)

그 다음으로는 새로운 계정을 생성하면서 **①해당 계정의 CPU와 NET에 각각 얼마의 EOS를 스테이킹 시킬 것인지, ②얼마의 RAM을 구매해줄 것인지, ③CPU와 NET에 스테이킹 시켜주는 EOS의 소유권을 누구에게 줄 것인지**를 설정할 수 있습니다. 

**① NET to Stake for New Account** : NET자원을 얻기 위해 신규 계정에 스테이킹 시켜줄 EOS의 수량 (블록스닷아이오의 기본 세팅값은 0.2개의 EOS)

**② CPU to Stake for New Account** : CPU자원을 얻기 위해 신규 계정에 스테이킹 시켜줄 EOS의 수량 (블록스닷아이오의 기본 세팅값은 0.2개의 EOS)

**③ RAM to buy for New Account** : RAM자원을 얻기 위해 신규 계정에 구매해줄 바이트(byte)의 양 (블록스닷아이오의 기본 세팅값은 3,000bytes)

> **얼만큼의 EOS를 CPU랑 NET에 배분해야 되는지 어렵게 느껴지시는 분들은 약 CPU : NET 비율을 약 4:1 이상으로 설정**하시는 것을 권장드리고, **RAM은 최소 8,000bytes 정도를 구매하시기를 권장**드립니다. (개인적인 권장량이므로, 단지 참고만 하시고 얼마든지 변경하셔도 무방합니다)

![part2_check.png](https://cdn.steemitimages.com/DQmbkFR1rHKsN56Me1dNFEexSx7pfPHf77fwtZVKbctQr5c/part2_check.png)

**사실 제일 중요한 부분은 화면 가장 하단에 있는 `Check to transfer stake to created account (uncheck to retain ssstaking rights)`라는 체크박스**입니다. 만약 현재 사용 중인 계정이 `steemdonekim`(이하 모계정)이고, 새로 만드려는 신규 계정이 `steemposting`(이하 자계정)이라고 했을 때, **CPU와 NET자원에 스테이킹하는 EOS의 소유권을 누구에게 줄 것이냐를 결정하는 것**이기 때문입니다. 

- 체크박스를 체크하지 않는 경우 : CPU/NET자원은 자계정이 받지만, 언스테이킹 권한은 모계정이 가지고 있으며 언스테이킹 시 모계정`(steemdonekim)`으로 EOS토큰이 들어옴

- 체크박스를 체크하는 경우 : CPU/NET자원도 자계정이 받고, 언스테이킹 권한도 자계정이 가지고 있기 때문에 언스테이킹 시 자계정`(steemposting)`으로 EOS토큰이 들어옴

위의 내용들을 모두 내가 원하는대로 정확히 입력을 한 뒤에 `Create Account`라는 버튼을 클릭하면 세팅된 내용에 따라 신규 계정을 생성할 수 있게 됩니다. 

---

Advanced Create Account 메뉴는 초보자들에게 굉장히 어렵게 느껴질 수 있습니다. 특히나 아주 소량으로만 계정을 운영하려고 하거나, 이오스 계정 자원에 대해서 잘 모르시는 분들이라는 더더욱 막연하게 느껴지실 수 있습니다. 

다만, CPU와 NET자원을 위해 스테이킹한 EOS는 수수료 방식으로 없어지는 것이 아니라 언제든지 회수가 가능하기 때문에 여유가 되시는 분들은 여유있는 수량(10개 이상)을 스테이킹 해 놓으시기를 추천드리며, 대부분이 CPU자원 부족문제에 직면하는 경우가 많으므로 CPU에 많은 EOS를 스테이킹 해 놓는 것이 좋다고 말씀드릴 수 있겠습니다. 




<center>![donekim.gif](https://cdn.steemitimages.com/DQmP5rc6mLfZAU56skFU2MkzywZQ5qWruKpyU2hq5nT7md7/donekim.gif)</center>


<center>![behind banner.gif](https://cdn.steemitimages.com/DQmXBUz3S7u2z13jB39UNUder7HUADC9DvHibUEu7DTu3MR/behind%20banner.gif)



<center><pre> H O P E   F O R   T H E   B E S T , 
P L A N   F O R   T H E   W O R S T</pre>
<sub> https://steemit.com/@dONekim</sub></center>

- - -

This page is synchronized from the post: ['[이오스 이야기] EOS 툴킷(ToolKit) 사용방법 살펴보기 #3. 블록스닷아이오(Bloks.io) 3편(계정생성)'](https://steemit.com/@donekim/eos-toolkit-3-bloks-io-3)
