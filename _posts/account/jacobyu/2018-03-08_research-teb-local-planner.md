
---
title: '[Research] 지역 경로 계획 소개, teb local planner'
permlink: research-teb-local-planner
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-08 07:00:36
categories:
- kr-dev
tags:
- kr-dev
- robot
- ros
- busy
- jjangjjangman
thumbnail: 'https://res.cloudinary.com/hpiynhbhq/image/upload/v1520491251/doi0bulbs7fadfsgoskb.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


오랜만에 로봇 관련 글을 작성합니다.

저도 공부할겸 작성중입니다.

모바일 로봇의 지역 경로 계획 알고리즘에 대해 소개하고자 합니다.

### 지역 경로 계획 (Local path planner)

> Given a plan to follow and a costmap, the controller produces velocity commands to send to a mobile base.

즉, 
* 목적지
* 목적지로 가기 위한 전역 경로
* 주변의 정보 (ex - 쉽게 장애물이 있다)

위의 정보들이 있다고 가정합니다.

이 때, local path planner는 모바일 로봇을 목적지까지 갈 수 있도록 **전진, 회전**을 명령합니다. 

---

예를 들어, 저는 코엑스에서 영화관을 가야하며 입구에 있습니다.

영화관까지 가기 위한 경로가 **전역 경로** (global path)입니다.

이제 영화관까지 움직이는데, 중간중간 사람들도 있고, 갑자기 공사도 하더라고요.

그래서, 전역 경로를 따라 가지만, **사람들을 피해가는 경로**도 생성합니다.

이게 바로 **지역 경로** (local path)입니다.

----

여러 지역 경로 계획 알고리즘이 있지만,

좋은 지역 경로 계획 알고리즘 (TEB local planner)을 소개합니다.

### TEB(Timed Elastic Band) local planner

> The teb_local_planner package implements a plugin to the base_local_planner of the 2D navigation stack. The underlying method called Timed Elastic Band locally optimizes the robot's trajectory with respect to trajectory execution time, separation from obstacles and compliance with kinodynamic constraints at runtime.
---

TEB는 시간, 장애물, 역학적인 제약 등을 고려해서 최적의 지역 경로를 만든다! 라고 되어있습니다.

아래 사진에서 빨간 선은 A지점에서 B지점까지의 경로입니다.

장애물이 3개가 있지만, 경로에 전혀 영향을 주지 않습니다.

그래서 직선 경로를 만든 것을 볼 수 있습니다.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520491251/doi0bulbs7fadfsgoskb.png)

아래와 같이 장애물을 하나 두었더니, 장애물을 우회하는 경로를 만들었습니다.

두 경로를 만들었지만, 그 중에 더 낫다고 생각하는걸 선택하였고 그 경로가 빨간색입니다.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520491385/fwolwt1zcbhkwrdt29ge.png)

장애물 하나를 더 넣어봤습니다.

패스가 여러 개가 생겼는데 그 중에 가장 좋은 패스를 선택하였고

빨간 선입니다.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520492152/pdnywcd9f4zhyj5h5m3x.png)

경로가 장애물과 가까이 있는 것 같아,

좀 더 우회할 수 있는 경로를 생성하고 싶어졌습니다.

경로를 생성하기 위한 다양한 파라미터가 있지만, 

장애물과의 최소 거리 파라미터인 <code>min_obstacle_dist</code>를 0.5m에서 2.0m로 늘려봤습니다.

파라미터를 변경 후, 경로를 보면 장애물로부터 거리가 먼 것을 확인할 수 있습니다.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520491854/r6poixg76btlooux44vj.png)

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520492213/asz8dbt3bog1ubftznmq.png)

파라미터를 좀 더 파악을 하고, 실제로 써먹어볼 수 있도록 해볼 예정입니다.

참고 링크입니다.
* http://wiki.ros.org/teb_local_planner#Obstacle_Parameters
* http://wiki.ros.org/teb_local_planner/Tutorials
* http://wiki.ros.org/teb_local_planner/Tutorials/Setup%20and%20test%20Optimization

읽어주셔서 감사합니다!

궁금한 점, 조언 등 환영합니다!

- - -

This page is synchronized from the post: ['[Research] 지역 경로 계획 소개, teb local planner'](https://steemit.com/@jacobyu/research-teb-local-planner)
