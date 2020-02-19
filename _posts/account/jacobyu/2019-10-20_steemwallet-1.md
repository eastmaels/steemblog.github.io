
---
title: '[개발, 분석] steemwallet #1 소개 및 설치'
permlink: steemwallet-1
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-10-20 16:07:39
categories:
- sct
tags:
- sct
- sct-kr
- sct-dev
- busy
- jjm
- kr
thumbnail: 'https://cdn.steemitimages.com/DQmTx5NKvKLHQodNVj2fRozW5Surf6P7emknGdubUTiaLYW/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


안녕하세요. 제이콥입니다.

*  [steemwallet 깃헙 코드](https://github.com/roelandp/steemwallet)
* [android 마켓 링크](https://play.google.com/store/apps/details?id=app.steemwallet.roelandp)

오늘은 로랜드의 steemwallet를 분석하고자합니다. 

스팀월렛은 로랜드가 개발하였고, android, ios에서 모두 사용가능합니다. AES 256 encryption로 사용자의 암호키를 보호하며, 생체인증 (지문인식, Face ID) 등으로 접속이 가능하도록 돼있습니다. 단, 하드웨어가 지원해준다면요.

> steemwallet is a fast, secure and open source wallet for the Steem blockchain, available for iOS and Android.


> Encryption wise it is just as safe as the cli_wallet app provided by the Steem software, using AES 256 encryption and per device & per (re-)install unique initialisation vector. Also the app obliges you to choose a difficult to guess passphrase for encrypting your wallet file. You can opt to store that passphrase in your device's native keychain, if your device provides biometric access (Touch ID, Face ID, Fingerprint) and you have that feature enabled.

---

코드는 javascript로 작성돼있습니다. 

사용하고 있는 크로스플랫폼은 "Appcelerator titanium"라는 툴을 사용하고있습니다.

이 코드의 라이센스는 CC BY-NC-SA 4.0입니다. 
https://creativecommons.org/licenses/by-nc-sa/4.0/

이 코드는 오픈소스입니다. 비상업적으로 이 코드를 활용한다면 변경도 가능하고, 카피도 가능하고, 재배포도 가능합니다. 하지만, 상업적으로 사용하는 것은 금지돼있습니다. (유료앱, 수수료 등) 이 부분을 원한다면 roelandp와 이야기가 필요해보입니다.

---

#### 회원가입 및 설치


한번 직접 빌드하고 코드를 파악해보려고 합니다. 근데 이걸 빌드하려면 https://platform.axway.com/에서 회원가입을 해야하군요. 

전 cli setup을 따라서 진행할 예정입니다. 아래 가이드대로 하나하나 스텝별로 진행해보겠습니다.

https://wiki.appcelerator.org/display/guides2/Appcelerator+CLI+Getting+Started

초기 셋업
`appc setup`
`git clone https://github.com/roelandp/steemwallet.git`

샘플 프로젝트 만들어서 동작시켜본다.
`appc new -t app --id com.appcelerator.sample -n SampleProject`
`cd SampleProject/; appc run -p ios`

티타늄 및 라이브러리 설치
`npm install titanium -g`
`titanium sdk install 8.1.0.v20190605095601`
`npm install -g alloy`
`alloy install plugin`

스팀월렛 실행
`cd steemwallet; appc new --import`
`appc run -p ios`

![](https://cdn.steemitimages.com/DQmTx5NKvKLHQodNVj2fRozW5Surf6P7emknGdubUTiaLYW/image.png)

#### 추가셋팅 (티타늄 sdk 버전업 한 경우)

![image.png](https://files.steempeak.com/file/steempeak/jacobyu/eaTj8FGF-image.png)

티타늄 sdk를 8.2.0.GA로 변경하였습니다.
티타늄 sdk를 업데이트하면, 플러그인을 다시 설치해야합니다.
프로젝트에서 sdk를 업데이트한 후, 프로젝트를 처음킨다고 가정하겠습니다.

`appc setup`
`appc new --import`
`alloy install plugin`
`appc run -p ios`

끝!


#### 결론

이 앱은 스팀 지갑앱에 초점을 맞춰, 딱 필요한 기능들만 구현했고 가볍습니다. 지갑앱을 만든다면 여기서 뭔가 추가해보기 좋을 것 같아요. 다만, 생소한 플랫폼 Appcelerator, 티타늄이라는게 아쉽습니다. 리액트면 좀더 쉽게 접근했었을텐데요.


esteem app은 리액트 네이티브고 좋긴한데, 너무 방대한것 같더군요. 이 코드도 시간이 되면 봐보겠습니다.

감사합니다.

- - -

This page is synchronized from the post: ['[개발, 분석] steemwallet #1 소개 및 설치'](https://steemit.com/@jacobyu/steemwallet-1)
