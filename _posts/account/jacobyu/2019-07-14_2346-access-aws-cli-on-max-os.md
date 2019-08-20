
---
title: '[셋팅] mac os에서 aws-cli로 s3 접근하기'
permlink: 2346-access-aws-cli-on-max-os
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-07-14 14:18:18
categories:
- kr-dev
tags:
- kr-dev
- busy
- jjm
thumbnail: None
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<p>aws-s3는 음.. 파일 호스팅을 위한 클라우드 서비스입니다.</p>
<p>예를 들어, 여러 이미지, 동영상, 음원 등을 이 곳에 저장해놓고, 저장해놓은 이미지를 링크하나로 접근할 수 있습니다.</p>
<p>그리고, 이 aws-s3에 파일들을 쉽게 올리고 지우고 하기 위해 존재하는게 aws-cli입니다.</p>
<p>aws-cli를 셋팅하는 것부터 활용하는것 까지 간단하게 적어봤습니다!!</p>
<p>개발 환경을 맥북으로 바꾸면서 이전에 셋팅해놓은걸 다시 할 필요가 있었습니다.</p>
<p>그리고 유저 셋팅하는것도 바꿔봤습니다.</p>
<ul>
<li>설치</li>
<li>cli에서 유저 셋팅</li>
<li>IAM, s3에서 권한 셋팅</li>
<li>접근 확인</li>
</ul>
<p>이런 과정으로 s3에 파일도 올리고 내리고를 할 수 있습니다.</p>
<p>빈약한 설명이지만, 아래 링크들을 하나씩 참고하시면 하실수 있을거라 믿습니다..</p>
<p>셋팅이 끝나면, aws-s3에 업로드, 다운로드를 할 수 있습니다. 이 내용은 아래 링크를 참고하셔요.</p>
<blockquote class="wp-embedded-content" data-secret="jX99V4iaMO"><p><a href="https://passionbull.net/2019/03/others/aws-cli-for-aws-s3/">AWS S3를 aws-cli로 관리하자</a></p></blockquote>
<p><iframe class="wp-embedded-content" sandbox="allow-scripts" security="restricted" style="position: absolute; clip: rect(1px, 1px, 1px, 1px);" src="https://passionbull.net/2019/03/others/aws-cli-for-aws-s3/embed/#?secret=jX99V4iaMO" data-secret="jX99V4iaMO" width="600" height="338" title="“AWS S3를 aws-cli로 관리하자” — Story of Jacob" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe></p>
<p> </p>
<h3>참고한 링크</h3>
<p>설치 – https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/install-macos.html</p>
<p>cli 셋팅 – https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/cli-chap-configure.html</p>
<p>권한 부여 – https://github.com/keithweaver/python-aws-s3/</p>
<p>접근 확인 및 실제 사용 – https://passionbull.net/2019/03/others/aws-cli-for-aws-s3/</p>
<p><span class="embed-youtube" style="text-align:center; display: block;"><iframe class='youtube-player' type='text/html' width='640' height='360' src='https://www.youtube.com/embed/v33Kl-Kx30o?version=3&rel=1&fs=1&autohide=2&showsearch=0&showinfo=1&iv_load_policy=1&wmode=transparent' allowfullscreen='true' style='border:0;'></iframe></span></p>


- - -

This page is synchronized from the post: ['[셋팅] mac os에서 aws-cli로 s3 접근하기'](https://steemit.com/@jacobyu/2346-access-aws-cli-on-max-os)
