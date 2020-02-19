
---
title: '소셜계정 인증 & 회원가입 with firebase #사용자 인증을 위한 토큰확인'
permlink: and-with-firebase
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-12-02 16:48:09
categories:
- sct
tags:
- sct
- sct-kr
- sct-dev
- union
- kr-dev
- kr
- busy
thumbnail: 'https://steemitimages.com/885x0/https://cdn.steemitimages.com/DQmRNa3H7xZRJh8uPHq3eNqtjG2Vm7yq8NyyjQ2erbEciYZ/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


안녕하세요. 제이콥입니다.

저는 소설계정 인증을 통한 회원가입을 구현하고 있습니다. 이제 2가지만 하면 될 것 같습니다. 

* ~~회원가입 처리할 서버 구현~~
* ~~프론트앤드 테스트 페이지 구현~~
* ~~사용자 인증을 위한 토큰 확인 구현~~
* 소셜로그인 공급자 추가
* 깔끔한 UI 개발

소셜계정 인증을 통해 회원가입을 한다면, 누구나 쉽게 스팀코인판에 접근할 수 있도록 할 것입니다. 그리고 회원들이 쉽게 지인들에게 스팀코인판을 소개할 수 있을 것이고요. 신규유저가 많이 들어올 것이 기대됩니다. ^^

----

![](https://steemitimages.com/885x0/https://cdn.steemitimages.com/DQmRNa3H7xZRJh8uPHq3eNqtjG2Vm7yq8NyyjQ2erbEciYZ/image.png)



## 사용자 인증을 위한 토큰확인

제가 이번에 집중했던건 사용자 인증을 위한 토큰확인입니다. 사용자가 소셜 로그인을 하면 임시 토큰을 하나 생성하는데요. 현재 로그인 한 사용자가 암호화된 토큰을 서버에 전달하여 이전에 접속한 사용자인지 확인 할 수 있습니다. 저는  한 명의 사용자가 여러번 아이디 생성하는 것을 막기 위한 용도로 사용하였습니다.

회원가입 과정은 아래처럼 진행됩니다.

1. 프론트앤드에서 서버로 토큰 전송
2. 서버에서 토큰을 활용해서 uid 체크
3. uid가 실제로 우리 서비스를 사용하고자 하는 회원인지 체크, 불량인지 체크
4. 정상적인 uid인 경우, 계정 생성

이와 같이 동작하기 위해서는 프론트앤드와 백앤드가 필요한데요. 이번엔 백앤드에 대해서만 설명해보겠습니다. 

백앤드에서 사용하는 인증을 위해 사용하는 라이브러리는  firebase, firebase-admin 입니다. 
이 2개를 쓰기 위해서는 파이어베에스 대쉬보드에서 설정파일을 가져와야합니다.

요건 링크로 대신하겠습니다.
* https://firebase.google.com/docs/web/setup?authuser=0 (firebase 초기 셋팅)
* https://firebase.google.com/docs/admin/setup/?hl=ko#initialize_the_sdk (admin 초기 셋팅)


----

그리고 나서 아래처럼 사용하시면 됩니다.


#### firebase admin 초기화
```
var admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});
```

#### token으로 uid 가져오기

```
async function verifyToken(idToken){
  return new Promise(async (resolve,reject)=>{
    admin.auth().verifyIdToken(idToken)
    .then(function(decodedToken) {
      let uid = decodedToken.uid;
      resolve(uid);
      // ...
    }).catch(function(error) {
      console.log(error);
      resolve(undefined);
      // Handle error
    });
  })
}
```

#### 백앤드 로직

1) uid가 정상적인 uid인가?
2) 그 uid를 갖고 있는 계정이 이미 스팀잇 계정을 만들었는가?


감사합니다.

## 참고
* https://firebase.google.com/docs/web/setup?authuser=0 (firebase 초기 셋팅)
* https://firebase.google.com/docs/admin/setup/?hl=ko#initialize_the_sdk (admin 초기 셋팅)
* https://firebase.google.com/docs/auth/admin/verify-id-tokens?hl=ko
* https://firebase.google.com/docs/auth/web/manage-users?hl=ko

- - -

This page is synchronized from the post: ['소셜계정 인증 & 회원가입 with firebase #사용자 인증을 위한 토큰확인'](https://steemit.com/@jacobyu/and-with-firebase)
