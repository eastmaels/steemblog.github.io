
---
title: 'get_account_history does not return the first element when index> -1'
permlink: getaccounthistory-does-not-return-the-first-element-when-index-1
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-18 19:03:12
categories:
- utopian-io
tags:
- utopian-io
- steem
- bug
- solution
- steemit
thumbnail: 'https://cdn.utopian.io/posts/7bc0067be2f3a463f4ee3ff10f3b86934b64image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---



#### Expected behavior
The account history starts from index=0. E.g. the account `test` has 13 account related operation. 
 ```
https://api.steemjs.com/get_account_history?account=test&from=-1&limit=13
 ```
or
``` 
from steem.account import Account
acc = Account("test")
for h in acc.get_account_history(-1,13): print(h["index"])
```
Returns 13 operation starting from index 0 to 12. 
<center>
![image.png](https://cdn.utopian.io/posts/7bc0067be2f3a463f4ee3ff10f3b86934b64image.png)
</center>

When specifying `from` it is expected that operation up to index 0 can be retrieved.

 ```
https://api.steemjs.com/get_account_history?account=test&from=5&limit=6
 ```
or
``` 
from steem.account import Account
acc = Account("test")
for h in acc.get_account_history(5, 6): print(h["index"])
```
Should return 6 operations from index 0 to index 5.
#### Actual behavior
The first element with index 0 can only be obtained when set `from=-1`. This may be work for the account `test`, but cannot work when the number of account operations is higher than 1000. When setting the `from` parameter to a value other than -1, the first operation with index 0 cannot be fetched.

When trying to receive the first 6 operation, including operation with index 0, an error  `Exception:args.start >= args.limit: start must be greater than limit` occurs.
<center>
![image.png](https://cdn.utopian.io/posts/416eacde4acd75273db61e207dec5a78b581image.png)
</center>
#### How to reproduce
``` 
from steem.account import Account
acc = Account("test")
for h in acc.get_account_history(5, 6): print(h["index"])
```
or 
 ```
https://api.steemjs.com/get_account_history?account=test&from=5&limit=6
 ```

* Python 3.6 / Anaconda with python-steem 1.0.0
* Browser: Chrome 65.0.3325.181
* Operating system: Windows 10
* Node: https://api.steemit.com with version 0.19.4

#### Possible solution
https://github.com/steemit/steem/blob/master/libraries/plugins/apis/account_history_api/account_history_api.cpp
Change line 74:
```
if( n >= args.limit )
```
to
```
if( n > args.limit )
```
Complete listing of the function:
```
DEFINE_API_IMPL( account_history_api_impl, get_account_history )
{
   FC_ASSERT( args.limit <= 10000, "limit of ${l} is greater than maxmimum allowed", ("l",args.limit) );
   FC_ASSERT( args.start >= args.limit, "start must be greater than limit" );

   const auto& idx = _db.get_index< chain::account_history_index, chain::by_account >();
   auto itr = idx.lower_bound( boost::make_tuple( args.account, args.start ) );
   uint32_t n = 0;

   get_account_history_return result;
   while( true )
   {
      if( itr == idx.end() )
         break;
      if( itr->account != args.account )
         break;
      if( n > args.limit )
         break;
      result.history[ itr->sequence ] = _db.get( itr->op );
      ++itr;
      ++n;
   }

   return result;
}
``` 

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@holger80/getaccounthistory-does-not-return-the-first-element-when-index-1">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['get_account_history does not return the first element when index> -1'](https://steemit.com/@holger80/getaccounthistory-does-not-return-the-first-element-when-index-1)
