
---
title: '[EOS Inside] EIDOS 에어드랍과 EOS 네트워크 혼잡 모드(congestion mode) 전환에 대하여'
permlink: eos-inside-eidos-eos-congestion-mode
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-11-09 19:39:21
categories:
- sct
tags:
- sct
- sct-kr
- sct-altcoin
- liv
- zzan
- palnet
- steemleo
- s
- union
- dblog
- busy
thumbnail: 'https://cdn.steemitimages.com/DQmT4D9dXkngK2XUFT7UgTo8FyY9oURvRK7Z1LwNt5465kq/thumbnail.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![thumbnail.jpg](https://cdn.steemitimages.com/DQmT4D9dXkngK2XUFT7UgTo8FyY9oURvRK7Z1LwNt5465kq/thumbnail.jpg)
<center><sub> <image source : https://www.eosgo.io> </sub></center>

안녕하세요, 디온(@donekim)입니다. 최근에 EISDOS토큰 에어드랍으로 인해 이오스 메인넷의 네트워크 활동이 크게 증가되면서, 소량의 리소스를 확보하고 있었던 대부분의 계정들의 활동이 마비되는 이른바 **혼잡 모드(congestion mode)로 전환이 되는 상황이 발생**했습니다. 

이에 따라 이오스 메인넷에서 디앱을 플레이하던 유저들이나 거래소의 입출금이 모두 중단되어 버리는 웃지 못할 해프닝이 벌어지게 되었죠.

EOS가 상장되어 있는 대부분의 거래소들이 입출금을 중단할 수 밖에 없었던 이유는 해당 거래소들이 관리하고 있는 이오스 메인넷 계정의 경우에도 이러한 **혼잡 모드에 대비한 충분한 량의 EOS를 리소스에 스테이킹하고 있지 않았기 때문**입니다. 

어제 코인베이스에서 공식 블로그에 이 상황에 대한 자세한 내용을 설명하는 글이 올라와 소개를 드립니다. 

- 원문 링크 : [EOS enters congestion mode due to EIDOS airdrop](https://blog.coinbase.com/eos-enters-congestion-mode-due-to-eidos-airdrop-3d3f82081074) - by Coinbase

> 최근의 상황에 대한 자세한 내용이 궁금하신 분들은 본 코인베이스의 포스팅과 아래의 Blockstart의 글을 함께 읽어보시면 좋을 것 같습니다.

- 추가 링크 : [Evolution of EOS: CPU congestion — A network issue or a giant leap to future?](https://medium.com/@blockstart/evolution-of-eos-cpu-congestion-a-network-issue-or-a-giant-leap-to-future-eacf4571c8c5) - by Blockstart

## #1. EOS에 무슨 일이 벌어지고 있나요?
---

지난 2019년 11월 1일 코인베이스는 EOS 트랜잭션의 성능이 급격하게 저하되기 시작하는 것을 감지하였습니다. 

코인베이스가 관리하고 있는 EOS 메인넷 계정에는 트랜잭션을 성공적으로 처리할 수 있는 충분한 량의 CPU자원이 없었습니다. 

![photo_2019-11-05_08-23-41.jpg](https://cdn.steemitimages.com/DQmSWYnAfZETEsx7MAUPScx77rajgGKwzenpPzTzmRJ6ifV/photo_2019-11-05_08-23-41.jpg)

이렇게 급격하게 성능 저하가 나타나게 된 것은 최근에 출시된 EIDOS 토큰 에어드랍과 관련된 EOS 네트워크 활동이 급작스럽게 증가했기 때문입니다.

코인베이스는 고객의 입출금 거래 차단 문제를 해결하기 위해 본인들의 이오스 계정의 CPU를 늘려 이 문제에 대응하고자 했습니다. 


## #2. 중요한 사실들
---

- 2019년 10월 31일 EOS 메인넷에 EIDOS라는 토큰이 출시되었습니다.

- EIDOS 에어드랍의 배포는 EIDOS 컨트랙트를 통해 EOS 메인넷 상의 트랜잭션을 주고 받음으로써 이뤄집니다.

- 거래소에 EIDOS토큰이 USDT 마켓에 상장되어 있었기 때문에 사용자들은 USDT로 현금화를 위해 에어드랍에 참여할 수 있었습니다.

- 이런 거래를 위하여 사람들은 CPU를 임대받아 EOS 네트워크에서의 트랜잭션 횟수를 늘리기 시작합니다.

- 사용자들의 트랜잭션 활동이 단시간에 급격히 늘어나면서 EOS 메인넷이 혼잡 모드로 제한이 됩니다. 즉 블록체인 네트워크에서 브로드캐스팅 할 수 있는 트랜잭션의 양이 급격히 줄기 시작한 것입니다.

- 소량의 EOS만을 스테이킹하고 있는 대부분의 사용자들은 아무런 트랜잭션을 발생시킬 수 없게 됩니다.

- EOS 프로토콜은 예측되었던대로 작동하고 있지만, 혼잡 모드로 전환된 상황에서 대부분의 유저들은 할당받고 있는 리소스 여유분이 없어지게 됩니다. 

- EOS 메인넷은 더 이상 EIDOS토큰을 얻을 수 없거나 REX에서 발생한 대규모 임대가 30일 이후 만료되고 임대자가 임대를 갱신하지 않을 때까지 이 상태를 유지해야 합니다.

## #3. EIDOS 에어드랍
---

![먁ㅇ개ㅔ.jpg](https://cdn.steemitimages.com/DQmWEvwQYggkwA49kMP8SZYxBUnQcEYpq3EAzfrY1Hm9Yms/%EB%A8%81%E3%85%87%EA%B0%9C%E3%85%94.jpg)

EIDOS토큰의 에어드랍 컨트랙트는 다음과 같은 절차에 따라 진행되었습니다.

- 유저들은 최소 0.0001 EOS를 EIDOS컨트랙트 계정`(eidosonecoin)`으로 보냅니다

- 그러면 EIDOS 컨트랙트는 받은 금액과 동일한 양의 EOS를 반환하는 트랜잭션을 발생시킵니다

- 더불어, 일정량의 EIDOS를 해당 사용자의 계정으로 에어드랍합니다. 이런 방식으로 0.0001 EOS 이상을 보유하고 있는 사용자들은 누구나 EIDOS에어드랍에 참여할 수 있습니다.

![eisdos1.png](https://cdn.steemitimages.com/DQmR4jRg9weAG6yF64G18mEVc1ayLpcjaWvf2cJXBWpieuo/eisdos1.png)

EIDOS컨트랙트를 통해 에어드랍에 참여하는 방식은 위와 같습니다. 이 컨트랙트의 작동방식은 [오픈 소스로 된 EIDOS 컨트랙트 코드](https://github.com/enumivo/eidos/blob/master/token.cpp#L6)에서 확인할 수 있습니다.


## #4. EIDOS의 토큰 상장
---

2019년 11월 1일 다수의 거래소에서 EIDOS토큰의 거래를 지원하기 시작합니다. 그리고 MXC Exchange와 같은 거래소에서는 EIDOS/USDT 거래쌍을 도입합니다.

<center>![eidos2.png](https://cdn.steemitimages.com/DQmQTHwYHwHbpnXq1etfBoPR5mP3y9r6GbtkYvdzozj3ayv/eidos2.png)</center>

EIDOS를 받으면 얼마가 되었든 테더를 벌 수 있었기 때문에 더 많은 사용자들이 EIDOS에어드랍에 참여하게 됩니다.

> 사실상 에어드랍에 참여한다는 것보다는 **EOS메인넷의 여유 리소스를 활용해서 토큰을 채굴**한다는 표현이 더 적합합니다.

EIDOS를 조금이라도 더 채굴하고자 했던 유저들의 반복된 컨트랙트 호출로 인해서 EOS메인넷의 활동량이 급격하게 증가하기 시작합니다.

![eidos3.png](https://cdn.steemitimages.com/DQmcbD8P4U7W6MHoBdovoHFqpjMsJPpgCnnKjoAo5fo6kZf/eidos3.png)

모든 transfer 작업 중에 EIDOS 컨트랙트로 transfer하는 비율이 이렇게나 높아지기 시작합니다. 모든 transfer 트랜잭션의 95%가량이 EIDOS 컨트랙트와 관련이 있는 것으로 나타납니다.

![eidos4.png](https://cdn.steemitimages.com/DQmbkPGb7BD1YWhuToiYe3VRap3dZHk5ZpmXgqGg1gsFarb/eidos4.png)

EIDOS의 에어드랍 시작 이후에 시간당 액션의 수가 급격하게 늘어나는 것을 확인할 수 있습니다.

## #5. 혼잡모드와 CPU
---
![eidos5.png](https://cdn.steemitimages.com/DQmdQqybWPQh78NmmSjNrDeMFC8EnZCkfnMPDeVHRB6FQD9/eidos5.png)

**EOS 메인넷은 CPU, NET, RAM이라는 리소스를 사용하여 네트워크에서 액션들을 수행**합니다. CPU와 NET이라는 리소스는 EOS를 스테이킹하거나 REX라는 리소스 거래소를 통한 임대를 통해 얻을 수 있고, RAM은 EOS를 지불하여 구매할 수 있습니다.

EOS 메인넷의 혼잡 모드(congestion mode) 전환은 **블록에 사용된 CPU가 리밋값인 200ms의 20%에 해당하는 40ms를 초과**할 때 이뤄집니다.

지금까지는 일반적으로 그 이하값에 해당했기 때문에 사용자들이 이용할 수 있는 CPU가 엄격한 계산에 따른 배분값보다 더 컸지만, 혼잡 모드에 전환하게 되는 경우에는 엄격한 값을 적용받게 됩니다. 

## #6. 현재 EOS 네트워크의 상태
---

![eidos10.png](https://cdn.steemitimages.com/DQmT8HpsgeqdamcPj1AJXV4EaozCiCdVwS2zooWw4pEoUg1/eidos10.png)

현재까지도 EOS 메인넷은 혼잡 상태 또는 정체된 상태라고 할 수 있습니다. 

많은 수량의 EOS토큰을 스테이킹하고 있거나 REX에서 임대받은 계정의 경우에만 언제든지 필요한 트랜잭션을 처리할 수 있는 상태입니다.

위의 이미지에서 볼 수 있듯이 **REX에서 약 84%에 해당하는 EOS가 임대된 상태**입니다. 

EIDOS프로젝트 웹사이트에 따르면 에어드랍은 앞으로 15개월 동안 계속될 것이라고 하는데, 아마도 **EIDOS를 USDT로 판매하여 얻는 이익이 REX에서 CPU를 임대받는 비용보다 큰 경우**에는 계속해서 EOS메인넷은 이와 유사한 상태를 유지하게 될지도 모릅니다. 

## #7. 개인적인 생각
---

하나의 블록체인 네트워크가 한 프로젝트의 에어드랍 때문에 완전히 마비되었다고 생각을 하실 수도 있겠지만, 개인적으로는 **디앱이나 거래소 등이 블록체인 네트워크를 이용하기 위한 리소스를 충분하게 확보하는 것의 중요성을 일깨워주는 사건**이기도 하다는 생각이 듭니다. 

오히려 **REX의 리소스 임대 가능량이 20%로 지나치게 적게 제한되었던 것이 진정한 문제**가 아니었나 싶습니다. 사실 그 동안은 아주 소량으로도 블록체인 네트워크 리소스를 이용할 수 있었기 때문에 REX의 임대수요가 거의 없다시피 했기 때문에 20% 임대 제한에 대해 아무도 크게 관심을 가지지 않았었죠.

EIDOS의 토큰 에어드랍이 지속되는 15개월 동안 계속 이런 상황을 겪게 될까요?

저는 그렇게 생각하지는 않습니다. 토큰을 채굴하기 위한 대량의 트랜잭션 수요도 EIDOS의 가격하락과 함께 CPU임대 비용을 충당하지 못하게 되는 경우 자연스럽게 줄어들기 시작할 것입니다. 즉 BEP라고 할 수 있는 `EIDOS토큰 처분 수익 = CPU임대 비용` 이라는 적당한 수준에서의 균형이 맞춰지지 않을까 싶습니다. 

게임 플레이, 디앱 활동, 토큰 거래 등을 일상적으로 해오던 많은 사용자들에게 지금의 상황이 불편하게 느껴지는 것은 부정할 수 없는 사실입니다. 그리고 아직까지 이렇다할 수익모델을 만들어내지 못하고 있는 디앱들이 고객들(사용자들)의 리소스를 모두 부담해줄만큼의 자금 여유가 있을 것이냐에 대한 고민도 생길 수 밖에 없지만, **블록체인 네트워크 리소스의 중요성에 대해 많은 사람들이 깨닫게 되는 계기**가 되었던 것도 사실입니다. 

> 언젠가 잠재적으로 발생할 수 있었던 상황에 대한 실전 테스트가 진행되고 있는 거라고 봐도 되지 않을까요?

진정으로 사용자들의 일상 속에서 계속해서 사용할만한 디앱들이 많아진다면, 블록체인 네트워크 리소스의 확보 여부는 디앱들의 경쟁력을 결정짓는 핵심적인 요소 중 하나가 되지 않을까 싶네요. 

지금까지는 항상 블록체인 플랫폼에 대한 불만이나 공격들이 많았지만, 사실 앞으로 블록체인 기반 서비스가 정상적으로 작동하지 않는 경우는 **플랫폼이 아니라 디앱사들에게 문제가 있는 것**이라고 봐야될 겁니다. 언제까지 모든 리소스를 고객들이 스스로 부담하게 하는 서비스는 결코 성공할 수 없을테니까요.

- - -

This page is synchronized from the post: ['[EOS Inside] EIDOS 에어드랍과 EOS 네트워크 혼잡 모드(congestion mode) 전환에 대하여'](https://steemit.com/@donekim/eos-inside-eidos-eos-congestion-mode)
