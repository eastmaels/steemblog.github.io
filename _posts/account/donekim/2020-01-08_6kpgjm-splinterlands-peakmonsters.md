
---
title: '[SPLINTERLANDS] PEAKMONSTERS 최신 업데이트 소식 (로열티 보상레벨 정책 변경 등 / 능력이름 검색 등)'
permlink: 6kpgjm-splinterlands-peakmonsters
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-01-08 23:46:09
categories:
- peakmonsters
tags:
- peakmonsters
- steemmonsters
- sct
- sct-kr
- sct-game
- spt
- zzan
- s
- union
- dblog
- busy
thumbnail: 'https://files.steempeak.com/file/steempeak/donekim/mHIv5HDV-thumbnail.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![thumbnail.png](https://files.steempeak.com/file/steempeak/donekim/mHIv5HDV-thumbnail.png)

안녕하세요 디온입니다. 확실히 스팀픽(피크몬)팀의 업데이트 작업 속도와 작업량은 어마무시한 것 같습니다. 지난 달에 사상 최대규모의 피크몬 업데이트 이후 **이번에도 추가적인 기능들의 업데이트가 진행**되었는데, **피크몬 로열티 보상 레벨 변경 등** 주목할만한 내용들이 있어서 이를 소개드립니다.

- 원문 링크 : [UPGRADES: Tier changes, Filters, Cooldown info, Pack values](https://steempeak.com/peakmonsters/@peakmonsters/7-upates)

> 최근에 피크몬의 업데이트 사항들이 굉장히 많습니다. 이전 대규모 업데이트 내용이 궁금하신 분들은 아래의 포스팅 링크를 참고해주시기 바랍니다.

- [[SPLINTERLANDS] PEAKMONSTERS 사상 최대규모의 업데이트 내역 소개 - 1편](https://www.steemcoinpan.com/steemmonsters/@donekim/splinterlands-peakmonsters-1)
- [[SPLINTERLANDS] PEAKMONSTERS 사상 최대규모의 업데이트 내역 소개 - 2편](https://www.steemcoinpan.com/steemmonsters/@donekim/splinterlands-peakmonsters-2)



## #1. 로열티 보상 레벨(Tier) 정책 변경
---

<center>![1.grade.png](https://files.steempeak.com/file/steempeak/donekim/smVh3Cet-1.grade.png)</center>

기존에 피크몬을 이용하는 유저들을 대상으로 운영해오던 로열티 보상레벨 정책이 변경되었습니다. 현재 피크몬에서 [내정보] 페이지를 클릭하시면 계정 레벨이 변경되어 있는 것을 확인하실 수 있습니다.

- 티어 유지를 위한 거래량 기간을 90일에서 1년으로 조정
- 해당 티어에 대한 세부설명 추가 보완
- 현재 티어 등급을 숫자로도 표시
- 티어 등급 상승을 위한 자격조건 변경

<center>![2.detail.png](https://files.steempeak.com/file/steempeak/donekim/94ysitCM-2.detail.png)</center>

계정 레벨 옆에 보이는 아이콘 위에 마우스 커서를 올리면 보다 자세한 정보를 확인할 수 있습니다.

- 카드 입찰(bid)에 참여가능한 금액 한도를 확인할 수 있습니다
- 현재 레벨에서의 리워드 보상 비율을 확인할 수 있습니다
- 다음 레벨로 올라가기 위한 총 구매액을 확인할 수 있습니다


티어|티어명|구매액(1년)|리워드|
-|-|-|-|
1  |Sleeping Giant  |  $0   | 10%
2  |  Happy Shaman  |  $20   |    15%
3  |  Rexxie Rancher|    $100  |      18%
4  |  Elemental Maverick  |  $300|       21%
5  |  Twisted SteemBringer  |  $750 |      24%
6  |  Defender of Monsters   | $1,500 |    27%
7 |   Screaming Tycoon   | $3,000 |     31%
8  |  Mischevous Market Maker |   $6,000    |  35%
9 |   Angel of Steem |   $9,000 |     41%
10|   PeakMaster | $15,000 | 50%

새롭게 변경된 로열티 보상 레벨의 기준은 위의 표와 같습니다. 

**[참고사항] 로열티 보상 레벨관련 주의사항**
- 현재 피크몬에서의 로열티 보상 레벨 산정을 위한 구매액에는 **스팀(STEEM) 또는 스팀달러(SBD)만 포함**이 됩니다. 
- 얼마 전부터 스플린터랜드 계정 내에 보유하고 있는 DEC를 통한 거래도 지원하기 시작했으나, 아직 DEC구매액은 집계에 포함되지 않습니다.
- 그 이유는 DEC토큰을 사용한 구매는 실제 스팀 계정이 아닌 스플린터랜드 계정 정보를 사용하기 때문에 트래킹하는 작업을 추가하기가 어렵고 Splinterlands API에 전적으로 의존할 수밖에 없기 때문입니다.
- **향후에 DEC 구매액도 집계에 포함할 예정**입니다.

## #2. 개봉한 카드팩 가치 조회
---

![open.png](https://files.steempeak.com/file/steempeak/donekim/KgqK3l5z-open.png)

피크몬의 익스플로러에서 **개봉한 카드팩의 가치 조회가 가능**해졌습니다. 카드팩 오픈 후에 익스플로러에서 `상세보기(See detail)`를 클릭하면 개봉한 팩의 가치가 어느정도 되는지 바로 확인하실 수 있습니다.

- List value : Splinterlands API에 의해 리포팅된 가장 저렴한 bcx당 가격 기준
- Market value : 가장 최근에 체결된 구매 가격 기준

## #3. 리워드 카드 가치 조회
---
![reward value.png](https://files.steempeak.com/file/steempeak/donekim/D3xzXsl1-reward20value.png)

개봉한 카드팩 가치 조회 기능과 마찬가지로 **일일퀘스트를 완료하고 받게 되는 리워드 카드들의 가치 조회도 가능**합니다.


## #4. 새로운 카드셋 등록 알림 기능
---

![notice.png](https://files.steempeak.com/file/steempeak/donekim/Jgvs0srH-notice.png)

스플린터랜드를 이제 막 입문한 경우라면 정말 많은 종류, 많은 량의 카드가 필요한데 그때 이용하기 좋은 것이 바로 이 **세트 마켓**입니다. 일반적으로 세트로 올라오는 카드들이 마켓에서 카드들을 낱개로 구매하는 것에 비해 훨씬 가성비가 좋지만 매번 확인해보는 것도 여간 번거로운 일이 아닐 수 없습니다.

가끔씩 좋은 딜로 올라오는 세트 카드를 편하게 확인할 수 있도록, 카드세트 판매 주문이 올라오는 경우에는 **메인 페이지에서 붉은색 알림**을 제공합니다.

## #5. 쿨다운 아이콘의 추가정보
---

![green.png](https://files.steempeak.com/file/steempeak/donekim/PBTTJHXb-green.png)

쿨다운 아이콘에 대한 추가정보 업데이트에 대해서는 [[SPLINTERLANDS] 변경된 카드 쿨다운(Card Cooldown) 정책을 알고 계신가요?](https://www.steemcoinpan.com/steemmonsters/@donekim/splinterlands-card-cooltime)라는 포스팅을 통해 상세하게 소개를 드렸습니다. 해당 포스팅을 참고해주시기 바랍니다.

## #6. 고유 능력별 검색 기능
---

![ability.png](https://files.steempeak.com/file/steempeak/donekim/slmOURVD-ability.png)

언테임드 에디션 출시 이후에 **가장 필요한 기능 중 하나였던 고유 능력(ability)별 검색 기능이 추가**되었습니다. 이제는 `Redemption`, `Weaken` 등 해당 능력을 가진 카드들만 검색하는 것이 가능합니다.

## #7. 공격 스타일 필터 기능
---
![filter.png](https://files.steempeak.com/file/steempeak/donekim/OfZRBhFD-filter.png)

고유 능력(ability)으로 검색 후에 **근거리 공격(melee), 원거리 공격(ranged), 마법 공격(magic)별로 추가로 필터링이 가능**합니다. Blast, Stun 등 여러 공격스타일이 혼합되어 있는 능력 이름으로 검색을 하는 경우에는 이 추가기능을 활용해서 더 빠르게 원하는 카드를 검색할 수 있습니다.

- - -

This page is synchronized from the post: ['[SPLINTERLANDS] PEAKMONSTERS 최신 업데이트 소식 (로열티 보상레벨 정책 변경 등 / 능력이름 검색 등)'](https://steemit.com/@donekim/6kpgjm-splinterlands-peakmonsters)
