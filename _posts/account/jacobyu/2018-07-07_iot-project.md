
---
title: '[IoT Project] 아두이노와 라즈베리파이 간의 시리얼 통신'
permlink: iot-project
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-07-07 13:12:09
categories:
- kr-dev
tags:
- kr-dev
- busy
- jjangjjangman
- kr-arduino
- kr
thumbnail: 'http://45.76.217.116/wordpress/wp-content/uploads/2018/07/그림2.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<img class="alignnone size-full wp-image-111" src="http://45.76.217.116/wordpress/wp-content/uploads/2018/07/그림2.jpg" alt="" width="1526" height="510" />

안녕하세요.

이번 글은 아두이노와 라즈베리파이 간의 시리얼 통신에 대한 글입니다.

먼저, 시리얼 통신이 무엇인지에 대해 설명을 합니다.

그리고 J-bot에서는 시리얼 통신을 활용하였는가? 에 대해 적었습니다.

J-bot이 궁금하신가요? 아래 글들을 읽어보세요.

<a href="https://busy.org/@jacobyu/iot-project-j-bot" target="_blank" rel="noopener">나만의 비서 로봇, J-bot 만들고 있습니다.</a>
<a href="https://busy.org/kr-dev/@jacobyu/iot-project-google-aiy-voice-kit" target="_blank" rel="noopener">google-aiy-voice-kit 활용기</a>
<a href="https://busy.org/steempress/@jacobyu/iotprojectgoogleaiyvoicekitsetting-8kfi34ksfp" target="_blank" rel="noopener">google-aiy-voice-kit 셋팅</a>

아래는 J-bot의 동작 동영상입니다.

https://youtu.be/Xv3_kfhknEM

위 동영상 처럼 손이 가까이 오거나 답변을 한 후 로봇이 팔을 움직이기 위해서

시리얼 통신을 활용하였습니다.


<hr />

#### 시리얼 통신

시리얼 통신은 이종의 보드 간에 데이터를 주고 받는 방법 중 하나입니다.

시리얼 통신을 위해서 필요한 것들에 대해 소개를 하겠습니다.
<ul>
 	<li>Rx, Tx, GND 선 연결
<ul>
 	<li>아두이노는 USB로 연결할 경우, 하드웨어는 따로 생각할 필요없습니다. 준비 끝!</li>
 	<li>아두이노 내부에 칩이 있습니다. 그래서 USB만 연결해도 시리얼 통신을 할 수 있습니다.</li>
</ul>
</li>
</ul>
<ul>
 	<li>보레이트 (Baudrate) 설정
<ul>
 	<li>보레이트는 시리얼 통신의 속도를 말합니다.</li>
 	<li>아두이노와 라즈베리파이 모두 같은 보레이트로 설정해야합니다.</li>
 	<li>9600 bps, 19200 bps, 38400 bps, 115200 bps 등이 있습니다.</li>
 	<li>bps 는 bit per second로 1초에 보낼수 있는 비트 수를 의미합니다.</li>
 	<li>9600bps는 1초에 9600 bit를 보낼 수 있습니다.</li>
</ul>
</li>
 	<li>데이터 포맷
<ul>
 	<li>한 번 데이터를 보낼 때, 아래 그림의 데이터 포맷과 같이 8bit씩 보냅니다.</li>
 	<li>만약 "hello"라는 텍스트를 시리얼 통신을 통해 전송하면 'h', 'e', 'l', 'l', 'o'로 하나씩 전송됩니다.</li>
</ul>
</li>
</ul>
사진 &lt;시리얼 데이터 포맷&gt;  - http://nptel.ac.in/courses/Webcourse-contents/IIT-KANPUR/microcontrollers/micro/ui/Course_home2_11.htm

![fig2.jpg](https://ipfs.busy.org/ipfs/QmQdqXUFpPqtyjjED5RvqgrM8hEjYZ72t88V1ni3b5gXjk)


<hr />

<h4>J-bot은 시리얼 통신을 어떻게 활용하는가?</h4>

J-bot은 아래와 같이 아두이노와 라즈베리파이를 활용합니다.

**아두이노**
<ul>
 	<li>내부적으로는 서보모터를 제어하고 그리고 초음파 센서의 거리값을 수집</li>
 	<li>1초에 10번 모터의 각도와 거리값을 라즈베리파이에게 전송합니다.</li>
 	<li>라즈베리파이에서 모터를 몇 도로 동작하라는 신호를 받으면 모터 제어</li>
</ul>

**라즈베리파이**
<ul>
 	<li>아두이노로부터 받는 데이터를 활용하여 여러 동작 수행</li>
 	<li>라즈베리파이에서 아두이노로 원할 때 명령을 내릴 수 있습니다.</li>
</ul>
<hr />

코드를 보면서 이야기 합시다.

먼저 아두이노에서 송수신을 어떻게 하는지 보겠습니다.

<strong>아두이노에서 라즈베리파이로 센서 데이터를 보내는 코드</strong>는 아래와 같습니다.

![image.png](https://ipfs.busy.org/ipfs/QmRKutKkKconPoxhUPSsWbaTz14RCPnwZ7g2X3AN98FESx)

아두이노에서 라즈베리파이로 보내는 센서 데이터는 아래의 형식으로 표현합니다.

초음파 거리 (cm) * 서보 모터 각도 (deg)

50 * 40

위와 같은 데이터라면 거리 50cm, 각도 40도라는 의미입니다.

위에는 제가 단순하게 데이터 포맷을 정한 것입니다.

(필요하다면 데이터 길이, 데이터, 데이터 검증 byte 등으로 구성하여 보내기도 합니다.)

<strong>아두이노가 라즈베리파이로부터 데이터를 받아 처리하는 코드</strong>는 아래와 같습니다.

![image.png](https://ipfs.busy.org/ipfs/QmX5NHWy5VJFvkb73Xb5TpPCKLLBUBSMf4kQqSAdFuEt4N)


위 코드는 라즈베리파이가 '모터를 몇도로 회전하라' 라는 데이터를 보내는데, 그 데이터를 받는 부분입니다.

위의 코드에서 매 루프마다 serial.read를 통해 입력되는 문자가 있는지 체크합니다.

문자가 있을 경우, inputString이라는 문자열에 추가합니다.

만약 입력된 문자가 '*'일 경우, 문자열이 끝나는 것으로 생각합니다.

그리고 * 앞의 데이터를 추출하고, goal_servo_val에 넣습니다.

<hr />

라즈베리파이에서 아두이노로부터 센서 데이터를 받는 코드는 아래와 같습니다.

![image.png](https://ipfs.busy.org/ipfs/Qmeo9DMVy2KKJvwAVCuDH65KWv4Sj1p95WJ9ohj499oMBA)

SerialComm은 시리얼 통신을위한 모듈입니다. 초기화, 읽기, 쓰기 함수를 만들었습니다.

init함수에서 먼저 아두이노와 연결되는 드라이버를 초기화합니다.

그리고 read 함수는 아두이노에서 보낸 데이터에서 거리와 각도값을 추출합니다.

*을 구분자로 활용하여 첫번째 데이터가 거리, 두번째 데이터가 각도라는것을 알 수 있고 변수에 저장합니다.

motorcontrol 함수는 아두이노에게 회전할 각도를 전송하는 함수입니다.

main에서는 serial_comm의 객체를 만들고

쓰레드를 하나 만들어서 serial.read를 반복적으로 호출합니다.

<hr />

#### 결론

라즈베리파이 하나만으로 시스템을 구성하는게 아니라 두개를 같이 쓴 이유는

두개의 역할이 다르며, 각자의 역할을 하는게 효율적이기 때문입니다.

라즈베리파이는 통신, 영상처리, 음성처리 등을 하고

아두이노는 반복적이고 실시간으로 수행해야하는 작업 ( 모터를 제어하는 것이나 10hz로 센서 데이터를 수집)을 하고요!

여기까지해서 시리얼 통신에 대해 적어봤는데요.

읽어주셔서 감사합니다.

- - -

This page is synchronized from the post: ['[IoT Project] 아두이노와 라즈베리파이 간의 시리얼 통신'](https://steemit.com/@jacobyu/iot-project)
