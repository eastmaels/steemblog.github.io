
---
title: '[이오스 이야기] 댑 생태계(EOS DApps ecosystem) 자세히 살펴보기 - 센스챗(Sense Chat)'
permlink: eos-dapps-ecosystem-sense-chat
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-09-12 04:47:45
categories:
- coinkorea
tags:
- coinkorea
- kr-coin
- kr-series
- sensechat
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

안녕하세요, 디온(@donekim)입니다. 지난 번 친타이에 대한 소개 포스팅 이후에 오래간만에 이오스 댑 생태계 살펴보기 시리즈를 업데이트 하는 것 같네요. 오늘은 **이오스 댑 생태계 자세히 살펴보기 시리즈**의 7번째 포스팅으로 **"이오스 블록체인 기반의 탈중앙화된 P2P 메신저 센스챗(Sense Chat)"**에 대해서 알아보도록 하겠습니다. 




------

<center>**[디온의 이오스 댑 생태계(EOS DApp ecosystem) 자세히 살펴보기 시리즈]**</center>



- 1편 : [[이오스 이야기] 댑 생태계(EOS DApps ecosystem) 자세히 살펴보기 - Atidium편](https://steemit.com/coinkorea/@donekim/eos-dapps-ecosystem-atidium)
- 2편 : [[이오스 이야기] 댑 생태계(EOS DApps ecosystem) 자세히 살펴보기 - 탈중앙화거래소편(EOSfinex/EOSDAQ)](https://steemit.com/coinkorea/@donekim/eos-dapps-ecosystem-eosfinex-eosdaq)
- 3편 : [[이오스 이야기] 댑 생태계(EOS DApps ecosystem) 자세히 살펴보기 - 호루스페이(Horuspay)편](https://steemit.com/coinkorea/@donekim/eos-dapps-ecosystem-horuspay)
- 4편 : [[이오스 이야기] 댑 생태계(EOS DApps ecosystem) 자세히 살펴보기 - eosDAC 1편](https://steemit.com/coinkorea/@donekim/eos-dapps-ecosystem-eosdac-1)
- 5편 : [[이오스 이야기] 댑 생태계(EOS DApps ecosystem) 자세히 살펴보기 - 덱시오스(DEXEOS)편](https://steemit.com/coinkorea/@donekim/eos-dapps-ecosystem-dexeos)
- 6편 : [[이오스 이야기] 댑 생태계(EOS DApps ecosystem) 자세히 살펴보기 - 친타이(CHINTAI)편](https://steemit.com/coinkorea/@donekim/eos-dapps-ecosystem-chintai)

------



## #1. 센스챗(Sense Chat)이란 무엇인가?
---

<center>![sense chat logo.png](https://cdn.steemitimages.com/DQmacgtCeGy3CXNx3e7RRuzhgwA48CrVfwkUJuwDPLYqGXs/sense%20chat%20logo.png)</center>

센스챗은 **이오스 블록체인을 기반으로 탈중앙화된 P2P 메신저 플랫폼을 구축하고자 하는 프로젝트**입니다. 센스챗의 특징은 그들의 슬로건인 `"Connect directly, Chat privately, Transact freely"`에 잘 나타나 있습니다. 사용자들은 센스챗 댑을 통해서 블록체인 계정끼리 직접 연결되어 라이브 채팅, 화상통화 등을 즐길 수 있습니다. 

P2P방식으로 특정 서버를 통하지 않고 연결되는 특징으로 인해 Telegram, WhatsApp, WeChat, 카카오톡 등 중앙집중화된 서비스 제공자가 있는 메세징 플랫폼 과는 달리 유저간의 대화 내용과 같은 데이터 및 기능들이 수집되거나 별도로 제어되지 않습니다. 중간에 데이터 저장 공간이 없기 때문에 라이브 채팅 세션 동안에 로컬 장치에 임시저장되어 있는 대화내용은 세션이 종료되는 순간 영원히 사라지게 되며, 나중에 그 누구도 대화내용을 수집할 수 없게 됩니다. 


## #2. 센스챗(Sense Chat)의 기능 살펴보기
---


**(1) 사용자간 직접 연결기능(Connet Directly)**

![feature1.png](https://cdn.steemitimages.com/DQmenokqEpshWiLjEWPD9YGTbThMoZy6wfSnefqfaiQqeyL/feature1.png)

일반적으로 휴대폰 번호 등 사용자들의 개인정보를 수집하는 것을 기본으로 하는 기존의 메신저 앱들과는 달리, **센스챗에는 이오스 블록체인의 퍼블릭키 또는 사용자 계정 이름 외의 별도의 정보를 입력할 필요가 없습니다.** 물론 블록원의 신원인증 시스템이 각 계정에 대한 KYC를 요구하게 될지는 모르겠지만, 사용자들은 다른 사용자들과의 채팅을 위해 센스챗만을 위한 별도의 계정을 신규로 생성하여 서비스를 이용할 수 있기 때문에 별도의 신원정보를 공유하지 않고 다양한 사람들과 채팅을 즐길 수 있습니다. 


**(2) 보안성이 높고 검열저항성을 가진 프라이빗 채팅(Chat Privately)**
 

![feature2.png](https://cdn.steemitimages.com/DQmX9tAvTjzEDrmLji9tuwjAteHw5uyuqFyRXV19hXXcmnv/feature2.png)

기존 메신저 앱들은 중앙 서버에 사용자들의 대화 내용이나 영상 등이 저장되어 있기 때문에, 정부나 수사기관 등이 해당 서비스 제공 업체에 사용자들의 대화 내용에 대한 접근 권한을 요구하거나 자료 제출을 요구하는 경우 사용자들의 동의없이 또는 서비스를 이용하기 위해서는 무조건적으로 동의해야 하는 등의 방법을 통해 개인정보가 무단으로 유출되기 쉬웠습니다. 

사용자들이 메신저를 통해 자신들의 지인과 이런저런 이야기를 나누는 것은 굉장히 높은 수준의 민감성 개인정보에 해당하지만, 이런 **민감한 개인정보에 대한 검열이나 유출 위험이 높다는 것은 중앙화된 서비스 제공자가 존재하는 기존 메신저 앱들의 가장 큰 문제점**입니다.

센스챗은 중앙 서비스 제공자 없이 사용자간의 직접 연결을 통해 메세지나 영상을 주고 받을 수 있다는 특징으로 인해, **대화내용이나 영상통화의 영상 데이터 등은 중앙화된 서버에 저장될 일이 없어서 사용자들은 안전하게 대화**를 나눌 수 있게 됩니다. 

**(3) 자유로운 거래 기능(Transact Freely)**
 

![feature3.png](https://cdn.steemitimages.com/DQmat4qBSvq1uWjbZGpSgnaC3EzkdExjB6QLmWiAe1P9mZ2/feature3.png)

**센스챗은 카카오페이의 송금 기능과 매우 유사한 토큰 전송기능도 제공**합니다. 블록체인에서는 "지갑"으로 잘 알려져 있는 기능인데, 사용자들은 센스챗을 이용하여 자신이 계정에 보유하고 있는 EOS토큰이나 SNS토큰`(센스챗의 토큰 심볼이 SNS입니다)` 등을 자유롭게 주고 받을 수 있습니다. 단순히 토큰을 보내고 받기만 하는 것이 아니라 센스챗 플랫폼에 기여를 통해 SNS토큰을 획득하는 것도 가능합니다. (토큰을 획득하는 방법 등에 대해서는 추후 플랫폼이 런칭되고 나서 어떤 구조로 가능한지에 대해서 자세히 살펴볼 필요가 있을 것 같습니다.)




## #3. 센스챗 베타 

------


![beta.png](https://cdn.steemitimages.com/DQmf9jCo8XJqsVrfQp74W35Hnekd8eR5SMmvVaLEXv35Tb6/beta.png)

**앞으로 9일 뒤인 9월 21일부터 센스챗의 클로즈드 베타 테스트가 진행될 예정**입니다. 현재 베타 서비스와 관련된 공식 사이트(https://sensechat.kickoffpages.com/)에서 베타 서비스 참여자 신청을 받고 있으며, 테스터로 참여를 원하시는 분들은 이메일 입력을 통해서 참여신청을 하실 수 있습니다. 


센스챗의 MVP에는 **텍스트 채팅, 비디오 채팅, 지갑 기능**이 제공될 예정이며, 지갑 기능에서는 **우선적으로 EOS 네이티브 토큰 및 SENSE토큰(SNS)의 송수신 기능**이 적용될 예정입니다. 


![migration.png](https://cdn.steemitimages.com/DQmWi5f7TYADEbedqcDqFmm4VC2iYdpA5zvy9vD8ezoZTFN/migration.png)

**센스챗 프로젝트의 경우 이오스 생태계에서 갓 등장한 프로젝트가 아니라, 2017년 10월부터 토큰 프리세일을 시작하며 기존에 이더리움 블록체인 위에서 개발이 진행되어 왔던 프로젝트**입니다. 메시징 플랫폼의 특성 상 트랜잭션마다 부과되는 별도의 수수료가 없고, TPS에 있어 높은 성능을 가진 블록체인 플랫폼이 필요하게 된 센스챗 팀은 이오스 메인넷의 런칭과 함께 이오스 생태계로의 마이그레이션을 발표하게 되었던 것입니다.

이미 오랜시간 동안의 개발 기간을 거쳐왔기 때문에 곧 발표될 프로토타입에서 일정기간 동안의 테스트가 끝나고 나면 서비스의 정식 출시도 빠른 시일 내에 이루어지지 않을까 많이 기대가 됩니다. 센스챗 토큰의 가격이나 투자수익과는 관계 없이, 아마도 센스챗 댑은 이오스 커뮤니티로부터 가장 많은 사랑을 받고, 가장 많이 사용될 댑(DApp) 중 하나가 되지 않을까요? 




<center>![donekim.gif](https://cdn.steemitimages.com/DQmP5rc6mLfZAU56skFU2MkzywZQ5qWruKpyU2hq5nT7md7/donekim.gif)</center>


<center>![behind banner.gif](https://cdn.steemitimages.com/DQmXBUz3S7u2z13jB39UNUder7HUADC9DvHibUEu7DTu3MR/behind%20banner.gif)

<h6> 출처가 명시된 펌글에는 감사드리지만, 출처를 밝히지 않은 무단펌은 도둑질입니다. 
카페나 블로그 등에 퍼가실 때는 반드시 출처를 명시해주시기 바랍니다.
무단펌은 포스팅을 작성하는 사람의 사기를 떨어뜨리는 기만 행위입니다.</h6></center>







<center><pre> H O P E   F O R   T H E   B E S T , 
P L A N   F O R   T H E   W O R S T</pre>
<sub> https://steemit.com/@dONekim</sub></center>

- - -

This page is synchronized from the post: ['[이오스 이야기] 댑 생태계(EOS DApps ecosystem) 자세히 살펴보기 - 센스챗(Sense Chat)'](https://steemit.com/@donekim/eos-dapps-ecosystem-sense-chat)
