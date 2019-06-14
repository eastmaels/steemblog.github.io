
---
title: 'steemengine - a python library for steem-engine.com'
permlink: steemengine-a-python-library-for-steem-engine-com
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-02-27 11:59:18
categories:
- utopian-io
tags:
- utopian-io
- development
- steem-engine
- steemdev
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmWwUBAnWZajPzp97UGMw24axbRDc5QEZGcuneXUnZ9cmN'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


#### Repository
https://github.com/holgern/steemengine

![image.png](https://ipfs.busy.org/ipfs/QmWwUBAnWZajPzp97UGMw24axbRDc5QEZGcuneXUnZ9cmN)


## Steem Engine
The python library uses a rpc client to communicate with the steem-engine.com json RPC server. All descripted methods at https://github.com/harpagon210/steemsmartcontracts/wiki/JSON-RPC-server have been implemented.

Furthermore a website api call for receiving account transfer history is supported.

## Technology Stack
The library uses a rpc client based on the `requests` library for receiving data from the steem-engine.com JSON RPC server.

Any function call from the RPC class is translated into a RPC JSON call
```
rpc.find({"contract": contract_name, "table": table_name, "query": query,
                             "limit": limit, "offset": offset, "indexes": indexes}, endpoint="contracts")
```
will be converted to:
```
{
    "jsonrpc": "2.0",
    "method": "find",
    "params": {
        "contract": "contract_name",
        "table": "table_name",
        "query": query,
        "limit": limit,
	"offset": offset,
	"indexes":indexes}
    },
    "id": 1
}
```
with the RPC JSON server url:
`https://api.steem-engine.com/rpc/contracts"`

All possible calls have been collected in the `Api` class.

## Installation
The python package can be installed by:

pip install steemengine

## Usage

Get the latest block of the sidechain
```
from steemengine.api import Api
api = Api()
print(api.getLatestBlockInfo())
```

Get the block with the specified block number of the sidechain
```
from steemengine.api import Api
api = Api()
print(api.getBlockInfo(1910))
```

Retrieve the specified transaction info of the sidechain
```
from steemengine.api import Api
api = Api()
print(api.getTransactionInfo("e6c7f351b3743d1ed3d66eb9c6f2c102020aaa5d"))
```

Get the contract specified from the database
```
from steemengine.api import Api
api = Api()
print(api.getContract("tokens"))
```

Get an array of objects that match the query from the table of the specified contract
```
from steemengine.api import Api
api = Api()
print(api.find("tokens", "tokens"))
```

Get the object that matches the query from the table of the specified contract
```
from steemengine.api import Api
api = Api()
print(api.findOne("tokens", "tokens"))
```

Get the transaction history for an account and a token
```
from steemengine.api import Api
api = Api()
print(api.get_history("holger80", "NINJA"))
```

## Roadmap
The next step will be using the [beem](https://github.com/holgern/beem) library for sending token.
I'm planing also a command line tool for viewing token balances and sending token.


## How to contribute?
Please use the issue tracker for bug reports and feature wishes. Pull requests are also welcome.

## GitHub Account
https://github.com/holgern

- - -

This page is synchronized from the post: ['steemengine - a python library for steem-engine.com'](https://steemit.com/@holger80/steemengine-a-python-library-for-steem-engine-com)
