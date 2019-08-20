
---
title: 'Face recognition research'
permlink: face-recognition-research
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-23 11:42:42
categories:
- face
tags:
- face
- iphone
- faceid
- face-recognition
- steem-dev
thumbnail: 'https://github.com/sergeytulyakov/FaceCept3D/raw/master/docs/home/HalfHeadPoseEstimationExamples.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<h2>Camera sensor type &amp; library</h2>
<ul>
 	<li>Facial Recognition APIs
<ul>
 	<li>http://blog.rapidapi.com/2017/11/10/top-10-facial-recognition-apis-of-2017/</li>
 	<li>https://www.kairos.com/blog/face-recognition-kairos-vs-microsoft-vs-google-vs-amazon-vs-opencv</li>
 	<li>https://konghq.com/blog/list-of-10-face-detection-recognition-apis/</li>
</ul>
</li>
 	<li>RGB
<ul>
 	<li>OpenFace (https://cmusatyalab.github.io/openface/) - using tensorflow</li>
</ul>
</li>
 	<li>Depth
<ul>
 	<li>Kinect, Xtion</li>
 	<li><strong>Depth camera gets 3D coordinates from the pose of the camera</strong></li>
 	<li>FaceFept3D (https://github.com/sergeytulyakov/FaceCept3D)
<ul>
 	<li>this library provide functionalty
<ul>
 	<li>Person-specific template creation</li>
 	<li>Extreme head pose estimation</li>
 	<li>Facial expression analysis</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<img class="" src="https://github.com/sergeytulyakov/FaceCept3D/raw/master/docs/home/HalfHeadPoseEstimationExamples.jpg" alt="Head Pose Estimation Examples" width="429" height="210" />
<ul>
 	<li>IR Camera
<ul>
 	<li>Even in dark places, it looks like the picture below.</li>
</ul>
</li>
</ul>
<img class="" src="https://i.ytimg.com/vi/CvwEtCCQxjI/maxresdefault.jpg" alt="관련 이미지" width="353" height="199" />
<h2>Service</h2>
<ul>
 	<li>Window Hello face authentication</li>
 	<li>iPhone Face ID - Face recognition in the dark using infrared, maybe similar depth
<ul>
 	<li>https://www.extremetech.com/mobile/255771-apple-iphone-x-truedepth-camera-works</li>
 	<li>Unlike existing 2D face recognition, 3D point cloud is used.</li>
 	<li>Using Face shape.</li>
</ul>
</li>
</ul>
<img class="" src="https://cdn.vox-cdn.com/thumbor/obsfN6XDEtqznaXHetezT35CRpI=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/56645395/face_id.0.jpeg" alt="iphone x face id에 대한 이미지 검색결과" width="413" height="275" />

- - -

This page is synchronized from the post: ['Face recognition research'](https://steemit.com/@jacobyu/face-recognition-research)
