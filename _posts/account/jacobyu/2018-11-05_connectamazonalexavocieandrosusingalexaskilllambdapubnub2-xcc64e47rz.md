
---
title: 'Connect amazon alexa vocie and ROS using alexa skill, lambda, pubnub #2'
permlink: connectamazonalexavocieandrosusingalexaskilllambdapubnub2-xcc64e47rz
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-05 15:08:03
categories:
- busy
tags:
- busy
- steempress
- kr-dev
- jjangjjangman
- iot
thumbnail: 'https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-02-18-06-23.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<a href="https://busy.org/@jacobyu/1061-connect-amazon-alexa-and-ros-using-alexa-skill-lambda-pubnub">이전글</a>에서는 아마존 에코와 로봇을 연결하기 위한 셋업에 대해 설명을 했습니다.

이번 글에서는 실제 적용한 것을 보여드리겠습니다.

감사합니다.

<hr />

#1에서 만든 alexa skill set을 실제로 에코 스피커에 적용을 해봤다.

에코에 적용을 하는 것은 생각보다 간단했다.

먼저 에코가 다른 사람이 쓰던 거라서 초기화를 했다.

다음으로 alexa skill을 만든 계정으로 에코를 세팅을 한다.

그러면 자동으로 내가 개발한 skill이 스피커에 적용이 된다.

<img class="alignnone wp-image-1078" src="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-02-18-06-23.png" alt="" width="925" height="537" /><br/>

<hr />

위에 사진에서 왼쪽의 웹페이지는 가상 알렉사 스피커이다.

나는 스피커에게 이렇게 말했다.
<ol>
 <li>Start fiona application</li>
 <li>come here</li>
 <li>go to ryan</li>
</ol>

---

1번을 통해 나의 skill을 활성화 시켰다.

2번을 말하면 로봇이 내 자리로 온다.

3번은 go to {person/place}, 특정 사람에게 이동할 수 있도록 한다.

왼쪽의 웹페이지에서 동작한 것처럼 실제로 에코에서도 똑같이 동작한다.

<hr />

<h2>Alexa skill</h2>
Alexa skill에 대해 깜빡하고 말하지 않았던 것 같다.

Alexa skill은 아마존 에코 스피커에 적용되는 앱이다.

예를 들어, 우리는 스마트폰에 여러 애플리케이션을 설치한다.

전화를 하기 위해서는 전화앱, 채팅을 하기 위해서는 카카오톡, 라인을 쓴다.

그런것 처럼 아마존 에코 (스마트 스피커)에도 애플리케이션이 있다.

그걸 Alexa skill (알렉사 스킬)이라고 부른다.

작성자는 스피커에 로봇이랑 통신을 할 수 있는 하나의 앱을 만든 것이다.

<h2>장점</h2>
원격에서 로봇을 제어할 수 있다는 것에 장점이 있다.

**단순히, 원격 제어가 아니라 원격에서 음성으로 제어할 수 있다는 것이다.**

음성처리에 대해 깊이있게 알지 않아도 충분히 활용 가능하다.

엄청난 장점이다.

모든 것을 개발할 필요 없고, 기존에 있는 알렉사, pubnub을 통해 원격 제어 기능을 추가한다.

예를 들어, 로봇이 10대가 있다. 그리고 스피커가 5개가 있다.

사람들이 각각 스피커에 말한다.

Jacob: A 로봇 이리로 와줘

Frankie: B 로봇 저리로 가줘

Maria: 불 꺼줘

<h2>단점</h2>
에코를 활용해서 로봇에 명령을 할 수는 있다.

하지만, 대기시간이 짧다.

무슨 말이냐면

실제로 로봇에게 명령을 위해서는 다음의 과정이 필요하다.

Fiona application이 내가 만든 skill이다.
<ul>
 <li>Hey Alexa</li>
 <li>Start Fiona application</li>
 <li>help me</li>
</ul>
3개의 과정을 통해서 로봇에게 명령을 할 수 있다.

명령을 한 후, 10초 이내에 또 말을 하지 않으면

alexa는 꺼진다. 그러면 다시 3개의 과정을 거쳐서 로봇에게 명령을 해야한다.

<hr />

프라이버시 문제 때문에 계속 듣도록 하지는 않은 것 같다.

하지만 귀찮다.

그래도 쉽게? 연결을 해볼 수 있다는 점에서 시도해볼만하다.

<hr />

<h2>로봇에게 명령 할만한 것</h2>
어떤 로봇이냐에 따라 다르겠지만..
<ol>
 <li>사진 찍어줘 (Take a photo)</li>
 <li>너 앞에 있는게 뭐니? (What is in front of you?)</li>
 <li>오른쪽 봐 (watch your right side)</li>
 <li>왼쪽 봐 (watch your left side)</li>
 <li>어디로 이동 해.</li>
</ol>
정도로 해봐야 겠다.

<hr />

<h2>실행 방법</h2>
git clone https://github.com/passionbull/alexa-ros-python-pubnub

cd path_git

python ros_pubnub_sample.py

<h2>동영상</h2>
개발 중인 네비게이션 시스템에 echo를 적용해봤다.

원격에서도 로봇을 제어할 수 있다.

아래 동영상은 echo 시뮬레이션으로 로봇을 제어하는 영상이다.

에코 시뮬레이션과 실제 에코는 동일한 답변과 동작을 한다.

단지 컴퓨터에서 동작하는 것인가, 아니면 스피커에서 동작하는 것인가만 다르다.

https://www.youtube.com/watch?v=Sb3DTIIP6jI

이 동영상은 실제 에코를 활용하여 로봇을 제어하는 영상이다.

개인 사정으로 비공개로 바꾸었다. 

https://www.youtube.com/watch?v=ztoohhNwR2g

아래 동영상은 사람이 에코에 말을 하면 로봇이 물고기 먹이를 주는 영상이다.

잘만들었다.

https://youtu.be/JKf8pmEVnxQ

<h2>결론</h2>
알렉사는 내가 로봇들을 말만하면 원하는대로 움직일 수 있게 해줬다.
마치, 토니스타크가 아이언맨 여러 대를 제어한 것처럼 말이다.
멋진 기술들이다.

감사합니다. <br /><center><hr/><em>Posted from my blog with <a href='https://wordpress.org/plugins/steempress/'>SteemPress</a> : https://passionbull.net/2018/11/robot/connect-amazon-alexa-vocie-and-ros-using-alexa-skill-lambda-pubnub-2-2/ </em><hr/></center> 

- - -

This page is synchronized from the post: ['Connect amazon alexa vocie and ROS using alexa skill, lambda, pubnub #2'](https://steemit.com/@jacobyu/connectamazonalexavocieandrosusingalexaskilllambdapubnub2-xcc64e47rz)
