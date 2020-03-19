
---
title: '[EOS Inside] WAX가 REX시스템을 구현하지 않은 이유'
permlink: eos-inside-wax-rex
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-11-21 07:51:18
categories:
- sct
tags:
- sct
- sct-kr
- sct-freeboard
- liv
- zzan
- palnet
- steemleo
- s
- union
- dblog
- busy
- mini
thumbnail: 'https://cdn.steemitimages.com/DQmP8kyUFN4vAXbPobXeUFBKsrGhhcdwHLBPoXXayhbVUuk/wax.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![wax.png](https://cdn.steemitimages.com/DQmP8kyUFN4vAXbPobXeUFBKsrGhhcdwHLBPoXXayhbVUuk/wax.png)

안녕하세요, 디온(@donekim)입니다. 오늘은 얼마 전 EOSIO 소프트웨어 기반의 코드포크체인으로 새로운 메인넷을 런칭한 **WAX프로젝트에서 자신들의 프로토콜에 REX시스템을 구현하지 않은 이유**에 대해 밝힌 아티클을 소개드릴까 합니다. 

![thumbnail.webp](https://cdn.steemitimages.com/DQmaaawP4eDZ8FRefPk8u1JncYDQhKnh8qAk1qu1wztpFoc/thumbnail.webp)

아마도 WAX에 대해서 자세하게 관심을 가지고 있으셨던 분들이 아니면 잘 모르실수도 있겠지만, WAX는 블록원에서 개발한 EOSIO 블록체인 오픈소스 소프트웨어를 기반으로 새로운 메인넷을 런칭하였고, 따라서 **EOS 메인넷을 포함하여 텔로스, 보스코어, 워블리 등과 같이 넓은 의미에서 EOSIO 멀티버스에 포함되어 있는 체인**이라고 할 수 있습니다. 

## #1. WAX가 REX를 구현하지 않은 이유
---

- 원문 링크 : [Why WAX didn’t implement REX](https://medium.com/wax-io/why-wax-didnt-implement-rex-562455c53e4d)

EOS토큰을 스테이킹 하고 있는 유저가 사용하지 않고 있는 시스템 리소스를 다른 유저에게 임대할 수 있는 이오스 메인넷의 REX시스템과 관련하여 최근에 많은 이야기들이 오고 갔습니다.

기능 변경이라는 것은 체인의 운영에 큰 영향을 미칠 수 있기 때문에 WAX블록체인 개발팀에서는 어떤 기능을 빌드하고 추가하거나 생략할 것인지에 대해서 신중하게 접근해왔습니다. 

**우리 WAX개발팀에서는 REX를 구현하지 않는 쪽을 선택했으며, 결과적으로는 이것이 올바른 선택**이었다고 생각합니다.

우리는 REX시스템을 WAX에 도입하지 않았습니다. 왜냐하면 **REX시스템을 도입하는 경우 많은 사용자들이 리소스를 아주 저렴하게 빌릴 수 있기 때문에, 굳이 WAX토큰을 스테이킹하지 않을 수 있다고 예상**되었기 때문입니다. REX를 구현하면 거래 비용에 약간의 변동성이 추가될 것이 분명했습니다.

REX를 도입하지 않은 결과 오늘날 WAX 블록체인은 REX를 도입한 다른 EOSIO 시스터체인들보다 리소스 측면에서 훨씬 저렴하고 안정적인 시스템이 되었습니다.

## #2. REX란?
---

EOS 네이티브 토큰을 스테이킹하면 시스템 리소스인 CPU 또는 NET이 해당 사용자에게 스테이킹량에 비례하여 할당되어 블록체인에서 트랜잭션을 실행할 수 있게 됩니다.

그런데, EOS토큰을 가지고 있는 대다수의 유저들이 실제로는 디앱을 사용하지 않는 경우가 많기 때문에 실제로 해당 리소스를 그다지 많이 사용하지 않습니다.

REX를 사용하면 특정 사용자가 보유하고 있는 미사용 리소스(CPU와 NET)를 디앱 개발자와 같이 실제로 사용하고자 하는 사람들에게 빌려줄 수 있게 됩니다. 

리소스를 사용하지 않는 사람들은 임대를 통해 수익을 얻을 수 있고, 반대로 리소스를 필요로 하는 사람들은 EOS토큰을 통해 리소스를 직접 구입하는 것보다 훨씬 저렴한 비용으로 자원을 임차할 수 있습니다.

## #3. REX의 문제점은 뭔가요?
---

REX시스템으로 인해 실제로 벌어진 일들을 살펴보면 **저렴한 가격으로 다량의 리소스를 얻을 수 있기 때문에 버그를 활용한 스팸 등 악의적인 트랜잭션이 증가하여 오히려 문제가 발생**하고 있다는 것을 알 수 있습니다.

만약 REX시스템이 없었다면 이런 악의적인 행위를 하는 스패머들이나 어뷰저들은 직접 많은 량의 EOS를 소유하고 있어야 하고, **네트워크에 대한 공격으로 인해 EOS가격이 하락할 경우 공격자가 돈을 잃을 위험**이 높아지기 때문에, 나름의 방어책이 됩니다.

더불어, CPU나 NET을 얻기 위해 EOS토큰을 구매했던 사용자들은 더 이상 실제로 토큰을 소유할 필요가 없어졌기 때문에 EOS의 가격에 부정적인 영향을 미쳤습니다.

예를 들어 최근의 EIDOS 에어드랍은 CPU가격을 급등시켜 EOS토큰의 스테이킹량을 증가시키는 대신 REX에서 CPU 및 NET의 임대량을 증가시켰습니다. 그런 동시에 EOS는 수많은 활성 사용자를을 잃어버렸습니다.

![rex.png](https://cdn.steemitimages.com/DQmNNyffYrKS22L7Fgb3HPKJDn2mtRLtsPgXRv3KiRraSro/rex.png)

## #4. 이것들이 시사하는 바는 무엇인가?
---

WAX커뮤니티에서 REX의 도입 문제에 관해 많은 질문들이 있으므로 이에 대한 개발팀의 의견을 대답해드리고자 합니다. 

WAX는 REX를 도입하지 않았기 때문에 REX를 도입한 다른 EOSIO 시스터체인들보다 리소스의 관점에서 더 안정적으로 저렴한 시스템이라 할 수 있습니다.

EOSIO가 새로운 기능을 계속 출시할 때마다 우리 팀에서는 WAX개발자, 토큰홀더, 고객, 길드 및 기타 생태계 참여자들에게 **과연 새로운 기능의 도입이 도움이 될 것인지의 여부를 신중하게 결정하기 위해 시스템 구현 시의 장단점을 엄격하게 평가**할 것입니다.

![wax developer.png](https://cdn.steemitimages.com/DQmZxQQkFHVsoGF32KvNCPNLxSBiykscc9aBnerJ8PhAKYq/wax%20developer.png)

그동안 EOS를 사용해왔던 개발자라면 몇 시간 만에 디앱을 WAX블록체인에 마이그레이션 할 수 있습니다. 혹시라도 궁금한 내용이 있으신 분들은 [WAX Developer Hive](https://developer.wax.io/)를 방문하세요.

## #5. 개인적인 생각
---

WAX개발팀에서 REX시스템을 구현하지 않은 것이 리소스의 저렴한 임대 시장이 토큰의 수요를 떨어뜨릴 수 있다는 우려 때문인지, 그들이 밝혔던 것처럼 독점이나 공격성 스팸에 대한 우려 때문인지, 아니면 소 뒷걸음치다 쥐 잡는 꼴인지는 정확히 모르겠습니다.

그러나, EOSIO 소프트웨어에서 제공하는 기능들을 모든 시스터체인이나 사이드체인들에서 동일하게 제공할 필요가 없으며 해당 체인을 개발하고 운영하는 재단, 개발팀, BP들, 커뮤니티에서 **정책적으로 잘 판단하여 취사선택 후 적용할 필요**도 분명히 있습니다.

각자의 독자체인`(시스터체인들이 EOSIO라는 거대한 멀티버스 안에는 함께하지만 사실상 각자가 다른 길을 걷게 되는 운명을 가진 독자체인들입니다)`들이 **각기 다른 거버넌스 모델의 테스트, 기능의 구현 및 생략 테스트 등 다양한 관점을 반영한 정책을 운영함으로써 서로에게 더 좋은 방향으로서의 벤치마킹 모델**이 되어줄 수 있습니다. 

 REX시스템이 있는 것이 맞을까요, 아니면 없는 것이 맞을까요? 정말 어려운 난제인 듯 싶습니다.

- - -

This page is synchronized from the post: ['[EOS Inside] WAX가 REX시스템을 구현하지 않은 이유'](https://steemit.com/@donekim/eos-inside-wax-rex)
