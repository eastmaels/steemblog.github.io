
---
title: 'How to use the logger class to filter out unwanted messages from beem'
permlink: how-to-use-the-logger-class-to-filter-out-unwanted-messages-from-beem
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-04-10 14:55:15
categories:
- python
tags:
- python
- beem
- logger
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmWT9VQ3U3mLCczqgiGgnj1xpQ2DR59Mrj4bVPT5taVUpu'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


When you run a python script which uses beem, you might have seen a lot of `Retry RPC Call on node: https://steemd.minnowsupportproject.org (1/5)`messages:
`
![image.png](https://ipfs.busy.org/ipfs/QmWT9VQ3U3mLCczqgiGgnj1xpQ2DR59Mrj4bVPT5taVUpu)

These messages indicate that the node was currently not available and the same node is retried again. Normally, it works then. The messages are only a problem when a lot of api calls are broadcasted, e.g.g when reading the complete account history of steembasicincome.

You can use the logger class to get rid of these messages by increasing the logger level just for the `beemapi.node` module.

Let's start with a simply script that uses the logger class but without any configuration:

```
#!/usr/bin/python
from beem.account import Account
import logging

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)
logging.basicConfig()


if __name__ == '__main__':
    account = Account("steembasicincome")
    n = 0
    logger.info("starting....")
    for op in account.history():
        n += 1
    
    logger.info("%s has %d history operations" % (account["name"], n))
```
After storing the script as `use_logger1.py` and running it by:
```
python use_logger1.py
```
I'm getting really a lot of useless logging messages:

![image.png](https://ipfs.busy.org/ipfs/QmaDxbvjPpMzn8axL4JeEoUbmUqa3pyfLf3rXCR58i93NY)

## Exclude logging messages from `beemapi.node`
It is possible to configure the logging class and increase the level of the beemapi.node module to the ERROR level:
```
#!/usr/bin/python
from beem.account import Account
import logging
import logging.config

logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)
logging.config.dictConfig({
    'version': 1,
    'disable_existing_loggers': False,  # this fixes the problem
    'formatters': {
        'standard': {
            "format": "%(asctime)s [%(levelname)s] %(name)s: %(message)s",
            "datefmt": "%Y-%m-%d %H:%M"
        },
    },
    'handlers': {
        'default': {
            'level':'INFO',
            "formatter": "standard",
            'class':'logging.StreamHandler',
        },
    },
    'loggers': {
        'beemapi.node': {
            "level": "ERROR",
            "handlers": ["default"],
            "propagate": False
        },
        '': {
            'handlers': ['default'],
            'level': 'INFO',
            'propagate': True
        }
    }
})


if __name__ == '__main__':
    account = Account("steembasicincome")
    n = 0
    logger.info("starting....")
    for op in account.history():
        n += 1
    
    logger.info("%s has %d history operations" % (account["name"], n))
    
 ```
After storing it as `use_logger2.py` and running it, the logging output contains only information that are useful:

![image.png](https://ipfs.busy.org/ipfs/QmdDyE8dZz8KNbi9ZtThHVH1AvYidcFemyzgpdbFywPCez)

## Configuring the logging class in an external file

It is also possible to store the configuration in an external logging.json file:
```
{
    "version": 1,
    "disable_existing_loggers": false,
    "formatters": {
        "simple": {
            "format": "%(asctime)s [%(levelname)s] %(name)s: %(message)s",
            "datefmt": "%Y-%m-%d %H:%M"
        }
    },

    "handlers": {
        "default": {
            "level":"INFO",
            "formatter": "simple",
            "class":"logging.StreamHandler"
        }
    },
    "loggers": {
        "beemapi.node": {
            "level": "ERROR",
            "handlers": ["default"],
            "propagate": false
        },
        "": {
            "handlers": ["default"],
            "level": "INFO"
        }
    }
}
```
and reading it in the python script:
```
#!/usr/bin/python
from beem.account import Account
import logging
import logging.config
import os
import json

logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)

def setup_logging(
    default_path='logging.json',
    default_level=logging.INFO
):
    """Setup logging configuration

    """
    path = default_path
    if os.path.exists(path):
        with open(path, 'rt') as f:
            config = json.load(f)
        logging.config.dictConfig(config)
    else:
        logging.basicConfig(level=default_level)


if __name__ == '__main__':
    setup_logging("./logging.json")
    account = Account("steembasicincome")
    n = 0
    logger.info("starting....")
    for op in account.history():
        n += 1
    
    logger.info("%s has %d history operations" % (account["name"], n))
```
This allows it to use the same configuration in multiple projects. After storing it under `use_logging3.py` in the same directory as the logging.json file, it can be started by `python use_logging3.py` and produces the following output:
![image.png](https://ipfs.busy.org/ipfs/QmdDyE8dZz8KNbi9ZtThHVH1AvYidcFemyzgpdbFywPCez)

## Formation of the logging output
The logging output format was set by
```
            "format": "%(asctime)s [%(levelname)s] %(name)s: %(message)s",
            "datefmt": "%Y-%m-%d %H:%M"
```
More variables can be found in the [logger documentation](https://docs.python.org/3/library/logging.html). The different options for datefmt can be found [here](https://docs.python.org/3/library/time.html#time.strftime).


- - -

This page is synchronized from the post: ['How to use the logger class to filter out unwanted messages from beem'](https://steemit.com/@holger80/how-to-use-the-logger-class-to-filter-out-unwanted-messages-from-beem)
