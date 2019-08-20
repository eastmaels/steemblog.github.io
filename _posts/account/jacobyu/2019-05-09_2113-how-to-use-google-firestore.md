
---
title: 'Google Cloud Firestore 라이브러리 활용기'
permlink: 2113-how-to-use-google-firestore
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-05-09 05:54:27
categories:
- kr-dev
tags:
- kr-dev
- busy
- jjm
thumbnail: 'https://cdn-images-1.medium.com/max/1600/1*a2Da_CQHUsSKTCTRI2tYhQ.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<img class="" src="https://cdn-images-1.medium.com/max/1600/1*a2Da_CQHUsSKTCTRI2tYhQ.png" alt="Google cloud firestoreì ëí ì´ë¯¸ì§ ê²ìê²°ê³¼" width="585" height="180" />
<h2>Cloud Firestore</h2>
<blockquote>Cloud Firestore is a fast, fully managed, <strong>serverless</strong>, cloud-native NoSQL document database that simplifies storing, syncing, and querying data for your mobile, web, and IoT apps at global scale. Its client libraries provide live synchronization and offline support, while its security features and integrations with Firebase and Google Cloud Platform (GCP) accelerate building truly serverless apps.</blockquote>
Google에서 서비스하고 있는 Cloud Firestore에 대해 소개합니다.

Cloud Firestore는 cloud, serverless, NoSQL 데이터베이스입니다.

여러 특징들이 있는데
<ul>
 	<li>확장성. 동시 접속이 많아지면 알아서 확장이 된다고 합니다.</li>
 	<li>보안.</li>
 	<li>사용자는 로직, 데이터만 고민하면 됩니다.</li>
</ul>

<hr />

<h2>활용방법</h2>
활용 방법은 크게 2가지입니다.

1번. 각 클라이언트에 맞는 라이브러리를 사용하는 것

2번. firestore를 활용한 restAPI 서버 구성입니다.

<h3>1번. 클라이언트에 맞는 라이브러리</h3>
1번 방법은 쉽게 firestore를 사용해볼 수 있으나, 클라이언트 플랫폼이 달라질때마다 그에 맞는 라이브러리를 찾아 써야합니다.

예를 들어, 안드로이드에서 firestore를 사용할 때와 아이폰에서 firestore를 사용할 때 코드가 좀 다르죠.

그리고 firestore에 종속된 코드라서 추후 아마존, 자체서버로 서버를 옮길 경우, 다시 코드를 짜야하죠.
<h3>2번. Firestore를 활용한 restAPI 서버</h3>
2번 방법은 restAPI를 한 번 구성해놓으면 어떤 플랫폼이든 기존에 rest api 요청하는 코드를 그대로 활용할 수 있습니다.

그리고 아마존, 자체 서버로 옮겨도 그대로 코드를 사용할 수 있죠.

2번 방법은 직접 사용해보고 더 적어보겠습니다.

<hr />

<h2>1번 방법, JJM page에서 활용</h2>
보팅 히스토리 부분에서 firestore를 활용해봤습니다.

JJM 보팅을 할 때마다, 보팅 히스토리에 기록합니다.

그리고 그 기록들을 볼 수 있도록 해봤습니다.

<img class="alignnone wp-image-2130 size-large" src="https://passionbull.net/wp-content/uploads/2019/05/스크린샷-2019-05-09-14-40-47-1024x536.png" sizes="(max-width: 640px) 100vw, 640px" srcset="https://passionbull.net/wp-content/uploads/2019/05/스크린샷-2019-05-09-14-40-47-1024x536.png 1024w, https://passionbull.net/wp-content/uploads/2019/05/스크린샷-2019-05-09-14-40-47-300x157.png 300w, https://passionbull.net/wp-content/uploads/2019/05/스크린샷-2019-05-09-14-40-47-768x402.png 768w" alt="" width="640" height="335" />

이를 위해서 필요한건 딱 2개의 함수만 있으면 됩니다.

쓰기와 읽기죠.

아래처럼 history에 보팅 rate와 보팅을 한 날짜를 add합니다. 이부분이 쓰는 부분입니다.

<code>db.collection("history").add({
rate: _rate,
date: _date
});</code>
<div>
<div></div>
</div>
이 부분은 history에 담긴 document를 읽어오는 부분입니다.

시간 순서대로 10개만 읽어봤습니다.

<code>db.collection("history").orderBy("date","desc").limit(10)
.get()
.then(function(querySnapshot) {
querySnapshot.forEach(function(doc) {
console.log(doc.id, " =&gt; ", doc.data());
</code>

<hr />

<h2>느낀점</h2>
서버를 잘 몰라도 서버가 필요한 서비스를 제공할 수 있습니다.

단, Firestore의 무료할당량을 초과하면 돈을 내야합니다.

무료할당량을 초과할정도면 돈을 벌 수 있는 서비스이지 않을까?? 생각해봅니다.

읽어주셔서 감사합니다!!!

<hr />

<h2>참고</h2>
<a href="https://firebase.google.com/docs/firestore/use-rest-api?hl=ko">https://firebase.google.com/docs/firestore/use-rest-api?hl=ko</a>

<a href="https://firebase.google.com/docs/database/rtdb-vs-firestore?hl=ko">https://firebase.google.com/docs/database/rtdb-vs-firestore?hl=ko</a>

<a href="https://medium.com/get-it-working/get-googles-firestore-working-with-react-c78f198d2364">https://medium.com/get-it-working/get-googles-firestore-working-with-react-c78f198d2364</a>

- - -

This page is synchronized from the post: ['Google Cloud Firestore 라이브러리 활용기'](https://steemit.com/@jacobyu/2113-how-to-use-google-firestore)
