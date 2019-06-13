
---
title: 'Technically Images can be Stored on BlockChain 差一点 SteemIt 就可以把图片也存在区块链上了'
permlink: technically-images-can-be-stored-on-blockchain-steemit
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-11 23:43:12
categories:
- steemit
tags:
- steemit
- images
- blockchain
- base64
- steemstem
thumbnail: https://justyy.com/gif/dr.zhihua.lai/13.gif
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<html>
<p>As you probably know, the SteemIt stores the images on AWS cloud servers. This is different from the texts (post content), which are stored in block-chain (e.g. lots of peer-to-peer nodes storing duplicate and immutable) contents.</p>
<p>也许你知道，STEEM上文字是放在区块链上而 STEEM的图片是单独放在AWS云服务器上的。我就突然想到，其实图片也是可以通过BASE64格式把二进制的内容编码成纯文本的BASE64格式。</p>
<p>This is fine.. but I suddenly realized that the images can be embeded in HTML text as well, so instead of giving a actual URL for image for example,</p>
<p><img src="https://justyy.com/gif/dr.zhihua.lai/13.gif" width="98" height="98"/></p>
<p>比如你原来这样在HTML中添加图片：</p>
<p><img src="https://justyy.com/gif/dr.zhihua.lai/13.gif&quot; width=&quot;98&quot; height=&quot;98&quot;/&gt;&lt;/code&gt;&lt;/p&gt;
&lt;p&gt;You could embeded using:&lt;/p&gt;
&lt;p&gt;其实你可以这样直接把图片的内容放在HTML字符串里&lt;/p&gt;
&lt;p&gt;&lt;code&gt;&lt;img src="/></p>
<p>Yes, as you can see, the image content (binary) is converted into <a href="https://rot47.net/base64encoder.html">BASE64-format</a>, which is a pure text format.&nbsp;</p>
<p>这样的话， 图片就和文字混在一起了 。</p>
<p>So, let's try to do this!</p>
<p>Step 1: Convert Images to BASE64-text string, you can use this online API I created years ago (remember to replace the image URL):</p>
<p>我想试验一下，就用N年前写的API来转换图片 （记得把图片改成你的图片地址）</p>
<p><code>https://helloacm.com/api/image-to-base64/?url=https://justyy.com/gif/dr.zhihua.lai/13.gif</code></p>
<p>Copy the base64-encoded image and place it at:</p>
<p>把内容拷到插入图片的文本框中。</p>
<p><img src="https://justyy.com/wp-content/uploads/2017/08/cannot-save-image-1.jpg" width="989" height="587"/></p>
<p>As you can see, the image appears in the text-editor, but when you click POST, it actually fails (image cannot save). The message is to say that this particular image cannot be uploaded to AWS server (but, why you want to do that, steemit, e.g. I have already embeded the image ...)</p>
<p>图片可以显示，但是发表却失败了。</p>
<p><img src="https://justyy.com/wp-content/uploads/2017/08/cannot-save-image.jpg" width="1076" height="751"/></p>
<p>So, I am guessing: either this is a BUG which can be easily fixed by the developers, or it is <em>by design</em>, because the images are generally big and by using <a href="https://helloacm.com/embed-images-in-html-source/">BASE64-encoded</a>, the image size grows 1/3 e.g. 3MB to 4MB.</p>
<p>What do you think? &nbsp;Please re-steem for more visibility. &nbsp;</p>
<p>我猜想两种可能：要么这是一个BUG，可以很轻易的被修复，要么就是设计就是这样，因为可能图片本来就很大，用了BASE64文字编码后大小会增加1/3。。。</p>
<p>您认为呢？不管怎么样：<strong>差一点</strong> SteemIt 就可以把图片也存在区块链上了！</p>
<p><img src="https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png" width="1200" height="628"/></p>
<p>&nbsp;Originally published at <a href="https://steemit.com/">https://steemit.com</a> Thank you for reading my post, feel free to FOLLOW and Upvote <a href="https://steemit.com/@justyy">@justyy</a> which motivates me to create more quality posts.</p>
<p>原创首发于 <a href="https://steemit.com/">https://steemit.com</a> 非常感谢阅读, 欢迎FOLLOW和Upvote <a href="https://steemit.com/@justyy">@justyy</a> &nbsp;能激励我创作更多更好的内容.&nbsp;&nbsp;</p>
<p>// 已同步到我的<a href="https://justyy.com/">中文博客 </a>和<a href="https://justyy.com/"> </a><a href="https://codingforspeed.com">英文算法博客</a>。&nbsp; &nbsp;</p>
<ul>
  <li>&nbsp;<a href="https://justyy.com/archives/5048">SteemIt 就可以把图片也存在区块链上了</a></li>
  <li>&nbsp;<a href="https://helloacm.com/technically-images-can-be-stored-on-blockchain/">Technically Images can be Stored on BlockChain</a></li>
</ul>
<p><strong>近期热贴 Recent Popular Posts</strong>&nbsp;</p>
<ul>
  <li>&nbsp;<a href="https://steemit.com/cn/@justyy/200steem-1-sp">第一次打肿脸充胖子 - 花了200STEEM租1万SP四周！ </a>&nbsp;</li>
  <li><a href="https://steemit.com/cn/@justyy/mysql-knn-the-k-nearest-neighbor-algorithm-prediction-demonstration-by-mysql">[机器学习] 用 MySQL 来演示 KNN算法 The K Nearest Neighbor Algorithm (Prediction) Demonstration by MySQL</a></li>
  <li><a href="https://steemit.com/cn/@justyy/the-fox">The Fox 英式午餐</a></li>
</ul>
</html>

- - -

This page is synchronized from the post: [Technically Images can be Stored on BlockChain 差一点 SteemIt 就可以把图片也存在区块链上了](https://steemit.com/@justyy/technically-images-can-be-stored-on-blockchain-steemit)
