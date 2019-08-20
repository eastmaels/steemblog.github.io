
---
title: '[JJM Holders] 스팀엔진 관련 테스트 및 정보'
permlink: 1958-steem-engine-test
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-03-30 11:11:36
categories:
- kr-dev
tags:
- kr-dev
- busy
- jjm
- kr
thumbnail: 'https://steemitimages.com/300x0/https://ipfs.busy.org/ipfs/QmUSmMNfqUhfzPF2JcAn7u9kL2k5QRKWqL8UyyJRgtpWYH'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<p>안녕하세요. 제이콥입니다.</p>
<p>JJM의 자동 배당 시스템을 개발하고 있습니다.</p>
<p><a href="https://passionbull.github.io/jjm-list/">https://passionbull.github.io/jjm-list/</a>를 통해 홀더 리스트와 배당률을 확인해볼 수 있습니다.</p>
<p>이제 배당률에 따라 자동으로 토큰, 스팀을 전송해야합니다.</p>
<p>그 관련으로 스팀엔진 토큰 전송하는 것을 테스트 중입니다.</p>
<p>제가 개발하면서 활용한 함수들에 대해 적어봅니다. 그리고 참고할만한 여러 이야기를 적어봅니다.</p>
<hr />
<p>sscjs 라이브러리를 활용해서 토큰의 정보를 확인할 수 있습니다.</p>
<p><a href="https://github.com/harpagon210/sscjs">https://github.com/harpagon210/sscjs</a></p>
<h3>1. 특정 토큰의 마켓 정보 보기</h3>
<div>아래의 함수를 활용해서 JJM의 정보를 가져올 수 있었습니다. 혹시, JJM 외의 다른 토큰의 정보를 확인하고 싶다면, JJM 대신 다른 토큰 symbol을 적으면 됩니다.</div>
<div></div>
<div>
<pre class=""><code class="scrollbarGhost-2F9Zj2 scrollbar-3dvm_9 hljs">ssc.find('market', 'metrics', {'symbol':'JJM'}, 1000, 0, [], (err, result) => {</code></pre>
</div>
<div></div>
<div>
<div><img src="https://steemitimages.com/300x0/https://ipfs.busy.org/ipfs/QmUSmMNfqUhfzPF2JcAn7u9kL2k5QRKWqL8UyyJRgtpWYH" alt="image.png" /></div>
<h3>2. 특정 토큰 보유자 리스트</h3>
<p>아래의 함수는 JJM 홀더 리스트를 출력합니다. 마찬가지로 JJM을 다른 토큰으로 변경하시면, 리스트를 확인할 수 있습니다.</p>
<pre><code class="scrollbarGhost-2F9Zj2 scrollbar-3dvm_9 hljs">ssc.find('tokens', 'balances', {'symbol':'JJM'}, 1000, 0, [], (err, result) => {</code></pre>
<pre><code class="scrollbarGhost-2F9Zj2 scrollbar-3dvm_9 hljs">.....
[ { account: 'virus707',
symbol: 'JJM',
balance: '8574570.06717000',
'$loki': 12550 },
{ account: 'jk6276',
symbol: 'JJM',
balance: '0.00000000',
'$loki': 13119 },
{ account: 'goldenticket',
symbol: 'JJM',
balance: '290000000.00000000',
'$loki': 13239 },
.....</code></pre>
<div></div>
</div>
<div>이런 형태로 값이 나옵니다.</div>
<div>
<hr />
<h3>3. 테스트 서버와 메인 서버</h3>
<p>스팀엔진에는 테스트 서버와 메인 서버가 있습니다.</p>
<p>테스트 서버에서 쉽게 자신의 토큰을 만들고 테스트를 할 수 있습니다 (돈이 거의 안듭니다). 대신, 언제 사라져도 스팀엔진에서 책임지지않는다고 합니다.</p>
<p>메인 서버는 우리가 알고 있는 JJM, STEEMSC 등이 있는 서버를 말합니다.</p>
<p>아래 정보는 특정 서버에 접속할 때 필요한 정보들입니다.</p>
<p><strong>Mainnet API details:</strong></p>
<p>Account:</p>
</div>
<pre class=""><code class="scrollbarGhost-2F9Zj2 scrollbar-3dvm_9 hljs">ssc-mainnet1</code></pre>
<p>RPC Node:</p>
<pre><code class="scrollbarGhost-2F9Zj2 scrollbar-3dvm_9 hljs">https://api.steem-engine.com/rpc/contracts</code></pre>
<p>History API:</p>
<pre><code class="scrollbarGhost-2F9Zj2 scrollbar-3dvm_9 hljs">https://api.steem-engine.com/accounts/history</code></pre>
<p>Website: <a class="anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB" tabindex="0" title="https://steem-engine.com/" role="button" href="https://steem-engine.com/" target="_blank" rel="noreferrer noopener">https://steem-engine.com/</a></p>
<p><strong>Testnet API details:</strong></p>
<p>Account:</p>
<pre><code class="scrollbarGhost-2F9Zj2 scrollbar-3dvm_9 hljs">ssc-00000000000000000002</code></pre>
<p>RPC Node:</p>
<pre><code class="scrollbarGhost-2F9Zj2 scrollbar-3dvm_9 hljs">https://testapi.steem-engine.com/contracts</code></pre>
<p>History API:</p>
<pre><code class="scrollbarGhost-2F9Zj2 scrollbar-3dvm_9 hljs">https://testaccounts.steem-engine.com/history</code></pre>
<p>Website: <a class="anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB" tabindex="0" title="https://qa.steem-engine.com/" role="button" href="https://qa.steem-engine.com/" target="_blank" rel="noreferrer noopener">https://qa.steem-engine.com/</a></p>
<hr />
<h3>4. 스팀엔진 토큰 전송하기 & 스팀,SBD 전송</h3>
<p>스팀엔진 토큰을 전송하는 것은 customjson을 활용합니다.</p>
<p>스팀은 포스팅 외에 json을 스팀에 보낼 수 있는데, 이를 이용해서 토큰을 전송합니다.</p>
<p><a href="https://github.com/harpagon210/steemsmartcontracts/wiki/Interact-with-the-sidechain">https://github.com/harpagon210/steemsmartcontracts/wiki/Interact-with-the-sidechain</a></p>
<p>보낼 때는 아래와 같은 형태의 json을 보냅니다.</p>
<blockquote><p>[ { contractName: ‘tokens’,<br />
contractAction: ‘transfer’,<br />
contractPayload: { symbol: ‘JUN’, to: ‘makeahabit’, quantity: ‘1.0’, memo: ” } } ]</p></blockquote>
<p>transfer을 할껀데, ‘JUN’이라는 토큰을 ‘makeahabit’ 계정에게 1.0의 양과 메모 ”를 보내줘. 이런 의미입니다.</p>
<p>테스트넷에 제가 JUN이라는 토큰을 만들어서 테스트 중입니다.</p>
<p><img src="https://ipfs.busy.org/ipfs/QmatVUeLXVTMMivdXZcGMwThGrbFhdiskDpYebDJS9qfBw" alt="image.png" /></p>
<p>자바스크립트에서 하고 있고 아래처럼 함수를 실행하면 토큰, 스팀을 전송합니다.</p>
<pre class=""><code class="scrollbarGhost-2F9Zj2 scrollbar-3dvm_9 hljs">/// send steem, sbd, and token
sendSteem('jacobyu','makeahabit',0.001, 'steem test');
sendSBD('jacobyu','makeahabit',0.001, 'sbd test');
sendToken('JUN','makeahabit','1.0');
</code></pre>

![image.png](https://ipfs.busy.org/ipfs/QmS3oScuExZ3UsYFmnVswBA2osA2VDLZWAaaPmaKsqZ1NX)


<h3>5. UI 관련</h3>
UI 관련으로는 react-native의 여러 컴포넌트를 써서 좀 더 예쁘게 만들어볼 예정입니다.

https://github.com/inspmoore/rnw_boilerplate_nav

https://blog.bitsrc.io/how-to-react-native-web-app-a-happy-struggle-aea7906f4903?gi=2e2376971bc0

https://bit.dev/grommet/grommet/data-table?example=5c85199e98f9d200131d388a

https://levelup.gitconnected.com/comprehensive-guide-to-create-simple-app-using-react-native-web-and-react-native-elements-306cf43fb8d7

감사합니다!

- - -

This page is synchronized from the post: ['[JJM Holders] 스팀엔진 관련 테스트 및 정보'](https://steemit.com/@jacobyu/1958-steem-engine-test)
