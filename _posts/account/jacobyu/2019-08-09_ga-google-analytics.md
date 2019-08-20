
---
title: '스팀코인판, 하루에 몇 명 들어올까, GA(google analytics) 라이브러리 조사'
permlink: ga-google-analytics
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-08-09 13:23:24
categories:
- sct
tags:
- sct
- sct-kr
- sct-freeboard
- kr-dev
- zzan
- jjm
- kr
thumbnail: 'https://files.steempeak.com/file/steempeak/jacobyu/1uL72Y8O-image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


안녕하세요.

꾸준히 글을 쓰고싶었습니다. 
스팀코인판 개발이야기라던가, 글을 써보고 싶은데..
어렵당..

어려운 이유는 뭔가 좋은내용을 적어야하는데..
좋은 글을 쓰는 연습이 안돼있습니다. 
연습연습!!

---

이번엔 google analytics (GA)에 대해 적어볼까합니다.

하루에 몇명이나 방문했는지 우리 스팀코인판에 표시하고 싶었습니다.
어떻게 표시할 수 있을까? GA의 정보를 어떻게 띄울수 있지? 검색해봤습니다.

---


#### 1. nodejs로 관리자페이지 만들기
* https://github.com/guruahn/get-google-analytics-data-by-nodejs

음.. 이건 좋은데, 스팀코인판에 적용하기 힘듭니다.
왜냐하면, 이건 구글 관리자 계정이 있어야지만 사용가능한 접근법입니다. 그래서 패스..
제가 원하는건 로그인 안하고, 인증없이, 그냥 하루 몇명왔나를 보고 싶을 뿐입니다.

----

#### 2. ga super-proxy
* https://developers.google.com/analytics/solutions/google-analytics-super-proxy

후.. 이게 아마 제가 찾는 것과 가장 유사합니다.
프록시 서버를 하나 만들어서, 여기서 GA의 정보를 api로 만들어서 아무나 볼 수 있게 해주는 것이죠.
이걸보니, 구글앱엔진으로 ga에 주기적으로 접근하고, api를 발행하는 그런 역할을 하는 서버를 만드는거죠.
다행히, 제가 직접 다 만들필요없이 구글이 해놓은거 그냥 써! 라고 하지만, 구글앱엔진에 하나 새로만드는게 부담스럽고, 호출양이 많아지면 또 돈내라고 할텐데.. 

구글앱엔진의 비용이 걱정돼서 포기!

---

#### 3. 리액트 GA
* https://github.com/react-ga/react-ga

찾았다! 이거면 스팀코인판에 적용할 수 있을것 같습니다.
리액트를 위한 구글 애널리틱스라고 합니다. 한번 로컬에서 테스트해보고
하루방문자수도 옆에 딱! 띄우고 싶군요.

----

참고하면 좋은 것

#### api 익스플로러
ga에서 원하는 값을 가져오기 전에, 여기서 파라미터를 체크해볼 수 있습니다.

* https://ga-dev-tools.appspot.com/account-explorer/
* https://ga-dev-tools.appspot.com/query-explorer/

![image.png](https://files.steempeak.com/file/steempeak/jacobyu/1uL72Y8O-image.png)

![image.png](https://files.steempeak.com/file/steempeak/jacobyu/7ENeflr4-image.png)

오늘은 343명이 실 사용자인데요.  이 의미는 제가 하루에 여러번 방문해도 1명만 카운트 된다는 의미입니다.

그리고 다른 데이터를 보면 평균적으로 1명당 2번정도 들어옵니다.

더 늘리고 싶어요! 더더더!!

---

#### 다른이야기, 외부유입, 어떻게 늘릴수있을까?

전 외부유입에 대해서는.. 이렇게 생각해요. 

1) 어떻게 하면 사용자가 우리 커뮤니티에 들어오게 할 수 있을까?
2) 어떻게 하면 사용자가 오랫동안 우리 커뮤니티에서 놀 수 있을까?

당장 생각나는 해결책은 요거입니다. 
1) 구글 SEO
2) 카테고리 한글화/지역화

----

다음글에서 좀 더 적어보겠습니다.

감사합니다.

- - -

This page is synchronized from the post: ['스팀코인판, 하루에 몇 명 들어올까, GA(google analytics) 라이브러리 조사'](https://steemit.com/@jacobyu/ga-google-analytics)
