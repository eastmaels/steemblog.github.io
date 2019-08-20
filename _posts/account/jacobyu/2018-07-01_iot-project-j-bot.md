
---
title: '[IoT Project] 나만의 비서 로봇, J-bot 만들고 있습니다.'
permlink: iot-project-j-bot
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-07-01 16:09:00
categories:
- kr-dev
tags:
- kr-dev
- busy
- jjangjjangman
- kr-arduino
- kr-daily
thumbnail: 'https://ipfs.busy.org/ipfs/Qmcdcqk3LbSR13uUUktQmzaKfU1UvowqtKdzWnaCzUwwtH'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


#### 로봇 소개
오늘 소개할 로봇은 나만의 비서 로봇!

제 이름이 Jacob이라.. 이름은 J-bot이라고 지었습니다.

![image.png](https://ipfs.busy.org/ipfs/Qmcdcqk3LbSR13uUUktQmzaKfU1UvowqtKdzWnaCzUwwtH)

아직은 볼품없지만, 외형도 갖추고 기능도 하나하나 넣다보면

멋진 로봇이 될거라 믿습니다.

----
#### 설명
지난 글들에서 google-aiy-voice-kit 를 구매하고 가지고 논 것으로 글을 썼습니다.
[google-aiy-voice-kit 활용기](https://steemit.com/kr-dev/@jacobyu/iot-project-google-aiy-voice-kit)
[google-aiy-voice-kit 셋팅](https://steemit.com/steempress/@jacobyu/iotprojectgoogleaiyvoicekitsetting-8kfi34ksfp)

이어서 이 로봇도 voice-kit를 활용하여 개발하고자 합니다.

먼저 동영상부터 보시죠!

https://www.youtube.com/watch?v=Xv3_kfhknEM

구현한 기능은 아래와 같습니다.

* Google assistance 연동
* 나만의 명령 수행
* 카메라 촬영
* 초음파 센서로 가까이 오면 로봇 팔 움직이기
* 대답 후에 팔 흔들기

---
#### 구현
하드웨어는 아래와 같이 구성돼있습니다.

* Voice-kit with 라즈베리파이
* 카메라
* Arduino
* 초음파 센서
* 서보모터

![image.png](https://ipfs.busy.org/ipfs/QmQus4YkVaTUqxeQDdE7zMzipZ3cFPjdZkQsAH6CCeTN3t)

코드는 아래와 같습니다.

* main.py
* serial_comm.py : arduino와 serial 통신 하는 부분
* vision.camera.py : camera 이미지 가져오는 부분
* vision.face_detector.py : face detector하는 부분, 라즈베리파이에서는 너무 느리다.
* j-bot-arduino : 아두이노에서 모터와 초음파센서를 활용하는 부분

아래 저장소에 업데이트하고 있습니다.
https://github.com/passionbull/J-bot

몇 개 중요한 부분에 대해서만 설명을 하자면..

---

#### PC
PC에서 중요한 부분은 아래의 루프이다.

<pre class="theme:github lang:default decode:true" title="PC code">    with aiy.audio.get_recorder():
        while True:
            status_ui.status('ready')
            print('Press the button and speak')
            button.wait_for_press()
            status_ui.status('listening')
            # text is what I said (speech to text)
            # audio is answer of assistant
            text, audio = assistant.recognize()
            local, answer = local_commands(text)
            if local is False:
                aiy.audio.play_audio(audio, assistant.get_volume())
            sc1.action()</pre>

* 버튼이 눌리고 나서 음성을 인식한다.
* 인식한 음성이 local 명령어인지 체크한다.
* 아니라면 google_assistant의 답변을 재생한다.
* 다음으로 아두이노에게 팔을 흔들라고 명령한다.


---

#### 아두이노
아두이노는 pc로부터 특정 신호를 받을 때, 모터를 제어해야한다.

<pre class="theme:github lang:default decode:true" title="PC code">void setup() {
  Serial.begin(9600);
  leftArm.attach(9);  // attaches the servo on pin 9 to the servo object
  int ultraEvent = timer.every(50, doUltra, (void*)0); //do function per 1sec
  int motorEvent = timer.every(10, doMotor, (void*)0);
  inputString.reserve(200);
  servo_val = 90;
  goal_servo_val = 90;
}</pre>

* 또한, 주기적으로 pc에게 거리 정보와 모터의 각도를 전송한다.
* 아래 코드는 이를 위한 셋업 코드이다.
* timer를 사용하여 주기적으로 모터 제어와, 초음파 센서 거리 측정을 수행한다.
* 시리얼 통신 초기화, PC로부터 데이터를 받는 부분, 보내는 부분 모두 필요하다.


---

#### 계획

* 3D 프린터로 외형 제작
* 로봇 얼굴 달기
* 근처에 사람이 오면, 푸쉬 알림

관심이 있으신 분들은 언제든 환영입니다.

제가 외형 설계에는 좀 약한 부분이라..

혹시나 로봇의 외형을 해보고 싶으신 분들 있다면 너무 좋을것 같아요!

이 로봇을 만들기 위해 필요한 재료는 voice-kit이 전부입니다!

많은 관심 부탁드립니다!!

- - -

This page is synchronized from the post: ['[IoT Project] 나만의 비서 로봇, J-bot 만들고 있습니다.'](https://steemit.com/@jacobyu/iot-project-j-bot)
