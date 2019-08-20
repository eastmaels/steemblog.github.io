
---
title: '[후기 및 분석] Engrave – 스팀 기반 블로그'
permlink: 1632-review-analytics-engrave
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-01-05 09:59:15
categories:
- kr-dev
tags:
- kr-dev
- busy
- jjangjjangman
- engrave
thumbnail: 'https://ipfs.busy.org/ipfs/QmWP9Bxt13VVgyTd3QmqJc6Hr8NXJhPNcdFm1EpKqjNqtE'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<p>안녕하세요.</p>
<p>지난번 글에서는 스팀 기반 블로그 engrave를 사용해보고 후기, 장단점에 대해 적었습니다.</p>
<blockquote class="wp-embedded-content" data-secret="0vOwpyJrIl"><p><a href="https://passionbull.net/2018/12/it/blockchain/test-engrave/">[후기] Engrave – 스팀 기반 블로그</a></p></blockquote>


<p>단점으로는 수익의 일부를 가져가는 것이 있었고, 자신의 이전 글을 이 블로그에 업데이트 하지 못하는 것이였습니다.</p>
<p>그래도, 처음 시작하시는 분들은 이 블로그로 스팀 글을 관리하면 꽤 괜찮을 것 같습니다.</p>
<hr />
<p>저는 어떻게 하면 스팀잇에 작성한 이전 글들을 이 블로그에 업데이트 할 수 있을까? 궁금했습니다.</p>
<p>글을 포스팅 할 때, json_metadata 정보만 바꿔서 넣으면 글이 업데이트 되지 않을까 추측했습니다.</p>
<p>discord에 질문도 해보고, 코드도 좀 살펴봤습니다.</p>
<p>결론적으로 말하면, engrave 측에서 제공하고 있지 않아 이전 글을 engrave 사이트에 업데이트 할 수 없습니다.</p>
<p>정확히 말하자면, 수익의 일부를 받기 위해 beneficiary를 설정하는데 거기에 무조건 engrave가 있어야 블로그에서 글을 보여줍니다.</p>
<p>문제는 수익의 일부를 주겠다라는 beneficiary 설정은 처음 글을 작성할 때만 정할 수 있는데 이전 글들은 beneficiary를 수정을 못하니 블로그에서 못보여 주게됩니다.</p>
<p>이거 관련 코드는 아래를 보시면 됩니다.</p>
<p>https://github.com/wise-team/engrave/blob/335bbfb0b7766d6877a76cb3892a1a7d5a6646bb/engrave/src/modules/Utils.ts#L41-L53</p>
<hr />
<p>이 문제는 engrave에서 이전글에 대해서는 저 조건 없이 보여주면 해결이 될것 같기도 하구.. 좀더 살펴봐야할 것 같네요.</p>
<p>아니면 포크를 받고, beneficiary 조건을 없애버리고, 직접 블로그 서버? 호스팅을 한다?</p>
<p>어렵습니다.</p>
<hr />
<p>이전 글들이 올라가지 않는 문제는 파악했고 수익을 안주면서 이 블로그에 글을 업데이트 할 수 있는가 한 번 제가 실험해봤습니다.</p>
<p>글을 하나 씁니다. 이 글의 beneficiary을 engrave로하고 수익은 0퍼.. 로 설정했습니다. 그리고 이 글의 json-meta에는 engrave에서 카테고리 분류에 사용할 정보를 추가했습니다.</p>
<p>이렇게 할 경우, engrave 플랫폼을 사용하지 않고도 engrave 블로그에 잘 올릴 수 있는걸 확인하였습니다.</p>

아래의 형광펜 친 부분이 engrave를 위해 추가한 부분입니다.

![image.png](https://ipfs.busy.org/ipfs/QmWP9Bxt13VVgyTd3QmqJc6Hr8NXJhPNcdFm1EpKqjNqtE)


<hr />
<p>이런 실험을 한 이유는 engrave가 만들어준 블로그 홈페이지가 맘에 들어서입니다. 내 글의 댓글을 다는 것도 이 블로그에서 해결할 수 있으며 카테고리로 글이 분류돼서 모아보기가 됩니다. 거기다가 예쁘게 보여주기까지하니깐요.</p>
<p>아래는 제 블로그인데 글들을 깔끔하게 잘 보여줍니다.</p>
<p>카테고리도 있습니다.</p>
<p><a href="https://passionbull.engrave.site/">https://passionbull.engrave.site/</a></p>
<p>최근에 쓴 글들이 업데이트가 되어있고, 분류 태그를 넣은 것은 카테고리에서 분류도됩니다.</p>
<p><img src="https://ipfs.busy.org/ipfs/QmfF6EJvBYpFmaBDxrMBUiudwcaBjPExKbW8Xinf21efdB" alt="image.png" /></p>
<hr />
<p>결론 및 느낀점</p>
<p>1. 이전 글들은 업데이트 못했지만, 새 글은 benficiary 0퍼로 업데이트 가능하긴하다.</p>
<ul>
<li>일반적인 방법으로는 못하고, steem library를 활용한 글 작성이 필요</li>
<li>작성자는 만들어 놓은 워드프레스 플러그인에서 meta-json 파일만 변경해서 가능하게함.</li>
</ul>
<p>2. Engrave는 스팀기반의 네이버 블로그 같은걸 쉽게 만들 수 있게 해준다. 글을 모아 볼 수 있다. 관리할 수 있다.</p>
<p>3. 예를 들어, 커피 종류를 소개하고 싶은 카페 사장님이라면 이걸로 카페도 홍보하고 글도 쓰고, 보상도 받을 수 있지 않을까?</p>
<p>4. 앞으로 기대가 많이 된다.</p>
<p>감사합니다.</p>


- - -

This page is synchronized from the post: ['[후기 및 분석] Engrave – 스팀 기반 블로그'](https://steemit.com/@jacobyu/1632-review-analytics-engrave)
