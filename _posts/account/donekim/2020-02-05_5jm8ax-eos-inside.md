
---
title: '[EOS Inside] 젠풀에서 리워드 프록시를 설정하는 방법 가이드'
permlink: 5jm8ax-eos-inside
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-02-05 06:38:30
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
- union
- dblog
- upfundme
thumbnail: 'https://cdn.steemitimages.com/DQmPVh3PWtxGEt2ZnDcapxJGYeqEPaxYDxph7Edq1EmB3Na/guide.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![guide.png](https://cdn.steemitimages.com/DQmPVh3PWtxGEt2ZnDcapxJGYeqEPaxYDxph7Edq1EmB3Na/guide.png)

안녕하세요 디온입니다. [[EOS Inside] 투표 보상 시스템 소개 및 주요 질의응답 안내](https://www.steemcoinpan.com/sct/@donekim/eos-inside-genpool-overview-and-faq-summary) 포스팅을 통해 소개드렸던 젠풀(GenPool)에서 **리워드 프록시에 투표권을 위임하는 설정방법**에 대해서 간략히 소개드립니다.

젠풀을 사용하기 위해서는 **EOS메인넷 계정정보가 저장되어 있는 스캐터가 설치**되어 있어야 하고, 혹시라도 최신 스캐터를 다운받고자 하시는 분들은 아래의 링크에 접속하셔서 본인의 운영체제에 맞는 파일을 다운로드 받으시면 됩니다.

- 스캐터 데스크탑 다운로드 링크 : https://github.com/GetScatter/ScatterDesktop/releases

현재 스캐터 최신 버전인 Scatter 12 - Nebula의 윈도우즈 버전은 아래의 링크에서 곧바로 다운로드 받으실 수 있습니다.

- 스캐터 12 -Nebula 다운로드 : [링크](https://github.com/GetScatter/ScatterDesktop/releases/download/12.0.0/win-scatter-12.0.0.exe)


## #1. 리워드 프록시 설정방법
---
![login1.png](https://cdn.steemitimages.com/DQmS9rBNoPuhfPshj4MGESdkUwkvFeLvh4Y5ZfqEGmfmTJ1/login1.png)

(1) 먼저 젠풀 웹사이트(https://genpool.io/)에 접속한 뒤에, **우측 상단에 보이는 `Login with Scatter` 버튼을 클릭**합니다. 


<center>![login2.png](https://cdn.steemitimages.com/DQmbXLebMjawoRJzDWWUjKPCxEpKbyKJNCgiBnMZ3kyzkuU/login2.png)</center>

(2) 위와 같이 스캐터 팝업창이 나타나면 **로그인하고자 하는 계정을 선택한 뒤에 `ALLOW`버튼을 클릭**합니다.


![login3.png](https://cdn.steemitimages.com/DQmYxngz2KtzeSmmssvjqbLWU18CGLcaR5KZiM13oqzkmvM/login3.png)

(3) 정상적으로 로그인이 완료되면 위와 같이 `Login with Scatter`라는 문구가 있던 위치에 내 계정명이 나타나는 것을 확인하실 수 있습니다.


![login4.png](https://cdn.steemitimages.com/DQmbYttS7CJWPZn7Fn6pWbnD7fURAVT4MwpRhAHhE6nFcvS/login4.png)

(4) 화면을 아래로 스크롤하시면 위와 같이 **현재까지 리워드 프록시로 등록되어 있는 리스트를 확인**하실 수 있습니다. **내 투표권을 위임하고자 하는 프록시 이름 우측에 보이는 `VOTE`버튼을 클릭**해주세요.


![login5.png](https://cdn.steemitimages.com/DQmfHNa1zg4AxuunMu8jWHW9Zx8f5XULKaZuZPXqJLHiRHQ/login5.png)

(5) 위와 같이 스캐터의 **트랜잭션 승인창이 나타나면 `ALLOW`버튼을 클릭**해주세요.


![login6.png](https://cdn.steemitimages.com/DQmauX1QG6Ptj71DK3qDocLmM1TC5eHwa4jh7kQCvaEqH7Z/login6.png)

(6) 정상적으로 승인이 완료되면 웹사이트 우측 하단에 `Vote succesful`이라는 문구가 나타나는 것을 확인하실 수 있습니다.

> - 혹시라도 정상적으로 승인이 되었다는 문구 대신에 트랜잭션 실패 알림이 뜨는 경우는 일반적으로 **해당 계정에 CPU가 부족해서 에러가 발생하는 것**입니다. 
> - REX에서 1 EOS로 CPU를 임대하시면 현재 기준으로 약 1,700 EOS에 해당하는 CPU자원을 30일간 임대하실 수 있습니다.
> - REX 자원임대가 어려우신 분들은 [코리오스 텔레그램](https://t.me/koreosio)에서 도움을 받으실 수 있습니다.


![login7.png](https://cdn.steemitimages.com/DQmdG7ysZxBNPYRJaa47BAM2R3sxK76FaV4vHbdeuXuBQMG/login7.png)

(7) 정상적으로 프록시 설정이 완료되었는지 확인하고자 하시는 경우에는 블록스(https://bloks.io/account/계정명)에 접속하시어 위와 같이 트랜잭션이 정상적으로 이뤄졌는지를 확인하실 수 있습니다. 

## #2. 스캐터 연동 문제 해결방법
---
![login8.png](https://cdn.steemitimages.com/DQmPMjEmMopFskVkmC1v7W56ACfTMMtTTgLyWVNfQjPAWtb/login8.png)

참고적으로, **혹시라도 블록스, 젠풀 등에서 스캐터 연결이 되지 않으시는 분들**은 다음과 같이 조치를 하시면 정상적으로 스캐터를 사용하실 수 있습니다.

- 스캐터 로그인 후 APPS → My Apps 순으로 클릭

- My Apps 하단에 보이는 앱들을 `REMOVE` 버튼을 클릭하여 삭제

- 블록스, 젠풀 등 웹사이트 새로고침 후 다시 로그인 시도

- - -

This page is synchronized from the post: ['[EOS Inside] 젠풀에서 리워드 프록시를 설정하는 방법 가이드'](https://steemit.com/@donekim/5jm8ax-eos-inside)
