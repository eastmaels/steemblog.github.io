
---
title: '[암호화폐 이야기] 어떤 코인의 깃헙 커밋이 가장 활발했을까? (Darpal Rating)'
permlink: darpal-rating
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-05-02 05:47:00
categories:
- coinkorea
tags:
- coinkorea
- kr-coin
- kr-series
- busy
- roys-market
thumbnail: 'https://steemitimages.com/DQmcdZ7RCXZpjGeNzFTX2bAV6UhEDs3ENhsmgbEY6171UeE/Talk%20about%20crypto.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![Talk about crypto.png](https://steemitimages.com/DQmcdZ7RCXZpjGeNzFTX2bAV6UhEDs3ENhsmgbEY6171UeE/Talk%20about%20crypto.png)


안녕하세요 디오네, 디온, 디원, 도네 등 다양한 닉네임을 소유하고 있는 @donekim입니다.
오늘은 **어떤 코인의 깃헙 커밋이 가장 활발했을까?**를 주제로 포스팅을 해보고자 합니다.
예전에 [[암호화폐 등급표] 디지털 화폐계의 무디스가 되고 싶어하는 Darpal Ratings](https://steemit.com/coinkorea/@donekim/darpal-ratings)라는 포스팅을 통해 소개해 드렸던 Darpal Rating에서 얼마 전에 **"200개의 블록체인 프로젝트에 대한 깃헙 감사보고서(Github Audit for 200 Blockchain projects )"**를 발표하였습니다. 4월 21일에 Darpal Rating블로그에 게시된 글로 해당 깃헙 커밋은 **2018년 3월을 기준**으로 함을 먼저 알려 드립니다.

![darpal audit2.jpeg](https://steemitimages.com/DQmQtnFpD3gpoia1uHeKVan1xfh9Q9kuBi1wgpBBxcY6TUq/darpal%20audit2.jpeg)


## ▶ 깃헙이 뭐지?
***
> 당신은 깃헙에 대해서 들어보지 못했을 수도 있지만, 소프트웨어 개발자들에게 깃헙은 최고의 성지이다. (You may not have ever heard of GitHub, but for many software developers, it’s a mecca.) - By Fortune

블록체인과 암호화폐에 입문하신 분들은 한 번쯤 깃헙(Github)이라는 단어를 들어보셨을 것입니다. 정확히 깃헙이 무엇인지는 잘 모르겠지만 "깃헙에 보니 별다른 활동이 없는 것으로 보아 이 코인은 스캠이다." 또는 "최근 들어 깃헙 활동이 활발한 것을 보아하니 메인넷이 임박한 것으로 보인다." 등등의 다양한 글들을 보신 적은 있으실 겁니다. 그럼 **포춘지에서도 소프트웨어 개발자의 최고의 성지로 표현한 깃헙의 정체는 무엇일까요?**


## ▶ 깃헙이란
***
**Github은 우리나라에서 깃헙 또는 깃허브라고 부르는데, 2008년 설립된 깃(Git) 전문 호스팅 업체**입니다. 깃(Git)의 중심지(Hub)역할을 하기 때문에 그 이름이 깃헙(Github)입니다. (제 주변에서는 깃헙을 빗썸과 혼동하는 사람도 있던데, 빗썸도 깃썹도 아닙니다. ㅎㅎㅎ)

**깃(Git)은 2005년에 리눅스를 만든 리누스 토발즈, 주니오 하마노에 의해 개발된 오픈소스 소프트웨어로 분산형 버전관리 시스템**입니다. 깃을 이용하면 누가 어떤 코드를 수정했는지가 기록이 되며 추적 가능해진다는 장점을 가지고 있습니다. 이러한 특성으로 인해 많은 사람들이 함께 소프트웨어를 개발할 때 필수적인 시스템이라고 할 수 있습니다. 

**깃헙은 이와 같은 깃을 보다 편하게 이용할 수 있도록 만든 호스팅 서비스**입니다. 웹 그래픽 기반으로 깃을 이용할 수 있는 환경이 제공됨에 따라 수많은 사람들이 함께 소스코드를 복사, 배포, 수정, 검색하는 것이 매우 손쉬워지게 되었습니다. 설립 이후 그 영향력이 점차 커지면서 2015년 기준으로 사용자가 1,200만명을 넘었고 3,030만개가 넘는 저장소가 운영되고 있습니다. **깃허브는 오픈소스 소프트웨어의 중심지 역할을 하면서, 오픈소스 개발의 입문장벽을 낮추고 누구나 프로젝트에 손쉽게 참여할 수 있게 함으로써 비트코인, 이더리움을 비롯한 오픈소스 프로젝트 및 암호화폐가 발전하는데 기여**하고 있습니다.

**요약하자면 깃(Git)은 소스코드를 관리하는 버전 관리 시스템이고, 깃헙은 이 소스코드를 활용한 프로젝트들의 데이터를 저장할 수있는 서버**라고 할 수 있습니다.


## ▶ 깃헙 커밋 감사보고서
***

Darpal Rating에서 각 코인에 레이팅한 기준은 라이브러리의 인기(Popularity of the Library), 참여자의 수(Number of Contributors), 릴리스 빈도(Release Freqeuncy,) 커밋의 유형(Type of commit) 등입니다. 특히 커밋 유형은 아래와 같이 구분이 됩니다.

- A1 : 계속해서 꾸준히 새로운 기능 개발
- A2 : 새로운 기능 개발 후 버그 수정 및 테스트
- A3 : 초기 약속 및 구성 변경을 기반으로 새로운 기능 출시
- B : 버그 수정 및 디봅스(DevOps) 테스트
- C : 디봅스(DevOps) 구성 변경

![darpal audit1.png](https://steemitimages.com/DQmYYjWUo6tTREa5o2LcH6xkFz2YanDLpw2W8nSS9YTdwwm/darpal%20audit1.png)



최근 시장에서의 해당 코인의 가격변동이 어떠하였는지와는 별개로, **깃헙 커밋은 해당 코인의 프로젝트가 얼마나 내실있게 충실히 진행되고 있는지를 객관적으로 확인할 수 있는 아주 중요한 지표**라고 생각합니다. 다양한 밋업이나 컨퍼런스의 참석, 마케팅 등도 중요하지만 가장 핵심이 되는 것을 결과적으로 프로젝트의 실현을 위한 기능을 개발하고 수정하는 것이기 때문입니다. 

스티미언 이웃 여러분들께서는 위의 깃헙 커밋 감사보고서에 있는 코인들 중 어떤 것에 투자를 하고 계신가요? 그리고 그 투자한 코인들의 진정한 기본적 분석(Fundamental Analysis)을 통한 가치는 어느 정도라고 생각하시나요? 가격과 깃헙 커밋과의 상관관계에 대해서는 자세히 살펴보아야 하겠지만, 간간히 **이러한 정보를 통해 내가 투자한 코인의 진행 상황에 대해 살펴보고, 주기적으로 포트폴리오를 조정하는 것도 매우 중요**하지 않을까 생각이 됩니다.

- - -

This page is synchronized from the post: ['[암호화폐 이야기] 어떤 코인의 깃헙 커밋이 가장 활발했을까? (Darpal Rating)'](https://steemit.com/@donekim/darpal-rating)
