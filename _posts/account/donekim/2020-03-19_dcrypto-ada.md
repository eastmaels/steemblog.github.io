
---
title: '[dCRYPTO] 업비트에서 인센티브화 테스트넷 ADA 지급 신청하는 방법 가이드'
permlink: dcrypto-ada
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-03-19 05:13:39
categories:
- hive-101145
tags:
- hive-101145
- sct-kr
- sct-coin
- liv
- zzan
- palnet
- steemleo
- union
- dblog
- sct
- busy
- mini
thumbnail: 'https://cdn.steemitimages.com/DQmauLL7gkaddtcc4JnMjsdVDreFatZRHtRPN2HFEbBDfVz/cardano.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![cardano.png](https://cdn.steemitimages.com/DQmauLL7gkaddtcc4JnMjsdVDreFatZRHtRPN2HFEbBDfVz/cardano.png)

안녕하세요, 디온입니다. 혹시라도 **업비트 거래소에 2019년 11월 29일 21시 기준으로 에이다(ADA)를 보유 중**이셨다면 동일한 수량의 ADA를 클레임 요청하실 수 있습니다. `(1:1 비율로 추가 지급)`


- 링크 : [[업비트 공지] 인센티브화 테스트넷 ADA 지급 신청 안내 (신청기한 : 4/15까지)](https://upbit.com/service_center/notice?id=1189)

거래소에서 바로 클레임을 요청할 수는 없는 관계로, 초보자분들께는 조금 절차가 복잡하게 느껴지실 수 있어서 자세히 설명을 드립니다. 아래의 안내 대로만 따라하시면 그리 어렵지는 않으실겁니다.

![delegate.png](https://cdn.steemitimages.com/DQmbpxkZSgKbQhFHLkLt9NfeeA2fQBSvBBoNX1zgczt2jVn/delegate.png)

현재 에이다에서는 PoS 기능을 메인넷에 적용하기 전에 별도의 테스트넷을 운영하고 있는데, 메인넷과 동일한 컨디션으로 테스트를 해야 하는 관계로 **ADA토큰 홀더들이 테스트넷에 스테이킹 및 위임 활동에 참여하면, 이에 대한 실제 보상을 지급**하고 있습니다.

> **[참고]** 위임(delegation)이란, ADA토큰 홀더가 자신의 ADA를 스테이킹 풀에 임대해주는 활동입니다. 이 위임을 통해서 노드를 운영할 기술이 없거나 노드를 직접 운영하고 싶지 않은 ADA 토큰 홀더들도 **네트워크 참여에 대한 보상을 받을 수 있습니다.** 

대부분의 테스트넷은 그 이름처럼 단순 테스트 용도로만 사용되기 때문에 실제 보상이 없거나, 보상이 있더라도 진짜 토큰이 아닌 경우가 대부분인데, 현재 에이다의 인센티브화 테스트넷(Incentivized Testnet)에서 받는 ADA는 메인넷 또는 거래소에서 진짜 거래가 가능한 ADA입니다.


### #1. 신청 가능 대상
---

![ada.png](https://cdn.steemitimages.com/DQmUqfquYDScmTX3i1y3VenC5iZW42SZGBtMhJHqoMMZWyF/ada.png)

**(1) 대상자** : 2019년 11월 29일 21시 기준으로 업비트에 1 ADA 이상을 보유하고 있던 고객

**(2) 지급수량** : 스냅샷 시점`(2019년 11월 29일 21시)`기준 ADA보유수량에 **동일한 수량(1:1 비율)으로 지급**

**(3) 신청기한** : 2020년 4월 15일 23:59:59

> 아마도 해당 스냅샷 시점에 업비트에 ADA를 보관 중이셨다면 별도로 정확한 수량이 포함된 안내 메일을 받으셨을 겁니다.

일단 위 대상에 해당이 되신다면 아래의 준비방법 안내에 따라 진행을 하셔야 합니다.

### #2. 준비방법
---

![example2.jpg](https://cdn.steemitimages.com/DQmTVCBghUGx8KdKUTFZH4xhbTkjx63wP4mwCZPRqCy1jHH/example2.jpg)

먼저, 인센티브화 테스트넷을 지원하는 지갑을 만들어야 합니다. 이를 지원하는 지갑의 종류는 **다이달로스(Daedalus)**와 **요로이(Yoroi)** 지갑이 있는데, 개인적으로는 요로이 지갑을 만드는 것을 추천드립니다. 

> 단순히 토큰을 주고 받을 용도로만 사용하시려면 굳이 다이달로스를 설치하실 필요는 없습니다.

그래서 아래에서는 요로이 지갑을 만드는 법을 살펴보겠습니다.


![yoroi1.png](https://cdn.steemitimages.com/DQmeyw3cxd3VJgbbhzw8RD2oXKABq2YuCw3fkySSanuh9cp/yoroi1.png)

- Yoroi 월렛 크롬 익스텐션 링크 : https://chrome.google.com/webstore/detail/yoroi-shelley-testnet/bioklcnnnpdblghplkifbemcigeanmjn/related

(1) 위의 **요로이 월렛 크롬 익스텐션 설치 링크로 접속**하신 뒤에 `[Chrome에 추가]`버튼을 클릭해서 설치해주세요.

![yoroi2.png](https://cdn.steemitimages.com/DQmadsBhAX8UT7Wxiu4mVBE3iKkqHZKryiL9utbPMNgpAch/yoroi2.png)

(2) 위와 같이 팝업창이 나오면 `[확장프로그램 추가]`버튼 클릭

![yoroi3.png](https://cdn.steemitimages.com/DQmfQfaRVXs1sHGQ4qTbc7ob62JgSjRUSBX28Jb9beVPTz6/yoroi3.png)

(3) 설치가 완료되면 **크롬 브라우저 우측 상단에 보이는 요로이 아이콘을 클릭**해주세요. 위와 같은 화면으로 이동하게 됩니다.

![yoroi4.png](https://cdn.steemitimages.com/DQmdGwS3onAhnE9QGmMJRbWW3DE7x9Je6bmWTH9UDUTzcTw/yoroi4.png)

(4) 언어 설정을 **한국어로 바꾼 뒤에 `[계속]`버튼을 클릭**합니다.

![yoroi5.png](https://cdn.steemitimages.com/DQmfVnjDa9CW9qGtCzVviFr4ZbqqZ31ngZQAhcMm6VJDEbr/yoroi5.png)

(5) 이용약관을 살펴본 뒤에 **이용약관에 동의한다는 체크박스를 클릭하고 `[계속]`버튼을 클릭**하세요

![yoroi6.png](https://cdn.steemitimages.com/DQmV2jAqEugpjPe8ai8YgpXYk3MPA46EVpfpepmrwkUYbLK/yoroi6.png)

(6) 여기서 `[지갑 생성]`버튼을 클릭합니다.

![yoroi7.png](https://cdn.steemitimages.com/DQmZZGXqcbVPgo58AQdEpTHYYWEZcyAww1NwtNfQ1v22Uu4/yoroi7.png)

(7) 지갑 이름과 지갑 로그인 시에 사용할 비밀번호를 입력한 뒤에 `[개인 지갑 만들기]`버튼을 클릭합니다.

![yoroi8.png](https://cdn.steemitimages.com/DQmPYFcPLWVBwzKvMXKY2hho6LoTh8JXUuM7iE455h4ZCKG/yoroi8.png)

> 이런 식으로 입력을 하시면 됩니다. (지갑 이름은 크게 관계 없습니다)

![yoroi9.png](https://cdn.steemitimages.com/DQmZtAdncZpydXAyQt4iHo8UamqMEjidFxTY8jBACsS3fHa/yoroi9.png)

(8) 체크박스를 클릭한 뒤에 `[계속]`버튼을 클릭합니다

![yoroi10.png](https://cdn.steemitimages.com/DQmedLMzaHFxvwiEkwoC8GGbKR3xuaE4vK7mdGmGJbyRxG4/yoroi10.png)

(9) 나중에 지갑을 복구할 때 필요한 니모닉 문구입니다. 순서대로 잘 적어서 안전한 곳에 잘 보관해놓고, `[예, 기록해 두었습니다]`버튼을 클릭합니다.

![yoroi11.png](https://cdn.steemitimages.com/DQmVDFHiUf37kQukqA9pRZeYwVNosBzqE5tGeBAcvxPA6wY/yoroi11.png)

(10) 다시 한 번 해당 니모닉 문구를 순서대로 클릭해서 인증을 완료한 뒤에, 위와 같은 화면이 나타나면 **체크 박스를 클릭하고 `[확인]`버튼을 클릭**해주세요

![yoroi12.png](https://cdn.steemitimages.com/DQmcKq3zz2b3MH5uShRzi6N5Q71CRST5kfM1G9yn4RsRtCQ/yoroi12.png)

(11) 위와 같은 화면이 나왔다면, 일단 지갑 생성이 완료된 것입니다. **화면 상단에 보이는 `[받기]`탭을 클릭**해주세요

![yoroi13.png](https://cdn.steemitimages.com/DQmRad8PCUwoxBY699FVDgQ5ok3ny8ccRLUPRuTbNY27FCm/yoroi13.png)

(12) 우측 하단에 보이는 `주소 검증하기`라는 문구를 클릭합니다.

![yoroi15.png](https://cdn.steemitimages.com/DQmNhJED1BFJ1AhReMF9BrYAiTc4cwy2rVty7EErHoRy6tY/yoroi15.png)

(13) `[주소]`라는 문구 하단에 보이는 영어+숫자 조합이 **내 인센티브화 테스트넷의 지갑 주소**입니다. 이걸 복사해놓습니다. `(아래에 보이는 유도경로는 신경쓰지 않으셔도 됩니다)`


### #3. 신청방법
---

위와 같이 지갑 주소 발급이 완료되었으면, 이제 해당 지갑주소로 ADA 지급 요청을 신청해야합니다. PC에서 하셔도 되고, 업비트 모바일 앱으로도 신청이 가능합니다.

**[업비트앱] → [고객센터] → [1:1 문의하기] → [일반] → [테스트넷 ADA 지급 신청]** 순으로 접속합니다.



![Screenshot_20200319-135455.png](https://cdn.steemitimages.com/DQmfMq8zk3zKzCPKjj1mpBG7EkdieEab6e2XiRJYx2Kkefb/Screenshot_20200319-135455.png)


그 다음에 아래와 같은 화면이 나타나면 **위에서 복사해놓았던 테스트넷 지갑 주소를 붙여넣기** 합니다.

![Screenshot_20200319-135725.png](https://cdn.steemitimages.com/DQmWWE6Vjh2ah1ihNbEn82fSZxub29HqU3hQNC8Ke6hxtjs/Screenshot_20200319-135725.png)

- 신청 전에 "[최종 안내] 인센티브화 테스트넷 ADA 지급 지원 신청 방법 안내 (재신청 접수 필요)"라는 이메일이 왔는지 확인해보시기 바랍니다.

- 최종 지급 신청 기한은 2020년 4월 15일 23:59:59이며, 일주일 동안 신청을 받은 뒤 매주 목요일에 일괄 지급을 한다고 합니다. (매주 수요일 자정 이전 접수 내역까지만 지급)

혹시라도 2019년 11월 29일에 업비트에서 ADA를 보관하고 계셨다면, 꼭 잊지 마시고 신청하시기 바랍니다.

- - -

This page is synchronized from the post: ['[dCRYPTO] 업비트에서 인센티브화 테스트넷 ADA 지급 신청하는 방법 가이드'](https://steemit.com/@donekim/dcrypto-ada)
