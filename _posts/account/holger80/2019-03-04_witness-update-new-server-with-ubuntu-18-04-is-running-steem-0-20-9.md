
---
title: 'Witness update: new server with ubuntu 18.04 is running steem 0.20.9'
permlink: witness-update-new-server-with-ubuntu-18-04-is-running-steem-0-20-9
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-03-04 13:11:57
categories:
- witness-category
tags:
- witness-category
- witness-update
- witness
- steemdev
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmVnwwtCBjhz9hLt6uY4DsXrjrdqm3knLB6bTtmAj2YQRB'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I had to rent a new server with a bigger hard drive, as the free disc space is shrinking by 0.2G a day and I had only 4G left.

Yesterday, I switched my witness key and the new server is running and signing blocks.
![image.png](https://ipfs.busy.org/ipfs/QmVnwwtCBjhz9hLt6uY4DsXrjrdqm3knLB6bTtmAj2YQRB)

My old server had a 256G ssd which would be full in around 20 days, so I advice all witnesses who have a server with a 256G drive to check for free space.

There was no Ubuntu 16.04. available für the new server, so I had to patch the steem source code. You can find more information about it in this [post](https://steemit.com/witness-category/@holger80/witness-update-new-server-with-512-gb-ssd-and-compile-steem-0-20-9-unter-ubuntu-18-04). I created a gist for my patch: https://gist.github.com/holgern/e38881ef79ce93006cd5d763869afb29

## Step by step introduction for setting up a witness server (Ubuntu 18.04)
### Install a firewall (ufw) and failtoban
```
apt-get update
apt-get install -y ufw 
apt-get install -y fail2ban
```

### Create a new user and disable login through root
I will use `newuser` as user name in the following. You can chose a different name and replace all `newuser` with your username.
```
adduser newuser
```
Now we can edit the ssh config file and disable root login:
```
nano /etc/ssh/sshd_config
```
by changing the following parameters:
```
Port 2020
PermitRootLogin no
```
I changed also the ssh port, so that a standard port scan does not work.

Restart the ssh service:
```
systemctl restart sshd
```

and create a filewall rule:
```
ufw allow 2020
ufw enable
```

Now, we need to add the user to the sudoers file:
```
nano /etc/sudoers
```
by adding
```
newuser ALL=(ALL) ALL
```

### Relogin as newuser
We can now logout and login as new user.
We need now sudo in front of each command.
### Install ntp
We need a accurate clock:
```
sudo timedatectl set-ntp no
sudo apt-get install ntp
sudo ntpq -np
sudo systemctl status ntp
```
### zram
I'm using zram on my witness server,  it worked well for me.

```
sudo apt-get install -y zram-config
sudo sed -i 's|/ 2 /|/ 1 /|g' /usr/bin/init-zram-swapping
sudo systemctl restart zram-config
```
### swap
I will also add a swap, so that the system has a fallback solution, when the RAM is not sufficient.
```
sudo dd if=/dev/zero of=/swapfile bs=1M count=4096
mkswap /swapfile
echo "/swapfile swap swap defaults 0 0" | sudo tee /etc/fstab
```
### Mount the ramdisk
I set the ram disk to `2*64 G + 4 -1 = 131 G`
The size for the fstab is then `(131 + 0.5 ) * 1024 = `134656

```
sudo mount -o remount,size=134656 /dev/shm
echo "tmpfs   /dev/shm         tmpfs   defaults,noexec,nosuid,size=134656      0  0" | sudo tee /etc/fstab
```

### Download the blockchain
```
wget https://gtg.steem.house/get/blockchain/block_log
```
### Create a .steemd directory inside the newuser home
I created the .steemd by running steemd as root
```
steemd
```
pressing strg+c and moving it to the new place:
```
sudo mv /root/.steemd /home/newuser/
sudo chown -R newuser:newuser /home/newuser/.steemd
```
Now we can move the blockchain file into it:
```
mv ~/block_log ~/.steemd/blockchain/
```
### Changing the .config file
You can find my config.ini here: 
https://gist.github.com/holgern/26cebeab2882d4546c5e0d7a58c90b40

witness and private-key must be edited:
```
nano .steemd/config.ini
```
with
```
# name of witness controlled by this node (e.g. initwitness )
witness = "holger80"

# WIF PRIVATE KEY to be used by one or more witnesses or miners
private-key = 5xxxx
```
### Create a systemd service
I'm using a systemctl service for running steemd:
```
sudo nano /etc/systemd/system/steemd.service
```
with the following content:
```
[Unit]
Description=steemd_server
After=network.target  zram-config.service

[Service]
WorkingDirectory=/home/newuser/.steemd
ExecStart=/usr/bin/steemd --data-dir=/home/newuser/.steemd
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

For the first run, a replay is necessary. Thus, I change the service file and replace:
```
ExecStart=/usr/bin/steemd --data-dir=/home/newuser/.steemd
```
by
```
ExecStart=/usr/bin/steemd --data-dir=/home/newuser/.steemd --replay
```

### Starting the service and replaying
```
sudo systemctl daemon-reload
sudo systemctl enable steemd.service
sudo systemctl start steemd.service
```

### Checking the log
```
sudo journalctl -f -u steemd
```
which will result in the following output when everything is running and the blockchain is replayed:
![image.png](https://ipfs.busy.org/ipfs/QmTU9gH8vWY6sMXHnz4JL92hTak8rjkG8gZQp9qSJr56zh)

## Pricefeed
I do not want my active key stored on my server. Thus, most of the price feed toolboxes can not be used.

I will use  beempy pricefeed, which needs only the witness key, which is already stored in the config.ini file.


At first, I create a new file `~/update_feed`
```
#!/bin/bash
/home/newuser/.local/bin/beempy updatenodes
/home/newuser/.local/bin/beempy witnessfeed holger80 5xxx
```
where 5xx is my witness wif.
In order to be able to run this, I need beem to be installed:
```
sudo apt-get install python3-pip python3-dev build-essential libssl-dev
```
Then I install beem locally:
```
pip3 install beem
pip3 install cryptography
```
After logout and login again, ``beempy` should be available:
```
 which beempy
```
should result in
```
/home/newuser/.local/bin/beempy
```

### Creating a simple crontab job for running updating the feed every 6 hours
```
crontab -e
```
and enter
```
0 */6 * * * (sh  /home/newuser/update_feed) >> /tmp/crontab.log 2>&1
```

### price feed was sucessfully updated
![image.png](https://ipfs.busy.org/ipfs/Qmdp1srGShaxSeBT353v8EBjWDZp9i3EJbuJUFBzyRyjU6)


- - -

This page is synchronized from the post: ['Witness update: new server with ubuntu 18.04 is running steem 0.20.9'](https://steemit.com/@holger80/witness-update-new-server-with-ubuntu-18-04-is-running-steem-0-20-9)
