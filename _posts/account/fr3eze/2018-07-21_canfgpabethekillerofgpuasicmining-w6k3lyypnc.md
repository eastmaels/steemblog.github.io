
---
title: 'Can FGPA be the killer of GPU/ASIC mining?'
permlink: canfgpabethekillerofgpuasicmining-w6k3lyypnc
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-07-21 13:52:21
categories:
- busy
tags:
- busy
- cn
- fpga
- mining
- teammalaysia
thumbnail: 'https://www.avnet.co.jp/~/media/Images/integration/maker/manufacture/xilinx/products/VCU1525_3.ashx?h=226&w=500&la=ja-JP'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<img src="https://www.avnet.co.jp/~/media/Images/integration/maker/manufacture/xilinx/products/VCU1525_3.ashx?h=226&amp;w=500&amp;la=ja-JP" alt="" /><br/>
<sub><a href="https://www.avnet.co.jp/kits/Xilinx/VCU1525.aspx">Image source</a></sub>

When we talk about mining there are two mainstream ways to do it, GPU-mining and ASIC-mining. Not long ago after I attempted the former method to get into the mining world, I learnt a great stuff about this new superstar -- FPGA (Field Programmable Gate Array).

While FGPA is not a new technology which in invented in the 1985, it was originally created for use in space, satellites and communication specialized equipment. A company called <strong>Zetheron</strong> started to customize the FPGA card for cryptocurrency mining purpose.

<h2>What is FPGA vs other mining hardware?</h2>

I had a great read of the company's detailed article about the **FPGA Mining Overview* and below are some summaries:

<ul>
<li>In term of parallelism of every processing element, CPU &lt; GPU &lt; FPGA.</li>
<li>Unlike CPU and GPU, FPGA can only be programmed at the lowest possible level which is the RTL(register transfer level) via language like Verilog and VHDL.</li>
<li><strong>Xilinx</strong> is the inventor of FPGA and still is the largest seller now.</li>
<li>The amount of internal memory inside the FPGA is a very important metric for performance.</li>
<li><strong>Bitstream</strong> is the configuration file that specifically written for a FPGA with specific purpose.</li>
<li>Non-volatile configuration is more robust against power outages which can be loaded every time miner is rebooted.</li>
<li>The rapid reconfiguration function of FPGA has the ability to allow FPGA to completely reconfigure itself in a fraction of a second, making it unbeatable by competitor like the ASIC.</li>
<li>FPGA can only mine one algorithm at a time generally.</li>
</ul>

<h2>Verdict</h2>

To me, the biggest advantage of FPGA is that it can use the equal or lesser power comsumption but produce 10~100 times the hashrate one GPU could generate, without the deady shortcoming of ASIC at all, which is the inability to mine different algorithm.

The disadvantage, however, is the price and its uncertainty of how this mining game would play out in the near future. A working <a href="https://fpga.land/">FPGA card</a> would easily cost 3k USD and I think that is quite steep for a casual miner like me to invest.

I'm certainly interested in this technology as it is a no-brainer winner comparing to the GPU in term of efficiency.

<hr />

<strong>TLDR:</strong> FPGA is the new star in mining cryptocurrency. Low power consumption, much higher hashrate and flexibility in switching algorithm.

<strong>太长没读：</strong> FPGA 是目前的挖矿神器，低电力消耗（和 GPU 一样或少过），几倍甚至百倍的算力，还可以任意切换不同的币种（要是软件支持）。绝对是目前挖矿性价比最高的方式之一。

<hr />

<a href="https://steemit.com/altcoin/@fr3eze/byteballairdroptosteemnetworkisliveagain-fv3h2oh05w" target="_blank"><img src="https://ipfs.busy.org/ipfs/QmP75LTW5b4obiSxxWF6L5DGtEhN1ssb8UE9nyPjD9Z24G" /><br/>

<h3><center><a href="https://steemit.com/altcoin/@fr3eze/byteballairdroptosteemnetworkisliveagain-fv3h2oh05w"><em>Did you get your free Byteball yet?</em></a></center></h3><br /><center><hr/><em>Posted from my blog with <a href='https://wordpress.org/plugins/steempress/'>SteemPress</a> : https://fr3eze.vornix.blog/can-fgpa-be-the-killer-of-gpu-asic-mining/</em><hr/></center>

- - -

This page is synchronized from the post: ['Can FGPA be the killer of GPU/ASIC mining?'](https://steemit.com/@fr3eze/canfgpabethekillerofgpuasicmining-w6k3lyypnc)
