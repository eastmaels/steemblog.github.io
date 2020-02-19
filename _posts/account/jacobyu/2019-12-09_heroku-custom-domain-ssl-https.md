
---
title: 'heroku에 custom domain 설정 및 ssl/https 적용'
permlink: heroku-custom-domain-ssl-https
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-12-09 11:53:51
categories:
- sct
tags:
- sct
- sct-kr
- sct-dev
- kr
- kr-dev
- union
- busy
thumbnail: 'https://cdn.steemitimages.com/DQmeeMWqTpBi1ykqsA3WsDbsYKQQyzMzbqHenWfXRa1PUNk/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


안녕하세요. 제이콥입니다.

heroku로 웹서비스를 돌리면 https://{project-name}.herokuapp.com/ 호스팅을 할 수 있습니다. 이 호스팅을 자신이 갖고있는 도메인을 바꾸기 위해서는 몇가지 설정을 해야합니다.  

전 이번에 개발했던 회원가입페이지에 커스텀도메인을 붙여봤습니다.
https://join.steemcoinpan.com

#### 0. 준비

커스텀 도메인 설정을 하기 전에 필요한 것은

1. heroku hobby tier
2. 도메인 구매

먼저 히로쿠 셋팅도 다 하고, 배포도 했다고 가정하겠습니다. 저는 free tier로 서비스를 배포했었는데요. tier를 업데이트했습니다.

실제로 서비스를 하지 않는 것이라면 free로 해도상관없습니다. 다만, 웹 서비스가 계속 켜있어야하고 커스텀도메인에 https 보안(ssl)을 적용하고 싶다면 hobby로 업데이트해야합니다. 한달에 7달러정도네요.

![](https://cdn.steemitimages.com/DQmeeMWqTpBi1ykqsA3WsDbsYKQQyzMzbqHenWfXRa1PUNk/image.png)


#### 1. 히로쿠 tier 업데이트

히로쿠 dashboard -> app 선택 -> resources -> change dyno type을 하시면 됩니다. 이게 꽤 찾기 힘들어서 전 도움말 보고나서야 찾았네요. 

https://help.heroku.com/81MBEG7L/how-do-i-upgrade-from-the-free-tier


![](https://cdn.steemitimages.com/DQmdmUf5N142YvQvZ6WM4hybRDJMAS7KYcYCpSuruPPi1sd/image.png)

#### 2. 히로쿠 ssl 셋팅

셋팅이라고 할 것도 없습니다. 클릭 몇번으로 끝납니다.
dashboard -> app 선택 -> settings  -> configure SSL을 누릅니다.

configure SSL에서 auto 설정을 하면됩니다.

![](https://steemitimages.com/300x0/https://cdn.steemitimages.com/DQmP1wBTcmbrScUwdM8vAQ2AMCZwRt2xhbJZCSRm1TScShb/image.png)

#### 3. 히로쿠 커스텀도메인 입력
dashboard -> app 선택 -> settings  -> add domain을 누릅니다.

설정하고자 하는 커스텀도메인을 입력합니다. 도메인을 입력하면 생성되는 dns를 복사합니다. 여기서 생성된 dns는 도메인 공급업체에 등록해야합니다.

![](https://cdn.steemitimages.com/DQmQA2DPBNaPzSVM3dqag3Eg2LnP3fL4HYCqSfEWJTJhjzk/image.png)

#### 4. 도메인 등록

보통 도메인과 웹페이지를 연결할 때 2가지 방법이 있습니다. A를 연결하는 것과 CNAME을 연결하는 것입니다. 도메인과 ip를 연결할 때, A를 사용합니다.  그리고 도메인과 호스팅네임을 연결할 때, CNAME을 연결합니다.

도메인 공급업체마다 다르지만, 빨간 부분에 히로쿠에서 제공받은 dns를 입력하고요. 파란부분에 도메인업체에서 제공하는 url을 적습니다.


![](https://cdn.steemitimages.com/DQmbfW7dkn3JDBnMNHu3m7w1Z3KTLrsiTHKpKUjPSa213T4/image.png)
![](https://cdn.steemitimages.com/DQmfL99wf84BvAUohB4DSdRbCmQDKQyKJQ6kdU3HKn4boFM/image.png)

끝!

궁금한거 있으면 댓글달아주세요. 감사합니다.

- - -

This page is synchronized from the post: ['heroku에 custom domain 설정 및 ssl/https 적용'](https://steemit.com/@jacobyu/heroku-custom-domain-ssl-https)
