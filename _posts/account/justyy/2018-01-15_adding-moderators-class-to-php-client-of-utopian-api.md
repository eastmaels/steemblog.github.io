
---
title: 'Adding Moderators Class to PHP Client of Utopian API'
permlink: adding-moderators-class-to-php-client-of-utopian-api
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-15 01:34:12
categories:
- utopian-io
tags:
- utopian-io
- utopian
- steemstem
- programming
- utopian-api
thumbnail: 
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Previously on [PHP Client of Utopian API](https://utopian.io/utopian-io/@justyy/php-client-of-utopian-api), you see how beautiful the PHP is when it comes to wrap utopian APIs.  And I am feeling excited to introduce a sub-class [Moderators](https://helloacm.com/adding-moderators-class-to-php-client-of-utopian-api/) that extends the `Utopian` base API class.

### PHP Client of Utopian API
- What is the project about?
The project is to wrap the public utopian APIs in PHP Class. I have seen @emrebeyler 's [contribution on Python client](https://utopian.io/utopian-io/@emrebeyler/python-client-of-utopian-api), so I think it is a good idea to provide a PHP implementation.

- Technology Stack
PHP 7.0

- Roadmap
The next release will be adding more unit tests and more about moderators in terms of rewards, payout etc.

- How to contribute?
Github: https://github.com/DoctorLai/utopian-api-php-client
    1. Fork it!
    2. Create your feature branch: git checkout -b my-new-feature
    3. Commit your changes: git commit -am 'Add some feature'
    4. Push to the branch: git push origin my-new-feature
    5. Submit a pull request :D

# This Commits
- [class.moderators.php](https://github.com/DoctorLai/utopian-api-php-client/commits/master/class.moderators.php)
- [moderator_tests.php](https://github.com/DoctorLai/utopian-api-php-client/blob/master/tests/moderator_tests.php)
- [README.md](https://github.com/DoctorLai/utopian-api-php-client/commits/master/README.md)

## Reload the Data
This will re-fetch the data from Utopian API.
```
$moderators->Reload();
```

## Raw Data
```
$moderators->GetRawData();
```

## Get a list of Moderators
```
print_r($moderators->GetList());
```

## Get Total Number of Moderators
```
echo "there are " . $moderators->GetTotal() . " moderators.";
```

## Find a Moderator
```
$justyy = $moderators->GetModerator('justyy');
print_r($justyy);
```

## Get Total Paid Rewards
```
echo "Total Paid Rewards: " . $moderators->GetTotalPaidRewards();
```

## Get Total of should_receive_rewards
```
echo "Should Receive Total: " . $moderators->GetShouldReceiveRewards();
```

## Get Total Moderated Count
```
echo "Total Moderated Count: " . $moderators->GetTotalModerated();
```

## Get Total Sum of total_paid_rewards_steem
```
echo "Steem: " . $moderators->GetTotalPaidRewardsSteem();
```

## Get a list of Super Moderators
```
foreach ($moderators->GetListOfSuperModerators() as $acc) {
   echo "Boss: " . $acc;
}
```

## Get a list of Apprentices
```
foreach ($moderators->GetListOfApprentice() as $acc) {
   echo "Student: " . $acc;
}
```

## Get a list of Banned Moderators
```
foreach ($moderators->GetListOfBannedModerators() as $acc) {
   echo "Banned: " . $acc;
}
```

## Get a list of Active Moderators
```
foreach ($moderators->GetListOfActiveModerators() as $acc) {
   echo "Active: " . $acc;
}
```


<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/adding-moderators-class-to-php-client-of-utopian-api">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Adding Moderators Class to PHP Client of Utopian API](https://steemit.com/@justyy/adding-moderators-class-to-php-client-of-utopian-api)
