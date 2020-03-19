
---
title: '[SPS 소개] 스팀 키체인 개발(Steem Keychain Development)에 대한 제안'
permlink: sps-steem-keychain-development
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-11-15 00:38:03
categories:
- sps
tags:
- sps
- sct
- sct-kr
- sct-freeboard
- liv
- zzan
- palnet
- s
- union
- dblog
- busy
- mini
thumbnail: 'https://cdn.steemitimages.com/DQmfGZT9aNSayg3TZcSnsqhFZ6oE1LqC2dvrkCpnFNSkHWR/keychain.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![keychain.png](https://cdn.steemitimages.com/DQmfGZT9aNSayg3TZcSnsqhFZ6oE1LqC2dvrkCpnFNSkHWR/keychain.png)

안녕하세요, 디온(@donekim)입니다. 오늘도 스팀 작업자 제안제도(SPS)를 통해 올라와 있는 제안서들 중에서 커뮤니티에서 관심을 가지면 좋을만한 제안에 대해서 소개를 드립니다.

오늘 소개드릴 제안서는 이미 많은 유저들이 덕분에 편리한 스팀 라이프를 즐기고 있는 **스팀 키체인(Steem Keychain) 개발과 관련된 제안서**입니다. 

원 제안자는 스팀 증인이자 스플린터랜즈 개발팀, 키체인 개발팀에 있는 Matt Rosen(@yabapmatt)입니다. 

- 원문 링크 : [SPS Proposal for Steem Keychain Development](https://steemit.com/steem-keychain/@yabapmatt/sps-proposal-for-steem-keychain-development)


## #1. 스팀키체인이란?
---

스팀키체인은 현재 크롬(Chrome), 브레이브(Brave), 파이어폭스(Firefox) 웹 브라우저에서 사용할 수 있는 브라우저 확장프로그램으로, **스팀 계정의 여러 키들을 안전하게 저장하고 거의 대부분의 스팀 블록체인 기반의 앱들과 상호작용할 수 있는 기능을 지원**합니다. 

스팀키체인이 제공하는 기능들은 다음과 같습니다.

- 계정 잔액, 리소스크레딧(RC), 보팅파워 확인
- 스팀/스팀달러의 전송 및 트랜잭션 내역 조회
- 스팀파워 업, 다운, 임대 등 관리
- 증인(witness) 투표 및 관리
- 스팀엔진 기반 토큰들의 전송, 잔액 및 트랜잭션 내역 조회

더불어 각 브라우저별 다운로드 링크는 다음과 같습니다.

- 크롬 또는 브레이브 : [다운로드](https://chrome.google.com/webstore/detail/steem-keychain/lkcjlnjfpbikmcmbachjpdbijejflpcm?hl=en)
- 파이어폭스 : [다운로드](https://addons.mozilla.org/en-US/firefox/addon/steem-keychain/)
- 소스 코드(깃헙) : [바로가기](https://github.com/MattyIce/steem-keychain)

## #2. 펀딩 요청
---

애그로드(@aggroed)와 저는(@yabapmatt) 지난 1년 동안 스팀 키체인 확장프로그램의 런칭 및 지속적인 개발에 사적으로 자금을 지원해왔습니다. (이는 모두 스팀 플랫폼과 커뮤니티 덕분에 가능했던 일이었고, 참 운이 좋았다고 생각합니다)

저희는 앞으로 스팀 작업자 제안제도(SPS)를 활용하여 스팀 커뮤니티로부터 이 프로젝트의 지속적인 개발 및 유지관리 비용에 대해 지원을 받는 것을 요청하고자 합니다.

- **요청 금액 : 100 스팀달러/일** `(월 3,000 스팀달러)`
- **요청 기간 : 6개월**

이 펀드는 스팀키체인에 새로운 기능들을 추가하고, 스팀이나 스팀 엔진의 변경된 기능들을 빠르게 지원하도록 업데이트 상태를 유지하는 것, 버그 및 문제 해결 등을 위한 개발 및 설계 작업에 비용을 지불하는 데 사용됩니다.

위에서 요청한 금액은 지금까지 지불한 비용의 이력을 기반으로 추정한 것이며, 사용되지 않은 자금은 시스템계정(@steem.dao) 계정으로 반환되어 다른 프로젝트의 재원으로 투입될 수 있도록 할 것입니다.

우리는 **매월 말에 작업 수행내역 및 자금 사용내역을 담은 리포트를 발표**할 계획입니다.

더불어, 현재 진행 중인 것들과 곧 진행 예정인 작업 목록들을 소개합니다.

- 트랜잭션을 브로드캐스트 하는데 사용하는 RPC 노드를 앱이 선택할 수 있는 기능의 추가
- 개발팀이 기본 RPC노드를 원격으로 설정 및 업데이트할 수 있도록 허용
- 코드 클린업 및 리팩터
- 키체인을 통한 웹사이트/앱의 신규 계정생성 기능 추가(가능한 경우)
- SMT와 스팀 커뮤니티스 통합을 위한 디자인 업그레이드
- 문서화 작업 및 에러 메시지 등 개선
- 다양한 언어 지원

## #3. 이 제안이 중요한 이유
---

스팀은 주로 웹 애플리케이션의 성능을 강화하는데 중점을 두고 있는 플랫폼으로, 진정한 생태계의 성장을 바란다면 **사용자들이 애플리케이션을 사용할 때 간단하면서도 안전하게 접근이 가능**해야만 합니다.  

키 저장, 서명, 브로드캐스팅 등을 할 수 있는 방법은 여러가지가 있겠지만 브라우저 확장 프로그램은 보안을 유지하면서도 최상의 사용자경험을 제공합니다.

애석하게도 스팀은 크립토 커뮤니티에서 좋은 평판을 얻지 못하고 있기 때문에 이러한 인식들을 바꾸기 위해서는 **유저들이 기대하는 모든 툴들이 있어야 할 뿐만 아니라 사용하기 쉬워야 합니다.** 즐, 잘 설계되고 적극적으로 업데이트 및 유지 관리가 되어야 합니다.

전문적이고 사용자 친화적이며 유지 및 관리가 잘 된 제품은 유저들에게 프로젝트에 대한 자신감을 제공하지만, 버그가 많고 복잡하며 잘못 설계된 제품은 사람들을 멀어지게 합니다. 스팀이 관련 제품 및 앱의 좋은 퀄리티를 통해 커뮤니티에 신뢰를 줄 수 있다면 그 신뢰는 결국 시장에 반영될 것입니다.

물론, 전문적이고 사용자 친화적이며 잘 관리되는 제품을 만들기 위해서는 자금이 필요합니다. **짜투리 시간을 활용하여 만드는 제품과 적절한 펀딩을 받은 팀이 만드는 제품은 정말 쉽게 구분이 가능**합니다. 지금까지 스팀에서의 많은 프로젝트들이 전자에 속했고, 새롭게 도입된 스팀 작업자 제안제도(SPS)를 통해 앞으로는 변화가 시작되기를 소망합니다.

이러한 이유 때문에 스팀 작업자 제안제도(SPS)는 스팀 생태계에 있어 매우 중요한 변화입니다. 물론 SPS가 그 자체로 훌륭하게 기능할 수는 없습니다. 좋은 팀들이 좋은 제안서들을 잘 딜리버리 해야하고, 스팀 토큰 홀더들은 배분이 가능한 펀드들을 어떤 팀과 프로젝트들에게 적절하게 분배할지에 대해 현명한 의사결정을 내려야 합니다.

**스팀 키체인은 현재 5,000명 이상의 유저들이 사용**하고 있으며 계속해서 사용자의 숫자가 늘어나고 있습니다. 그리고 스팀 키체인 개발팀인 @aggroed, @stoodkev, @nateaguila는 꽤 괜찮은 제품들을 딜리버리 해온 실적이 있습니다.

## #4. 투표 참여방법
---
![yabap.png](https://ipfs.busy.org/ipfs/QmNyK8rhrkvur8PHgf9rrNXhtPsJLkBUDP1rJQWQuLsjQc)


해당 제안서에 투표하는 방법은 굉장히 간단합니다. 아래의 링크 중에서 하나를 선택해서 직접 투표에 참여하시면 됩니다.

- 스팀프로포절스닷컴 : https://steemproposals.com/proposals
- 스팀픽(SteemPeak) : https://steempeak.com/proposals
- 스티밋월렛 : https://steemitwallet.com/proposals

혹시라도 SPS투표 참여방법에 대한 상세한 내용이 궁금하신 분들은 이전에 제가 작성해놓은 가이드 포스팅을 참고해주시기 바랍니다.

- SteemPeak SPS Guide : [바로가기](https://www.steemcoinpan.com/sct/@donekim/4cw7w2)

- SteemProposals.com SPS Guide : [바로가기](https://www.steemcoinpan.com/sct/@donekim/steem-proposals)

- SteemitWallet.com SPS Guide : [바로가기](https://www.steemcoinpan.com/sct/@donekim/sps-ui)

- - -

This page is synchronized from the post: ['[SPS 소개] 스팀 키체인 개발(Steem Keychain Development)에 대한 제안'](https://steemit.com/@donekim/sps-steem-keychain-development)
