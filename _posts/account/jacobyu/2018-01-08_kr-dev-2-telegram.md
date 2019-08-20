
---
title: '[kr-dev] 최신글 알림 서비스 #2 (Telegram Bot 소개)'
permlink: kr-dev-2-telegram
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-08 12:41:33
categories:
- kr-dev
tags:
- kr-dev
- busy
- jiwon25
- kr
- kr-newbie
thumbnail: 'https://lh3.googleusercontent.com/-Idl_uaei_QA/Vva0N68LnPI/AAAAAAAAGR4/lLUM4oxK21g/Telegram-Bot_thumb%25255B3%25255D.jpg?w=240'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


안녕하세요.

저는 최근 호기심이 생겨 최신글 알림 서비스를 개발하고 있습니다.

<strong>목적은 특정 태그, 특정 유저의 최신 글이 작성 되었을 때,
알림이 오도록 하는 것 입니다.</strong>

첫번째, 카카오톡으로 알림 서비스를 받으면 좋았으나 유료 서비스라 패스하였습니다.

두번째, 직접 어플을 만들자니 배보다 배꼽이 더 큰 상황이라..

<hr />

<h4><strong>해결책은 Telegram을 활용한 알림 서비스</strong></h4>
<img src="https://lh3.googleusercontent.com/-Idl_uaei_QA/Vva0N68LnPI/AAAAAAAAGR4/lLUM4oxK21g/Telegram-Bot_thumb%25255B3%25255D.jpg?w=240" alt="telegram bot에 대한 이미지 검색결과" />

Telegram은 공식적으로 python-telgegram-bot 관련 라이브러리를 제공하고 있으며,

이를 이용해서 쉽게 알림 서비스를 만들 수 있을 것입니다.

Telegram의 장점은 아래와 같습니다.
<ul>
 	<li>무료다.</li>
 	<li>API가 제공된다.</li>
 	<li>카카오 플러스 친구 같은 것을 만들 수 있다.</li>
 	<li><strong>**스팀잇 뿐만 아니라 알림을 받고 싶은 서비스에 활용할 수 있다.**</strong>
<ul>
 	<li>ex) 추후 제가 개발하고 싶은 홈서비스 로봇에도 사용할 수 있을것으로 기대합니다.</li>
 	<li>집에 불을 키고 나왔거나 집에 손님이 방문했을 때, 그것을 인식하고 Telegram을 통해서 알림을 받는다던가!</li>
</ul>
</li>
</ul>
서론이 길었지만.. Telegram Great!
<h4><strong>Telegram 설치 및 활용 과정</strong></h4>
순서대로 진행하겠습니다.

1. Bot Father에게 Bot을 생성해달라고 요청해야합니다.

<hr />

Bot은 아래 설명한 것과 같습니다.
<ul>
 	<li>사용자로부터 무언가 입력을 받거나 사용자에게 알림을 보내기 위해서는 봇이라는게 필요합니다.</li>
 	<li>쉽게 설명하자면, 우리가 만드는 것이 카카오 플러스 친구입니다.</li>
 	<li><a href="https://bakyeono.net/post/2015-08-24-using-telegram-bot-api.html">봇 파더에게 생성 요청</a> - 이 글이 전반적으로 설명을 참 잘했습니다.</li>
</ul>
Bot Father로부터 Bot을 생성했다면 반은 끝났습니다.

<hr />

2. python-telegram-bot 라이브러리 설치

sudo pip install python-telegram-bot만 하면 끝!

<img class="" src="https://cdn.mirror.wiki/http://38.media.tumblr.com/tumblr_lz412ce5BK1r2yonh.jpg" alt="백종원 참 쉽죠에 대한 이미지 검색결과" width="264" height="251" />

3. 사용자에게 메시지 보내기

아래 코드를 보면 Bot father에게 받은 telegramKey를 이용해서 Bot 객체를 만듭니다.

self.telegramBot = telegram.Bot(token=telegramKey)

그 다음에 메시지를 보내고 싶을 때, sendMessage함수를 사용하면 됩니다.

<strong>예를 들어, 새로운 글이 감지 되었을 때, sendMessage를 보내면 되는겁니다!</strong>

<img class="alignnone wp-image-653 size-full" src="http://128.134.57.131/wordpress/wp-content/uploads/2018/01/캡처3.png" alt="" width="902" height="199" />

4. 사용자의 입력에 따른 피드백

이제 사용자로부터 입력을 받고 그에 따른 동작을 해야할 때 사용하는 함수인데요

간단히 설명드리면 Handler와 Callback method, 그리고 Handler를 관리하는 dispatcher가 있습니다.
<ul>
 	<li>Handler는 특정 Command나 메시지가 왔을 때, 특정 함수를 실행하도록 설정합니다.</li>
</ul>
41번째 줄로 설명하면 'start'라는 신호가 오면 start함수를 실행하라는 의미입니다.
<ul>
 	<li>Callback method는 이 때 실행되는 start 함수를 말합니다.</li>
 	<li>dispatcher는 여러 개의 handler를 관리하는 애를 말합니다.</li>
</ul>
<img class="alignnone size-full wp-image-654" src="http://128.134.57.131/wordpress/wp-content/uploads/2018/01/캡처43.png" alt="" width="840" height="505" />

<hr />

<h4>결론</h4>
결론은 위에 4단계를 쭉 따라오면 원하는 Telegram 서비스를 만들 수 있다고 생각합니다.

코드는 아래와 같이 공개를 하였고요! 참고하세요 ㅎㅎ

<a href="https://github.com/passionbull/steemit-alarm-posting">https://github.com/passionbull/steemit-alarm-posting</a>

<hr />

제가 만든 최신글 알림 서비스는 현재 위의 기능들을 활용해서 아래와 같이 동작합니다.

현재 DB랑 연결하는 부분을 안만들어서 개인용입니다..

이제 해야할 부분은 사용자들이 원하는 태그 및 특정 유저를 선택하면 그것을 DB에 저장하고

서비스에서 DB를 읽어와 최신글 검출 및 메시지 발송을 해야합니다.

생각되는 문제는 저 혼자 쓰는데는 문제가 없으나,

사람들이 많아질 경우 제 서버 (오드로이드-XU4)가 버틸 수 있을지 모르겠네요 ㅜㅜ


<img class="alignnone size-medium wp-image-655" src="http://128.134.57.131/wordpress/wp-content/uploads/2018/01/KakaoTalk_20180108_213759024-169x300.jpg" alt="" width="169" height="300" /> <img class="alignnone wp-image-656 size-medium" src="http://128.134.57.131/wordpress/wp-content/uploads/2018/01/KakaoTalk_20180108_213759705-169x300.jpg" alt="" width="169" height="300" />

궁금한 것이 있으면 물어보세요!

제안, 조언 등 언제든 환영입니다.

글이 많이 긴데 읽어주셔서 감사합니다!

<hr />

<strong>Reference</strong>

기존에 있는 스팀잇 Telegram 서비스를 찾아봤는데요.
<ul>
 	<li>@clayop
<ul>
 	<li>https://steemkr.com/kr/@isaaclab/clayop-steemit-telegram</li>
 	<li>https://steemit.com/ko-general/@clayop/--noteefi</li>
</ul>
</li>
 	<li>@ludorum
<ul>
 	<li>https://steemit.com/steemchatbot/@ludorum/steem-mentions-steemchatbot-v0-1-0</li>
</ul>
</li>
</ul>
@clayop, @ludorum, 외국 개발자님이 개발한 것도 있었는데 기억이 안납니다.

clayop님의 noteefi가 제가 목표하던 알림 서비스더군요.
Telegram 서비스를 운영하고 있지는 않으신 것 같습니다.

ludorum님의 챗봇은 언급됐을 때, 알림이 오는 서비스입니다.

----

기존 서비스가 다시 가동된다면 제 서비스는 필요없을 수 있으나,

처음으로 스팀잇 라이브러리도 써보고, Telegram 봇도 개발해보고

많이 공부가 되었습니다.

- - -

This page is synchronized from the post: ['[kr-dev] 최신글 알림 서비스 #2 (Telegram Bot 소개)'](https://steemit.com/@jacobyu/kr-dev-2-telegram)
