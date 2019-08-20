
---
title: '[IoT Switch] Adafruit, IFTTT, google assistant 연동 테스트'
permlink: 1474-iot-switch-adafruit-ifttt-google-assistant
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-12-08 11:51:51
categories:
- iot
tags:
- iot
- kr-dev
- busy
- jjangjjangman
- kr-study
thumbnail: 'https://ipfs.busy.org/ipfs/QmdUKZ2EzH28RqeEebRy5Ss6Mp9yTdKHNtTmYcCZMohjWh'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<p>세상이 좋아진 것을 느낀다.</p>
<p>적어도, 상품을 판매하는게 아니라 사용하는 것은 되게 쉬워졌다.</p>
<p>DIY로 내가 딱 필요한 것을 만들기에는 쉬워졌다.</p>
<p>이번에는 IFTTT, adafruit, google assistant라는 것들을 활용해서 원격에서</p>
<p>스위치를 제어하는 것을 해보려고 한다.</p>
<p>이 기능은 전에 만든 스위치에 적용을 할 예정이다.</p>
<p>참고하고 공부한 블로그 페이지가 있다.</p>
<p><a href="https://www.instructables.com/id/Control-Your-Projects-With-Google-Assistant-and-Ad/">https://www.instructables.com/id/Control-Your-Projects-With-Google-Assistant-and-Ad/</a></p>
<p><a href="http://www.makewith.co/page/project/1093/story/2760/">http://www.makewith.co/page/project/1093/story/2760/</a></p>
<p>이것을 따라한 것에 대해 글을 작성해본다.</p>
<p>간단하게 과정에 대해서만 작성하였고, 하는 방법은 위에 글을 참고한다.</p>
<p><img src="https://ipfs.busy.org/ipfs/QmdUKZ2EzH28RqeEebRy5Ss6Mp9yTdKHNtTmYcCZMohjWh" alt="image.png" /></p>
<p>구현할 것에 대해 간단하게 그림을 그려봤다.</p>
<p>사용자는 스마트폰으로 간단하게 불켜줘, 불꺼줘라고 말을 하고,</p>
<p>Broker을 통해 IoT Device에게 명령을 전달한다.</p>
<p>IoT Device는 전달받은 명령에 따라 동작을 한다.</p>
<hr />
<h3>장점</h3>
<p>이런 구성의 장점은 개발자나 사용자가 <strong>IoT Device의 ip를 신경쓸 필요가 없다.</strong></p>
<p>IoT Device가 인터넷에만 연결되어 있다면, 그리고 브로커와 연결된 끈이 있다면</p>
<p>어디서든지 이 디바이스를 제어할 수 있게 된다.</p>
<p>그리고 이 브로커들은 기존에 있던 구글 어시스턴트나 아마존 에코 등과 쉽게 통신할 수 있도록 해놨다.</p>
<p>생각나는게 있거나 찾으면 더 적어보자.</p>
<p>IP를 신경쓸 필요 없다는 것은 IoT Device가 접속한 네트워크를 바꾸는 것과 상관없이 연결이 가능한 것이다.</p>
<p>예를 들어, 우리집에서 사용하던 것을 wifi만 연결하면 친구 집에 가서도 쉽게 사용할 수 있다.</p>
<hr />
<h3>Adafruit 셋팅</h3>
<p><a href="https://io.adafruit.com">https://io.adafruit.com</a></p>
<p>Adafruit는 중계기 같은 역할을 한다.</p>
<p>Data를 주고 받을 수 있다.</p>
<p>Adafruit에서 Feeds (주고 받을 데이터 type 설정)와 Dashboards를 설정해야한다.</p>
<p>작성자는 switch라는 이름의 feed를 생성하였다.</p>
<p><strong>그리고 Dashboards에서는 on/off swtich를 만들었다.</strong></p>
<p>그리고 Dashboard에선 AIO KEY를 발급받는다.</p>
<p>이 키는 esp8266가 알 수 있게 해야한다.</p>
<p><img src="https://ipfs.busy.org/ipfs/QmZhP8tqcCADLDuoZYFHD2q1KgBqB5Fm21L9Rz7DxugWXM" alt="image.png" /></p>
<p>코드는 아래 사이트에서 참고했다.</p>
<p><a href="https://www.instructables.com/id/Control-Your-Projects-With-Google-Assistant-and-Ad/">https://www.instructables.com/id/Control-Your-Projects-With-Google-Assistant-and-Ad/</a></p>
<p><strong>내 설정에맞게 subscribe를 바꿨다. /feeds/switch</strong></p>
<p>여기까지만 하면, adafruit와 iot device가 연결이 된 것이다.</p>
<p>adafruit dashborad에서 디바이스를 컨트롤할 수 있다.</p>
<hr />
<h3>IFTTT 설정</h3>
<p>IFTTT 설정은 adafruit와 google assistant를 연결하기 위한 것이다.</p>
<p>Applet이란 것을 만들어야 한다.</p>
<p>google assistant에서 “Turn on the light”라고 할 때, ON 신호를 adafruit에 보낸다. 를 수행하기 위한</p>
<p>applet (프로그램)을 만들어야 하는데, 코드를 작성하는 것은 아니고 잘 채워넣으면 된다.</p>
<p><a href="https://platform.ifttt.com/maker">https://platform.ifttt.com/maker</a>에서 만든다.</p>
<p><img src="https://ipfs.busy.org/ipfs/QmatjW6WtaoAi8DwLRX9NSM5oTWc95trtrRQwzECeHMXsY" alt="image.png" /></p>
<p>만들고 실행시켜보면, 핸드폰에서 허가할 것이냐고 나온다.</p>
<p>허가를 하면, 위의 시스템 구성처럼 google assistant에서 switch를 on/off할 수 있게된다.</p>
<hr />
<h2>후기</h2>
<p>사용해보면서 아주 편리했다.</p>
<p>이 스위치를 판다고 생각할 때, 사용자들에게 IFTTT, adafruit, google assistant 설정을 요래 하시면 됩니다.</p>
<p>이렇게 잘 설명해줄 수 있을까? 어렵지 않을까? 사용할 수 있을까? 그런 생각이 들었다.</p>
<p>DIY Kit로 판다면? 조금이나마 따라올 수 있을 것 같다.</p>
<p>어떻게 하면 쉽게 사용하게 할 수 있을까?</p>
<p>고민이 필요하다.</p>

감사합니다.


- - -

This page is synchronized from the post: ['[IoT Switch] Adafruit, IFTTT, google assistant 연동 테스트'](https://steemit.com/@jacobyu/1474-iot-switch-adafruit-ifttt-google-assistant)
