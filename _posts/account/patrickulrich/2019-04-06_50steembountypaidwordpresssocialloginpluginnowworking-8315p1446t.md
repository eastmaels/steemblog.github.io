
---
title: '50 Steem Bounty Paid / WordPress Social Login Plugin Now Working'
permlink: 50steembountypaidwordpresssocialloginpluginnowworking-8315p1446t
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-04-06 09:26:51
categories:
- github
tags:
- github
- steem
- steemconnect
- wordpress
thumbnail: None
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center>https://www.patrickulrich.com/wp-content/uploads/2019/04/WordPress-logotype-simplified.png</center> <br/><p>It only took a few days for someone to step up to claim <a href="https://steemit.com/wordpress/@patrickulrich/50-steem-bounty-wordpress-plugin-for-steem-oauth">my bounty</a> for fixing the WP Social Login Steemconnect integration. For some reason it seems the addresses changed for how it could interact with SteemConnect so things stopped working properly. Fortunately @chansetheguy stepped up to find the solution for WordPress users everywhere!</p>
<p>It turns out the recent merge for SteemConnect wasn't everything that WP Social Login needed changed. Instead the plugin was still communicating with the wrong subdomain for the SteemConnect service. What chanse pointed out was that the following code needed to replace the former lines:</p>
<pre class="wp-block-code"><code>// Provider api end-points
$this->api->api_base_url  = "https://steemconnect.com/api/";
$this->api->authorize_url = "https://v2.steemconnect.com/oauth2/authorize";
$this->api->token_url     = "https://steemconnect.com/api/oauth2/token";</code></pre>
<p>After a quick download from Github I gave the plugin a spin and it did indeed work! The site properly transferred off to SteemConnect, auth the keys and sends the user back to your Wordpress redirect. Perfection!</p>
<h2>How can I take this for a spin?</h2>
<p>First you're going to need an installation of Wordpress to install it on to. You can find many sites that will host a Wordpress install but my personal favorite one-click installation is <a href="https://www.vultr.com/?ref=7829819">Vultr</a>. Vultr has a <a href="https://www.vultr.com/?ref=7829819">current promotion</a> where if you sign up and deposit $10 then you'll get a $10 credit as well. Not a bad way to test this out for a few months since you can get by with a $5/month Wordpress blog account.</p>
<p>After you're all set and ready to go then you'll want to head over to the project Github and download a copy of the plugin. I've not placed a PR to @guix77's original project but you can find a working copy here:</p>
<p><a href="https://github.com/patrickulrich/wordpress-social-login/tree/steemconnect">https://github.com/patrickulrich/wordpress-social-login/tree/steemconnect</a></p>
<p>After that you'll need to create a Steem OAuth app if you haven't already. This is a pretty simple process and just requires a Steem account to manage the sign in. Once you have an account you'd like to use just head over to the link below and sign in with the new account's keys to change profile type to app.</p>
<p><a href="https://app.steemconnect.com/sign/profile-update?type=app">https://app.steemconnect.com/sign/profile-update?type=app</a></p>
<p>Now that you're new account is set to be an app you need to define your apps settings. This is handled through SteemConnect as well so it won't be hard to complete. Just head over to <a href="https://app.steemconnect.com/apps/@youraccount/edit">https://app.steemconnect.com/apps/@youraccount/edit</a> and fill out the spaces on it. [Note: Replace "@youraccount" with the name of your new Steem app account!]</p>
<p>This is the most technical part of the setup. You'll need to install Node.js to be able to create a hash of a secret key for your app. Once you have Node installed you'll want to create a new .json file called GENKEY.js. In this .json file paste the following code:</p>
<pre class="wp-block-code"><code>const crypto = require('crypto');

const secret = 'YOURSECRETKEY';
const secretHash = crypto.createHash('sha256').update(secret).digest('hex');

console.log('Secret hash', secretHash);</code></pre>
<p>Now replace 'YOURSECRETKEY' with what you want your apps new secret signing key to be. Save the file and open a command prompt to the folder you saved your .json file in and run "node GENKEY.js" in your command prompt. This will output a hash of your secret signing key.</p>
<p>Now that you have your hash of the apps' signing key it's time to save that to the Steem blockchain. Using https://app.steemconnect.com/sign/profile-update?account=youraccount&amp;secret=hashofyoursecretkey you'll replace 'youraccount' with the app account's name and 'hashofyoursecretkey' with hash we just made from running GENKEY.</p>
<p>Now you're all set to boot up! Head into your Wordpress plugin manager and install the plugin that you downloaded above. Head into Settings &gt; WP Social Login and find the Steem logo on the right hand side of sites. This will add a new set of authorization to the bottom of the page. Fill in your user ID plus the 'YOURSECRETKEY' that your ran through GENKEY to create the hash and you'll be all set.</p>
<p>It was that simple!</p>
<h2>Big Thanks!</h2>
<p>I need to give a huge thank you to a lot of people for making this happen! First and foremost thank you to @guix77 for the initial project and @chansetheguy for bringing me the code needed to update. While the bounty was up I had a number of great Steemians check in and see what they thought might be causing issues. Each of your contributions helped put the pie together so thank you to each one of you that contributed an idea towards this. </p>
<p>Finally thank you to @qwoyn &amp; @steempytutorials for creating guides that made this possible for me. Steempytutorials has an excellent guide for setting up this plugin. While qwoyn can be credited for creating a SteemConnect app guide that most of the above writing is based off of. This was a tremendous help in getting me setup and I thank you for the effort you put in!</p>
 <br /><center><hr/><em>Posted from my blog with <a href='https://wordpress.org/plugins/steempress/'>SteemPress</a> : https://www.patrickulrich.com/2019/04/06/50-steem-bounty-paid-wordpress-social-login-plugin-now-working/ </em><hr/></center> 

- - -

This page is synchronized from the post: ['50 Steem Bounty Paid / WordPress Social Login Plugin Now Working'](https://steemit.com/@patrickulrich/50steembountypaidwordpresssocialloginpluginnowworking-8315p1446t)
