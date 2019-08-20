
---
title: 'ajax的应用，以及jQuery和vue的实现 / 网络研习社#35'
permlink: ajax-jquery-vue-35
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-08-18 09:42:09
categories:
- cn
tags:
- cn
- network-institute
- ajax
- vue
- jquery
thumbnail: 'https://cdn.steemitimages.com/DQmRz8xWKZYAKAhH8vyhwesfqE3pVRi6mVXn8ubrX3Cv3yE/ajax.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![ajax.jpg](https://cdn.steemitimages.com/DQmRz8xWKZYAKAhH8vyhwesfqE3pVRi6mVXn8ubrX3Cv3yE/ajax.jpg)

ajax的应用还是蛮广的，它是一种异步 JavaScript 和 XML），是指一种创建交互式网页应用的网页开发技术。它具有异步和局部刷新的优点，在网页中几乎都会采用。它原生的写法有点复杂，所以，会有一些封装的技术，比如，jQuery和vue的实现，使它的应用变得简单很多了。

## ajax原生的写法
```js
var xmlHttp = new XMLHttpRequest();
xmlHttp.open("POST", "/ajax_test/", true);
xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlHttp.send("username=q1mi&password=123456");
xmlHttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    alert(this.responseText);
    }
};
```
<br/>
确实原生的写法不好理解，也不好用，还是直接来看jQuery和vue的实现吧。

## jQuery的实现

发送get(jQuery)
```js
<script src="js/jquery-3.4.1.js"></script>

$.ajax({
    url: "/test/",
    type: "GET",
    data: {"key": "value", "age":18},
    success: function (args) {
        $("#val3").val(args);
    }
})
})
```
<br/>
发送post(jQuery)
```js
$.ajax({
    url: "",
    type: "POST",
    headers: {"X-CSRFToken": $.cookie("csrftoken")},
    success: function (args) {
        $("#val3").val(args);
    }
})
})
```
<br/>
## 快捷方法(jQuery)
```js
$.get("test.cgi", { name: "John", time: "2pm" }, function(data){
     alert("Data Loaded: " + data);
   });

$.post("test.php", { name: "John", time: "2pm" }, function(data) {
    process(data);
  });

$.getJSON("test.js", function(json) {
   alert("JSON Data: " + json.users[3].name);
 });
```
<br/>
以这样一种封装的程度，使用ajax发送请求变得异常简单！以简单几行代码就可以从服务器端获取想要的结果啰，这也怪不得jQuery会成为最流行的代码工具之一。
<br/>
## vue的实现
它是使用axios这个组件来实现ajax的，使用起来也是异常简单的，vue也成为当今最流行的前端框架之一。
```js
http://www.axios-js.com/zh-cn/docs
https://www.kancloud.cn/yunye/axios/234845

cnpm install axios --save

#main.js
import axios from 'axios'
Vue.prototype.axios = axios
#其它js中使用：
this.axios({......})

methods:{
  get(){
    this.axios.get('http://vue.studyit.io/api/getlunbo').then(res => {
      console.log(res.data)
    }).catch(function (error) {
      console.log(error)
    })
  }
}

this.axios.request({
    method: 'post',
    url: 'http://192.168.1.101:8000/login/',
    data:{
      username:this.username,
      password:this.password
    }
  })
  .then(function (arg) {
      console.log(222,arg);   
      }
  })
  .catch(function (error) {
    console.log(333,error);
    });

```

- - -

This page is synchronized from the post: ['ajax的应用，以及jQuery和vue的实现 / 网络研习社#35'](https://steemit.com/@lemooljiang/ajax-jquery-vue-35)
