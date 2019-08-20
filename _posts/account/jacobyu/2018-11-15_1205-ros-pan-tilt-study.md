
---
title: 'Ros_control와 gazebo를 활용한 pan/tilt control'
permlink: 1205-ros-pan-tilt-study
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-15 01:19:51
categories:
- wordpress
tags:
- wordpress
- kr-dev
- busy
- jjangjjangman
- ros
thumbnail: 'https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-15-18-21-10-1024x595.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<p>로봇팔이나 머리 등 엑츄에이터를 원하는 곳으로 제어하는 것은 어려운 일이다.</p>
<p>예를 들어, 로봇 팔로 사과를 잡는다고 한다.</p>
<p>사과를 잡기 위해, 로봇 팔의 손가락 (End effector)이 목표하는 위치로 가기 위해서는 팔의 관절 (Joint)들이 각도를 적절히 설정되야한다.</p>
<p>음.. 사람은 자연스럽게 되지만 로봇이 사과를 잡기 위해 관절들의 각도를 계산해야한다. 이것을 역기구학이라고 한다.</p>
<p>하지만 역기구학을 공부를 했다고 하더라도 코드로 작성하는 것은 어려우며, 자유도가 높아질 수록 더 어렵다.</p>
<p>코드를 잘 짠다고 하더라도 수식도 어렵다. 이럴 때는.. 기초적인 것을 이해하고 잘 만들어 논 것을 활용하면 된다.</p>
<p>바로 ros_control..</p>
<p><img class="alignnone wp-image-1259 size-large" src="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-15-18-21-10-1024x595.png" alt="" width="640" height="372" srcset="https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-15-18-21-10-1024x595.png 1024w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-15-18-21-10-300x174.png 300w, https://passionbull.net/wp-content/uploads/2018/11/스크린샷-2018-11-15-18-21-10-768x446.png 768w" sizes="(max-width: 640px) 100vw, 640px" /></p>
<p>위의 사진은 공부를 하면서 만든 로봇 머리이다.</p>
<p>이미지에서 좌표를 선택하면, 로봇은 그 좌표를 중심이 되도록 로봇 머리를 움직인다.</p>
<p><span class="embed-youtube" style="text-align:center; display: block;"><iframe class='youtube-player' type='text/html' width='640' height='360' src='https://www.youtube.com/embed/J3A2fBVVQjI?version=3&rel=1&fs=1&autohide=2&showsearch=0&showinfo=1&iv_load_policy=1&wmode=transparent' allowfullscreen='true' style='border:0;'></iframe></span></p>
<h2>공부한 것</h2>
<h2><strong>1.모터 포지션 컨트롤</strong></h2>
<p>모터를 원하는 각도 (위치)로 제어하는 것을 의미한다.</p>
<p>그리고 실제 움직이는 로봇과 시각화 툴에서 그대로 보일수 있도록 한다.</p>
<p>아래 동영상은 joint angle을 수동으로 조작해보는 영상이다.</p>
<p><span class="embed-youtube" style="text-align:center; display: block;"><iframe class='youtube-player' type='text/html' width='640' height='360' src='https://www.youtube.com/embed/pLG6DGtFoOg?version=3&rel=1&fs=1&autohide=2&showsearch=0&showinfo=1&iv_load_policy=1&wmode=transparent' allowfullscreen='true' style='border:0;'></iframe></span></p>
<hr />
<p>다음으로는 position control을 해야하는데..</p>
<p>여러 joint의 각도를 설정하여, 모터를 조작하는..</p>
<p>업데이트 예정</p>
<hr />
<p> </p>
<h2><strong>2.실제 모터컨트롤러 (micro controller)를 ros_control 모듈과 연동시켜, 상위레벨에서 제어하고자 한다. </strong></h2>
<p>Pal robotics</p>
<p>스페인 회사이다.</p>
<p>내가 하고자 하는 것을 제대로 구현을 해놨다.</p>
<p>코드를 보면서 많은 공부가 됐다.</p>
<p><span class="embed-youtube" style="text-align:center; display: block;"><iframe class='youtube-player' type='text/html' width='640' height='360' src='https://www.youtube.com/embed/EDfsAKCgs44?version=3&rel=1&fs=1&autohide=2&showsearch=0&showinfo=1&iv_load_policy=1&wmode=transparent' allowfullscreen='true' style='border:0;'></iframe></span></p>
<p>동영상 위치 <http://wiki.ros.org/Robots/TIAGo/Tutorials/motions/head_action></p>
<ul>
<li>roslaunch tiago_gazebo tiago_gazebo.launch robot:=titanium public_sim:=true world:=look_to_point</li>
<li>rosrun look_to_point look_to_point</li>
</ul>
<p>이미지에서 좌표 찍은 곳을 바라본다.</p>
<p><img class="alignnone size-full wp-image-1249" src="https://passionbull.net/wp-content/uploads/2018/11/KakaoTalk_20181115_134608506.png" alt="" width="984" height="566" srcset="![](https://passionbull.net/wp-content/uploads/2018/11/KakaoTalk_20181115_134608506.png) 984w, ![](https://passionbull.net/wp-content/uploads/2018/11/KakaoTalk_20181115_134608506-300x173.png) 300w, ![](https://passionbull.net/wp-content/uploads/2018/11/KakaoTalk_20181115_134608506-768x442.png) 768w" sizes="(max-width: 984px) 100vw, 984px" /></p>
<p><img class="alignnone wp-image-1250 size-medium" src="https://passionbull.net/wp-content/uploads/2018/11/KakaoTalk_20181115_134629905-300x118.png" alt="" width="300" height="118" srcset="![](https://passionbull.net/wp-content/uploads/2018/11/KakaoTalk_20181115_134629905-300x118.png) 300w, ![](https://passionbull.net/wp-content/uploads/2018/11/KakaoTalk_20181115_134629905-768x303.png) 768w, ![](https://passionbull.net/wp-content/uploads/2018/11/KakaoTalk_20181115_134629905-1024x404.png) 1024w, ![](https://passionbull.net/wp-content/uploads/2018/11/KakaoTalk_20181115_134629905.png) 1288w" sizes="(max-width: 300px) 100vw, 300px" /><img class="alignnone wp-image-1254" src="https://passionbull.net/wp-content/uploads/2018/11/KakaoTalk_20181115_135400156-300x249.png" alt="" width="139" height="115" srcset="![](https://passionbull.net/wp-content/uploads/2018/11/KakaoTalk_20181115_135400156-300x249.png) 300w, ![](https://passionbull.net/wp-content/uploads/2018/11/KakaoTalk_20181115_135400156.png) 564w" sizes="(max-width: 139px) 100vw, 139px" /></p>
<p>카메라 z축이 초록색 직선 A와 일치하게 만든다.</p>
<p>Controller에서는 좌표를 받고,  직선을 만든 후, 직선과 카메라 z축이 일치하게 한다.</p>
<p>Controller는 카메라 z축과 직선 A를 일치시키기 위해, 역기구학 문제를 풀고 pan 과 tilt의 각도를 계산한다.</p>
<p>그리고 joint trajectory를 생성하여 모터를 제어한다.</p>
<p>최종적으로 아래와 같은 결과가 된다.</p>
<p><img class="alignnone size-full wp-image-1251" src="https://passionbull.net/wp-content/uploads/2018/11/KakaoTalk_20181115_134658145.png" alt="" width="968" height="544" srcset="![](https://passionbull.net/wp-content/uploads/2018/11/KakaoTalk_20181115_134658145.png) 968w, ![](https://passionbull.net/wp-content/uploads/2018/11/KakaoTalk_20181115_134658145-300x169.png) 300w, ![](https://passionbull.net/wp-content/uploads/2018/11/KakaoTalk_20181115_134658145-768x432.png) 768w" sizes="(max-width: 968px) 100vw, 968px" /></p>
<hr />
<p>Perception에서는 좌표를 넘기는 역할을 한다.</p>
<p>예를 들어 음료수에서 감자칩을 볼 수 있도록 x,y 좌표를 넘겨준다.</p>
<p>컨트롤러에서는 좌표를 카메라 축이 보게될 방향으로 변환, 그리고 제어를 한다.</p>
<hr />
<h2>하드웨어</h2>
<p>실제 모터 컨트롤러는 아래와 같은 출력과 입력이 필요하다.</p>
<p>출력 : curr_vel, curr_effort, curr_pos</p>
<p>현재 속도, 파워, 위치를 업데이트한다.</p>
<p>입력 : cmd_pos</p>
<p>목표하는 위치(각도)를 입력 받는다.</p>
<hr />
<h2>ROS Control에 연결</h2>
<p>추후 정리 예정</p>
<hr />
<h2>참고링크</h2>
<p>https://pinkwink.kr/1007</p>
<p>https://pinkwink.kr/1013</p>
<p>Ros control</p>
<ul>
<li>https://github.com/ros-controls/ros_control/wiki/hardware_interface</li>
<li>http://gazebosim.org/tutorials/?tut=ros_control</li>
<li>https://github.com/PickNikRobotics/ros_control_boilerplate</li>
</ul>
<p>Head action</p>
<ul>
<li>http://docs.ros.org/electric/api/control_msgs/html/action/PointHeadAction.html</li>
<li>http://wiki.ros.org/pr2_controllers/Tutorials/Moving%20the%20Head</li>
<li>http://wiki.ros.org/robotican/Tutorials/Moving%20the%20head</li>
<li>http://wiki.ros.org/Robots/TIAGo/Tutorials/motions/head_action</li>
<li>http://wiki.ros.org/head_action</li>
</ul>
<p>실험을 하면서 계속 업데이트할 예정이다.</p>


- - -

This page is synchronized from the post: ['Ros_control와 gazebo를 활용한 pan/tilt control'](https://steemit.com/@jacobyu/1205-ros-pan-tilt-study)
