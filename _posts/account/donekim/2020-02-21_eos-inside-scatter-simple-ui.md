
---
title: '[EOS Inside] 간결한 구성과 빠른 반응 속도로 돌아온 Scatter Simple UI'
permlink: eos-inside-scatter-simple-ui
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-02-21 08:58:00
categories:
- hive-101145
tags:
- hive-101145
- sct-kr
- sct-coin
- liv
- zzan
- palnet
- steemleo
- upfundme
- neoxian
- sct
thumbnail: 'https://cdn.steemitimages.com/DQmZbkkfHgsiCH23dvF5nSoCNsUpRA1RoitVEUqx41pjP7w/scatter.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![scatter.png](https://cdn.steemitimages.com/DQmZbkkfHgsiCH23dvF5nSoCNsUpRA1RoitVEUqx41pjP7w/scatter.png)


안녕하세요, 디온입니다. **인터페이스가 보다 간결해지고 속도가 개선된 새로운 Scatter Simple UI가 출시**되었습니다. 아직까지는 정식 출시가 아닌 테스트 버전인 관계로 현재 스캐터 공식 웹사이트에서는 기존 버전인  Scatter 12 Nebula (v.12.0.0)의 다운로드만 지원하고 있지만, 혹시라도 새로운 심플 버전을 체험해보고 싶으신 분들은 아래의 Scatter Github링크를 통해 다운로드 받으실 수 있습니다. 

![download.png](https://cdn.steemitimages.com/DQmZ4o7PZaTiQv3s1wL7v5Kh5g6A6DKdimgqewJHR52MvVT/download.png)

- Scatter Simple UI 다운로드 링크 : https://github.com/GetScatter/ScatterDesktop/releases/tag/12.1.0

#### ※ 다운로드 전 주의사항

- 본 버전은 정식으로 출시된 버전이 아니며 테스트 단계에 있습니다.

- 다운로드 및 실행 전에 반드시 백업을 먼저 진행하시기 바랍니다.

-  스캐터 사용법에 익숙하지 않으신 분들은 정식 버전이 출시된 이후에 사용하시는 것을 권장합니다.

## #1. Scatter Simple UI
---

![scatter1.png](https://cdn.steemitimages.com/DQmXVQWqsCx4dushNkSpgJZpZYT4Bh1JDW3mRSNir8mDoyc/scatter1.png)

새로운 업데이트 버전의 가장 큰 특징은 **UI가 심플해졌고, 반응속도가 굉장히 빨라졌다는 것**입니다. Scatter 12 Nebula를 사용해오셨던 분들이라면 어느 정도 느끼셨겠지만, 최근에 스캐터는 너무 무거워서 버벅거리는 경우가 많아 정말 사용하기 불편했습니다. 저 같은 경우에도 스캐터만 연동이 되는 사이트가 아닌 이상에는 대부분 모바일 월렛을 사용해오고 있었습니다.

그러나 **이번 Simple UI버전을 조금 사용해 본 결과, 확실히 엄청나게 가벼워지고 빨라졌다는 것을 체감**할 수 있었습니다. 

![scatter2.png](https://cdn.steemitimages.com/DQmW1qGWxhtvTaeVXJMooPF3Xsjxc6CC56GqevRXcf4Fxvf/scatter2.png) 

 ![scatter3.png](https://cdn.steemitimages.com/DQmbFfqHMEBsWr7TKBW4MsMvVyYrk7TYsE3hCwnNU3erhV6/scatter3.png)

업데이트된 UI는 위의 화면에서 보실 수 있는 것처럼 굉장히 단순하고, 여기저기에 덕지덕지 지저분하게 붙어있던 많은 것들이 삭제되었습니다. 

![scatter4.png](https://cdn.steemitimages.com/DQmWkLhVeMS2aJFNdSotdnaW32ELN3nbFvCrhoEoxwTPxhs/scatter4.png)

개인적으로 생각했을 때 기존 버전의 스캐터가 버벅거렸던 주요 원인 중 하나가 **너무나 많은 블록체인 네트워크에 많은 계정 정보들을 한꺼번에 불러오는 것 때문이었던 것으로 추측**하고 있는데, 업데이트 버전에서는 블록체인 네트워크를 간단한 클릭만으로 비활성화 처리할 수 있고, 여러 계정을 소유하고 있는 분들의 경우에는 **[Edit Accounts] 메뉴 클릭**을 통해 연결된 계정을 변경하도록 기능이 변경되었습니다.

![scatter5.png](https://cdn.steemitimages.com/DQmQVETGfrQm2ddFLUgM9rf7wjRwriGLrEUTgC3LRysuMqi/scatter5.png)

비활성화되어 있거나 비활성화를 했던 네트워크는 위와 같이 하단에 별도로 표시되며, 간단한 클릭만으로 언제든지 다시 활성화하여 이용하는 것도 가능합니다.

## #2. 업데이트 사항 정리
---

- **신용카드 기능** : 테스트 버전에서는 아직 몇가지 버그가 있는 관계로 해당 기능이 차단되어 있는 상태이지만, 추후 충분한 테스트를 통해 해당 기능도 지원할 예정입니다.

- **명성 및 신원인증 레이어(RIDL) 지원** : 이미 해당 기능의 통합작업은 완료되었으나 테스트 버전에서는 지원되지 않습니다. (퍼블릭 블록체인에 추후 컨트랙트 푸쉬 예정)

- **네트워크별 기본계정 1개만 지원** : 위에서도 설명드린 것처럼 **여러 계정 정보를 저장해놓은 상태라고 하더라도, 각 블록체인 네트워크별로 1개의 기본 계정 정보만 로딩**됩니다. 다른 계정을 사용하고자 하시는 경우에는 Setting → Edit Account 순으로 접속해서 계정을 바꿔야 합니다.

- **토큰 가격 정보** : 결제 등을 위한 통화(currency) 목적으로서의 토큰(코인)과 애플리케이션에서 사용 목적으로서의 토큰을 구분하기 위해서, 스캐터에서는 시스템 토큰 및 스테이블 코인의 가격 정보만 제공을 합니다. 

- **스피드!** : 정말 가벼워지고 빨라졌습니다.

## #3. 개인적인 생각
---

![scatter nebula.png](https://cdn.steemitimages.com/DQmeSP6vmGMdWhiX8myZihK2pzAP44nkCywH55cH5JnMYTt/scatter%20nebula.png)

기존 버전의 스캐터는 **너무나 많은 욕심들이 들어가서 유저들이 사용하기 정말 불편했던 실패작**이었다고 생각합니다. 

스캐터 팀의 입장에서는 단순한 신원인증 툴에서 벗어나 **유저 게이트웨이이자 통합 브라우저(디앱 브라우저, 월렛, 익스플로러 등)로서의 역할**을 목적으로 할 수 밖에 없었겠지만 너무 많은 욕심들은 정말 최악의 사용자 경험을 가져다줬던 것 같습니다.

지금 테스트 해보고 있는 정도로만 아주 가볍고 간결하게, 그리고 빠르게 사용할 수 있도록 해줬으면 좋겠네요.

- - -

This page is synchronized from the post: ['[EOS Inside] 간결한 구성과 빠른 반응 속도로 돌아온 Scatter Simple UI'](https://steemit.com/@donekim/eos-inside-scatter-simple-ui)
