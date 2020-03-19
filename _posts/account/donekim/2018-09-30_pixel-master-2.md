
---
title: '[이오스 이야기] 블록체인 위에서 픽셀 아트를? Pixel Master가 무엇인지 알아봅시다 #2'
permlink: pixel-master-2
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-09-30 15:52:06
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

안녕하세요, 디온(@donekim)입니다. 지난 번 [[이오스 이야기] 블록체인 위에서 픽셀 아트를? Pixel Master가 무엇인지 알아봅시다 #1](https://steemit.com/coinkorea/@donekim/pixel-master) 포스팅에 이어 픽셀 마스터에 대해서 추가적으로 알아보도록 하겠습니다. 

![eospixels.png](https://cdn.steemitimages.com/DQmU7cXCYYWJCosd9xPxRsq7cYPAkaZ9BdRfmH14LZ1kysw/eospixels.png)

**#1. 픽셀 입찰 방법 및 수익구조**

**최초에 백지 상태에서 출발한 픽셀마스터의 픽셀당 가격은 0.05EOS에서 시작**했습니다. 최초 구매자가 점유하고 있는 픽셀을 1레벨이라고 부르며, 최초 구매자가 점유하고 있는 픽셀을 다른 사용자가 구매하는 경우 해당 픽셀을 2레벨이라고 부릅니다. **최초 픽셀 구매자 이후에 해당 픽셀을 구매하고자 하는 사용자는 기존 가격의 1.35배의 가격을 지불**해야만 합니다. 

> - 두 번째 구매자가 지불하는 가격 = 0.05EOS X 1.35 = 0.0675EOS
>- 세 번째 구매자가 지불하는 가격 = 0.05EOS X 1.35 X 1.35 = 0.091125EOS
>- 네 번째 구매자가 지불하는 가격 = 0.05EOS X 1.35 X 1.35 X 1.35 = 0.12301875EOS

위에서 보는 바와 같이 계속해서 1.35배로 가격이 올라가기 때문에 39번만 주인이 바뀌면 픽셀 하나당 가격이 무려 4,483EOS에 다다르기 시작합니다. 

각 픽셀들이 판매되는 가격은 기존 가격의 135%에 해당하지만, **기존 픽셀보유자는 다음 구매자가 추가로 지불한 35%의 추가 비용 중 3/4에 해당하는 EOS를 수익**으로 얻게 되고, 나머지 1/4은 컨트랙트 수익으로 귀속되어 다양한 용도로 사용됩니다.  

**#2. 픽셀마스터의 수익 분배 구조**

위에서 설명한 것처럼 기존에 이미 특정 사용자에게 점유되어 있는 픽셀을 다음 사람이 구매할 때 추가로 지불하는 35%의 금액 중 1/4에 해당하는 수익 금액은 차곡차곡 쌓인 뒤에 다양한 용도로 분배가 됩니다. `(포스팅을 쓰는 현재 시점 기준으로, 픽셀마스터의 수익 분배 구조에 대한 변경이 필요하다는 많은 참여자들의 의견을 받아들여지면서 수익 분배 구조과 다음과 같이 변경되었습니다)`

1. 패트론 보너스 : (기존) 40% → **(변경) 55%**
2. 최후 픽셀 팟 : (기존) 25%  → **(변경) 10%**
3. 레퍼럴 보상 : (기존) 8% → 기존과 동일
4. 개발진 할당 : (기존) 20% → 기존과 동일
5. RAM자원 구매 : (기존) 7% → 기존과 동일

위에서 **"패트론 보너스란, 한 번이라도 픽셀을 구매하고 해당 픽셀에 색깔을 입힌 사용자가 분배를 받는 수익"**입니다. 누군가가 내가 구매했던 픽셀위에 덧칠을 해버려서 더이상 해당 픽셀이 내 것이 아니라고 하더라도 받을 수 있는 일종의 보너스인 것입니다. 내가 구매한 픽셀의 누적수치라고 생각하시면 됩니다.`(현재 픽셀마스터의 캔버스 위에 내 소유의 픽셀이 하나도 없더라도 받을 수 있음)`


![pixels drawn.png](https://cdn.steemitimages.com/DQmUGCuH6X8AWfecNdEGGaGN2qpa4TXxgcEm3EBX81xY1En/pixels%20drawn.png)

패트론 보너스는 위와 같이 pixelmaster.io에서 스캐터로 로그인 한 뒤에 본인의 아이디 하단에 보이는 메뉴에서 확인하실 수 있습니다. `(pixels drawn 앞에 있는 숫자가 지금까지 내가 색칠한 픽셀의 누적수치이자 패트론 보너스를 받을 수 있는 비율입니다)`

![bloksio.png](https://cdn.steemitimages.com/DQmTqV9srJXRQCzLZM8vWN7vZAPnvkDhtVAJ6PRG8wNRTaT/bloksio.png)

혹시라도 다른 계정들은 얼마나 많은 픽셀에 색칠을 했었는지를 확인해보고 싶으신 분들은 다음과 같은 방법을 사용하실 수 있습니다. 먼저 https://bloks.io/account/1pixelmaster 주소로 접속합니다. 위와 같은 화면이 나타나면 스크롤을 내려서 화면 하단으로 내려갑니다.

![transactions.png](https://cdn.steemitimages.com/DQmRgVAHcxQUtkD5DDYP9nyzeZfL5UbjYKvJ352u22GyND4/transactions.png)


위와 같은 화면이 보이면, `Contract`라는 메뉴를 클릭합니다.


![transactions2.png](https://cdn.steemitimages.com/DQmSwsfQw8C8mMmSfxV8qWpqVAXUCuugkVn7AAxMmiRGD46/transactions2.png)

그 다음에 위와 같은 화면이 나타나면 `Tables`라는 메뉴를 클릭해주세요.

![transactions3.png](https://cdn.steemitimages.com/DQmTLJJ9SDAPbR9KkJA4YfSjrYdM9ovxzecTkS8TEWKMjGA/transactions3.png)

그리고 `Step 2 - Select Table`이라는 메뉴 하단에 보이는 드랍박스를 클릭한 뒤에 `account`라는 메뉴를 선택합니다.

![transactions4.png](https://cdn.steemitimages.com/DQmeP58b3Rm75Uk1SPv4iqSD4TTYpK6LyBPTdvPYHBgo6HR/transactions4.png)


마지막으로 `Lower Bound`라는 칸에 본인이 검색하고자 하는 계정명을 입력하시고, 녹색으로 된 Load Table이라는 버튼을 클릭해주세요.

![transactions5.png](https://cdn.steemitimages.com/DQmNn4p1EH8kQzCf5PPWw8ctVq3hMQK2QeWQWbCosAQwgcg/transactions5.png)

그러면, 위와 같이 해당 계정이 몇 개의 픽셀에 색칠을 했었는지를 확인하실 수 있습니다. `(검색한 계정 뿐만아니라 해당 계정 이름과 유사한 계정들도 아래에 함께 조회됩니다)`


그 다음으로 **최후 픽셀 팟(Last Pixel Pot)은 픽셀마스터에서 게임이 종료되기 전 가장 마지막에 픽셀을 구매한 사용자 1명이 받게 되는 상금**입니다. 

![last pixel pot.png](https://cdn.steemitimages.com/DQmP9FncTVauNQfqdwdmD8jApv3YBeiT2dZQcoyrpnuwz3k/last%20pixel%20pot.png)

**픽셀마스터는 24시간이라는 제한시간을 가지고 계속해서 카운트다운**이 됩니다. 24시간이 지나면 게임이 자동으로 종료가 되는데, 1개의 픽셀이라도 새로운 참여자가 구매하는 경우에 제한시간이 자동으로 리셋됩니다. 다시 말해서, **특정 사용자가 픽셀을 구매한 이후에 아무도 새로운 픽셀을 구매하지 않고 24시간이 지나서 카운트다운이 종료되면 가장 최후에 픽셀을 구매한 사용자에게 최후 픽셀 팟이라는 상금이 지급**되는 것입니다.

아마도 **계속해서 각 픽셀의 주인들이 바뀌면서 덧칠이 될 때마다 각 계정들의 pixels drawn수치는 지속적으로 증가하기 때문에 계속해서 패트론 보너스가 줄어드는 반면, 이미 최후 엑셀팟은 21,000EOS가 넘는 엄청난 금액이 되었기 때문에 지속적인 참여를 유도하기 위해 수익금액의 분배 비율의 조정**이 있었던 것으로 보입니다. 


![pixelmaster2.png](https://cdn.steemitimages.com/DQmWkAng5W89KXJ6hEVC3CZT6Yeea8LrogaEKUi63fPZa79/pixelmaster2.png)

픽셀마스터의 공식 텔레그램방에서는 개선을 위한 다양한 제안들이 나오고 있습니다. 


① 최후 픽셀 팟에 분배되는 비율이나 개발진에게 분배되는 비율을 조정하여 패트론 보너스에 더 많은 비율을 할당하자는 제안
② 캔버스의 총 픽셀수를 증가시키자는 제안
③ 색칠할 수 있는 색깔이 종류는 보다 다양하게 세분화하자는 제안
④ 게임 제한시간을 24시간에서 30분 등으로 획기적으로 단축시키자는 제안
⑤ 패트론 보너스를 누적기준에 의해 지급하는 대신에, 현재 캔버스에 자신의 픽셀을 소유하고 있는 비율을 대상으로 지급하자는 제안 등

![pixelfun.png](https://cdn.steemitimages.com/DQmbMwGtSt1ae4nBhcncKsivAtxXqbcjpp2fjFhSEQ6kzXB/pixelfun.png)

코드 소스가 오픈되어 있다보니, **현재는 픽셀마스터를 그대로 복사/붙여넣기 한 픽셀펀(https://pixelfun.io/)이라는 카피 버전이 등장**하면서 픽셀마스터에서의 비딩이 꽤나 많이 줄어들었습니다. 이미 픽셀당 가격이 오를대로 올라버린 픽셀마스터 대신에 새로운 신도시의 센터를 점유하겠다는 치열한 싸움이 시작된 것입니다. 

![pixelfun faq.png](https://cdn.steemitimages.com/DQmVhkGqhoTqh98GHC6aKY66npjH37d8sEvz5zYR77JiEFt/pixelfun%20faq.png)

수익 분배 비율의 경우에는 오히려 픽셀마스터가 픽셀펀을 따라가고 있는 기가 막힌 웩더독 현상도 나타나고 있는 상황입니다. FAQ 내용까지 다 복사+붙여넣기 한 픽셀펀이 믿을만한 댑인지에 대해서는 아직까지 많은 정보가 없어서 조금은 리스크가 있는 것으로 보입니다. `(EOSBet 등장 이후 짝퉁 Dice 댑들이 등장하고 피싱피해를 입은 계정들도 있었던만큼, 많은 정보가 알려지지 않은 댑에서는 자신의 메인 계정을 사용하지 않도록 각별히 유의하시기 바랍니다)`

비록 픽셀펀이 이름과 URL주소만 바꾸고 나머지는 통째로 카피했다는 점에서 미루어 짐작했을 때는 섣부른 투자가 위험하게 느껴지긴 하지만, 댑들 간의 경쟁이 시작되었다는 측면에서 일정부분 긍정적인 효과도 가져올 수 있을 것으로 보입니다. 과연 어떠한 수익 분배구조와 라운드 진행 정책 등에 차이를 두고 사용자들에게 어필을 할 것인지를 지켜보는 것도 재미있는 관전포인트가 되지 않을까 싶네요 :D



<center>![donekim.gif](https://cdn.steemitimages.com/DQmP5rc6mLfZAU56skFU2MkzywZQ5qWruKpyU2hq5nT7md7/donekim.gif)</center>


<center>![behind banner.gif](https://cdn.steemitimages.com/DQmXBUz3S7u2z13jB39UNUder7HUADC9DvHibUEu7DTu3MR/behind%20banner.gif)



<center><pre> H O P E   F O R   T H E   B E S T , 
P L A N   F O R   T H E   W O R S T</pre>
<sub> https://steemit.com/@dONekim</sub></center>

- - -

This page is synchronized from the post: ['[이오스 이야기] 블록체인 위에서 픽셀 아트를? Pixel Master가 무엇인지 알아봅시다 #2'](https://steemit.com/@donekim/pixel-master-2)
