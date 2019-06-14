
---
title: 'steemdesktop - new layout and account history of the last 24h is shown'
permlink: steemdesktop-new-layout-and-account-history-of-the-last-24h-is-shown
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-03-25 13:37:30
categories:
- utopian-io
tags:
- utopian-io
- development
- steemdesktop
- steemdev
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmUGT1D2Zp8n96aVBTFVfCfAq2SspHiCcQP8qXzAQRvucd'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Repository
https://github.com/holgern/steemdesktop

## steemdesktop
steemdesktop is a new Qt5 python app that allows it to check the current state of an steem account. 

## New features
### Qt designer is used to layout the application
![image.png](https://ipfs.busy.org/ipfs/QmUGT1D2Zp8n96aVBTFVfCfAq2SspHiCcQP8qXzAQRvucd)

I'm using now Qt designer to layout all the widget for Mainwindow.
The ui file can then be converted into a py file by:
```
pyuic5 ui/mainwindow.ui -o src/main/python/ui_mainwin
dow.py
```
This py file is then included and added to the main window by:
```
from ui_mainwindow import Ui_MainWindow
```
and
```
class MainWindow(QMainWindow, Ui_MainWindow):
    def __init__(self):
        super(QMainWindow, self).__init__()
        # Set up the user interface from Designer.
        self.setupUi(self)
```

I added two progressbars for showing the vote power and the available RC. The SP/SBD/STEEM balance is shown using three QLabels. The upvote of the last 24 hours are shown in a QListWidget. Curation rewards and author rewards are shown below.

## Using a QRunnable to prevent GUI blocking
I'm using the following class to automatically let a function run in a thread, in order to prevent gui blocking.
```
class Worker(QRunnable):
    '''
    Worker thread

    Inherits from QRunnable to handler worker thread setup, signals and wrap-up.

    :param callback: The function callback to run on this worker thread. Supplied args and 
                     kwargs will be passed through to the runner.
    :type callback: function
    :param args: Arguments to pass to the callback function
    :param kwargs: Keywords to pass to the callback function

    '''

    def __init__(self, fn, *args, **kwargs):
        super(Worker, self).__init__()
        # Store constructor arguments (re-used for processing)
        self.fn = fn
        self.args = args
        self.kwargs = kwargs

    @pyqtSlot()
    def run(self):
        '''
        Initialise the runner function with passed args, kwargs.
        '''
        self.fn(*self.args, **self.kwargs)
```
The usage is then:
```
self.threadpool = QThreadPool()
worker = Worker(self.refresh_account)
self.threadpool.start(worker)   
```
In this case, the `refresh_account` function is started in a new thread.

## Parse and show account history  of the last 24 hours
I'm continuously parse the account history every 15 s of the last 24 hours. Only new ops are stored and displayed.

![image.png](https://ipfs.busy.org/ipfs/QmTdWWM6yweVYbcJkRmysKZ7GFPc6AEAbY7dbuxKkrMF9y)


The block number, trx index,  op index and the virtual op index is stored in `self.append_hist_info`
and used to skip older operations when starting from `start_block - 3`. This allows it reduce the number of api calls by preventing to reload the account history every time. The account history index itself is not reliable.
```
    def append_account_hist(self):
        start_block = self.append_hist_info["start_block"]
        trx_ids = self.append_hist_info["trx_ids"]
        for op in self.hist_account.history(start=start_block - 3, use_block_num=True):
            if op["block"] < start_block:
                continue
            elif op["block"] == start_block:
                if op["trx_id"] in trx_ids:
                    continue
                else:
                    trx_ids.append(op["trx_id"])
            else:
                trx_ids = [op["trx_id"]]

            start_block = op["block"]
            self.account_history.append(op)        
        self.append_hist_info["start_block"] = start_block
        self.append_hist_info["trx_ids"] = trx_ids
```
### Printing a notification on every new account history operation
When the check box is set, a notification is send on every new account history op.
![image.png](https://ipfs.busy.org/ipfs/QmYm7ks2mb4RzxUp1dAdRMrLsJeK7YnPFcZJciH5qV3iXs)

## Deploy binaries for linux and osx
![image.png](https://ipfs.busy.org/ipfs/QmXZftCa2MzcfRStUKnffV4Na7YwvFbFuDdwSyfScWG11T)

Finally, I managed it to automatically upload binaries for osx and linux. They can be downloaded from https://github.com/holgern/steemdesktop/releases

## Roadmap
I'm planing store the complete account history in a file and use the account history for some calculations:
* curation rewards
* reputation over time
* SP over time
I'm also planing to enhance the notification system and to parse all steem blocks. This allow it to show mentions and other thinks.

## Commits
### Simplify and improve all account history functions
* [commit 4d0fa7b](https://github.com/holgern/steemdesktop/commit/4d0fa7b2101634fe0125840f142d8196a0aab1cf)

### Move account refresh and update account hist to threads
* [commit e7b210a](https://github.com/holgern/steemdesktop/commit/e7b210a26c302f791f1a5316c5db8c01da1affde)
* New Worker class for running function in a thread
* timer call now the thread function, which prevent gui freezing
* The account history of the last 24 h is now loaded not at once, only new ops are loaded
### Display account history of the last 24 hours
* [commit 5761814](https://github.com/holgern/steemdesktop/commit/5761814a51a87ed889bee69c6a26a35ba3ebfaed)

### Use qtdesigner to generate layout 
* [commit c04a832](https://github.com/holgern/steemdesktop/commit/c04a832403814d58841046fb1bf19c6e76c15643)
* show vote power, RC and balances
* latest upvotes, curation and author rewards
* layout is generated from ui file

## GitHub Account
https://github.com/holgern


- - -

This page is synchronized from the post: ['steemdesktop - new layout and account history of the last 24h is shown'](https://steemit.com/@holger80/steemdesktop-new-layout-and-account-history-of-the-last-24h-is-shown)
