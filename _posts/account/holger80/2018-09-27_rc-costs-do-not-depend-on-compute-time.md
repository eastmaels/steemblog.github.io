
---
title: 'RC costs do not depend on compute time'
permlink: rc-costs-do-not-depend-on-compute-time
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-09-27 09:27:57
categories:
- steem
tags:
- steem
- hf20
- hardfork
- bug
- busy
thumbnail: None
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


In the recent [steemitblog post](https://steemit.com/steem/@steemitblog/hf20-update-hardfork-successful) it was stated:
> The RC system uses three measurements to determine how much an operation should cost in terms of RCs: blockchain size, compute time, and state size. 

Let's check the source code, if this is true:
The RC costs are determined by ([code](https://github.com/steemit/steem/blob/master/libraries/plugins/rc/rc_plugin.cpp#L292)):
```
tx_info.usage.resource_count[i]
```
where `i` is one of

```
enum rc_resource_types
{
   resource_history_bytes,
   resource_new_accounts,
   resource_market_bytes,
   resource_state_bytes,
   resource_execution_time
};
```

`resource_count` is set in the `count_resources` in [resource_count.cpp](https://github.com/steemit/steem/blob/master/libraries/plugins/rc/resource_count.cpp#L503):

```
void count_resources(
   const signed_transaction& tx,
   count_resources_result& result )
{
   static const state_object_size_info size_info;
   static const operation_exec_info exec_info;
   const int64_t tx_size = int64_t( fc::raw::pack_size( tx ) );
   count_operation_visitor vtor( size_info, exec_info );

   result.resource_count[ resource_history_bytes ] += tx_size;

   for( const operation& op : tx.operations )
   {
      op.visit( vtor );
   }

   result.resource_count[ resource_new_accounts ] += vtor.new_account_op_count;

   if( vtor.market_op_count > 0 )
      result.resource_count[ resource_market_bytes ] += tx_size;

   result.resource_count[ resource_state_bytes ] +=
        size_info.transaction_object_base_size
      + size_info.transaction_object_byte_size * tx_size
      + vtor.state_bytes_count;
}
```

Wait, there is no `resource_execution_time`! A [search](https://github.com/steemit/steem/search?q=resource_execution_time&unscoped_q=resource_execution_time) showed that `resource_execution_time` is not set elsewhere. Something like:

```
result.resource_count[ resource_execution_time ] += vtor.execution_time_count ;
```
is missing in `count_resources()`.

## Conclusion
The statement in the post should be corrected to (when I'm right):

> The RC system uses right now two measurements to determine how much an operation should cost in terms of RCs: blockchain size, and state size. In the next update, we plan to use also compute time to determine the RC costs.

I filled an issue about this: https://github.com/steemit/steem/issues/2972

___
Although I'm familiar with c++, I do not know the entire source code of steem. I could be wrong.

- - -

This page is synchronized from the post: ['RC costs do not depend on compute time'](https://steemit.com/@holger80/rc-costs-do-not-depend-on-compute-time)
