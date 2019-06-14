
---
title: 'systemctl script froze - how to do to prevent this?'
permlink: systemctl-script-froze-how-to-do-to-prevent-this
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-02-10 15:24:18
categories:
- beempy
tags:
- beempy
- systemctl
- steemdev
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmNisNECNjBNug9j9igNuhDdCarEKBJQiX17UQBN1kfqKm'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


My script to record all played steemmonster games from https://beempy.com froze:

![image.png](https://ipfs.busy.org/ipfs/QmNisNECNjBNug9j9igNuhDdCarEKBJQiX17UQBN1kfqKm)

I restarted the script (I'm using systemctl for this) and it is now catching up.

## How to prevent a frozen script
There was no bug, it just froze. This happend already before and I will now try to fix this.
I'm thinking of restarting the systemctl service every day. By this, a frozen script can only lead to a maximum stop of 24 hours.

Possible ideas to implement this:
* cron job with a systemctl restart service_name
* systemctl timer with  a systemctl restart service_name
* Using `RuntimeMaxSec`

## Cron job
A new rule can be entered by:
```
sudo crontab -e
```
The new rule could look like:
```
0 0 * * * /bin/systemctl restart yourService
```

## systemctl timer
We need two files, one restart_service.timer
```
[Unit]
Description=Do something daily

[Timer]
OnCalendar=daily
Persistent=true

[Install]
WantedBy=timers.target
```
and a restart_service.service:
```
[Unit]
Description=Restart service

[Service]
Type=oneshot
ExecStart=/usr/bin/systemctl try-restart my_program.service
```
They have to be copied to `/etc/systemd/system` and can be started by:
```
systemctl enable --now restart_service.timer
```

## RuntimeMaxSec
When systemctl is newer than version 229, this is a good solution. The version can be found out by:
```
systemctl --version
```
The manual says about RuntimeMaxSec:
> Configures a maximum time for the service to run. If this is used and the service has been active for longer than the specified time it is terminated and put into a failure state. Note that this setting does not have any effect on Type=oneshot services, as they terminate immediately after activation completed. Pass "infinity" (the default) to configure no runtime limit.

This seems to be exactly what I need. 

`Restart` and `RuntimeMaxSec` has to be added to the service file in the `[Service]` part:
```
[Service]
Restart=always
RuntimeMaxSec=10800
```
This works for my scripts as they do not run forever. I'm using `RestartSec` to restart the script when it is finished.

## Conclusion
`RuntimeMaxSec` seems to me a good measure to robustify systemctl scripts. I will try this on my systemctl services.


- - -

This page is synchronized from the post: ['systemctl script froze - how to do to prevent this?'](https://steemit.com/@holger80/systemctl-script-froze-how-to-do-to-prevent-this)
