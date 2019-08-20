
---
title: '[ROS] custom message 생성'
permlink: 1303-ros-custom-message-generation
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-21 09:13:06
categories:
- kr-dev
tags:
- kr-dev
- kr-study
- ros
- busy
- jjangjjangman
thumbnail: 'https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-21-17-54-13-300x282.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<p>ROS에서 message는 노드가 서로 주고받는 데이터를 말한다.</p>
<p>custom message는 기존 message type으로 표현하기 어려울 때, 직접 만들어 사용할 수 있다.</p>
<p>예를 들어, 로봇의 odometry는 이미 정해진 구조가 있다. 이 구조를 활용하는 편이 훨씬 좋다.</p>
<p><a href="http://docs.ros.org/melodic/api/nav_msgs/html/msg/Odometry.html">http://docs.ros.org/melodic/api/nav_msgs/html/msg/Odometry.html</a></p>
<p>나 같은 경우, 물체에 대한 정보를 서로 주고 받고싶다.</p>
<p>마땅히 사용할 message type이 없다면, 이 때 물체에 대한 구조를 새로 정의할 수 있다.</p>
<p>이걸 custom message라고 한다.</p>
<hr />
<h2>만드는 방법</h2>
<p><a href="http://wiki.ros.org/ROS/Tutorials/CreatingMsgAndSrv">http://wiki.ros.org/ROS/Tutorials/CreatingMsgAndSrv</a></p>
<p>나는 Object라는 message type을 만들어보려고 한다.</p>
<p>프로젝트 내에 msg라는 폴더를 생성하고, 원하는 메시지를 정의한다.</p>
<ul>
<li>작성자는 Object.msg라는 이름으로 만들었다.</li>
<li>내부에는 이것저것 많이 들어있다.</li>
<li># 은 주석이다.</li>
<li><img class="alignnone size-medium wp-image-1306" src="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-21-17-54-13-300x282.png" alt="" width="300" height="282" srcset="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-21-17-54-13-300x282.png 300w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-21-17-54-13.png 433w" sizes="(max-width: 300px) 100vw, 300px" /></li>
</ul>
<p>Cmakelists.txt 에서 추가할 것을 본다.</p>
<ul>
<li><strong><strong>find_package에 message_generation를 추가한다. (중요)</strong></strong></li>
<li><img class="alignnone size-medium wp-image-1309" src="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-21-17-59-18-298x300.png" alt="" width="298" height="300" srcset="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-21-17-59-18-298x300.png 298w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-21-17-59-18-150x150.png 150w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-21-17-59-18-174x174.png 174w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-21-17-59-18.png 491w" sizes="(max-width: 298px) 100vw, 298px" /></li>
</ul>
<ul>
<li>Cmakelists에서 정의한 Object.msg 를 add_message_files에 추가한다.</li>
<li><img class="alignnone size-medium wp-image-1307" src="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-21-17-55-39-300x97.png" alt="" width="300" height="97" srcset="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-21-17-55-39-300x97.png 300w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-21-17-55-39.png 578w" sizes="(max-width: 300px) 100vw, 300px" /></li>
<li>message를 추가하기 위해서는 dependencies를 설정해줘야 한다.</li>
<li>만약에 odometry_msgs를 element로 쓰고 싶다면, 넣으면 된다.</li>
<li><img class="alignnone size-full wp-image-1308" src="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-21-17-56-07.png" alt="" width="293" height="127" /></li>
</ul>
<hr />
<h2>사용 방법</h2>
<p>위와 같이 셋팅을 한 후, catkin_make로 빌드한다.</p>
<p>코드 상에서 어떻게 사용하는지 보자.</p>
<p>사실, 다른 메시지랑 똑같이 사용하면 된다. <strong>include만 잘 하면 된다.</strong></p>
<ul>
<li><strong>C++에서  메시지를 사용하기 위해서 메시지를 include를 해야한다.</strong></li>
<li><strong>#include “프로젝트 명/message 이름.h”</strong></li>
<li><strong>나 같은 경우는 #include “perception/Object.h”가 된다.</strong></li>
</ul>
<p>다음은 publish를 해보겠다.</p>
<p>publisher를 정의한다.</p>
<blockquote><p>gFacePublisher = nh.advertise<perception::Object>(“face”,1);</p></blockquote>
<p>그리고 메시지 객체를 정의한다.</p>
<p>정의한 메시지 객체에 데이터를 넣고 publish!</p>
<p><img class="alignnone size-medium wp-image-1310" src="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-21-18-06-49-300x290.png" alt="" width="300" height="290" srcset="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-21-18-06-49-300x290.png 300w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-21-18-06-49.png 415w" sizes="(max-width: 300px) 100vw, 300px" /></p>
<hr />
<p>이렇게 publish를 하면 된다.</p>
<p>subscriber도 다른 메시지와 사용방법이 같다.</p>
<blockquote><p>ros::Subscriber gFaceSubscriber = nh.subscribe(“face”, 1, faceCallback);</p>
<p>void faceCallback(const perception::Object& faceMsg);</p>
<p>cout<<faceMsg.id<<endl;</p></blockquote>
<hr />
<p>Python에서도 비슷하게 사용하면 되는데</p>
<p>import할 때 아래처럼 하면 된다.</p>
<p>나머지 사용방법은 다른 메시지와 같다.</p>
<blockquote><p>from perception.msg import Object</p></blockquote>
<p> </p>
<hr />
<p>즉, msg 폴더와 Cmakelists.txt에 정의만 잘 해놓으면</p>
<p>다른 메시지들과 똑같이 사용하면 된다.</p>


- - -

This page is synchronized from the post: ['[ROS] custom message 생성'](https://steemit.com/@jacobyu/1303-ros-custom-message-generation)
