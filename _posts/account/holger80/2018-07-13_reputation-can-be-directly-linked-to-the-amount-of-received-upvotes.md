
---
title: 'Reputation can be directly linked to the amount of received upvotes'
permlink: reputation-can-be-directly-linked-to-the-amount-of-received-upvotes
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-07-13 21:11:42
categories:
- steemit
tags:
- steemit
- steem
- reputation
- steemdev
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


The account reputation level increases with each vote.
How is the reputation increased, when an account was upvoted or flagged?

```
            if voter_rep > 0:
                if rshares > 0 or (rshares < 0 and voter_rep > votee_rep ):
                    votee_rep  += rshares >> 6
```
Using this formula, it can be calculated how much votes in SBD an account already has received in his lifetime.

This calculation is only an estimation, reward_balance, and recent_claims is assumed to be fixed. It is also assumed that the account was never flagged and that all voter have a reputation level greater than 25.

The reputation received from a vote is independent of the Steem price, as the ratio of rshares to Steem power is independent of the Steem price. An account with a Steem power of 1000 SP has a vote of 40572847921 rshares.

Thus, a vote influences the reputation independent of the current Steem price.

In the table below, the number of 100% upvotes from an account wiht 1000 Steem Power is shown. E.g. for a reputation score of 30.3 6.18 upvotes from a 1k SP account are needed.

| Reputation | Needed 100% 1k SP votes | Diff. to last level |
| --- | --- | --- |
| 25.0 | 0.00 | 0.00  | 
| 26.0 | 2.04 | 2.04  | 
| 27.0 | 2.63 | 0.59  | 
| 28.0 | 3.40 | 0.77  | 
| 29.0 | 4.39 | 0.99  | 
| 30.0 | 5.67 | 1.28  | 
| 31.0 | 7.32 | 1.65  | 
| 32.0 | 9.46 | 2.13  | 
| 33.0 | 12.21 | 2.76  | 
| 34.0 | 15.77 | 3.56  | 
| 35.0 | 20.37 | 4.60  | 
| 36.0 | 26.31 | 5.94  | 
| 37.0 | 33.98 | 7.67  | 
| 38.0 | 43.89 | 9.91  | 
| 39.0 | 56.69 | 12.80  | 
| 40.0 | 73.22 | 16.53  | 
| 41.0 | 94.56 | 21.35  | 
| 42.0 | 122.13 | 27.57  | 
| 43.0 | 157.74 | 35.61  | 
| 44.0 | 203.73 | 45.99  | 
| 45.0 | 263.13 | 59.40  | 
| 46.0 | 339.84 | 76.72  | 
| 47.0 | 438.93 | 99.08  | 
| 48.0 | 566.89 | 127.97  | 
| 49.0 | 732.17 | 165.28  | 
| 50.0 | 945.64 | 213.46  | 
| 51.0 | 1221.34 | 275.70  | 
| 52.0 | 1577.42 | 356.08  | 
| 53.0 | 2037.31 | 459.90  | 
| 54.0 | 2631.29 | 593.98  | 
| 55.0 | 3398.44 | 767.15  | 
| 56.0 | 4389.26 | 990.81  | 
| 57.0 | 5668.94 | 1279.69  | 
| 58.0 | 7321.72 | 1652.78  | 
| 59.0 | 9456.37 | 2134.65  | 
| 60.0 | 12213.37 | 2757.00  | 
| 61.0 | 15774.17 | 3560.80  | 
| 62.0 | 20373.13 | 4598.95  | 
| 63.0 | 26312.91 | 5939.78  | 
| 64.0 | 33984.43 | 7671.52  | 
| 65.0 | 43892.57 | 9908.15  | 
| 66.0 | 56689.44 | 12796.87  | 
| 67.0 | 73217.23 | 16527.79  | 
| 68.0 | 94563.69 | 21346.46  | 
| 69.0 | 122133.70 | 27570.01  | 
| 70.0 | 157741.73 | 35608.04  | 
| 71.0 | 203731.28 | 45989.55  | 
| 72.0 | 263129.07 | 59397.79  | 
| 73.0 | 339844.27 | 76715.19  | 
| 74.0 | 438925.75 | 99081.48  | 
| 75.0 | 566894.40 | 127968.65  | 
| 76.0 | 732172.27 | 165277.87  | 
| 77.0 | 945636.86 | 213464.58  | 
| 78.0 | 1221336.96 | 275700.11  | 
| 79.0 | 1577417.35 | 356080.38  | 
| 80.0 | 2037312.85 | 459895.50  | 
| 81.0 | 2631290.72 | 593977.88  | 
| 82.0 | 3398442.65 | 767151.93  | 
| 83.0 | 4389257.47 | 990814.82  | 
| 84.0 | 5668944.02 | 1279686.55  | 
| 85.0 | 7321722.74 | 1652778.73  | 
| 86.0 | 9456368.56 | 2134645.81  | 
| 87.0 | 12213369.64 | 2757001.09  | 
| 88.0 | 15774173.47 | 3560803.83  | 
| 89.0 | 20373128.46 | 4598954.99  | 
| 90.0 | 26312907.24 | 5939778.78  | 


The table was calculated with beem:
```
from beem import Steem
import numpy as np
from beem.utils import reputation_to_score
from beem.amount import Amount
from beem.constants import STEEM_100_PERCENT


if __name__ == "__main__":
    price = Amount(stm.get_current_median_history()["base"])
    reps = np.logspace(9, 16, 60)
    used_power = stm._calc_resulting_vote()
    last_sp = 0
    for goal_rep in reps:
        score = reputation_to_score(goal_rep)
        
        needed_rshares = int(goal_rep) << 6
        needed_vests = needed_rshares / used_power / 100
        needed_sp = stm.vests_to_sp(needed_vests)
        
        print("| %.1f | %.2f | %.2f  | " % (score, needed_sp / 1000, needed_sp/ 1000 - last_sp / 1000))
        last_sp=needed_sp
```

- - -

This page is synchronized from the post: ['Reputation can be directly linked to the amount of received upvotes'](https://steemit.com/@holger80/reputation-can-be-directly-linked-to-the-amount-of-received-upvotes)
