
---
title: 'JJM 토큰 홀더 리스트 페이지 오픈!'
permlink: 1945-jjm-holders-page
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-03-26 09:07:42
categories:
- kr-dev
tags:
- kr-dev
- busy
- jjm
- steem-engine
- kr
thumbnail: 'https://ipfs.busy.org/ipfs/Qme3wmrE4DYrMAq4j7iLr4Zo9NvbiYngVKm9A6EqDBLDx4'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<h3>소개</h3>
<p>안녕하세요. 제이콥입니다.</p>
<p>JJM에 개발자가 필요하다고 하여 제가 한번 지원해봤습니다.</p>
<p>먼저, JJM의 배당 자동화??를 할 수 있는 툴을 만들어보려고 합니다. (수작업을 조금이나마 줄일 수 있도록)</p>
<ol>
<li>JJM 토큰 홀더 리스트 및 개수 확인</li>
<li>UI로 보여주기</li>
<li>배당률 계산하기</li>
<li>토큰 전송 자동화</li>
</ol>
<p>현재 1,2,3번이 진행중입니다.</p>
<p><a href="https://passionbull.github.io/jjm-list/">https://passionbull.github.io/jjm-list/</a></p>
<p>JJM에 필요한 여러 개발들을 기회가 된다면 해보고 싶습니다.</p>
<p>짱짱맨! 파이팅!</p>
<hr />
<h3>개발중</h3>
<p><a href="https://passionbull.github.io/jjm-list/">https://passionbull.github.io/jjm-list/</a> 는 개발 중인 페이지입니다.</p>
<p>이 페이지에서 JJM 토큰 홀더, 토큰의 수, 배당률을 보여줍니다.</p>
<p><a href="https://bloks.xyz/token/JJM">https://bloks.xyz/token/JJM</a> 처럼 보여주고, 더 필요한 정보가 있다면 앞으로도 더 넣을 예정입니다.</p>

![image.png](https://ipfs.busy.org/ipfs/Qme3wmrE4DYrMAq4j7iLr4Zo9NvbiYngVKm9A6EqDBLDx4)


<p>이 페이지는 react-native-web을 기반으로 만들어봤습니다.</p>
<p>스팀 토큰 정보를 가져오기 위해서는 <strong>sscjs</strong>라는 라이브러리를 활용해야합니다.</p>
<p>이 라이브러리는 Steem Smart Contracts node (스팀토큰을 기록, 관리하는 노드라고 부를 수 있을것 같습니다.)와 통신을 할 수 있게 해주는 라이브러리입니다.</p>
<p>sscjs를 활용해서 JJM의 holder list를 가져왔고 위의 페이지처럼 보여주고 있습니다.</p>
<p><a href="https://github.com/passionbull/jjm-list/blob/master/src/App.js#L34-L39">https://github.com/passionbull/jjm-list/blob/master/src/App.js#L34-L39</a></p>
<hr />
<h3>개발 예정</h3>
<p>4번 토큰 전송 자동화는 많은 테스트가 필요해 보입니다.</p>
<p>steem-engine은 테스트 서버가 따로 있습니다. 테스트용 토큰도 따로 있고요. 이 테스트 토큰을 활용해서</p>
<p>전송하는 것을 테스트 해볼 예정입니다.</p>
<p><a href="https://qa.steem-engine.com/#">https://qa.steem-engine.com/#</a></p>
<p><a href="https://github.com/Privex/python-steemengine/blob/master/privex/steemengine/SteemEngineToken.py#L162-L167">https://github.com/Privex/python-steemengine/blob/master/privex/steemengine/SteemEngineToken.py#L162-L167</a></p>
<hr />
<h3>참고</h3>
<p>ssc RPC server와 통신 라이브러리</p>
<p><a href="https://github.com/harpagon210/sscjs">https://github.com/harpagon210/sscjs</a></p>
<p>리액트 네이티브 웹 스타트 예제</p>
<p><a href="https://medium.com/@Or_yoffe/start-writing-react-native-for-web-with-react-native-web-%EF%B8%8F-a000d712a37b">https://medium.com/@Or_yoffe/start-writing-react-native-for-web-with-react-native-web-%EF%B8%8F-a000d712a37b</a></p>
<p>배당 룰</p>
<p><a href="https://busy.org/@jjm13/jjm13">https://busy.org/@jjm13/jjm13</a></p>
<p>테스트 스팀엔진 콘솔 페이지</p>
<p><a href="https://qa.steem-engine.com/#">https://qa.steem-engine.com/#</a></p>
<p>스팀엔진 파이썬 라이브러리</p>
<p><a href="https://github.com/Privex/python-steemengine/blob/master/privex/steemengine/SteemEngineToken.py#L162-L167">https://github.com/Privex/python-steemengine/blob/master/privex/steemengine/SteemEngineToken.py#L162-L167</a></p>
<p>JJM LIST 깃헙 페이지</p>
<p><a href="https://github.com/passionbull/jjm-list">https://github.com/passionbull/jjm-list</a></p>
<hr />
<p>혹시 잘못표기된게 있거나 궁금한것, 제안 등등 편하게 말해주세요.</p>
<p>감사합니다!</p>


- - -

This page is synchronized from the post: ['JJM 토큰 홀더 리스트 페이지 오픈!'](https://steemit.com/@jacobyu/1945-jjm-holders-page)
