
---
title: '[EOS Inside] 블록원의 EOSIO 리소스 할당 제안(Resource Allocation Proposal)'
permlink: eos-inside-eosio-resource-allocation-proposal
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-12-21 04:37:06
categories:
- sct
tags:
- sct
- sct-kr
- sct-coin
- liv
- zzan
- palnet
- steemleo
- s
- union
- dblog
- busy
- mini
thumbnail: 'https://cdn.steemitimages.com/DQmagC6zdoqvY9JpaQprLWP1uwoZRv9pK6WQNbgB5G97ZVZ/thumbnail.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![thumbnail.jpg](https://cdn.steemitimages.com/DQmagC6zdoqvY9JpaQprLWP1uwoZRv9pK6WQNbgB5G97ZVZ/thumbnail.jpg)

안녕하세요, 디온입니다. 블록원에서 얼마 전 댄 라리머가 작성한 새로운 제안을 조금 더 가다듬어 **EOSIO Resource Allocation Proposal**이라는 제목으로 새로운 제안서를 올렸습니다. 

이번 새로운 제안서의 내용은 일반 사용자들도 이해하기 쉽게 그리고 간결하게 잘 써져 있어서 평소에 너무 어렵고 복잡하게 느끼셨던 분들도 한 번 읽어보시면 좋을 것 같아 소개를 드립니다.

 

- 원문 링크 : [EOSIO Resource Allocation Proposal](https://eos.io/news/eosio-resource-allocation-proposal/)

최근에 사용자에게 리소스(CPU/NET)를 할당하는 REX의 처리 능력과 대역폭에 대한 수요가 급증하여 시스템 내의 모든 유동성이 소진됨으로써 EOS 퍼블릭 블록체인(EOS 메인넷)에서의 사용이 불가능해졌습니다. 서비스가 중단된 이후 블록체인 리소스에 접근하고자 했던 사용자는 서비스가 거부되는 상황이 발생했습니다.

REX의 EOS 퍼블릭 블록체인에 대한 리소스 공급은 리소스 할당 모델이 직면하고 있는 문제를 보여줍니다. 바로 **수요가 많음에도 불구하고 대부분의 리소스가 사용되지 않고 있었다는 것**입니다. REX는 네트워크 리소스(CPU/NET)의 약 30%를 관리하고 있었음에도 불구하고 새로운 임차인에게 할당할 리소스가 부족했습니다.

반면 네트워크 리소스의 나머지 70% 중 일부만이 실제로 활용되고 있었으며, 이는 블록체인 전체 용량의 절반 미만이 사용되고 있다는 사실이 바로 그 증거입니다.

따라서, 우리는 현재 REX시스템이 운영되는 방식에 잠재적인 변화를 가져올 수 있는 **새로운 리소스 렌탈 마켓을 제안**하고자 합니다. 

- 새로운 리소스 렌탈 마켓 관련 깃헙링크 : https://github.com/EOSIO/eosio.contracts/pull/397

새롭게 제안하는 시스템에서는 **사용자가 스마트 컨트랙트를 통해 리소스 임대료를 지불하면 전체 공급량에서 30일 분량의 리소스(CPU/NET)가 부여**됩니다. 30일 이후에는 임대를 갱신해야 하며 CPU/NET 리소스의 수요와 공급 변화에 따라 시장 기반 메커니즘을 사용하여 가격이 자동으로 조정됩니다.

물론 토큰 홀더들은 이 새로운 리소스 모델에서도 토큰을 스테이킹 할 수 있습니다. 다만 스테이킹하고 있는 EOS토큰의 비율에 비례한 CPU/NET 리소스를 얻는 대신에 **REX에 스테이킹하고 있는 사용자들은 네임 옥션, RAM거래 수수료, 리소스(CPU/NET)임대료 등의 수수료 수익**을 얻게 됩니다.

리소스 자격 모델에서 임대 모델로의 전환을 제안하는 목적은 **리소스 가격에 대한 투기 시장의 영향을 제거하는 것**입니다. 전체 자원 활용을 기반으로 가격을 책정하는 임대 마켓을 도입하면 리소스를 보다 예측가능하고 안정적으로 만들 수 있습니다. 

![content-1-1024x400.jpg](https://cdn.steemitimages.com/DQmY92AEmju18zDSJfHB4o7LQQCW2WfGUhLE9uGVSKPRKze/content-1-1024x400.jpg)

CPU/NET 가격은 전체 CPU/NET 공급량을 기준으로 합니다. 사용 가능한 CPU/NET이 적을수록 리소스 임대 비용이 높아지고, 사용 가능한 CPU/NET이 많을수록 가격이 낮아집니다. 실시간 CPU/NET 사용률은 위의 그림에서 *Instant Utilization*으로 표시됩니다.

그러나 리소스의 가격은 조정된 사용률(Adjusted Utilization)을 기반으로 합니다. 리소스 사용률이 급상승하는 동안 조정된 사용률은 즉시 사용률(Instant Utilization)과 동일한 증가율을 따르게 되며 CPU/NET 공급이 소진되지 않도록 실시간으로 가격이 상승하게 됩니다.

조정된 사용률(Adjusted Utilization)에 따른 요금은 즉시 하락하는 것이 아니라 시간이 지남에 따라 천천히 하락하게 되어, 대량의 리소스를 빌리는 임차인이 악의적인 목적으로 활용하는 임차의 이점을 활용하지 못하게 합니다.

![265_08c_MKT_EOSIO-Web_News-Images_Others_EOSIO_Resource-Allocation-Proposal_Graph_2_V2_LL_20191220-1024x402.jpg](https://cdn.steemitimages.com/DQmPVUneKeMJet1CMY93XsAYUHUHNuswSw99o6PAK334qem/265_08c_MKT_EOSIO-Web_News-Images_Others_EOSIO_Resource-Allocation-Proposal_Graph_2_V2_LL_20191220-1024x402.jpg)

위의 그림은 **네트워크 이용률이 높아짐에 따라 가격이 어떻게 증가하는지를 확인할 수 있는 그래프**입니다. (곡선의 기울기가 가격의 변화입니다)

위의 그래프를 보면 네트워크 사용률이 증가함에 따라 가격이 어떻게 증가하는지를 살펴볼 수 있습니다. 사용 가능한 리소스가 풍부할 때에는 CPU/NET의 가격이 낮게 책정되지만, **사용률이 최대에 도달함에 따라 가격도 가파르게 상승**하는 것을 확인할 수 있습니다. 

그리고 가격은 다음과 같이 **임대 전 네트워크의 리소스 사용률과, 임대량의 크기를 반영한 새로운 리소스 사용률의 차이로 결정**됩니다. 예를 들어 전체 공급량의 5%에 해당하는 리소스를 30일 동안 임대하고자 하는 사용자는 다음과 같은 공식에 의해 계산된 가격을 지불하게 됩니다.

MAX(P(InstantUtilization+5%),P(AdjustedUtilization+5%))) – MAX(P(InstantUtilization),P(AdjustedUtilization)))

이 수식은 임대 주문 결과로 변경되는 이용률과 현재 이용률 간의 차이를 통해 가격을 계산하는 방식입니다. 예를 들어 위의 그림에서 현재 이용률이 Point1 지점이고, 새로운 주문을 통해 변경되는 이용률이 Point2 지점이 되어, **두 지점간의 차이가 렌탈을 받기 위해 지불해야 하는 비용이 되는 것**입니다. 

현재의 REX시스템에서 새롭게 제안하는 모델로의 전환을 촉진하기 위해 현재 모델에서 할당된 CPU/NET의 백분율이 점차적으로 변경됩니다. 토큰의 전체 공급을 늘리지 않고 각 계정에 할당해야 하는 CPU/NET의 비율을 결정하는 파라미터를 조정하는 방식으로 진행이 됩니다.

새로운 제안은 **블록체인 네트워크 리소스의 수요와 공급을 보다 정확하게 반영하는 방식을 통해서 CPU/NET 마켓을 궁극적으로는 안정화시키는 것을 목표**로 합니다. 

EOSIO 애플리케이션 개발자와 사용자 모두 원활하게 서비스를 운영하고 사용하기 위해서는 **예측가능한 가격으로 리소스에 접근할 수 있는 일관된 수단이 필요**합니다. 증가하는 네트워크 요구사항을 충족시키기에 충분한 CPU/NET을 확보함으로써 시스템 낭비를 줄이고 확장성을 향상시키기 위해 이러한 변경사항을 REX시스템에 제안합니다.

- - -

This page is synchronized from the post: ['[EOS Inside] 블록원의 EOSIO 리소스 할당 제안(Resource Allocation Proposal)'](https://steemit.com/@donekim/eos-inside-eosio-resource-allocation-proposal)
