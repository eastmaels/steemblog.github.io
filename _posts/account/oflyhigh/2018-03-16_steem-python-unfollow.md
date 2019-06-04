
---
title: '利用脚本(steem-python)取关(unfollow)关注列表中的所有账户'
permlink: steem-python-unfollow
catalog: true
toc_nav_num: true
toc: true
date: 2018-03-16 13:57:00
categories:
- steem
tags:
- steem
- python
- following
- cn-programming
- cn
thumbnail: https://steemitstageimages.com/DQmUzReKPnhNGSUi4DfkqHP3pF3xzmDWd68AcBaqH1edrYE/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


如果，你一不小心关注了很多用户，成百上千，那么其实你关注与否都没有任何意义了，你的feed列表将被各种乱七八糟的文章充斥，你真正关心的作者的内容将会被淹没在文章的海洋中，想找出来，无异于大海捞针。

那么或许取消所有关注，然后从零开始，只重点关注一些用户，会是一个很好的办法。但是取消关注一个个点下去也很累人的有没有？那么有没有什么偷懒的办法，当然有，那就是用脚本完成喽。

<center>![](https://steemitstageimages.com/DQmUzReKPnhNGSUi4DfkqHP3pF3xzmDWd68AcBaqH1edrYE/image.png)
来自[bing.com](https://bing.com)</center>

# steem-python 示例

尽管很多程序语言可以做这个事，但是steem-python是我比较熟悉的啦。


不多说，直接上示例脚本：

```
#!/usr/bin/env python
import sys
import time
from steem import Steem
account = 'oflyhigh.demo'

def get_following(account, steem):
        list = []
        offset = ''
        while True:
                temp = steem.get_following(account, offset, 'blog', 100)
                if (len(temp) < 100):
                        list += temp
                        break
                offset = temp.pop()['following']
                list += temp
        following = [x['following'] for x in list]
        return following

def main(argv=None):
        steem=Steem()
        following = get_following(account, steem)
        print('Following: {}'.format(len(following)))
        print(following)
        for f in following:
                try:
                        steem.unfollow(f, what=['blog'], account = account)
                        print('Unfollow ({}) successfully!'.format(f))
                        #time.sleep(30)
                except Exception as e:
                        print(e)

if __name__ == "__main__":
        sys.exit(main())
```

#  补充说明

上述脚本，我们假设我们已经导入了对应账户的私钥(Posting Private Key)，并且设置了`UNLOCK`环境变量(自动解锁钱包）

如果我们没有设置`UNLOCK`环境变量，那么可以用`steem.wallet.unlock("password")`来解锁，或者直接在创建steem实例时指定posting key。

# 执行效果

我用上述示例账户，随便关注了几个用户：
![](https://steemitstageimages.com/DQmcP1mR5rKfTkH19kBGnUZDuwXARoigfqBH1J6fbXBHuSQ/image.png)
(这些用户仅为示例，并不代表我要取消关注)

执行脚本，输出如下：
![](https://steemitstageimages.com/DQmZHpZK8qi8xExJJmMGtqHWLJLqDD2GUjVhRCjbcorDXFN/image.png)
耶取关成功！


# 其它说明

上述脚本适用与清理关注大量无关用户的账户，如果关注的量不多，自己清理坏用户就好啦。

当然了，也可以导入个优质用户列表，在处理时避免取关优质用户，或者可以在完全清理以后，重新关注优质用户，总之改起来没啥难度的啦。

***(脚本仅供参有，使用风险自负!)***

- - -

This page is synchronized from the post: [利用脚本(steem-python)取关(unfollow)关注列表中的所有账户](https://steemit.com/@oflyhigh/steem-python-unfollow)
