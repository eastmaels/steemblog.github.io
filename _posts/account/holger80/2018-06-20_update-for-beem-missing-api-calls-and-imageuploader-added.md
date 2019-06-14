
---
title: 'Update for beem - missing API calls and ImageUploader added'
permlink: update-for-beem-missing-api-calls-and-imageuploader-added
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-06-20 18:36:15
categories:
- utopian-io
tags:
- utopian-io
- development
- beem
- python
- busy
thumbnail: 'https://cdn.utopian.io/posts/d563a408c062506aed88befbe7781399184fbeem-logo.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---



#### Repository
https://github.com/holgern/beem

<center>
![beem-logo.png](https://cdn.utopian.io/posts/d563a408c062506aed88befbe7781399184fbeem-logo.png)
</center>
[beem](https://github.com/holgern/beem) is a python library for steem. beem has now 526 unit tests and a coverage of 76 %. The current version is 0.19.39.
I created a discord channel for answering a question or discussing beem: https://discord.gg/4HM592V

## New features
### ImageUploader
Thanks to @embrebeyler and his python library [imagehoster-python-client](https://github.com/emre/imagehoster-python-client) I was able to add a ImageUploader class to beem. I could simplify the original code to:
```
from beemgraphenebase.ecdsasig import sign_message
message = py23_bytes(self.challange, "ascii") + image_data
signature = sign_message(message, posting_wif)
signature_in_hex = hexlify(signature).decode("ascii")
```
It is now possible to upload images in bytes representation directly to steemitimages.com:
```
from beem.imageuploader import ImageUploader
from beem import Steem

import io
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
import matplotlib.figure
from matplotlib.figure import Figure

fig = Figure(figsize=(10,  10), dpi=100)
canvas = FigureCanvas(fig)
ax = fig.add_axes([.1, .1, .8, .8])
ax.plot(range(15))
ax.set_xlabel('x')
ax.set_ylabel('y')
buf = io.BytesIO()
fig.savefig(buf, format='png')
buf.seek(0)

stm = Steem(keys=["xxx"])
io = ImageUploader(steem_instance=stm)
io.upload(buf.read(), "holger80")
```
with the result:
```
{'url': 'https://cdn.steemitimages.com/DQmXvmNs3UxXRYqwA7ieP3WMcTLJeRyN3UdvsejD46UqaMv/image'}
```
It's then possible to embed this link into a post:
```
![]('https://cdn.steemitimages.com/DQmXvmNs3UxXRYqwA7ieP3WMcTLJeRyN3UdvsejD46UqaMv/image)
```
![]('https://cdn.steemitimages.com/DQmXvmNs3UxXRYqwA7ieP3WMcTLJeRyN3UdvsejD46UqaMv/image)

## `update_nodes()` from `NodeList` improved
`update_nodes` calculates now the score for each node by:
```
score = (n - rank) / (n- 1) * 100
weigthed_score = score * weights_dict[benchmark]
sum_score += weigthed_score 
```
where `rank` is the rank of the node at the specific benchmark. `n` is the number of nodes and `weights_dict[benchmark]` the the weight for this benchmark. The sum of `weights_dict` is one.
At the moment 5 benchmarks are calculated every hour are written into the metadata field of @fullnodeupdate.
Available benchmarks:

* block
* history
* apicall
* block_diff
* config

## Api Definitions
[Api Definitions](https://beem.readthedocs.io/en/latest/apidefinitions.html) are created with examples for all available API calls defined [here](https://developers.steem.io/apidefinitions/#apidefinitions-condenser-api).

![image.png](https://ipfs.busy.org/ipfs/QmfN2d8CVammXQUYLsKVaDaVPLeCy3yMi6vg9sH8cw7Sbo)


## Missing API calls were added
* `get_expiring_vesting_delegations`
```
from beem.account import Account
acc = Account("emrebeyler")
print(acc.get_expiring_vesting_delegations())

[{'id': 2341553, 'delegator': 'emrebeyler', 'vesting_shares': '2439949.303020 VESTS', 'expiration': '2018-06-22T15:10:00'}, {'id': 2212414, 'delegator': 'emrebeyler', 'vesting_shares': '20338.649992 VESTS', 'expiration': '2018-06-25T23:48:45'}]
```
*  `get_feed_entries`
```
from beem.account import Account
acc = Account("gtg")
for f in acc.get_feed_entries():
    print(f)
```
*  `get_blog_authors`
```
from beem.account import Account
acc = Account("gtg")
for h in acc.get_blog_authors():
    print(h)
```
*  `get_savings_withdrawals`
```
from beem.account import Account
acc = Account("gtg")
print(acc.get_savings_withdrawals(direction="from"))
print(acc.get_savings_withdrawals(direction="to"))
```
*  `get_escrow`
```
from beem.account import Account
acc = Account("gtg")
print(acc.get_escrow())
```
* `get_account_reputations`
```
from beem.blockchain import Blockchain
b = Blockchain()
for h in b.get_account_reputations():
    print(h)
```

* `Discussions_by_author_before_date`
```
from beem.discussions import Query, Discussions_by_author_before_date
for h in Discussions_by_author_before_date(limit=10, author="gtg"):
    print(h)
```
* `get_transaction_hex`
```
from beem.blockchain import Blockchain
b = Blockchain()
block = b.get_current_block()
trx = block.json()["transactions"][0]
print(b.get_transaction_hex(trx))
```
* `get_tags_used_by_author`
```
from beem.account import Account
acc = Account("gtg")
print(acc.get_tags_used_by_author())
```
* `Replies_by_last_update`
```
from beem.discussions import Query, Replies_by_last_update
q = Query(limit=10, start_author="steemit", start_permlink="firstpost")
for h in Replies_by_last_update(q):
    print(h)
```
* `Trending_tags`
```
from beem.discussions import Query, Trending_tags
q = Query(limit=10, start_tag="steemit")
for h in Trending_tags(q):
    print(h)

```
*  `get_vesting_delegations`
```
from beem.account import Account
acc = Account("gtg")
for v in acc.get_vesting_delegations():
    print(v)

```

## Commit history
### Try to improve blocks with threading and some more error caption
* [commit 782544b](https://github.com/holgern/beem/commit/782544be64109f9d64f0c4061d045c3086a95619)

### `get_expiring_vesting_delegations` added to account
* [commit dc18460](https://github.com/holgern/beem/commit/dc184607344f46ff0bd2956d5bab6ce2aff04b9c)
#### Account
* `get_expiring_vesting_delegations` added
#### Blockchain
* thread_limit parameter removed
* batch_mode set to True for threaded blocks()
* block sanity check added for threaded blocks()

### Add missing api functions
* [commit 093ab14](https://github.com/holgern/beem/commit/093ab145687ab7f4ceec17d8e68f254e390d051c)
#### Account
* `get_feed_entries`, `get_blog_authors`, `get_savings_withdrawals`, `get_escrow`
* Documentation improved
* Account parameter handling improved
#### Blockchain
* `get_account_reputations` added

### ImageUploader added
* [commit 169dc2b](https://github.com/holgern/beem/commit/169dc2b2074d3647dca5449314daeeded17da603)
* ImageUploader can be used to upload an image file or an image in bytes

### Improved score calculated for update_nodes
* [commit e669e14](https://github.com/holgern/beem/commit/e669e145f619c482e19eb3c70425ce8c15a9ee37)

### Improved blocks with threads and improved unit test
* [commit 61ddd1e](https://github.com/holgern/beem/commit/61ddd1e2081b463e431b555f8ba24aea77d66b75)

### Add Discussions_by_author_before_date and improve some other discussions class
* [commit 6b5526](https://github.com/holgern/beem/commit/6b5526b22f345528d40f661d688d5f0b25fced7d)
#### Discussions
* `Discussions_by_author_before_date`  added
#### beemapi/Nodes
* add an option to freeze a node, in order to prevent switching to the next node

### get_vesting_delegations added and block date conversion improved
* [commit ce9c512](https://github.com/holgern/beem/commit/ce9c51265d57a3ea91b7c336634804cf73e4638f)
#### Account
* `get_vesting_delegations` added

### More functions added and a complete list of API definitions added to docs
* [commit c955f2a](https://github.com/holgern/beem/commit/c955f2ada6d2b53b1bfaa00ad7bd07159f05a7da)

#### Discussions
* `Replies_by_last_update` and `Trending_tags` added
#### Blockchain
* `get_transaction_hex` added
#### Account
* `get_tags_used_by_author` added
#### Docs
* apidifinitions added

### Block and Blockchain improved and Readme adapted to changes
* [commit 62fe18c](https://github.com/holgern/beem/commit/62fe18cdec72ecc39317dc75eb75c4f7d68e82bf)

### Block identifier handling improved and test_blockchain_treading improved
* [commit 347c7ba](https://github.com/holgern/beem/commit/347c7ba791276bfc614775b8a69982fa1c256a46)

### GitHub Account
https://github.com/holgern
___
If you like what I'm doing, please consider @holger80 as one of your witnesses ([steemconnect](https://v2.steemconnect.com/sign/account-witness-vote?witness=holger80&approve=1)).

- - -

This page is synchronized from the post: ['Update for beem - missing API calls and ImageUploader added'](https://steemit.com/@holger80/update-for-beem-missing-api-calls-and-imageuploader-added)
