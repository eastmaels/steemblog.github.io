
---
title: '[이오스 메인넷 런칭] 이오스 BP투표방법 가이드② (EOS-voter by @greymass)'
permlink: bp-eos-voter-by-greymass
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-06-12 08:55:12
categories:
- coinkorea
tags:
- coinkorea
- kr-coin
- kr-series
- koreos
- jjangjjangman
thumbnail: 'https://cdn.steemitimages.com/DQmXtyCKVuBzrk9hq24b98ksXSCrtLm9XErcRxEookTffuJ/eosmainnet.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![eosmainnet.png](https://cdn.steemitimages.com/DQmXtyCKVuBzrk9hq24b98ksXSCrtLm9XErcRxEookTffuJ/eosmainnet.png)


![steemit_logo.png](https://cdn.steemitimages.com/DQmaZsenPDf5Qn5nJzDZNkVg1aCQUyXNwqwK1fk8qe4jhKa/steemit_logo.png)


안녕하세요, 디온(@donekim)입니다. 어제는 [[이오스 메인넷 런칭] 이오스 BP투표방법 가이드 (by http://portal.eoseoul.io/)](https://steemit.com/coinkorea/@donekim/bp-by-http-portal-eoseoul-io)라는 포스팅을 통해서 **스캐터(Scatter)를 이용하여 이오스 BP투표에 참여하는 방법을 소개**드렸습니다. 최대한 자세히 설명했다고 생각했으나 어렵게 느끼시는 분들도 많이 계신 것 같아서 이번에는 보다 간편하게 투표에 참여할 수 있는 다른 방법에 대해 소개 드리도록 하겠습니다. 바로 **EOS-voter라는 툴**인데요. **EOS-voter는 스팀잇의 증인이시기도 한 @jesta님께서 개발하신 투표&지갑툴**입니다. 


![jesta.png](https://cdn.steemitimages.com/DQmPmZGmGXZzk3oWab3DL3bZxDJDamvrwxwNzEAxoGp2GP8/jesta.png)


그레이매스에 대한 소개는 원포스팅인  [Greymass의 EOS 블록생산자 투표 도구 및 라이트 지갑 발표](https://steemit.com/eos/@greymass/greymass-eos)를 참고하여 주시기 바랍니다.


> 지금부터 소개드릴 EOS-voter는 @greymass님의 포스팅을 참고하였으며, 해당 포스팅에서 다뤄지지 않은 조금은 세부적인 내용에 대해서 설명을 첨가하였음을 안내 드립니다.


EOS-voter라는 프로그램이 이전에 소개드렸던 스캐터(Scatter)와 다른 점은 **"스캐터(Scatter)는 EOS계정에 대한 신원인증을 대행해주는 프로그램으로, 별도의 보팅포털에 접속해서 신원인증을 통해 로그인을 도와주는 크롬의 확장프로그램"**이었던 반면에 **"EOS-voter는 그 자체적으로 계정정보를 저장하고 별도의 보팅포털에 접속할 필요 없이 투표가 바로 가능한 프로그램"**이라는 것입니다. 결과적으로 **스캐터(Scatter)를 사용하면 웹 상에서 투표를 하게 되지만, EOS-voter를 사용하면 해당 소프트웨어 프로그램에서 바로 투표를 하게 된다는 차이**가 있습니다. 이제부터 Greymass의 EOS-voter를 사용하여 투표하는 방법에 대해서 알아보도록 하겠습니다.


***



먼저, EOS-voter프로그램을 다운로드를 받아야 합니다. 해당 프로그램을 다운로드 받기 위해서 그레이매스의 깃헙(https://github.com/greymass/eos-voter/releases)에 접속해주세요.

***

![greymass.png](https://cdn.steemitimages.com/DQmS3W8HuRTAB58p8MVfpfjwFfr1NDX9zhphgBoT4asZqaJ/greymass.png)


위와 같은 화면이 보이면 본인의 운영체제에 맞는 프로그램을 다운로드 받아주세요. 여기서는 윈도우 사용자를 가정하고 설명을 진행하도록 하겠습니다. 윈도우 사용자는 붉은색 네모 박스 안에 보이는 `eos-voter-setup-0.1.5.exe`를 클릭해주세요. 

> 현재 계속해서 업그레이드가 진행 중이며, 6월 12일 현재 0.1.5버전이 가장 최신버전입니다. 혹시라도 이 포스팅을 나중에 확인하시는 경우에는 보다 상위 버전으로 업그레이드 되어 있을 확률이 높으며, 가장 최신 버전을 다운로드 받아주시면 되겠습니다.

**+[내용추가 6월 17일 16:15] 현재 EOS-voter 0.1.6 업데이트 버전이 출시되었습니다. 업데이트 버전에서는 "welcome experience" 환경 마법사가 추가되었고,  언스테이킹 후의 잔액 표시기능이 추가되었습니다.  이를 포함하여 일부 버그가 수정되었다고 합니다 :D** 다음 패치에서는 여러 계정 관리 사용법이 추가될 예정이며 계정생성 기능도 포함될 예정이라고 합니다. 


***

![greymass1-1.png](https://cdn.steemitimages.com/DQmdQotA5gpnbWDdKJBmukiWgbCfePLWWfcVaHzwg89FyiL/greymass1-1.png)


다운로드가 모두 완료되었으면 **해당 파일을 더블클릭하여 실행**해주세요. 위와 같이 EOS-voter가 설치되는 것을 확인하실 수 있습니다.

***

![greymass1.png](https://cdn.steemitimages.com/DQmZWHtmrXWzNh4ieQj152WBwuAPuYJRgy6CjUJfu9y6T3p/greymass1.png)

설치가 모두 완료되고 나면 위와 같은 화면이 나타납니다. 

***

![greymass2.png](https://cdn.steemitimages.com/DQmTm66JMqNK2aoyW9LEjYxQpTUBNeMab4iCX4JSpEh7v5G/greymass2.png)

EOS-voter는 한국어도 지원하기 때문에 언어설정을 먼저 한국어로 변경하도록 하겠습니다. 화면 하단에 있는 `English`라는 탭을 클릭해서 `한글`이라는 드롭박스 탭이 나타나면 이것을 클릭해주세요.


***

![greymass3.png](https://cdn.steemitimages.com/DQmWLFSicHwaFCcdpPfg62zWMYemDVARRZP93X5SS1AFzNC/greymass3.png)

`한글`탭을 클릭하고 나면 위와 같이 언어설정이 변경되는 것을 확인하실 수 있습니다. (아직까지는 한국어 번역이 그렇게 매끄럽지는 않은 걸 보니, 구글 번역기를 사용한게 아닌가 싶은 생각이 드네요 ㅎㅎㅎ :D) 

이제 언어설정 변경을 모두 완료하셨으면 **EOS-voter를 사용해서 투표에 참여하기 위해 이 프로그램을 EOS API 노드에 연결**을 시켜주어야 합니다. 프로그램만 다운 받은 상태이니까 인터넷을 통해 투표를 연결할 수 있는 일종의 서버와 프로그램을 연결 시켜줘야 되겠죠? `지갑 API URL`라는 칸에는 우리가 크롬이나 익스플로러에서 www.naver.com을 입력해서 네이버에 들어가듯이 주소를 입력해야 됩니다.

프로그램만 깔면 주소는 자동으로 입력되어서 들어가질 줄 알았는데 `지갑 API URL`칸이 덩그러니 비어있는 상태라서 멘붕이 오실 수 있습니다. 그럼 주소는 무엇을 입력해야 될까요? EOS-voter에서 `지갑 API URL`을 비워놓은 이유는 EOS API 노드가 여러개이기 때문에, 유저가 접속하고 싶은 EOS API 노드를 직접 입력하도록 배려한 것으로 보이기도 합니다. 현재 운영 중인 EOS API 노드는 아래와 같이 여러개가 있기 때문에 그 중에서 아무거나 하나를 선택하시면 됩니다.


> - https://eos.greymass.com - greymass가 운영 중인 노드
> - http://mainnet.eoscalgary.io - EOS Cafe가 운영 중인 노드
> - http://api.eosnewyork.io - EOS New York이 운영 중인 노드
> - https://api.eosdetroit.io - EOS Detroit가 운영 중인 노드
> - http://api.hkeos.com - HK EOS가 운영 중인 노드
> - http://user-api.eoseoul.io - EOSeoul이 운영 중인 노드


 이 포스팅에서는 그레이매스가 만든 프로그램을 통해 투표에 참여하는만큼 **greymass가 운영 중인 노드를 사용해서 접속**하도록 하겠습니다. `지갑 API URL`이라는 빈칸에 `https://eos.greymass.com`라고 입력해주세요. 제 포스팅에서 복사+붙여넣기를 하셔도 됩니다. (반드시 https:// 까지 함께 넣어주셔야 합니다. 그냥 eos.greymass.com만 입력하면 정상적으로 인식하지 못합니다.)


***

![greymass4.png](https://cdn.steemitimages.com/DQmagaZXT5sG18GYhB1JWrot9hDS23QwSRfAQksy3fr9nsR/greymass4.png)


`지갑 API URL`에 위에서 말씀드린 주소를 입력하면 위와 같은 화면이 나타나는 것을 볼 수 있습니다. **이 화면은 이제 우리가 네이버 홈페이지에 접속해서 네이버 메인에서 로그인하는 로그인창**이라고 생각하시면 됩니다. 로그인을 하기 위해서 아이디와 패스워드를 넣어주어야 합니다. 먼저 `계정이름`에는 **나의 이오스 계정의 이름**을 넣어주어야 합니다.


여기서 계정의 이름이라 함은 `EOS6pAkM`이런 식으로 시작하는 EOS ADDRESS가 아니라. `hezdeobug4ge`처럼 영문과 숫자로 조합된 12자리의 이름을 의미합니다. 따라서 **"Public key와 Private key말고 또 뭐가 있어? 나는 이 2개 밖에 메모해놓은게 없는데?"**라는 분들, 아니면 **"본인의 계정 이름을 확인해본 적은 있지만 메모해놓지 않았거나 기억이 나지 않는 분들"**께서는 `귀하의 계정 이름을 찾으십니까?`라고 되어 있는 파란색 글씨를 클릭해주세요. 거기서 나타나는 창에 `EOS6pAkM`이런 식으로 시작하는 본인의 Public key(EOS Address라고도 합니다)를 입력하면 Public key에 랜덤으로 붙여진 **계정이름(EOS ACCOUNT NAME)**을 찾을 수 있습니다.


![eospia.png](https://cdn.steemitimages.com/DQmdbJyP4JD36e5hfwtydWjwE9BjMzQz4VmGeQUwJ7vYR6p/eospia.png)


> 혹시라도 Public key도 기억이 안나고 EOS를 등록해놓은 이더리움 지갑 주소만 기억이 나는 경우에는 https://eospia.com/ 으로 접속하신 뒤에 **이오스를 등록했던 이더리움 지갑의 주소**를 입력해서 계정이름(EOS ACCOUNT NAME)을 찾으시는 방법도 있습니다.  다만, 이렇게 계정이름을 찾는다고 하더라도 Private key는 조회할 수 있는 방법이 없기 때문에 반드시 본인이 알고 계셔야합니다. 

***

![greymass5.png](https://cdn.steemitimages.com/DQmQ1dvvCPMAYr3HN8oQNUh35CVqMfvP9pfeyMJTmATEh2d/greymass5.png)

위와 같이 `계정 이름`이라는 란에 본인의 EOS ACCOUNT NAME을 넣으셨다면 이제는 `WIF/개인 키`라는 란에 **본인의 EOS Private key를 입력**하셔야 합니다. 


![privatekey.png](https://cdn.steemitimages.com/DQmT5ABMRSTBGeh11e8Mve7a4uWYcxMg2hfwt6sotEHxJZW/privatekey.png)


**Private key는 위와 같이 우리가 EOS 계정을 등록할 때 Public key아래에 있던 영문+숫자조합**을 말합니다.  다른 어떤 모든 정보들은 유출되어도 상관없지만 Private key는 절대 나 아닌 다른 누구도 알아서 안된다는 건 잘 알고 계시죠? 혹시라도 Private key를 입력할 때 해킹의 위험성이 우려되는 경우에는 잠시 인터넷 접속을 끊어놓은 상태에서 안전하게 진행해주시기 바랍니다!


***

![greymass5-1.png](https://cdn.steemitimages.com/DQmT3zVHGmhPM9WjhdBcFfqsao79F68UFsPUirLFjWrJewJ/greymass5-1.png)


혹시라도 내 EOS계정에 맞는 Private key가 입력되지 않고 잘못된 키가 입력된 경우에는 위와 같이 `WIF/개인 키`란에 X표시가 들어오는 것을 확인할 수 있습니다. **제대로 입력된 경우에는 X표시가 아닌 V표시로 변경이 되므로, 정상적으로 V표시가 들어오는지를 확인**해주세요.


***

![greymass6.png](https://cdn.steemitimages.com/DQmekyLNv9sGZkBiMfZTqLusPGze8XNvG9hdo6QHPg7pBc7/greymass6.png)


`WIF/개인 키`란에 정상적으로 V표시가 들어온 것을 확인하셨으면, 이제 앞으로 EOS-voter에 로그인할 때 사용할 비밀번호를 입력해야 합니다. `로컬 월렛 비밀번호`란에 **앞으로 EOS-voter에서 본인이 사용할 비밀번호를 입력**해주세요. 본인이 사용할 비밀번호를 입력하셨으면 이제 아래에 있는 파란색으로 된 `계정 저장`이라는 버튼을 클릭해주세요.


***

![greymass7.png](https://cdn.steemitimages.com/DQmSQyJi2Z183ENzQznhSGoMjP28izSXJLfaB6X171sJiCf/greymass7.png)


`계정 저장`이라는 버튼을 클릭하고 나면 위와 같은 화면이 나타나면서 방금 입력했던 **로그인 비밀번호**를 다시 한 번 확인하는 화면이 나옵니다. (혹시나 몰라 다시 강조드리지만, Private key가 아니라 직접 입력한 로그인 비밀번호를 의미합니다.) 여기에 로그인 비밀번호를 입력한 뒤 녹색으로 된 `로컬 지갑 저장`이라는 버튼을 클릭해주세요.


***
![greymass8.png](https://cdn.steemitimages.com/DQmS45rudFn5yUyZoVQ2cMBXWn8Uvmkisx7e5yfyQj7FCpe/greymass8.png)


위와 같이 이오스 거버넌스- 헌법이 나타나는 것을 볼 수 있습니다. 헌법에 대한 내용은 나중에 자세히 알아보기로 하고 우리는 계속해서 투표참여를 진행해보도록 하겠습니다.


***

![greymass9.png](https://cdn.steemitimages.com/DQmcVorreMc7psPy9MQtJ29HU4a8o26BHAbmCoP46RSZDKk/greymass9.png)


스크롤을 아래로 내려주시면 위와 같이 `I accept these terms`라는 녹색 버튼이 보이는 것을 확인하실 수 있습니다. `I accept these terms`라는 버튼을 클릭해주세요.


***



![greymass10.png](https://cdn.steemitimages.com/DQmPSxtLcNACMGbWrnWYD86R6rk6UpTcybouwftuJxAKj9Y/greymass10.png)

위와 같은 화면이 보이신다면 이제 투표를 위한 모든 로그인 절차가 끝났습니다. 


***

![greymass11.png](https://cdn.steemitimages.com/DQmSYWzJQMNNNmQk3KLcB9F7tD3SKdFdPDj3PM53JYpgGT1/greymass11.png)

위의 그림과 같이 **본인이 투표하고자 하는 BP후보의 이름 앞에 있는 정사각형의 회색 탭을 클릭**해주세요.  클릭을 할 때마다 왼쪽에 선택한 BP후보의 이름이 나타나는 것을 보실 수 있습니다. 투표하고자 하는 BP후보 선택이 모두 완료되셨으면 녹색으로 된 `변경 사항 블록 체인으로 제출`이라는 탭을 클릭해주세요.


***

![greymass12.png](https://cdn.steemitimages.com/DQmUzdfMjx3SnKZcwxLr34D9xxMVVZ4NTvZ6CCnDZY1BynH/greymass12.png)

위와 같은 팝업창이 나타나면 내가 선택한 BP후보들이 맞는지 확인 후에 녹색으로 된 `투표 제출`이라는 버튼을 클릭해주세요

***

![greymass14.png](https://cdn.steemitimages.com/DQmRX8MZXYXsxXap6LdCYzHAzdXp51vqtQEBHeWyMBssovF/greymass14.png)

축하드립니다!!! 투표가 성공적으로 제출되었다는 팝업창이 나타나면서 블록체인에 기록된 트랜잭션 아이디가 나타나면 **성공적으로 투표에 참여가 완료된 것**입니다 :D



***


![greymass13.png](https://cdn.steemitimages.com/DQmNzo581z78HatxRgRRZT2q61BAjzr3WVBQA7fmZkuX33P/greymass13.png)

혹시라도 투표한 BP를 바꾸고 싶거나, 다른 BP에게도 투표하고 싶으신 경우에는 다시 EOS-voter를 실행하시면 됩니다. 다시 EOS-voter를 실행하면 위와 같은 화면이 나타나는데, 이제부터는 별도로 Private key를 입력할 필요 없이 설정해놓은 로그인 비밀번호만 입력하시면 됩니다. 


지금까지 아주 간편하게 EOS BP후보 투표에 참여할 수 있는 그레이매스의 EOS-voter라는 프로그램의 사용방법에 대해서 알아보았습니다. 혹시라도 추가로 궁금하신 내용이나, 진행하면서 어려움을 느끼시는 부분에 대해서는 댓글을 남겨주시면 제가 아는 선에서 최대한 열심히 안내 드리도록 하겠습니다. 

이오스 홀더분들께서는 번거롭게 느껴지시더라도 본인의 소중한 투표권을 블록체인 위에서 행사해보는 신박하고 즐거운 경험을 꼭 해보시기 바랍니다! 더불어 혹시라도 도움이 되셨다면 보팅과 리스팀 부탁드립니다!! 감사합니다 :D




![steemit_eng.png](https://cdn.steemitimages.com/DQmXyvEeNrzp6hFun3B8ho6pRCRnvnNthGA67HH7G5Fe6Gx/steemit_eng.png)

<center>![behind banner.gif](https://cdn.steemitimages.com/DQmXBUz3S7u2z13jB39UNUder7HUADC9DvHibUEu7DTu3MR/behind%20banner.gif)</center>







<center><pre> H O P E   F O R   T H E   B E S T , 
P L A N   F O R   T H E   W O R S T</pre>
<sub> https://steemit.com/@dONekim</sub></center>

- - -

This page is synchronized from the post: ['[이오스 메인넷 런칭] 이오스 BP투표방법 가이드② (EOS-voter by @greymass)'](https://steemit.com/@donekim/bp-eos-voter-by-greymass)
