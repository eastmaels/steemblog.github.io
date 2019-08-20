
---
title: 'Git, SVN 자주 사용하는 명령어 정리'
permlink: 1264-git-svn-often-use-command
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-16 00:52:42
categories:
- kr-dev
tags:
- kr-dev
- warpsteem
- busy
- jjangjjangman
thumbnail: None
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<p>Ubuntu에서는 git-cola, gitg라는 gui git tool을 사용해서 repo를 관리한다.</p>
<p>Window에서는 smartgit을 사용한다.</p>
<p>왠만한 것은 gui에서 해결하지만 가끔 terminal에서 작성해야할 경우가 있다..</p>
<hr />
<p>git status</p>
<blockquote><p>git 상태 체크, 어디 브랜치에 있는지, 뭐가 변경되었는지</p></blockquote>
<p> </p>
<h2>로컬 git repo 만들어서 push하기</h2>
<p>git init</p>
<blockquote><p>local git repo 만들기</p></blockquote>
<p>git add .</p>
<blockquote><p>현재 폴더에 있는거 커밋하기</p>
<p>git-cola, gitg에서 체크해서 커밋하고싶은 것만 커밋해도 된다.</p></blockquote>
<p>git remote add origin https://project.git</p>
<blockquote><p>github, bitbucket 등의 server의 repo와 연결한다.</p></blockquote>
<p>그 후로는 git-cola, gitg를 써서 push 한다.</p>
<p> </p>
<hr />
<p> </p>
<h2>SVN 관련 명령어</h2>
<p>wordpress 플러그인을 업데이트 하기 위해서 svn을 사용해야한다.</p>
<p>git으로 하면 얼마나 좋았을까.. 굳이 svn gui를 또 설치하고 싶지 않아서</p>
<p>terminal에서 다 해결하기로 했다. 하지만, 항상 까먹어서 history를 보기 때문에</p>
<p>기록을 해놓는다.</p>
<p> </p>
<p>svn co https://plugins.svn.wordpress.org/warpsteem/ warpsteem_svn/</p>
<blockquote><p>checkout (svn server에 있는 코드를 가져온다.)</p></blockquote>
<p>svn stat</p>
<blockquote><p>변경된 사항을 체크할 수 있다.</p></blockquote>
<p>svn ci -m “added tag filter”</p>
<p>> 파일 변경된 것을 추가 작업 필요없이 바로 서버로 푸쉬할 수 있다.</p>
<p> </p>


- - -

This page is synchronized from the post: ['Git, SVN 자주 사용하는 명령어 정리'](https://steemit.com/@jacobyu/1264-git-svn-often-use-command)
