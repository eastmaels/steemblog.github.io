
---
title: 'Renewing the Certificate for RPC Node (Ngnix Server)'
permlink: renewing-the-certificate-for-rpc-node-ngnix-server
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-06-14 15:32:51
categories:
- whalepower
tags:
- whalepower
- https
- ssl-certificates
- rpc-node
- steem
- nginx
thumbnail: 'https://cdn.steemitimages.com/DQmdvdJYUVdAKmqhunocLoxFre9WKV1NXgk2qAYPVqGGKTt/expiring-certificate.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


The RPC Node https://api.justyy.com is expiring in 5 days.

![expiring-certificate.jpg](https://cdn.steemitimages.com/DQmdvdJYUVdAKmqhunocLoxFre9WKV1NXgk2qAYPVqGGKTt/expiring-certificate.jpg)

Nowadays, you can easily get a free SSL certificate but you have to manually/automatically renew it every 90 days. 

To apply for a certificate, you have to verify your domain - either by email of your domain, place a file on your server (which can be public accessed), or modify the DNS record.

If your DNS has configured CAA records, you need to remove them or add specific records allowing a SSL provider to issue the certificates on your domain.

Once the certificates are issued, you will see the following files:

![certificates.jpg](https://cdn.steemitimages.com/DQme6RxFy6kejuFjywNUACBP1NfvuVnQdSqGhGdmNKAemzV/certificates.jpg)

You need to combine two CRTs into one:

```
cat certificate.crt ca_bundle.crt >> certificate.crt
```

Then in Nginx server, add the following in `server` block:

```
listen   443;
ssl    on;
ssl_certificate    /etc/ssl/certificate.crt; 
ssl_certificate_key    /etc/ssl/private.key;
```

Last but not least, restart the nginx server.

```
sudo /etc/init.d/nginx restart
# or 
sudo service nginx restart
```


![image.png](https://cdn.steemitimages.com/DQmScSdwPbJe4eTNZz2dVv9uF6RnFu63bLTi71oze4yb4RT/image.png)


<hr/>

Every little helps! I hope this helps!


**Steem On!~**
Reposted to [Blog](https://helloacm.com/how-to-renew-the-free-ssl-certificates-nginx-server/)
------------------


If you like my work, please consider voting for me, thanks!
https://steemit.com/~witnesses type in **justyy** and click ***VOTE***
![](https://steemyy.com/images/vote-for-justyy.jpg)
<BR/>
**Alternatively, you could [proxy to me](https://steemyy.com/witness-voting/?witness=justyy&action=proxy)  if you are too lazy to vote!**

Also: you can vote me at the tool I made:  https://steemyy.com/witness-voting/?witness=justyy

### Visit me at:  [https://steemyy.com](https://steemyy.com)

- - -

This page is synchronized from the post: ['Renewing the Certificate for RPC Node (Ngnix Server)'](https://steemit.com/@justyy/renewing-the-certificate-for-rpc-node-ngnix-server)
