
---
title: '[이오스 이야기] EOS 툴킷(ToolKit) 사용방법 살펴보기 #3. 블록스닷아이오(Bloks.io) 2편(토큰전송)'
permlink: eos-toolkit-3-bloks-io-2
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-13 01:17:09
categories:
- coinkorea
tags:
- coinkorea
- kr-coin
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



안녕하세요, 디온(@donekim)입니다. 오늘은 [[이오스 이야기] EOS 툴킷(ToolKit) 사용방법 살펴보기 #3. 블록스닷아이오(Bloks.io) 1편](https://steemit.com/dclick/@donekim/-eos-toolkit-3-bloksio-1-1541318003393)에 이어 블록스닷아이오 툴킷을 활용한 **토큰 전송 및 토큰 에어그랩 방법을 소개**해 드리도록 하겠습니다. 이번 포스팅은 암호화폐나 이오스 세계에 갓 입문하신 초심자들을 대상으로 하는 포스팅이므로 가능한 자세히 설명을 드리도록 하겠습니다.

먼저 자세한 설명을 하기 이전에 **"과연 나는 이오스 생태계에 대해 어느 정도 이해를 하고 있는지 짤막한 깜짝 퀴즈를 진행"**해보고 내 자신을 점검해보는 시간을 가지도록 하겠습니다.

## #0. 깜짝 퀴즈
---

**[문제1]** 거래소에서 내 이오스 계정으로 토큰을 전송할 때 메모를 잘 입력해야 한다 (O/X)

**[문제2]** 나는 거래소에서 스캐터 지갑으로 이오스를 보내는 법을 알고 있다 (O/X)

**[문제3]** 내 지갑 주소를 입력할 때는 EOS로 시작하는 퍼블릭키를 넣어야 한다 (O/X)

**[문제4]** 이오스 지갑에 보낼 때는 아주 소량의 수수료가 들어가는 것이 원칙이다. (O/X)

**[문제5]** 사람들이 가장 많이 사용하는 이오스 지갑은 스캐틀렛(Scattellet)이다 (O/X)

**[문제6]** 퍼블릭키는 남들에게 공개되면 자산을 잃어버릴 수 있으니 조심해야 한다 (O/X)

**[문제7]** 퍼블릭키랑 계정명은 동일한 개념이다 (O/X)

**[문제8]** 퍼블릭키를 잃어버린 경우에는 찾을 수 없으니 주의해야 한다 (O/X)

**[문제9]** 에어그랩을 신청하기 위해서는 100byte의 여유 RAM자원이 있어야 한다 (O/X)

**[문제10]** 에어그랩을 신청하면 바로 토큰을 받을 수 있다 (O/X)

문제를 다 풀어보셨나요? **정답은 본 포스팅의 가장 마지막에 공개**하도록 하겠습니다 :) 문제를 다 푸셨다면 일단은 블록스닷아이오에서 어떻게 토큰을 전송하고, 어떻게 토큰 에어그랩을 신청하는지 알아보도록 하겠습니다.





## #1. 토큰 전송하기
---

![transfer.png](https://cdn.steemitimages.com/DQmNbNSFEAiGnAoTq51DSvBDok3nVoHG4JsE3EiLkeDWCeh/transfer.png)

먼저, **블록스닷아이오 지갑(https://bloks.io/wallet) 사이트에 접속**해주세요. 그 다음에는 우측 상단에 보이는 `Login`이라는 버튼을 클릭해서 **스캐터 데스크탑으로 로그인**을 해주세요. 그러면 위와 같은 화면이 나타나는데 각 메뉴별로 어떤 것들을 입력해야 되는지 살펴보도록 하겠습니다.

**① 보내는 계정명(Sender)** : 스캐터로 로그인하면 자동으로 나의 계정이름이 입력됩니다.

**② 받을 계정명(Receiver)** :영문+숫자(1~5)로 조합된 12자리 계정명을 입력해주세요.

> **[참고] 주요 국내 암호화폐 거래소 입금 계정명**
> - 빗썸 : g4ydomrxhege
> - 업비트 : eosusrwallet
> - 고팍스 : gopaxdeposit 
> - 코인원 : coinonekorea

**③ 보내는 수량(Amount)** : 숫자로 입력 (소수점 넷째자리까지 가능)

- 위의 그림과 같이 EOS라고 되어 있는 드랍박스를 클릭하면 해당 계정에 보유하고 있는 EOS 네이티브 토큰 이외의 다른 토큰들을 선택하실 수 있습니다.

**④ 메모(Memo)** : 거래소로 보내는 경우에만 입력

> **[추가설명] 메모의 기능에 관하여**
> 본래 메모 기능은 사전적 의미 그대로 **"전달하고 싶은 메시지를 간단하게 남기는 기능"**이라서 **이오스 계정간의 토큰 전송에는 아무것도 입력하지 않아도 무방**합니다. 그러나 거래소들의 경우 자신들의 이오스 계정에 보관하고 있는 토큰들의 주인을 찾아주기 위해 메모 기능을 활용합니다. 즉, **거래소로 보내는 경우에만 메모를 신경써서 정확히 입력**하시면 됩니다.

![transfer2.png](https://cdn.steemitimages.com/DQmVqAzdsvLPhbyuDt5XAtRzaKSEvsE4nRPhyzyaMB1eHTC/transfer2.png)

위의 4가지 정보를 위와 같이 정확히 입력하시고 난 뒤에 화면 하단에 보이는 `Transfer`라는 버튼을 클릭해주세요. 블록스닷아이오에서는 위와 같이 `어떤 토큰 몇 개를 누구에게 보낼 것인지` 다시 한 번 확인할 수 있도록 되어 있습니다. (다시 한 번 말씀드리지만 위와 같이 다른 계정으로 토큰을 전송할 때는 메모에 어떤 내용을 입력해줄 필요가 없습니다)

![check box.png](https://cdn.steemitimages.com/DQmaEynwSiWYPaCoQmwRLHqCHmpjB6AN5GxUP8qtV1fJq8q/check%20box.png)


위와 같이 **스캐터 팝업창이 나타나면 `체크표시(v)`를 클릭해주시면 토큰 전송이 정상적으로 완료**되는 것을 확인하실 수 있습니다.


## #2. 에어그랩 신청하기
---

![airgrab.png](https://cdn.steemitimages.com/DQmWYx8KaJ4LYi4nmLfiXLoFtdYmqSC8tm9w7RVh7E5NneA/airgrab.png)

에어그랩은 해당 토큰을 에어드랍 받기 위해 홀더들이 자신의 계정에 남는 RAM자원 중 약 240byte 정도를 부담하는 일종의 **"착불식 에어드랍"**입니다. 에어그랩과 관련된 자세한 설명은 아래의 링크를 읽어보시면 자세한 내용을 확인하실 수 있습니다.


- [에어그랩에 대한 설명 포스팅 #1](https://steemit.com/coinkorea/@donekim/airdrop-airgrab)

- [에어그랩에 대한 설명 포스팅 #2](https://steemit.com/dclick/@donekim/-airdrop-airgrab-skyhook-1541487453792)

 
본인의 계정에 여유 RAM자원이 있는 경우 에어그랩을 신청하여 한 종류의 토큰당 약 240byte의 공간을 내어주고 해당 토큰을 받을 수 있습니다. 그러나 여기서 주의해야 되는 것은 **"에어그랩을 신청한다고 해서 즉시 토큰을 받게 되는 것은 아니다"**라는 것입니다. 에어그랩 또한 에어드랍과 유사한 방식이기 때문에 특정일자의 스냅샷을 기준으로 토큰이 지급되며, 만약에 해당 스냅샷 일자에 계정에 이오스 토큰을 보유하고 있지 않았던 경우에는 에어그랩을 신청한다고 하더라도 토큰을 받을 수 없습니다. 

물론 현 시세 기준으로 240byte의 RAM자원은 약 130원 정도에 불과한 아주 작은 금액이기는 하지만, 만약에 토큰 수령 대상이 아닌 경우에는 굳이 에어그랩을 신청할 필요가 없기 때문에 에어그랩을 신청하기 전에 각 토큰별로 **① 스냅샷 기준일이 언제인지**, 그리고 **②몇 대 몇의 비율로 배분이 되는 것**인지, **③ 해당 토큰의 시장가치가 있는 것**인지에 대해서 사전에 충분히 정보를 찾아보실 필요가 있습니다. 

예를 들어 ATD토큰은 제네시스 스냅샷을 기준으로 하고, NEB토큰은 아직까지 정확한 스냅샷 기준일이나 토큰 배분 비율이 정해지지 않았습니다. 따라서 커뮤니티에서 각 토큰들에 대한 정보들을 충분히 확인하신 뒤에 에어그랩을 신청하시기를 추천합니다.

신청방법은 굉장히 간단합니다. **각 토큰별로 `Airgrab`이라는 버튼을 클릭**하시면 됩니다. 혹시라도 모든 토큰들의 에어그랩을 신청하고 싶으신 경우에는 `AIRGRAB ALL TOKENS`라는 황금색 버튼을 클릭하시면 되지만, 해당 방법은 비추천합니다.


## #3. 깜짝 퀴즈 정답
---

**[문제1] 거래소에서 내 이오스 계정으로 토큰을 전송할 때 메모를 잘 입력해야 한다 → X**
> 거래소에서가 아니라 거래소'로' 토큰을 전송할 때 메모를 잘 입력해야 한다.

**[문제2] 나는 거래소에서 스캐터 지갑으로 이오스를 보내는 법을 알고 있다 → X**
> 스캐터는 신원인증 프로그램일 뿐 지갑으로서의 기능은 하지 않는다. 스캐터 지갑이라는 것은 없다.

**[문제3] 내 지갑 주소를 입력할 때는 EOS로 시작하는 퍼블릭키를 넣어야 한다 → X**
> 내 지갑주소는 "영문+숫자(1부터 5까지)"로 구성된 12자리의 계정이름을 말한다.

**[문제4] 이오스 지갑에 보낼 때는 아주 소량의 수수료가 들어가는 것이 원칙이다 → X**

![bithumb eos.png](https://cdn.steemitimages.com/DQmNxetoyvzNXpshwQPTWGv7UpH2vGhWYWYv8HUEPxrhPHx/bithumb%20eos.png)

![huobi.png](https://cdn.steemitimages.com/DQmP1ZHJ7inFEUHiYqurM55aWJaZ7bQqQEFP3ac1q4BpuXJ/huobi.png)

> 빗썸, 후오비 등 일부거래소에서 자신들 멋대로 토큰 전송 수수료를 부과하나, 본래 이오스 계정에서는 토큰 전송 수수료가 없다. (후오비처럼 최소 인출 금액을 제한하거나, 빗썸/후오비 같이 토큰 전송 수수료를 부과하는 것은 이른바 거래소의 갑질 정책으로 매우 불합리한 정책임)

**[문제5] 사람들이 가장 많이 사용하는 이오스 지갑은 스캐틀렛(Scattellet)이다 → X**
> 스캐틀렛은 현재 개발이 중지된 상태로 제대로 작동하지 않는다. 노바 월렛, EOS Lynx와 같은 모바일 어플을 사용하거나, 스캐터 데스크탑을 연동하여 이오스허브, 블록스닷아이오 등을 사용하는 것이 좋다.

**[문제6] 프라이빗키는 남들에게 공개되면 자산을 잃어버릴 수 있으니 조심해야 한다 → O**
> 퍼블릭키는 남들에게 공개가 되도 아무런 문제가 없지만, 프라이빗키는 타인에게 노출되는 경우 계정을 탈취당할 수 있으므로 각별히 보안에 주의하여야 한다.

**[문제7] 퍼블릭키랑 계정명은 동일한 개념이다 → X**
> 퍼블릭키와 계정명(계정이름)은 다른 개념이다. 퍼블릭키는 자물쇠, 계정명은 계좌번호에 비유할 수 있다. 한 계정(계좌)에 여러 퍼블릭키(자물쇠)를 연결할 수도 있고, 여러 계정(계좌)에 동일한 퍼블릭키(자물쇠)를 연결할 수도 있다.

**[문제8] 프라이빗키를 잃어버린 경우 블록원에 이메일로 복구 요청을 해야 된다 → X**
> 프라이빗키를 잃어버린 경우에는 어떠한 경우에도 찾을 수 없다. 특히 텔레그램 등에서 블록원, 이오스 본사 직원이라고 사칭하며, 프라이빗키 복구의 대가로 일정량의 EOS를 요구하는 사람들은 모두 사기이므로 각별히 주의해야 한다. 실제 블록원도 아무런 권한이 없고, 이오스 본사 같은 것은 애초에 존재하지도 않는다.

**[문제9] 에어그랩을 신청하기 위해서는 약240byte의 여유 RAM자원이 있어야 한다 → O**
> 에어그랩을 신청하기 위해서는 해당 계정에 약240바이트 만큼의 여유 RAM자원이 있어야 한다. 에어그랩을 신청하고 싶지만 해당 계정에 여유 RAM이 240미만인 경우에는 RAM을 추가로 구매해야 한다.

**[문제10] 에어그랩을 신청하면 바로 토큰을 받을 수 있다 (O/X)**
> 에어그랩을 신청한다고 하더라도 바로 토큰을 에어드랍 받을 수 있는 것은 아니다. 각 토큰별로 스냅샷 기준일, 배분 비율, 신청기한 등을 자세히 확인해보고 신청해야 한다. 



혹시라도 **2개 이상 틀리신 분들은 초급자**에 해당하고, **5개 이상 틀리신 분들은 완전 초심자**에 해당합니다 :D 흔히들 개념 자체를 혼동하시거나 잘못 알고 계신 부분들이 많은데, 소중한 나의 자산들과 관련이 있는 만큼 초급자 또는 초심자에 해당하시는 분들은 위에서의 퀴즈 내용들이라도 절대 혼동하지 않도록 주의하셔야 합니다. 다음 포스팅에서는 **블록스닷아이오를 통해 신규 자계정을 생성하는 방법**에 대해서 다뤄보도록 하겠습니다 :) 




<center>![donekim.gif](https://cdn.steemitimages.com/DQmP5rc6mLfZAU56skFU2MkzywZQ5qWruKpyU2hq5nT7md7/donekim.gif)</center>


<center>![behind banner.gif](https://cdn.steemitimages.com/DQmXBUz3S7u2z13jB39UNUder7HUADC9DvHibUEu7DTu3MR/behind%20banner.gif)



<center><pre> H O P E   F O R   T H E   B E S T , 
P L A N   F O R   T H E   W O R S T</pre>
<sub> https://steemit.com/@dONekim</sub></center>

- - -

This page is synchronized from the post: ['[이오스 이야기] EOS 툴킷(ToolKit) 사용방법 살펴보기 #3. 블록스닷아이오(Bloks.io) 2편(토큰전송)'](https://steemit.com/@donekim/eos-toolkit-3-bloks-io-2)
