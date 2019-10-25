
---
title: 'BootstrapVue来设计你的页面 / 网络研习社#45'
permlink: bootstrapvue-45
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-10-25 13:25:27
categories:
- network-institute
tags:
- network-institute
- steemjs
- bootstrap
- bootstrapvue
thumbnail: 'https://cdn.steemitimages.com/DQmYxMLvspi5chdLt3VLZwbYb3VYf7TzNGZG9WJTbfLiTrR/bootstrapvue.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![bootstrapvue.jpg](https://cdn.steemitimages.com/DQmYxMLvspi5chdLt3VLZwbYb3VYf7TzNGZG9WJTbfLiTrR/bootstrapvue.jpg)

https://bootstrap-vue.js.org/

Bootstrap这个框架着实不错，可以大大加快你写前端的时间和精力。以前做的一些网页，都是用的Bootstrap来弄页面的。现在用Vue.js来设计前端，页面之类的也要有合适的框架。本来我是想导入Bootstrap的一些文件，然后慢慢组件之类的，没想到Bootstrap已经想到了和Vue.js的结合，直接就嵌入了！

## 安装和导入
```
cnpm install bootstrap-vue bootstrap --save

//src/main.js
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
```

就这么几步，就可以直接使用了，简直不要太简单！

![bootstrapvue2.jpg](https://cdn.steemitimages.com/DQmaK4JGBLziMAocwyTtCzoyyTaRn9V56GfBV6UihZswNE3/bootstrapvue2.jpg)

还有一个很强大的功能：那就是支持在线动态修改。你可以直接使用它的在线工具修改想到的参数和颜色，修改好后再直接拷入自己的组件中使用。这就是所谓的所见即所得吧。

- - -

This page is synchronized from the post: ['BootstrapVue来设计你的页面 / 网络研习社#45'](https://steemit.com/@lemooljiang/bootstrapvue-45)
