
---
title: 'steem hivemind 활용하기'
permlink: 7rrtr7-steem-hivemind
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-01-05 08:17:09
categories:
- sct
tags:
- sct
- sct-kr
- sct-dev
- kr-dev
- busy
- bs
- kr
thumbnail: 'https://cdn.steemitimages.com/DQmaXfwq9Szh38YpMGNhYLddxzaxX4esUQqxNbauzUUkHi9/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


안녕하세요. 제이콥입니다.

![](https://cdn.steemitimages.com/DQmaXfwq9Szh38YpMGNhYLddxzaxX4esUQqxNbauzUUkHi9/image.png)

steem hivemind는 steem blockchain에 있는 정보들을 쉽게 접근할 수 있게 해줍니다.

> Hive is a "consensus interpretation" layer for the Steem blockchain, maintaining the state of social features such as post feeds, follows, and communities. Written in Python, it synchronizes an SQL database with chain state, providing developers with a more flexible/extensible alternative to the raw steemd API.

@emrebeyler는 steem hivemind 서버를 구축하였고, 시범테스트로 몇 명 유저들에게 접속권한을 제공했습니다. 아래글에서 부탁하면 접근권한을 줍니다.
https://steempeak.com/hivemind/@emrebeyler/hivemind-sql-users-2nd-batch

@emrebeyler가 제공해준 접속권한으로는 조회기능을 할 수 있고, code, tool 등을 통해 쿼리를 보낼 수 있습니다. 

#### 예시

1) 내가 최근 일주일동안 수정한 글 정보 가져오기
2) 내가 최근 일주일동안 작성한 글 중에서 카테고리가 있는 글만 가져오기

steem api로도 할 수 있지만, hivemind로 하면 더 짧고 깔끔하게 가져올 수 있습니다.
아래 한줄만 실행하면 됩니다.

```
const _query = `SELECT * FROM hive_posts_cache WHERE author = '${username}' and depth= 0  and updated_at >= date '${startDate}' ORDER by updated_at DESC LIMIT ${limit}`;
```

#### 주의해야할 것

하이브마인드에서 데이터를 가져올 때, 제약사항을 적절히 정하는게 중요합니다. 그렇지 않으면, 쿼리시간이 아주 길어집니다.

#### api 서버 개발

api 서버를 간단히 만들어봤습니다. 아래 url에 id를 적으면, 그 @id의 최근 일주일동안 **수정한 글**을 가져올 수 있습니다. 여기서 "수정한 글"은 새로 작성한 것이 아닌 기존에 있던 글을 수정한 날짜입니다. (https://steem-hm-api.herokuapp.com/@jacobyu)

제 블로그는 스팀에 기록된 글을 가져와서 보여주는데요. 이 api를 활용해서 자동으로 수정한 글들만 새로 업데이트 할 예정입니다. 아주 좋은듯. (https://jacobyu.net)



----

#### 느낀점

하이브마인드
훌륭합니다.
기본적인것만 활용해봤습니다. 
스팀 블록체인 자체를 db로 쓴다고 보시면됩니다.

감사합니다.

- - -

This page is synchronized from the post: ['steem hivemind 활용하기'](https://steemit.com/@jacobyu/7rrtr7-steem-hivemind)
