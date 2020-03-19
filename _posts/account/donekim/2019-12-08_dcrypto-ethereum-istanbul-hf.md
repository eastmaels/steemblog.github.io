
---
title: '[dCRYPTO] 이더리움 이스탄불 하드포크(Ethereum Istanbul HF) 내용 정리'
permlink: dcrypto-ethereum-istanbul-hf
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-12-08 17:54:00
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
thumbnail: 'https://files.steempeak.com/file/steempeak/donekim/HSHHpTdk-istanbul.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![istanbul.jpg](https://files.steempeak.com/file/steempeak/donekim/HSHHpTdk-istanbul.jpg)

안녕하세요, 디온(@donekim)입니다. 우리나라 시간 기준으로 어제(12월 8일) **이더리움의 8번째 네트워크 업그레이드인 이스탄불 하드포크가 성공적으로 완료**되었습니다. 그동안 몇 차례의 일정 연기가 있었으나 이번에는 블록 넘버 #9069000에서 시스템 전체 업그레이드가 당초 일정에 맞춰 진행이 되었네요.

- Etherscan : https://etherscan.io/block/9069000

확실히 암호화폐 시장의 분위기가 침체되어 있어서 그런지, 아니면 이번 하드포크가 새로운 분기가 생긴다거나 새로운 코인을 받는 것이 아니라 그런지 이번의 이스탄불 하드포크는 유저들 사이에서 크게 회자가 되지는 않은 것 같습니다.

더불어, **이더리움의 하드포크는 크게 2단계로 나누어 진행**됩니다. 이스탄불 하드포크 전에 커뮤니티에서 토론되고 논의되었던 이더리움 개선 제안(EIP; Ethereum Improvement Proposals)을 반영하여 진행이 되며, 일반적으로 알려진 **중요한 사항들은 사실 2단계 하드포크 시에 반영이 될 예정**입니다.

> EIP란 핵심 프로토콜 사양, 클라이언트 API 및 컨트랙트 표준을 포함한 새로운 기능에 대한 정보를 제공하는 제안서입니다.

## #1. 1단계 하드포크
---
이번에 완료된 1단계 하드포크에서는 코드 수정과 관련된 다음 6개의 EIP를 포함한 업그레이드가 진행되었습니다. `(총 11개의 EIP가 제안되었고 이 중 6개가 선정되었습니다)`

- EIP-152 : 컨트랙트에 Equihash PoW를 추가하고 지캐시(Zcash)와 릴레이와 아토믹스왑을 수행할 수 있도록 합니다. 이더리움과 지캐시, 그리고 기타 Equihash 기반 PoW 코인 간의 상호운용성이 좋아진다고 생각하시면 됩니다.

- EIP-1108 : 비싼 zk-SNARK 가격을 낮추고 가스 비용을 줄이며 보다 저렴한 스케일링 및 개인정보보호 애플리케이션 구축을 가능하게 합니다.

- EIP-1344 : 현재 특정 네트워크에 ChainID를 설정하는 방법에 대한 올바른 사양이 없어서 클라이언트 구현자와 체인 커뮤니티에서 수동으로 선택한 사항에 의존하고 있습니다. 올바른 체인 상태와 플라즈마를 추적할 수 있는 컨트랙트를 위한 ChinID opcode를 추가합니다. 이는 다른 체인과의 리플레이 공격을 방지하는 역할도 수행합니다. 

- EIP-1884 : 특정 작업에 필요한 계산과 일치하도록 EVM opcode의 가격을 조정합니다. 또한 스팸 공격을 방지하고 블록 밸런스를 조정합니다.

- EIP-2028 : 트랜잭션에서 데이터 호출에 필요한 가스 가격을 낮추어 zk-SNARK 및 zk-STARKS를 더 저렴하게 만듭니다.레이어 2 솔루션 처리량 증가로 이더리움 확정성 증대가 가능해질 것으로 기대됩니다.

- EIP-2200 : EVM의 스토리지 비용 계산 구조를 재구성합니다. 가스 비용을 줄이고 re-entry locks와 동일계약 다중 송출과 같은 새로운 기능들을 추가합니다.


## #2. 2단계 하드포크
---
이스탄불 하드포크의 두 번째 단계는 2020년 1분기에 진행될 것으로 예상됩니다. PoS 컨센서스로의 변경을 포함하여 지금까지 8개의 EIP가 승인되었습니다. 2번째 하드포크에서는 **POS 컨센서스로의 변경, 스케일링과 TPS의 문제 해결이 핵심 내용**이 될 것으로 보입니다.

## #3. 다가오는 이더리움 2.0
---
![2.0.jpeg](https://files.steempeak.com/file/steempeak/donekim/M20qBqX5-2.0.jpeg)

2018년과 2019년에는 이더리움에서 큰 뉴스들이 많지 않았던 해입니다. 일각에서는 그만큼 안정화되었다고 주장하기도 하고, 다른 일각에서는 실질적으로 플랫폼으로서 사용되지 않고 사실상 방치된 상태에 가까웠기 때문에 뉴스가 될만한 소재가 없었다고 말하기도 합니다.

그러나 **2020년에는 이더리움 2.0 이라는 큰 변화**를 앞두고 있어서, 크립토씬에서 이더리움과 관련된 다양한 뉴스들이 계속해서 나오지 않을까 싶습니다.

개인적으로도 **이더리움 1.x와 이더리움 2.0 간의 공존 기간이 얼마나 될지, 양방향 브릿지가 보안 리스크 없이 성공적으로 만들어질 수 있을지 등**에 대해서 기대와 동시에 우려가 되는 점들이 꽤 있습니다. PoW에서 PoS로의 전환이라는 것은 정말 일반 유저들이 상상하는 것을 초월하는 정말 큰 변화이기 때문입니다. 

![flow.png](https://cdn.steemitimages.com/DQma5VWUZJRsFhafruN6SJQ8SsczmbvysvK6Ew4McUkqNPy/flow.png)

크립토키티를 개발했던 Dapper Labs에서는 샤딩이 결제 플랫폼에는 좋은 시스템이지만, 게임이나 SNS와 같은 복잡한 생태계를 가진 애플리케이션에는 적합하지 않다는 의견을 제시하며, 별도의 블록체인 플랫폼인 플로우(Flow)를 구축하겠다는 발표를 했었죠.

과연 기존 이더리움 블록체인 기반의 디앱 프로젝트들은 이더리움 2.0을 앞두고 어떤 결정들을 내릴 것인지 이를 잘 지켜볼 필요가 있을 것 같습니다.

- - -

This page is synchronized from the post: ['[dCRYPTO] 이더리움 이스탄불 하드포크(Ethereum Istanbul HF) 내용 정리'](https://steemit.com/@donekim/dcrypto-ethereum-istanbul-hf)
