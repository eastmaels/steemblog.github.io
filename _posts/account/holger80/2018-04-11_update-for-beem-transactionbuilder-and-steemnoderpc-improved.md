
---
title: 'Update for beem - transactionbuilder and SteemNodeRPC  improved'
permlink: update-for-beem-transactionbuilder-and-steemnoderpc-improved
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-11 19:32:18
categories:
- utopian-io
tags:
- utopian-io
- python
- beem
- appbase
- steemdev
thumbnail: None
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


[beem](https://github.com/holgern/beem) is a python library for steem. The newest version is 0.19.21. There are now 363 unit tests with a coverage of 84%. Running all tests takes about one hour.

I created a discord channel for answering question or discussing beem: https://discord.gg/4HM592V

I requested a logo for beem, you can participate and submit [here](https://utopian.io/utopian-io/@holger80/logo-request-for-beem-a-python-library-for-steem) until 13 April 23:59 UTC.

# GrapheneRPC and SteemNodeRPC improved
Thanks to the node issues, exception handling could be greatly improved. The error count is now indviduall for each node. 

Every time an error was observed, the error count for the specific node is increased and the next node from the list is used. There is `num_retries` which is normally deactivated (-1), but when set, `NumRetriesReached` is raised when

* one node is in the list and  `NumRetriesReached` errors are observed
* more than one node is in the list and node `x` was used `NumRetriesReached` times and everytime an error occured. The other nodes are also faulty and therefore node `x` was tried `NumRetriesReached` times.

`num_retries_call` is newly introduced and normally set to 5. When an RPC call was not successfully and the error means that it could work when retrying, ` error_cnt_call ` is increased and the same call is retried. Only when `num_retries_call` is reached, the next node is used. The error count for `num_retries_call` is resetted after each sucessfull RPC call.

Different kind of server errors are parsed now and handled.

# Calculate the needed voting percentage for certain rshares
`rshares_to_vote_pct` was added to the steem class. A vote with 1e9 rshares should be casted. The voter has 500 Steem Power and 93% voting power left. What is the needed vote percentage?
```
from beem import Steem
stm = Steem()
stm.rshares_to_vote_pct(1e9, steem_power=500, voting_power=9300)
537
```
The vote should be casted with 5.37%.

# Transactionbuilder improved
Thanks to the [unit tests](https://steemit.com/utopian-io/@holger80/update-for-beem-coverage-improved-and-other-improvements#@leprechaun/re-holger80-update-for-beem-coverage-improved-and-other-improvements-20180407t143916795z) from @leprechaun, I could improve the Transactionbuilder in the newest version of beem.

A transaction is a JSON structure and consists of 

* `expiration`
* `ref_block_num`
* `ref_block_prefix`
* `operations`
* `extensions`
* `signatures`

Here you can see an example for a transfer transaction:
```
{'expiration': '2018-04-09T15:35:21', 'ref_block_num': 12523,
'ref_block_prefix': 2784763404,
'operations': [['transfer', {'from': 'user_a', 'to': 'user_b', 'amount': '0.010 SBD',
'memo': 'hello'}]],
'extensions': [], 'signatures': []}
```
A transaction is build by the `TransactionBuilder` and can only be broadcast to the blockchain, when it is correctly signed. A `transfer` transaction must be signed by the `active` private key of the sender and broadcasted before `expiration`.

There is the possibility to add other accounts, that are able to or must sign. The transaction can then be transmitted when at least `weight_threshold` accounts from the list signed the transaction.
For example, the account of user `user_a` has for its `active` key one addional user `user_c` which must also sign all transaction, as the `weight_threshold` is 2.

```
account["active"] = 
{'weight_threshold': 2, 'account_auths': [['user_c', 1]], 'key_auths': [['STM...', 1]]}
```

## Using a wallet or not
The functions:
* `appendSigner`
* `addSigningInformation`
* `appendMissingSignatures`

can only be used when private keys were stored in the wallet.
Whenever the keys should be set directly, only 

* `appendWif`

must be used.

## Sign transactions with beem without using the wallet and build the transaction by hand
When not using the wallet, the transaction has to build by hand.

```
from beem import Steem
from beem.transactionbuilder import TransactionBuilder
stm = Steem()
tx = TransactionBuilder(steem_instance=stm)
tx.appendOps(Transfer(**{"from": 'user_a',
                         "to": 'user_b',
                         "amount": '1.000 SBD',
                         "memo": 'test 2'}))
tx.appendWif('5.....') # `user_a`
tx.appendWif('5.....') # `user_c`
tx.sign()
tx.broadcast()
```
When `user_a` and `user_c` should not share their password, the last 4 lines become:
```
tx.appendWif('5.....') # `user_a`
tx.sign()
tx.clearWifs()
tx_json = tx.json()
# Send the tx_json structure to `user_c` and be sure that `tx_json["expiration"] is in the future.
tx = TransactionBuilder(tx=tx_json, steem_instance=stm)
tx.appendWif('5.....') # `user_c`
tx.sign(reconstruct_tx=False)
tx.broadcast()
```
`tx.sign(reconstruct_tx=False)` does not delete the signature from `user_a`.
## Using the wallet
When using the wallet, high level functions as  `beem.account.transfer`
can be used. The keys can be stored permanent or temporary.


### Setting a password and store the keys permanent
Let's assume the wallet is ready and a wallet-password is set. If not, a wallet can be started from zero with:
```
from beem import Steem
stm = Steem()
stm.wallet.wipe(True)
stm.wallet.create("secret_password")
```
In this case, we are taking the example from above, where `user_a` and `user_c` has to sign.
At the first time, the private keys must added to the wallet:
```
stm.wallet.unlock("secret_password")
stm.wallet.addPrivateKey("5............") # active private key from user_a
stm.wallet.addPrivateKey("5............") # active private key from user_c
```
## Storing the keys temporary
Both private keys are stored temporary in the wallet, when they are given to the Steem class by:
```
from beem import Steem
stm = Steem(keys=["5............", "5............"]) # active keys from user_a and user_c
```
The keys are stored in `stm.wallet.keys` and can be deleted by `stm.wallet.clear_local_keys()`.
With `stm.wallet.setKeys('5....')` new keys can be added to the temporary storage.  
### Using account.transfer
Now, we can start to broadcast a transaction (transfer 1 SBD from user_a to user_b with memo "test"):
```
from beem.account import Account
from beem import Steem
stm = Steem()
stm.wallet.unlock("secret_password")
acc = Account("user_a", steem_instance=stm)
acc.transfer("user_b", 1, "SBD", memo="test")
```
When the keys should be stored only temporary, it can be done by replacing:
```
stm = Steem()
stm.wallet.unlock("secret_password")
```
with
```
from beem import Steem
stm = Steem(keys=["5............", "5............"]) # keys from user_a and user_c
```
The transfer function automatically detects that the transaction has to be signed by `user_a` and `user_c` and searching for the keays in the wallet. When all were found, the transaction is signed and broadcasted.
### Build your Transaction by hand
```
from beem.transactionbuilder import TransactionBuilder
from beem import Steem
stm = Steem()
stm.wallet.unlock("secret_password")
tx = TransactionBuilder(steem_instance=stm)
tx.appendOps(Transfer(**{"from": 'user_a',
                         "to": 'user_b',
                         "amount": '1.000 SBD',
                         "memo": 'test 2'}))
tx.appendSigner('user_a', 'active')
tx.sign()
tx.broadcast()
```
It is detected that `user_c` is needed and automatically added. The private keys can also be stored temporary as in the example above.
## Offline signing with two different wallets
### `user_a`
`stm.wallet` contains now only the active key of `user_a`
```
from beem.transactionbuilder import TransactionBuilder
from beem import Steem
stm = Steem()
stm.wallet.unlock("secret_password")
tx = TransactionBuilder(steem_instance=stm)
tx.appendOps(Transfer(**{"from": 'user_a',
                         "to": 'user_b',
                         "amount": '1.000 SBD',
                         "memo": 'test 2'}))
tx.appendSigner('user_a', 'active')
tx.addSigningInformation("user_a", "active")
tx.sign()
tx.clearWifs()
tx_json = tx.json()
```
`tx_json` is now sended to `user_c`
### `user_c`
`stm.wallet` contains now only the active key of `user_c`
```
from beem.transactionbuilder import TransactionBuilder
from beem import Steem
stm = Steem()
stm.wallet.unlock("secret_password")
tx = TransactionBuilder(tx=tx_json, steem_instance=stm)
tx.appendMissingSignatures()
tx.sign(reconstruct_tx=False)
tx.broadcast()
```

## Offline signing with two different wallets storing the keys temporary
### `user_a`
`stm.wallet` is now empty.
```
from beem.transactionbuilder import TransactionBuilder
from beem import Steem
stm = Steem(keys=["5............"]) # keys from user_a
tx = TransactionBuilder(steem_instance=stm)
tx.appendOps(Transfer(**{"from": 'user_a',
                         "to": 'user_b',
                         "amount": '1.000 SBD',
                         "memo": 'test 2'}))
tx.appendSigner('user_a', 'active')
tx.addSigningInformation("user_a", "active")
tx.sign()
tx.clearWifs()
tx_json = tx.json()
```
`tx_json` is now sended to `user_c`
### `user_c`
`stm.wallet` contains now only the active key of `user_c`
```
from beem.transactionbuilder import TransactionBuilder
from beem import Steem
stm = Steem(keys=["5............"]) # keys from user_c
tx = TransactionBuilder(tx=tx_json, steem_instance=stm)
tx.appendMissingSignatures()
tx.sign(reconstruct_tx=False)
tx.broadcast()
```

# Store streamed blocks in gzipped text files
I added a script which using pickle to serialize a block and then creates a hex number of it. 
This line is then written as gzipped text file. One blockchain hour needs around 7 MB of disk space.
The advantage of this approach is that each line belongs to one block.
The example can be found here: https://github.com/holgern/beem/blob/master/examples/write_blocks_to_file.py

```
from binascii import hexlify, unhexlify
import gzip
from datetime import datetime, timedelta
from beem.blockchain import Blockchain
try:
    from cPickle import dumps, loads
except ImportError:
    from pickle import dumps, loads

def s_dump_binary(elt_to_pickle, file_obj):
    pickled_elt_str = dumps(elt_to_pickle)
    file_obj.write(hexlify(pickled_elt_str))
    file_obj.write(bytes('\n'.encode("latin1")))

def s_load_binary(file_obj):
    for line in file_obj:
        elt = loads(unhexlify(line[:-1]))
        yield elt
if __name__ == "__main__":
    blockchain = Blockchain()
    threading = True
    thread_num = 8
    cur_block = blockchain.get_current_block()
    stop = cur_block.identifier
    startdate = cur_block.time() - timedelta(seconds=3600)
    start = blockchain.get_estimated_block_num(startdate, accurate=True)
    outf = gzip.open('blocks1.pkl', 'w')
    blocks = 0
    for block in blockchain.stream(opNames=[], start=start, stop=stop, threading=threading, thread_num=thread_num):
        s_dump_binary(block, outf)
```

The block data can be read by:

```
    for block in s_load_binary(gzip.open('blocks1.pkl')):
        print(block)
```
# Full API node benchmark script
I added under examples a benchmark script [benchmark_nodes2.py](https://github.com/holgern/beem/blob/master/examples/benchmark_nodes2.py) from which the results can be seen in this post: [full-api-node-statistics-with-beem-april-10th-2018](https://steemit.com/steemdev/@holger80/full-api-node-statistics-with-beem-april-10th-2018)
# Changes
## rpc improvements
* https://github.com/holgern/beem/commit/2011b8ea5df03d9b9782b44b9de80bc204c462a0
### account
* function for reputation to score calculation
* Doku improved
### amount
* better handling of offline mode
### steem
* Doku improved
### transactionbuilder
* handing of appbase for tx verify and broadcast improved
### utils
* node list added as function
* not needed function removed
### steemnoderpc
* handling of server errors improved
### objects
* Amount fixed for appbase
### exception
* RPCErrorDoRetry added, when a rpc call should be retried
### grapherpc
* Handling of server error 500 to 511 added
* better handling when get_config does not work
### unit tests
* nodes and nodes_appbase are take from utils
* keys is used instead of wif for Steem()
* unit test for broadcast added
* unit test for appbase for verify added
* test_operations added
* test_types added
## More Unit tests
* https://github.com/holgern/beem/commit/9a72a1c558952d456ee3f5d667e6a36f5f54a2c5
* More unit tests
* Handling of Amount for Appbase improved
* Fixed unit tests for Python 2.7
## Improve handling of lists as rpc reply
* https://github.com/holgern/beem/commit/97e8fcb1f82b4f6fb2bbdd31c6e667e5290f2dbe
## Improve coverage for graphenerpc
* https://github.com/holgern/beem/commit/478518897c1c1726f3f540f0813342a469888bb7
## Transactionbuilder improved and more unit tests 
* https://github.com/holgern/beem/commit/56f22b04a23bbcdfae1ccbc509107f96c73b5e2e
### Steem
* vests_to_sbd and vests_to_rshares added
* rshares_to_vote_pct let you calculate how many voting percentage are needed  to vote with a desired rshares amount
* app can be set for post, when not set, it is set to beem/version
* Doku improved
### Transactionbuilder
* Doku improved
* proposer from __ini__ removed, as it had no function
* _is_signed and _is_constructed fixed
* reconstruct_tx added to sign and addSigningInformation, when set to False, previous signatures are not deleted anymore
* KeyNotFound exception handled
### Wallet
* KeyNotFound exception handled, when more than one key_auths are available
### Graphenerpc
* version string set to user-agent
### Publickey
* Doku improved
### Unit tests
### test_steem:
* test for test_post improved
* test_sp_to_sbd and test_rshares_to_vote_pct added
### tst_testnet:
* test_wallet_keys added  for testing the wallet
* test_transfer_1of1, test_transfer_2of2_simple, test_transfer_2of2_wallet and test_transfer_2of2_serialized_deserialized added thanks to @leprechaun
## Examples added 
* https://github.com/holgern/beem/commit/d6609e7f72623792751579fa9ea68fbd9d541ee9
### Wallet
* KeyNotFound raised when no key is found
### Examples
### write blocks to file
* decodes streamed blocks to numbers with hexlify and write them line by line as gzip compressed file
### post_to_html
* creates a html page from any given authorperm string
### post_to_md
* saves the markdown code from any given authorperm link
### Unit tests
test_vote improved
## Refactoring and improvements
* https://github.com/holgern/beem/commit/d2a9563bb2a1138bf64a5377cab72bd873842c24
### Comment
* Check added for empty returns
Market
* refactoring
* Checks added fro empty rpc returns
### storage
* default nodes are taken from utils.get_node_list
### Vote
* Check added for empty rpc calls
* Check added for Unkown key return
### Exception
* UnkownKey added
### Steemnoderpc
* set_next_node_on_empty_reply added, to add a check on empty returns on the next rpc call
* Refactoring
* UnkownKey exception added
### Transaction
* refactoring
### Unit tests
* test_vote improve and check for VoteDoesNotExistsException added
## Add clearWifs and improve unit tests
* https://github.com/holgern/beem/commit/2d364c670eaed95b7f9ad275898b8431446a6e9c
## Transactionbuild
* add clearWifs
## Examples
* use nodes from get_node_list
## test_testnet
* improved tests for Transactionbuilder
## benchmark_nodes2 added 
* https://github.com/holgern/beem/commit/c30aa2b6858bba631d842fe9739448f1ca391396
### Graphenerpc
* Handling for Connectionerror for request posts added
* Each node has its own error count now
### benchmark_nodes2 added
## _metadata_to_dict added to comment
* https://github.com/holgern/beem/commit/52203d95f2c718daca272f77b974703011da39de
### test_comment
* preselect working node
## Improved numerical calculation of votes
* https://github.com/holgern/beem/commit/5ea3ebbe5a7bb81d92ef5ead3cca1d9eee5f1e55
### Steem
* max_vote_denom is corrected and calculated as in steemit/steem
### beemgrapheneapi
* handling of empty replies added

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@holger80/update-for-beem-transactionbuilder-and-steemnoderpc-improved">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['Update for beem - transactionbuilder and SteemNodeRPC  improved'](https://steemit.com/@holger80/update-for-beem-transactionbuilder-and-steemnoderpc-improved)
