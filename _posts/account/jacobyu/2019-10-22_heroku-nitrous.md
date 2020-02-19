
---
title: '[개발] heroku에서 nitrous 동작시키기'
permlink: heroku-nitrous
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-10-22 16:04:48
categories:
- sct
tags:
- sct
- sct-kr
- sct-dev
- busy
- kr
- kr-dev
- zzan
thumbnail: None
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

아직 공개하지않았지만, 스팀코인판 내부적으로 열심히 개발하고 있는 기능이 있습니다. 가끔보면 애플이나 삼성이나 정보유출되는 경우가 있지 않습니까? 왜 유출되는지 이해할 수 있을것 같습니다. 개발한걸 말해주고 싶은데 참고있으니 얼마나 답답하겠나 싶습니다. 

아무튼!
지금하고있는 개발을 보여줄정도가 된다면 글로 소개할게요. 
홍보소각도 하고요. ㅎㅎ

---

### heroku에서 nitrous 동작시키기

heroku 짱입니다. 예전에는 heroku에서 특정시간마다 스크립트가 동작하도록 설정한 적이 있었는데요. 이것 말고도 heroku 위에서 서버를 돌린다던가, 웹페이지를 돌린다던가, 파이썬을 돌린다던가 이것저것 돌려볼 수 있습니다.

(https://jacobyu.net/heroku-with-javascript-10-1-hello-1-1/)


쉽게 설명하자면, 컴퓨터에서는 여러프로그램 이것저것 돌릴 수 있지않습니까? 히로쿠는 여러프로그램 중에 1개를 원격으로 동작시켰다고 보면됩니다.

@anpigon님이 히로쿠에서 nitrous 배포하기에 대해 아주 친절하고 자세하게 작성해주셨습니다.  (https://busy.org/@anpigon/nitrous)

히로쿠에서 nitrous 동작시키는걸 그대로 따라해봤습니다. 나중에 제 글에서 찾기가 좋을 것 같아 따라한 걸 그대로 적어봅니다.

### Step by Step

#### 로그인 및 heroku 프로젝트 만들기
이걸 니트로스 프로젝트 안에서 한다.
`   heroku login `
`   heroku create project-name`
 ` heroku container:login`

#### 빌드 및 배포

빌드하고 배포한다.
  ` heroku container:push web`
 `   heroku container:release web`
 `  heroku open`

#### 코드를 수정하고 다시 배포

기존에 있던 프로젝트 가져오기
`heroku git:remote -a project-name`

위와 같이 반복한다.
 `  heroku container:push web`
 `  heroku container:release web`
 `  heroku open`


안피곤님 덕분에 쉽게 니트로스 사이트를 배포해봤군요. 감사합니다.

* https://devcenter.heroku.com/articles/container-registry-and-runtime
* https://busy.org/@anpigon/nitrous

- - -

This page is synchronized from the post: ['[개발] heroku에서 nitrous 동작시키기'](https://steemit.com/@jacobyu/heroku-nitrous)
