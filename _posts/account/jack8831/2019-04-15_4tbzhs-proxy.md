
---
title: "[PROXY] 공정한 이익 배분을 위한 프록시 토큰 수익 배당 공식을 공개합니다"
permlink: 4tbzhs-proxy
catalog: true
toc_nav_num: true
toc: true
date: 2019-04-15 05:20:30
categories:
- kr
tags:
- kr
- proxy
- proxy.token
- steemit
- witness
thumbnail: http://imgur.com/igiOnsy.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](http://imgur.com/igiOnsy.jpg)

연어입니다. 향후 프록시 토큰 홀더에게 @proxy.token 계정의 공식적인 수익 분배에 필요한 배당 공식을 알려드리겠습니다. 먼저 새로 투표권 위임을 해주신 분들이 있습니다. 명단을 다시 정리해 봅니다.

![111.png](https://files.steempeak.com/file/steempeak/jack8831/aUAOFE4M-111.png)![222.png](https://files.steempeak.com/file/steempeak/jack8831/nqqvAgmJ-222.png)

현재까지 총 80계정, 약 216만 5천 스팀파워분의 위임이 확보되었습니다. 감사합니다.

---

### ■ 배당 공식의 필요성 : PX(account)값 산출

토큰은 스팀파워 위임의 변화에 맞춰 유동적으로 대응하는데 한계가 있습니다. 한 번 지급하면 맘대로 회수할 수 있는 것이 아니기 때문이죠. 

스팀파워는 더 늘릴수도 있고 줄일 수도 있으며, 대부분 프록시 위임과 상관없이 개인적인 이유로 파워업이나 파워다운에 들어갈 것입니다. 마찬가지로 프록시 토큰도 어떤 이유로 차츰 소모하거나 시장에서 판매할 수도 있고, 또 반대로 시장에서 추가 매입을 할 수도 있습니다.

이렇게 매번 변하는 스팀파워와 토큰의 홀딩 수량을 계속 비교하는 것도 불가능하지요. 그래서 이런 문제에 대한 하나의 방안으로서 프록시 토큰의 배당에 사용할 PX(account)를 산출하는 공식을 하나 만들게 되었습니다. 원리는 간단합니다. 일단 공식부터 보시죠.

---

* PX(account) = (스팀파워 배율변화율)*(최초 수령 토큰 수량) + (토큰 수량 변화분) 

---

예를 들어, @abcd 라는 계정이 최초 10,000 스팀파워를 위임하고 5,000 PROXY를 수령하였다면, PX(abcd)의 값은 다음과 같이 계산됩니다. (0.00000001은 0값이 생길 경우 나눗셈에 오류가 발생하는 것을 막기 위해 넣은 보정수치입니다. 0을 막기 위한 목적이죠. 물론 분모에만 있어도 되지만 그냥 분자에도 넣어 보았습니다.) 계산 편의상 0.00000001은 빼고 해보도록 하겠습니다.

* PX(abcd) = 1 * 5,000 + 0 = 5,000

즉, PX(abcd) = 5,000 을 나타내게 됩니다. @abcd 계정은 전체 계정의 총합에서 5,000 만큼의 지분을 갖게 되며 그에 해당되는 배당을 수령하게 됩니다. 이건 계정으로 최초 프록시 위임을 할 때 받아내는 값입니다. 그렇다면 이후에 스팀파워에 변화가 있거나 프록시 토큰의 보유 수량에 변화가 있으면 어떻게 값이 변하는지 살펴보겠습니다.

---

### ■ 스팀파워 변화시 PX(account) 값의 변화

소량이긴 하지만 우리의 스팀파워는 시간이 지나면서 일정한 보상을 받습니다. 이런 측면을 활용하면 프록시 위임을 오래한 계정일수록 배당분을 늘릴 수 있습니다. 오래 위임한데 대한 보상이 자동으로 이루어지죠. 공식을 이용해 확인해 보겠습니다. 편의상 제가 엑셀로 계산표를 한 번 만들어 봤는데요, 

![111.png](https://files.steempeak.com/file/steempeak/jack8831/EliOdxk2-111.png)

모든 항목을 다 보여주면 시각적으로 정신이 없으니 이제 약식으로 나타내 보도록 하겠습니다. 바로 이렇게 말이죠.

![222.png](https://files.steempeak.com/file/steempeak/jack8831/Dj9joMPp-222.png)

* 예시 : 장기 위임에 대한 보상

어떤 다른 계정이 이제 막 10,000 SP를 위임하여 5,000 프록시 토큰을 획득했고 위 계정이 오랜 기간 프록시 위임을 통하여 SP가 1% 늘어났다면, 이 계정은 이제 5,000이 아닌 5,050 PX(account) 값으로서 1% 더 유리한 배당 배분율을 갖게 됩니다. 오랜 위임에 대한 더 유리한 보상분을 획득하게 되는 것이지요. 아래 식에서 확인해 보겠습니다.

![333.png](https://files.steempeak.com/file/steempeak/jack8831/75mkXX51-333.png)

* 예시 : 스팀파워의 증가/증감시

실제 @menerva 님 계정의 경우 맨처음 9,092.366 SP를 위임하여 4,546개의 프록시 토큰을 획득하였습니다. 헌데 이 분이 스팀파워를 10,709 SP로 약 18%를 늘리셨지요. (프록시위임은 스팀파워의 증감에 자동 연동됩니다) 이 경우 굳이 추가분의 프록시 토큰을 지급하지 않더라도 배당에 대한 분배율은 공정하게 늘릴 수 있습니다. 아까 그 공식을 이용한다면,

![444.png](https://files.steempeak.com/file/steempeak/jack8831/yXnCzEJK-444.png)

실제로는 최초 지급받은 4,546개의 프록시 토큰만 홀딩하고 있겠지만, 배당을 위한 PX(menerva) 값은 5,354로서 1,617 SP 위임이 늘어난 만큼의 808 프록시 토큰 증가분의 효과를 그대로 보고 있습니다. 극단적인 정 반대의 경우로서 @menerva 님의 계정이 스팀파워 위임을 전량 철회했다고 하면,

![555.png](https://files.steempeak.com/file/steempeak/jack8831/xvUO0XFb-555.png)

실제 배당에 대한 권한은 0이 되어 배당을 수령할 수 없게 됩니다. 물론 맨 처음에 받아 두었던 4,546개의 프록시 토큰은 @menerva 님의 수중에 남아있게 되며, 이 토큰을 시장에서 판매하거나 다른 분에게 양도할 수 있겠죠. 

하지만 설령 이분이 다시 철회했던 스팀파워를 재위임하더라도 보유했던 토큰을 전량 처분했거나 일부만 남겼다면 배당에 대한 권한은 그만큼 축소되게 됩니다. 예를 들어, @menerva 계정이 임대를 전량 철회한 후 2,000개의 프록시 토큰을 처리한 후 다시 재임대 들어왔다고 해보겠습니다.

![666.png](https://files.steempeak.com/file/steempeak/jack8831/jeQtNGfm-666.png)

처분된 2,000 프록시 토큰 만큼의 배당분이 사라지게 되었죠. 즉, 스팀파워 위임/철회를 반복하여 프록시토큰을 더 수령하거나 하는 꼼수는 어렵다는 얘기입니다. (위임 철회에도 기간이 걸리니 토큰을 얻을 요량으로 넣었다 뺐다 반복하는 것은 어차피 의미 없는 행동입니다)

---

### ■ 프록시 토큰 보유 수량 변화시 PX(account) 값의 변화

아시겠지만, 프록시 토큰은 앞으로 시장 가치를 갖게 될 것입니다. 그럼 누군가는 프록시 토큰을 판매 또는 양도하면서 이익을 챙길 수도 있을 것이고, 거꾸로 어느 누군가는 프록시 토큰을 시장에서 매입하여 @proxy.token 계정의 수익 배당을 더 크게 받거나 더 많은 프로젝트에 프록시 토큰으로 참여할 수도 있을 것입니다.

* 예시 : 프록시 토큰의 추가 매입

 최초 10,000 스팀파워 위임으로 5,000개의 프록시 토큰을 배정 받았는데, 프록시 토큰의 향후 가치와 쓰임새가 커질 것으로 판단하여 5,000개의 토큰을 확보하였다고 합시다. 그럼 PX(account) 값은 10,000으로 커지게 됩니다. 마치 10,000 SP를 더 위임하여 5,000개의 토큰을 추가 확보한 것과 일치합니다.

![777.png](https://files.steempeak.com/file/steempeak/jack8831/D54YllhZ-777.png)

* 예시 : 스팀파워 위임 없이 토큰만 매입

프록시 토큰은 기본적으로 프록시 위임을 기초자산으로 하여 발행되는 것이지만 시장에서 유통될만큼 가치를 인정받는다면 프록시 위임 없이 토큰만 구매하려는 사람이 있을 수도 있습니다. 이 사람이 시장에서 프록시 토큰을 구매해주는 만큼 기초자산이었던 프록시 위임의 가치는 더욱 높아지게 됩니다. 이는 프록시 위임을 해주는 것과 같은 효과를 나타냅니다. 기존의 프록시 위임에 가치를 높여주기 때문입니다. 

![999.png](https://files.steempeak.com/file/steempeak/jack8831/zNxS4HOo-999.png)

위 계정은 스팀파워 위임을 거치지 않았지만, 10,000 SP를 위임한 것과 같은 양의 프록시 토큰을 매입하여 간접적으로 투표권 위임을 한 프록시의 가치를 올려주고 있습니다. A라는 사람이 10,000 SP를 위임하여 받은 무상의 5,000 프록시를 시장에 내놓고,  B라는 사람이 (위임 없이) 시장에서 평가되는 값어치 만큼의 비용을 지불하여 그 5,000 프록시를 획득한다면 결국 프록시 위임이 유지되면서 시장에서 교환 가치까지 확보하는 셈이 되는 것입니다.

---

### ■ PX 공식의 핵심 가치

이렇게 PX 공식을 활용한 여러 분배값 산정을 둘러 보았습니다. 다시 정리하자면, PX 분배식을 통해 우리는 몇 가지 효과를 얻을 수 있습니다.

*  @proxy.token 계정으로 부터 공정한 이익 배당을 받을 수 있습니다.
* 위임 스팀파워나 토큰 보유 물량의 변화를 적절히 반영할 수 있기 때문입니다.
* 스팀파워 위임을 통해 확보한 토큰의 시장 가치를 형성하는데 기여합니다
* 토큰의 매입을 통해 간접적으로 프록시 위임의 가치를 이어갈 수 있기 때문입니다.

결국, PX 공식을 통해 공정한 분배는 물론 시장 및 개인 간의 프록시 토큰 교환과 매매에 가치를 산정할 수 있게 되어 프록시 토큰의 활성화와 투표권 임대에 대한 확신을 높여줄 수 있는 것입니다.

* 당부 말씀: 혹시 제 계산에 오류가 있다면 알려주시기 바랍니다.
* 엑셀 공식이 필요하시다면 공개하겠습니다. (별거 없습니다만... ㅋ)

---

### ■ mention (프록시 위임 계정)

@minsukang @navyactifit @stablewon @julialee66 @remain @cjsdns @goodnewworld @francium @rhodium @zinasura @fur2002ks @supergiant @omit @vingroup @ppomppu @jsg @glory7 @rokairforce @inchonbitcoin @kiwifi @jack8831 @dodoim @twinpapa @smy @gallop @skuld2000 @skt1 @minigame @chairmanlee @ediya @lhy @tworld @foruni73 @holic7 @nexgen @militaryphoto @jjy @cheolwoo-kim @gmarket @menerva @rokarmy @pearltwin @atomy1 @lonose @soosoo @naha @lisboa @hooo @grandlisboa @mightynick @banguri @sleepcat @ehwan @mini.pay @mimistar @roknavy @thinkwise @skyoi @kstop1 @backdm @hhusaini @walktoheaven @jangteo @li-li @sklara @omin @bulsik @smonkstop1 @leesunmoo @yangyang @hemohim @deago @thaiculture @ssonagee @jataka @allbit


- - -

This page is synchronized from the post: [[PROXY] 공정한 이익 배분을 위한 프록시 토큰 수익 배당 공식을 공개합니다](https://steemit.com/@jack8831/4tbzhs-proxy)
