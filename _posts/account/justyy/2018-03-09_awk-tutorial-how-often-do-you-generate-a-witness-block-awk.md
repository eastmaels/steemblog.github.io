
---
title: 'AWK Tutorial: How often do you generate a Witness Block? 使用AWK来看见证人生成块的速度'
permlink: awk-tutorial-how-often-do-you-generate-a-witness-block-awk
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-09 14:46:39
categories:
- steemstem
tags:
- steemstem
- programming
- cn-programming
- cn
- witness
thumbnail: https://steemitimages.com/DQmRetzutBZxSgDXxNc1WG3FyZjQmc45CSSyp5A1VTdHbfw/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmRetzutBZxSgDXxNc1WG3FyZjQmc45CSSyp5A1VTdHbfw/image.png)

How many hours/minutes or blocks are there since last time you generate a block as a witness? Today we are going to find out the answer using the LINUX [AWK programming](https://helloacm.com/awk-tutorial-how-often-do-you-generate-a-witness-block-steemit/).

First, we know that if you run `docker logs [Your Container ID]` you will see lots of log messages, such as:

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520606238/t0xpcxxqda3rygk5eur4.png)

The `./run.sh logs` prints a tail-ed messages and we can to `grep "Generated"` to see the list of blocks:

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520606293/myj9peicheqzrsneufor.png)

So the next thing is to get the 8-th column with prints the block number. Using AWK, we know the 8-th column is stored in $8 and we can use the following Linux command to print the number of blocks since last commit and the hours passed (steemit generates a block every 3 seconds);

`NR` is the row number in AWK, and `substr($8, 2)` removes the hash tag.

```
{
  cur=substr($8,2);
  if (NR>1){
    print "blocks=",cur-prev," hours=", (cur-prev)*3/3600
  }
  prev=cur;
}
```

The complete command is:

```
docker logs [Replace with your Container ID] | grep "Generated" | awk '{cur=substr($8,2);if (NR>1){print "blocks=",cur-prev," hours=",(cur-prev)*3/3600}prev=cur;}'
```

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520606441/ow9edqjofntqenjgd4pv.png)

Yeah, I am getting faster and faster... Please help me to achieve my aim of producing a block every hour by [voting me as a witness](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy). Thanks!

SteemIt Witness Post: [Just another Witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness)

------------------

每次见证人出块，媳妇总我说 “又生了”。 每次出块我总会去算一下离上次出块多少时间，这是可以通过当前块数和上次出块数算出来的。

首先，我们可以通过 `docker logs [容器 ID]` 来显示很多很多的记录：

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520606238/t0xpcxxqda3rygk5eur4.png)

有一个脚本 `./run.sh logs`是显示最近几条记录 (tail) 我们可以通过管道 `grep "Generated"` 列出出块时候的记录。

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520606293/myj9peicheqzrsneufor.png)

然后我们就可以通过[AWK](https://justyy.com/archives/6108)来处理文本了，比如 $8 返回第8列，我们就可以算出每次出块的间隔，然后已知每3秒STEEM产生一个块，这样我们就知道时间了。

`NR` 表示行号， `substr($8, 2)` 去掉第8列中的 # 字符，也就是得到块号。

```
{
  cur=substr($8,2);
  if (NR>1){ 
    print "blocks=",cur-prev," hours=", (cur-prev)*3/3600
  }
  prev=cur;
}
```

完整的命令如下：

```
docker logs [容器ID] | grep "Generated" | awk '{cur=substr($8,2);if (NR>1){print "blocks=",cur-prev," hours=",(cur-prev)*3/3600}prev=cur;}'
```

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520606441/ow9edqjofntqenjgd4pv.png)

我的目标是一个小时生成一块，请帮助我达成这个目标吧， [投我为见证人，感谢！](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy).

SteemIt 见证人贴: [投行长为见证人，带领CN社区一起脱贫致富!](https://steemit.com/cn/@justyy/5h6gyv-cn)

- - -

This page is synchronized from the post: [AWK Tutorial: How often do you generate a Witness Block? 使用AWK来看见证人生成块的速度](https://steemit.com/@justyy/awk-tutorial-how-often-do-you-generate-a-witness-block-awk)
