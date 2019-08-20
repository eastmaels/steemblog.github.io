
---
title: 'Google assistant library on ubuntu #1 사전 조사'
permlink: 1102-google-assistant-library-on-ubuntu
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-08 14:44:12
categories:
- busy
tags:
- busy
- jjangjjangman
- kr-dev
- iot
- kr
thumbnail: 'https://assistant.google.com/static/images/share.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<p>저는 취미활동으로 저만의 로봇을 만들고 있습니다. 중간중간 쉬고 있긴 하지만 꾸준히 하는중이긴 합니다.</p>
<p>최근에 계속 로봇에 어떻게하면 쉽게 음성인식 기능을 적용할 수 있을까? 에 대해 고민중입니다.</p>
<p>이 포스팅은<strong> 구글 어시스턴트를 어떻게 로봇에 적용할까? 에 관련된 </strong>포스팅입니다.</p>
<p>구글 어시스턴트 서비스, 라이브러리를 활용해서 제가 할 것은 아래와 같습니다.</p>
<ul>
<li>음성인식 결과 (사용자가 말한 것) 가져오기</li>
<li>Google assistant의 응답 가져오기</li>
<li>특정 명령에 대해서는 내가 설정한 대답, 혹은 동작을 할 수 있도록 한다. (내방 불꺼줘, Jacob이 누구지? – 제이콥은 저를 만든 사람입니다.)
<ul>
<li>즉, 구글 어시스턴트의 대답과 내가 설정한 것을 선택할 수 있어야함.</li>
</ul>
</li>
<li>시리야, Ok google 과 같은 Custom Invocation (hot word, wake word)이 필요</li>
</ul>
<p>이 4가지를 로봇에 적용하려고 합니다.</p>
<p>어느정도 진행을 했는데 아직 정리를 못했습니다.</p>
<p>하나하나 정리를 해보려고 합니다.</p>
<p>감사합니다.</p>
<p><strong>이번 글은 먼저 튜토리얼을 따라서 해보고, 여러가지 검색했던 결과들에 대한 나열입니다.</strong></p>
<p> </p>
<p><img class="" src="https://assistant.google.com/static/images/share.jpg" alt="google assistantì ëí ì´ë¯¸ì§ ê²ìê²°ê³¼" width="625" height="328" /></p>
<p><출처 : https://assistant.google.com/#?modal_active=none></p>
<hr />
<h2>Google assistant library 튜토리얼</h2>
<p>google에서 제공하는 내용이다.</p>
<p><a href="https://developers.google.com/assistant/sdk/guides/library/python/">https://developers.google.com/assistant/sdk/guides/library/python/</a></p>
<p>이대로 따라해보도록 한다.</p>
<p> </p>
<h2>마이크 체크</h2>
<ul>
<li>arecord <span class="token se_code_operator">–</span>l
<ul>
<li>마이크 목록 확인</li>
<li><strong>0</strong> 카드, <strong>0</strong>  장치 (card 0, device 0)</li>
<li></li>
</ul>
</li>
</ul>
<p><img class="alignnone size-full wp-image-1103" src="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-05-11-16-42.png" alt="" width="694" height="136" srcset="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-05-11-16-42.png 694w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-05-11-16-42-300x59.png 300w" sizes="(max-width: 694px) 100vw, 694px" /></p>
<ul>
<li>arecord –format=S16_LE –duration=5 –rate=16000 –file-type=raw out.raw
<ul>
<li>옵션
<ul>
<li>-D hw: card,device</li>
<li>-D hw:1,0 (CameraB409241의 마이크 선택)</li>
</ul>
</li>
</ul>
</li>
</ul>
<p> </p>
<h2>마이크 추천</h2>
<p><a href="https://community.home-assistant.io/t/best-microphone-for-diy-voice-control-components/51265">https://community.home-assistant.io/t/best-microphone-for-diy-voice-control-components/51265</a></p>
<h2>스피커 체크</h2>
<ul>
<li>speaker-test -t wav</li>
</ul>
<h2>프로젝트 관리</h2>
<p>프로젝트 관리</p>
<p>https://console.actions.google.com/u/1/project/</p>
<p>보안 관련, key</p>
<p>https://console.developers.google.com/apis/</p>
<h2></h2>
<h2>Google assistant 튜토리얼 결과물</h2>
<p>튜토리얼대로 하면 샘플코드를 실행할 수 있다.</p>
<p>hotword ‘OK google’을 하고, 말을 하면 된다.</p>
<ul>
<li>googlesamples-assistant-hotword –project-id <strong>proejctID</strong> –device-model-id <strong>modelID</strong>
<ul>
<li>projectID와 modelID는 아래 순서로 들어가서 가져온다.</li>
<li>projectID – <a href="https://console.actions.google.com/u/1/project/">구글 액션 콘솔</a> -> 톱니 -> Project setting -> project ID</li>
<li>modelID – <a href="https://console.actions.google.com/u/1/project/">구글 액션 콘솔</a> ->Device registration -> model ID</li>
</ul>
</li>
</ul>
<p> </p>
<h2>기타</h2>
<h3>Google assistatnt docker 활용 검토</h3>
<h3 id="custom">Custom Device Actions</h3>
<p>https://developers.google.com/assistant/sdk/device-actions-overview</p>
<h2></h2>
<h2>파이썬 코드 샘플</h2>
<p>https://github.com/googlesamples/assistant-sdk-python/tree/master/google-assistant-sdk/googlesamples/assistant/library</p>
<p>무조건 응답이 있는 것 같다.</p>
<p>특정 조건에서 내가 원하는 것을 할 수 있을까?</p>
<p>잘 모르겠다.</p>
<p>GRPC로 해봐야겠다.</p>
<h2>Custom Wake</h2>
<p>https://github.com/shivasiddharth/GassistPi</p>
<p>https://snowboy.kitt.ai/</p>
<p> </p>
<h2>참고 프로젝트</h2>
<p> </p>
<p><span class="embed-youtube" style="text-align:center; display: block;"><iframe class='youtube-player' type='text/html' width='640' height='360' src='https://www.youtube.com/embed/6Ez782BxxdQ?version=3&rel=1&fs=1&autohide=2&showsearch=0&showinfo=1&iv_load_policy=1&wmode=transparent' allowfullscreen='true' style='border:0;'></iframe></span></p>
<p>https://wiki.odroid.com/odroid-xu4/application_note/software/ai_speaker</p>



- - -

This page is synchronized from the post: ['Google assistant library on ubuntu #1 사전 조사'](https://steemit.com/@jacobyu/1102-google-assistant-library-on-ubuntu)
