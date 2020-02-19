
---
title: '웹 페이지에 소셜 로그인 연동 with firebase, google'
permlink: with-firebase-google
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-12-05 12:13:48
categories:
- sct
tags:
- sct
- sct-kr
- sct-dev
- kr-dev
- busy
- kr
- union
- zzan
thumbnail: 'https://files.steempeak.com/file/steempeak/jacobyu/CppzAmfu-image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


안녕하세요. 제이콥입니다.

https://www.steemcoinpan.com/sct/@jacobyu/4rkkun 에서 구글 계정 연동을 통한 스팀잇 회원가입 페이지를 소개했습니다. 구글 계정 인증을 활용해서 회원가입을 할 수 있도록 했습니다. 구글 계정 인증을 하면 특정 사용자가 여러번 아이디 만들기가 어렵죠. 또, 누구나? 구글 계정을 갖고있다고 생각했고요. 구글 계정은 쉽게 자신을 인증할 수 있는 수단입니다.

이 글은 `소셜 로그인 인증업체 추가하는 방법`, `도메인 인증하기`를 다룹니다.

## 0.추천 라이브러리

웹페이지에 소셜 로그인은 연동할 때, 사용하기 좋은건 파이어베이스입니다.
파이어베이스는 여러 소셜계정을 손쉽게 연동할 수 있도록 해놨습니다.
이 2개를 참고해서 개발하시면 됩니다.
https://firebase.google.com/docs/auth/web/firebaseui?hl=ko
https://github.com/firebase/firebaseui-web

## 1. 셋업

파이어베이스 대쉬보드 설정 -> 사용할 로그인 인증업체 선택 -> 활성화

![firebase dashboard](https://files.steempeak.com/file/steempeak/jacobyu/CppzAmfu-image.png)

라이브러리 설치하기
```
$ npm install firebase --save
$ npm install firebaseui --save
```


## 2. 소셜 로그인 컴포넌트 코드

코드는 간단합니다.

저는 리액트에서 작업하는데요. 하나의 컴포넌트로 모듈화시켜서 사용하고있습니다. 이렇게 분리를 하면, 어디든 쉽게 적용할 수 있죠.

##### - import

firebase, react-firebaseui를 사용합니다. config파일은 firebase dashboard에서 받아오시면 됩니다.


```
import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";

import config from '../config'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// Initialize Firebase
firebase.initializeApp(config);

```
##### - ui config

이건 소셜 로그인 ui 관련 셋팅값입니다. 로그인을 팝업으로 할 것인지,아니면 리디렉션 (새로 열기)를 할 것인지 정할 수 있습니다. 또, 저는 구글만 사용했지만, 여러 로그인 인증업체를 추가할 수 있습니다.

```
  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: async (currentUser, credential, redirectUrl) => {
        var token = await this.getFirebaseToken();
        this.props.clickCallback(this.props.parent, token);
      }
    }
  };
```

##### - render

render에서 핵심은 `<StyledFirebaseAuth/>`입니다. 다른건 부가적인 것이죠. 이 버튼을 누르고 실제로 로그인이 성공했다. 실패했다를 알아야하는데요. 로그인이 성공했을 때, 무엇을 할지는 위에 ui-config에서 설정할 수 있습니다. 저 같은 경우는 `callbacks`에다가 성공할 경우, `clickCallback`을 실행하도록 해놨죠.

```
  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
  );
    }
    return (
      <div>
        {this.props.parent.state.signupSuccess === true? 
          <button onClick={() => {
            window.open('https://steemcoinpan.com/');
          }} className="btn btn-primary btn-block">스팀코인판으로 이동</button>
          :
          <button onClick={() => firebase.auth().signOut()} className="btn btn-primary btn-block">Refresh</button>
        }
      </div>
    );

  }
```
## 3. 도메인 승인

요거 빡셉니다. 커스텀 도메인을 사용할 경우, 그 도메인이 내꺼라는걸 인증해야합니다. Project -> Authentication -> 아래로 내리면 승인된 도메인 -> 자신의 도메인 추가

* https://console.cloud.google.com/apis/credentials/domainverification?authuser=0&project={your-project-name}
* https://console.firebase.google.com/u/0/project/{your-project-name}/authentication/providers

![도메인 승인 1](https://files.steempeak.com/file/steempeak/jacobyu/bR9Vtl1y-image.png)

google cloud platform에서도 도메인을 인증해야합니다. Credentials, Oauth consent screen,Domain verification 모두 들어가서 도메인을 등록하세요.

이 과정에서 html을 서버에 올려야 하는 작업이 있습니다. 저는 히로쿠, react-js 환경에서 개발했는데요. public 폴더에 google cloud platform이 주는 인증 html을 넣어주시면 됩니다.

![도메인 승인 2](https://files.steempeak.com/file/steempeak/jacobyu/r6ZRgyCh-image.png)

---

## 4. 결론

이 과정에서 가장 어려웠던 건 3번이였습니다.. ㅋㅋ 1번,2번은 제가 올린 링크를 참고하면 쉽게 만드실 수 있을거에요. 궁금한게 있으시면 댓글달아주세요. 감사합니다.

- - -

This page is synchronized from the post: ['웹 페이지에 소셜 로그인 연동 with firebase, google'](https://steemit.com/@jacobyu/with-firebase-google)
