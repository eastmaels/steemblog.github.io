
---
title: 'How to stop and restart Crontab service when something is wrong'
permlink: howtostopandrestartcrontabservicewhensomethingiswrong-t5z17ips72
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-10-28 04:14:12
categories:
- computer
tags:
- computer
- linux
- programming
- sysadmin
- technology
thumbnail: 'https://cdn.steemitimages.com/DQmNykCPbrfyzWcSyXazRv9g13cGL5osd3W5rgBM9uGWFA2/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<img src="https://cdn.steemitimages.com/DQmNykCPbrfyzWcSyXazRv9g13cGL5osd3W5rgBM9uGWFA2/image.png" alt="" /><br/>

After I've completed my first working Python script, the last step was to automate the script execution in my Ubuntu server via <strong>crontab</strong>. As a Unix sysadmin I thought this was a piece of cake but I made a noob error somehow.

<h2>Used * in the minute column of entry</h2>

<code>* 18 * * *      /home/ubuntu/miniconda3/bin/python /home/ubuntu/vornix_posting_bot.py &gt;&gt; /home/ubuntu/logs/vornix.log 2&gt;&amp;1</code>

This was what I added in the crontab file with simple command just to execute the script and output errors into a log fine. The execution time was ideally plan to be at <strong>1800 every day</strong>. Note that the first <code>*</code> here was representing the minute.

Luckily I did not put the script into produection straight away as the next day I found out crontab was <strong>executing the command once every single minute.</strong>

<img src="https://cdn.steemitimages.com/DQmNQHSSmJLUXBGGunCNLthCzThZ19oN4RRPKLD7rtAek5w/MobaXterm_2018-10-27_18-25-20.png" alt="MobaXterm_2018-10-27_18-25-20.png" /><br/>

<h2>Solutions</h2>

Huge mistake and here is what I have done to fix it:
- Apparently we need to fix the crontab syntax which is replacing the <code>*</code> with <code>0</code>.

<code>0 18 * * *      /home/ubuntu/miniconda3/bin/python /home/ubuntu/vornix_posting_bot.py &gt;&gt; /home/ubuntu/logs/vornix.log 2&gt;&amp;1</code>

<ul>
<li>Secondly, changing the crontab file itself is not enough to stop crontab service to keep executing the old command which is repeating every minute and I have no idea when it will be ended. Restart the <code>cron</code> service by <code>service cron restart</code> in Ubuntu OS and check the status with <code>service cron status</code>. The previous job should be ended now.</li>
</ul><br /><center><hr/><em>Posted from my blog with <a href='https://wordpress.org/plugins/steempress/'>SteemPress</a> : https://fr3eze.vornix.blog/how-to-stop-and-restart-crontab-service-when-something-is-wrong/</em><hr/></center>

- - -

This page is synchronized from the post: ['How to stop and restart Crontab service when something is wrong'](https://steemit.com/@fr3eze/howtostopandrestartcrontabservicewhensomethingiswrong-t5z17ips72)
