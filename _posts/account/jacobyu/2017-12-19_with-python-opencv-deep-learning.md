
---
title: '따라하면 되는 얼굴 인식 with deep learning, python, opencv'
permlink: with-python-opencv-deep-learning
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-19 06:32:24
categories:
- kr-dev
tags:
- kr-dev
- kr
- vision
- jacob
thumbnail: 'http://128.134.57.131/wordpress/wp-content/uploads/2017/12/36f0e3f0-13cb-11e7-8258-4d0c9ce1e419-300x167.gif'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


python3와 OpenCV 설치 방법, 그리고 얼굴인식 소개에 대한 글이며,

스스로 정리 및 소개하는 글입니다.

편하게 적도록 하겠습니다.

소개하는 얼굴인식 라이브러리를 활용하면 여러 기능을 수행할 수 있는데,

<strong>얼굴 검출 - 특정 영상에 얼굴이 몇 개 있는지, 어디에 있는지를 확인</strong>

<strong>얼굴의 특징 검출 - 얼굴을 찾고 얼굴의 눈 코 입 등을 찾을 수 있다.</strong>

<strong>얼굴 인식- A라는 사람과 B라는 사람을 구별 (단, A와 B에 대한 사전 이미지들이 필요하다.)</strong>

<hr />

아래의 링크를 따라 Python3과 OpenCV를 설치한다.
<a href="https://www.pyimagesearch.com/2015/07/20/install-opencv-3-0-and-python-3-4-on-ubuntu/">python과 opencv 설치</a>

나는 OpenCV version을 3.3.0으로 했다.
아래 링크에서 <a href="https://virtualenv.pypa.io/en/latest/" target="_blank" rel="noopener">virtualenv</a>라는 툴을 활용 하는데 이것은 패키지 간에 충돌을 막아준다.
이는 가상의 작업공간을 만드는 역할을 한다. 드래곤볼의 정신과 시간의 방..

<hr />

OpenCV 설치를 다했다면, 아래 링크에서 얼굴인식 라이브러리를 설치한다.
설치할 때 주의할 점은 python을 설치하고 진행해야하며,
링크를 따라가서 dlib라는 라이브러리를 꼭 설치해야한다.
<a href="https://github.com/ageitgey/face_recognition">얼굴인식 라이브러리 on python</a>

이 라이브러리는 python 기반의 라이브러리로 최신 딥러닝 기술이 적용되어있다.
딥러닝이 적용되어있다는 뜻은 수많은 얼굴들을 학습(training)을 해서 강인한 특징들을 선정했고, 그 특징들을 가지고 새로운 얼굴을 표현한다.
<blockquote>Built using <a href="http://dlib.net/">dlib</a>'s state-of-the-art face recognition built with deep learning. The model has an accuracy of <strong>99.38%</strong> on the <a href="http://vis-www.cs.umass.edu/lfw/">Labeled Faces in the Wild</a> benchmark.</blockquote>

<hr />

설치를 모두 마쳤다면, face_recognition/examples 폴더 안에 여러 샘플 코드를 찾을 수 있다.

아래 코드는 주어진 이미지에서얼굴 검출을 해주는 코드이다.
<strong>터미널에서 5줄만 작성하면 된다.</strong>
<ul>
 	<li>workon cv</li>
 	<li>python</li>
 	<li>import face_recognition</li>
 	<li>image = face_recognition.load_image_file("your_file.jpg")</li>
 	<li>face_locations = face_recognition.face_locations(image)</li>
</ul>
<strong>example 코드를 참고하여 자기만의 코드를 작성할 수 있다.</strong>
<ul>
 	<li>workon cv</li>
 	<li>python 0_face_saver_from_webcam.py</li>
 	<li>python 1_facerec_from_webcam_faster_2.py</li>
</ul>
<img class="alignnone size-medium wp-image-550" src="http://128.134.57.131/wordpress/wp-content/uploads/2017/12/36f0e3f0-13cb-11e7-8258-4d0c9ce1e419-300x167.gif" alt="" width="300" height="167" />

<img class="alignnone size-medium wp-image-552" src="http://128.134.57.131/wordpress/wp-content/uploads/2017/12/a1-e1513663116211-300x242.png" alt="" width="300" height="242" />

읽어주셔서 감사합니다.

궁금한게 있다면 답변드릴게요.

- - -

This page is synchronized from the post: ['따라하면 되는 얼굴 인식 with deep learning, python, opencv'](https://steemit.com/@jacobyu/with-python-opencv-deep-learning)
