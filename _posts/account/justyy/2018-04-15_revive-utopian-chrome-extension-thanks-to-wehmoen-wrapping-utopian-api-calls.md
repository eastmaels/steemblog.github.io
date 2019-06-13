
---
title: 'Revive Utopian Chrome Extension thanks to @wehmoen ! (Wrapping Utopian API Calls)'
permlink: revive-utopian-chrome-extension-thanks-to-wehmoen-wrapping-utopian-api-calls
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-15 17:49:36
categories:
- utopian-io
tags:
- utopian-io
- witness-category
- software-development
- programming
- steemstem
thumbnail: https://cdn.utopian.io/posts/35d33c583b7a503e67f3b411acbb9b2b3e67image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


[Utopian Moderators & Supervisors](https://chrome.google.com/webstore/detail/utopian-moderator-supervi/dcjdbldgiiboblbaconadffdaicicebc) is a Chrome Extension that has iterated for 12 versions, however, sadly, since last time [Utopian revokes for all API calls](https://steemit.com/utopian-io/@utopian-io/you-ask-we-deliver-new-reputation-system-new-decentralised-scoring-system-and-much-more) the Chrome Extension is virtually dead i.e. all API calls to `https://api.utopian.io/api` return 500 internal server error.

I submitted a support ticket asking for the [utopian](https://helloacm.com/make-utopian-moderator-chrome-extension-perfect-by-adding-posts-and-tools-tab/) API key but got rejected because:

> A API key must not be given out to end users and/or other developers. 
An API Key is bind to one ore more domains. From which domain/domains will you send the requests. At the moment we can only provide API keys suiteable for ajax requests made from websites in a browser.

Luckily, at the [London Cryptocurrency Show](https://steemit.com/promo-steem/@justyy/london-cryptocurrency-show-steem-is-the-no-1-blockchain-in-the-world) I met @wehmoen who is the leading developer (staff) at @utopian-io  therefore I managed to persuade him giving me the API key by proposing that I will wrap the API key on my server and change all API calls in the chrome extension to my API server, where I will hide all the API key/secret in my server.

Therefore, with the changes commited [here](https://github.com/DoctorLai/utopian-moderator/commit/917b5726e2631d11c8df7fbce8c194699f47c59d), the Utopian Moderators v0.0.13 is back to life!

You can install the extension at [Chrome Webstore](https://chrome.google.com/webstore/detail/utopian-moderator-supervi/dcjdbldgiiboblbaconadffdaicicebc).  For Opera browsers, the workaround is to first install[this](https://addons.opera.com/en/extensions/details/download-chrome-extension-9/) and similarly for Firefox, you can install [Chrome Store Foxified](https://addons.mozilla.org/en-US/firefox/addon/chrome-store-foxified/) before you install Utopian Moderators & Supervisors.

## API wrapping in PHP
```
<?php
/*
  utopian api wrapper at server side
  thanks to @wehmoen for providing me api key
*/
define("ORIGIN", "");
define("API_KEY", "");
define("API_KEY_ID", "");
function CallAPI($url, &$error, $data = null, $headers = null) {
  $curl = curl_init($url);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  if ($headers) {
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
  }
  curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "GET");
  $response = curl_exec($curl);
  $data = json_decode($response);
  /* Check for 404 (file not found). */
  $httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
  // Check the HTTP Status code
  switch ($httpCode) {
    case 200:
        $error = 200;
        break;
    case 404:
        $error = 404;
        break;
    case 500:
        $error = 500;
        break;
    case 502:
        $error = 502;
        break;
    case 503:
        $error = 503;
        break;
    default:
        $error = $httpCode;
        break;
  }
  curl_close($curl);
  return ($data);  
}    
$api = $_GET['api'] ?? '';
if (!$api) {
  die();
}

// avoid hacking to get the keys
$host = strtolower(parse_url($api, PHP_URL_HOST));
if ($host != 'api.utopian.io') {
  die();
}

$headers = array("Origin: " . ORIGIN, "x-api-key: " . API_KEY, "x-api-key-id: " . API_KEY_ID);
$err = '';
$data = CallAPI($api, $err, null, $headers);
header("Access-Control-Allow-Origin: *");  
header('Content-Type: application/json');
if ($err === 200) {
  die(json_encode($data));
} else {
  die(json_encode(array("error" => $err, "raw" => $data)));
}
```

![image.png](https://cdn.utopian.io/posts/35d33c583b7a503e67f3b411acbb9b2b3e67image.png)

PS: just confirmed with @wehmoen  the `https://utopian.plus/unreviewedPosts.json` is not working anymore and unfortunately there is currently no suitable API calls for this purpose. 

Long live @utopian-io !



Reposted to [my blog](https://helloacm.com/revive-utopian-chrome-extension-wrapping-utopian-api-calls/) for better indexing and archiving.


-----------------------------------
## Support me and my work as a [witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/revive-utopian-chrome-extension-thanks-to-wehmoen-wrapping-utopian-api-calls">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Revive Utopian Chrome Extension thanks to @wehmoen ! (Wrapping Utopian API Calls)](https://steemit.com/@justyy/revive-utopian-chrome-extension-thanks-to-wehmoen-wrapping-utopian-api-calls)
