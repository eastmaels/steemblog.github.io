
---
title: 'Connect amazon alexa vocie and ROS using alexa skill, lambda, pubnub #1'
permlink: 1061-connect-amazon-alexa-and-ros-using-alexa-skill-lambda-pubnub
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-04 06:11:03
categories:
- busy
tags:
- busy
- iot
- jjangjjangman
- kr-dev
- smarthome
thumbnail: 'https://hackster.imgix.net/uploads/attachments/433208/alexa_architecture_acCo1SmNga.png?auto=compress%2Cformat&w=740&h=555&fit=max'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


제이콥입니다.

<p>이 글은 아마존 에코 스피커와 로봇을 연결하여 여러 명령을 하기 위한 셋팅입니다.</p>
<p>이 글 관련으로 2편-3편 정도 시리즈를 생각하고 있습니다.</p>
<p>감사합니다.</p>
<hr />
<h2>목적</h2>
<p>스마트 스피커와 로봇을 연결할 필요가 생겼다.</p>
<p>왜냐하면 음성 인식 관련 소프트웨어, 하드웨어를 모두 다 개발할 수 없기 때문이다.</p>
<p>집중할 부분에 집중하고 이미 잘하는 것은 활용하는게 현명한 것 같다.</p>
<p>예를 들어, 여러 마이크를 사용하여 노이즈를 없앤다거나, 어느 방향인지 파악하는 것, 음성인식</p>
<p>잘하는 기존 제품을 활용해본다.</p>
<p>이 글을 쓴 이유는</p>
<p>기존의 글들을 보고 그대로 해도 동작도 안하고 따라하기 어려웠다. (사용하는 라이브러리가 바뀜, UI가 바뀜)</p>
<p>다시해도 제대로 못할 것 같아서 정리를 하게 됐다.</p>
<hr />
<p> </p>
<h2>시스템 구조</h2>
<p><img class="" src="https://hackster.imgix.net/uploads/attachments/433208/alexa_architecture_acCo1SmNga.png?auto=compress%2Cformat&w=740&h=555&fit=max" width="498" height="269" /></p>
<p><출처 – https://www.hackster.io/grassjelly/autonomous-home-assistant-robot-fff43e></p>
<p>기존에 아마존 알렉사와 로봇 사이에 연결한 수많은 예시들을 찾아봤다.</p>
<ul>
<li>로봇과 알렉사를 연결하는 수많은 예시가 있다.
<ul>
<li>다 복잡하고 잘 안된다.</li>
<li>pubnub으로 하는게 깔끔한 편이다.
<ul>
<li>ip를 알 필요가 없다.</li>
<li>고정 ip가 아니여도 된다.</li>
<li>인터넷만 잡으면 된다.</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>그 중에 내가 선택한 시스템은 위에 그림이다.</p>
<p>간단히 설명하면</p>
<p>사용자가 Echo 스피커에서 무언가 말을 하고, 그 중에 일부 (내가 설정한 어떤 명령어들)는 AWS LAMBDA FUNCTION (서버)에서 처리한다.</p>
<p>처리된 데이터는 PubNub이라는 중간 브로커를 통해 로봇 시스템 (ROS)에 전달하게 된다.</p>
<p>각자 인터넷만 연결되어 있다면, 스피커에서 로봇으로 각각의 단계를 거쳐 원하는 명령을 내릴 수 있다.</p>
<hr />
<h2>Alexa skill setup</h2>
<p><a href="https://developer.amazon.com/alexa/console/ask?">https://developer.amazon.com/alexa/console/ask?</a> 에서 셋업하면 된다.</p>
<h4>Interaction Model 작성하기</h4>
<ul>
<li>어떤 명령을 받았을 때, 이 skill (프로그램)을 사용할지 결정한다.</li>
<li>되게 재밌는게 Sample Utterances에 활용해서 비슷한 문장을 말해도 같은 Intent를 실행하게 된다.
<ul>
<li>즉, 완전 똑같지 말하지 않더라도 원하는 Intent를 호출 할 수 있다.</li>
<li>type도 정할 수 있다.</li>
<li>My favorite color is {color_type}.</li>
</ul>
</li>
</ul>
<p><img class="alignnone wp-image-1062" src="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-01-16-05-00.png" alt="" width="552" height="349" srcset="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-01-16-05-00.png 885w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-01-16-05-00-300x190.png 300w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-01-16-05-00-768x486.png 768w" sizes="(max-width: 552px) 100vw, 552px" /></p>
<h4>End point 설정</h4>
<ul>
<li>처음할 때 햇갈렸다.
<ul>
<li>동영상을 보도록 한다.</li>
</ul>
</li>
<li>이 모델에 대한 결과를 만들어 줄 서버가 필요하다.</li>
<li>작성자는 이 서버를 lambd로 만들었다.
<ul>
<li>이번에 이 시스템을 구현하기 위해서 처음 사용해봤다.</li>
<li>예제를 보면서 하면 할만하다.</li>
<li>python, nodejs가 있다.</li>
</ul>
</li>
</ul>
<p><img class="alignnone wp-image-1063" src="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-01-16-12-21.png" alt="" width="550" height="238" srcset="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-01-16-12-21.png 1368w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-01-16-12-21-300x130.png 300w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-01-16-12-21-768x332.png 768w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-01-16-12-21-1024x443.png 1024w" sizes="(max-width: 550px) 100vw, 550px" /></p>
<p>Skill ID – 이 스킬의 ID이다.</p>
<p>AWS Lambda ANR – 서버라고 생각하면 편하다. 서버의 ID다.</p>
<ul>
<li>ANR은 Lambda 함수를 만들고 나서 그 함수 관리 페이지에서 볼 수 있다.</li>
<li>ANR에서도 skill ID를 입력해야하고, Skill에서도 ANR을 입력해야한다. 서로 입력해야함.</li>
</ul>
<h4>주의할 점</h4>
<ul>
<li>항상 save와 build를 잘 하도록 한다.</li>
<li>ANR, skill ID 확인</li>
</ul>
<h4>테스트</h4>
<ul>
<li>Interaction Model과 ANR을 입력하면 Test를 할 수 있다.</li>
<li>Skill은 launch (시작), 서버에서 처리할 수 있는 명령, quit(종료)로 구성된다.
<ul>
<li>이게 무슨말이냐면</li>
<li>Invocation으로 정한 키워드를 통해 alexa에게 나의 skill을 호출하라고 명령한다.
<ul>
<li>Invocation이 “conversation application”이라 가정하면</li>
<li>ex – alexa run “conversation application”라 말하면 된다.</li>
<li>이 때 launchIntent가 실행된다.</li>
</ul>
</li>
<li>다음으로 설정한 intent들을 호출할 수 있다.
<ul>
<li>launch 한 후, intent에 대한 결과를 반환한다.</li>
</ul>
</li>
<li>quit를 하면 실행했던 skill을 사용중지한다.</li>
</ul>
</li>
</ul>
<p><img class="alignnone size-full wp-image-1064" src="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-01-16-42-07.png" alt="" width="402" height="544" srcset="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-01-16-42-07.png 402w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-01-16-42-07-222x300.png 222w" sizes="(max-width: 402px) 100vw, 402px" /></p>
<p>시뮬레이션에서 돌려본 결과이다.</p>
<hr />
<h2>Lambda</h2>
<p><a href="https://ap-northeast-1.console.aws.amazon.com/console/home?region=ap-northeast-1#">https://ap-northeast-1.console.aws.amazon.com/console/home?region=ap-northeast-1#</a></p>
<p>참 괜찮은 서비스다.</p>
<p>하나의 실행 모듈을 돌릴 수 있다.</p>
<p>lambda를 통해, 각 intent에 대해 어떤 동작을 할지 결정할 수 있다.</p>
<h4>코드 입력</h4>
<p>코드 입력 유형 –> .zip 파일 업로드로 코드를 업데이트 하면된다.</p>
<p><strong>nodejs로 할 경우, package.json에 종속성을 체크한다.</strong></p>
<p>그리고 npm install 후에 그 폴더 자체를 압축해서 lambda로 보낸다.</p>
<h4>로그 보기</h4>
<p>로그가 보고싶을 땐, 모니터링에서 CloudWatch에서 로그 보기를 한다.</p>
<p>자세한 내용은 튜토리얼을 첨부한다.</p>
<p><a href="https://github.com/alexa/skill-sample-nodejs-hello-world">https://github.com/alexa/skill-sample-nodejs-hello-world</a></p>
<h4>힘들었던 것</h4>
<ul>
<li>참고했던 링크들을 보면 라이브러리 버젼이 달랐었다.</li>
<li>이제는 안 쓰는 함수들을 쓴다던가..</li>
<li>그래서 링크들의 소스들은 참고만하고</li>
<li>hello-world 코드에다가 pubnub을 적용하였다.</li>
</ul>
<p> </p>
<hr />
<h2>PubNub</h2>
<p>PubNub은 lambda와 로봇의 중간 브로커 역할을 한다.</p>
<p>로봇은 보통 고정 ip를 갖고 있지 않다.</p>
<p>그렇기 때문에 외부에서 로봇에 연결하기 위해서는</p>
<p>포트 포워딩을 통해 로봇 ip에 잘 찾아갈 수 있도록 해야한다. (아는게 이것밖에 없군요.)</p>
<p>Pubnub은 설정을 할 필요 없게 해주는 서비스다.</p>
<p>lambda에서 pubnub으로 데이터를 넘기면 pubnub이 알아서 로봇 쪽으로 보내준다.</p>
<p>반대도 마찬가지다.</p>
<p> </p>
<h3>PubNub Setting</h3>
<p><a href="https://admin.pubnub.com/">https://admin.pubnub.com/</a>에서 셋팅한다.</p>
<ol>
<li>
<h3>Create new App.</h3>
</li>
<li>
<h3>Create new keyset.</h3>
<ol>
<li>publish key와 subscribe key는 lambda와 로봇 쪽 코드에서 필요하다.</li>
</ol>
</li>
<li>
<h3>Debug console</h3>
<ol>
<li>디버그 콘솔 창에서 add client</li>
<li>channel을 확인한다.</li>
<li>channel 또한 lambda와 로봇쪽에서 필요하다.</li>
<li>같은 채널로 데이터를 주고받아야 한다.</li>
<li>주고 받기 위해서는 publish key와 subscribe key가 필요하다.</li>
</ol>
</li>
</ol>
<p><img class="alignnone size-full wp-image-1065" src="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-01-16-42-20.png" alt="" width="413" height="611" srcset="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-01-16-42-20.png 413w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-01-16-42-20-203x300.png 203w" sizes="(max-width: 413px) 100vw, 413px" /></p>
<hr />
<h2>로봇 쪽 통신 코드</h2>
<p>아래 코드를 참고했다.</p>
<p><a href="https://www.pubnub.com/docs/python/data-streams-publish-and-subscribe">https://www.pubnub.com/docs/python/data-streams-publish-and-subscribe</a></p>
<p> </p>
<hr />
<p>일단 셋팅 및 테스트는 완료했다.</p>
<p>실제 활용에 대해서는 다음 포스팅에서 적어보도록 하겠다.</p>
<p>셋팅을 하면서 작성한 코드도 깃헙에 올린다.</p>
<p><a href="https://github.com/passionbull/alexa-ros-python-pubnub">https://github.com/passionbull/alexa-ros-python-pubnub</a></p>
<p> </p>
<h2>참고한 링크</h2>
<ul>
<li><a href="https://www.hackster.io/grassjelly/autonomous-home-assistant-robot-fff43e">https://www.hackster.io/grassjelly/autonomous-home-assistant-robot-fff43e</a></li>
<li><a href="https://www.pubnub.com/tutorials/alexa-voice-controlled-raspberry-pi-using-lambda-and-pubnub/">https://www.pubnub.com/tutorials/alexa-voice-controlled-raspberry-pi-using-lambda-and-pubnub/</a></li>
<li><a href="https://www.pubnub.com/docs/python/data-streams-publish-and-subscribe">https://www.pubnub.com/docs/python/data-streams-publish-and-subscribe</a></li>
<li><a href="https://github.com/alexa/skill-sample-nodejs-hello-world">https://github.com/alexa/skill-sample-nodejs-hello-world</a></li>
</ul>


- - -

This page is synchronized from the post: ['Connect amazon alexa vocie and ROS using alexa skill, lambda, pubnub #1'](https://steemit.com/@jacobyu/1061-connect-amazon-alexa-and-ros-using-alexa-skill-lambda-pubnub)
