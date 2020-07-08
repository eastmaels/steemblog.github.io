
---
title: '使用Cloudflare Worker做API转发'
permlink: cloudflare-worker-api
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-07-08 03:25:57
categories:
- cn
tags:
- cn
- whalepower
- codeonsteem
- cloudflare
- mini
- zzan
- dblog
- diamondtoken
- marlians
- upfundme
- actnearn
thumbnail: 'https://cdn.steemitimages.com/DQmSeHiHX5be1Cb2td8ewDuMAxWX4jkmSBb7bfhe92NHM2m/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


今天行长@justyy说Cloudflare 现在的worker免费，每天可以10万次调用

这个worker的应用场景很多，比如load balancing, api转发，在线代理等等

比较有兴趣的是api转发。api转发应用场景是，比如你想访问一个国外的api，但是国内的墙很高，翻不过去，你就可以用api转发了

你把请求发向没有墙的worker，这个worker会替你把请求转发到有墙的api去，等收到api返回的数据后，再返回给你。这样你就可以在没墙的情况下访问国外api

转发API的代码：


~~~
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
  let url = new URL(request.url);
  let param = url.param;
  let newUrl = new URL("REDIRECT URL");
  newUrl.pathname=url.pathname;
  for (const [key, value] of url.searchParams) {
    newUrl.searchParams.set(key,value);
  }
  return fetch(newUrl,request);
}
~~~

目前这个工具运行良好，就是每天的10w请求有点不太够用

![image.png](https://cdn.steemitimages.com/DQmSeHiHX5be1Cb2td8ewDuMAxWX4jkmSBb7bfhe92NHM2m/image.png)

- - -

This page is synchronized from the post: ['使用Cloudflare Worker做API转发'](https://steemit.com/@ericet/cloudflare-worker-api)
