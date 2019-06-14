
---
title: 'How to write all decrypted memos into a csv-file'
permlink: how-to-write-all-decrypted-memos-into-a-csv-file
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-15 16:20:12
categories:
- steemdev
tags:
- steemdev
- python
- steemtank
- beem
- busy
thumbnail: 'https://cdn.steemitimages.com/DQmd4aYZkBzDB8tbxE5GjLJDJZoUgn7nhD8SRaKZzn2Tg7S/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


As far as I know it is not possible to search encrypted memos. What to do when I want to go through all me sent and received transfers containing an encrypted memo text?
<center>
![image.png](https://cdn.steemitimages.com/DQmd4aYZkBzDB8tbxE5GjLJDJZoUgn7nhD8SRaKZzn2Tg7S/image.png)
</center>

The following script uses [beem](https://github.com/holgern/beem/). More information about installing this can be found on the github site.

The following script asks for a username and a memo key. Then it go through the complete account history and decrypts all encrypted transfer memos. The decrypted text is printed and stored into a csv file.

Store the following lines into a file `decrypt_memos.py`.
```
#!/usr/bin/python
from beem import Steem
from beem.memo import Memo
from beem.account import Account
from beem.amount import Amount
import getpass
import six
import csv


if __name__ == "__main__":
    if six.PY3:
        account = input("Enter account name: ")
    else:
        account = raw_input("Enter account name: ")    
    memo_wif = getpass.getpass(prompt='Enter the memo key of %s:' % account)
    stm = Steem(keys=[memo_wif])
    acc = Account(account, steem_instance=stm)
    with open('encrypted_memos.csv', mode='w') as csv_file:
        fieldnames = ['timestamp', 'from', 'to', 'amount', 'decrypted_memo']
        writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
        writer.writeheader()
        for h in acc.history_reverse(only_ops=["transfer"]):
            if len(h["memo"]) < 2:
                continue
            if h["memo"][0] != '#':
                continue
            memo = Memo(from_account=h["from"], to_account=h["to"], steem_instance=stm)
            try:
                decrypted_memo = memo.decrypt(h["memo"])
            except:
                decrypted_memo = "decryption failed."
            amount = Amount(h["amount"], steem_instance=stm)
            print("%s - from: %s, to: %s, amount: %s, decr. text: %s" % (h["timestamp"], h["from"], h["to"], str(amount), decrypted_memo))
            writer.writerow({"timestamp": h["timestamp"], "from": h["from"], "to": h["to"], "amount": str(amount), "decrypted_memo": decrypted_memo})

```
The script can then be started by:
```
python decrypt_memos.py
```
or
```
python3 decrypt_memos.py
```

The script generates an output as:
```
2018-10-13T07:00:21 - from: beembot, to: holger80, amount: 0.001 SBD, decr. text: This is a test
```
and writes all memos in a csv-file "encrypted_memos.csv".
____
[image source](https://pixabay.com/de/computer-verschl%C3%BCsseln-1294045/)

- - -

This page is synchronized from the post: ['How to write all decrypted memos into a csv-file'](https://steemit.com/@holger80/how-to-write-all-decrypted-memos-into-a-csv-file)
