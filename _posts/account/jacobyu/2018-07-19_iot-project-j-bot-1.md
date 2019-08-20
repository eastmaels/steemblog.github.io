
---
title: '[IoT Project] J-bot 외형 제작 과정 #1'
permlink: iot-project-j-bot-1
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-07-19 16:47:51
categories:
- kr-dev
tags:
- kr-dev
- jjangjjangman
- busy
- kr-arduino
- kr
thumbnail: 'http://45.76.217.116/wordpress/wp-content/uploads/2018/06/그림2.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


안녕하세요. 제이콥입니다.

오늘은 J-bot의 외형 제작 준비 과정을 적어봤습니다.

준비 과정을 작성하기에 앞서, J-bot에 대한 소개부터 하겠습니다. 

#### 간단한 소개

J-bot은 Jacob`s robot으로, 제가 상상해왔던 모든 것을 적용해볼 로봇입니다.

J-bot은 누구나 직접 만들 수 있는 로봇을 꿈꾸고 있습니다.

그리고 소프트웨어에 집중을 하고 싶어, <strong>google AIY voicekit</strong>를 기반으로 시작하
였습니다.

한 마디로 표현하자면 <strong>DIY Smart Robot using google AIY voicekit </strong>입니다.

현재 J-bot의 기능은 아래와 같습니다.

<ul>
 	<li>Google assistant와 연동 (날씨 체크, 주가 확인, 캘린더 등록)</li>
 	<li>사진 촬영</li>
 	<li>말을 할 때, 로봇팔을 흔든다.</li>
 	<li>로봇 가까이 손을 두면 로봇팔을 흔든다.</li>
</ul>

앞으로 개발할 기능이 무궁무진합니다.

* 비서로서의 역할 (날씨 정보 제공, 캘린더 등록)
* 스팀잇과의 연동 고려 (스팀 최신 글 읽어주기, 음성으로 보팅 명령하기[스팀잇 챗봇 강좌](https://busy.org/@willpark/5))
    * @willpark님 스팀잇 챗봇 글을 보고 연동하면 좋겠다 생각했습니다.
* 주변의 여러 IoT 제품을 제어 (불 키고 끄기)
* 감시 시스템 & 알림

#### 외형을 만들자

이전 글을 보신분들은 아시겠지만, J-bot의 외형은 아직 준비되지 않았습니다.

기능들도 중요하지만 보여지는 것도 중요하기 때문에 먼저 외형을 제작할 것입니다.

먼저, 다른 사람들은 어떻게 외형을 만들었나 살펴봤습니다.

<a href="https://www.thingiverse.com/search?q=aiy+voice+kit">Thingiverse - AIY voicekit의 검색 결과</a>

Thingiverse라는 사이트는 3d printing 파일을 서로 공유하는 사이트 입니다.

여기서 검색을 해보니 몇몇 사람들이 3d printing을 이용해서 voicekit의 외형을 아래처럼 만들었습니다.

<img class="alignnone wp-image-146" src="http://45.76.217.116/wordpress/wp-content/uploads/2018/06/그림2.png" alt="" width="563" height="212" />

저도 위의 외형들을 참고해서 만들고자 합니다.

<hr />

#### 설계 준비

예전에 sketchup이라는 툴을 사용해본적이 있는데 이것으로 설계할 예정입니다.

J-bot은 1번 고양이 형태에다가 눈에는 초음파 센서를, 코에는 카메라를 부착할 것입니다.

기존에 설계된 파일을 무료로 다운받을 수 있어서 그 파일에서 시작했습니다.
https://www.thingiverse.com/thing:2783658

그림에서 살짝 앞으로 튀어나온 눈과 코를 볼 수 있는데, 보기 쉽게 일단 저렇게 튀어나오게 해놨습니다.

그 부분에 구멍을 뚫고, 초음파 센서와 카메라를 부착합니다.

옆에는 스팀 그림도 넣을 것 입니다.
<img class="alignnone  wp-image-160" src="http://45.76.217.116/wordpress/wp-content/uploads/2018/06/설계파일.png" alt="" width="459" height="360" />

#### 3d printing 하기

서울에서 무료로 3d printer를 사용할 수 있는곳이 어딘지 찾아봤는데

수원에 <strong>시제품 제작터</strong>가 있더군요.

http://www.mss.go.kr/site/gyeonggi/03/10302010000002016110903.jsp

전화해서 확인 해봤는데 현재도 운영 중입니다.

이 곳에 가서 만들 예정입니다.

체크해야할 것이 있는데 다시 전화를 해볼 예정입니다.
<ul>
 	<li>stl파일을 sd카드에 담아가면 되는지? (체크 필요)</li>
 	<li>운영시간에 무료로 사용 가능</li>
 	<li>3d printing 필라멘트 개인 구매, 혹은 시제품 제작터에서 산다.</li>
</ul>

#### 끝맺음

로봇의 외형 제작을 위한 과정을 적어봤는데요.

기존에 사람들이 해놓은 3d 모델을 기반에 살을 붙여서 만들 예정입니다.

본격적으로 외형을 설계를 해볼 것이며, 시제품제작터에 가서 외형을 제작할 것입니다.

이번에 여행을 다녀오면서 프로젝트 진행을 많이 못했습니다.

꾸준히 개발하면서 내용을 공유하고 싶습니다.

감사합니다.

#### 이전 작성글
* [[IoT Project] AIY 에 대해 알아보자](https://steemit.com/kr/@jacobyu/aiy-ai-for-diy)
* [[IoT Project] IoT가 무엇인가?](https://steemit.com/kr-dev/@jacobyu/iot)
* [[IoT Project] Google AIY Voice Kit 활용기](https://steemit.com/kr-dev/@jacobyu/iot-project-google-aiy-voice-kit)
* [[IoT Project] Google AIY Voice Kit Setting](https://steemit.com/steempress/@jacobyu/iotprojectgoogleaiyvoicekitsetting-8kfi34ksfp)
* [[IoT Project] 나만의 비서 로봇, J-bot 만들고 있습니다.](https://steemit.com/kr-dev/@jacobyu/iot-project-j-bot)
* [[IoT Project] 아두이노와 라즈베리파이 간의 시리얼 통신](https://steemit.com/kr-dev/@jacobyu/iot-project)

- - -

This page is synchronized from the post: ['[IoT Project] J-bot 외형 제작 과정 #1'](https://steemit.com/@jacobyu/iot-project-j-bot-1)
