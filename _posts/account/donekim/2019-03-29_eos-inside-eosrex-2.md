
---
title: '[EOS Inside] EOSREX 알아보기 #2편 테스트넷 설정법'
permlink: eos-inside-eosrex-2
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-03-29 02:02:39
categories:
- coinkorea
tags:
- coinkorea
- kr-series
- jjm
- mini
- busy
thumbnail: 'https://cdn.steemitimages.com/DQmVP5QP8FzknhmnodNMCZuxAbHMSQ7P48eRgg69dPzQMf8/2.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![2.png](https://cdn.steemitimages.com/DQmVP5QP8FzknhmnodNMCZuxAbHMSQ7P48eRgg69dPzQMf8/2.png)

안녕하세요, 디온(@donekim)입니다. 본 포스팅은 지난 [[EOS Inside] EOSREX 알아보기 #1편 기초내용](https://steemit.com/eosio/@donekim/1553647554292-eos-inside-eosrex---1-)에 이어지는 포스팅입니다. 오늘은 **EOSREX를 정글 테스트넷에서 직접 체험해보기 위해 스캐터 데스크탑 네트워크 설정, 테스트넷 계정 생성 등 기초적인 것들을 세팅하는 방법**에 대해서 알려드리도록 하겠습니다.


현재 EOSREX는 https://eosrex.io/ 사이트에서 스캐터 데스크탑 로그인을 통해 직접 체험해볼 수 있으나, 해당 버전은 이오스 메인넷이 아닌 정글 테스트넷에서 진행되고 있는 관계로 **①스캐터 데스크탑에서 별도의 네트워크를 설정하고, ②정글 테스트넷 계정을 새로 생성해야 하며, ③해당 계정을 스캐터 데스크탑에 등록**해야만 참여가 가능합니다.

## #1. 스캐터 데스크탑 네트워크 설정하기
---

![3.png](https://cdn.steemitimages.com/DQme4BAGbCCQTytnPwV4hesV1VUsmH4w8JdzPm5ihEPtnCZ/3.png)

① 스캐터 데스크탑 로그인 후에 우측 상단에 보이는 “설정” 아이콘 클릭

![4.png](https://cdn.steemitimages.com/DQmc2k3FSCMAW6QXNsLK4g8V5BRVCiTDFCVZctjEGgwHycE/4.png)

② 좌측에 보이는 Networks 탭 클릭

![5.png](https://cdn.steemitimages.com/DQmfRLVJu3GjekTTzmKrHHffxnBNMdHeVEGdi9Y4dqdeZxj/5.png)

③ 다시 한 번, 스캐터 데스크탑 로그인 비밀번호 입력

![6.png](https://cdn.steemitimages.com/DQmT2y8KwqKnTNEvonSUcmsbovZ5SRYqAE2F4kaQYNYUJkD/6.png)

④ 위와 같은 화면이 나타나면 “Add”라고 되어 있는 파란색 버튼 클릭

![7.png](https://cdn.steemitimages.com/DQmNeTzniFPPqKGDY3SCuodpuTfj8CYAYkR59EDpccuKf4K/7.png)

⑤ 위의 그림에서 볼 수 있는 것과 같이 “Name”, “Host”, “Port”, “Chain ID”정보를 입력해줍니다. 아래의 내용을 복사 붙여넣기 해주세요

>- Name : Jungle Testnet
>- Host : jungle2.cryptolions.io
>- Port : 443
>- Chain ID : e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473

![8.png](https://cdn.steemitimages.com/DQmaVMcHuDJ1srYM5KRyPojgXWmny6SBY8PpzDrQNLxfRpz/8.png)

⑥ 모두 입력이 완료되었으면 “Add”버튼을 클릭하고 “Network Saved!”라는 메시지가 뜨는지 확인해주세요. 이제 정글 테스트넷의 네트워크 정보 등록이 완료되었습니다.


## #2. 정글 테스트넷 계정 생성하기
---

자, 이제 정글 테스트넷 네트워크 설정이 완료되었으니 테스트넷 계정을 생성하러 가 볼까요?

**정글 테스트넷은 이오스 메인넷과는 별도의 네트워크이기 때문에 기존에 등록해놓은 이오스 메인넷 계정을 사용하실 수 없습니다. 따라서 정글 테스트넷 계정을 별도로 생성**해야 하는데 테스트넷인 관계로 계정생성 방법이 굉장히 간단합니다. 

아래에서 계정 생성방법에 대해서 설명을 드릴께요 :)

![9.png](https://cdn.steemitimages.com/DQmX4bqNgKZnXnMTnxJFr65h3Uy3pgVRjRLQ8cChtFf9K4k/9.png)

① 이오스 메인넷처럼 정글 테스트넷에서도 나의 계정에 사용할 키쌍을 생성해야 합니다. 다시 스캐터 데스크탑 메인 페이지로 돌아가서 “Add Keys”를 클릭해주세요.

![10.png](https://cdn.steemitimages.com/DQmSKhwcUQVBGnjBnwqd2srtqJMXx3iCmJCqY3RxFs4r3BA/10.png)

② Create Key버튼 클릭

![11.png](https://cdn.steemitimages.com/DQmeZ2wtspnut14WnHocgR54DcTv29mvBqYsQ1QXteHfGJ3/11.png)

③ 좌측에 보이는 열쇠모양의 아이콘 클릭

![12.png](https://cdn.steemitimages.com/DQmP2c9ceA6JUjFUZNLaSLPkcAAsM5AwnHLH13XDea499Vk/12.png)

④ 위와 같이 키쌍이 생성되면 EOSIO문구 우측에 보이는 “Copy”버튼 클릭 후에 좌측 상단에 보이는 “Back”메뉴를 클릭해주세요.

![13.png](https://cdn.steemitimages.com/DQmP8Hx2rKTCZSv9FBZrrSsddDBUGuRZZen5fzjFi63dUp1/13.png)

⑤ 이오스 메인넷 계정과 헷갈리지 않게 Key Name 하단 박스에 보이는 부분의 문구를 수정해줍시다.

![14.png](https://cdn.steemitimages.com/DQmd6m4jZEi7NCez7hLdm6tDBEjBghRvkrRFMstP96sw3aJ/14.png)

⑥ 저는 EOSREX Test Account라고 입력했습니다. `(본인이 알아보실 수만 있으면어떤 문구를 입력하셔도 상관없습니다)` 그 다음 다시 “Back”버튼을 클릭해서 초기 페이지로 나가주세요.

![15.png](https://cdn.steemitimages.com/DQmdFV4cv4ZzcrycZrN7gBDA7ASisxt7yfZyL5SqDL6t5Ri/15.png)

⑦ 위와 같이 EOSREX Test Account 키쌍 정보가 스캐터 데스크탑에 등록된 것을 확인하실 수 있습니다.

![16.png](https://cdn.steemitimages.com/DQmaFa7gwSTHSBk5U52UxXH68w8bK9Uz1HrVWM8n14tbv5X/16.png)

⑧ 이제 정글 테스트넷 계정생성 사이트(https://monitor.jungletestnet.io/#account)에 접속해주세요.

![17.png](https://cdn.steemitimages.com/DQmPmJvi7PKB3ZPmxuvWeRnvHzHYCLgMugfaz9UwneurQZj/17.png)

⑨ 위와 같이 정글테스트넷에서 사용할 계정의 정보를 입력해주세요

- Account Name : 정글 테스트넷에서 사용할 12자리의 계정이름 입력
> 정글테스트넷의 경우에도 이오스 메인넷과 동일하게 영문 A부터 Z, 숫자 1부터 5까지만 입력이 가능합니다
- Owner Public Key : 위의 ④번 과정에서 복사한 퍼블릭키 붙여넣기
- Active Public Key : Owner Public Key와 동일한 퍼블릭키 붙여넣기

Account Name, Owner Public Key, Active Public Key 정보를 모두 입력하셨으면 “로봇이 아닙니다”라는 문구 앞에 보이는 체크 박스를 클릭하신 뒤에 “Create”버튼을 클릭해주세요

![18.png](https://cdn.steemitimages.com/DQmXYStp8a6xbP15eTH9Yk4qV8tbjSH8vCYVNmvcDfsbjjv/18.png)

> [참고사항] 만약에 Create 버튼 클릭 후 하단에 위와 같이 **“Cannot Create account named OOO, as that name is already taken”**이라는 메시지가 나오면 해당 계정이름이 이미 등록되어 있다는 뜻이므로, 다른 계정이름을 입력해주시기 바랍니다.

![19.png](https://cdn.steemitimages.com/DQmdQDKFRGAbd72SCJK5vKcbsArsmWBrMoAT9k8yWGnAAS5/19.png)

⑩ 위와 같은 메시지가 나왔다면 계정정보가 성공적으로 등록된 것입니다. (간혹 붉은색 메시지가 떠서 문제가 있다고 생각하시는 분들도 있는데, 정상적으로 계정생성이 완료된 것이니 신경쓰지 않으셔도 됩니다)

![20.png](https://cdn.steemitimages.com/DQmabVaHa9bBajpQdJtA9GGH4CjMbyUNKTMLhm1FMDn9ThM/20.png)

⑪ 이제 스캐터 데스크탑으로 다시 돌아가서 상단에 보이는 “Refresh”버튼을 클릭해서 정글 테스트넷에 내 계정이 잘 연결되는지 확인해주세요. 위와 같이 “Linked Accounts”에 계정 정보가 나타나면 계정생성이 모두 완료된 것입니다.



## #3. EOSREX 로그인하기
---

자 그럼 계정생성이 모두 완료되었으니 EOSREX에 로그인을 해볼까요?

아닙니다. 계정은 생성되었지만, 아직 해당 계정에 보유 중인 EOS가 없기 때문에 테스트를 해보고 싶어도 테스트를 할 수가 없습니다. 그래서 해당 계정에 EOS토큰을 넣어줘보겠습니다.

EOS메인넷과는 달리 테스트넷에서는 공짜로 가상의 EOS토큰을 얻을 수가 있거든요 :)

![21.png](https://cdn.steemitimages.com/DQmTnKJ2FXveHFXQcQDpwuQDmGr9bzExXCSD48H3HtaPBcW/21.png)

① 정글 테스트넷 메인 페이지(https://monitor.jungletestnet.io/#home)에 접속해주세요. 그러면 상단 가운데 쯤에 “Faucet”라는 문구가 보이실겁니다. 이걸 클릭해주세요.

![22.png](https://cdn.steemitimages.com/DQmQeCAF3kfrQ22f9tbTruSxnAMWvWuQTm71L6FU2H8kLi6/22.png)

② 위와 같은 화면이 나타나면 Account Name 우측 빈칸에 방금 생성한 12자리의 이오스 계정이름을 입력해주세요.

![23.png](https://cdn.steemitimages.com/DQmeqnfKW5NFZKwedgcn3J6zYYsMf9fpSVH8hjo842Xy3om/23.png)


③ 저는 eosrexjungle이라는 계정을 생성했었으니 이 계정이름을 넣고 로봇이 아닙니다를 체크한 후에 Send Coins를 클릭해보겠습니다.

![24.png](https://cdn.steemitimages.com/DQmRFJ3rC3XmtXpPitr2YymqcEHmLYRfh6vjSucqmS64vMC/24.png)


④ “Send Coins”를 클릭하면, 위와 같은 메시지가 나타나면서 내 계정으로 100개의 EOS토큰이 들어오게 됩니다.

> 참고로 계속해서 EOS토큰을 얻으실 수는 없고, 6시간에 한 번만 얻을 수 있습니다. 추가로 EOS토큰을 얻고 싶으시면 6시간 뒤에 다시 실행하시면 됩니다

![25.png](https://cdn.steemitimages.com/DQmTSRs1vjVDQh4zYHoeSrqeNMnukVoe3VonTG9esZDY5Vs/25.png)

⑤ 이제 EOS토큰을 얻었으니, EOSREX사이트(https://eosrex.io/)에 로그인을 해보겠습니다. 해당 사이트에 접속하신 뒤 우측 상단에 보이는 :Login with Scatter”라는 문구를 클릭해주세요.

<center>![26.png](https://cdn.steemitimages.com/DQmRRUR9tYz87sMb5BHVc63wGiZqnyWFYCm5RmmvYeR9j5S/26.png)</center>

⑥ 위와 같이 스캐터 팝업창이 정상적으로 뜨는 것을 확인하실 수 있습니다. “Login”버튼을 클릭해주세요.

위와 같이 스캐터 데스크탑 팝업창이 나타나지 않는다면 네트워크 설정이나 계정생성이 정상적으로 되지 않은 것이므로, 다시 처음으로 돌아가셔서 잘못 설정한 것이 없는지를 확인해보시기 바랍니다.

![27.png](https://cdn.steemitimages.com/DQmdyv2DjSDj4n7WqBdKWEHCMKyN8XeTs2PBiuVTSHpKLv9/27.png)

⑦ 짜잔, 정상적으로 로그인이 되신 것을 확인하실 수 있습니다. 위의 화면을 보시면 아시겠지만 만약에 위의 ④번 과정에서의 Faucet을 통해 토큰을 받아오지 않으면 해당 계정에는 CPU와 NET에 각각 1개씩 스테이킹 된 2개의 EOS밖에 없습니다.

일단 여기까지 따라오셨으면 **EOSREX 테스트를 위한 모든 준비가 완료**되신 겁니다. 언제든지 필요한 EOS토큰은 6시간 마다 100개씩 충전하실 수 있기 때문에 자유롭게 테스트에 참여해보시면 됩니다. 혹시라도 뭘 어떻게 테스트해야 되는건지 잘 모르겠는 분들을 위해서 다음 편에서는 테스트넷 계정의 스테이킹 방법 및 EOSREX의 각 메뉴들에 대해 설명 드리도록 하겠습니다. 다음 편도 많이 기대해주세요 :)

- - -

This page is synchronized from the post: ['[EOS Inside] EOSREX 알아보기 #2편 테스트넷 설정법'](https://steemit.com/@donekim/eos-inside-eosrex-2)
