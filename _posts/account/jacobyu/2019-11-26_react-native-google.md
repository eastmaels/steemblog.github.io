
---
title: 'React Native google 로그인 연동하기'
permlink: react-native-google
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-11-26 17:13:36
categories:
- sct
tags:
- sct
- sct-kr
- sct-dev
- busy
- kr-dev
- union
thumbnail: 'https://cdn.steemitimages.com/DQmahiwybGU34Z3UXGVanKusgwcQyKKVh1w5B2CfoHS7etF/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![https://github.com/react-native-community/react-native-google-signin](https://cdn.steemitimages.com/DQmahiwybGU34Z3UXGVanKusgwcQyKKVh1w5B2CfoHS7etF/image.png)

React Native에 구글 로그인 연동을 해봤습니다.
이 과정에서 제가 참고했던 자료들을 기록해봅니다. 

아래의 4개의 링크를 참고하면 편합니다. 

* https://bangc.tistory.com/12
* https://invertase.io/oss/react-native-firebase/v6/auth/social-auth
* https://github.com/react-native-community/react-native-google-signin
* https://github.com/react-native-community/react-native-google-signin/blob/master/docs/get-config-file.md

#### 프로세스 이해하기

google로그인을 연동은 2단계로 진행됩니다. 

먼저 구글에서 제공하는 라이브러리 (https://github.com/react-native-community/react-native-google-signin)를 통해, 구글로부터 토큰을 받습니다. 

받은 토큰을 파이어베이스 auth에 저장합니다. 파이어베이스 auth는 여러 로그인 공급자들로부터 토큰을 받아, 통합으로 관리해주는 역할을 합니다.

구현도 2단계로 진행됩니다. 구글로부터 토큰받기. 받은 토큰을 파이어베이스 auth에 등록하기



#### 주의해야할 것
* iOS, android 각자 셋팅할 게 있음.
* React-native version check 0.60 이상인가? 0.6 이상으로 하세요.
* Firebase lib version check
파이어베이스의 버젼은 모두 같아야합니다. package.json에서 모두 버젼을 같게 한 후, node_modules, lock, ios/build 파일을 지우고 다시 빌드합니다.

#### iOS 셋팅
* Configure (web client id)
* REVERSED_CLIENT_ID —> target, url에 넣기

#### Android 셋팅

* 안드로이드 디버깅 서명키 가져오기
`keytool -list -v -keystore /path/debug.keystore -alias androiddebugkey -storepass android -keypass android`
* 안드로이드 서명키를 파이어베이스 대쉬보드에 입력해야함.
* 디버깅 시에는 디버깅 키, 릴리즈 시에는 릴리즈 키를 입력해야함.
* 대쉬보드에 서명을 업데이트 한 후, `google-service.json` 파일 업데이트해야함.


#### 발생한 문제

파이어베이스 버젼이 다른 경우, 에러가 발생합니다. package.json에서 모두 버젼을 같게 한 후, node_modules, lock, ios/build 파일을 지우고 다시 빌드합니다. 

`you've attempted to requre '@react-native-firebase/storage' version '6.0.2' ~~`

![](https://steemitimages.com/300x0/https://cdn.steemitimages.com/DQmXcQ2sLbJUzuWPkwiwgxJr64nnVgLi82rqSGtfZeB5C43/image.png)


안드로이드 서명을 제대로 입력하지 않아도 에러가 발생합니다.
> react-native-google-signin developer error 발생

#### 테스트

* 로그인
* 로그아웃
* 계정정보 가져오기

- - -

This page is synchronized from the post: ['React Native google 로그인 연동하기'](https://steemit.com/@jacobyu/react-native-google)
