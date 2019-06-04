
---
title: 'Calculate your future wealth with Arduino, let\'s keep up with @dan !'
permlink: calculate-your-future-wealth-with-arduino-let-s-keep-up-with-dan
catalog: true
toc_nav_num: true
toc: true
date: 2016-08-03 14:21:21
categories:
- steemit
tags:
- steemit
- money
- wealth
- arduino
- cn
thumbnail: http://www.intel.com/content/dam/www/public/us/en/images/maker/rwd/arduino-front-angle-rwd.jpg.rendition.intel.web.1072.603.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Now everyone on the https://steemit.com has more or less wealth.
It is composed of three parts：
1. STEEM
2. STEEM POWER
3. STEEM DOLLARS

For example,  at the time of this writing:
 @dan  has `0 STEEM`,   `2,545,363 STEEM POWER` and `14,109 STEEM DOLLARS`.
@oflyhigh , I have `0 STEEM`,   `25.842 STEEM POWER` and `$17.217 STEEM DOLLARS` 
I was feeling a little depressed，When will I be as rich as @dan?
****
Come back to our story.
**Do you want to know how much you will be in the future?**
Let's try to finger it out.

From investigating and analysis， I found that  **IF YOU DO NOTHING**
* **STEEM POWER  be increased at a rate about 0.7%**
* **STEEM and STEEM DOLLARS keep unchanged**

###### Table:  Rates of STEEM POWER increased 
Date| Rate
----|----
2016-08-03|(0.69%)	
2016-08-02|(0.69%)	
2016-08-01|(0.69%)	
2016-07-31|(0.70%)	
2016-07-30|(0.68%)	
2016-07-29|(0.73%)	
2016-07-28|(0.71%)	
2016-07-27|(0.88%)	

Let us suppose that the rate keep unchanged.
The STEEM POWER after one day is `your_sp*(1+0.69%)`
For me, the STEEM POWER should be `25.842*(1+0.69%)=26.0203`
That sounds good.

After careful calculation， if I **DO NOTHING**， my STEEM POWER after one year should be: `317.93`
With the wealth of @dan there is a huge gap! 
 And the most important is that the wealth of  @dan  also keeps growing!

The good news is, I can get STEEM POWER and STEEM DOLLARS  by writing articles.
At present， I earn about `1.5 STEEM POWER` and `3.8 STEEM DOLLARS`  every day.
If I convert STEEM DOLLARS to STEEM and then POWER up them, I'll got about `3 STEEM POWER` every day!

So the STEEM POWER after one day is `your_sp*(1+0.69%) + 3`.
My STEEM POWER after one year should be: `5232.26`!
And the STEEM POWER of @dan after one year should be:`31320220.00`
****
I run my code on my  Arduino 101 board.
I want to make  a two wheeled self balancing vehicle by this board, but encountered some problems when tune  the PID parameter. What a sad story!
![Arduino 101 ](http://www.intel.com/content/dam/www/public/us/en/images/maker/rwd/arduino-front-angle-rwd.jpg.rendition.intel.web.1072.603.jpg)

Here is the code to calculate your future wealth.
It should be easy to change it to any other programing language.
Change the values in code to fit your situation.
```
float your_sp = 25.842;       // STEEM POWER in your wallet at present
float rate= 0.69/100;         // Daily increase rate of STEEM POWER
float rewards = 3;            // Daily average rewards in STEEM POWER
int days = 365;               // How many days you want to calculate


void setup() {
  Serial.begin(9600);

  Serial.print( "STEEM POWER you have: " );
  Serial.println( your_sp );
  
  Serial.print( "Daily increase rate at: " );
  Serial.print( rate * 100 );
  Serial.println( "%" );

  Serial.print( "Daily average rewards  in STEEM POWER: " );
  Serial.println( rewards );

  
  for( int i=1; i<=days; i++ ){
    your_sp *= ( 1 + rate );
    your_sp += rewards;
    //Serial.println(sp);
  }

  Serial.print( "STEEM POWER after " );
  Serial.print( days );
  Serial.print( "days should be: " );  
  Serial.println( your_sp );
}

void loop() {
}
```
Here is the result.
>STEEM POWER you have: 25.84
>The increase rate at: 0.69%
>Daily average rewards in STEEM POWER: 3.00
>STEEM POWER after 365 days should be: 5232.26

And please keep in mind :
>1.  We assumed that the rate keep unchanged.
>2.  Convert your STEEM DOLLARS to STEEM the Power up ASAP once you got it.
>3.  Your rewards based  on STEEM POWER  you have and the articles you wrote and curation.

So, The result made by this program is for reference only. In other words, just for fun:)

Do you think this article is interesting?
Could you give this post upvote, so I can earn more to keep up with @dan ? :)

- - -

This page is synchronized from the post: [Calculate your future wealth with Arduino, let\'s keep up with @dan !](https://steemit.com/@oflyhigh/calculate-your-future-wealth-with-arduino-let-s-keep-up-with-dan)
