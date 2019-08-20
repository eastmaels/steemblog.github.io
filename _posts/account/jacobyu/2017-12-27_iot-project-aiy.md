
---
title: '[IoT Project] AIY를 위한 라즈베리파이 셋팅'
permlink: iot-project-aiy
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-27 14:49:42
categories:
- kr-dev
tags:
- kr-dev
- kr-study
- jiwon23
- kr-ai
- kr-iot
thumbnail: 'http://128.134.57.131/wordpress/wp-content/uploads/2017/12/캡처2-300x247.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


나만의 인공지능 스피커 만들기를 시작해보려고 합니다.

셋팅 과정에 대해서는 간단히 작성하였습니다.
궁금하신게 있다면 댓글을 달아주세요.

실제로 설치하고 셋팅하는 과정은 링크들을 모두 첨부해놨으니
그것을 참고해서 셋팅을 해주세요!

준비물은 아래와 같습니다.
<ul>
 	<li>라즈베리파이 3 B+ (wifi와 BT 내장)</li>
 	<li>사운드 어답터</li>
 	<li>마이크</li>
 	<li>스피커</li>
 	<li><strong>공유기 (모니터, 키보드, 마우스를 라즈베리파이에 연결하기 싫어서!!!)</strong></li>
</ul>
참고할 링크는 아래와 같습니다.
<ul>
 	<li>https://aiyprojects.withgoogle.com/voice/#project-overview</li>
 	<li>https://hackaday.com/2017/05/30/diy-google-aiy/</li>
</ul>

<hr />

<h5>Download OS!!</h5>
보통 라즈비안을 다운로드 받지만, 구글에서 제공해주는 AIY를 위한 os를 다운받자.
미리 얘네들이 자기들 환경을 위해 셋팅을 해놨을 거다.

<a href="https://aiyprojects.withgoogle.com/voice/#assembly-guide-1-get-the-voice-kit-sd-image">https://aiyprojects.withgoogle.com/voice/#assembly-guide-1-get-the-voice-kit-sd-image</a>
<ul>
 	<li>아래 링크에서 이 프로그램을 다운 받는다.
<a href="https://sourceforge.net/projects/win32diskimager/">https://sourceforge.net/projects/win32diskimager/</a>위에서 받은 os-image를 아래 링크의 프로그램을 이용해서 sd-card에 넣고, write를 한다.</li>
 	<li>처음에 ssh접속을 위해서는 아래와 같은 과정이 필요하다.
ssh라는 새 파일을 만들어서, sdcard에 넣어준다. --&gt; ssh 접속을 위해서
<a href="https://www.youtube.com/watch?v=fi0XO_S2zwE">https://www.youtube.com/watch?v=fi0XO_S2zwE</a> (solve putty connection)</li>
 	<li>라즈베리파이에 꽂는다.
http://blog.xcoda.net/82</li>
</ul>

<hr />

<h5>Download putty</h5>
PUTTY는 라즈베리파이에 원격접속을 위한 프로그램이다.
<a href="https://putty.ko.softonic.com/">https://putty.ko.softonic.com/</a>

주의할 점은 컴퓨터와 라즈베리파이를 연결하기 위해서는

<strong>같은 네트워크 안에 있어야 한다.</strong>

쉽게 말하면, 같은 wifi를 잡고 있어야 한다.

<hr />

<h5>Rasberrypi config</h5>
raspi-config에 들어가서
<ul>
 	<li>time</li>
 	<li>ssh</li>
 	<li>vnc</li>
 	<li>id</li>
 	<li>passwd 등을 수정해준다.</li>
</ul>

<hr />

<h5>Wifi Connection</h5>
아래 링크의 설명대로 한다.
http://webnautes.tistory.com/903

짜잔!!

google에서 제공하는 OS이미지를 쓰면 아래 폴더 목록이 나오며,
wlan0으로 wifi를 잡았다.

아래와 같이 셋팅을 했다면 준비는 다 된것이다. 와아아아

<img class="alignnone size-medium wp-image-601" src="http://128.134.57.131/wordpress/wp-content/uploads/2017/12/캡처2-300x247.png" alt="" width="300" height="247" />

<hr />

<h5>목차</h5>
<ul>
 	<li><a href="https://steemkr.com/kr-dev/@jacobyu/iot">IoT가 무엇인가?</a></li>
 	<li><a href="https://steemkr.com/kr/@jacobyu/aiy-ai-for-diy">AIY 에 대해 알아보자</a></li>
 	<li><a href="https://steemit.com/kr-dev/@jacobyu/iot-project-aiy">AIY를 위한 라즈베리파이 셋팅</a></li>
 	<li>라즈베리파이가 무엇인가?</li>
 	<li>AIY 내부 탐구</li>
</ul>
&nbsp;

위와 같은 순서로 작성해보려고 합니다.

읽어주셔서 감사합니다.

- - -

This page is synchronized from the post: ['[IoT Project] AIY를 위한 라즈베리파이 셋팅'](https://steemit.com/@jacobyu/iot-project-aiy)
