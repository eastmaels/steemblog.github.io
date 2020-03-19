
---
title: '[이오스 메인넷 런칭] 이오스 BP투표방법 가이드① (by http://portal.eoseoul.io/)'
permlink: bp-by-http-portal-eoseoul-io
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-06-10 19:00:33
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


안녕하세요, 디온(@donekim)입니다. 2018년 6월 10일 오후 10시 드디어 **이오스 메인넷 런칭 그룹(EMLG; EOS Mainnet Lauch Group)의 공동 성명서를 통해 블록이 성공적으로 생산되기 시작하였다는 기쁜 소식**이 들려왔습니다. :D

**이오스 블록체인이 유효한 것으로 간주되기 위해서는 전체 토큰 중에서 15%가 블록프로듀서 후보들(BPC; Block Producer Candidates) 에게 투표**가 되어야 합니다. 15%라는 비율에 이르는 투표의 프로세스 기간은 토큰 홀더들의 참여율에 따라 수시간에서 수일이 소요될 수 있습니다. 현재로서는 한국의 암호화폐 거래소에서 별도의 투표툴을 지원하고 있지 않습니다. 그렇기 때문에 별도 개인 지갑에 이오스 토큰을 보관 중인 토큰 홀더들의 자발적인 참여가 필요합니다.

**현재 EMLG의 공동성명서에서는 EOS 개인키 사용과 관련해서 항상 경계하고 조심할 것을 당부**하고 있습니다. 더불어 **제 포스팅을 읽으시며 Eoseoul포탈에서 투표에 참여하기 이전에, EMLG에서는 투표와 관련해서는 Block.one이 개발한 커맨드라인 투표 도구인 'cleos'를 사용할 것을 권장하고 있다는 사실을 먼저 주의**하셔야 함을 안내 드립니다. 현재까지 cleos외의 투표툴은 제3자의 씨큐리티 감사를 받지는 않았다고 하오니 이를 참고하시어 투표 참여여부를 먼저 결정 후에 가이드를 읽어주시기를 당부 드립니다.

> **(추가내용 업데이트)**
> EMLG는 현재 투표 포털과 도구의 감사를 진행하고 있습니다. **아래의 검증된 투표 포털 목록 확인하기를 클릭해서 구글 스프레드시트를 통해 투표 포털과 도구의 전체 목록을 확인**하실 수 있습니다. 스프레드 시트에서 `Portals`라는 탭에 나오는 목록 중에서 **녹색으로 표시된 포털은 기본적인 검증을 통과한 투표 포털**입니다.
> [검증된 투표 포털 목록 확인하기](https://docs.google.com/spreadsheets/d/1gJnn0KS4rgDnTowPlN80gulVI77lRgldPhH17kZOnnI/edit#gid=744644035)


***

본 포스팅은 **우리나라 BP후보인 EOSeoul에서 제공하는 http://portal.eoseoul.io/ 사이트를 통해 BP투표에 참여하는 방법**에 대한 내용입니다. (http://vote.eostat.io/votelogin 라는 사이트 주소 또한 EOSeoul에서 제공하는 투표 포탈사이트이며 접속주소만 다릅니다.) 투표에 참여하는 방법은 이 포스팅에서 안내드리는 방법 외에도 http://eosportal.io/chain/12/producers 및 http://eosvoter.eosphere.io/vote 등 다양한 사이트에서도 참여가 가능합니다. 더불어 eosys나 nodeone 등 다른 우리나라 BP후보들이 투표툴에 대한 세부적인 검증 후에 각 사이트에서 참여하는 방법에 대한 가이드라인이 안내될 수 있으니 조금 기다리셨다가 해당 가이드라인에 따라 참여하셔도 문제 없습니다 :D

 먼저 EOS BP투표에 참여하기 위해서는 `이오스의 신원인증 프로그램인 스캐터(Scatter)라는 확장 프로그램을 다운로드` 받아야 합니다. **스캐터 웹사이트(https://scatter-eos.com/)에 접속**해주세요. (참고사항 : 스캐터는 크롬이나 파이어폭스에서만 작동하기 때문에 반드시 크롬 또는 파이어폭스 브라우저로 접속하셔야 하며, 가급적 크롬을 사용하시는 것을 추천 드립니다.)

 ***

![scatter1.png](https://cdn.steemitimages.com/DQmbNbadJWQunyFKS9dz3uRjfD3S8FgL9AkQEnfGYLYB2Pt/scatter1.png)

위와 같은 그림이 보이면 `Get Chrome Extension`이라는 버튼을 클릭합니다.

***

![scatter2.png](https://cdn.steemitimages.com/DQmeXQKjK44A34rm3nG9KauDFdWH7taza9mn7kXLn3zEK7f/scatter2.png)


![scatter3.png](https://cdn.steemitimages.com/DQmNqR56ioGoB76nUBommiQKzG48FrSa5ERrMEZtq5J63Dh/scatter3.png)


새창이 열리면서 위와 같은 화면이 보이면 우측 상단에 보이는 `CHROME에 추가`라는 파란색 버튼을 클릭합니다.

***


![scatter4.png](https://cdn.steemitimages.com/DQmcfxer2r1uPxB687ftcYuejn9cBmsuawduP8R6oM2KnHD/scatter4.png)


Scatter을(를) 추가하시겠습니까? 라는 메세지가 뜨면 `확장 프로그램 추가`라고 되어 있는 흰색 버튼을 클릭해주세요.


***
![scatter6.png](https://cdn.steemitimages.com/DQmZG39GPon1KmUikTv7nV2Kc5GqQxuCbb6VGBfFKVLRpMB/scatter6.png)

해당 버튼을 클릭하시면 위의 그림과 같이 우측 상단에 `Scatter이(가) Chrome에 추가됨`이라는 메세지 창이 뜨면서 그 위에 조그마한 아이콘이 생기는 것을 보실 수 있습니다.


***

![scatter7.png](https://cdn.steemitimages.com/DQmWUoQEwPcz2WBheiEaSvYNuzSEGXMuxunmUmEfB38fpaQ/scatter7.png)

이렇게 다운로드를 정상적인 경로로 받은 것으로 보이지만, 혹시라도 해커들이 만들어 놓은 스캠 프로그램을 다운로드 받았을 위험이 있기 때문에 사용을 시작하기 전에 올바른 파일을 다운로드 받았는지에 대해서 확인해 볼 필요가 있습니다. 위 그림에서 보이는 것처럼 크롬 브라우저 가장 우측 상단에 보이는 `점 세개가 세로로 배열되어 있는 모양의 버튼`을 클릭해주세요.

***

![scatter8.png](https://cdn.steemitimages.com/DQmarKoTXcYnC2u896ph2zjELbX3f6bttbaYjQqCdxofTcp/scatter8.png)

버튼을 클릭하면 위의 그림과 같이 아래오 창이 열리는데, 거기서 `도구 더보기`를 클릭한 다음 `확장 프로그램`이라는 메뉴를 클릭해주세요.


***

![scatter9.png](https://cdn.steemitimages.com/DQmWwsaJCZ2pH2dj6T1AErGiNmKUZEYUc3roJzDFfTSW81Q/scatter9.png)

`확장 프로그램`이라는 메뉴를 클릭하면 위와 같이 새로운 창이 생기는 것을 볼 수 있습니다. 


***

![scatter10.png](https://cdn.steemitimages.com/DQmZp2PyQuE8Gou2GpTxPUDPydXrs2svwYdUPxxrDdKahqP/scatter10.png)

위의 그림과 같이 **상단의 파란색 배경으로 된 부분**의 가장 오른쪽에 `개발자 모드`라는 메뉴를 찾아주세요.

***

![scatter11.png](https://cdn.steemitimages.com/DQmWiuhByQv66yeBx5fy7TXk1fbBskFq2bB4C9zfM7jSus2/scatter11.png)

`개발자 모드`라는 문구 오른쪽에 보이는 `레버 버튼을 오른쪽으로 드래그`해주세요.


***

![scatter12.png](https://cdn.steemitimages.com/DQmVh1uVhZJnLW2436xAu3w8jPUqNtvJsVAFZ4aywmGymzD/scatter12.png)

그 다음에는 스크롤을 아래로 내려서 위 그림과 같이 `Scatter 5.0.0` 이라는 창을 찾은 다음에 `ID라는 부분을 확인`해주세요. 

***

![scatter13.png](https://cdn.steemitimages.com/DQmSyZvZi5ooXJQ62dgWqmyFye61TNqRCXYLFeYAxqPmxa8/scatter13.png)


좀 더 확인하기 쉽게 해당 부분을 확대하여 첨부해보았습니다. 아이디가 위의 그림 또는 제가 메모해놓은 `ID: ammjpmhgckkpcamddpolhchgomcojkle` 이 아이디와 **동일한지를 확인**해주세요.  **혹시라도 ID가 동일하지 않은 경우에는 절대 사용하지 말고 해당 Scatter를 삭제**하여 주시기 바라며, 만약 아이디가 동일하다면 계속해서 진행을 해 주시면 됩니다. 일단 여기까지 따라오셨으면 기본적으로 Scatter 설치가 끝난 것입니다.


***


![scatter14.png](https://cdn.steemitimages.com/DQmUQp5TChm2WoLtEo6EzphCzzKEzYavqqrvEgL8YvRqVJi/scatter14.png)


이제 투표에 참여하기 위해서 위의 그림과 같이 Eoseoul의 투표포털(http://portal.eoseoul.io/)에 접속해주세요. 그 다음 우측 상단에 보이는 `VOTE`라는 메뉴를 클릭해주세요.

***

![scatter15.png](https://cdn.steemitimages.com/DQmUWa1bM1qtcd8PpgasnRAea4nCX5hYnEz2LDJmcf3C278/scatter15.png)

`VOTE`라는 버튼을 클릭하면 위와 같은 화면이 나오는데 여기서는 **LOGIN EOS (BY USING SCATTER)**라고 보이는 흰색 메뉴의 하단에 보이는 `create scatter wallet?`이라는 문구를 클릭해주세요.

***

![scatter16.png](https://cdn.steemitimages.com/DQmfEG5EtH9ovpes5H2TD8MbFezhJHqENhhpw1RoKW3zXdY/scatter16.png)

`create scatter wallet?`이라는 문구를 클릭하시면 위와 같은 화면으로 넘어가게 됩니다. 일단 여기까지 접속은 하셨는데, 우리는 아직 스캐터(Scatter)를 설치만 해 놓았을 뿐 아직 켜보거나 세팅해보지 않았기 때문에 해당 사이트를 정상적으로 이용할 수 없는 상황입니다.

***

![scatter17.png](https://cdn.steemitimages.com/DQmSXnDL1nR7Cp3oqUf3kWv4rk37nHYVm6efG7B4zgyWwxV/scatter17.png)

위의 그림과 같이 크롬브라우저 우측 상단에 보이는 `스캐터 이모티콘`을 클릭해주세요. 그러면 Scatter가 실행이 되면서 위와 같은 화면이 나타나게 됩니다. 이제 스캐터를 사용할 계정을 만들 준비를 해야 합니다. 먼저 스캐터에서 사용할 본인의 패스워드를 Password란에 입력합니다. 그 아래의 Confirm Password란에는 위에서 입력한 패스워드와 동일한 패스워드를 입력해주세요.

***

![scatter18.png](https://cdn.steemitimages.com/DQmbvwjaFgjHeDoGkn3VazwqKbbVhdjPLp2kSpsUDLrLJS7/scatter18.png)

패스워드를 모두 입력하셨으면, `Create New Scatter`라는 메뉴를 클릭해주세요.

***

![scatter19.png](https://cdn.steemitimages.com/DQmT6cx7egLDnr7NS9iR3xd1GcMH4f3386Y5LzfMY6CMa4b/scatter19.png)

위의 그림과 같이 Mnemonic이 나오는데 이는 스캐터 비밀번호를 까먹었을 때 복구를 위해 사용하는 백업 문구이므로 잘 적어놓으시기 바랍니다. 

**더불어 제가 여러번 스캐터 프로그램을 깔았다 지웠다 해보면서 테스트 해본 결과, 동일한 컴퓨터에서 패스워드를 바꿔가면서 계정을 생성하더라도 Mnemonic은 항상 동일하게 출력이 되는 것을 발견했습니다.** 따라서 혹시라도 포스팅을 하시거나 할 때 Mnemonic이 포함된 스크린샷이 포함되지 않도록 주의하실 필요가 있는 것으로 보입니다. (사실 Mnemonic으로 메타마스크처럼 완전한 계정복구는 아직까지 지원되지는 않는 것으로 보이지만, 그렇다고 하더라도 보안에는 주의하실 필요가 있습니다.)

일단 백업 문구를 잘 적어놓으셨다면 `I wrote it down`이라는 문구를 클릭해주세요.


***

![scatter20.png](https://cdn.steemitimages.com/DQmeU2pxPYPTqUWeqDFY1HpSFbkMk48wiy1hmM8RupTRDJG/scatter20.png)

그러면 위와 같은 화면이 나오면서 스캐터에 로그인이 된 것을 확인하실 수 있습니다. 스캐터를 보다 편리하게 사용하기 위해서 언어설정을 영어에서 한국어로 변경해보도록 하겠습니다. `상단에 보이는 톱니바퀴 모양의 설정 버튼을 클릭`해주세요.

***

![scatter21.png](https://cdn.steemitimages.com/DQmeTJduQGKBvDnWR47k9g44WqPG93Sot6W8xRAPUbpBAbu/scatter21.png)

![scatter22.png](https://cdn.steemitimages.com/DQmZ7a2muDJsVF6HiFswiW9Q5Q2mXEoqp8fjmRuJ4rQJFUc/scatter22.png)

![scatter23.png](https://cdn.steemitimages.com/DQmSab1Cj7nCia3KNZBbmTgeDSFmnASvrheENBmufroBfQZ/scatter23.png)

![scatter24.png](https://cdn.steemitimages.com/DQmZ3e3qgC1SpUJUgyYp2uPoGY2b2o9XeBSMXruzYypWcL9/scatter24.png)

그 다음에는 `Language`버튼을 클릭한 다음  `English`라고 되어 있는 탭을 클릭하여 `한국어`를 찾아서 클릭해줍니다. 그 다음에는 `Change Language`라는 버튼을 클릭하면 위의 그림과 같이 언어설정이 한국어로 변경된 것을 확인하실 수 있습니다. **참고적으로 스캐터 프로그램의 한국어 번역은 코리오스의 서리(@indend007)님께서 도와주셨다고 합니다 :D**

***

![scatter25.png](https://cdn.steemitimages.com/DQmREGHCuf2HMDpC6XuDC4cvwXud4QJkoCh4FNgR3ZF3vjB/scatter25.png)

여기까지 스캐터의 설정이 완료되셨다면 위의 그림과 같이 사이트에서 `ADD NETWORK TO SCATTER`라는 메뉴를 클릭해주세요.


***

![scatter26.png](https://cdn.steemitimages.com/DQmVvVE27Aq1kPQwYxK4UGA5VJDktuxXGPAdCstKwbmdqCS/scatter26.png)


그러면 위와 같은 창이 뜨는 것을 보실 수 있는데 여기서 `수락`버튼을 클릭합니다.

***

![scatter27.png](https://cdn.steemitimages.com/DQmU6DXtw4w8aFZnuD3qAr5FobaW6Qcw6ZwuN3FQHtrZfz2/scatter27.png)

`수락`버튼을 클릭하면 위와 같이 `NETWORK SUCCESSFULLY REGISTERED`라는 창이 오른쪽에 뜨는 것을 확인하실 수 있습니다. 이는 스캐터라는 프로그램을 이용해서 접근할 네트워크에 대해 설정을 해주는 것인데, 사실 사이트 하단에 보이는 `EOS Network Infor for scatter`라는 부분을 참고하여 수동으로 입력해주어도 무방합니다. 아무래도 우리는 수동보다는 클릭 두 번으로 끝나는 것이 편하니까 이렇게 네트워크를 쉽게 설정해주도록 합니다.


***

![scatter28.png](https://cdn.steemitimages.com/DQmZVc9tvEAdy8Me7ufskh225mDkLW3rjfJ9u5FUFyUCbaR/scatter28.png)


그 다음에는 다시 스캐터 이모티콘을 클릭해서 이번에는 `키 쌍`이라는 문구를 클릭합니다. 


***

![scatter29.png](https://cdn.steemitimages.com/DQmY5oD44Q7fJLpnp6vAWWs1Sse89i78bPwaUnv9eKaK6Er/scatter29.png)

위와 같은 화면이 나타나면 여기서 `신규 생성`이라는 버튼을 클릭해주세요.


***


![scatter30.png](https://cdn.steemitimages.com/DQmaoQDeexJgR2FNSMVeXRVYAmpLS3peppFTahmffDm5Svw/scatter30.png)

위와 같은 화면까지 접속하셨다면, 여기서부터가 굉장히 어렵게 느껴질 수 있는 부분입니다. 사실 알고 보면 굉장히 간단한 부분이기도 하지만 굉장히 중요하니 천천히 따라오시면 되겠습니다. 먼저 `EOS`라고 쓰여 있는 부분은 그냥 놔두시면 됩니다. 그 다음으로 `이름`이라는 부분에는 **영문이나 숫자를 조합하여 12자리의 닉네임**을 설정해주시면 됩니다. 예를 들어 저 같은 경우에는 12자리를 맞추기 위해서 `donekimEOSkr`이라는 이름을 입력하였습니다.

그 다음으로는 `퍼블릭 키`라는 부분이 있는데, 이 부분은 별도로 입력을 하시지 마시고 `프라이빗 키`라는 부분으로 넘어가 주시기 바랍니다. 왜냐하면 `프라이빗 키`를 입력하면 퍼블릭키는 스캐터에서 자동으로 불러와서 입력이 되기 때문입니다. 

![eos register2.png](https://cdn.steemitimages.com/DQmcfzopymSR3Px2fXEAK1JHSxNoVJyFRVS35Bht7VmRYoD/eos%20register2.png)


여기서 퍼블릭 키와 프라이빗 키는 예전에 eos.io에서 레지스터를 하시면서 확인하고 꼭꼭 잘 숨겨놓았던 그것을 의미합니다. 예전에 꼭꼭 잘 보관해 놓았던 프라이빗 키(Private key)를 `프라이빗 키`란에 입력해주세요. 프라이빗 키를 입력하면 갑자기 퍼블릭 키 란에도 자동으로 퍼블릭 키가 입력이 되는데, 본인의 퍼블릭 키가 맞는지 다시 한 번 확인해주세요. 

만약 퍼블릭 키에 이상이 없다면 키 쌍 생성 이라는 메뉴 밑에 보이는 `저장`버튼을 클릭해주세요. **여기서 많은 분들이 실수를 하시고 패닉에 빠지게 되는 원인이 발생하는데, 절대 [키 쌍 생성]이라는 버튼을 클릭하시면 안됩니다.** 키 쌍 생성이라는 버튼은 그냥 무시하시고 반드시 `저장`버튼을 클릭해주세요!

***

![scatter31.png](https://cdn.steemitimages.com/DQme4BJvVKSvaUtC3KYAHniXbp3MjgGsrnQYtoqPJwkCb2L/scatter31.png)

`저장` 버튼을 클릭하면 위와 같은 화면이 나오게 되는데, 그러면 일단 키 쌍이라는 것이 제대로 저장이 되었다는 것을 의미합니다.

***

![scatter33.png](https://cdn.steemitimages.com/DQmSzgdE2pUaAQxHS5p1ySx6irAMmRXDkaZBQQ8hvRZUmsB/scatter33.png)
![scatter34.png](https://cdn.steemitimages.com/DQmdU14gccE2qsmfUM8Fhhgimg8Ujc41o5YKzW4hkqwtdvu/scatter34.png)

그 다음으로는 `신원인증 ID`라는 메뉴를 클릭한 뒤에 `신규 생성`이라는 메뉴를 클릭해주세요.


***

![scatter35.png](https://cdn.steemitimages.com/DQmVUZwhVEEkT4hn2Vf2J5iqHGoYK3TxPUSKxc3xvbfcWix/scatter35.png)
 
![scatter36.png](https://cdn.steemitimages.com/DQmf8XZrWmR7L3NugbQbouRnU4b5LG3iZzNQ6ZMz7peYCmw/scatter36.png)

![scatter37.png](https://cdn.steemitimages.com/DQmdgTaFqyBZaByfcMfDSCNwSY6cM5FnNe4o5jjuRe6uunZ/scatter37.png)



위와 같은 화면이 나오면 `None`이라는 부분을 클릭해주세요. 그러면 방금 전에 우리가 키쌍에서 설정했던 이름이 위와 같이 나오는 것을 볼 수 있습니다. 내가 설정한 이름과 동일한 이름이 맞는지 확인하신 뒤에 해당 이름을 클릭하고 `가져오기`버튼을 클릭해주세요.

***

![scatter40.png](https://cdn.steemitimages.com/DQmNpvAgAoFmHfQuW1sS3Rtw79W2gw4nyGaDX6XZfnk8YDj/scatter40.png)

`가져오기`버튼을 클릭하면 위와 같은 화면이 나오는 것을 보실 수 있습니다. 아마도 여기서는 @active로 끝나는 아이디와 @owner로 끝나는 아이디 2개가 보이실텐데, 이 중에서 `위에 있는 @active로 끝나는 아이디를 선택`해주세요. 

> 아마도 이 아이디에 보이는 영문과 숫자가 무엇인지 의아한 분들이 있으실텐데, @active와 @owner 앞에 보이는 영문 또는 영문+숫자 조합은 임의로 배정된 내 지갑의 이름이라고 생각하시면 됩니다. 방금 전에 키 쌍에서 내가 설정한 이름과는 무관하게 이미 배정을 받은 이름이라서 위와 같이 나오는 것입니다. 혹시라도 처음 보신 분들은 크게 신경쓰지 않으셔도 무방합니다. 

@active로 끝나는 아이디를 클릭한 다음에 `선택한 계정 사용`이라는 메뉴를 클릭해주세요.


***

![scatter41.png](https://cdn.steemitimages.com/DQmexiK1B7Hdt7nfjo2huiWarqMcCHjmyiMw3jNQKxJDfpZ/scatter41.png)

그 다음에는 위의 그림에서 상단에 보이는 `저장`이라는 버튼을 클릭해주세요. 혹시라도 여기서 `가져오기`를 누르는 경우에는 방금 우리가 했던 작업을 다시 하는 것입니다. 괜히 `가져오기`버튼을 눌러서 무한루프의 함정에 빠져 당황하지 마시고, 반드시 상단에 보이는 `저장`버튼을 클릭하여 주시기 바랍니다 :D


***

![scatter42.png](https://cdn.steemitimages.com/DQmQJyPi1UWpgzBD74pQACbkBJkQSnYnMWSWikCk52B2Kqp/scatter42.png)

`저장` 버튼을 클릭하고 나면 위와 같이 내가 선택한 `어쩌구저쩌구@active`계정이 저장된 것을 확인하실 수 있습니다. 여기까지 따라오셨다면 사실 상 스캐터에 대한 모든 설정과 정보 저장이 끝난 것입니다. 이제는 투표를 하러 가보도록 하겠습니다 :D


***

![scatter43.png](https://cdn.steemitimages.com/DQmRT7ioJcTF9PcLSpT8qde3FpjdibRhBVsuLHAdEFKVoSJ/scatter43.png)

다시 사이트로 돌아가서 위의 그림의 우측 상단에 보이는 `LOGIN`이라는 버튼을 클릭하면, 위와 같이 새 창이 나타납니다. 팝업창이 나타나면 `신원인증 ID 선택`버튼을 클릭한 뒤에 `수락`버튼을 클릭해주세요.


***

![scatter44.png](https://cdn.steemitimages.com/DQmbkQnW6Bdibn6ziPmzfpvN9D2LzNfJVa5iiGy6eYt8HTp/scatter44.png)

짜잔!! **드디어 투표사이트에 성공적으로 로그인이 된 모습**입니다. 이렇게 로그인을 하고 나면 **내 계정이름으로 배정받은 이름(Account Name), 내가 보유하고 있는 EOS의 양, 보팅한 EOS의 양, 내가 보팅한 블록프로듀서의 수** 등이 나타나는 것을 보실 수 있습니다. 아직까지 투표를 하지는 않았기 때문에 위에서 보시는 것처럼 내가 투표한 블록프로듀서의 수는 0을로 나타나고 있습니다.


***

![scatter46.png](https://cdn.steemitimages.com/DQmXWB1c6DyAzGmE8zTbvoF6FyvAsTZy3uNtM3ZbzLsEj3E/scatter46.png)

내가 가지고 있는 EOS를 가지고 투표에 참여하게 되는 경우 해당 EOS는 스테이킹이 되는데, 이러한 정보를 보여주는 화면입니다.  일단 10EOS 이상을 보유하고 있는 모든 분들이 Balance EOS는 10으로 고정되어 있고, Staked EOS는 본인이 보유하고 있는 EOS수량에서 10을 뺀 숫자로 나오는 것을 볼 수 있습니다.

현재 BP들의 합의를 통해 **10개씩을 제외한 나머지 토큰들은 스테이킹되어 있는 것을 기본**으로 합니다. 일단 메인넷이 안정적으로 운영이 되기 전에 불안정한 상태에서 스테이킹이 풀려 있는 경우에는 토큰의 분실이나 해킹의 우려가 있는 관계로 이에 따른 조치인 것으로 예상됩니다. 왜냐하면 일단 스테이킹이 되어있는 것을 기본으로 하는 경우에는 Private key를 해킹당하거나 유출된 경우에도 스테이킹을 해제한 이후 3일 뒤에 이동이 가능하기 때문입니다. 이와 관련해서는 정확히 오피셜한 내용은 아직 찾지는 못했습니다. 

***

![scatter47.png](https://cdn.steemitimages.com/DQmcVdbjqK5cbT7ksZabihTBv7ZFbjr3eekDeP6GrsVpd7o/scatter47.png)

이제 스크롤을 아래로 내리면 블록프로듀서 후보들의 명단이 나오는 것을 보실 수 있습니다. 


***

![scatter48.png](https://cdn.steemitimages.com/DQmPo3pqrTPddk1r51ms2mg2rRkFZ2QAXNNzgemb7TMeeZz/scatter48.png)

후보들의 명단과 홈페이지를 확인하시고 본인이 투표하고자 하는 블록프로듀서 후보를 위와 같이 체크 표시를 합니다. 최대 30개까지 투표를 할 수 있으나 꼭 30개를 채워야 하는 것은 아닙니다. 


***

![scatter49.png](https://cdn.steemitimages.com/DQmSXpDkNuyDxwFbJ34BLvZUaJ7AD3KBWXkzc3hRdMXSppv/scatter49.png)

투표할 후보를 모두 정하고 체크표시를 완료하셨으면 오른쪽 상단에 보이는 `VOTE`라는 메뉴를 클릭해주세요. 그러면 위와 같이 새로운 창이 나타나는 것을 확인할 수 있는데, 내가 투표한 후보가 맞는지 명단을 최종적으로 확인하신 뒤에 `수락`버튼을 클릭해주세요.

***

![scatter51.png](https://cdn.steemitimages.com/DQmSMz73nVHzi9WA3FBKJ9LX1vKnZfDLf5QgtvjZUt6ZrW5/scatter51.png)

![scatter52.png](https://cdn.steemitimages.com/DQmR4so1xdEc3RA6huxUFgCkfdLuR1i3pFoxpVZ42UyoDed/scatter52.png)

`수락`버튼을 클릭하면 투표절차가 모두 완료되며, 정상적으로 투표가 완료된 경우에는 위와 같이 `Voted BlockProducer`명단에 내가 투표한 블록프로듀서들의 명단이 나타나는 것을 확인하실 수 있습니다. 


아무래도 EOS BP후보 투표에 참여하는 것이 처음이다 보니 불안하고 어렵게 느껴지실 분들이 많을 것 같아서 최대한 신속하게 자세한 포스팅을 해 보려고 했는데, 도움이 되셨는지 모르겠습니다. 

내일 회사를 가야하는데 포스팅을 하다보니 벌써 시간이 이렇게 지나가 버렸네요. ㅠㅠㅠ 평소의 포스팅은 미리 정리도 하고 다시 한번 리뷰해서 오탈자 수정도 하고 하는데 이번에는 한 번에 작성하다가 보니 혹시라도 실수나 오타가 있더라도 양해 부탁드립니다. 

내일 시간되는 대로 내용이나 오탈자 등에 대해서는 보완하도록 하겠습니다. 혹시라도 도움이 되셨다면 보팅과 함께 많은 분들이 보실 수 있도록 리스팀 부탁드립니다!! 감사합니다! :D




![steemit_eng.png](https://cdn.steemitimages.com/DQmXyvEeNrzp6hFun3B8ho6pRCRnvnNthGA67HH7G5Fe6Gx/steemit_eng.png)

<center>![behind banner.gif](https://cdn.steemitimages.com/DQmXBUz3S7u2z13jB39UNUder7HUADC9DvHibUEu7DTu3MR/behind%20banner.gif)</center>







<center><pre> H O P E   F O R   T H E   B E S T , 
P L A N   F O R   T H E   W O R S T</pre>
<sub> https://steemit.com/@dONekim</sub></center>

- - -

This page is synchronized from the post: ['[이오스 메인넷 런칭] 이오스 BP투표방법 가이드① (by http://portal.eoseoul.io/)'](https://steemit.com/@donekim/bp-by-http-portal-eoseoul-io)
