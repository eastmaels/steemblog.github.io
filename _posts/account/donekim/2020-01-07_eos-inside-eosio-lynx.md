
---
title: '[EOS Inside] EOSIO 코드포크체인 LYNX 무료계정 생성 시작'
permlink: eos-inside-eosio-lynx
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-01-07 23:51:57
categories:
- sct
tags:
- sct
- sct-kr
- sct-coin
- liv
- zzan
- palnet
- steemleo
- s
- union
- dblog
- busy
thumbnail: 'https://files.steempeak.com/file/steempeak/donekim/4LrcmhyG-thumbnail.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![thumbnail.png](https://files.steempeak.com/file/steempeak/donekim/4LrcmhyG-thumbnail.png)

안녕하세요, 디온입니다. EOSIO 코드포크체인 중 하나인 **Lynx chain의 무료계정 생성 기능이 활성화**되었습니다. 

**Lynx체인은 사용자경험 및 디앱(DApp) 활성화에 초점을 두고 런칭한 EOSIO 소프트웨어 기반의 코드포크체인**으로 일전에 [포스팅](https://www.steemcoinpan.com/sct/@donekim/eos-inside-eosio-lynx-chain)을 통해 간략히 소개드린 적이 있었는데, 대표적인 특징이라 하면 **RAM/CPU/NET와 같은 블록체인 리소스에 대한 개념 없이 쉽고 간편하게 계정을 생성할 수 있다는 것**입니다.

![lynx wallet.jpg](https://cdn.steemitimages.com/DQmNqhJ5JjubFXxqFrfsrUoFJnLjRPcnEQNUVWTTonq7YDq/lynx%20wallet.jpg)

Lynx체인의 경우 자신들의 메인넷을 런칭하기 이전에 **이오스 메인넷의 데스크탑 및 모바일 월렛 서비스인 Lynx wallet을 개발**했었기 때문에, 이미 iOS와 Android, 그리고 데스크탑에서 월렛을 쉽게 다운로드 받을 수 있습니다.

## #1. 무료계정 생성하기
---

![invite.png](https://cdn.steemitimages.com/DQmTpvmRgmpe6Dj8JxFktJNSXLMt8s8PEzqrZZSeMy56euC/invite.png)


- Lynx 계정생성 주소 : https://create.lynxwallet.io/done

위의 사이트로 접속하시면 **휴대폰 인증을 통해 간편하게 Lynx 체인 계정생성이 가능**합니다. 

**(1) 휴대폰 번호 입력하기**

- 위의 화면처럼 반드 `+82`를 먼저 입력하고 나머지 번호를 입력합니다.
- 그 다음 NEXT버튼을 클릭합니다.

**(2) 인증번호 입력하기**

- Your Lynx Wallet verification code is 라는 제목으로 문자를 받으면 **6자리의 인증번호**를 입력합니다.

**(3) 사용하고자 하는 계정명 입력하기**

- 이오스와 달리 계정명은 **알파벳 4자리 미만으로도 생성이 가능**합니다.
- 예를 들어, `done` 또는 `fred`같이 생성이 가능합니다.

## #2. Lynx 체인 특징

- 계정명은 **최소 4자리에서 최대 12자리까지의 영어+숫자 조합**으로 생성이 가능합니다. (반드시 12자리를 맞출 필요가 없습니다)

- 계정이름은 한 번 생성하면 바꿀 수 없지만, 월렛에 표시되는 이름(display name)은 언제든지 변경이 가능합니다.

- 일반적인 소셜 SNS처럼 아바타(프로필 사진)을 설정할 수 있습니다. 아바타는 온체인 상으로 저장되지만 언제든지 변경이 가능합니다.

- 모든 유저들은 **한 개의 휴대폰 번호로 최대 3개까지 무료 계정 생성이 가능**합니다. `(아직은 다계정 생성을 지원하지 않고 있는 것으로 보입니다)`

- 무료계정을 생성하면 레퍼럴 코드를 받을 수 있고, **본인의 레퍼럴 코드를 통해 다른 유저가 가입할 때마다 1개의 LNX 토큰**을 받을 수 있습니다. (최대 2,100만개까지 지급)

- EOSIO코드포크 체인이지만  **RAM, CPU, NET 개념에 대해 신경쓸 필요가 없습니다.** 더불어 스테이킹도 따로 없습니다.

- Alien Invasion과 BombSweeper라는 2가지 게임을 통해서 LNX토큰을 추가로 획득할 수 있습니다.

## #3. 전체 요약
---

위의 설명을 보면 대략 눈치채셨겠지만, Lynx 체인이 구축하고자 하는 프레임워크는 **(1) 무료 계정, (2) 짧은 계정명, (3) 단순화된 리소스 모델**입니다.

현재 이오스 메인넷은 무료계정 생성이 사실상 불가능하고, 계정명은 반드시 12자리로 설정해야 하며, CPU/NET/RAM 등의 리소스 모델에 대한 이해를 필요로 하기 때문에 매스어답션이 어렵다는 것이 Lynx체인의 창립자인 Fred Krueger의 주장입니다.

현재 Lynx에서는 KYC가 없는 소셜네트워크 디앱으로 블록원의 VOICE와 경쟁하고자 하는 Chirp를 개발하고 있다고 합니다.

 과연 이들의 플랫폼의 프레임워크와 새로운 디앱은 시장에서 사용자들로부터 어떤 평가를 받게 될 것인지 흥미롭게 지켜봐야겠습니다.

- - -

This page is synchronized from the post: ['[EOS Inside] EOSIO 코드포크체인 LYNX 무료계정 생성 시작'](https://steemit.com/@donekim/eos-inside-eosio-lynx)
