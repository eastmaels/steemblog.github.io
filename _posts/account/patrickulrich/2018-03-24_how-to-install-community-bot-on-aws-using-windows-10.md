
---
title: 'How To Install Community Bot on AWS using Windows 10'
permlink: how-to-install-community-bot-on-aws-using-windows-10
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-24 16:06:36
categories:
- utopian-io
tags:
- utopian-io
- steemdev
- bots
- communitybot
- howto
thumbnail: 'https://res.cloudinary.com/hpiynhbhq/image/upload/v1521899790/euawjy36gjpysry1s5dg.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


#### What Will I Learn?
In this guide you will learn how to deploy an instance of @yabapmatt's Community Bot tool on an AWS EC2 Instance. This will enable your community to pool resources on the Steem blockchain and use one account to upvote everyone's post, who is a member of the group, at a described rate. For a more detailed write up of the features of Community Bot check out @yabapmatt's release post [here](https://steemit.com/utopian-io/@yabapmatt/community-bot-a-voting-bot-for-steem-communities).

#### Requirements
For this tutorial you will need the following accounts to get started:

- [Steemit Account](https://www.steemit.com/)
- [Amazon Web Services Account](https://aws.amazon.com/) with a Ubuntu Server 16.04 LTS (HVM) instance running

#### Difficulty
Either choose between the following options:

- Intermediate

#### Prerequisites
- Download & Install [PuTTY 0.70](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)
- Convert your Amazon Key pair from a .pem file to a .ppk file. You can read [this guide](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/putty.html), starting at Converting Your Private Key Using PuTTYgen, to learn how to easily convert your keys.

#### Notes
As we go through I will be providing code commands in the form of 

``` 
$ This is what code commands will look like
```
If you see multiple lines beginning with $ then run each line as it's own command. 
``` 
$ This is what code commands will look like
$ This is what code commands will look like
```
Also if you come across a command that contains [brackets] then replace the bracketed information with your own.

#### Getting Started
1.) Find your server's IP address from Amazon's EC2 Dashboard and write it down.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1521899790/euawjy36gjpysry1s5dg.png)
You will be looking for Public DNS (IPv4) which for this picture would be ec2-52-37-160-82.us-west-2.compute.amazonaws.com.

2.) Open PuTTY and configure Host Name using:
``` 
ubuntu@[AWS Server Public DNS (IPv4)]
```
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1521900962/dvu0sfzrakyqowsyqeoo.png)

3.) Click the expand beside SSH then click Auth. Now using the 'Browse' find your .ppk file you converted from your .pem.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1521900434/ndjtcdkwaqedabuu1uwe.png)

4.) You can now click Open on PuTTY to launch a SSH into your server. Note: I recommend going back to the top level 'Session', on the left side, before hitting 'Open'. This will allow you to create a saved session first. Simply type a name for the session under 'Saved Session' and hit the 'Save' button. After this you won't need to type in your PuTTY host or auth files as the session details can be loaded from your saved session.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1521900938/jic5odyps50zrlhxd71x.png)

5.) Your first run will display an alert detailing that you've not yet cached your server's keys. Simply select 'Yes'.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1521900853/kdjegatvguhqblupacjy.png)

You've successfully SSH into your AWS server. Now it's time to update your instance to ensure it has the latest code needed to run your bot.
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1521901095/vds2lvjk8qklkirlfdmb.png)

6.) Software Update<br>
Run the following:
``` 
$ sudo apt-get update
$ sudo apt-get upgrade -y
```
You may get a prompt saying there is differing versions. I recommend selecting 'keep the local version currently installed'.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1521902454/romxzgct9fqghwx2blsz.png)

7.) Install Nodejs<br>
Run the following:
``` 
$ curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
$ sudo apt-get install -y nodejs
$ node -v
```
The final command should report back that you are now on Node Version 9.9.0 or higher.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1521902670/ffhei05h1be4zhmf3qeq.png)

8.) Install NPM<br>
Run the following:
``` 
$ sudo npm install npm@latest -g
$ sudo npm -v
```
The final command should report that you are now on NPM Version 5.8.0 or higher.

9.) Install PM2<br>
Run the following:
``` 
$ sudo npm install pm2@latest -g
$ sudo pm2 -v
```
The final command should report that you are now on PM2 Version 2.10.1 or higher.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1521903574/wukxt0mg32tjqeiu2tcz.png)

10.) Install Community Bot<br>
Run the following:
``` 
$ sudo git clone https://github.com/MattyIce/communitybot.git
$ cd communitybot
$ sudo npm install
$ sudo npm install steem
$ sudo mv config-example.json config.json
```
![](https://steemitimages.com/DQmVnVvuWBLXxWGn52BTFDWe4BW3Zqn3sMCyruYgA8vL5vD/image.png)

You've now successfully installed Community Bot to your AWS. Now it's time for us to configure your installation.

11.) Configure your config.json file<br>
Run the following:
``` 
$ sudo vi config.json
```

![](https://steemitimages.com/DQmaVYNTZnGUHEk33BwTKZHRLsHrn6hyaqoeqnfN1QEMJLW/image.png)

Using your cursor, update your config.json file with your Steem user's information. Most items are fairly self explanatory for what they need but for a bit more detail you can visit the [communitybot README](https://github.com/MattyIce/communitybot).

Once you've updated your bots configuration to your liking press the esc key. After pressing the esc key, enter the following:

```
:wq
```
<br>
12.) You're now ready to launch your bot.
Run the following:

``` 
$ nodejs communitybot.js
```
<br>
13.) You've done it! 

![](https://steemitimages.com/DQmRbjvfhw6cuLM5pPZAYwAB2igCGWD8ZK5M3wrWizpJKC8/image.png)

##### Extra credit:
Right now CommunityBot is running directly in your PuTTY window. This isn't the ideal way to operate as you would need to keep PuTTY open and connected at all time so the bot could continue working. To improve this we can move this process to PM2 so that communitybot will run directly from the server.

To get started close your running PuTTY window and open a new one that is connected to your server. Now run the following:

``` 
$ cd ~/communitybot
$ pm2 start communitybot.js
```
<br>
![](https://steemitimages.com/DQmYr9hgLY51trpHzuoj3rXHdhFdj8LyqsWSqGCcDE2HaPV/image.png)
You're now completely set up to run Community Bot from your AWS account. If you ever want to check the status of your PM2 instance run:<br>

``` 
$ pm2 status
```

#### Disclaimer
This tutorial is written by a user of @yabapmatt's tools. I have no relation to the project outside of using it's tools myself. As I didn't write the code I can not guarantee it's full functions but have been using it myself personally. Since you will be giving the bot your Steem account's Posting, Active and Memo keys you will be entrusting it with lots of responsibility. I recommend learning more on how to properly secure and harden your virtual server's security. I take no responsibility in the event anyone loses access to their funds.

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@patrickulrich/how-to-install-community-bot-on-aws-using-windows-10">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['How To Install Community Bot on AWS using Windows 10'](https://steemit.com/@patrickulrich/how-to-install-community-bot-on-aws-using-windows-10)
