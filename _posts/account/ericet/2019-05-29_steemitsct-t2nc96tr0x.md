
---
title: "Steemit线性收益和SCT曲线收益的差别"
permlink: steemitsct-t2nc96tr0x
catalog: true
toc_nav_num: true
toc: true
date: 2019-05-29 19:05:51
categories:
- cn
tags:
- cn
- sct
- sct-cn
- sct-ubi
- whalepower
thumbnail: https://ipfs.busy.org/ipfs/QmUwuex2E4LLhbfijtyUVewYJq7H7sHKZQt86D26ZRiSzS
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


今天@sct对1.3非线性收益给出了看法：<a href="https://www.steemcoinpan.com/sct/@teamcn-sct/sct-2019-5-29-1-3">运营团队对1.3非线性收益的看法</a>

里面讨论了steemit的1.0 线性和SCT的1.3非线性，很多人估计和我一样并不是太了解这里面的差别。
@jack8831很有耐心的给我解释了这里面的差别，我总结消化一下解释给不清楚区别的人。

最早的时候，steemit采用的是曲线收益（N^2),在这个规则下，你点10的赞，显示的收益将会是100（10^2).
在这样的规则下，早期的steemit用户很容易一篇收益破千甚至破万。这样的问题是，大户们会变得更大了。（可能现在的鲸鱼都是那时候养起来的）

后来steemit改成1.0线性收益（N^1), 在这个规则下，你点10的赞，显示的收益也是10.
大户们因为这个改变收益下跌厉害，开始了他们的卖赞的服务。所以现在steemit有那么多的卖赞服务。

SCT目前所用的收益规则是1.3曲线（N^1.3),在这个规则下，你点10的赞，显示的收益将会是19.95.

看看下面的对比表(感谢@jack8831提供）：

<table>
<thead>
<tr>
  <th>1.0（Steemit)</th>
  <th>1.3(SCT)</th>
  <th>2.0 (Old Steemit)</th>
</tr>
</thead>
<tbody>
<tr>
  <td>1.00</td>
  <td>1.00</td>
  <td>1.00</td>
</tr>
<tr>
  <td>1.10</td>
  <td>1.13</td>
  <td>1.21</td>
</tr>
<tr>
  <td>1.20</td>
  <td>1.27</td>
  <td>1.44</td>
</tr>
<tr>
  <td>1.30</td>
  <td>1.41</td>
  <td>1.69</td>
</tr>
<tr>
  <td>1.40</td>
  <td>1.55</td>
  <td>1.96</td>
</tr>
<tr>
  <td>1.50</td>
  <td>1.69</td>
  <td>2.25</td>
</tr>
<tr>
  <td>1.60</td>
  <td>1.84</td>
  <td>2.56</td>
</tr>
<tr>
  <td>1.70</td>
  <td>1.99</td>
  <td>2.89</td>
</tr>
<tr>
  <td>1.80</td>
  <td>2.15</td>
  <td>3.24</td>
</tr>
<tr>
  <td>1.90</td>
  <td>2.30</td>
  <td>3.61</td>
</tr>
<tr>
  <td>2.00</td>
  <td>2.46</td>
  <td>4.00</td>
</tr>
<tr>
  <td>2.10</td>
  <td>2.62</td>
  <td>4.41</td>
</tr>
<tr>
  <td>2.20</td>
  <td>2.79</td>
  <td>4.84</td>
</tr>
<tr>
  <td>2.30</td>
  <td>2.95</td>
  <td>5.29</td>
</tr>
<tr>
  <td>2.40</td>
  <td>3.12</td>
  <td>5.76</td>
</tr>
<tr>
  <td>2.50</td>
  <td>3.29</td>
  <td>6.25</td>
</tr>
<tr>
  <td>2.60</td>
  <td>3.46</td>
  <td>6.76</td>
</tr>
<tr>
  <td>2.70</td>
  <td>3.64</td>
  <td>7.29</td>
</tr>
<tr>
  <td>2.80</td>
  <td>3.81</td>
  <td>7.84</td>
</tr>
<tr>
  <td>2.90</td>
  <td>3.99</td>
  <td>8.41</td>
</tr>
<tr>
  <td>3.00</td>
  <td>4.17</td>
  <td>9.00</td>
</tr>
</tbody>
</table>

这个是3种规则的曲线图（红色2.0，绿色1.3，蓝色1.0）：
<img src="https://ipfs.busy.org/ipfs/QmUwuex2E4LLhbfijtyUVewYJq7H7sHKZQt86D26ZRiSzS" alt="image.png" /><br/>

在曲线的规则下，点赞者的审查收益会变得更多，这样就会减少卖赞服务的使用。

Jack @jack8831说，最理想的是1.33 曲线，但是目前steem-engine还不能设置，所以SCT目前只能用1.3曲线。

但是1.3曲线也有一个问题，从上面的列表里面可以看出，那就是给帖子收益越多的点赞将会获得越多的审查收益。

但是Jack说这和现实世界里面的明星一样，越受欢迎的明星收益就越高。

如果你想在这个规则下获得越高的收益，那就让自己得到更多的关注并且变得更加受欢迎吧！

总的来说，1.3曲线是介于1.0 和2.0之间比较合理的一个数字，既不让大户们更快的变大，也减少卖赞服务的使用。相信这是SCT团队用心研究后做出的决定。

感谢@jack8831那么耐心的给我解答心中的疑惑！ ---

- - -

This page is synchronized from the post: [Steemit线性收益和SCT曲线收益的差别](https://steemit.com/@ericet/steemitsct-t2nc96tr0x)
