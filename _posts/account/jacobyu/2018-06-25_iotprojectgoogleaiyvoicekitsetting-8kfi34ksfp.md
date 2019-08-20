
---
title: '[IoT Project] Google AIY Voice Kit Setting'
permlink: iotprojectgoogleaiyvoicekitsetting-8kfi34ksfp
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-06-25 08:45:03
categories:
- steempress
tags:
- steempress
- jjangjjangman
- kr-dev
- busy
- kr-study
thumbnail: 'http://45.76.217.116/wordpress/wp-content/uploads/2018/06/i18n_수정_한국어.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<h4>AIY Voice Kit 셋팅 관련 기록</h4>

[AIY Voice Kit 활용](https://busy.org/@jacobyu/iot-project-google-aiy-voice-kit)이라는 글에서 AIY Kit의 하드웨어, 소프트웨어를 셋팅하였습니다.

주요 소자들을 끼고 박스에 잘 넣은 다음,

Google AIY Project에서 제공해주는 라즈비안 OS 이미지를 SD카드에 넣어줍니다.

이제 추가적으로 필요한 여러 셋팅들을 설치해야하는데요.

제가 라즈베리파이에 여러가지 셋팅한 것을 기록해놨습니다.

많은 도움이 됐으면 좋겠습니다!

<hr />

<h4>라즈베리파이 카메라를 이용한 사진 촬영</h4>
<ul>
 	<li>raspistill -w 1640 -h 922 -o image.jpg</li>
 	<li>raspistill -o image.jpg -hf -vf -w 320 -h 240 //상하반전</li>
</ul>

<hr />

<h4>AIY Voice Kit 한국어 설정</h4>
/home/pi/AIY-projects-python/src/aiy/i18n.py

_DEFAULT_LANGUAGE_CODE = 'ko-KR' 로 바꾼다.

<img class="alignnone size-full wp-image-63" src="http://45.76.217.116/wordpress/wp-content/uploads/2018/06/i18n_수정_한국어.png" alt="" width="633" height="280" /><br/>
<ul>
 	<li><del>한국어 설정을 해도 구글 어시스턴트 핫키는 안되는 것 같다. 확인 해보기</del></li>
</ul>
<h4>raspberry pi 한국어 설치</h4>
sudo apt-get install ibus ibus-hangul fonts-unfonts-core

<hr />

<h4>Raspberrypi 화면 설정</h4>
sudo nano /boot/config.txt

VNC로 접속을 할 때, 적절한 해상도를 설정하지 않으면 불편하다.

hdmi_mode=16 --&gt; 1080p

<img class="alignnone size-full wp-image-66" src="http://45.76.217.116/wordpress/wp-content/uploads/2018/06/디스플레이설정.png" alt="" width="643" height="145" /><br/>

<hr />

<h4>Text to speech 설치</h4>
text to speech를 하는 여러가지 방법이 있다.
<h5>1. Google cloud text to speech</h5>
<ul>
 	<li>voice에 대한 여러 설정이 가능하다.</li>
 	<li>아직 한국어는 여성음성만 된다. (Male로 설정해봤으나 안됨.)</li>
 	<li>400만 쿼리 요청에 대해 무료</li>
 	<li>인증키 발급 필요하다.</li>
</ul>
설치 방법
<ul>
 	<li>pip3 install --upgrade google-cloud-texttospeech</li>
 	<li>pip3 uninstall protobuf</li>
 	<li>sudo pip3 install protobuf==3.5.2</li>
 	<li>sudo apt-get install mpg321</li>
</ul>

![image.png](https://ipfs.busy.org/ipfs/QmbxzMW4zJyyt1ECMVyRzTZbe1KsSfVwGYnGdqMJQPAmzY)


<h5>2. Google speech</h5>
<ul>
 	<li>google에서 제공하는 서비스</li>
 	<li>따로 인증키가 필요없음</li>
 	<li>무료임</li>
 	<li>한국어 지원됨</li>
</ul>
설치 방법
<ul>
 	<li>sudo pip3 install google_speech</li>
 	<li>sudo apt-get install sox libsox-fmt-mp3</li>
</ul>
<img class="alignnone size-full wp-image-69" style="font-size: 19px; font-weight: 900;" src="http://45.76.217.116/wordpress/wp-content/uploads/2018/06/google-text-to-speech.png" alt="" width="285" height="135" /><br/>
<h5>3. AIY Kit 자체 지원</h5>
<ul>
 	<li>aiy.audio.say('Hello')</li>
 	<li>한국어 지원 X</li>
</ul>

<hr />

<h4>자동 실행</h4>
<ul>
 	<li>sudo nano /etc/systemd/system/assist.service</li>
 	<li>sudo systemctl enable assist.service</li>
 	<li>sudo systemctl start assist.service</li>
</ul>
<img class="alignnone size-full wp-image-70" src="http://45.76.217.116/wordpress/wp-content/uploads/2018/06/자동실행.png" alt="" width="563" height="286" /><br/>

<hr />

<h4>Github 코드 업데이트</h4>

https://github.com/passionbull/J-bot

이 저장소에서 확인하실 수 있습니다.

- - -

This page is synchronized from the post: ['[IoT Project] Google AIY Voice Kit Setting'](https://steemit.com/@jacobyu/iotprojectgoogleaiyvoicekitsetting-8kfi34ksfp)
