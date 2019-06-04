
---
title: 'Steemit: Failed to access node003(167.114.34.68) today, Hope be fixed ASAP.'
permlink: steemit-failed-to-access-node003-167-114-34-68-today-hope-be-fixed-asap
catalog: true
toc_nav_num: true
toc: true
date: 2016-07-31 08:03:33
categories:
- steemit
tags:
- steemit
thumbnail: https://www.steemimg.com/images/2016/07/31/steemit_error0fdef.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Today, I just tried to visit steemit.com site as usual, but I found that I can't access it normally.

I got following response when I visited https://steemit.com in browser: 
![steemit_error0fdef.png](https://www.steemimg.com/images/2016/07/31/steemit_error0fdef.png)
Oh, there seems something wrong about steemit.com:(

I tried again after a nap, and got:
![steemit_error278cb2.png](https://www.steemimg.com/images/2016/07/31/steemit_error278cb2.png)

 I discussed it with my friends at QQ group.
Some of them said that steemit.com works normally,  but others can't work with it.

So I try to finger out what happen?

 ****
* First I ping the domain of steemit.com at the command prompt:
![steem_ping_windowsa6d06.png](https://www.steemimg.com/images/2016/07/31/steem_ping_windowsa6d06.png)
As you can see, the ping worked fine,  and the IP address is 167.114.34.68
 ****
* When I tried to use the IP address directly at browser, I got the same error as I access  it with the domain. 
![steem_68b809d.png](https://www.steemimg.com/images/2016/07/31/steem_68b809d.png)
But why some of my friends can worked with the site?
 ****
* I try to finger it out use EzDig tool:
Here are results:
```
 ; <<>> EzDig 3.0 <<>> @198.153.194.1 steemit.com A
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 24734
;;  flags: qr rd ra; QUERY:1, ANSWER:4, AUTHORITY:2, ADDITIONAL:1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096

;; QUESTION SECTION:
steemit.com		IN	A	

;; ANSWER SECTION:
steemit.com	1800	IN	A	167.114.34.68
steemit.com	1800	IN	A	167.114.34.59
steemit.com	1800	IN	A	167.114.34.89
steemit.com	1800	IN	A	167.114.34.81

;; AUTHORITY SECTION:
steemit.com	3600	IN	NS	ns38.domaincontrol.com
steemit.com	3600	IN	NS	ns37.domaincontrol.com
```
As you can see **there are FOUR addresses** for A record.
 ****
* I tried to use the IP address directly at browser https://167.114.34.59
It works fine for me!
![Capture_13a7ce.png](https://www.steemimg.com/images/2016/07/31/Capture_13a7ce.png)
 ****
Then I tested those IPs with a server which located at softlayer DC.

* For 167.114.34.68
```
 wget https://167.114.34.68 --no-check-certificate
--2016-07-31 06:57:50--  https://167.114.34.68/
Connecting to 167.114.34.68:443... connected.
    WARNING: certificate common name “steemit.com” doesn't match requested host name “167.114.34.68”.
HTTP request sent, awaiting response... 502 Bad Gateway
2016-07-31 06:57:51 ERROR 502: Bad Gateway.
```
 ****
* For 167.114.34.59
```
wget https://167.114.34.59 --no-check-certificate
--2016-07-31 06:57:35--  https://167.114.34.59/
Connecting to 167.114.34.59:443... connected.
    WARNING: certificate common name “steemit.com” doesn't match requested host name “167.114.34.59”.
HTTP request sent, awaiting response... 200 OK
Length: 272853 (266K) [text/html]
Saving to: “index.html”

100%[===================================================================================================================================================================================================>] 272,853     1.16M/s   in 0.2s

2016-07-31 06:57:36 (1.16 MB/s) - “index.html” saved [272853/272853]
```
****
* And I tested PTR of 167.114.34.68
```
 ; <<>> EzDig 3.0 <<>> @208.67.222.222 68.34.114.167.in-addr.arpa PTR
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 24734
;;  flags: qr rd ra; QUERY:1, ANSWER:1, AUTHORITY:0, ADDITIONAL:1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096

;; QUESTION SECTION:
68.34.114.167.in-addr.arpa		IN	PTR	

;; ANSWER SECTION:
68.34.114.167.in-addr.arpa	86400	IN	PTR	node003.steem.house
```

# The results: 
**There is something wrong with node003(167.114.34.68)**
Hope this issue be fixed ASAP.

- - -

This page is synchronized from the post: [Steemit: Failed to access node003(167.114.34.68) today, Hope be fixed ASAP.](https://steemit.com/@oflyhigh/steemit-failed-to-access-node003-167-114-34-68-today-hope-be-fixed-asap)
