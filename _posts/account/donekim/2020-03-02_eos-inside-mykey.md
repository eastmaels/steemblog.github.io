
---
title: '[EOS Inside] 초보자도 쉽게 사용할 수 있는 멀티체인 월렛 MYKEY'
permlink: eos-inside-mykey
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-03-02 23:53:03
categories:
- sct-kr
tags:
- sct-kr
- sct-coin
- liv
- zzan
- palnet
- steemleo
- s
- union
- sct
thumbnail: 'https://cdn.steemitimages.com/DQmTTxzn7tgn3WQpSxJMPsXkorismFXQDuJePJU4EXcrgoJ/1.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![1.png](https://cdn.steemitimages.com/DQmTTxzn7tgn3WQpSxJMPsXkorismFXQDuJePJU4EXcrgoJ/1.png)


안녕하세요, 디온입니다. **최근 EOS 메인넷에 CPU리소스 혼잡 현상이 발생**하면서 본인의 계정에 충분한 스테이킹 또는 임대를 통해 리소스를 확보하지 못한 유저들이 토큰 전송이나 디앱을 사용하지 못하는 경우가 많아졌습니다.

이러한 문제를 해결하기 위해서 여러 월렛 서비스들이 사용자들의 계정에 리소스를 지원해주는 자체적인 정책들을 운영하고 있으나, 오랫동안 계정을 사용하지 않았던 분들이나 스캐터를 사용할 줄 모르는 분들은 아직도 많은 어려움을 겪고 있는 것이 사실입니다.

오늘은 **키 권한, 프라이빗 키의 안전한 보관 방법, 퍼블릭키/프라이빗키 개념, 블록체인 리소스에 대한 지식 등이 없는 초보자들도 쉽게 사용할 수 있는 모바일 월렛 MYKEY를 소개**드릴까 합니다.

## #1. MYKEY Labs 소개
---
![2.png](https://cdn.steemitimages.com/DQmUBF6WUpb7TchAKfyokkWzAmktFKsTr8gPjN3pPKVUqzf/2.png)
<center><sub><https://keygroup.me/></sub></center>

**MYKEY는 2019년 8월 20일에 정식 서비스를 런칭한 멀티체인 모바일 월렛으로 이오스, 이더리움 등 다양한 퍼블릭 블록체인들을 지원**하고 있습니다. MYKEY 월렛을 개발하고 있는 MYKEY Labs팀은 국내에서는 아직 생소하지만 중국의 최대 블록체인 커뮤니티인 비후(bihu.com)와 함께 모기업인 KEY GROUP에 속해 있으며,

![3.png](https://cdn.steemitimages.com/DQmUWCLBaRoDohdC4pQTavs9ATvzAkVdEvQYt5jtYrm4SDy/3.png)


<center>![4.png](https://cdn.steemitimages.com/DQmYoXeo7qx6pGMrkBC6XL1jWTgykU9KTRF7fpsNat8LjWR/4.png)</center>
<center><sub><https://eoscannon.io/></sub></center>

MYKEY의 Technical Director인 Ricky Shi는 현재 이오스 메인넷에서 Top 21 내에 랭크되어 있는 **EOS Cannon의 공동창립자**이기도 합니다.

![5.png](https://cdn.steemitimages.com/DQmfM4aJMTNVAsXxVnKpSnnCva8b7j5NpkMxGUpGnGN7pzg/5.png)
<center><sub><[In the Eyes of a Blockchain Developer: Ricky Shi from MYKEY](https://www.dfuse.io/en/blog/in-the-eyes-of-a-blockchain-developer-ricky-shi-from-mykey)></sub></center>

> Ricky Shi와 MYKEY에 대해서 보다 자세한 내용이 궁금하신 분들은 위의 dfuse인터뷰 포스팅을 참고해보시기 바랍니다.


**현재 MYKEY는 13만 명 정도의 KYC인증이 완료된 유저들이 사용하고 있으며 일일 활성 유저수(DAU)가 20,000명 이상**에 달합니다 (아래에서 설명을 드리겠지만 MYKEY는 KYC인증을 해야 사용을 할 수 있는 월렛입니다). 분명히 KYC는 번거롭고 불편한 절차임에도 불구하고 왜 이렇게 많은 중국 커뮤니티 유저들이 사용하고 있는지에 대해서 살펴보도록 하겠습니다.



## #2. MYKEY Wallet
---

![mykey.png](https://cdn.steemitimages.com/DQmRTegBEcvV3L2P5pCeVSVMyWaxbE23j3yqf4UWYcE5G16/mykey.png)

MYKEY월렛은 이오스 메인넷과 ERC-20토큰들을 비롯한 이더리움 블록체인을 지원하고 있으며, **가장 큰 특징은 프라이빗키 관리, 블록체인 네트워크 리소스 등에 대한 지식이 없는 블록체인 초보자들도 편하게 사용이 가능하다는 것**입니다.


사실 지금까지 이오스 메인넷에서 본인의 계정을 잘 관리하고 사용하기 위해서는 프라이빗 키 권한이나 RAM/CPU/NET 등의 블록체인 리소스에 대한 이해가 필요했고 계정 생성 방법에 대해서도 사용자들이 직접 공부를 해야한다는 진입장벽이 있었습니다.


**블록체인 세계에서 프라이빗키는 일종의 공인인증서와 같은 역할**을 합니다. 본인의 계정 내에 보유하고 있는 토큰들을 거래소로 보내거나, 디앱에서 토큰들을 사용하기 위해서는 프라이빗키로 생성된 서명을 통한 인증이 필수적이다 보니 다음과 같은 문제가 발생하게 됩니다.

(1) 처음 크립토를 접한 사용자들은 프라이빗 키의 중요성에 대해 잘 이해하지 못하기 때문에 해킹당하기 좋은 곳에 보관을 하거나 분실해버리는 경우가 많습니다.

(2) 중요성에 대해서 잘 알고 있는 사용자라고 하더라도, 프라이빗 키를 안전하게 보관하는 방법에 대해 모르는 사용자들이 많습니다.

(3) 프라이빗 키가 타인에게 노출되는 경우 즉시 자산을 잃어버릴 수 있습니다.

(4) 프라이빗 키를 잃어버리는 경우에는 내 자산임에도 불구하고 접근 권한을 잃어버리게 됩니다.

![7.png](https://cdn.steemitimages.com/DQmXUKPYLSGYL6usMFBoCFy5ausPpGH6VrfQDUzWG4XUifQ/7.png)

그래서 MYKEY에서는 **KEY ID 프로토콜을 통해 위와 같은 어려움을 겪을 수 있는 초보자들도 쉽게 접근할 수 있는 월렛을 개발**하였습니다. 초보자들에게 이 월렛을 추천하는 이유는 다음과 같습니다.


- 무료로 계정을 생성할 수 있다

- 프라이빗키를 몰라도 사용이 가능하다

- 앱 비밀번호 또는 복구 문구를 잃어버려도 찾을 수 있다

- 휴대폰을 잃어버린 경우에도 계정을 찾을 수 있다

- 블록체인 리소스에 대한 개념이 없어도 사용이 가능하다

즉, 많은 초보자들이 두려워하고 진입장벽으로 생각하던 것들이 MYKEY 월렛을 사용하면 쉽게 해결이 됩니다. 그냥 **일반적으로 사용해오던 기존 앱들처럼 사용**하면 되기 때문입니다.


다만, MYKEY에서는 유저들이 앱 비밀번호, 복구 문구, 휴대폰 등을 잃어버려서 지갑에 접근을 못하는 경우 **복구 서비스를 제공하기 위해 최초에 계정 생성 시에 KYC인증을 의무화**하고 있습니다. (계정 복구를 위해서는 복구 신청자가 해당 사용자가 맞는지 반드시 확인할 필요가 있기 때문입니다)



## #3. MYKEY 다운로드 하기
---

![8.png](https://cdn.steemitimages.com/DQmW2QD5tdb7Fo3EY3cQAV1XAdPPbqRwgLBhVA41k69Cquh/8.png)

현재 MYKEY는 안드로이드 사용자만 다운로드가 가능하며, 아래의 링크를 통해 접속하시면 다운로드가 가능합니다.

- 다운로드 링크 : [MYKEY월렛 다운로드(안드로이드)](https://mykey.org/i/U7ZVGF)

상기 링크는 제 레퍼럴 코드가 포함되어 있는 링크로 현재 MYKEY팀과 공동 마케팅 이벤트를 진행 중에 있습니다. 

 해당 링크를 통해 계정을 생성하시는 경우에는 

**(1) MYKEY월렛에서 이더리움 GAS 수수료, EOS메인넷 네트워크 비용 지불에 사용 가능한 1.5불 상당의 MYKEY네트워크 비용을 기본적으로 지원**받으실 수 있고, 

**(2) 해당 링크로 가입 후 제게 EOS계정을 알려주시는 경우 0.5 EOS를 추가**로 받으실 수 있습니다.


> EOS 계정은 본 포스팅에 댓글을 남겨주시거나, 계정 공개가 꺼려지시는 경우 아래의 텔레그램, 카카오톡으로 메시지를 남겨주셔도 됩니다.
> - 텔레그램 : @donekim
> - 카카오톡 : [오픈채팅방 바로가기](https://open.kakao.com/o/sfOFcstb)


<center>![and.jpeg](https://files.steempeak.com/file/steempeak/donekim/pe3PuifG-and.jpeg)</center>

위의 링크로 접속 후 MYKEY Android 다운로드 버튼을 클릭하여 다운로드 후 회원가입을 진행하시면 됩니다.


다음 포스팅에서는 초보자분들을 위해 **회원가입 및 계정 생성을 진행하는 방법**을 자세히 다뤄보도록 하겠습니다. 초보자들 뿐만 아니라, 기존에 이오스 메인넷 월렛, 스캐터, 메타마스크(이더리움 및 ERC-20토큰)를 사용해오셨던 분들도 굉장히 유용하게 사용하실 수 있는 월렛인 관계로 꼭 한 번 다운로드 받아서 사용해보시는 것을 추천해드립니다.

- - -

This page is synchronized from the post: ['[EOS Inside] 초보자도 쉽게 사용할 수 있는 멀티체인 월렛 MYKEY'](https://steemit.com/@donekim/eos-inside-mykey)
