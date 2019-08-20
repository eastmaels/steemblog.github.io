
---
title: 'Heroku (헤로쿠) 스케줄러 with javascript (10분에 1번 Hello 출력,  1일 보팅 1회)'
permlink: heroku-with-javascript-10-1-hello-1-1
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-06-21 12:43:21
categories:
- sct
tags:
- sct
- kr-dev
- busy
- jjm
- sct-ubi
thumbnail: 'https://files.steempeak.com/file/steempeak/jacobyu/1eEGHulO-image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


안녕하세요.

제이콥입니다.

기존에 사용하던 #sct-ubi 기본 보팅을 업데이트하고 있습니다.

헤로쿠는 원격에서 nodejs, python 등 여러 프로그램을 돌려볼 수 있게 해줍니다.

되게 좋네요.

내 컴퓨터가 아니라 헤로쿠에 맡기면
전기세도 안나가지, 컴퓨터 꺼질까봐 걱정안해도 되지,
좋습니다.

---
#### 보팅 한번 하기

1. SCT  0.1% 이상 스테이킹 보유자 리스트 추출
2. 홀더리스트들의 글 검색
3. 그 글들에서 "오늘", ~~24시간 내에~~ 보팅을 받았는지 확인
4. "오늘",~~"24시간 내에"~~ 보팅을 받지 않은 홀더들의 글들 수집
5. 수집한 글들에 보팅

이렇게 하면 매번 새로운 글이 나올때 검색하지 않고 하루 1번만 돌려도됩니다.
트래픽을 많이 필요없죠.


---
#### heroku 설치
~~~
- brew tap heroku/brew && brew install heroku
- heroku login
~~~

#### 프로젝트 셋팅
~~~
- heroku create
- commit your code
- git push heroku master
~~~

위와 같이 하면 heroku 프로젝트를 하나 만들 수 있습니다.
[헤로쿠 셋업 참고](https://medium.com/@yoobi55/express-node-js-%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-%EC%84%9C%EB%B2%84%EB%A5%BC-%EB%A7%8C%EB%93%A4%EC%96%B4-heroku%EC%97%90-%EC%98%AC%EB%A6%AC%EB%8A%94-%EB%B0%A9%EB%B2%95-3a5134fc8743)
---
#### 스케줄러

~~~
- node voting_script.js
- heroku run node voting_script.js --app your_app_name
~~~
스케줄러로 스크립트를 실행하기 전에, 먼저 잘 동작하는지 확인합니다.

그리고 스케줄러 addon을 다운받고, 프로젝트에 add합니다.

![image.png](https://files.steempeak.com/file/steempeak/jacobyu/1eEGHulO-image.png)

http://www.modeo.co/blog/2015/1/8/heroku-scheduler-with-nodejs-tutorial

![스크린샷 20190621 오후 9.38.45.png](https://files.steempeak.com/file/steempeak/jacobyu/cbomXJ89-E18489E185B3E1848FE185B3E18485E185B5E186ABE18489E185A3E186BA202019-06-2120E1848BE185A9E18492E185AE209.38.45.png)

감사합니다.

- - -

This page is synchronized from the post: ['Heroku (헤로쿠) 스케줄러 with javascript (10분에 1번 Hello 출력,  1일 보팅 1회)'](https://steemit.com/@jacobyu/heroku-with-javascript-10-1-hello-1-1)
