
---
title: '[이오스 이야기] 에브리피디아(Everipedia)의 개발진들은 현명해질 필요가 있다'
permlink: everipedia
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-08-20 02:58:21
categories:
- coinkorea
tags:
- coinkorea
- kr-coin
- kr-series
- everipedia
- jjangjjangman
thumbnail: 'https://cdn.steemitimages.com/DQmVqig7tJfGTnDf5v1fe5bZ7Qb3TTGtydJYRU5BoekFJTM/main%20deonkim%20eos.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![main deonkim eos.png](https://cdn.steemitimages.com/DQmVqig7tJfGTnDf5v1fe5bZ7Qb3TTGtydJYRU5BoekFJTM/main%20deonkim%20eos.png)

> 이오스 포스팅 열심히 쓰라고 멋진 대문을 선물해주신 @designkoi님께 감사드립니다 :D

![steemit_logo.png](https://cdn.steemitimages.com/DQmaZsenPDf5Qn5nJzDZNkVg1aCQUyXNwqwK1fk8qe4jhKa/steemit_logo.png)



![everipedia.png](https://cdn.steemitimages.com/DQmbSoa1FEsFcFnJD74ch9zFk8hG1SRDTcM2UUXC5qepoXU/everipedia.png)


안녕하세요, 디온(@donekim)입니다. 이오스 관련해서는 10일 전쯤에 헤븐(Hevven)의 합류소식을 전달드린 후, 꽤 오래간만에 이오스 생태계에 관한 포스팅을 쓰는 것 같네요. 오늘은 **Wikipedia on Blockchain이라는 타이틀을 가지고 이오스의 가장 대표적인 댑(DApp)으로 손꼽히고 있는 에브리피디아(Everipedia)**에 대해서 포스팅을 해보고자 합니다. 

사실 포스팅의 내용은 제목만 보시고도 어느 정도 짐작을 하셨겠지만, 에브리피디아에 대한 소개보다는 최근의 에브리피디아 관련 소식과 이에 대한 개인적인 생각에 대한 것입니다. 에브리피디아는 이오스 생태계에서 첫 번째 공식 에어드랍 소식 발표와 함께 EOS VC 의 공식 투자 펀드인 "마이클 노보그라츠"의 갤럭시 디지털 (Galaxy Digital)과 EOS.IO 이외에도 Distributed Network Advisors (DNA) 등 기타 투자자들의 지원으로 3천만 달러의 투자 유치를 받으며 많은 이오스 투자자들에게 가장 대표적인 댑(DApp)으로 각인이 되었습니다. 이렇게 **이오스 생태계에서 가장 대표적인 주자로 손꼽히는 에브리피디아가 최근에 자신들의 정책을 일부 변경하면서 이에 대한 충분한 사전고지를 하지 못해 토큰 홀더들이 꽤나 당혹스러운 일을 겪게 되는 해프닝**이 벌어졌습니다.


그 해프닝에 대한 내용을 조금 자세히 풀어서 설명을 드리자면 다음과 같습니다. 지난 주말에 이오스 토큰 홀더 중 한 분께서 탈중앙화된거래소(DEX)를 통해서 에브리피디아의 IQ토큰을 거래하는 도중 특이한 현상을 발견했다는 경험담들이 커뮤니티를 통해 들려왔습니다. 


그 특이한 현상은 **①A라는 계정에서 B라는 계정으로 IQ토큰을 전송할 때, ②자신의 계정에서 거래소로 IQ토큰을 전송할 때, ③DEX에서 자신이 원하는 가격에 IQ토큰 매도 계약을 걸어놓았다가 취소했을 때 `IQ토큰의 수량이 줄어든다는 것`**이었습니다. 


업비트(Upbit)나 빅원(Big.ONE)과 같이 에브리피디아의 IQ토큰이 상장되어 있는 거래소에서 토큰을 거래하는 경우에는 거래소 자체적으로 수수료가 부과되어 내가 구매하고자 하는 수량보다 토큰의 수량이 줄어드는 것이 일반적이지만, 거래수수료가 없는 DEX에서 실제로 거래가 이루어지지도 않았는데 토큰의 수량이 줄어들고, 트랜잭션 수수료를 부과하지 않는 이오스 메인체인에서 계정 간 토큰 전송 시에 토큰의 수량이 줄어든다는 것은 굉장히 의아한 일이었습니다. 


그래서 여러 사람들이 이에 대한 원인을 파악하기 위해 컨트랙트를 확인하던 도중, **에브리피디아측에서 자체적으로 IQ토큰의 트랜잭션 수수료(Transaction Fees)를 부과하는 컨트랙트가 얼마 전부터 실행되었다는 것을 발견**하게 되었습니다. 



해외 커뮤니티에서도 해당 상황에 대한 내용을 다루는 소식이 전혀 없었기 때문에 많은 분들이 트랜잭션 수수를 언제부터 부과하기 시작한 것인지, 해당 내용이 최초의 에브리피디아 백서에 포함되어 있었는지를 파악해보기 시작했습니다. 

제가 파악해본 경위에 대해서 말씀을 드리면 다음과 같습니다.

당초 에브리피디아의 기술 백서 링크로 많은 분들이 알고 계시는 에브리피디아 깃헙 주소(https://github.com/EveripediaNetwork/Everipedia/blob/master/TechnicalWhitepaper110.md)는 더이상 사용이 불가능한 링크 주소입니다. Fortis Fortuna가 기술 백서의 이름을 `TechnicalWhitepaper121.md`에서 `TechnicalWhitepaper.md`로 변경하면서 현재 깃헙에서는 1.21버전(2018년 6월 21일 기준)부터 확인이 가능합니다. 1.21버전의 기술백서는 다음의 링크에서 확인하실 수 있습니다.



- [에브리피디아 기술백서 (버전 1.21)](https://github.com/EveripediaNetwork/Everipedia/blob/f552cd8351b2d9e8e0c08e6f9185579294ba5fa5/TechnicalWhitepaper.md)


혹시나 많은 분들이 기억하실지는 모르겠지만 **에브리피디아의 에어드랍은 2018년 7월 12일에 진행**이 되었었습니다. 사실 많은 분들이 오랫동안 기다려왔던 에브리피디아의 에어드랍이 진행 소식은 너무나 반가운 소식이었고, 많은 분들이 에어드랍 소식을 전달하고 축하하며 에브리피디아 공식 사이트에 접속해서 어떻게 사용할 수 있는지에 대해서 공부를 하느라 정신이 없었습니다. 

그래서 그 당시에 많은 유저들과 토큰 홀더들은 **에브리피디아측에서 에어드랍과 동시에 에브리피디아의 기술 백서(Technical Whitepaper)에 전송 수수료에 대한 내용이 추가하였다는 것을 아무도 눈치채지 못했습니다.** 하지만 그 기록에 대해서는 깃헙에서 찾아볼 수 있었고, 에어드랍이 진행과 동시에 IQ토큰에는 이미 트랜잭션 수수료에 대한 내용이 포함되었습니다.





**- 1차 수정 : [added transfer fees back in](https://github.com/EveripediaNetwork/Everipedia/commit/90e85be8767da36dcbab1af53a14708980a5450e#diff-8f066203712c9d010da16bd360100845) - 2018년 7월 12일**

![transaction fee modified.png](https://cdn.steemitimages.com/DQmem8HKRnZUyYgUBQBvyvuq1BrpRririLTKSToZ4w2pxTR/transaction%20fee%20modified.png)

위의 화면에서 보실 수 있는 것처럼, 2018년 7월 12일에 에어드랍과 동시에 에브리피디아의 백서 내용 중 `Transaction Fees`라는 항목이 추가되었습니다. 기존 백서에서는 존재하지 않던 항목이 통째로 추가되었던 것인데, **"초기 네트워크 전송 수수료는 0.1% 또는 100IQ 토큰 중 작은 금액으로 책정된다는 내용"**이 담겨 있습니다. 



**- 2차 수정 : 수수료율 최대값에 대한 제한을 삭제하고 몇 가지 내용을 수정 및 추가하였습니다. 해당 내용은 다음과 같습니다.**


**(1) [100 IQ tokens 삭제](https://github.com/EveripediaNetwork/Everipedia/commit/0e91c8116839f98bd2ec93a6618577fd11e2820d#diff-8f066203712c9d010da16bd360100845) - 2018년 7월 20일**

![100 iq deleted.png](https://cdn.steemitimages.com/DQmRw9nCbFKvPybP3mgqnZe6A9HoiMBP6tX1UwMvwNYqTUm/100%20iq%20deleted.png)


7월 12일에 트랜잭션 수수료에 대한 내용을 기술백서에 포함한 이후, 8일 만인 7월 20일에는 트랜잭션 수수료에 대한 일부 변경이 있었습니다. 최초에는 **"0.1%와 100IQ 중 더 작은 금액"**을 트랜잭션 수수료로 부과하는 것으로 되어 있었으나, 100IQ라는 내용을 지워버린 것입니다. 

이렇게 수수료율을 변경했다는 것은 **최대 수수료를 제한하지 않겠다는 개발진들의 의도**가 담겨 있는 것입니다. 예를 들어서 7월 12일 백서 내용에 따르면 200,000개의 IQ토큰을 전송하는 사용자는 0.1%인 200IQ 또는 100IQ 중에서 더 작은 금액인 100IQ만 트랜잭션 수수료로 부담하면 되었지만, 7월 20일 백서 내용에 따르면 200IQ를 부담하게 됩니다. 

**(2) [문구 오류 수정](https://github.com/EveripediaNetwork/Everipedia/commit/4ab5aa4c5572b82b359754c10aae7c25f7220ab1#diff-8f066203712c9d010da16bd360100845) - 2018년 7월 20일**



![100 iq deleted2.png](https://cdn.steemitimages.com/DQmXWPBq8BE6zJcbXB2yfjVGEfVf16MTRYTd5wgtA7joTMn/100%20iq%20deleted2.png)

![100 iq deleted3.png](https://cdn.steemitimages.com/DQmUnSx9NSGHPRWUZrdB6NDpzTwu1W1vZJxGx99ekCFfb7F/100%20iq%20deleted3.png)

당초 백서에서 100IQ라는 최대 수수료 제한에 대한 내용을 삭제하였기 때문에 문법상 오류가 발생한 `the lesser of(둘 중 더 작은)`이라는 문구를 삭제하였습니다. 이로써 **IQ토큰의 트랜잭션 수수료는 0.1%로 단일화**되었습니다. 

더불어 전송 수수료를 부과한 이유에 대한 부연설명을 추가합니다. **에브리피디아 개발진들의 입장에서는 IQ토큰의 트랜잭션 수수료를 부과하는데 대한 정당성으로 제시할만한 근거를 찾다가 RAM거래 수수료에서 그 영감을 찾은 것**으로 보입니다. 그들이 말하는 트랜잭션 수수료를 제안하게된 이유는 다음과 같습니다.



> 이오스 메인 네트워크에는 RAM거래 시 1%의 거래 수수료가 있습니다. 이 고유한 비용은 이오스 토큰의 인플레이션을 상쇄하고, 이오스 네트워크의 희소한 자원에 내재된 투기활동에서 수익을 창출하는 효과가 있습니다. 뿐만 아니라 시장 역학을 메인 네트워크로 가져와서 자원의 효율적인 배분을 창출합니다. 우리는 에브리피디아 네트워크의 희소한 자원인 IQ토큰에 대해서도 이와 유사한 수수료를 제안합니다.



**- 3차 수정 : [일부 문구 수정 및 추가](https://github.com/EveripediaNetwork/Everipedia/commit/50960c62df8e3c45d80b0aa588f6ba6120ad3b93#diff-8f066203712c9d010da16bd360100845) - 2018년 8월 18일**

![modified.png](https://cdn.steemitimages.com/DQmNWhCR4CnMjyCJtVXVCjSjkQGABC8HDieGX8tigdBwU4W/modified.png)


이렇게 여러 번에 걸쳐 기술 백서가 변경되었고, 약 14일 전에 변경된 기술백서의 내용을 반영한 코드 변경이 진행되었던 것으로 보입니다. 


![transfer fee code.png](https://cdn.steemitimages.com/DQmTL1Uu2kRCRzEHGoshLQ4NhcJHQFRtvjJh3CiYrDvcx24/transfer%20fee%20code.png)


코드 수정을 통해서 IQ토큰을 다른 계정으로 전송하는 사용자들은 전송하는 IQ토큰 수량의 0.1%를 수수료로 지불하게 됩니다. 만약 상대 계정(IQ토큰을 받는 계정 또는 보내는 계정)이 brainpower를 위한 스테이크 등 에브리피디아의 활동 관련된 everipediaiq, eparticlectr, epgovernance라는 계정 중 하나에 해당하는 경우에는 수수료가 부과되지 않지만, 이 3가지의 계정에 해당하지 않는 경우(토큰 홀더의 개인 계정, 거래소 계정 등)에는 무조건 0.1%의 수수료가 일괄 부과됩니다. 


<center>![telegram.png](https://cdn.steemitimages.com/DQmWET3XvaU7KXx4295FnQ8VVQPr66UiUDiKEsb5AHyBvyU/telegram.png)</center>



**트랜잭션 수수료를 부과한다는 내용이 백서에 추가되고, 코드가 이에 맞춰 수정되었다는 것은 굉장히 중요한 부분**입니다. 그 수수료가 얼마가 되었든 사전에 토큰 홀더들이 인지하고 있지 못했던 사실이 변경된 경우, 해당 프로젝트의 개발진에서는 해당 내용과 언제부터 정책이 변경되는 것인지에 대해서 충분한 사전고지를 하였어야 하는 것이 당연한 의무입니다. 그렇다면 **에브리피디아 측에서는 이에 대해서 충분한 의무를 이행하였을까요?** 이에 대한 내용을 찾아보니 다음과 같습니다.


에브리피디아의 공식 텔레그램(https://t.me/everipedia)에서는 **2018년 8월 17일에 [LATEST UPDATE ON IQNETWORK: August 17, 2018]이라는 제목으로 송금 수수료에 대한 짤막한 공지**를 하였습니다. 해당 텔레그램 방에는 8411명의 사람들이 참여하고 있었으나 Romi Ezzo의 업데이트 소식에 대해 자세히 읽어 봤던 사람은 없었던 것 같습니다.  



에브리피디아 개발진들의 입장에서 그들의 생각을 유추해보자면, 그들은 **자신들과 IQ토큰 홀더들을 위한 좋은 정책이라고 생각하고 공식 홈페이지나 여러 커뮤니티를 통해 충분한 사전 공지 없이 이와 같은 내용을 바로 적용한 것**으로 보입니다. 사실 트위터나 텔레그램, 미디엄 또는 본인들의 공식 홈페이지 팝업 창 등을 통해서 `"언제부터 이렇게 IQ토큰의 트랜잭션 수수료가 부과되니 거래 또는 전송 시에 해당 사실을 유념하라"`는 언급을 여러 번 해주었다면 큰 문제가 되지 않았을 것입니다.


**그러나 에브리피디아 개발진들은 충분한 사전고지 의무를 이행하지 않고 정책의 변경 사항을 바로 적용하는 것을 강행**하였습니다. 결국 해당 내용을 사전에 인지하고 있지 못했던 거래소들은 최근에 발생한 IQ토큰 수수료를 거래소 자체적으로 부담해 왔던 것으로 보이고, IQ토큰을 탈중앙화된거래소에서 트레이딩하던 개인들은 자신들도 전혀 깨닫지 못한 채로 자신들의 토큰의 0.1%에 해당하는 수량을 수수료로 지불하게 되었습니다. 가장 큰 문제가 되었던 점은 탈중앙화거래소에서 실제로 거래가 체결되지 않은 경우에도 수수료를 부담하게 되었다는 것입니다. 왜냐하면 거래가 체결되지 않은 경우에도 거래를 booking하고 취소하는 트랜잭션이 일어나기 때문입니다. 



이와 같은 문제로 인해서 에브리피디아는 Everipedia에서 Everi-fee-dia라는 굉장히 불명예스러운 별명을 가지게 되었습니다. **에브리피디아 개발진들은 그동안 자발적으로 콘텐츠를 업데이트하는 에디터들에게 IQ토큰을 통한 보상을 지급하기 위해서 발생하는 인플레이션을 어떻게 해결할 것인지에 대해서 많은 고민**을 해왔을 것입니다. 그리고 아마도 그에 대한 해답을 RAM마켓의 수수료에서 찾았던 것 같습니다. 최근의 RAM마켓에서 RAM거래에 따른 수수료가 무시하지 못할만큼 엄청나게 쌓이면서 이오스 네이티브 토큰의 인플레이션을 상쇄할 수 있는 충분한 소각효과를 보여줬었기 때문입니다. 그래서 백서에도 해당 내용을 언급하며 자신들이 IQ토큰의 트랜잭션 수수료를 제안한 이유를 설명하고 있다고 보여집니다.

하지만, 에브리피디아 개발진들은 조금은 잘 생각해볼 필요가 있습니다. **에브리피디아는 이오스 네트워크를 사용하기 위한 가장 중요한 3대 자원 중 하나인 RAM과 IQ토큰을 동일시하고 있는데, 이는 조금 잘못된 생각**이 아닌가 싶습니다. 제 개인적으로는 **네트워크 사용에 필요한 필수자원과 이오스의 댑(DApp)은 결코 동일한 역할을 수행하는 것도 아니며 동일한 지위를 가질 수 없다고 생각**합니다. 

더불어, 네트워크 사용료를 사용자들에게 부과하지 않는다는 대원칙을 가지고 있는 이오스 생태계에서 IQ토큰의 트랜잭션 수수료를 부과하는 것이 과연 합당한가에 대해서도 생각해볼 필요가 있어 보입니다. 에브리피디아에서는 토큰의 추가 발행에 따른 인플레이션을 억제할 수 있는 방안에 대한 솔루션을 찾아내야 한다는 숙제를 가지고 있는 것이 분명하지만, 이러한 방식이 과연 커뮤니티에서 받아들여 질 수 있는지 그리고 나아가 에브리피디아의 장기적 관점에서의 성장에 도움이 되는지에 대해서 보다 충분한 토론과 검토가 필요하지 않았나 아쉬움이 남습니다.

이번의 해프닝을 계기로 에브리피디아의 개발진들이 소통을 더 많이하고, 생태계에 기여를 함과 동시에 에브리피디아를 잘 성장시켜 나갈 수 있는 보다 현명한 방법들을 잘 찾아나가기를 기원합니다.





<center>![donekim.gif](https://cdn.steemitimages.com/DQmP5rc6mLfZAU56skFU2MkzywZQ5qWruKpyU2hq5nT7md7/donekim.gif)</center>


<center>![behind banner.gif](https://cdn.steemitimages.com/DQmXBUz3S7u2z13jB39UNUder7HUADC9DvHibUEu7DTu3MR/behind%20banner.gif)

<h6> 출처가 명시된 펌글에는 감사드리지만, 출처를 밝히지 않은 무단펌은 도둑질입니다. 
카페나 블로그 등에 퍼가실 때는 반드시 출처를 명시해주시기 바랍니다.
무단펌은 포스팅을 작성하는 사람의 사기를 떨어뜨리는 기만 행위입니다.</h6></center>







<center><pre> H O P E   F O R   T H E   B E S T , 
P L A N   F O R   T H E   W O R S T</pre>
<sub> https://steemit.com/@dONekim</sub></center>

- - -

This page is synchronized from the post: ['[이오스 이야기] 에브리피디아(Everipedia)의 개발진들은 현명해질 필요가 있다'](https://steemit.com/@donekim/everipedia)
