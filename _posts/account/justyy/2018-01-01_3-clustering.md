
---
title: '机器学习系列之：怎么样数鸡鸡？（3）分类 Clustering'
permlink: 3-clustering
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-01 18:44:18
categories:
- cn
tags:
- cn
- busy
- cn-programming
- steemstem
- machine-learning
thumbnail: https://cdn.pixabay.com/photo/2017/09/08/19/05/a-2729781_960_720.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://cdn.pixabay.com/photo/2017/09/08/19/05/a-2729781_960_720.png)
*Image Credit: Pixabay.com*

前面讲到：
1. [机器学习系列之：怎么样数鸡？（1）](https://steemit.com/cn/@justyy/1)
2. [机器学习系列之：怎么样数鸡鸡？（2） 大津算法来计算阈值](https://steemit.com/cn/@justyy/22n995-2)

这已经是3个月前的事了，后来懒癌，加收益变少没动力，于是一直搁放着，今天突然想起，有点时间变想把这事完结了。

上次说到，通过大津算法 Otsu's Method计算出一个阀值，然后就可以把图片变成黑白的，比如白的是鸡，黑的是空气。

我们就可以遍历这张黑白图片的每个相素点：

```
/// <summary>
/// 遍历图片的每个相素点
/// </summary>
/// <param name="binImage">黑白图片</param>
private static void ClusterAllPoints(Bitmap binImage)
{
    for (int i = 0; i < binImage.Width; i++)
    {
        for (int j = 0; j < binImage.Height; j++)
        {
            if (binImage.GetPixel(i, j).ToArgb() == Color.White.ToArgb())
            {
                ClusterPoint(new Point(i, j));
            }
        }
    }
}
```

这里会用到 `ClusterPoint` 这个方法对于当前点进行分组：

```
/// <summary>
/// KNN 算法
/// </summary>
/// <param name="p">相素点</param>
private static void ClusterPoint(Point p)
{
    List<Point> chosenCluster = null;
    double votesCast = 0d;

    // 如果还没有发现任何 Clusters 也就是第一个相素点
    if (Clusters.Count == 0)
    {
        List<Point> l = new List<Point>();
        l.Add(p);
        Clusters.Add(l);
    }
    else
    {
        // 否则我们需要遍历当前所有的 类
        Clusters.ForEach(cluster =>
        {
            // 找到和这个 点在规定阀值内的所有点
            List<Point> votingPoints = cluster.FindAll(point =>
                IsCloseTo(point, p));

            // 然后需要把这些点的投票权重加起来
            double totalVotes =
                votingPoints.AsParallel().Sum(
                    aPoint => CalculateVoteOfPoint(aPoint, p));

            // 如果投票总值比当前的大，那么更新选定类别
            if (totalVotes > votesCast)
            {
                votesCast = totalVotes;
                chosenCluster = cluster;
            }
        });

        // 把这一点加到选定的类别中
        if (chosenCluster != null)
        {
            chosenCluster.Add(p);
        }
        else
        {
            // 如果找不到类别，那么新创建一个并添加该点。
            List<Point> l = new List<Point>();
            l.Add(p);
            Clusters.Add(l);
        }
    }
}
```

计算每个点的投票值，我们可以用距离来算，距离越远，那么它对当前点的投票权重就越低。

```
/// <summary>
/// 两点之间的 Euclidean 距离
/// </summary>
/// <param name="p1">第一个点</param>
/// <param name="p2">第二个点</param>
/// <returns></returns>
private static double EuclideanDistanceBetween(Point p1, Point p2)
{
    return Math.Sqrt(
        Math.Pow((p1.X - p2.X), 2) +
        Math.Pow((p1.Y - p2.Y), 2));
}

/// <summary>
/// 根据 Euclidean 距离来计算权重
/// </summary>
/// <param name="neighbour"></param>
/// <param name="candidate"></param>
/// <returns></returns>
private static double CalculateVoteOfPoint(
    Point neighbour,
    Point candidate)
{
    return 1 / EuclideanDistanceBetween(neighbour, candidate);
}
```

这样一来，我们就可以得到几个类别，不过我们需要进一步提高精度，因为有些白色的点是属于背景噪音，比如我们可以假定，小于10个相素点的类别不算鸡（可能是毛啊啥的）

```
/// <summary>
/// 去掉背景噪音
/// </summary>
/// <param name="noiseThreshold">The threshold</param>
private static void CullNoiseClusters(int noiseThreshold)
{
    Clusters.RemoveAll(cluster =>
        cluster.Count < noiseThreshold);
}
```

还有就是，有可能两个类别的中心靠得太近了，所以我们需要合并两个非常近的鸡，有可能是鸡展开翅膀。

```
/// <summary>
/// 如果中心太靠近，合并两个类
/// </summary>
private static void MergeClusters()
{
    List<List<Point>> delList = new List<List<Point>>();
    List<Point>[] c = Clusters.ToArray();
    int ptr1 = 0;
    int ptr2 = 1;

    while (ptr1 < c.Length)
    {
        while (ptr2 < c.Length)
        {
            List<Point> l1 = c[ptr1];
            List<Point> l2 = c[ptr2];
            Point ctr1 = GetClusterCentrePoint(l1);
            Point ctr2 = GetClusterCentrePoint(l2);
            if (EuclideanDistanceBetween(ctr1, ctr2) < MergeThreshold)
            {
                l1.AddRange(l2);
                delList.Add(l2);
            }
            ptr2++;
        }
        ptr1++;
        ptr2 = ptr1 + 1;
    }
    delList.ForEach(list => Clusters.Remove(list));
}
```

类取中心的方法很简单：

```
/// <summary>
/// 返回每个鸡类的中心点
/// </summary>
/// <param name="cluster">类别</param>
/// <returns>The centre point</returns>
private static Point GetClusterCentrePoint(List<Point> cluster)
{
    return new Point(
        (int)cluster.AsParallel().Average(p => p.X),
        (int)cluster.AsParallel().Average(p => p.Y));
}
```

这样，数鸡就完成了：

```
// 数了多少只？
Console.WriteLine(
    "\nI 发现 {0} 只鸡 ",
    Clusters.Count);
```


-----------------

<ul>
<li>机器学习系列之：<a href="https://justyy.com/archives/5387">怎么样数鸡？</a></li>
<li>机器学习系列之：怎么样数鸡鸡？<a href="https://justyy.com/archives/5430">大津算法来计算阈值</a></li>
<li>机器学习系列之：怎么样数鸡鸡？<a href="https://justyy.com/archives/5784">分类 Clustering</a></li>
</ul>

> AD 一波，最近SBD涨到8块钱了，SBD比SP值钱多了，所以你把钱存在[YY银行](https://steemit.com/cn-stats/@justyy/daily-cn-updates-cnyy2017-12-15)是很划算的，YY银行吃的是草（借的SP），挤的是奶啊（值钱的SBD）， 每日发 SBD利息，从不间断，提前祝YY股东们圣诞快乐，新年快乐，股东们都在2018里赚大钱，实现[财务自由](https://justyy.com/archives/3954)啊！

通过 [SP 代理工具](https://helloacm.com/tools/steemit/delegate-form/?delegatee=justyy) 成为 YY银行股东，好处多多。只要代理大于10 SP给 @justyy 即可自动成为YY股东。
> [SteemIt 教程、机器人、在线工具和API接口](https://helloacm.com/tools/steemit-tools/)
> [SteemIt Tutorials, Robots, Tools and APIs](https://helloacm.com/tools/steemit/)

# 近期帖子
- [【活动】 晒晒你的18岁 What did you look like when you were 18?](https://steemit.com/cn/@justyy/18-what-did-you-look-like-when-you-were-18)
- [Daily China 来了！](https://steemit.com/cn/@justyy/daily-china)
- [我在STEEM发文的动力](https://steemit.com/busy/@justyy/5qling-steem)
- [今天不小心给有些股东发了两次利息，就算YY股东的福利。](https://steemit.com/busy/@justyy/7lfmag)
- [SteemSQL 教程 - 我花了800多 SBD (7000多美元)买赞。](https://steemit.com/busy/@justyy/steemsql-800-sbd-7000-cny-steemsql-tutorial-i-have-spent-800-sbd-7000-usd-buying-votes)
- [愉快的 Boxing Day | Happy Boxing Day (Photography)](https://steemit.com/cn/@justyy/boxing-day)
- [2017 年，我的热门帖子 My Top Posts in 2017!](https://steemit.com/busy/@justyy/2017-my-top-posts-in-2017)
- [在英国的第13个圣诞节 Merry Christmas 2017! | 月旦评](https://steemit.com/cn/@justyy/13-merry-christmas-2017)

> 加入公众号 **justyyuk** 即可以实时查询 BTC, SBD, STEEM, YOYOW, LTC, ETH 等虚拟货币的价格.
- [公众号支持 实时查询 YOYOW, STEEM和SBD价格啦!](https://justyy.com/archives/5657)
- [公众号支持 实时查询 LTC, BTC, 和ETH价格啦!](https://justyy.com/archives/5653)
- [公众号支持 实时查询 BTS, BCH和BCG的价格啦!](https://justyy.com/archives/5685)
![](https://justyy.com/justyy-wx2.jpg)

- - -

This page is synchronized from the post: [机器学习系列之：怎么样数鸡鸡？（3）分类 Clustering](https://steemit.com/@justyy/3-clustering)
