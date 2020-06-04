
---
title: '每天进步一点点：custom_json & follow\unfollow\mute\unmute'
permlink: customjson-and-follow-unfollow-mute-unmute
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-06-04 03:27:03
categories:
- cn
tags:
- cn
- cutehive
- cn-programming
- python
- custom-json
- follow
- mute
thumbnail: 'https://images.hive.blog/DQmeXqRS5YJFSDQ58ztLeryhT52MbvKxjvkBDU8VqHCDuhX/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


我们都知道，HIVE上我们追随或者拉黑一个人，对应的操作是`follow`以及`mute`，相应的取消操作分别为`mute`与`unmute`，实际上在链上，这些都是通过同一个操作实现的，那就是`custom_json`。


![image.png](https://images.hive.blog/DQmeXqRS5YJFSDQ58ztLeryhT52MbvKxjvkBDU8VqHCDuhX/image.png)
(图源 ：[pixabay](https://pixabay.com/))


说到`custom_json`，那简直是一个百宝箱，可以配合链上/链下的应用实现好多功能，举例来说以前SE的好多功能都是用`custom_json`来实现的，还有现在的社区功能，也是基于`custom_json`的。

# 结构

`custom_json`的模板大致如下：
```
op_custom_json = ['custom_json', {
    'required_auths': [],
    'required_posting_auths': [],
    'id': '',
    'json': ''
  }]
```

其中`required_auths`中需要填写需要ACTIVE授权的用户组，`required_posting_auths`填写需要POSTING权限的用户组，两者均可以留空，但是不能同时为空，相应的检查代码如下：
>`FC_ASSERT( (required_auths.size() + required_posting_auths.size()) > 0, "at least one account must be specified" );`

`id`这个名字起的比较怪，我看到`id`就会以为它是一个数字，其实不然，`id`是一个字符串。在代码注释中，说`id`长度必须小于32个字符：
>`custom_id_type                id; ///< must be less than 32 characters long`

但是实际上，检查代码如下：
>`FC_ASSERT( id.size() <= STEEM_CUSTOM_OP_ID_MAX_LENGTH, "Operation ID length exceeded. Max: ${max} Current: ${n}", ("max", STEEM_CUSTOM_OP_ID_MAX_LENGTH)("n", id.size()) );`

而`STEEM_CUSTOM_OP_ID_MAX_LENGTH`定义为`32`，所以 `id`的最大长度实际上是`32`啦。

至于`json`就不用多说了，就是转化成UTF8编码字符串的JSON啦。


# 实现

知道了`custom_json`的定义，实现起来就比较简单了，下面是大致的实现逻辑：

给对应项赋值：
>`op[1]['id'] =  id`
>`op[1]['json'] = json.dumps(json_data)`
>`op[1]['required_auths'] = required_auths`
>`op[1]['required_posting_auths'] = required_posting_auths`

追加进transaction，对其签名并广播：
>`trx.append_op(op)`
>`trx.sign_digest(wif)`
>`ret = trx.broadcast()`


# follow\unfollow\mute\unmute

有了`custom_json`，我们就可以实现`follow\unfollow\mute\unmute`功能了。

以@oflyhigh.test账户为例，几个操作对应JSON如下：
>`json_follow = ["follow",{"follower":"oflyhigh.test","following":"oflyhigh","what":["blog"]}]`
>`json_unfollow = ["follow",{"follower":"oflyhigh.test","following":"oflyhigh","what":[]}]`
>`json_mute = ["follow",{"follower":"oflyhigh.test","following":"oflyhigh","what":["ignore"]}]`
>`json_unmute = ["follow",{"follower":"oflyhigh.test","following":"oflyhigh","what":[]}]`

我们不难看出`unfollow`和`unmute`其实是一样的，都是把`what`中的内容清空。

将上述json内容放入我们实现的custom_json函数中，就会实现对应的功能，比如:
>`client.custom_json("follow", json_data=json_follow, required_posting_auths=["oflyhigh.test"], wif=wif)`

我分别调用了一下几个操作，有趣的是，因为`json_unfollow`和`json_unmute`本质上操作相同，tapos以及超时时间又完全一样，会被认为是重复操作：
>![image.png](https://images.hive.blog/DQmVi2qQVawccDGdshaSFzfnrMX5Kd5xE2zyrxwDNuQfGSY/image.png)

所以加一个超时，让`unfollow`和`unmute`的超时时间不同，就好了。


顺利执行后，在https://hiveblocks.com/上我们会看到类似如下的结果：
>![image.png](https://images.hive.blog/DQmayfapV5vLHqnuypgv3fpu4SH7Eje8XXUn5vLyVRz72MS/image.png)

# 结束语

本文就扯到这里啦，至于如何用`custom_json`实现其它功能，其实都是大同小异，留给大家自己探索了。

另外，文中代码仅为参考，大家可以用hive-python或者beem等去玩转`custom_json`，我的库还不成熟，先不放出来献丑了。

- - -

This page is synchronized from the post: ['每天进步一点点：custom_json & follow\unfollow\mute\unmute'](https://steemit.com/@oflyhigh/customjson-and-follow-unfollow-mute-unmute)
