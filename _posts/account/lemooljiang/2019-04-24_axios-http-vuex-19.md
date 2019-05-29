
---
title: "axios请求HTTP和vuex数据管理 / 网络研习社#19"
permlink: axios-http-vuex-19
catalog: true
toc_nav_num: true
toc: true
date: 2019-04-24 14:57:33
categories:
- cn
tags:
- cn
- network-institute
- vue
- axios
- vuex
thumbnail: https://cdn.steemitimages.com/DQmVugtJWKctJJ4Dxm1MMg5Ns2QAnQUyLZiMsDBe25ftQpU/vue.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://cdn.steemitimages.com/DQmVugtJWKctJJ4Dxm1MMg5Ns2QAnQUyLZiMsDBe25ftQpU/vue.jpg)

axios有点类似ajax，主要是发送请求，获得数据，然后渲染到页面。vuex主要是实现组件间数据交换的，调度数据。到此，vue.js就基本实现了所有前端的功能，好像零碎的东西也不少啊，比起wordpress建站神器，确实要复杂蛮多的。不过，相对的，功能也要强不少。

### axios
```js
http://www.axios-js.com/zh-cn/docs
https://www.kancloud.cn/yunye/axios/234845
cnpm install axios --save
import axios from 'axios'
methods:{
  get(){
    axios.get('http://vue.studyit.io/api/getlunbo').then(res => {
      console.log(res.data)
    }).catch(function (error) {
      console.log(error)
    })
  }
}

全局设置 main.js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```


### vuex
```js
vue配套的公共数据管理工具，它可以把一些共享的数据保存到vuex中
cnpm install vuex --save
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
  state: {
    count: 0  //this.$store.state.count调用数据
  },
  mutations: {
   increment(state){
     state.count ++
   }, //this.$store.commit('increment')调用方法
   getters:  {
      optCount: function (state) {
        return state.count   //只对外提供数据，$store.getters.optCount
      }
   }
  }
})
#挂载到VM实例上
var app = new Vue({
        el: '#app',
        store
      })  

// 总结：
// 1. state中的数据，不能直接修改，如果想要修改，必须通过 mutations
// 2. 如果组件想要直接 从 state 上获取数据： 需要 this.$store.state.***
// 3. 如果 组件，想要修改数据，必须使用 mutations 提供的方法，需要通过 this.$store.commit('方法的名称'， 唯一的一个参数)
// 4. 如果 store 中 state 上的数据， 在对外提供的时候，需要做一层包装，那么 ，推荐使用 getters, 如果需要使用 getters ,则用 this.$store.getters.***
```


****
网络研习社系列文章：
* [微信小程序开发初体验 / 网络研习社#1]( https://steemit.com/cn/@lemooljiang/61qx8h-1)
* [新技能：小程序空间当图床！ / 网络研习社#2](https://steemit.com/cn/@lemooljiang/gjekw-2)
* [小程序云开发中数据的传递形式 / 网络研习社#3](https://steemit.com/cn/@lemooljiang/6a8ukt-3)
* [如何突破coreldraw的网络限制 / 网络研习社#4](https://steemit.com/cn/@lemooljiang/coreldraw-4)
* [我师网小程序初发布，大家多多指教 / 网络研习社#5](https://steemit.com/cn/@lemooljiang/6rr2ug-5)
* [用github 做文件目录 / 网络研习社#6](https://steemit.com/cn/@lemooljiang/github-6)
* [LNMP环境一键安装（一） / 网络研习社#7](https://steemit.com/cn/@lemooljiang/lnmp-7)
* [LNMP环境自定义安装（二） / 网络研习社#8](https://steemit.com/cn/@lemooljiang/lnmp-8)
* [利用github做免费博客 / 网络研习社#9](https://steemit.com/cn/@lemooljiang/github-9)
* [Nodejs，打开服务器黑匣子 / 网络研习社#10](https://steemit.com/cn/@lemooljiang/nodejs-10)
* [一入前端深似海，聊聊vue.js / 网络研习社#11]( https://steemit.com/cn/@lemooljiang/vue-js-11)
* [我们想做的，vue都帮我们做好了 / 网络研习社#12]( https://steemit.com/cn/@lemooljiang/vue-11)
* [vue和小程序一家亲 / 网络研习社#13]( https://steemit.com/cn/@lemooljiang/vue-13)
* [vue的组件面面观 / 网络研习社#14]( https://steemit.com/cn/@lemooljiang/vue-14)
* [vue-router路由的参数和设计 / 网络研习社#15]( https://steemit.com/cn/@lemooljiang/vue-router-15)
* [webpack前端神器 / 网络研习社#16]( https://steemit.com/cn/@lemooljiang/webpack-16)
* [用FileZilla作FTP文件服务器 / 网络研习社#17](https://steemit.com/cn/@lemooljiang/filezilla-ftp-17)
* [连接FTP文件服务器的方法/ 网络研习社#18](https://steemit.com/cn/@lemooljiang/ftp-18)

****
　@lemooljiang  #network-institute

- - -

This page is synchronized from the post: [axios请求HTTP和vuex数据管理 / 网络研习社#19](https://steemit.com/@lemooljiang/axios-http-vuex-19)
