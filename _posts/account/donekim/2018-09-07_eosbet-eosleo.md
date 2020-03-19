
---
title: '[이오스 이야기] 스캠주의!! EOSBet으로 위장한 스캠사이트(EOSLEO) 조심하세요!!'
permlink: eosbet-eosleo
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-09-07 07:43:42
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

> 이오스 포스팅 열심히 쓰라고 멋진 대문을 선물해주신 @designkoi님께 감사드립니다 :D

![steemit_logo.png](https://cdn.steemitimages.com/DQmaZsenPDf5Qn5nJzDZNkVg1aCQUyXNwqwK1fk8qe4jhKa/steemit_logo.png)



안녕하세요, 디온(@donekim)입니다. 이오스벳(EOSBet)으로 위장한 스캠사이트가 등장했습니다. 해당 사이트는(http://eosleo.io/)이라는 사이트인데 혹시라도 피해를 입지 않도록 조심하시기 바랍니다.

![login.png](https://cdn.steemitimages.com/DQmZN5c3AF4ABvgfmFhvBhNYFS2KUqBupp9U6Yxoed2JajU/login.png)

위의 그림은 스캠사이트에 접속한 화면입니다. 토큰 모양으로 보이는 것만 빼고는 이오스벳(EOSBet)을 그대로 복사해서 붙여넣은 모습입니다. 얼핏 봐서는 큰 차이가 없어보입니다.

![eosbet.png](https://cdn.steemitimages.com/DQmajEKfz9n8uY2iS3t55XRHVhEFT6fq3rGqMEMnQGgsszh/eosbet.png)


지금 이 화면이 정식 EOSBet의 접속 화면입니다. 혹시 다른 점을 찾으셨나요? 스캠사이트와의 차이점은 이오스 토큰과 BET토큰의 심볼이 없고 다른 토큰의 심볼이 들어가 있다는 정도입니다.

![faketoken.png](https://cdn.steemitimages.com/DQmeMDyQ42hjZruGD2FijYZ4iZXMHVWsvyyboaa7Zawkjyt/faketoken.png)

스캐터를 사용해서 로그인을 해보면 `ROLL DICE`라는 문구 대신에 `GET FAKE TOKEN`이라는 문구가 뜨는 것을 확인하실 수 있습니다. **혹시나 해서 말씀드리지만 절대 해당 사이트에서 스캐터로 로그인하거나 위에 보이는 `GET FAKE TOKEN`을 클릭하지 마시기 바랍니다.** 저는 설명을 위해서 저 버튼을 누르면 어떻게 되는지 클릭을 해보았습니다. 

 
![eosdice.png](https://cdn.steemitimages.com/DQmdPu9vvuJhxpW38zPUVXYFdGb4J218oDuSnuPjG7svESh/eosdice.png)


![faketoken2.png](https://cdn.steemitimages.com/DQmPkeaTAS97y6Y4vWsWrYS4YgdD8BrBU25kYFAqN7P7kka/faketoken2.png)


최종 트랜잭션을 승인하기 이전에 나타나는 스캐터 창입니다. 혹시 차이점을 찾으셨나요? 해당 컨트랙트&액션은 `eosio.token transfer` 즉 **이오스 토큰을 다른 계정으로 보내는 것**입니다. 

차이점이 있다면 위의 화면은 EOSBet에서 최종 수락을 하는 팝업창으로 eosbetdice11이라는 계정으로 이오스 토큰을 전송하는 것이고, 아래의 화면은 EOSLEO라는 스캠사이트 계정인 eosleotokens라는 계정으로 이오스 토큰을 전송하는 것입니다. **즉, 스캐터 팝업창 상으로 사용자들은 크게 이상한 점을 발견할 수 없습니다.**

원래 이오스벳도 내가 가지고 있는 이오스를 걸고 겜블링을 하는 것이기 때문에 자연스럽게 내가 베팅한 수량만큼 이오스 토큰을 전송하고 숫자들 돌린 뒤에, 게임 결과에 따라 돌려받는 트랜잭션에 서명을 해야 합니다. 하지만 **스캠사이트에서는 토큰 전송을 하는 순간 게임결과에 따라 다시 이오스 토큰을 돌려받을 수 없습니다. 말 그대로 언스테이킹된 모든 수량이 전송되는 것**입니다.  

<center>![dice.png](https://cdn.steemitimages.com/DQmUd5sHELTDax9nvHGMsHBbuDcBoJbuUzXREgvR6AM2A7b/dice.png)</center>

이오스벳 공식 사이트에 접속하는 경우에는 위와 같이 사이트 주소 좌측에 **보안 연결**이라는 문구가 뜨지만, 

<center>![faketoken main.png](https://cdn.steemitimages.com/DQmQyy37E152S6cb3S26c6uZFLt4Ncnberm155aD9oDNWQ8/faketoken%20main.png)</center>

EOSLEO라는 스캠사이트에서는 위와 같이 **주의 요함**이라는 문구가 나타나는 것을 확인하실 수 있습니다. `(사실 큰 차이는 없습니다. https:// 이냐 아니면 http:// 냐의 차이이다 보니 위와 같은 문구가 나타나는 건데, 가급적 https:// 를 지원하지 않는 사이트의 경우에는 가급적 주의하실 필요가 있습니다.)`


![luckyos.png](https://cdn.steemitimages.com/DQmTL1ZZcpoPJa9PFdd3r8gLWBkwb7N7kbYQrNYjyJYvqRy/luckyos.png)

최근에 luckyos라는 또다른 다이스, 가위바위보 겜블링을 할 수 있는 사이트도 등장했는데, 위와 같이 http:// 주소만 지원하고 있어서 위와 같이 **주의요함**이라는 메세지가 나타납니다. 그래서 이런 저런 테스트를 해보는 것을 즐겨보는 성격임에도 불구하고 섣불리 로그인이나 게임을 즐겨보지 않고 있습니다. 

![payout.png](https://cdn.steemitimages.com/DQmQWxWg7pxyzYZbj6VJEPGRNUqsxQnksGxTSevxk9hFdzG/payout.png)

EOSLEO라는 스캠사이트를 접속해서 보면 많은 사람들이 FAKE라는 토큰을 100개씩 걸고 게임을 즐기고 있는 것처럼 실시간으로 리스트가 올라가는 것을 확인할 수 있습니다. **정말 소름돋는 점은 위와 같이 출력되는 리스트들은 EOSBet을 즐기고 있는 분들의 계정이라는 점**입니다. 

다시 말해서 실제로 EOSLEO에서 게임을 하고 있는 것이 아니라, EOSBet에서 게임을 하고 있는 분들의 리스팅을 퍼와서 마치 실제로 자신들의 게임이 작동하고 있는 것처럼 보이게 위장한 것입니다. 어떤 식으로 데이터를 도둑질 해와서 출력하는 것인지는 모르겠지만, **베팅값(BET)과 페이아웃(PAYOUT)된 숫자는 고정이 되어 있는 것이 아무래도 많이 이상해보이죠?**


![eosbet real.png](https://cdn.steemitimages.com/DQmW6Vod7Fj4tjxRxRsPejeB5JE3bpYNp4CqMXPTJf4rDYk/eosbet%20real.png) 

![leo.png](https://cdn.steemitimages.com/DQmY5CoAkDKeAyZcMxhGSjJkyJBdhzXJp33upEMJNaj8EK9/leo.png)

**두 사이트를 비교해서 보면 위와 같이 EOSBet의 게임 결과를 그대로 불러오되, BET과 PAYOUT부분만 바꿔놓은 것을 확인**할 수 있습니다. 실제로 저기에 보이는 계정들을 조회해보면 모두 EOSBet과 관련된 트랜잭션들만 보일 뿐 다른 트랜잭션은 전혀 없는 것을 확인할 수 있습니다. 

![scam alert.png](https://cdn.steemitimages.com/DQmaZnz4HPrGieyL2yZS58TwAonWjbbwYupBZrV5y5UMs7B/scam%20alert.png)

**현재 eosioleoteam라는 계정으로 위와 같이 각 계정에 자신들의 사이트에 접속해서 토큰을 받아가라는 메모를 넣어 스캠 광고를 뿌리고 있는 중**입니다. 만약 해당 메모를 보고 사이트에 접속하셔서 트랜잭션을 수락하는 순간 **언스테이킹 되어있는 모든 수량의 이오스 토큰이 eosleotokens라는 계정으로 보내지게 되므로 각별히 주의**하시기 바랍니다. 



<center>![behind banner.gif](https://cdn.steemitimages.com/DQmXBUz3S7u2z13jB39UNUder7HUADC9DvHibUEu7DTu3MR/behind%20banner.gif)


</center>







<center><pre> H O P E   F O R   T H E   B E S T , 
P L A N   F O R   T H E   W O R S T</pre>
<sub> https://steemit.com/@dONekim</sub></center>

- - -

This page is synchronized from the post: ['[이오스 이야기] 스캠주의!! EOSBet으로 위장한 스캠사이트(EOSLEO) 조심하세요!!'](https://steemit.com/@donekim/eosbet-eosleo)
