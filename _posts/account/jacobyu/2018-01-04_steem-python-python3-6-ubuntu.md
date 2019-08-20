
---
title: '[kr-dev] Steem-python을 활용하기 위한 python3.6 설치 (ubuntu)'
permlink: steem-python-python3-6-ubuntu
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-04 16:43:03
categories:
- kr-dev
tags:
- kr-dev
- busy
- ourselves
- kr
- python
thumbnail: 'https://res.cloudinary.com/hpiynhbhq/image/upload/v1515082406/rdmwenrn1p5wxjzilmsp.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


안녕하세요.
오늘은 python3.6을 설치하고 활용하는 방법을 소개하려고 합니다.

steem API를 접근 할 수 있게 해주는 steem-python이라는 라이브러리가 있는데요.
이 라이브러리는 3.6 이상에서만 실행된다고 합니다.
그래서 python3.6을 설치하고 python3.6에서 steem-python 라이브러리를 활용해보겠습니다.

보통 ubuntu는 python 2와 3.5 version이 설치가 되어있는데요.
여기서 3.6까지 설치를 할 경우 중복이 됩니다.
해결책으로는 두 가지를 생각해봤는데 첫번째 방법을 소개하겠습니다.
첫째, 명시적으로 호출한다. 입니다.
둘째, Docker를 만든다. 
혹은 이미 다른사람이 python3.6을 설치해논 Docker을 쓴다.
이것은 좀 조사를 해봐야해서 패스하겠습니다.

**먼저 python3.6을 설치해봅시다.**
--------
#python 설치
sudo add-apt-repository ppa:jonathonf/python-3.6
sudo apt-get update
sudo apt-get install openssl
sudo apt-get install libssl-dev
sudo apt-get install python3.6
sudo apt-get install python3.6-dev
#python pip설치
wget https://bootstrap.pypa.io/get-pip.py
sudo python3.6 get-pip.py
--------

python3.6을 실행해서 아래와 같은 이미지가 나오면 잘 설치한 것입니다.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1515082406/rdmwenrn1p5wxjzilmsp.png)
-----------

이제 steem-python을 실행시켜봅시다.
sudo python3.6 -m pip install -U steem

설치가 다됐다면 간단히 활용을 해봅시다.
import가 된다면 steem-python도 잘 설치된 것입니다.
축하합니다!
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1515083854/etlbxhq7grnplf8gpbpx.png)

이렇게 python3.6을 설치를 해보고 steem-python도 간단히 활용해봤는데요!
저는 이 steem-python을 이용해서
특정 유저나 특정 태그의 최신글 알리미 봇을 개발중입니다.
아마 일주일안에 완성될 듯합니다.
--------------------

궁금하시다면 아래 링크를 누르시면 됩니다.
아래 글은 새로운 글이 업데이트 될 경우, 텍스트를 출력하는 것에 대해 설명했습니다.
현재는 텔레그램 봇을 개발하고 있고, 텔레그램과 연동해서 알림 메시지를 보낼 예정입니다.
[https://busy.org/kr-dev/@jacobyu/1-c1ac3fbc6bfc4](url)

현재 테스트 중에 있으며, kr-dev의 최신글들이 작성되면 텔래그램을 통해 메시지를 보내는 것까지 개발하였습니다.
아래처럼 노티피케이션에 알림 메시지가 뜹니다!

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1515083131/aj05k4xfqmblqb9zdbe2.png)

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1515084261/spmxosoiqelul2a2ikie.png)

지속적으로 관련 포스팅을 할테니 관심 많이 가져주시고
배포하면 많이 활용해주세요!
감사합니다.

- - -

This page is synchronized from the post: ['[kr-dev] Steem-python을 활용하기 위한 python3.6 설치 (ubuntu)'](https://steemit.com/@jacobyu/steem-python-python3-6-ubuntu)
