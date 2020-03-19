
---
title: '[EOS Inside] 투표자 자동보상 시스템(Voter Rewards Exchange) 런칭 소식'
permlink: eos-inside-voter-rewards-exchange
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-02-04 10:57:24
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
- union
- dblog
- upfundme
thumbnail: 'https://cdn.steemitimages.com/DQmZEMNX7LhmoU85FvWp1zX1xMQdTLGfJkSZNyXMQcZ4Gjg/genpool.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![genpool.png](https://cdn.steemitimages.com/DQmZEMNX7LhmoU85FvWp1zX1xMQdTLGfJkSZNyXMQcZ4Gjg/genpool.png)

안녕하세요 디온입니다. EOS메인넷 출범 초기에 EOSToolkit 서비스를 런칭하며 많은 유저들이 자신의 계정을 관리하고 EOS메인넷과 디앱들을 실제로 사용하는데 정말 많은 도움이 되어주었던 GenerEOS에서 또 한 번 큰일을 해냈습니다. 

거버넌스에 적극적으로 참여하는 멤버라면 누구나 자유롭게 **자신이 운영하고 있는 프록시 계정에 투표권을 위임하는 경우 이에 대한 투표 보상(Vote Rewards)을 지급할 수 있도록 자동 세팅이 가능한 EOS Voter Rewards Exchange, 젠풀(Genpool)을 출시**한 것입니다.

- EOS Voter Rewards Exchange 링크 : https://genpool.io/

지금까지 투표권을 프록시 계정에 위임한 사용자들에게 보상을 지급하는 방식의 리워드 프록시(reward proxy)를 운영하기 위해서는 기술적 노하우, 개발을 위한 시간, 별도의 백엔드 인프라 구축 작업 등이 필요했습니다. 

![colin.png](https://cdn.steemitimages.com/DQmNZJ6nDydfYzia2nDZqcoxWz1kYayVbdkRhzVW4BifD5u/colin.png)

위임받은 EOS의 수량이 거의 1,000만 개에 달하는 가장 대표적인 프록시인 콜린톡크립토(Colin Talk Crypto)의 경우, GenerEOS와의 협업을 통해 자신이 운영하고 있는 1위 프록시 계정 이외에도 BP들이 받는 보상의 80%를 프록시 계정 위임자들에게 배분하는 CTC Rewards Proxy를 만들기도 했는데, 이 또한 서구 커뮤니티에서의 반응이 꽤나 뜨거웠죠.

그러나 국내에서는 이를 스마트 컨트랙트와 백엔드 개발을 통해 자동화시킬만한 여력이 되는 커뮤니티 멤버는 사실상 전무한 상황이었고, 빅홀더들과 꽤나 큰 규모의 커뮤니티를 가지고 있음에도 불구하고 국내 커뮤니티 토큰 홀더들의 대부분은 **투표 보상을 받기 위해서 해외 프록시 또는 거래소에 위탁을 맡기는 옵션**말고는 딱히 해법이 없었습니다. 

이러한 분위기 속에서 제가 운영하던 프록시 또한 그동안의 노력과 활동을 믿고 투표권을 위임해주신 분들께 딱히 보상을 드릴 수 있는 방법이 없었기에 프록시 운영을 포기할 수 밖에 없었는데, 이제는 **완전 경쟁적이고 투명한 방식의 보팅 DeFi 시스템**을 누구든지 이용할 수 있을 것으로 보입니다.

![bp.png](https://cdn.steemitimages.com/DQmdzW9M4TBqzvqknu4CEPCqL8ddQ37ofvmbnzhvz4nMCuC/bp.png)

각각의 프록시가 투표권을 위임해준 토큰 홀더들에게 지급하는 리워드의 재원은 Genpool 대시보드에 등록되어 있는 **BP들이 자발적으로 기여한 펀드를 기반**으로 하며, 프록시 운영자는 간단한 세팅만으로 수수료를 제외한 나머지 Vote Rewards가 위임자들에게 자동으로 배분되도록 할 수 있습니다.

물론, 프록시 운영자는 BP의 여러 기여 활동에 대해서도 상세히 확인해야겠지만, 커뮤니티로부터 보팅을 받기 위해 얼마만큼의 Fund를 자발적으로 구성하는지에 대해서도 확인하게 됨으로써 **그동안 마치 암시장처럼 은밀하게 뒷거래로 진행되던 투표권 거래가 완전경쟁적이고 투명하게 이뤄지는 결과는 덤**일 것으로 보입니다.

BP들의 입장에서는 프록시로부터 더 많은 투표를 받기 위해서 더 많은 Fund를 조성할 인센티브가 생기지만, 그 금액이 자신들의 BEP(손익분기점)을 넘어가는 수준이 되어서는 안될 것이기 때문에 시장에서 적절한 수준의 Fund규모가 결정될 것으로 예상되며, 이러한 시스템이 보다 성숙되면 **유권자들의 투표참여율이 기대 이상으로 높아지는 때가 오지 않을까 기대**가 됩니다. 

다음 포스팅으로는 EOS Voter Rewards Exchange의 작동방식 및 사용법 등에 대해 궁금하실 분들을 위해서 Genpool에 대한 보다 자세한 가이드를 준비해보도록 하겠습니다.

- - -

This page is synchronized from the post: ['[EOS Inside] 투표자 자동보상 시스템(Voter Rewards Exchange) 런칭 소식'](https://steemit.com/@donekim/eos-inside-voter-rewards-exchange)
