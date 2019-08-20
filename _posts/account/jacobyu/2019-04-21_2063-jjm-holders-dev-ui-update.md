
---
title: '[JJM Holders] Material UI 적용'
permlink: 2063-jjm-holders-dev-ui-update
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-04-21 05:12:57
categories:
- kr-dev
tags:
- kr-dev
- busy
- jjm
- kr
- steem-engine
thumbnail: None
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<p>안녕하세요.</p>
<p>JJM holders UI에 material ui를 적용해봤습니다.</p>
<p>기존의 사용하던 text, table, button 등을 이미 material style의 text, table, button등으로 바꾸는 작업을 해봤습니다.</p>
<p>기존의 기능은 그대로 유지하면서 페이지를 분리해봤습니다.</p>
<ul>
<li>스팀 로그인 (네비 바)</li>
<li>홀더 페이지</li>
<li>보팅 페이지</li>
</ul>
<p><a href="https://passionbull.github.io/jjm/">https://passionbull.github.io/jjm/</a> 에 접속하시면 확인할 수 있습니다.</p>
<p> </p>
<p>https://ipfs.busy.org/ipfs/QmUpqJZt6jmeCSSGZ8rV67wVwqCeme32XG4evXB8Dr4PbN</p>
<p>https://ipfs.busy.org/ipfs/QmQYurDsw91hYdLwDo2xiXTWcvBdESPt87dtLqchKsYUfx</p>
<hr />
<p>Material design에 대한 설명을 가져와봤습니다.</p>
<p>https://material-ui.com/premium-themes/</p>
<p>https://material.io/design/introduction/#principles</p>
<p><a href="https://medium.com/beginners-guide-to-mobile-web-development/a-guide-to-google-material-design-977315149ea5">https://medium.com/beginners-guide-to-mobile-web-development/a-guide-to-google-material-design-977315149ea5</a></p>
<blockquote><p>Material Design is a visual language that synthesizes the classic principles of good design with the innovation of technology and science.</p>
<p>Google named it as material design ( codenamed as “Quantum Paper”) and introduced it in 2014 Google I/O conference.</p>
<p>Google’s Material Design considers “material” as a homogeneous digital fabric in which the material responds according to the user interaction . It provides the certain design standards for developing application across android , web and ios devices.</p></blockquote>
<p> </p>
<hr />
<h3>과정</h3>
<p>UI를 바꾸는 과정은 생각보다 쉬웠습니다.</p>
<p>먼저 가장 좋은 템플릿을 찾아봤습니다.</p>
<p>https://material-ui.com/premium-themes/</p>
<p>이 사이트에서 무료로 공개된 템플릿 중에 material-dashboard-react라는 것을 활용했습니다.</p>
<p>https://www.creative-tim.com/product/material-dashboard-react?partner=104080</p>
<p>이 템플릿에서 제가 필요한 부분을 사용하고 사용하지 않는부분을 빼면서 작업했습니다.</p>
<p>크게 admin.jsx에 sidebar, navbar, main page, bottom bar로 구성되어있습니다.</p>
<p>UI 구성에는 어려움이 적었습니다. 원하는 UI 구성요소가 이미 있어서 편했습니다.</p>
<p> </p>
<hr />
<h3>어려웠던 점 & 개선할 점</h3>
<h4>github page에서 route관련 문제</h4>
<p>https://passionbull.github.io/jjm/ 이 route page인데 https://passionbull.github.io/jjm/voting으로는 바로 접속을 못합니다.</p>
<p>접속을 못하는 이유는 github에서는 /jjm/voting을 다른 호스팅으로 생각을 해서 그런가? 싶습니다.</p>
<p>아마 서버에서 호스팅한다면 이런 문제는 없을것 같긴 합니다.</p>
<p>이 문제는 router 쪽 코드에서 파라미터로 이동할 페이지의 이름을 받아서 이동하면 될까? 싶습니다. 개선해야합니다.</p>
<h4>스팀 라이브러리 & 네트워크 문제</h4>
<blockquote><p>Failed to load resource: net::ERR_SPDY_PROTOCOL_ERROR</p></blockquote>
<p>홀더들에게 보팅을 하기 위해서는 언제 보팅을 받았고, 최신 글이 뭔지 확인해야합니다. 이 과정에서 정보들을 가져오는데 시간이 걸립니다.</p>
<p>거기다가 스팀에서 계정 정보, 포스팅정보를 가져올 때 에러가 날 경우가 있습니다. 그럴 경우, 몇 개의 계정은 누락될 수 있습니다. 제 핸드폰에서는 잘 되는데, 노트북에서는 에러가 날 때가 있더군요.</p>
<p>해결 방안으로 몇가지 생각하고 있는데</p>
<p>1. 여러번 로드를 합니다.</p>
<p>2. 이 부분은 따로 미리미리 서버에서 계정들의 포스팅 정보를 로드해놓는 것이 유용할 것 같습니다.</p>
<p>3. 다른 방법으로 dsteem 라이브러리를 사용해볼까합니다.</p>
<h4>서버비용 없이 서비스 만들기</h4>
<p>최대한 서버없이, 관리비용없이 웹페이지를 만들어보고 있습니다.</p>
<p>많은 사용자가 사용하지 않을 것 같아서 github page이면 충분하지 않을까 생각합니다.</p>
<p>그 외에 aws-s3를 사용하긴 했습니다. aws-s3는 스토리지 저장소로, 이미지, 텍스트를 저장해놓을 수 있습니다. 이 스토리지에 보팅할 메시지를 저장해놓고, 보팅을 할 때 이 메시지들을 가져와서 댓글을 작성합니다.</p>
<p>작성될 메시지를 수정하고 싶다면 코드를 수정하지 않고 스토리지 저장소의 보팅 메시지만 수정하면 보팅할때 작성할 메시지를 변경할 수 있습니다.</p>
<h4>코드..</h4>
<p>state 관리를 잘 해야겠다. 그리고 코드 분리, 기능과 ui를 분리해보는 것, 설계 등에 더 노력해야겠다 생각하고있습니다. mobx를 공부해서 적용해 볼 예정입니다.</p>
<hr />
<h3>관리자 페이지 개발 계획</h3>
<ol>
<li><del>홀더 정보 보여주기</del></li>
<li><del>스팀커넥트 로그인</del></li>
<li><del>보팅 자동화 with 댓글</del></li>
<li><del>보팅할 떄 작성할 댓글을 원격에서 수정</del></li>
<li><del>UI 업데이트</del></li>
<li>배당 자동화</li>
</ol>
<p> </p>
<p>웹 개발을 해보면서 부족함을 많이 느낍니다. ㅜㅜ</p>
<p>앞으로 공부하면서 발전시키도록 하겠습니다.</p>
<p>감사합니다.</p>


- - -

This page is synchronized from the post: ['[JJM Holders] Material UI 적용'](https://steemit.com/@jacobyu/2063-jjm-holders-dev-ui-update)
