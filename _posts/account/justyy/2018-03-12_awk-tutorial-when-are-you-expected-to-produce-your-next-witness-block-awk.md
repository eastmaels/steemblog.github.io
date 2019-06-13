
---
title: 'AWK Tutorial: When are you expected to produce your next witness block? 使用AWK来估计您下次出块还需要多久？'
permlink: awk-tutorial-when-are-you-expected-to-produce-your-next-witness-block-awk
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-12 19:06:57
categories:
- programming
tags:
- programming
- cn-programming
- cn
- witness
- busy
thumbnail: https://steemitimages.com/DQmRetzutBZxSgDXxNc1WG3FyZjQmc45CSSyp5A1VTdHbfw/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


**This is the longest Linux shell command I've written!**

![](https://steemitimages.com/DQmRetzutBZxSgDXxNc1WG3FyZjQmc45CSSyp5A1VTdHbfw/image.png)

[Last time](https://steemit.com/steemstem/@justyy/awk-tutorial-how-often-do-you-generate-a-witness-block-awk), we presented the command line prints the block number and the number of hours since [last time block](https://helloacm.com/awk-tutorial-how-often-do-you-generate-a-witness-block-steemit/) produced. Here is the version:

```
docker logs [Replace with your Container ID] | grep "Generated" | awk '{cur=substr($8,2);if (NR>1){print "blocks=",cur-prev," hours=",(cur-prev)*3/3600}prev=cur;}'
```

Today, we are going to improve the script which allows to print the estimate time till next block to produce. First we need to make sure the `gawk` is installed via `sudo apt-get install gawk`. The `gawk` is the GNU (or improved) version of `awk`. We need `gawk` to handle a few datetime functions. After `gawk` is installed, the `awk` is often linked to `gawk`.

Here is the [compressed version](https://helloacm.com/awk-tutorial-when-are-you-expected-to-produce-your-next-witness-block-steemit/):

docker logs [container id] | grep "Generated" |  gawk -v date="$(date +"%Y-%m-%d-%H-%I-%S")"  '{cur=substr($8,2);if (NR>1){print $11,"blocks =",cur-prev," hours =",(cur-prev)*3/3600}last=(cur-prev)\*3/60;prev=cur}END{gsub(":", "-",$11);gsub("T","-",$11);split(date,a,"-");split($11,b,"-");t1=mktime(sprintf("%d %d %d %d %d %d 0",a[1],a[2],a[3],a[4],a[5],a[6]));t2=mktime(sprintf("%d %d %d %d %d %d 0",b[1],b[2],b[3],b[4],b[5],b[6]));mins=last-(t1-t2)/60;print "Your next block to produced roughly in",mins,"Minutes.","(",mins/60,"Hours)"}'

The modified version will print the timestamp along each block produced, and in the end if will estimate the number of minutes (and hours) till next block to produce.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520880503/leacwlh4ydsiylsx00bv.png)

It is highly recommended you copy the above command and make it a script e.g. `chmod +x viewsh`

Support my work, [please vote me as a witness](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy). Thanks!

SteemIt Witness Post: [Just another Witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness)

-----------------------------------------
[上次](https://steemit.com/steemstem/@justyy/awk-tutorial-how-often-do-you-generate-a-witness-block-awk)我们用了一个命令 结合管道来显示每次出块的间隔和时间：

```
docker logs [你的容器ID] | grep "Generated" | awk '{cur=substr($8,2);if (NR>1){print "blocks=",cur-prev," hours=",(cur-prev)*3/3600}prev=cur;}'
```

今天我们稍微修改一下，这样就能显示[每次出块的时间](https://justyy.com/archives/6111)，还有距离[上次](https://justyy.com/archives/6108)的块数和小时数。并且在最后显示距离下次出块大约需要多少时间（这是根据你最近一次出块需要时间和已经过去多久计算而得的）

当然，你需要安装 `gawk`，这是`awk` 的GNU版本，安装(`sudo apt-get install gawk`)后 命令`awk`则回通常被链接到 `gawk`

完整的命令如下：

docker logs [容器ID] | grep "Generated" |  gawk -v date="$(date +"%Y-%m-%d-%H-%I-%S")"  '{cur=substr($8,2);if (NR>1){print $11,"blocks =",cur-prev," hours =",(cur-prev)*3/3600}last=(cur-prev)\*3/60;prev=cur}END{gsub(":", "-",$11);gsub("T","-",$11);split(date,a,"-");split($11,b,"-");t1=mktime(sprintf("%d %d %d %d %d %d 0",a[1],a[2],a[3],a[4],a[5],a[6]));t2=mktime(sprintf("%d %d %d %d %d %d 0",b[1],b[2],b[3],b[4],b[5],b[6]));mins=last-(t1-t2)/60;print "Your next block to produced roughly in",mins,"Minutes.","(",mins/60,"Hours)"}'

效果如下：

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520880503/leacwlh4ydsiylsx00bv.png)

我们可以把上面的命令存成脚本，然后 `chmod +x viewsh`

[支持我，投我为见证人，感谢！](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy).

SteemIt 见证人贴: [投行长为见证人，带领CN社区一起脱贫致富!](https://steemit.com/cn/@justyy/5h6gyv-cn)

- - -

This page is synchronized from the post: [AWK Tutorial: When are you expected to produce your next witness block? 使用AWK来估计您下次出块还需要多久？](https://steemit.com/@justyy/awk-tutorial-when-are-you-expected-to-produce-your-next-witness-block-awk)
