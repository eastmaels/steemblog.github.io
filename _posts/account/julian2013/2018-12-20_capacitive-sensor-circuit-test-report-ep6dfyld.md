
---
title: "Capacitive sensor Circuit test report | 电容传感器线路测试报告"
permlink: capacitive-sensor-circuit-test-report-ep6dfyld
catalog: true
toc_nav_num: true
toc: true
date: 2018-12-20 03:06:00
categories:
- cn-stem
tags:
- cn-stem
- steemstem
- cn
- busy
- cn-reader
- partiko
thumbnail: https://ipfs.busy.org/ipfs/QmRLSa5xGMDtogkk4Z8N4thKWaRwG3QYvMtkGH5UQ6N6fZ
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


昨天在村里讨论时，说到在公司做的东西，未经允许应该不能够外传，否则就是违法了。想想还真是这么个理。今后要注意，要发只能发一些专业通用知识讨论，不涉及公司项目的内容，和大家一起交流。

翻看了一下自己的学习资料，发现大学的时候做过一个测试，还是挺有意思的，也是挺实用的，发出来给大家欣赏一下。

这里面讨论了使用一些不同的IC，不同的线路，用来测试电容的大小，其耗电量，精度，稳定度，电源抑制性，温漂等的表现。那时为了锻炼自己，还用的全英文，真是佩服年轻时的自己啊！！！

就是不知道为什么当初的测试，漏了“图4”，挺奇怪的。

***

# Capacitive sensor Circuit test report

## Intention: 
This test try to acquire the parameters of test circuits(oscillating circuit), as power consumption, long-term stability (the relation between Temperature, Supply Voltage), and Sensitivity from 0% to 100% RH (the capacitance alter range of humidity sensor is 40pF, 200pF~240 pF).

## Test circuits: 
figure1, figure2 and figure5 has a duplicate copy, named figure1′,  figure2′, figure5′. The duplicate copy is used for consistency check.

![image](https://ipfs.busy.org/ipfs/QmRLSa5xGMDtogkk4Z8N4thKWaRwG3QYvMtkGH5UQ6N6fZ)

![image](https://ipfs.busy.org/ipfs/Qme2nVmAjPhwmdJrc5JxdKnjuyXk7KxubAZRyt5UwT6Fqs)

![image](https://ipfs.busy.org/ipfs/QmZFNEvE8MWVcqoEiuAQHFQ4EQpenYjsH6x34MV3CpmWAT)

![image](https://ipfs.busy.org/ipfs/QmRPXDdHHnKg5os4oZXe3X8zGWnGtahCeynSoSxLz3vpgU)
*Note: Tolerance of resistors tolerance is 5%, temp. coeff. is ±200ppm; Tolerance of capacitors is 5%.*

***

## The process of test: 
1.	Power Supply Current range (Vcc 2.70V~3.30V)  Unit: mA
![image](https://ipfs.busy.org/ipfs/QmYUNDTdM7sxFj8g3E3KzLtPhaL96zhbUiUyuUFUmWCPbm)

2.	Capacitive sensor = 246 pF, the follow table is the relation between Power Supply Voltage and output frequency. Ambient temperature is 23.3℃
![image](https://ipfs.busy.org/ipfs/Qmc8VXvQRHVvmWSAXHWYUXkgVj5ePvJgpQi4N3a7r5koxk)

![image](https://ipfs.busy.org/ipfs/QmTmendufSbwAqMgdnkJR17kFjz3nnhKBPBfDhuriBYqf5)

![image](https://ipfs.busy.org/ipfs/QmP7mm42JeDRpwYm3t3TR4vj8f5QuJLNs6JwMpUUmEtx6n)

![image](https://ipfs.busy.org/ipfs/QmWEeKGk6VtbviTHfoegx6KVfuN3t4tD3hgzAE8mzLfiM9)

3.Power Supply Voltage = 3V, the value of capacitive sensor is modified(180pF~246 pF). ambient temperature is 23.7℃
![image](https://ipfs.busy.org/ipfs/QmRM729jYQwnMg8d6VEB7BennqebQhuNcfSDKmowXpvzNB)

![image](https://ipfs.busy.org/ipfs/QmdpV6iqnZxYY4tscACoKkBWsyKwfzwg2TRPTjc3V4DaJA)

![image](https://ipfs.busy.org/ipfs/QmUYugN1TNzrWQTLuTZ1cohsHPRWQZ3P3dXKD1BhMBbVb7)

![image](https://ipfs.busy.org/ipfs/Qma2JRL7zvm4rxAK1r6Nu3AHbUmLPAdgSVUmcdFQqczoG9)

4.Temperature stability test. 
a)	Power Supply Voltage = 3V, the value of capacitive sensor is 246pF. 
![image](https://ipfs.busy.org/ipfs/QmXdE2ctaCF39yPSB82aSFEfa9bR3uW5TFR5fbjk14xnSM)
*Note: figue1,figue1′R=470Ω. figue2′ the same as figue2.*

b)	Power Supply Voltage = 2.84V, the value of capacitive sensor is 246pF. 
![image](https://ipfs.busy.org/ipfs/QmSMgQYiqSVbUWu8Mt81BeaXhw5yyjWWuth2c75fYfL43C)
Δf/Δfrange	5.72%	12.49%	1.78%	2.20%	3.98%	3.18%	2.92%
*Note: figue1,figue1′R=0Ω. figue2′ the same as appendix figueA.*

***

## Analyze: 
With the above test:
**About figure1**, 
a)	when R=0Ω,the temperature stability is better than R=470Ω, because when R=470Ω, it combine the stray capacitance and Input Capacitance of HC14 become a charge/discharge part, the capacitance is master factor that affect output frequency. 

b)	VT+ and VT- of 74HC14 as follow figure, the alter range are very too large. 
![image](https://ipfs.busy.org/ipfs/QmeEcBQ8rKU8EQ4FtcBgnPtYESHNx1g5qL5QvLm7virbU2)

the output frequency dependent the hysteresis. Follow are test data in different frequency: 
![image](https://ipfs.busy.org/ipfs/QmUJeXnAwG9KcS8ZT2ZSDsaLzk9A5tgotAyqWYDQsDiqW7)
We can find the different output frequency cannot improve the precision. 

**About figure2,**
a)	the offset voltage of LM393 is master factor that affect the precision of output frequency. So we should increase the hysteresis. This increase reduces affect of the offset voltage. The test data as follow table shows:
![image](https://ipfs.busy.org/ipfs/QmPpoEDzf4ipV7Hm7w7KqATgcumzfbidkqwSXsMc6wCzZV)

**About figure3,**
Too high frequency, not easy to measure, give up。

**About figure5**,
the lower frequency can improve the temperature stability. The test data as table shows.
![image](https://ipfs.busy.org/ipfs/Qmdgs1SafBv9uGAZoooMgVKVHQWhui4aaTBi3MoJXAc3Yw)

## Appendix: 
![image](https://ipfs.busy.org/ipfs/QmdvyoLtFC1hZ8pCh8HVXo3QU1JkaQEJfDvHVw1uuJvF1f)
*Note: Tolerance of resistors tolerance is 5%, temp. coeff. is ±200ppm; Tolerance of capacitors is 5%.*

**Long-term stability test. Power Supply Voltage = 3.00V**
![image](https://ipfs.busy.org/ipfs/QmQeXgzjgJwj2FhHtqCdaWSAszoB8EJwVRJ98safT3nysH)

***
这就是当初做的测试，综合所有因素来看，figure5是最优选择。

在我工作以后，类似的测试也做过不少，测试的方法大概和这个都一样，所以说，大学里面学到的知识和做事方法，对我的工作帮助还是很大的。

***
希望喜欢我文字的人，去看看这个吧，说说对我的看法，请我吃星星![5 cred stars](http://bit.ly/5credstars)，谢谢啦~
[我的 @ReviewMe 凭证留言板!](https://steemit.com/cn/@julian2013/reviewme-yoursteemitname)

Posted using [Partiko iOS](https://steemit.com/@partiko-ios)

- - -

This page is synchronized from the post: [Capacitive sensor Circuit test report | 电容传感器线路测试报告](https://steemit.com/@julian2013/capacitive-sensor-circuit-test-report-ep6dfyld)
