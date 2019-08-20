
---
title: '[IoT Project] Google AIY Voice Kit 활용기'
permlink: iot-project-google-aiy-voice-kit
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-06-23 19:48:54
categories:
- kr-dev
tags:
- kr-dev
- busy
- jjangjjangman
- kr
- kr-study
thumbnail: 'https://ipfs.busy.org/ipfs/QmRTpJkmiwQa67adGgmZuhQfkUYLoBQZtGYDz2AEAvgDUy'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


안녕하세요!!

AIY Voice kit라고 아시나요?

![image.png](https://ipfs.busy.org/ipfs/QmRTpJkmiwQa67adGgmZuhQfkUYLoBQZtGYDz2AEAvgDUy)

AIY는 artificial intelligence it yourself의 줄임말로

손쉽게 인공지능 (AI)를 자기만의 작품에 적용해봐라! 라는 의미인 것 같습니다.

Do it yourself for AI!!

Google에서 소프트웨어 제공하고, 쉽게 따라할 수 있도록 개발 키트도 판매하고 있습니다.

https://steemit.com/kr/@jacobyu/aiy-ai-for-diy

이전 글에서 한번 사봐야지 생각했었는데
이제야 구매했습니다.

6개월 전이군요.. ㅜㅜ

## 동영상

저는 AIY Kit를 활용하여 나만의 로봇을 만드는 것이 목표입니다.

* Google assistant를 활용한 여러 서비스
* 목소리로 명령
* 추가적인 센서 & 모터 부착 및 제어
* 네비게이션 시스템
* 3D 프린터로 외형 제작

먼저 동영상을 볼까요?

https://www.youtube.com/watch?v=hzR-1F338t4

농담이 인상깊었습니다.

그리고 쉽게 캘린더에 일정을 등록할 수 있습니다.

추가적으로 특정 키워드에 따른 동작을 수행하도록 할 수 있습니다.

IP를 말해줘는 제가 등록한 명령입니다.

추후, 사진찍어달라던데.. 스팀잇 최신 글 제목 읽어줘라던지..

여러 명령을 추가할 수 있습니다.

이제 조립부터 설치까지 간단히 설명을 해보겠습니다.

---

## 조립

![image.png](https://ipfs.busy.org/ipfs/QmPnh66Hph9eE9ezxNcJ8Av4qPohNJRBbAvyjUg2qtR71Y)

![image.png](https://ipfs.busy.org/ipfs/QmR3LFS8E68h6cicUdaAZXVGpHjUuvi5q2EWV34o2KJYoF)

책상이 좁아 바닥에서 조립을 했습니다.

노트북을 펴놓고 사이트를 보면서 했습니다.

https://aiyprojects.withgoogle.com/voice-v1/

제가 산 건 V1 버젼인데요.

이 버젼은 라즈베리파이 B3와 호환됩니다.

![image.png](https://ipfs.busy.org/ipfs/QmNfYadgCUZBvk4FpsXd8secrYUK8wy2zDTD3a3nfQuuSJ)

보이스 킷 안에는 아래와 같은 주요 부품이 있습니다.
* 마이크 모듈
* 스피커
* Voice Hat 추가 보드

주어진 부품들을 라즈베리파이에 부착을 하면

위의 사진과 같습니다.

저는 추가적으로 카메라도 부착하였습니다.

다음에 하드보드지? 카드보드지?를 접은 다음에..

잘 넣으면 끝입니다..

많이 생략이 됐나요? 사진을 많이 찍었어야 했는데..

짜잔!! 금방 완성해버렸습니다!!

![image.png](https://ipfs.busy.org/ipfs/QmdoS7H4H7q8YYLg9bjuawP6zXiBypaJYKBSQiNQq1Y6Kk)

위에 마이크가 부착되어있고
왼쪽에 스피커, 오른쪽에 카메라를 부착하였습니다.

Youtube에 조립 동영상도 많아서 잘 모르겠을 때 봤습니다.
https://www.youtube.com/watch?v=jQK0VDWIzus

---

## 소프트웨어

하드웨어를 완성했다면 이제 소프트웨어입니다.

Google AIY Kit project에서 제공해주는 라즈베리파이 OS 이미지를 다운받습니다.
https://github.com/google/aiyprojects-raspbian/releases

다운 받은 이미지를 micro sd카드에 넣어야합니다.
전 win32diskImager를 사용하여 이미지를 넣었습니다.

----

## 코드 동작

위에까지 했다면 준비는 끝났습니다.

AIY-projects-python/src/examples/voice 폴더에 여러 예제가 있습니다.
바로 동작시켜볼 수 있습니다.

![image.png](https://ipfs.busy.org/ipfs/QmcYZNHGAWWzxNbtaJr6RaJa2bpbU8H59CDEshkWSEm7FU)

예제로는 google assistant, cloud speech가 있습니다.

예제의 경우 모두 영어로만 동작하기 때문에 한국어로 동작시키려면

약간의 설정 변경이 필요합니다.

자세한 내용은 글이 길어져 

다음 글에 이어서 작성하겠습니다.

---

## 결론

사용자들이 쉽게 사용할 수 있게 해놨습니다.

음성처리, 딥러닝 등에 대해 잘 몰라도
직접 개발을 해볼 수 있게 해주는 키트입니다.

지금까지 키보드, 마우스로 입력을 받았다면
구글이 음성인식을 잘해놔서 
이제는 음성으로도 입력을 쉽게 받을 수 있다를 보여주는 것 같습니다.

여기에 이제
아두이노도 붙이고
카메라를 이용한 영상처리도 해보고
나만의 로봇을 하나 만들어보고자 합니다.

감사합니다!!

- - -

This page is synchronized from the post: ['[IoT Project] Google AIY Voice Kit 활용기'](https://steemit.com/@jacobyu/iot-project-google-aiy-voice-kit)
