
---
title: '[STEEM] 거래소에서는 STEEM 출금 요구에 어떻게 대응하려고 그런걸까?'
permlink: steem-steem
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-03-03 05:08:51
categories:
- hive-101145
tags:
- hive-101145
- sct-kr
- sct-freeboard
- sct
thumbnail: 'https://cdn.steemitimages.com/DQmbiAsRULTqsgg44VUPFVtyTMpuUn8HxbvxozrSxepyMeb/exchange.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![exchange.png](https://cdn.steemitimages.com/DQmbiAsRULTqsgg44VUPFVtyTMpuUn8HxbvxozrSxepyMeb/exchange.png)

이번에 파워업 및 프록시 보팅을 시도했던 거래소의 핫 월렛들의 수량은 결코 작은 수량이 아닙니다. 이 수량들에 대해서 각 거래소별로 트론 재단이 보유한 수량이 아니냐는 추측도 있었지만, 현재 시장 가격 기준으로만 하더라도 250억 정도 하는 수량을 저스틴썬이나 트론 재단이 단기간에 매입하는 것은 사실상 불가능한 시나리오입니다. (사전에 거래소에서 천천히 물량을 확보해왔을 일은 더더욱 없구요)

그래서 **HF22.5를 위해서 동원된 1억 600백만 개의 스팀파워는 사실상 고객들의 자산**임에는 틀림이 없습니다. 

이번 사태에서 가장 큰 문제는 **해당 거래소 계정에 들어 있는 STEEM들의 실제 주인들의 아무런 동의절차 없이 스팀파워로 파워업이 되었다는 것, 그리고 그 물량이 투표에 사용되었다는 것**입니다. 그리고 부차적인 문제는 어찌되었건 유동성 STEEM에 13주 락이 걸려서 인출이 불가능하다는 것입니다.

저스틴썬이 가지고 있는 폴로닉스를 그렇다 치고, 나머지 거래소들(바이낸스, 후오비) 등은 과연 대량의 STEEM인출 요구가 있는 경우 어떻게 대처할려고 그랬던 것일까요?

**(1) 어느 정도의 지급준비율에 대한 자료가 있었을 것**

거래소들도 바보가 아니기 때문에 아무런 계산 없이 스팀파워업을 진행하지는 않았을 겁니다. 지난 몇 년 동안 외부 인출 요구가 있었던 STEEM의 평균적인 수량에 대한 통계자료가 축적이 되었을 것이고, 은행처럼 나름의 지급준비율에 대한 내부 가이드가 있었겠죠.

그래서 긴급하게 외부(실제 사용자들의 스팀 계정)로 출금 요구 사태가 벌어질 때 대응이 가능한 수준 안에서 해결이 가능하다고, 즉 큰 문제가 없다고 판단했을 수 있습니다. 


**(2) HF22.5로 동결된 계정이 해제**

![tx1.png](https://cdn.steemitimages.com/DQmdsiEWi1fbELT7zY8bSzBRbYPVDSnXMX4WjUuKd5UGga3/tx1.png)
- https://steemd.com/tx/dc88f74e7ce1ec5dabb5904ed50025c0e6411218

![tx2.png](https://cdn.steemitimages.com/DQmdtQvnqydoAu2qszAtaoUtFHrAYeUJEUkX9jYLD4HnvPG/tx2.png)
- https://steemd.com/tx/d52fe608e3e7a3d5ab469b15ebd716dfdd8e530c

![tx3.png](https://cdn.steemitimages.com/DQmXKa9WN5CdnUk7VNA4KJFbESb7scXkTFLBUa5jufa12NF/tx3.png)
- https://steemd.com/tx/7fb2ad22b2d97c23147c2d69481bd2d6215a704a

HF22.5로 인해 소프트포크 22.2에서 동결을 해놓았던 @misterdelegation이나 @steemit 계정이 락이 풀렸습니다. 그리고 이 동결이 풀리자마자, 지금 20위 바깥으로 밀린 증인들이 다시 원래 위치로 회복이 되더라도 동결 조치를 쉽게 할 수 없도록 **해당 계정에서 보유 중이었던 유동 STEEM들이 거래서 월렛으로 전송**되었습니다.


![tx4.png](https://cdn.steemitimages.com/DQmc3zECSVt4hcsG6QxvhTdYcQaLYWBxZhomVCpoMqRJYpZ/tx4.png)

이로 인해, 스팀파워업을 해버린 바이낸스나 후오비에서 누군가가 200백만 개 이상을 스팀 계정으로 출금신청하지 않는 이상에는 사실상 거래소의 단기 유동성과 입출금 문제는 해결이 되어 버렸습니다.


**(3) 파워다운 기간 단축 하드포크**

![tx5.png](https://cdn.steemitimages.com/DQmQ4Gmms3V3fHHjg9GTHwQdqExqk627AhCe4yWzUnyeLfX/tx5.png)

혹시라도 모를 추가적인 이슈에 대비해서 곧바로 **스팀 파워다운 기간이 1~3일 정도로 단축되는 하드포크가 단행**될지도 모르겠습니다. 

만약 이 하드포크까지 번갯불에 콩 구워먹듯이 바로 진행이 되어버린다면, 거래소의 입출금에는 아무런 지장이 없어지게 됩니다.

이정도까지 머리를 썼다는 건 저스틴썬이 네드랑 정말 많은 이야기를 하고 작전을 짰을 거라는 생각밖에는 안드네요. 게다가 방금 전 저스틴썬은 자신의 트위터를 통해서 **우리 변호사랑 이야기를 해봤는데, 얼마 전에 아주 불량한 해커들이 내 돈에 손을 댔다**며 소프트포크를 단행했던 증인들을 "해커"라고 지칭하고 있네요.

- - -

This page is synchronized from the post: ['[STEEM] 거래소에서는 STEEM 출금 요구에 어떻게 대응하려고 그런걸까?'](https://steemit.com/@donekim/steem-steem)
