
---
title: 'Your Wordpress site is vulnerable due to Xmlrpc.php'
permlink: yourwordpresssiteisvulnerableduetoxmlrpcphp-apkmpwa1k7
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-10-22 15:33:54
categories:
- hacking
tags:
- hacking
- security
- teammalaysia
- technology
- wordpress
thumbnail: 'https://cdn.steemitimages.com/DQmWUzJc4mUDfps2jjaWQVwX7ZFuJ4TPiixzoVs1qLZnajL/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://cdn.steemitimages.com/DQmWUzJc4mUDfps2jjaWQVwX7ZFuJ4TPiixzoVs1qLZnajL/image.png)

Google the keyword 'xmlrpc.php', there will be a full page of search result that saying <a href="https://www.hostinger.com/tutorials/xmlrpc-wordpress">Why You Should Disable Xmlrpc.php</a>. It almost seems like having this file in a hosted Wordpress site is generally a bad idea.

<h2>What can xmlrpc.php do?</h2>

Basically, it allows all the operation that is supported in <a href="https://codex.wordpress.org/XML-RPC_WordPress_API"><strong>XML-RPC WordPress API</strong></a> to be executed provided the request have valid account credential, the username and password. To name a few, it can:

<ul>
<li>Insert new post</li>
<li>Delete post</li>
<li>Edit post</li>
<li>Add comment</li>
<li>Get any information related to the site.</li>
</ul>

So you get the idea, almost everything that one can do with a Wordpress GUI as a site owner.

![](https://cdn.steemitimages.com/DQmbcEjU8V42FZtDRz5okfv12KQGDgf28PU8Dpv3aeBDjhH/image.png)

<h2>These behaviour make xmlrpc.php worse</h2>

Type in the URL column in such format <code>https://yourwordpresssite.wordpress.com/xmlrpc.php</code> and hit Return. Likely the returned result will be <code>XML-RPC server accepts POST requests only.</code> That means the xmlrpc.php file is on and ready to be called <strong>anywhere anytime</strong> while the site is staying alive. Plus this file mostly <strong>comes installed</strong> while setting up a new Wordpress site. Hackers are just 1 step away from controlling the whole site -- getting the correct login credential. And the best part is(for hackers), they can just make a script to <strong>infinitely brute-force</strong> the username and password with no limitation of trying.

<h2>Delete the file to be safe? Don't need to be.</h2>

While deleting the xmlrpc.php away or disable it through htaccess.php file are what most people would suggest doing in order to cover this Wordpress vulnerability, it is only true that if the site owner does not wish to make use of the powerful Wordpress API like making a bot to automated posting process.

The best trick to maintain the usability of xmlrpc.php while not risking of compromising the whole is simple, <strong>rename the xmlrpc.php to another name.</strong> Any random name will do. For the best result, make it as complicated and long as your Crypto private key.

Guessing the correct name of original xmlrpc.php would take a long while for any malicious attempt and no one is really sure if xmlrpc.php is even enabled on the targeted site. Of course, for the average user who never make use of such advance feature of WordPress the best to do is probably just disable it.<br /><center><hr/><em>Posted from my blog with <a href='https://wordpress.org/plugins/steempress/'>SteemPress</a> : https://fr3eze.vornix.blog/your-wordpress-site-is-vulnerable-due-to-xmlrpc-php/</em><hr/></center>

- - -

This page is synchronized from the post: ['Your Wordpress site is vulnerable due to Xmlrpc.php'](https://steemit.com/@fr3eze/yourwordpresssiteisvulnerableduetoxmlrpcphp-apkmpwa1k7)
