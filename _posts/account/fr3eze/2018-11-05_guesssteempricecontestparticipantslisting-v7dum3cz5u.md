
---
title: '"Guess Steem Price" Contest Participant''s Listing'
permlink: guesssteempricecontestparticipantslisting-v7dum3cz5u
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-05 10:54:09
categories:
- contest
tags:
- contest
- giveaway
- steem
- steemit
- teammalaysia
thumbnail: 'https://cdn.steemitimages.com/DQmWKPsRiS898BP7ka1BzGbQQYc6yAdsYMvU55Gp1gEav6H/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<img src="https://cdn.steemitimages.com/DQmWKPsRiS898BP7ka1BzGbQQYc6yAdsYMvU55Gp1gEav6H/image.png" alt="" /><br/>
5 days ago I started this contest mainly for celebrating my <a href="https://steemit.com/steem/@fr3eze/i-m-a-dolphin-finally-giveaway-30-steem-as-celebration-or"><em>Dolphin status upgrade</em></a> and the response is rather unexpectedly overwhelming. There are a total of <strong>105 entries</strong> for the price prediction including some suspicious spamming accounts which I surely will be excluded in the final prize calculation.

Never in a post before I was this busy replying and acknowledging all the predictions. I was secretly glad that I decided to force the 6 decimal places of price format or else there would be a lot of the same guessing.

<h2>Final list of entries</h2>

Although the result is already available on the CMC it would still take me a while to tabulate and filter all the information in it.

I used this SQL query with the help of Steemsql to generate data below:

<pre><code>SELECT
     last_update, author, body
FROM
    Comments (NOLOCK)
WHERE
    parent_permlink LIKE 'i-m-a-dolphin-finally-giveaway-30-steem-as-celebration-or'  and
    last_update &lt; '11/2/2018 11:59:00 PM' 
</code></pre>

<table>
<thead>
<tr>
  <th align="center"><strong>Commentators</strong></th>
  <th align="center"><strong>Filtered comments(Prediction)</strong></th>
</tr>
</thead>
<tbody>
<tr>
  <td align="center">kapteeni</td>
  <td align="center">$0.81</td>
</tr>
<tr>
  <td align="center">catwomanteresa</td>
  <td align="center">0.83227</td>
</tr>
<tr>
  <td align="center">victorialuxx</td>
  <td align="center">0.92423</td>
</tr>
<tr>
  <td align="center">madushanka</td>
  <td align="center">0.809231</td>
</tr>
<tr>
  <td align="center">tonygreene113</td>
  <td align="center">My prediction: $0.796357</td>
</tr>
<tr>
  <td align="center">alexaventuria</td>
  <td align="center">my predicition: 0,874271</td>
</tr>
<tr>
  <td align="center">deanliu</td>
  <td align="center">賀！$0.864208</td>
</tr>
<tr>
  <td align="center">amar15</td>
  <td align="center">0.80498</td>
</tr>
<tr>
  <td align="center">shine.wong</td>
  <td align="center">0.911111</td>
</tr>
<tr>
  <td align="center">lavanyalakshman</td>
  <td align="center">My guess 0.8564</td>
</tr>
<tr>
  <td align="center">divine-sound</td>
  <td align="center"><b>0.797002</b></td>
</tr>
<tr>
  <td align="center">sapwood</td>
  <td align="center">0.823601</td>
</tr>
<tr>
  <td align="center">groynes</td>
  <td align="center">0.841104</td>
</tr>
<tr>
  <td align="center">sthitaprajna</td>
  <td align="center">0.827263</td>
</tr>
<tr>
  <td align="center">iambrave</td>
  <td align="center">0.836945</td>
</tr>
<tr>
  <td align="center">moncia90</td>
  <td align="center">0.775862</td>
</tr>
<tr>
  <td align="center">prince121</td>
  <td align="center">0.807926</td>
</tr>
<tr>
  <td align="center">khussan</td>
  <td align="center">0.78</td>
</tr>
<tr>
  <td align="center">dernierdiaz</td>
  <td align="center">0.795684</td>
</tr>
<tr>
  <td align="center">hasbydiaz</td>
  <td align="center">0.801569</td>
</tr>
<tr>
  <td align="center">philipkavan</td>
  <td align="center">My prediction is 0.775861</td>
</tr>
<tr>
  <td align="center">ragnarhewins90</td>
  <td align="center">$0.73</td>
</tr>
<tr>
  <td align="center">fundurian</td>
  <td align="center">my guess would be 0.788888</td>
</tr>
<tr>
  <td align="center">further34</td>
  <td align="center">$0.81</td>
</tr>
<tr>
  <td align="center">mashiliyanage</td>
  <td align="center">0.876351</td>
</tr>
<tr>
  <td align="center">yanyanbebe</td>
  <td align="center">0.815724</td>
</tr>
<tr>
  <td align="center">minloulou</td>
  <td align="center">$0.79</td>
</tr>
<tr>
  <td align="center">bboyady</td>
  <td align="center">0.791169</td>
</tr>
<tr>
  <td align="center">lizachong</td>
  <td align="center">0.791105</td>
</tr>
<tr>
  <td align="center">darioska23</td>
  <td align="center">0.765348</td>
</tr>
<tr>
  <td align="center">deux77</td>
  <td align="center">0.778453</td>
</tr>
<tr>
  <td align="center">random1</td>
  <td align="center">0.807478</td>
</tr>
<tr>
  <td align="center">phoenixx7</td>
  <td align="center">0.814578</td>
</tr>
<tr>
  <td align="center">vohon17</td>
  <td align="center">0.773643</td>
</tr>
<tr>
  <td align="center">yellowbird</td>
  <td align="center">0.801</td>
</tr>
<tr>
  <td align="center">fernax77</td>
  <td align="center">0.768546</td>
</tr>
<tr>
  <td align="center">azorahai77</td>
  <td align="center">Mi prediction: 0.789476</td>
</tr>
<tr>
  <td align="center">cryptocurrencyhk</td>
  <td align="center">0.769852</td>
</tr>
<tr>
  <td align="center">jessie901220</td>
  <td align="center">$0.80</td>
</tr>
<tr>
  <td align="center">chinwei89</td>
  <td align="center">$0.89</td>
</tr>
<tr>
  <td align="center">chamudiliyanage</td>
  <td align="center">$0.81</td>
</tr>
<tr>
  <td align="center">knowledge-seeker</td>
  <td align="center">I will guess $0.772214</td>
</tr>
<tr>
  <td align="center">weisheng167388</td>
  <td align="center">$0.793434  恭喜！</td>
</tr>
<tr>
  <td align="center">kimxinfo</td>
  <td align="center">0.81223</td>
</tr>
<tr>
  <td align="center">htliao</td>
  <td align="center">Congratulations. My prediction: $0.932</td>
</tr>
<tr>
  <td align="center">ygrj</td>
  <td align="center">$0.84</td>
</tr>
<tr>
  <td align="center">aellly</td>
  <td align="center">0.792566</td>
</tr>
<tr>
  <td align="center">angelina6688</td>
  <td align="center">0.802546</td>
</tr>
<tr>
  <td align="center">starrouge</td>
  <td align="center">Congrat! My guess is 0.812560</td>
</tr>
<tr>
  <td align="center">imohtal-sensei</td>
  <td align="center">0.856433</td>
</tr>
<tr>
  <td align="center">suchy</td>
  <td align="center">0.818657 my prediction :) </td>
</tr>
<tr>
  <td align="center">artsymelanie</td>
  <td align="center">$0.79</td>
</tr>
<tr>
  <td align="center">nsab</td>
  <td align="center">0.766669</td>
</tr>
<tr>
  <td align="center">travelgirl</td>
  <td align="center">0.821153</td>
</tr>
<tr>
  <td align="center">hmayak</td>
  <td align="center">$0.91</td>
</tr>
<tr>
  <td align="center">kpreddy</td>
  <td align="center">$0.81</td>
</tr>
<tr>
  <td align="center">crypto-wisdom</td>
  <td align="center">0.798881</td>
</tr>
<tr>
  <td align="center">shivohum2015</td>
  <td align="center">0.822015</td>
</tr>
<tr>
  <td align="center">jrvacation</td>
  <td align="center">$0.77</td>
</tr>
<tr>
  <td align="center">obulunmaz</td>
  <td align="center">0,759106</td>
</tr>
<tr>
  <td align="center">slientstorm</td>
  <td align="center">$0.86</td>
</tr>
<tr>
  <td align="center">minhaz007</td>
  <td align="center">0.852375 USD</td>
</tr>
<tr>
  <td align="center">sunai</td>
  <td align="center">$0.84</td>
</tr>
<tr>
  <td align="center">ytr</td>
  <td align="center">$0.82</td>
</tr>
<tr>
  <td align="center">kusheng</td>
  <td align="center">$0.76</td>
</tr>
<tr>
  <td align="center">melodyzhou</td>
  <td align="center">$0.80</td>
</tr>
<tr>
  <td align="center">buo</td>
  <td align="center">$0.81</td>
</tr>
<tr>
  <td align="center">licun</td>
  <td align="center">$0.77</td>
</tr>
<tr>
  <td align="center">china.mobile</td>
  <td align="center">$0.78</td>
</tr>
<tr>
  <td align="center">cn-times</td>
  <td align="center">$0.79</td>
</tr>
<tr>
  <td align="center">liuzg</td>
  <td align="center">$0.80</td>
</tr>
<tr>
  <td align="center">xiaoguai</td>
  <td align="center">0.754628</td>
</tr>
<tr>
  <td align="center">muhammadnuman786</td>
  <td align="center">0.786113 USD</td>
</tr>
<tr>
  <td align="center">morningshine</td>
  <td align="center">$0.80</td>
</tr>
<tr>
  <td align="center">wilhb81</td>
  <td align="center">0.855555</td>
</tr>
<tr>
  <td align="center">zy-sb</td>
  <td align="center">我猜0.822222</td>
</tr>
<tr>
  <td align="center">cherryzz</td>
  <td align="center">$0.82</td>
</tr>
<tr>
  <td align="center">tanlikming</td>
  <td align="center">我猜是0.912345</td>
</tr>
<tr>
  <td align="center">kelvinzhang</td>
  <td align="center">$0.82</td>
</tr>
<tr>
  <td align="center">teamcn-shop</td>
  <td align="center">$0.80</td>
</tr>
<tr>
  <td align="center">sureshbhav88</td>
  <td align="center">My Prediction for Steem coin is $0.82.</td>
</tr>
<tr>
  <td align="center">antone</td>
  <td align="center">$0,141592</td>
</tr>
<tr>
  <td align="center">amanda8250</td>
  <td align="center">0.82509</td>
</tr>
<tr>
  <td align="center">xiaoyuanwmm</td>
  <td align="center">$0.85</td>
</tr>
<tr>
  <td align="center">justyy</td>
  <td align="center">$0.79</td>
</tr>
<tr>
  <td align="center">bichen</td>
  <td align="center">0.873812</td>
</tr>
<tr>
  <td align="center">ericet</td>
  <td align="center">$0.82</td>
</tr>
<tr>
  <td align="center">magnus.harboe</td>
  <td align="center">0.727364</td>
</tr>
<tr>
  <td align="center">benedict08</td>
  <td align="center">My prediction $0,823632</td>
</tr>
<tr>
  <td align="center">filotasriza3</td>
  <td align="center">Hmm my guess will be 0,805612</td>
</tr>
<tr>
  <td align="center">mermaidvampire</td>
  <td align="center">0.923133</td>
</tr>
<tr>
  <td align="center">sanmi</td>
  <td align="center">$0.75</td>
</tr>
<tr>
  <td align="center">joythewanderer</td>
  <td align="center">My guess: $0.839801</td>
</tr>
<tr>
  <td align="center">mickyscofield</td>
  <td align="center">My Prediction is 0.789277</td>
</tr>
<tr>
  <td align="center">luism86</td>
  <td align="center">my prediction $0,818632</td>
</tr>
<tr>
  <td align="center">aaronleang</td>
  <td align="center">My Guess - $0.813862 per STEEM</td>
</tr>
<tr>
  <td align="center">kimzwarch</td>
  <td align="center"><code>$0.808008 per steem</code></td>
</tr>
<tr>
  <td align="center">littymumma</td>
  <td align="center"><b>0.860202</b></td>
</tr>
</tbody>
</table>

We can clearly tell that the entries mostly hovering around 0.77~0.83 and that's the nice to know most of the Steemians is sane enough to pick a rather safe guess. Unfortunately, I can't automate the filtering process programmatically due to my limited skills. Hope I did not leave out any valid entries, tell me if your entry was left out.

I will announce the winners in next post, stay tuned!<br /><center><hr/><em>Posted from my blog with <a href='https://wordpress.org/plugins/steempress/'>SteemPress</a> : https://fr3eze.vornix.blog/guess-steem-price-contest-participants-listing/</em><hr/></center>

- - -

This page is synchronized from the post: ['"Guess Steem Price" Contest Participant''s Listing'](https://steemit.com/@fr3eze/guesssteempricecontestparticipantslisting-v7dum3cz5u)
