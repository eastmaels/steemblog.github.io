
---
title: '[이오스 이야기] 제네시스 계정 키 분실자들을 위한 자동화된 온체인 복구 솔루션(EOS Lost Key Recovery Tool) 안내'
permlink: eos-lost-key-recovery-tool
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-02-15 18:12:54
categories:
- coinkorea
tags:
- coinkorea
- kr-series
- busy
- jjangjjangman
- eos
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


안녕하세요, 디온(@donekim)입니다.  오늘은 **이오스 메인넷 런칭 이전 ERC20 토큰 당시 중복 트랜잭션 등의 오류로 인해 제네시스 계정의 프라이빗키를 분실한 토큰 홀더분들을 위한 이오스 분실 키 복구 솔루션(EOS Lost Key Recovery)의 개발 상황**에 대해서 안내를 드리고자 합니다. 

![twitter.png](https://cdn.steemitimages.com/DQmYJSUEaeWuznq7k9Gi4hETcUtjqkYWARn8jXh5opDEQzy/twitter.png)

이오스 메인넷 BP후보(현재 22위, 스탠바이BP) 중 하나인 [EOS Authority는 공식 트위터](https://twitter.com/EOSauthority/status/1096448684227772417)를 통해서 **"완전히 자동화된 온체인 이오스 분실 키 복구 솔루션 개발이 타당성 검증 테스트 단계를 통과하고 막바지 완성 단계에 접어들었다"**고 발표하였습니다. 

솔루션의 개발 완료 및 공식 런칭까지는 아직 시간이 조금 남았지만 공식 런칭 전에 제네시스 계정 프라이빗키 분실자분들은 **"자신의 계정이 해당 사항이 있는지에 대해서 조회"**를 해 보실 수 있습니다. 계정 조회 방법 및 EOS Lost Key Recovery 솔루션과 관련된 자세한 내용은 아래에서 설명하도록 하겠습니다.

## #1. 계정 해당여부 조회 방법
---
![authority.png](https://cdn.steemitimages.com/DQmVxeezHHLo1N24Bd2vryLCpwfefSXr2hQdC46Ht1XSjoP/authority.png)

> **[참고사항]** 대부분의 사이트들은 **구글 크롬 브라우저에 최적화**되어 있습니다. 익스플로러 대신에 구글 크롬 브라우저를 사용하여 접속해주시기 바랍니다. (익스플로러 사용 시에는 계정 조회 후 이메일 입력 란이 나타나지 않는 오류가 있습니다)

① **EOS Authority의 Lost Key - Recover an EOS Genesis Account 사이트(https://eosauthority.com/lostkey)에 접속**해주세요. 그 다음 위와 같은 화면이 나타나면 마우스 스크롤을 아래로 내려주세요.

![check account.png](https://cdn.steemitimages.com/DQmdthJpGknp9kn555uUqZd7fQkw2uDCwDd4QXsBrZQMMig/check%20account.png)

② 위와 같은 화면이 나타나면 `Enter your EOS account name (12 characters)`라는 란에 **12자리의 이오스 계정이름을 입력한 뒤 `Check Account`버튼을 클릭**해주세요. 

> 참고로 EOS로 시작하는 53자리의 문구는 계정이름이 아니라 퍼블릭키(Public key)에 해당합니다.

![eosflare.png](https://cdn.steemitimages.com/DQmbB5GLZS4RVyDQNcPmDdCowW3FEeKFNXc3JbmsDgR17Zt/eosflare.png)

만약에 이오스 계정을 모르시는 분들은 **이오스 블록익스플로러(https://eosflare.io/)에 접속한 뒤에 상단의 흰색 박스 안에 EOS로 시작하는 퍼블릭키를 입력**하시면 12자리로 된 이오스 계정이름을 확인하실 수 있습니다.

![account.png](https://cdn.steemitimages.com/DQmajdrC5Xkr2rVxaQLN3WkcUWgD9bedfKVsMicm8HTWdRf/account.png)

위와 같이 Account라는 단어 하단에 보이는 `gyzdgmbqgage`라고 되어 있는 12자리 단어가 이오스 계정이름이 됩니다. 이 12자리 계정이름을 넣고 `Check Account`라는 버튼을 클릭해주세요.

<center>![alerts_modified.jpg](https://cdn.steemitimages.com/DQmPjYCZV9rm5hPVoYzEXmbhP3UfwgehuzBnAz1gaj2NE59/alerts_modified.jpg)</center>

위와 같은 녹색으로 된 화면이 나타나면 **"한 번도 사용된 적이 없는 제네시스 계정으로서, 분실 키 복구 솔루션을 통해 복구가 가능하다는 것을 의미"**합니다. 따라서 EOS Lost key Recovery 솔루션 개발이 모두 완료되고 나면 해당 계정의 키쌍 재설정 신청이 가능합니다. 

하단에 보이는 `Enter an email address to be alerted`라는 빈칸에 사용 중이신 이메일 주소를 입력한 뒤에 `Subscribe to Lost Key alerts`라는 버튼을 클릭하면, 이메일을 통해서 **"분실 키 복구 솔루션 개발이 모두 완료되어 정상적으로 시작할 준비가 되는 경우에 알림"**을 받아보실 수 있습니다.

## #2. 이오스 분실 키 복구 솔루션 대상자
---

현재 개발되고 있는 이오스 분실 키 복구 솔루션은 모든 키 분실자를 대상으로 하는 것은 아니며, **다음의 조건을 모두 만족**하는 토큰 홀더에 한해서만 적용이 됩니다. 

**① ERC-20 EOS토큰을 이더리움 네트워크에 보유 중인 경우**
> 메타마스크나 마이이더월렛에 보관 중인 경우를 의미합니다

**② 이오스 메인넷에 계정을 가지고 있는 경우**
> 위에서 말씀드렸던 이오스 블록익스플로러(https://eosflare.io/)에서 계정이 조회가 되어야 합니다.

**③ 내가 가지고 있는 프라이빗키로 계정에 접근할 수 없는 경우**

**④ 이오스 메인넷 런칭 이후 이오스 계정을 사용한 적이 없는 경우**

**⑤ 이더리움(메타마스크, 마이월렛 등) 프라이빗키를 통해 메시지에 서명을 할 수 있는 경우**
> EOS ERC-20 토큰을 보유하고 있는 이더리움 지갑의 프라이빗키를 반드시 보유하고 있어야 합니다.

따라서 **"이오스 메인넷 런칭 이후에 계정을 사용하다가 프라이빗키를 분실한 경우"** 또는 **"EOS ERC20 토큰을 보유하고 있던 이더리움 지갑의 프라이빗키를 잃어버린 경우"** 등은 해당 솔루션을 통해 키를 복구하는 것이 불가능합니다. 이 점을 참고해주시기 바랍니다.

## #3. 분실 키 복구 솔루션 관련 주요 Q&A 정리
---

- **Q1. 내 프라이빗키(Private key)가 필요한가요?**
- A1. 어떠한 경우에도 프라이빗키를 입력할 필요가 없습니다. 위에서 설명드렸던 것처럼 **"12자리로 된 이오스 계정이름"**과 **"EOS로 시작하는 53자리의 퍼블릭키(Public key)"**만 있으면 됩니다. 절대 다른 어떤 사용자나 웹사이트에도 프라이빗키를 넘겨주거나 입력해서는 안됩니다.

---

- **Q2. 분실 키 복구 솔루션은 어떻게 작동하나요?**
- A2. 분실자들은 프라이빗키를 분실한 제네시스 계정의 "계정이름과 퍼블릭키"를 입력한 다음, 해당 메시지를 메타마스크로 서명하여 위조나 변조를 방지하고 자신의 계정임을 인증합니다. 그 다음 이오스 메인넷에 해당 계정의 키 변경을 위한 리셋요청을 제출하게 됩니다.

---

- **Q3. 얼마나 걸리나요?**
- A3. 분실 계정의 키 변경을 위한 계정리셋 요청이 일단 성공하면 대기열에 저장이 되고 처리되는 데까지 약 30일 정도가 소요될 것으로 예상됩니다. 분실자 여러분들은 해당 **리셋 요청을 정상적으로 수행하는 것이 중요하며 나머지 프로세스는 자동으로 진행**되므로 기다리시면 됩니다.

---

- **Q4. 왜 30일이나 기다려야 되나요?**
- A4. 혹시라도 **리셋을 요청한 계정이 정상적인 소유자가 있는 계정일 수도 있기 때문**입니다.  리셋을 요청한 계정에는 "해당 계정에 대한 키 리셋 요청이 접수되었다는 알림"이 가게 되고, 혹시라도 실제 다른 계정 소유주가 있는 경우에는 그 소유주가 트랜잭션을 일으켜서 키 변경을 막을 수 있는 기간을 주기 위함입니다. 
> 위에서 말씀드렸던 것처럼 **분실 키 복구 솔루션을 이용하기 위해서는 해당 계정이 이오스 메인넷 이후 아무런 트랜잭션이 발생하지 않았어야 되며, 혹시라도 30일 이내에 계정에 새로운 트랜잭션이 발생하는 경우 해당 계정은 키 복구 솔루션을 사용할 수 없는 계정으로 간주**됩니다. 

---

- **Q5. 저는 이오스 메인넷에서 제 계정을 잘 사용 중인데, 이더리움 프라이빗키를 해킹당했습니다. 혹시라도 해커가 이 분실 키 복구 솔루션을 통해 리셋을 신청하면 어떻게 하죠?**
- A5. 혹시라도 해커가 이더리움 월렛의 프라이빗키를 탈취한 후 분실 키 복구 솔루션을 통해 이오스 계정 리셋을 신청하는 경우를 방지하기 위해서 **해킹된 이더리움 계정을 탐색하여 허용 목록에서 삭제하는 스크립트를 실행**할 것입니다. 더불어, **이오스 계정을 잘 사용 중이시라면, 해당 계정에서 토큰 전송이나 투표 등 어떠한 액션**만 취하시면 되므로 걱정하실 필요는 없습니다. 

---

- **Q6. 계정 리셋 후 해당 계정에 연결할 새로운 키쌍은 어떻게 만드나요?**
- A6. 분실 키 복구 솔루션을 통해 리셋을 신청하기 전에 **아래의 이오스 계정키 생성 툴을 이용해서 새로운 키쌍을 미리 만드신 뒤 잘 저장**해놓으시면 됩니다. 

> - EOS Key Generation(https://nadejde.github.io/eos-token-sale/) : Generate EOS key 버튼 클릭 
> - EOSKey.io(https://eoskey.io) : 운영체제에 맞는 프로그램 다운로드 후 키쌍 생성(인터넷 연결 해제 후 오프라인 상태에서도 생성 가능)
> - 스캐터 데스크탑(https://get-scatter.com/) : 스캐터 데스크탑 다운로드 후 Add keys → Create a new key 순으로 키쌍 생성

**[주의사항] 많은 피싱 사이트들이 기승을 부릴 수 있으므로 반드시 새로운 키쌍의 생성 및 저장 시에 사이트 주소 및 다운로드 파일의 멀웨어 감염 여부 등에 유의하시기 바라며, 사전에 최대한 많은 정보를 검색하고 충분히 숙지하신 후에 진행하시기 바랍니다** 

---

- **Q7. 혹시 실수한 경우 다시 리셋을 신청할 수 있나요?**
- A7. **분실 키 복구 솔루션은 단 한 번만 신청이 가능**합니다. 일단 키 리셋을 신청하고 나면 다시 복구하는 것이 불가능합니다. 따라서 **리셋 시 연결하는 키쌍(프라이빗키, 해당 프라이빗키에 연결된 퍼블릭키)이 유출되거나 분실되지 않도록 유의하시고 안전한 곳에 잘 저장**하시기 바랍니다. 

---

벌써 이오스의 메인넷이 런칭된지도 8개월이 넘어가고 있네요. 중복 트랜잭션 발생 등으로 인해 계정에 접근하지 못했던 많은 분들께서 아마도 긴 시간동안 마음 고생이 심하게 하셨을 것 같습니다. 하루 빨리 EOS Lost Key Recovery 솔루션 개발이 완료되어 오랜 시간 동안 기다리셨던 계정을 되찾으시는 날이 오기를 바랍니다. 추가적으로 업데이트 되는 정보가 있으면 빠르게 전달드릴 수 있도록 하겠습니다. 감사합니다.


<center>![donekim.gif](https://cdn.steemitimages.com/DQmP5rc6mLfZAU56skFU2MkzywZQ5qWruKpyU2hq5nT7md7/donekim.gif)</center>



## [디온의 이오스 이야기 시리즈 한 눈에 보기](https://steemit.com/coinkorea/@donekim/eos-ecosystem-beginner-s-guide)
---

**#1. 이오스 생태계 초심자를 위한 기초설명**

(0) [암호화폐 초보 투자자들을 위한 보안 안전수칙](https://steemit.com/@donekim/4zvejy)

(1) [기존 암호화폐(비트코인/이더리움)와 이오스의 지갑생성 차이점 설명](https://steemit.com/dclick/@donekim/-dpos-pow--1539235906724)
- [이오스 계정 및 자원에 대한 설명](https://steemit.com/coinkorea/@donekim/eos-ram)

(2) 이오스 계정 생성 방법 설명
- [이오스 생태계에서 멀티계정이 필요한 이유](https://steemit.com/dclick/@donekim/--1538720744523)
- [1편 : 기존 계정 보유자](https://steemit.com/dclick/@donekim/-1--1539307707488)
- [2편 : 기존 계정 미보유자](https://steemit.com/dclick/@donekim/-2--1539459456222)
- [3편 : 이더리움 지갑 ERC-20토큰 당시 미등록홀더](https://steemit.com/dclick/@donekim/--1539165685371)

(3) [스캐터 데스크탑 설치 및 계정등록 방법 설명](https://steemit.com/coinkorea/@donekim/10-0)

(4) [이오스 지갑들의 종류 및 특징](https://steemit.com/coinkorea/@donekim/6mxqxi)

(5) [이오스 키쌍(Key pairs) 및 권한(Permission)에 관한 설명](https://steemit.com/dclick/@donekim/-public-key-private-key-owner-key-active-key--1540137295651)

(6) [액티브키(Active key) / 오너키(Owner key)에 관한 설명](https://steemit.com/dclick/@donekim/-active-key-owner-key-1-1541752457800)

(7) [토큰 배분 메커니즘에 관한 설명]

- [1편 : 새롭게 등장한 에어그랩(Airgrab)이란 무엇인가?](https://steemit.com/coinkorea/@donekim/airdrop-airgrab)
- [2편 : 에어드랍(Airdrop), 쉐어드랍(Sharedrop), 에어그랩(Airgrab)](https://steemit.com/coinkorea/@donekim/airdrop-vs-sharedrop-vs-airgrab)
- [3편 : 에어드랍(Airdrop), 에어그랩(Airgrab), 스카이훅(Skyhook)](https://steemit.com/dclick/@donekim/-airdrop-airgrab-skyhook-1541487453792)

(8) [EOS 키 분실자들을 위한 정보]

- [1편 : 제네시스 계정 키 분실자를 위한 Lost key Recovery 솔루션 안내](https://steemit.com/coinkorea/@donekim/eos-lost-key-recovery-tool)

---

**#2. 툴킷 설명 및 종류별 사용방법**



(1) [툴킷(Toolkit)에 대한 설명](https://steemit.com/dclick/@donekim/-eos-toolkit--1540665276011)

(2) [이오스 허브(eoshub.io) - by EOSYS 사용방법](https://steemit.com/dclick/@donekim/-eos-toolkit-1-eoshub-1540737671052)

(3) [마이이오스킷(myeoskit.com) - by EOS ASIA 사용방법](https://steemit.com/dclick/@donekim/-eos-toolkit-2-myeoskit-1540804251705)

(4) 블록스닷아이오(bloks.io) - by EOS Cafe Block & HKEOS 사용방법

- [1편 : 메뉴의 구성 소개](https://steemit.com/dclick/@donekim/-eos-toolkit-3-bloksio-1-1541318003393)
- [2편 : 토큰전송 및 에어그랩](https://steemit.com/coinkorea/@donekim/eos-toolkit-3-bloks-io-2)
- [3편 : 신규 계정(자계정) 생성방법](https://steemit.com/dclick/@donekim/eos-toolkit-3-bloks-io-3)
- [4편 : 오너키/액티브키 변경방법](https://steemit.com/dclick/@donekim/-active-key-owner-key--1541994112264)


---

**#3. 이오스 댑(DApp) 생태계 자세히 살펴보기**



(0) 이오스의 댑 생태계 훑어보기 시리즈

- [1편 : 전자상거래 / 교육 / 거래소 / 핀테크](https://steemit.com/coinkorea/@donekim/dapps-part1)
- [2편 : 게임 / 의료서비스 / 신원인증](https://steemit.com/coinkorea/@donekim/dapps-part2)
- [3편 : 마켓플레이스 / 미디어](https://steemit.com/coinkorea/@donekim/dapps-part3)
- [4편 : 플랫폼 / 보안 / 소셜 / 교통](https://steemit.com/coinkorea/@donekim/dapps-part4)

(1) [아티디움(Atidium) : 이오스 기반 자산관리 매니저](https://steemit.com/coinkorea/@donekim/eos-dapps-ecosystem-atidium)

(2) [호루스페이(HORUSPAY) : 이오스 기반 글로벌 페이롤 포탈](https://steemit.com/coinkorea/@donekim/eos-dapps-ecosystem-horuspay)

(3) [덱시오스(DEXEOS) : 이오스 기반 탈중앙화거래소](https://steemit.com/coinkorea/@donekim/eos-dapps-ecosystem-dexeos)

(4) 친타이(Chintai) : 이오스 자원임대 플랫폼

- [1편 : 친타이 소개](https://steemit.com/coinkorea/@donekim/eos-dapps-ecosystem-chintai)
- [2편 : 친타이 사용방법](https://steemit.com/dclick/@donekim/-chintai-eos--1538592582283)
- [3편 : 친타이(Chintai), 강화된 2.0 버전 및 토큰발행 정책 세부사항 요약](https://steemit.com/coinkorea/@donekim/-chintai-20--1545672000588)

(5) [데블(Dabble) : 이오스 기반 소셜 미디어 플랫폼](https://steemit.com/dclick/@donekim/-dabble--1541389956522)

(6) [파슬(Parsl) : 합법적인 대마초 공급망 관리 플랫폼](https://steemit.com/dclick/@donekim/-parsl--1540284962666)

(7) [하이어바이브즈(HireVibes) : 크라우드 소싱 기반 탈중앙화 채용 플랫폼](https://steemit.com/dclick/@donekim/-hirevibes--1540231312173)

(8) [센스챗(SenseChat) : 이오스 기반 탈중앙화된 P2P 메신저]
- [1편 : 센스챗 자세히 살펴보기](https://steemit.com/coinkorea/@donekim/eos-dapps-ecosystem-sense-chat)
- [2편 : 센스챗 베타 테스트 시작](https://steemit.com/coinkorea/@donekim/-p2p-sense-chat--1543372688523)

(9) [이오스나이츠(EOSKnights) : 이오스 기반 방치형RPG 게임](https://steemit.com/coinkorea/@donekim/eos-knights-rpg)

(10) 리들(RIDL) : 이오스 기반 탈중앙화된 평판 및 신원관리 시스템

- [1편 : 리들 백서 읽어보기](https://steemit.com/coinkorea/@donekim/scatter-and-ridl-part1)
- [2편 : 리들 백서 읽어보기](https://steemit.com/coinkorea/@donekim/scatter-and-ridl-part2)
- [3편 : 리들 백서 읽어보기](https://steemit.com/coinkorea/@donekim/scatter-and-ridl-part3)

(11) 카르마(KARMA) : 이오스 기반 탈중앙화된 선행보상 소셜 플랫폼

- [1편 : Do Good, Earn KARMA 선행보상 소셜 플랫폼 카르마 알아보기](https://steemit.com/coinkorea/@donekim/-do-good-earn-karma--1542378634502)
- [2편 : 카르마 퍼블릭베타(KARMA Public Beta) 테스트 참여방법 및 후기](https://steemit.com/coinkorea/@donekim/-karma-public-beta--1542417013044)
- [3편 : 카르마 오픈베타 시작](https://steemit.com/coinkorea/@donekim/-karma--1543888225227)
- [4편 : 카르마 2019년 신규 로드맵(Roadmap) 발표](https://steemit.com/coinkorea/@donekim/do-good-earn-karma-2019-roadmap)

(12) [루미오스(Lumeos) : 탈중앙화된 소셜 서베이 플랫폼](https://steemit.com/coinkorea/@donekim/-lumeos--1542562354375)

(13) 엠앤에잇(Emanate) : 자치적으로 운영되는 탈중앙화된 음원 거래 플랫폼

- [1편:  탈중앙화된 음악 산업을 이끌어 나갈 엠앤에잇(Emanate)의 에어드랍 및 백바운티 소식!](https://steemit.com/coinkorea/@donekim/emanate)
- [2편 : 엠앤에잇 디앱에 대한 설명](https://steemit.com/coinkorea/@donekim/-emanate--1543051501047)
- [3편 : 엠앤에잇의 EMT토큰 및 토큰 모델에 대한 설명](https://steemit.com/coinkorea/@donekim/-emanate--1543122628418)
- [4편 : 엠앤에잇(Emanate)과 에어드랍스닥(AirDropsDAC) 파트너십 체결](https://steemit.com/coinkorea/@donekim/emanate-airdropsdac)

(14) 퍼블리토(PUBLYTO) : 크로스미디어 콘텐츠 플랫폼

- [1편 : 퍼블리토 오픈베타 출시 소식](https://steemit.com/coinkorea/@donekim/eos-publyto-com)
- [2편 : 퍼블리토(PUBLYTO) 회원가입 및 사용방법 총정리](https://steemit.com/coinkorea/@donekim/publyto)
- [3편 : 퍼블리토(PUBLYTO) 사용자들의 주요 Q&A 총정리](https://steemit.com/coinkorea/@donekim/-publyto-qa--1546061938589)

(15) 이오스나이츠 : 방치형RPG 게임
- [1편 : 이오스나이츠 소개](https://steemit.com/coinkorea/@donekim/eos-knights-rpg)
- [2편 : 이오스 나이츠 대대적인 업데이트 소식](https://steemit.com/coinkorea/@donekim/-eosknights--1547102678892)

(16) 페트리오스(PETREOS) : 탈중앙화된 콘텐츠 공유, 구독, 펀딩지원 플랫폼
- [1편 : 이오스 생태계 새로운 에어드랍 소식, PATREOS?](https://steemit.com/coinkorea/@donekim/patreos)


---

**#4. 이오스 거버넌스 살펴보기**

(1) [1편 : 레퍼렌덤 개념 설명](https://steemit.com/coinkorea/@donekim/-referendum--1547390421364)

(2) [2편 : 레퍼렌덤 투표방법 설명](https://steemit.com/coinkorea/@donekim/referendum)

**#5. EOS.IO 코드 포크체인 살펴보기**


(1) [EOSIO 코드 포크체인에 대한 자세한 설명](https://steemit.com/coinkorea/@donekim/eosio)

(2) [포크체인(Forkchain)에 대한 설명](https://steemit.com/telos/@donekim/telos-local-chain-1)

(3) [메인체인과 포크체인의 비교 설명](https://steemit.com/coinkorea/@donekim/telos-vs-eos-feat-lumeos)

(4) 텔로스(TELOS)

- [EOSIO 코드 포크체인 텔로스(TELOS) 알아보기 #1](https://steemit.com/coinkorea/@donekim/eos-telos-part-1)
- [EOSIO 코드 포크체인 텔로스(TELOS) 알아보기 #2](https://steemit.com/coinkorea/@donekim/eos-telos-part2)
- [포크체인 텔로스(TELOS)와 메인체인 이오스(EOS) 비교](https://steemit.com/coinkorea/@donekim/telos-vs-eos-feat-lumeos)
- [EOSIO 코드 포크체인 텔로스 출시에 대한 개인적인 생각](https://steemit.com/telos/@donekim/telos-local-chain-1)
- [EOSIO 코드 포크체인 텔로스, 만장일치로 네트워크 공식 런칭](https://steemit.com/coinkorea/@donekim/-eosio-telos--1544296315326)
- [EOSIO 코드 포크체인 텔로스(TELOS) 관련 FAQ 정리](https://steemit.com/coinkorea/@donekim/-eosio-telos-faq--1544378173213)
- [EOSIO 코드 포크체인 텔로스(TELOS) 툴킷 사용방법 안내](https://steemit.com/coinkorea/@donekim/-eosio-telos--1545214121052)
- [EOSIO 코드 포크체인 텔로스(TELOS) 액티브 키 변경 방법 안내](https://steemit.com/coinkorea/@donekim/-eosio-telos--1545104386462)
- [EOSIO 코드 포크체인 텔로스(TELOS) 주요 Q&A 총정리](https://steemit.com/coinkorea/@donekim/-eosio-telos-qa--1545254361129)
- [EOSIO 코드 포크체인 텔로스(TELOS) 무료 계정생성 방법 안내](https://steemit.com/coinkorea/@donekim/-eosio-telos--1545757519268)

(5) 워블리(WORBLI) : 기업 금융 시스템 운영에 최적화된 시스터체인

- [1편 : 새로운 포크체인 워블리와 셰어드랍에 대한 설명](https://steemit.com/worbli/@donekim/worbli-sharedrop)
- [2편 : 워블리 포털 계정 생성 방법에 대한 설명](https://steemit.com/coinkorea/@donekim/-worbli--1542867388895)
- [3편 : EOSIO 코드포크 체인 워블리 자세히 알아보기](https://steemit.com/coinkorea/@donekim/-eosio-worbli--1544850279837)
- [4편 : 워블리토큰(WBI) 전송방법 및 주의사항 안내](https://steemit.com/coinkorea/@donekim/-wbi--1545029406802)
- [5편 : 워블리 쉐어드랍(WORBLI Sharedrop) 관련 중요 변경사항 공지](https://steemit.com/coinkorea/@donekim/3zpszt-worbli-sharedrop)

(6) [보스코어(BOScore) : 이오스 생태계 최초의 사이드체인(Sidechain)](https://steemit.com/coinkorea/@donekim/boscore)




<center>![donekim.gif](https://cdn.steemitimages.com/DQmP5rc6mLfZAU56skFU2MkzywZQ5qWruKpyU2hq5nT7md7/donekim.gif)</center>


<center>![behind banner.gif](https://cdn.steemitimages.com/DQmXBUz3S7u2z13jB39UNUder7HUADC9DvHibUEu7DTu3MR/behind%20banner.gif)



<center><pre> H O P E   F O R   T H E   B E S T , 
P L A N   F O R   T H E   W O R S T</pre>
<sub> https://steemit.com/@dONekim</sub></center>

- - -

This page is synchronized from the post: ['[이오스 이야기] 제네시스 계정 키 분실자들을 위한 자동화된 온체인 복구 솔루션(EOS Lost Key Recovery Tool) 안내'](https://steemit.com/@donekim/eos-lost-key-recovery-tool)
