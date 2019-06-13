
---
title: 'Adding Sponsors Class to PHP Client of Utopian API'
permlink: adding-sponsors-class-to-php-client-of-utopian-api
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-15 19:56:39
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- utopian-api
- programming
- php
thumbnail: 
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


The project  [PHP Client of Utopian API](https://utopian.io/utopian-io/@justyy/php-client-of-utopian-api) wraps the Utopian APIs and yesterday, the sub class `Moderators` has been added to the project, see [Adding Moderator Class to PHP Client of Utopian API](https://utopian.io/utopian-io/@justyy/adding-moderators-class-to-php-client-of-utopian-api). Today, `Sponsors` have been added to the project so it is now very convenient to know, with a few lines of code, for example, the list of sponsors that are also witnesses or who opt-out receiving steem payout.

### PHP Client of Utopian API
- What is the project about?
The project is to wrap the public utopian APIs in PHP Class. I have seen @emrebeyler 's [contribution on Python client](https://utopian.io/utopian-io/@emrebeyler/python-client-of-utopian-api), so I think it is a good idea to provide a [PHP implementation](https://helloacm.com/adding-sponsors-class-to-php-client-of-utopian-api/).

- Technology Stack
PHP 7.0

- Roadmap
The next release will be adding more unit tests and more other advance API wrappers such as statistics helpers.

- How to contribute?
Github: https://github.com/DoctorLai/utopian-api-php-client
    1. Fork it!
    2. Create your feature branch: git checkout -b my-new-feature
    3. Commit your changes: git commit -am 'Add some feature'
    4. Push to the branch: git push origin my-new-feature
    5. Submit a pull request :D

# This Commits
- [class.sponsors.php](https://github.com/DoctorLai/utopian-api-php-client/commits/master/class.sponsors.php)
- [sponsors_tests.php](https://github.com/DoctorLai/utopian-api-php-client/commits/master/tests/sponsors_test.php)
- [README.md](https://github.com/DoctorLai/utopian-api-php-client/commit/6fc9a85729e66670457bfc8e25a1448bca5c23b1#diff-04c6e90faac2675aa89e2176d2eec7d8)


## Reload the Data (Sponsors)
This will re-fetch the data from Utopian API.
```
$sponsors->Reload();
```

## Raw Data (Sponsors)
```
$sponsors->GetRawData();
```

## Get a list of Sponsors
```
print_r($sponsors->GetList());
```

## Get Total Number of sponsors
```
echo "there are " . $sponsors->GetTotal() . " sponsors.";
```

## Find a Sponsor
```
$ned = $sponsors->GetSponsor('ned');
print_r($ned);
```

## Get Total Paid Rewards
```
echo "Total Paid Rewards: " . $sponsors->GetTotalPaidRewards();
```

## Get Total of should_receive_rewards
```
echo "Should Receive Total: " . $sponsors->GetShouldReceiveRewards();
```

## Get Total Sum of total_paid_rewards_steem
```
echo "Steem: " . $sponsors->GetTotalPaidRewardsSteem();
```

## Get Total Vesting by all sponsors
```
echo "Total Vesting by all sponsors: " . $sponsors->GetTotalVesting();
```

## Get a list of Witnesses
```
foreach ($sponsors->GetListOfWitness() as $acc) {
   echo "Witness: " . $acc;
}
```

## Get Total of paid-rewards-steem
```
echo "Total Paid Rewards Steem: " . $sponsors->GetTotalPaidRewardsSteem();
```

## Get a list of Opted-out sponsors
```
foreach ($sponsors->GetListOfOptedOutSponsors() as $acc) {
   echo "Opted_out: " . $acc;
}
```


<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/adding-sponsors-class-to-php-client-of-utopian-api">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Adding Sponsors Class to PHP Client of Utopian API](https://steemit.com/@justyy/adding-sponsors-class-to-php-client-of-utopian-api)
