
---
title: 'mysql DB, mysql-workbench setup on Ubuntu (Vultr 호스팅)'
permlink: 1535-mysql-db-workbench-setup-vultr-ubuntu
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-12-18 08:03:30
categories:
- kr-dev
tags:
- kr-dev
- test
- tutorial
- busy
- jjangjjangman
thumbnail: 'https://ipfs.busy.org/ipfs/QmWT31DpdyNZ749SFR25TGLcYCumk8dyVQ7c2BsDSHzGdk'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


안녕하세요. 제이콥입니다.

mysql-workbench를 이용하여 mysqlDB 원격 접속을 위한 설정에 대해 적어봤습니다.

전에 한번 했었는데, 다시 하려니 기억이 안나더라고요. 그래서 정리하게 됐습니다.

먼저 mysql DB 셋업 과정, 그리고 방화벽 port 관련 설정, mysql-workbench 설치 및 설정 등을 할 것입니다.

* * *

제 환경은 우분투이고, vultr 가상 호스팅 서버입니다. (서버가 우분투환경이면 저랑 똑같이 하면 됩니다.)

Vultr에 대해 궁금하시면 아래 글을 봐보세요!

[https://steemit.com/kr-dev/@jacobyu/vultr](https://steemit.com/kr-dev/@jacobyu/vultr)

순서대로 시작해보겠습니다.

* * *

### Vultr 내에서 셋팅 #0 db 계정 생성

ssh로 접속을 합니다. 아래 계정이름과 ip는 임의로 적어봤습니다.

> ssh testid@123.123.55.123

이미 워드프레스는 설치를 했다면, mysql은 같이 설치되어있습니다.

mysql 계정을 하나 만들어보겠습니다.

먼저 루트 계정으로 접속합니다. 처음에 mysql를 설치할 때 정했던 아이디와 비밀번호를 입력합니다.

계정을 생성합니다. ‘test’ 는 아이디, 그리고 ‘12345678’은 비밀번호입니다.

> mysql -u root -p

> use mysql;
> 
> create user ‘**test**‘@’%’ identified by ‘**12345678**‘;

계정을 생성한 다음에 잘 생성됐는지 확인합니다.

> select user from user;

다음으로, 권한을 주는 것을 깜빡했는데요.

권한을 줘야합니다. 외부에서 mysql-workbench로 접속을 해서 쉽게 변경을 할 수 있도록이요.

> grant all privileges on *.* to ‘test’@’%’ ideintified by ‘12345678’;
> 
> flush privileges;

* * *

### Vultr 내에서 셋팅 #1 방화벽 db 접근 port 열기

또한 외부에서 접속하기 위해서는 port를 열어줘야합니다.

ufw를 설치합니다. ufw는 쉽게 포트를 설정할 수 있도록 해줍니다.

설치 후, 상태를 한번 봅니다.

어떤 포트가 열려있고 닫혀있는지 적혀있습니다.

> sudo ufw status verbose

다음으로는, mysql접근을 위한 3306 포트를 엽니다 (기본이 3306). 혹은, 자신만의 포트로 변경을 해도됩니다.

> sudo ufw allow 3306

* * *

### Window PC #0 MYSQL workbench 설치 및 셋팅

https://dev.mysql.com/downloads/workbench/에서 다운로드합니다.

다운로드 후, manage connection을 들어가서 해당 서버의 ip/혹은 domain 그리고 db ID/pw를 입력하면 끝!

그리고 실제로 연결해보시면 됩니다.

![image.png](https://ipfs.busy.org/ipfs/QmWT31DpdyNZ749SFR25TGLcYCumk8dyVQ7c2BsDSHzGdk)

![image.png](https://ipfs.busy.org/ipfs/QmcmHJHyujKXP2BVGsCUYnKXappmQaZS34yQ4HRY2ExnAN)

mysql workbench 장점으로는

DB를 GUI에서 보고 수정가능하고, 커맨드로 날려보고 여기 하나에서 다해볼 수 있습니다.

여기까지 따라오시면서 주의해야할점은

계정의 권한 확인, 방화벽 포트 확인이 있습니다.

* * *

자! 정리를 간단히 해봤습니다!

다음 글에서는 이어서 테이블도 만들어보고 파이썬에서 접근도 해볼 예정입니다.

감사합니다.

* * *

*   [https://www.vultr.com/docs/install-phpmyadmin-on-one-click-wordpress-app](https://www.vultr.com/docs/install-phpmyadmin-on-one-click-wordpress-app) – vultr 관련 docs
*   [http://ourcstory.tistory.com/45](http://ourcstory.tistory.com/45) -mysql 사용자 추가
*   [http://webdir.tistory.com/206](http://webdir.tistory.com/206) – ufw
*   [https://zetawiki.com/wiki/MySQL_SSH_터널링](https://zetawiki.com/wiki/MySQL_SSH_터널링)

***
<center>
### Originally posted on [Story of Jacob](http://passionbull.engrave.site/1535-mysql-db-workbench-setup-vultr-ubuntu). Steem blog powered by [ENGRAVE](https://engrave.website).
</center>

- - -

This page is synchronized from the post: ['mysql DB, mysql-workbench setup on Ubuntu (Vultr 호스팅)'](https://steemit.com/@jacobyu/1535-mysql-db-workbench-setup-vultr-ubuntu)
