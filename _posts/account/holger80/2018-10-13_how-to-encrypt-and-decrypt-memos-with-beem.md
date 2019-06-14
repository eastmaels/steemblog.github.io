
---
title: 'How to encrypt and decrypt memos with beem'
permlink: how-to-encrypt-and-decrypt-memos-with-beem
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-10-13 08:02:48
categories:
- python
tags:
- python
- tutorial
- beem
- steemdev
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmaFjvxYJToBiMBJfaGHENDZiLrX7FMVdQGBxKTpF6wUve'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Sending a transfer with an encrypted memo
When the memo key and active key of the sender is know to `beem` and a `#` is placed before the memo text, a transfer with an encrypted memo can be sent out. The following script sends a encrypted memo from `beembot` to `holger80`.

All scripts in this post need beem to be installed (`pip install beem`).
```
#!/usr/bin/python
from beem import Steem
from beem.account import Account
import getpass


if __name__ == "__main__":
    account = "beembot"
    active_wif = getpass.getpass(prompt='Enter the active key of %s:' % account)
    memo_wif = getpass.getpass(prompt='Enter the memo key of %s:' % account)
    stm = Steem(node="https://api.steemit.com", keys=[memo_wif, active_wif])
    
    account = Account(account, steem_instance=stm)
    account.transfer("holger80", 0.001, "SBD", memo="#This is a test")
```
Sending was sucessfull:
![image.png](https://ipfs.busy.org/ipfs/QmaFjvxYJToBiMBJfaGHENDZiLrX7FMVdQGBxKTpF6wUve)

## Decrypting a memo
Lets now try to decrypt the memo. This time we need the memo key of the receiver (memo key of `holger80` in the example). We use the `Memo` object from `beem`
```
#!/usr/bin/python
from beem import Steem
from beem.account import Account
from beem.memo import Memo
import getpass


if __name__ == "__main__":
    account = "holger80"
    memo_wif = getpass.getpass(prompt='Enter the memo key of %s:' % account)
    stm = Steem(keys=[memo_wif])
    
    account = Account(account, steem_instance=stm)
    memo = Memo(steem_instance=stm)
    last_transfer = None
    for h in account.history_reverse(only_ops=["transfer"]):
        if last_transfer is None and len(h["memo"]) > 2 and h["memo"][0] == '#':
            last_transfer = h
            break
    print(last_transfer)
    decrypted_memo = memo.decrypt(last_transfer)
    print("Transfer from %s with memo: %s" % (last_transfer["from"], decrypted_memo))
```
The output of the script is:
```
Transfer from beembot with memo: This is a test
```

## Encrypting a text
It is also possible to encrypt a text with the memo key using the `Memo` class of `beem`. The following script needs the memo key of the `holger80` account and ecrypts the `memo_text`. The encrypted text can only be read with the memo key of account `beembot`. For encryption, the `encrypt` function is used. The encrypted text is inside the `message` field of the returned dict-object.
```
#!/usr/bin/python
from beem import Steem
from beem.memo import Memo
import getpass


if __name__ == "__main__":
    from_account = "holger80"
    to_account = "beembot"
    memo_text = "test"    
    if memo_text[0] == '#':
        memo_wif = getpass.getpass(prompt='Enter the memo key of %s:' % to_account)
    else:
        memo_wif = getpass.getpass(prompt='Enter the memo key of %s:' % from_account)
    stm = Steem(keys=[memo_wif])

    memo = Memo(from_account=from_account, to_account=to_account, steem_instance=stm)
    if memo_text[0] == '#':
        print(memo.decrypt(memo_text))
    else:
        print(memo.encrypt(memo_text)["message"])

```
The encrypted text is:
```
#DTpKcbxWqsETCRfjYGk9feERFa5nVBF8FaHfWPwUjyHBTdwW8WCPrVPATsAm7WwF6WZ9XaVAutUVZLsGEpkLfh7d4RNQhFBryKUzKGCqGUTp7QKmu2Qk6qKqWB3aTfetp
```
Every run creates a different string:
```
#DTpKcbxWqsETCRfjYGk9feERFa5nVBF8FaHfWPwUjyHBTdwW8WCPrVPATsAm7WwF6WZ9XaVAutUVZLsGEpkLfh7d4PXbUsoGhDzxfDe6q4E72rfsiKXFHQhPzjAJsQpne
```
3 run:
```
#DTpKcbxWqsETCRfjYGk9feERFa5nVBF8FaHfWPwUjyHBTdwW8WCPrVPATsAm7WwF6WZ9XaVAutUVZLsGEpkLfh7d4KDdkySsJHTNULByLkK6yWrmoZQWBgV8yubm2TjG4
```

## Decrypting a text
Decrypting is also possible, when the memo key of the receiver is known to beem. The following script decrypt the encrypted text using the memo key of account `beembot`. This time the `decrypt` function is used.
```
#!/usr/bin/python
from beem import Steem
from beem.memo import Memo
import getpass


if __name__ == "__main__":
    from_account = "holger80"
    to_account = "beembot"
    memo_text = "#DTpKcbxWqsETCRfjYGk9feERFa5nVBF8FaHfWPwUjyHBTdwW8WCPrVPATsAm7WwF6WZ9XaVAutUVZLsGEpkLfh7d4RNQhFBryKUzKGCqGUTp7QKmu2Qk6qKqWB3aTfetp"    
    if memo_text[0] == '#':
        memo_wif = getpass.getpass(prompt='Enter the memo key of %s:' % to_account)
    else:
        memo_wif = getpass.getpass(prompt='Enter the memo key of %s:' % from_account)
    stm = Steem(keys=[memo_wif])

    memo = Memo(from_account=from_account, to_account=to_account, steem_instance=stm)
    if memo_text[0] == '#':
        print(memo.decrypt(memo_text))
    else:
        print(memo.encrypt(memo_text)["message"])
```
All three encrypted memo texts give back the following string:
```
test
```

- - -

This page is synchronized from the post: ['How to encrypt and decrypt memos with beem'](https://steemit.com/@holger80/how-to-encrypt-and-decrypt-memos-with-beem)
