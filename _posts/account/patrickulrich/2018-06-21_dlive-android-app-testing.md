
---
title: 'DLive Android App Testing'
permlink: dlive-android-app-testing
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-06-21 06:26:54
categories:
- dlive
tags:
- dlive
- dlivemobile
- android
- testing
- help-center
thumbnail: 'https://cdn.steemitimages.com/DQmWfvvyCk5mftA6Ssue3dj1JKAVnWpJt7UP7nFjN9MXk9i/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center>![](https://cdn.steemitimages.com/DQmWfvvyCk5mftA6Ssue3dj1JKAVnWpJt7UP7nFjN9MXk9i/image.png)</center>
# It's Finally Here!

If you haven't heard DLive has launched an Android app for their Steem dapp! You can read more about the launch at https://steemit.com/dlive/@dlive/announcement-or-dlive-on-android-with-fanbase or start the download for your device at https://app.dlive.io/. It's an amazing start!

That being said I've been dying to get home to give it a good testing. While digging through I've encountered the following bugs that I want to share with the team. Some of these have already been reported in DLive's #help-center while others may be new. 

To test I was using a Samsung Note 8 running Android 8.0.0 and version 1.0.0 of the DLive app downloaded from the main website.

### Bugs or Interface Issues

#### Appearance & App 
Android app missing app icon logo
Under "Live" panel - streams not shown under 'Lifestyle', 'Learning' and 'Music' but will still appear in "Trending"
Under "Profile" in earning history there is an overlay of stream ID and what I assume is date
Under "Profile" clicking Fanbase doesn't take you to that user's profile but just the Fanbase tab

#### Videos
Opening a non-live video will give a '3101: User Not Found' error. (posted by @D4rkFlow)

#### Streams
Upvote less than 100% will give 10000:Server Internal Error
Upvote of 100% will register as 1% upvote (both in chat and on steemd)
After sending a gift and completing the SteemConnect payment then backing into the DLive app I get a recurring 'Video loading failed' - This has been inconsistent and has occurred for some streams and not on others. 
[Inconsistent] App FC after taking stream to full screen. Unable to reliably reproduce.

#### Fanbase
I almost didn't include this because I know this is an alpha release of this feature. I still wanted to include information that may help the team locate an unknown issues.

No way to join other's Fanbase - You are able to create your own but can not join anyone else
Open Fanbase chat in one Fanbase group but then open another Fanbase and click the chat and app will FC
Fanbase doesn't appear to let you scroll chat messages based on DLive Fanbase

### Recommended Updates

This one has already been addressed but it would be awesome to utilize the @dlive app to go live straight from mobile. I know this is in the works but I would be amiss to not include this as the top recommended update.

Again I'm sure this will be addressed soon but would again be missing a great opportunity to recommend Android push notifications. More developer information regarding rich notifications can be found here https://developer.android.com/distribute/best-practices/engage/rich-notifications

Utilize Android 8.0 picture in picture for streams. This would allow streamers to continue to stay connected to the stream even while donating or jumping into another quick app. You can learn more about Android's PIP featuers at https://developer.android.com/guide/topics/ui/picture-in-picture.

When clicking a stream to load stream info (title, viewers, votes & user) it would be nice to be able to click the user's name to join past streams.

Similarly clicking user profiles in chat should open their streaming profile allowing you to view their streams or profile info.

## More to Come!
For an alpha release this is incredible. You can easily track and monitor streams with little issue! That is amazing considering the alpha nature of this release. That being said I hope any of this can help the team make the experience better and continue to improve.

I've been traveling with my mother today so I've not had a lot of time to really dig in too deep and I'm exhausted at this point. I will continue to test and update this post as I find any issues. If you've noticed any additional issues please let me know in the comments and I will update my tracker to include your bug (with reference) if I can reproduce it.

- - -

This page is synchronized from the post: ['DLive Android App Testing'](https://steemit.com/@patrickulrich/dlive-android-app-testing)
