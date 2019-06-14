
---
title: 'update for beem - amount in the Amount class is a Decimal instead of a float and bug-fix for account.get_balance()'
permlink: update-for-beem-amount-in-the-amount-class-is-a-decimal-instead-of-a-float-and-bug-fix-for-account-getbalance
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-04-08 10:10:48
categories:
- utopian-io
tags:
- utopian-io
- development
- beem
- python
- busy
thumbnail: 'https://cdn.steemitimages.com/DQmcRrwLPSywSYMierfP6um6mejeMNGjN9Rxw7audJqTDgb/beem-logo'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


### Repository
https://github.com/holgern/beem<center>
![beem-logo](https://cdn.steemitimages.com/DQmcRrwLPSywSYMierfP6um6mejeMNGjN9Rxw7audJqTDgb/beem-logo)
</center>
[beem](https://github.com/holgern/beem) is a python library for steem. beem has now 495 unit tests and a coverage of 70 %. The current version is 0.20.20.
I created a discord channel for answering a question or discussing beem: https://discord.gg/4HM592V
The newest beem version can be installed by:
```
pip install -U beem
```
or when  using conda:
```
conda install beem
```
beem can be updated by:
```
conda update beem
```

## New Features
### The amount in the Amount class is stored as Decimal and not as float anymore
The amount in the Amount class is now stored as Decimal object:
```
from beem.amount import Amount
a = Amount("6.104 STEEM")
a
6.104 STEEM
a.amount
Decimal('6.104')
```
For compatibility reasons, I have decided to keep the floating point arithmetic. For example, when I have 6.104 and I want to sent 1/6 out to the six different people, I should have a reminder of 0.002 in my wallet, as 6.102 is nearest number which is dividable through 6 without reminder.
```
a = Amount("6.104 STEEM")
send_amount = a / 6
print(send_amount)
for i in range(6):
    a -=  send_amount
print(a)
```
results in 
```
1.017 STEEM
0.000 STEEM
```
Seems that we have lost 0.002 STEEM. The reason is that the send_amount has a higher precision that the allowed one.
```
send_amount.amount
Decimal('1.017333333333333333333333333')
```

#### Fixed-point arithmetic

In order to fix this, I added a new option `fixed_point_arithmetic`, when set to True, the amount is rounded down after each operation to the allowed precision.

```
a = Amount("6.104 STEEM", fixed_point_arithmetic = True)
send_amount = a / 6
print(send_amount)
for i in range(6):
    a -=  send_amount
print(a)
```
results in 
```
1.017 STEEM
0.002 STEEM
```
This time, we do not lost the 0.002 STEEM, as the amount in send_amount is rounded:

```
send_amount.amount
Decimal('1.017')
```
But the following calculation may not lead to the expected results:
```
a
0.002 STEEM
(a / 1000) * 1000
0.000 STEEM
```

#### Fixed-point arithmetic combined with Floating-point arithmetic

It is also possible to combine both. In the following example, an object keeps its unlimited precision and works with floating-point arithmetic. The send_amount object is rounded down to the precision of 3.

```
a = Amount("6.104 STEEM")
send_amount = Amount(a / 6, fixed_point_arithmetic=True)
print(send_amount)
for i in range(6):
    a -=  send_amount
print(a)
```
results in 
```
1.017 STEEM
0.002 STEEM
```
We were able to achieve the wanted results. In the same time, calculation as the following are still possible:
```
(a / 1000) * 1000
0.002 STEEM
```

#### Casting to float, str and integer
It is possible to cast a Amount object to a float, in this case the amount is not rounded down:

```
float(Amount("1.999 STEEM") / 2)
0.9995
```
During casting the object to an integer, it is rounded down to the defined precision:
```
int(Amount("1.999 STEEM") / 2)
999
```
The integer is used, when casting the amount object to a dict, which can be used for broadcasting using the appbase format:
```
(Amount("1.999 STEEM") / 2).json()
{'amount': '999', 'nai': '@@000000021', 'precision': 3}
```

It is also possible to cast the amount object to a string:
```
str(Amount("1.999 STEEM") / 2)
'0.999 STEEM'
```

In both casting functions, the new quantize function is used:
```
def quantize(amount, precision):
    # make sure amount is decimal and has the asset precision
    amount = Decimal(amount)
    places = Decimal(10) ** (-precision)
    return amount.quantize(places, rounding=ROUND_DOWN)  
```

The `quantize` grantees that casting an amount to  a string and to an integer returns the same results.
## Bug fixes
### one-time private key on beempy
I implemented the first part of the suggestion from @blockchainstudio ([post](https://steemit.com/utopian-io/@blockchainstudio/beem-one-time-private-key-wallet-compatibility) where he suggested that a key should be entered when it is not stored in the wallet.

I modified the `unlock_wallet` function and changed the wallet password promt as follow:
```
password = click.prompt("Password to unlock wallet or posting/active wif", confirmation_prompt=False, hide_input=True)
try:
    stm.wallet.unlock(password)
except:
    try:
        stm.wallet.setKeys([password])
        print("Wif accepted!")
        return True                
    except:
        raise exceptions.WrongMasterPasswordException("entered password is not a valid password/wif")
```
These changes allow it now to broadcast a operation as a transfer from an account by entering not the  wallet key but the active key. This active key is temporary stored in RAM and deleted afterwards.

### Fix issue #171 - Account.get_balance function shows summed value of liquid balance and unclaimed reward
The bug described [here](https://steemit.com/utopian-io/@sourovafrin/beem-version-0-20-19-account-getbalance-function-shows-summed-value-of-liquid-balance-and-unclaimed-reward) has been fixed. Calling the `total_balances` property had modified also the balances in the account object when either saving balance or reward balance was not empty. The reason was the usage of `+=`
which had modify the object itself. By replacing the used `+=` by a `=` which can be seen here:
![image.png](https://ipfs.busy.org/ipfs/QmWm5PkYML1VY7u4LJMeT4qT82CjPWzdYQvN1fYa89qz1C)

and by  using  a copy of the balance objects, this bug could be fixed: 
```
@property
def available_balances(self):
    """ List balances of an account. This call returns instances of
        :class:`beem.amount.Amount`.
    """
    amount_list = ["balance", "sbd_balance", "vesting_shares"]
    available_amount = []
    for amount in amount_list:
        if amount in self:
            available_amount.append(self[amount].copy())
    return available_amount
```

## Commits
### Make a copy of balance objects
* [commit f0eaffe](https://github.com/holgern/beem/commit/f0eaffeb4e179bbdf52e2b640e26365f7b4b73cd)
* Adapt version number in doc
### Make return argument in generator function compatible to python 2.7
* [commit 905201a](https://github.com/holgern/beem/commit/905201ac7d11b2ca978944e789abb41a5be29031)
### Fix cli unit test
* [commit 921db97](https://github.com/holgern/beem/commit/921db974ca09df68ec54133f295971153015c95a)
### Convert Decimal to float in pricehistory
* [commit 09d6bb7](https://github.com/holgern/beem/commit/09d6bb717cfb6852ce405ebb3808601cf8479673)
### Fix unit test for the amount class
* [commit 0a6f5af](https://github.com/holgern/beem/commit/0a6f5af55f0eb8cf1740263a66b9f434989ce511)
### Fix issue #171 - Account.get_balance function shows summed value of liquid balance and unclaimed reward
* [commit ae53db5](https://github.com/holgern/beem/commit/ae53db526b08c66ccdb1166214ed7015d68e660a)
### Add option to use fixed-point arithmetic on the Amount class
* [commit 15aff5f](https://github.com/holgern/beem/commit/15aff5f093af6fff0b44c3efdedf033b7f18fd4d)
* When fixed_point_arithmetic is set to True, is the amount parameter always be rounded down to the asset precision
* Add Handling of multiplying with a Price object
* Both parameter are rounded down to the precision in all comparison operation as ==,

### Cast amount to float for calculations
* [commit 1364f73](https://github.com/holgern/beem/commit/1364f732e94d9347682f2869eaec61553555ca63)
### Use decimal for amount in the Amount class 
* [commit bde5380](https://github.com/holgern/beem/commit/bde53801ac7f38116739410a1be7dcb616635ce3)
* change the internal representation of amount from float to Decimal
* Round amount down to precision
* Adapt amount test to Decimal
* Round down all other number in all operatio
### Improve all generator functions in account
* [commit 13424bd](https://github.com/holgern/beem/commit/13424bd177aca781508d69a71688d66c7c5ad60f)
* set num_retries to a default of 100, in order to prevent crashing when a wrong node is set

### Fix issue #162 - one-time use private key can be entered instead of unlocking the wallet
* [commit 4a85f37](https://github.com/holgern/beem/commit/4a85f3762771be3ee4efae2346e3243241ab01a9)
* prepare next beem release and increase version number
* switch default chain to STEEMAPPBASE

## Github account
https://github.com/holgern

- - -

This page is synchronized from the post: ['update for beem - amount in the Amount class is a Decimal instead of a float and bug-fix for account.get_balance()'](https://steemit.com/@holger80/update-for-beem-amount-in-the-amount-class-is-a-decimal-instead-of-a-float-and-bug-fix-for-account-getbalance)
