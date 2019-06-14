
---
title: 'NextColony - checking if the 8 explored planets are valid'
permlink: nextcolony-checking-if-the-8-explored-planets-are-valid
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-05-06 13:57:09
categories:
- nextcolony
tags:
- nextcolony
- steem
- blockchain
- gaming
- busy
thumbnail: 'https://files.steempeak.com/file/steempeak/rondras/c54NCLYc-NextColony-Teaser-1.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![NextColonyTeaser1.jpg](https://files.steempeak.com/file/steempeak/rondras/c54NCLYc-NextColony-Teaser-1.jpg)

Some users have been wondering why 6 of 8 explored planets are near another planet:

![image.png](https://ipfs.busy.org/ipfs/QmPsCAFPPJvceRdhn396zwMxqTYymjAGbA1DcnqxTWsKgN)


The chance to find a new planet is 1%. At the moment 930 space coordinates have been explored and 8 planets were found. The current rate is 0.86 %, which is slightly below 1%.

 The chance of finding only empty space around the start planet is
```
99/100 * 99/100 * 99/100 * 99/100 * 99/100 * 99/100 * 99/100 * 99/100 = 0.9227
```
Thus the chance of finding a planet near the start planet is 0.0774, or 1 of 12.9 found planets should be near the start planet.

At the moment 6 of 8 are near the start planet. This can be explained by the law of large numbers.

The law says that the sample average converges to the expected value for Infinitive trials. So when more and more planets have been found, we should converge to a rate of  1 to 12.9 explored planets that have been explored near the start planet.

## Checking all found planets
With the following python script, it is possible to validate the 8 found planets. In order to check if a planet is valid, the transaction id of the explorespace custom_json and the block_num of the virtual explore operation is needed. When the explorespace mission is started, the distance to the goal is calculated and the arrival time is determined. This arrival time defines then the block number of the virtual explore operation. 

```
from beem.block import Block
import hashlib
import datetime
import random
from collections import OrderedDict

def set_seed(seed):
    random.seed(a=seed, version=2)

def get_is_empty_space():
    return random.random() >= 0.01

def get_was_planet_found(block_num, trx_id):
    block = Block(block_num)
    seed = hashlib.md5((trx_id + block["block_id"] + block["previous"]).encode()).hexdigest()     
    set_seed(seed)        
    found = not get_is_empty_space()    
    return found

if __name__ == '__main__':
   
    planet_found_list = [OrderedDict([('id', 35),
              ('user', 'reggaemuffin'),
              ('date', datetime.datetime(2019, 4, 30, 13, 56, 33)),
              ('c_hor', 183),
              ('c_ver', -175),
              ('trx_id', 'ca7093442b53ea5186b4ebecb56570e27e68ed58'),
              ('block_num', 32498931),
              ('planet_id', 'P-ZT52Y2YAEOW')]),
 OrderedDict([('id', 81),
              ('user', 'mancer-sm-alt'),
              ('date', datetime.datetime(2019, 5, 1, 6, 50, 45)),
              ('c_hor', 91),
              ('c_ver', 267),
              ('trx_id', 'dcd914ae73de12a876b9c9688ae54d7574fc79fa'),
              ('block_num', 32519195),
              ('planet_id', 'P-ZIY07VLIZXC')]),
 OrderedDict([('id', 273),
              ('user', 'flauwy'),
              ('date', datetime.datetime(2019, 5, 2, 23, 6, 18)),
              ('c_hor', -227),
              ('c_ver', 209),
              ('trx_id', '29dcd2d88eba9aaa2f413e3a36fac83a69e72a33'),
              ('block_num', 32567483),
              ('planet_id', 'P-ZU1JXAEU4KW')]),
 OrderedDict([('id', 283),
              ('user', 'hanzappedfirst'),
              ('date', datetime.datetime(2019, 5, 3, 0, 56, 48)),
              ('c_hor', 78),
              ('c_ver', -198),
              ('trx_id', '3fddd68f03eedae6dd93970c9d15cc5ff6f0db01'),
              ('block_num', 32569691),
              ('planet_id', 'P-ZBPUNEE2NMO')]),
 OrderedDict([('id', 438),
              ('user', 'kissi'),
              ('date', datetime.datetime(2019, 5, 4, 5, 40, 51)),
              ('c_hor', -221),
              ('c_ver', 175),
              ('trx_id', 'c1f4e868160ca9160f28d426c2738429a8d7ee0e'),
              ('block_num', 32604121),
              ('planet_id', 'P-Z8LN8NEOGE8')]),
 OrderedDict([('id', 737),
              ('user', 'uraniumfuture'),
              ('date', datetime.datetime(2019, 5, 5, 18, 51, 15)),
              ('c_hor', -35),
              ('c_ver', -217),
              ('trx_id', 'b808dafaa97bf34f17fe7a71c20ed6ebb767d103'),
              ('block_num', 32648704),
              ('planet_id', 'P-ZCQ6XF6HTSW')]),
 OrderedDict([('id', 797),
              ('user', 'fantasycrypto'),
              ('date', datetime.datetime(2019, 5, 6, 0, 39, 13)),
              ('c_hor', -290),
              ('c_ver', -42),
              ('trx_id', '646c4548d666293e547d4ab0f19f5a1e38930c3a'),
              ('block_num', 32655660),
              ('planet_id', 'P-Z1L0K1F5PPS')]),
 OrderedDict([('id', 866),
              ('user', 'lordvader'),
              ('date', datetime.datetime(2019, 5, 6, 7, 28, 19)),
              ('c_hor', -289),
              ('c_ver', -167),
              ('trx_id', 'e03e7a66310f67b69e82714a071892dd144caf7c'),
              ('block_num', 32663837),
              ('planet_id', 'P-ZHYWH6QELGG')])]
    
    print("Found %d planets" % len(planet_found_list))
    print("| vops block num | custom_json trx_id | uid | valid |")
    print("| --- | --- | --- | --- |")
    for data in planet_found_list:
        found = get_was_planet_found(data["block_num"], data["trx_id"])
        print("| %d | %s | %s | %s |" % (data["block_num"], data["trx_id"], data["planet_id"], str(found)))
```

The result of the script is the following:

| vops block num | custom_json trx_id | uid | valid |
| --- | --- | --- | --- |
| 32498931 | ca7093442b53ea5186b4ebecb56570e27e68ed58 | P-ZT52Y2YAEOW | True |
| 32519195 | dcd914ae73de12a876b9c9688ae54d7574fc79fa | P-ZIY07VLIZXC | True |
| 32567483 | 29dcd2d88eba9aaa2f413e3a36fac83a69e72a33 | P-ZU1JXAEU4KW | True |
| 32569691 | 3fddd68f03eedae6dd93970c9d15cc5ff6f0db01 | P-ZBPUNEE2NMO | True |
| 32604121 | c1f4e868160ca9160f28d426c2738429a8d7ee0e | P-Z8LN8NEOGE8 | True |
| 32648704 | b808dafaa97bf34f17fe7a71c20ed6ebb767d103 | P-ZCQ6XF6HTSW | True |
| 32655660 | 646c4548d666293e547d4ab0f19f5a1e38930c3a | P-Z1L0K1F5PPS | True |
| 32663837 | e03e7a66310f67b69e82714a071892dd144caf7c | P-ZHYWH6QELGG | True |

## Checking all found empty space coordinates

I did the same for all 930 found empty spaces with the following results:
```
Found 930 empty spaces
930 / 930 are valid
```

I used the slightly modified `get_empty_space_found` function:
```
def get_empty_space_found(block_num, trx_id):
    block = Block(block_num)
    seed = hashlib.md5((trx_id + block["block_id"] + block["previous"]).encode()).hexdigest()     
    set_seed(seed)        
    notfound = get_is_empty_space()    
    return notfound
```

## Conclusion
All eight planets and all 930 explored coordinates are valid. The distance to the start planet does not play a role, only the transaction id of the custom_json and  the block_id  and the previous id of the first block after the arrival time.

- - -

This page is synchronized from the post: ['NextColony - checking if the 8 explored planets are valid'](https://steemit.com/@holger80/nextcolony-checking-if-the-8-explored-planets-are-valid)
