
---
title: '카테고리가 중요한 것 같다. (Engrave와 Triple A를 보면서)'
permlink: engrave-triple-a
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-10-05 16:34:33
categories:
- sct
tags:
- sct
- sct-kr
- sct-freeboard
- sct-dev
- busy
- jjm
- kr
thumbnail: 'https://cdn.steemitimages.com/DQmNnXWxo5E27WTCJYvdm4spFQJkzYsGM7xTeRHhWRhpUk5/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


안녕하세요. 

Engrave를 활용해서 독서모임 페이지를 만들어 봤습니다. 원래 목적은 제 서평을 모아서 보는것을 목표로 했었는데, 이왕 만든거 다른사람들 글도 모아보는 것이였습니다. 아래 사진처럼 몇 분이 신청하셨고, 같이 서평을 적어보고 있습니다. 

![](https://cdn.steemitimages.com/DQmNnXWxo5E27WTCJYvdm4spFQJkzYsGM7xTeRHhWRhpUk5/image.png)

Triple A에 글도 하나 써봤습니다. 제가 쓴 글은 특정 영화의 리뷰로 들어가있더군요. 보기 좋았습니다.

https://www.triplea.reviews/movie/515195-yesterday

![image.png](https://ipfs.busy.org/ipfs/QmXrREA5iRhtFnGGSgPxukJPBtjHcFbQsY7ZBLXBgLNp73)


이번에 2개의 서비스를 써보면서 느낀건 "카테고리가 중요하다" 입니다. 

생각을 좀 적어봤습니다.

---

#### 1. engrave 사용자가 많아지는 것을 보면서..

Engrave의 핵심 기능은 태그와 관계없이 카테고리를 만들어서 글을 모아볼 수있는 것입니다. 이 기능 하나 덕분에, 많은 한국의 스티미언님들이 관심이 생겼고, Engrave를 활용해서 만든 것으로 알고 있습니다.

카테고리에 왜 열광했을까? 생각해봤는데요. 

1. 원하는 글만 보여줄 수 있습니다, 원하지 않는 글은 뺄 수 있습니다.
2. 태그와 관계없이, 작성된 시간과 관계없이 글을 모아볼 수 있습니다.


---


#### 2. 카테고리가 할 수 있는 것

카테고리로 글을 모은다는것이 이렇게 중요한가? 너무 당연히 있던게 스팀에 없어서 생각못했던 것 같습니다.

* 스팀 메뉴얼 글 중에서 좋은 메뉴얼 글들만 모아서 "메뉴얼" 카테고리에 보여줄 수 있습니다.
* 여러 운영진이 작성한 공지사항을 하나의 "공지" 카테고리에서 보여줄수 있습니다.
* 태그와 관계없이 "마켓(판매)" 카테고리를 선택한글을 "마켓(판매)" 카테고리에서 보여줄 수 있습니다.

#### 3. 구현가능성

이전이라면.. 스팀잇, 스팀피크, 비지같은 사이트를 만들기 어려웠습니다. 이제는 조금 다릅니다. 니트로스, 스팀엔진, 스콧봇이라는 좋은 기반 플랫폼이 있고, 이를 활용해서 충분히 자기가 원하는대로 보여줄 수 있습니다.

AAA, triple A가 진정 영화리뷰 사이트로 재탄생했습니다. triple A는 스티미언이 작성한 글을 보기좋게 분류해서 보여주고있습니다.

우리 스팀코인판도 준비가 됐습니다. 자체 서버, db도 구축하였고요. 어느정도 안정화가 됐다고 생각합니다. 스팀코인판 개발진 분들이 고생많이했습니다.

----

#### 4. 스팀코인판은 발전중..

제가 생각한 스팀코인판의 강점은 토큰 이코노미에 있습니다. 스팀코인판의 운영진님들이 많은고민과 여러 코인들을 바탕으로 스팀코인판의 토큰이코노미 시스템을 하나하나 강화해나가고있습니다.

지금까지는 토큰이코노미 시스템을 만들기 위해, 그리고 인프라를 만들기 위해 개발해왔다면..

이제는 ui도 하나씩 신경써보고, 테스트 해볼 수 있겠습니다.

예전에 [스팀코인판, 니트로 관련 개발 아이디어](https://www.steemcoinpan.com/sct/@jacobyu/6mg54u)  라는 포스팅으로 아이디어를 몇 개 적어봤습니다. 이 중에서 많은 도움으로 이미 1,2,3번이 구현됐습니다. 나머지도 하나하나 해볼 수 있도록 하겠습니다.

지금까지도 계속 발전해왔지만, 앞으로도 다른 팀, 다른 서비스를 보면서 배울 것입니다. 

#### 5. 여러 고민들

이번에 engrave와 triple a를 보면서 예전에 했던 생각들을 다시 꺼내봤습니다.

**좋은글 논란, 외부유입** 이 한번에 해결은 안되겠지만, 카테고리가 이 문제들을 해결하기 위한 좋은수단이라고 생각합니다.

옛날에 쓴글을 요약해보자면

1. 카테고리로 **잘 분류된 글**, 이것이야말로 좋은글이고, 외부유입을 만들 수 있는 길이라고 생각했습니다.

2. 두번째는 벤치마킹, 잘되고 있는 서비스를 벤치마킹하는 것입니다.



[스팀코인판의 좋은 글은 어디에 있나?](https://www.steemcoinpan.com/sct/@sct.jcob/3vu9m7)

[외부유입에 대한 고민 그리고 해결책](https://www.steemcoinpan.com/sct/@jacobyu/4wmnyu)

개인적인 의견이고, 열심히 해보겠다는 다짐을 적어봤습니다. ㅋㅋ

**댓글달아주시면 풀보팅해드립니다.**
긴 글 읽어주셔서 감사합니다.

- - -

This page is synchronized from the post: ['카테고리가 중요한 것 같다. (Engrave와 Triple A를 보면서)'](https://steemit.com/@jacobyu/engrave-triple-a)
