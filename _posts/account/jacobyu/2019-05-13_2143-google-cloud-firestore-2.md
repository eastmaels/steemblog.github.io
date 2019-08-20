
---
title: 'Google Cloud Firestore 라이브러리 활용기 #2'
permlink: 2143-google-cloud-firestore-2
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-05-13 15:32:30
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


<p>Cloud Firestore를 활용하는 방법은 2가지 있습니다.</p>

아래 링크 1편에서 소개했었습니다.

<p><a href="https://steempeak.com/kr-dev/@jacobyu/2113-how-to-use-google-firestore">https://steempeak.com/kr-dev/@jacobyu/2113-how-to-use-google-firestore</a></p>


<p>이번 포스팅에서는 REST API로 Cloud Firestore 활용하는 부분을 간단히 소개해봅니다.</p>

---

### Firestore REST API

1.Firestore에 데이터를 저장하면 그 데이터에 접근할 수 있는 REST API가 자동으로 생성

2.간단한 crud작업 수행 가능
-- 생성,읽기, 수정, 제거

---

### 느낀점

실제로 사용해보니 느낀점은 간단한 crud작업이 필요하다면 이 REST API를 사용하면 됩니다.

하지만, crud 작업 외에 다른게 필요하다면 이 rest-api만 갖고는 원하는 기능을 구현하기가 어렵습니다.

예를 들어, 광고를 보면 포인트를 주는 것을 만들고 싶습니다.
이를 위해 해야하는 것은 기존의 포인트가 얼마인지 확인하고 기존의 포인트에 특정 포인트를 추가하는 것입니다.
그러면 읽기를 하고 다음에 쓰기를 해야하는데요. 이걸 하기 위해서는 서버에 접근해서 읽고 쓰는 작업을 할 수  있어야합니다.
Firebase에서는 위의 작업을 위해 Firebase functions이라는 기능을 제공합니다. 다음 포스팅에서는 Firebase functions에 대해 적어보겠습니다.

---

아래에 REST API예시를 몇 개 적어봤습니다.

<h3>Get all</h3>
<blockquote><p>https://firestore.googleapis.com/v1beta1/projects/{project_name}/databases/(default)/documents/test</p></blockquote>
<ul>
<li>get 요청</li>
<li>이 url은 test에 있는 모든 document를 읽기를 요청합니다.</li>
</ul>
<h3>Get account</h3>
<blockquote><p>https://firestore.googleapis.com/v1beta1/projects/{project_name}/databases/(default)/documents/test/jacobyu</p></blockquote>
<ul>
<li>get 요청</li>
<li>이 url은 test에 있는 jacobyu 문서를 읽기를 요청합니다.</li>
</ul>
<h3>Add account</h3>
<blockquote><p>https://firestore.googleapis.com/v1beta1/projects/{project_name}/databases/(default)/documents/test?<strong>documentId</strong>=<strong>makeahabit</strong></p>
<p>Json body</p>
<p>{<br />
“fields”: {<br />
“point”: {<br />
“integerValue”: “0”<br />
},<br />
“posting”: {<br />
“integerValue”: “0”<br />
}<br />
}<br />
}</p></blockquote>
<ul>
<li>post 요청</li>
<li>이 url은 test에다가 makeahabit이라는 다큐먼트 생성을 요청합니다.</li>
</ul>
<h3>Update account</h3>
<blockquote><p>https://firestore.googleapis.com/v1beta1/projects/jacob-test-d826e/databases/(default)/documents/test/<strong>jacobyu</strong>?updateMask.fieldPaths=<strong>posting</strong>&updateMask.fieldPaths=<strong>point</strong></p>
<p>Json body</p>
<p>{<br />
“fields”: {<br />
“point”: {<br />
“integerValue”: “5”<br />
},<br />
“posting”: {<br />
“integerValue”: “5”<br />
}<br />
}<br />
}</p></blockquote>
<ul>
<li>PATCH 요청</li>
<li>이 url은 <strong>jacobyu</strong>의 field <strong>posting</strong>과 <strong>point </strong>내용 수정을 요청합니다.</li>
</ul>
<hr />
<h3>참고</h3>
<p>https://cloud.google.com/firestore/docs/reference/rest/v1/Value</p>
<p>https://firebase.google.com/docs/firestore/reference/rest/?hl=ko</p>


- - -

This page is synchronized from the post: ['Google Cloud Firestore 라이브러리 활용기 #2'](https://steemit.com/@jacobyu/2143-google-cloud-firestore-2)
