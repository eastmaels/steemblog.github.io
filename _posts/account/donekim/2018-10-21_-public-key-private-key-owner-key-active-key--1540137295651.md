
---
title: '[이오스 이야기] 퍼블릭키, 프라이빗키, 오너키, 액티브키 이게 다 뭐지?'
permlink: -public-key-private-key-owner-key-active-key--1540137295651
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-10-21 15:54:57
categories:
- dclick
tags:
- dclick
- coinkorea
- kr-series
- busy
- jjangjjangman
thumbnail: 'https://cdn.steemitimages.com/DQmVqig7tJfGTnDf5v1fe5bZ7Qb3TTGtydJYRU5BoekFJTM/main%20deonkim%20eos.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![main deonkim eos.png](https://cdn.steemitimages.com/DQmVqig7tJfGTnDf5v1fe5bZ7Qb3TTGtydJYRU5BoekFJTM/main%20deonkim%20eos.png)

![steemit_logo.png](https://cdn.steemitimages.com/DQmaZsenPDf5Qn5nJzDZNkVg1aCQUyXNwqwK1fk8qe4jhKa/steemit_logo.png)

안녕하세요, 디온(@donekim)입니다. 오늘은 이오스 계정에 연결되어 있는 퍼블릭키(Public key), 프라이빗키(Private key), 오너키(Owner key), 액티브키(Active key) 등 **이오스의 키쌍(Key pairs)과 권한(Permission)을 헷갈려 하시는 분들을 위해서 이오스 계정과 관련되어 있는 여러가지 키(Key)들에 대해서 자세히 설명**을 드려볼까 합니다. 

> - 키쌍(Key pairs) : 퍼블릭키(Public key), 프라이빗키(Private key)
> - 권한(Permission) : 오너키(Owner key), 액티브키(Active key)

![eos key.jpg](https://cdn.steemitimages.com/DQmNZ2BWnJ1P9EEzbHSXGEdsYxMMj7LWse1EcPtycCEeSU9/eos%20key.jpg)

최근 들어서 이오스 커뮤니티에서는 `"이오스에는 왜 이렇게 키가 많나요?", "EOSPIA에서 제 계정을 검색하니 오너키가 나오는데 이거 문제아닌가요?", "거래소에 있는 제 이오스를 제 계정으로 옮기고 싶은데 액티브키를 넣어야 되나요, 오너키를 넣어야 되나요?"` 등등의 다양한 질문들이 쏟아지고 있습니다. 

사실, 위에서 제가 예를 들었던 질문들은 모두 잘못된 질문들입니다. 이와 같은 질문들은 모두 키쌍(Key pairs)과 권한(Permission)에 대해 정확히 이해를 하지 못하고 있는 질문들인데, 사실 이오스가 다른 암호화폐들과는 달리 혼자만 여러가지 종류의 키(key)들이 존재하는 것도 아님에도 불구하고, **"퍼블릭키(Public key), 프라이빗키(Private key), 액티브키(Active key), 오너키(Owner key)"**까지 모두가 **key라는 단어로 끝나다보니 이러한 혼동이 발생**하는 것 같습니다. 

![eos wallet.jpg](https://cdn.steemitimages.com/DQmSN8HcXDq1LYVcoVnkdyxVcwHSv73kTLUK5ZgMS974msX/eos%20wallet.jpg)

**내 이오스 계정에 보관하고 있는 자산들을 안전하게 관리하기 위해서는 퍼블릭키, 프라이빗키, 오너키, 액티브키가 어떻게 차이가 있는지에 대한 개념의 차이점에 대해서 명확하게 구분하는 것이 매우 중요**합니다. 그럼 이제부터 이 여러가지 키(key)들이 어떻게 다른지에 대해서 쉽게 설명해보도록 하겠습니다. `(아래에서 설명드리는 내용들은 개념적으로 완벽하게 맞아 떨어지는 설명은 아닙니다. 다만 초보자 분들의 이해를 돕기 위해 쉬운 개념으로 단순화하고 각색한 내용들이 포함되어 있습니다)`






## #1. 이오스에는 키가 4종류나 있다고?

------

**아니오, 그렇지 않습니다.** 아주 단순하게 결론부터 말씀드리면, **이오스 계정과 관련된 키는 퍼블릭키(Public key)와 프라이빗키(Private key) 2가지만 존재**합니다. 본 포스팅 초반에 위에서 구분해놓기도 하였지만 일반적으로 키쌍(key pairs)이라고 부르는 서로 1:1로 매칭이 되어 있는 퍼블릭키와 프라이빗키만이 이오스 계정과 관련된 키들입니다.

![key.jpg](https://cdn.steemitimages.com/DQmegkkvvdaA9RHaW8uK7KYL3Z8Hj91Kdks5hcy8Q2ApuPR/key.jpg)

예를 들어 설명하자면 **퍼블릭키(Public key)는 자물쇠, 프라이빗키(Private key)는 열쇠로 비유**를 할 수 있는데, 하나의 퍼블릭키라는 자물쇠는 오로지 이 자물쇠를 열수 있는 하나의 프라이빗키라는 열쇠와 연결이 되어 있습니다. **1:1의 관계로 연결이 되어서 서로 쌍을 이루고 있기 때문에 우리는 서로 연결이 되어 있는 퍼블릭키와 프라이빗키를 키쌍(Key pairs)**이라고 부릅니다. 

> 사실 정확히는 퍼블릭키(Public key)는 암호화(encryption)를 하는데 사용하는 키, 프라이빗키(Private key)는 복호화라고 암호화를 해독(decryption)하는데 사용하는 키라고 하는 것이 더 정확하지만 위와 같이 자물쇠, 열쇠의 관계 정도로만 이해하셔도 무방합니다.

![key generate.png](https://cdn.steemitimages.com/DQmb7RFpZcpFPY46GHzGyD55D7ZMUqawdVSnLcWBhZ3uFEm/key%20generate.png)


이오스의 키쌍(퍼블릭키와 프라이빗키)은 위와 같이 생겼으며, 얼마든지 추가로 발급을 받을 수 있습니다. 얼핏 보았을 때는 둘 다 알아보기 힘든 영어 대문자/소문자 및 숫자가 불규칙적으로 섞여 있는 하나의 문장 형태로 되어 있지만, 퍼블릭키와 프라이빗키는 시작되는 글자와 자릿수에서 차이점이 있습니다.

**① 퍼블릭키(Public Key) : EOS라는 글자로 시작하는  53자리 문구**
> `EOS6yQRriBqU4EE7xmE7HDhnYhepL7adZRfDrp7A58RToV9pw6cdE `

**② 프라이빗키(Private Key) : 숫자 5로 시작하는 51자리 문구**
> `5KRQ7XK5oU48pqABR2bkiwqP6oZj2W1Fb6stJgjdoNhBZsVYK7m`

퍼블릭키와 프라이빗키 사이에는 신기한 관계가 존재하는데, **프라이빗키를 알고 있으면 언제든지 손쉽게 해당 프라이빗키와 연결된 퍼블릭키를 찾을 수 있습니다.** 반면에 퍼블릭키를 알고 있다고 해서 프라이빗키를 찾을 수 있는 방법은 존재하지 않습니다. `(그래서 퍼블릭키는 잃어버려도 상관이 없지만 프라이빗키는 절대 잃어버려서도 안되고, 누군가에게 알려주어서도 안되는 것입니다)`

> 우리가 백화점에서 차를 어디에다 세워놨는지 헷갈릴 때 스마트키를 눌러서 차를 찾을 수 있는 것처럼 차키(프라이빗키)만 가지고 있으면 얼마든지 자동차(퍼블릭키)를 쉽게 찾을 수 있지만, 차를 어디에 세워 두었는지 알고 있다고 하더라도 차키를 찾을 수는 없는 것과 같은 이치입니다. 

대략 퍼블릭키와 프라이빗키에 대한 개념이 이해가 되셨나요? **분명히 오너키(owner key)와 액티브키(active key)라는 단어를 들었는데 왜 이오스 계정과 관련된 키는 퍼블릭키와 프라이빗키 2개 밖에 없다고 하는 걸까요?** 그 이유에 대해서는 아래에서 살펴보도록 하겠습니다.


## #2. 이오스 계정 이해하기
---

오너키와 액티브키에 대해서 설명하기 전에, 이오스 계정부터 먼저 살펴보도록 하겠습니다. 사실 많은 분들이 이오스 계정을 세팅하고 사용하는 방법에 대해서 굉장히 낯설고 어렵게 느끼지만 실상은 그렇게 낯설고 어려운 개념이 아닙니다. 

**이오스 계정은 오히려 우리가 그동안 익숙하게 사용하던 시스템과 굉장히 유사**함에도 불구하고, 많은 사용자들이 비트코인이나 이더리움 지갑을 사용하면서 **마이이더월렛 같은 체계에 적응을 했다가 다시 인터넷 포털 사이트와 같은 체계로 돌아와버렸기 때문에 낯설고 어렵게 느껴지는 것 뿐**입니다. 


![naver.png](https://cdn.steemitimages.com/DQmYPb97BN2ZKYKbEkUyUD6vB96ZfuGdu3btc5J2h9wQGa3/naver.png)

네이버의 계정을 예를 들어 설명해보겠습니다. 우리가 사용하는 많은 사이트들은 사용자들의 계정 아이디와 해당 아이디에 설정되어 있는 비밀번호 정보를 가지고 있습니다. 네이버에서 내 계정으로 로그인하기 위해서는 아이디와 패스워드를 모두 입력해야 합니다. **특정 아이디에 미리 설정해놓은 비밀번호가 일치해야만 로그인이 가능**한 것입니다. 

![myetherwallet.png](https://cdn.steemitimages.com/DQmYYEg6mZQKAVhv9owVGWzs5oVs6GLZ5qtaNHdShbPKFfY/myetherwallet.png)

하지만 이더리움의 마이이더월렛과 같은 암호화폐 계정에 로그인하는 것은 방식이 조금 다릅니다. 내 지갑에 보유하고 있는 토큰들을 확인하거나 다른 누군가에게 전송하기 위해서 로그인을 하려면 **"굳이 아이디(주소)를 입력할 필요 없이 프라이빗키(Private key)라고 부르는 비밀번호만 입력하면 해당 비밀번호와 연결되어 있는 아이디로 로그인"**이 됩니다. 

![ether address.png](https://cdn.steemitimages.com/DQmTTTrKKzZcednhc3MopQCycJ78Ddfbz8xFH3f6T3MNsum/ether%20address.png)

이 말인 즉슨, **계정ID와 비밀번호가 1:1로 연결이 되어 있다는 것을 뜻하고 우연하게라도 나와 동일한 프라이빗키를 사용하고 있는 사람은 아무도 없다는 것을 의미**합니다. 그렇기 때문에 프라이빗키만 입력하면 자동으로 로그인이 되면서 내 계정의 정보를 불러올 수 있게 되는 것입니다. 

예를 들어서 제가 네이버에 사용 중인 아이디는 `donekim`이고, 해당 아이디의 비밀번호가 `1234567!!@#`인 경우에, 실수로 비밀번호만 노출되었다고 하더라도 아이디를 모르면 접속을 할 수 없으나, 이더리움 지갑 계정의 경우에는 비밀번호만 입력해서 로그인을 하면 얼마든지 아이디를 자동으로 확인할 수 있게 되는 것입니다.

사실 이와 같은 체계는 **"프라이빗키(비밀번호)가 유출되면 누구든지 내 계정 아이디를 알지 못하더라도 언제 어디서나 바로 내 계정에 접근할 수 있게 된다는 문제"**를 가지고 있습니다. 계정주소와 비밀번호가 1:1로 고정되어 있기 때문에 이와 같은 문제가 발생하게 되는 것입니다. 


![password change.png](https://cdn.steemitimages.com/DQmY4AymRv3oW2T4RPse31jdC1AzydDPfSaYAhmfVdJAmDj/password%20change.png)

네이버 계정과 같은 경우에는 누군가가 나의 비밀번호를 해킹했거나, 실수로 내 비밀번호를 타인에게 유출하였다고 하더라도 얼마든지 비밀번호를 바꿀 수 있습니다. donekim이라는 계정에 달려있는 자물쇠와 열쇠를 바꿔버리면 되는 것입니다. 

하지만 **이더리움 지갑 계정의 경우에는 비밀번호만 바꾸는 것이 불가능하기 때문에, 만약에 타인이 나의 비밀번호(프라이빗키)를 알게 되었다면 해당 계정을 영원히 사용이 불가**한 계정이 되어버리고, 다른 계정을 다시 생성하고 해당 계정으로 자산들을 옮겨야만 소중한 자산들을 지킬 수 있습니다. 

![eos account.png](https://cdn.steemitimages.com/DQmauo64unkM2SRE7o9iqsqguzF7wWCVaHXuNNqTZ9eBfGG/eos%20account.png)

**이오스에서는 이러한 문제를 해결하기 위해서 기존의 네이버 포탈 아이디처럼 특정 계정의 비밀번호가 유출된 경우 이 비밀번호를 새로 설정할 수 있는 시스템이 내장**되어 있습니다. 

![steemdonekim.png](https://cdn.steemitimages.com/DQmYxzvgKCmmEpwdChYVBfeUGoJGGFDH9ykydFcCT6YeaBL/steemdonekim.png)

먼저, 이오스에서는 이더리움처럼 계정 주소를 `0xa95Fd49830045b9dc43D75C18b072E155fE98B80` 이런 복잡한 난수들을 사용하는 대신에 **"영문+숫자 12자리 이내로 구성된, 사람이 읽을 수 있는 문자"**로 사용할 수 있습니다. 마치 네이버의 아이디로 donekim을 사용하는 것처럼 말이죠. 

![steemdonekim permission.png](https://cdn.steemitimages.com/DQmbSLpbaDq4kqD7tqEQn9Va3DwUw2SaxdQ1YWgypx3tA4V/steemdonekim%20permission.png)


그리고 해당 계정에 위에서 설명한 자물쇠(퍼블릭키)를 달아놓을 수 있습니다. 저는 `steemdonekim`이라는 계정에 `EOS76oCCqyBEXWvjrzr2AwzwfLLB9CMnNYDhnCGLJztACPXVwyVJg`이라는 자물쇠(퍼블릭키)를 달아 놓았습니다. 그리고 이 자물쇠를 열 수 있는 열쇠(프라이빗키)는 아무도 알지 못하는 곳에 잘 보관해두고 있습니다. 혹시라도 steemdonekim이라는 계정에서 토큰을 꺼낼 필요가 있거나, 투표에 참여하는 등 계정에 접근할 필요가 있을 때에만 프라이빗키로 계정을 열어서 사용합니다.

만약 누군가가 제 프라이빗키를 알게 되어 steemdonekim이라는 계정에 접근할 수 있게 되는 상황이 발생하는 경우에는, 저는 해당 계정에 `EOS76oCCqyBEXWvjrzr2AwzwfLLB9CMnNYDhnCGLJztACPXVwyVJg`라는 자물쇠 대신에 다른 자물쇠를 고쳐서 달면 steemdonekim이라는 계정을 계속 사용할 수 있습니다. 

즉 **이오스에서의 계정은 프라이빗키와 1:1로 매칭되는 것이라기 보다는, 해당 계정에 걸어놓은 자물쇠(퍼블릭키)와 1:1로 매칭되는 것이기 때문에 동일한 계정의 비밀번호(프라이빗키)를 얼마든지 바꿔가면서 사용하는 것이 가능**합니다. 



## #3. 이오스 계정에 숨겨진 안전장치, 권한의 분리!

------

여기까지 읽으신 분들 중에 **"자물쇠와 열쇠를 통째로 바꿀 수 있는 것도 문제가 되지 않을까요? 이미 내 계정의 프라이빗키를 알게 된 사람이 내 계정에 연결된 자물쇠와 열쇠를 먼저 바꿔버릴 수 있으니까요"**라는 궁금증이 생기는 분들이 있으실 것 같습니다. 

계정에 연결되어 있는 자물쇠와 열쇠를 변경해서 해당 계정을 계속 사용할 수 있도록 편의성을 높인 것은 좋지만, 만약에 내 프라이빗키를 알게된 해커가 내 계정의 자물쇠와 열쇠를 먼저 바꿔버리면 이 또한 기존 이더리움 지갑 계정과 큰 차이가 없게 됩니다.

그래서 이오스에서는 또 하나의 안전장치를 만들어 놓았는데, 그것이 바로 **"권한의 분리"**라는 것입니다. 이 권한의 분리라는 안전장치로 인해 **"오너키(Owner key)와 액티브키(Active key)라는 용어가 등장"**하게 됩니다. 

![steemdonekim permission2.png](https://cdn.steemitimages.com/DQmWtbhmLN9xoMh6gWVLSiQBmUJqbioupEbCzraNW8q8y6b/steemdonekim%20permission2.png)

위에서 `steemdonekim`이라는 계정에 `EOS76oCCqyBEXWvjrzr2AwzwfLLB9CMnNYDhnCGLJztACPXVwyVJg`이라는 퍼블릭키를 달아놓은 모습을 보여드렸었는데, 거기서 잘 보시면 계정에 동일한 퍼블릭키가 두 번 나타나는 것을 확인하실 수 있습니다.  하나는 앞에 `active`라는 단어가 붙어있고, 또 다른 하나는 `owner`라는 단어가 붙어 있는 것을 보실 수 있는데, **이것이 바로 권한이 분리되어 있다는 것을 의미**합니다. 

**이오스 계정은 보다 안전하게 계정을 사용할 수 있도록 안전장치가 마련되어 있는데, 그 안전장치가 바로 권한의 분리**입니다. 그 권한은 **"소유권한(Owner Authority)"**과 **"활동권한(Active Authority)"** 2가지로 구분이 됩니다. 그렇다면 이 둘의 권한은 어떤 차이가 있는지 살펴보도록 하겠습니다.

**① 소유권한(Owner Authority)**

<center>![owner.jpg](https://cdn.steemitimages.com/DQmey1aQActHnEpRjFSVH3z6CYvsZbUknrFbdAajEPWAEjx/owner.jpg)</center>

**소유권한은 가장 높은 수준의 권한**이라고 할 수 있습니다. 말 그대로 내 계정의 소유권이 나에게 있음을 증명하는 권한으로 평소에는 잘 사용할 일이 없고 매우 위급하거나 중요한 상황이 발생했을 때만 사용하는 권한입니다. **이 권한을 사용하면 내 계정에 연결해놓은 키쌍(key pairs)을 변경**할 수 있습니다. 즉, 해당 계정에 연결해놓은 키쌍(퍼블릭키+프라이빗키)를 변경할 수 있는 것으로, 한 마디로 **비밀번호를 변경할 수 있다는 뜻**입니다. 

**② 활동권한(Active Authority)**

<center>![active.png](https://cdn.steemitimages.com/DQmNTwghk9LYWz5avPFnKRnUjRJ14XfMFVTSjA79zmNoPhB/active.png)</center>

**활동권한은 한단계 낮은 수준의 권한**이라고 할 수 있습니다. 말 그대로 내 계정을 이용하여 토큰을 전송하거나, 게임을 하거나, 투표를 하는 등 트랜잭션을 발생시키는 여러가지 활동을 할 때 해당 계정의 활동을 승인할 수 있는 권한으로 평소에 굉장히 빈번하게 사용하는 권한입니다. **이 권한을 사용하면 내 계정에 로그인을 해서 토큰을 전송하거나, 게임을 하거나, 투표에 참여**할 수 있습니다. 즉 **일상적인 활동을 승인할 수 있다는 뜻**입니다.


![active key.png](https://cdn.steemitimages.com/DQmU4HRxVjFMZTHf7FNeY6LHDEZfvrW733S18AVTqsvfzDx/active%20key.png)
> 이미지 출처 : [EOSNOVA 미디엄](https://medium.com/eosnova/eos%EB%8A%94-key%EA%B0%80-%EC%99%9C-%EC%9D%B4%EB%A0%87%EA%B2%8C-%EB%A7%8E%EC%9D%80%EA%B1%B0%EC%A3%A0-9ab4790b73f7)


즉 나의 계정(Account) 안에 소유권한과 활동권한이라는 2가지의 권한이 나누어져 있고, 이런 2가지의 권한에 설정해 놓은 키쌍(퍼블릭키+프라이빗키)을 우리는 **"오너키(Owner key)"** 또는 **"액티브키(Active key)"**라고 부릅니다. 

- 오너키(Owner key) : **소유권한(Owner Authority)**에 달아놓은 자물쇠(퍼블릭키)와 열쇠(프라이빗키)로 Owner Authority Key pairs를 줄여 Owner key라고 부르는 것

- 액티브키(Active key) : **활동권한(Active Authority)**에 달아놓은 자물쇠(퍼블릭키)와 열쇠(프라이빗키)로 Active Authority Key pairs를 줄여 Active key라고 부르는 것


![single key.png](https://cdn.steemitimages.com/DQmYWmK5ZZYRG7kDGMUpvLCFaPf7YfM3BwEZxskV9tV4X8v/single%20key.png)

**일단 계정의 기본값은 권한에 관계 없이 동일한 키쌍(퍼블릭키+프라이빗키) 1개만을 사용하도록 설정**이 되어 있습니다. 왜냐하면 계정의 권한에 대해서 이해를 하지 못했더라도 사용할 수 있도록 하기 위함입니다. (위의 그림에서 보면 active와 owner에 동일한 자물쇠가 달려 있는 것을 확인하실 수 있죠?)

기본적으로는 소유권한(Owner Authority)과 활동권한(Active Authority)을 모두 하나의 키쌍(퍼블릭키+프라이빗키)에게 부여해줌으로써 **하나의 프라이빗키(Private key)만 있어도 해당 계정에 소유권을 행사할 수 있는 권리, 그리고 활동을 할 수 있는 권리를 동시에 주장할 수 있는 것**입니다.

![multi key.png](https://cdn.steemitimages.com/DQmbSkzgcD3kU85tWUzVwPLUcMdfgh7LdGYz8DHACUJuBnH/multi%20key.png)

그러나 권한에 대해서 충분히 이해하고 계정을 보다 안전하게 사용하고 싶은 사용자들은 이러한 기본 설정을 변경하여 보다 안전하게 계정을 사용할 수 있는데, 그 방법은 **위와 같이 active권한과 owner권한에 다른 자물쇠를 걸어놓는 것**입니다. 


![transfer.png](https://cdn.steemitimages.com/DQmNQWUaqcR1D13JiKHkFY9pp7bjKEEwnPrD2JeSqVT5ccm/transfer.png)

![vote.png](https://cdn.steemitimages.com/DQmeDoPqr3G7N96t9ExyT7g5KcJejNrorr11MdwXtm18amB/vote.png)

![sell item.png](https://cdn.steemitimages.com/DQmaMdE9obnVEk3p7BqAx5yvDAWgfPw5Abm6GKY7MrV5VYQ/sell%20item.png)


이오스 계정 소유자들은 대부분은 스캐터에 계정 정보를 등록해놓고, 토큰을 전송하거나, 투표에 참여하거나, 게임을 즐기는 등 여러 일상적인 활동을 즐기게 됩니다.

<center>![vault.png](https://cdn.steemitimages.com/DQmbiLXZ8oQQuFEZvsCH2pxzAKZe2uKtSX2FNN623yJXBsy/vault.png)</center> 

이런 일상들을 즐기기 위해서는 어쩔 수 없이 해당 계정의 프라이빗키를 스캐터에 등록해놓아야 하는데, 이 과정에서 혹시라도 컴퓨터가 해킹을 당한 경우 프라이빗키 유출 위험에 노출이 될 수 있습니다. 그래서 이와 같은 위험에서 조금이라도 더 계정을 안전하게 사용하기 위해서 소유권한(Owner Authority)과 활동권한(Active Authority)에 다른 키쌍을 연결시키는 방법을 사용할 수 있습니다. 왜냐하면 **일상적으로 우리가 토큰을 전송하거나, 투표에 참여하거나, 게임을 즐길 때에는 활동권한(Active Authority)만 등록되어 있으면 되기 때문**입니다. 

<center>![scatter.png](https://cdn.steemitimages.com/DQmU85SVRNohMCf7ECgCYcCSVtpL7a6bmN68WtGMfbtpkGk/scatter.png)</center>

우리가 일상적인 활동을 할 때는 소유권한(Owner Authority)을 사용할 필요가 전혀 없습니다. `(토큰 전송, 투표 참여, 게임을 즐기는 모든 활동은 액티브키를 사용하면 되죠!)` 그래서 소유권한과 연결한 키쌍(Owner key)은 해킹을 당할 일이 없도록 종이에 적어놓는 방법 등을 통해 안전한 곳에 보관하고, 활동권한과 연결한 키쌍(Active key)만 등록하여 일상을 즐기다가, **혹시라도 해당 액티브키가 해킹당한 비상상황에서만 오너키를 사용해서 활동권한과 연결한 키쌍(Active key)를 변경해버리면 계속해서 안전하게 계정을 사용**할 수 있습니다. 

---

설명이 굉장히 길어졌지만, 사실 이오스 계정에는 4가지의 키가 존재하는 것이 아닙니다. **퍼블릭키와 프라이빗키라는 한 쌍의 키에 어떤 권한을 줄 것이냐에 따라 여러 조합이 나타나는 것일 뿐**입니다. 만약 계정이 10개가 있다고 하더라도 10개 계정 모두 소유권한과 활동권한을 1개의 키쌍에 연결시켜 놓은 사용자는 10개 계정을 모두 사용할 수 있는 1개의 마스터키쌍을 가지고 있는 것일 뿐이고, 1개의 계정을 사용하더라도 소유권한과 활동권한을 각각의 키쌍에 연결시켜 놓은 사용자는 1개 계정에 사용할 수 있는 2개의 키쌍을 가지고 있는 것입니다. 혹시라도 지금까지 퍼블릭키, 프라이빗키, 오너키, 액티브키의 개념에 대해서 헷갈리셨던 분들이 있으시다면 이번 포스팅을 통해 키쌍(Key pairs)과 권한(Permission)의 차이를 정확히 이해하셨길 바랍니다 :D









<center>![donekim.gif](https://cdn.steemitimages.com/DQmP5rc6mLfZAU56skFU2MkzywZQ5qWruKpyU2hq5nT7md7/donekim.gif)</center>


<center>![behind banner.gif](https://cdn.steemitimages.com/DQmXBUz3S7u2z13jB39UNUder7HUADC9DvHibUEu7DTu3MR/behind%20banner.gif)



<center><pre> H O P E   F O R   T H E   B E S T , 
P L A N   F O R   T H E   W O R S T</pre>
<sub> https://steemit.com/@dONekim</sub></center>
***
#####  <sub> **Sponsored ( Powered by [dclick](https://www.dclick.io) )** </sub>
##### [스티미언 참여형 맞춤법, 띄어쓰기, 어법 프로젝트[글을 쓰겠다는 분은 필독]](https://api.dclick.io/v1/c?x=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjIjoiZG9uZWtpbSIsInMiOiItcHVibGljLWtleS1wcml2YXRlLWtleS1vd25lci1rZXktYWN0aXZlLWtleS0tMTU0MDEzNzI5NTY1MSIsImEiOlsyNDldLCJ1cmwiOiJodHRwczovL3N0ZWVtaXQuY29tL2RjbGljay9Aa2diaW50ZXJuYXRpb25hbC8tLTE1Mzk4NTc3OTEzODEiLCJpYXQiOjE1NDAxMzcyOTUsImV4cCI6MTg1NTQ5NzI5NX0.sdOUt-MD9y1wEenPWnL1u3a97sEwYwRbYfIWMAX4nxg)
<sup>스티미언 참여형 맞춤법, 띄어쓰기, 어법 프로젝트 001 ← 이 글에 보팅하지 마세요. Pay...</sup>
<br><center>![logo](https://steemitimages.com/200x100/https://cdn.steemitimages.com/DQmbjkrc5UT4GgZXygAnS3mLrboAy7Y8gr7R7guB8HG3f5n/logopad500.png)<br><br>이 글은 스팀 기반 광고 플랫폼<br>[dclick](https://www.dclick.io) 에 의해 작성 되었습니다.</center>

- - -

This page is synchronized from the post: ['[이오스 이야기] 퍼블릭키, 프라이빗키, 오너키, 액티브키 이게 다 뭐지?'](https://steemit.com/@donekim/-public-key-private-key-owner-key-active-key--1540137295651)
