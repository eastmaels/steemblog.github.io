
---
title: '[EOS Inside] REX시스템을 이용하여 EOS메인넷 장악하기'
permlink: eos-inside-rex-eos
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-11-11 04:28:09
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
- mini
thumbnail: 'https://cdn.steemitimages.com/DQmdUuZKiP5PybdvR5huNagBiK6MW1CwoTSLttjBE2b2As7/thumbnail.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![thumbnail.jpg](https://cdn.steemitimages.com/DQmdUuZKiP5PybdvR5huNagBiK6MW1CwoTSLttjBE2b2As7/thumbnail.jpg)
<center><sub><image source : https://coin.fyi></sub></center>

안녕하세요, 디온(@donekim)입니다. 일전에도 몇 번 소개드린 적이 있었던 EOSIO 코드포크 체인 Lynx Chain의 CEO인 프레드 크루거가 이번에는 **EIDOS의 EOS메인넷 리소스 장악 사태에 대한 개인적인 의견**을 게재하여 이를 소개드릴까 합니다.

아래의 내용은 원문의 내용 중 필요한 부분만을 발췌하여 번역하였으며 원문 전체의 내용이 궁금하신 분들은 아래의 링크를 참고해주시기 바랍니다.


- 원문 링크 : [Using REX to Hijack EOS](https://medium.com/@dotkrueger/using-rex-to-hijack-eos-3a3445299bf8)

> 번역본 소개에 앞서, 프레드 크루거는 EOS메인넷에 대해 다양한 관점에서 불만을 제기해오며 Lynx Chain이라는 별도의 체인에서 자신이 불만족하는 부분들에 대한 개선안을 반영하겠다는 의견을 자주 피력했다는 점. 그리고 그의 이번 글도 이러한 그의 주관적인 입장이 많이 반영이 되어있다는 점을 어느 정도 감수하고 읽어보시기를 추천드립니다. 

EOS 네트워크 전체는 EIDOS 에어드랍 채굴기(EIDOS Airdrop Miner)라는 하나의 앱에 의해 마비가 되었습니다. EIDOS 에어드랍 채굴기는 여러 중국계 월렛 서비스들 특히 토큰 포켓(Token Pocket)의 주도하에 서비스되었습니다. 

지난 10월 말까지만 하더라도 그 어떤 EOS 커뮤니티 멤버도 EIDOS에 대해서 들어본적이 없었는데, 갑자기 등장한 EIDOS가 한순간에 34억 달러에 이르는 블록체인 네트워크를 장악할 수 있었던 걸까요?


## [STEP 1] REX시스템을 이용한 공격 준비
---

EIDOS의 네트워크 공격은 EOSIO 프로토콜에 내장되어 있는 리소스 임대 시스템 REX의 유휴자원을 독점함으로써 가능했습니다.

REX에서의 자원임대는 **30일을 기본 단위**로 합니다. 즉, 임대(임차)가 시작되면 기본적으로 30일간은 해당 토큰이 락이 되는 개념입니다. 

사실 11월 1일 전까지만 하더라도 REX에서의 리소스 임대에 대한 수요는 그리 많지 않았습니다. 어떤 분들은 동의하지 않으실 수도 있지만, 활동적인 유저들과 앱의 활동량은 꽤나 안정적인 수준이었기 때문입니다.


> 10월 31일 전까지만 하더라도 100만 개의 EOS에 해당하는 리소스를 30일간 임대하는 비용은 약 278 EOS였습니다.

한 달 동안의 278 EOS는 **연 단위로 환산 시에 약 3,336 EOS 정도**`(278 EOS x 12개월)`에 해당합니다. 이는 연이자율 0.3%에 해당하는 수준이었습니다.

![rex1.png](https://cdn.steemitimages.com/DQmZ3gxV5qrzfPXtUoytbyxJ7qGKHLyBFHk1KmK98tVNTYZ/rex1.png)

그러나 10월 31일에 EIDOS팀이 약 6,000만 개의 EOS를 REX시스템을 통해 임대하고 여러 고래들을 모집하여 CPU리소스를 장악하기 시작합니다. 

![rex2.png](https://cdn.steemitimages.com/DQmYZHJcuHzm61L77GUjUHWKfP3WQae9KXRVsuYvsyqqUpZ/rex2.png)

이에 따라 REX의 연간 이자율은 0.3%에서 8%로 급격하게 증가하였으며, 그들이 임대가 가능한 모든 REX풀의 리소스를 빌려갔기 때문에 25배 이상 비싼 가격을 지불하더라도 더 이상 REX를 통한 리소스 임대가 불가능해졌습니다. 

![rex3.png](https://cdn.steemitimages.com/DQmefPg7MWhCep3yS9BUra2oje5RLqchAwFFPA9yZZu4pnY/rex3.png)

## [STEP 2] EIDOS 마이닝 앱을 통한 네트워크 공격
---

EIDOS 컨트랙트를 활용한 유휴 리소스 공격자들은 자신들이 꽤나 저렴한 비용으로 EOS 메인넷 리소스의 상당부분을 확보하고 있다는 것을 잘 알고 있었습니다.

그들이 취한 다음 행동은 **토큰 포켓이라는 인지도가 있는 이오스 메인넷 월렛을 통해 EIDOS 에어드랍 마이닝 툴을 지원**하는 것이었습니다.

![rex4.png](https://cdn.steemitimages.com/DQmNY1bRFWxuaVdrbqvzPyAPk7LThGXe85cTF4dUrvYa487/rex4.png)

여기에 더불어 EIDOS토큰이 여러 거래소에 상장되면서 테더로의 출구가 확보되기 시작하자 **마이닝에 너도나도 참여를 하기 시작**했고, 이에 따라 급격한 CPU자원의 부족현상이 나타났습니다.

![rex5.png](https://cdn.steemitimages.com/DQmNopXXfGs5nggiJTVkLYQ2wvTBMw8ifkewdkFAkPH9Ezi/rex5.png)

## # 우리가 배울 점
---

아이러니하게도, 댄 라리머의 글 [Proposal for EOS Resource Renting & Rent Distribution](https://medium.com/@bytemaster/proposal-for-eos-resource-renting-rent-distribution-9afe8fb3883a)에 따르면 REX의 설계 목표는 다음과 같습니다.

> 가격변동성이 훨씬 낮고 예측가능한 사용자경험을 제공하는 것

그러나 이번 EIDOS사태를 통해 볼 수 있는 것처럼, 오히려 특정 유저가 REX시스템을 통해 저렴한 가격에 리소스를 독점할 수 있게 됨으로써, 일반적인 사용자들은 간단한 토큰 전송조차 할 수 없게 되었습니다.

> 크루거는 이를 **디자인 결함(design flaw)**이라고 부르고 있습니다. 

단일 애플리케이션이 모든 시스템 리소스의 95%를 제어할 수 있고, 100달러 미만의 EOS를 스테이킹하고 있는 모든 사용자들의 계정을 사용할 수 없도록 만드는 것은 잘 작동하는 기능이라고 할 수 없습니다.

어떤 분들은 그렇다면 더 많은 EOS토큰을 사서 스테이킹을 하면 되는 거라고 강요하실 수도 있겠지만, 불행히도 그런 일은 벌어지지 않을 겁니다. 오히려 사용자들이나 앱들은 텔로스, 유럽체인, 왁스 같이 **더욱 비용이 저렴한 다른 대체 체인(포크체인)으로의 마이그레이션을 선택**할지도 모릅니다. 


## # 개인적인 생각
---

![forget.png](https://cdn.steemitimages.com/DQmc88Xx7pkkhCB6AQ2BkrxxLkYFThUh2MEZUcdzo34xytd/forget.png)

일각에서는 토큰 포켓 측에서 EIDOS와 손잡고 유휴 자원을 이용한 스패밍 트랜잭션을 대량 생산함으로써 EOS 네트워크를 마비시키고, 이에 대한 해결책을 본인들이 다시 내놓는 노이즈 마케팅, 새로운 창조 경제를 만들어냈다고 비난하고 있는 것으로 보입니다. 

실제로 EIDOS와 토큰 포켓 간에 어떤 이야기가 오고 갔는지에 대한 사실관계는 차치하고서, 이번의 스패밍 공격을 만들어낸 누군가들은 현재의 시스템에 대해서 누구보다 깊고 정확하게 이해하고 있었다는 점에 주목할 필요가 있습니다. 

언제까지 블록체인 네트워크의 리소스는 저렴하기만 하지도 않을 것이라는 점, 항상 공급 과잉의 상태로만 남아있지 않을 것이라는 점, 특정인에게 일정 비율 이상이 독점되는 경우 네트워크 전체에 부하가 발생한다는 점, 리소스의 가격 뿐만 아니라 분배 비율에 있어서의 밸런스가 잡혀야 한다는 점 등 분명히 **디앱 개발팀, BP, 커뮤니티 사용자들에게 이번 사태가 주는 시사점은 굉장히 의미가 있다**고 할 수 있습니다. 

과연 이번의 사태에 대해서 BP들과 블록원은 어떻게 바라보고 있고, 앞으로도 언제든지 잠재적으로 발생가능한 이런 위협상황에 대한 솔루션을 어떻게 내놓을 것인지 지금은 그것에 집중할 때가 아닌가 싶습니다.

- - -

This page is synchronized from the post: ['[EOS Inside] REX시스템을 이용하여 EOS메인넷 장악하기'](https://steemit.com/@donekim/eos-inside-rex-eos)
