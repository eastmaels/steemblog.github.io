
---
title: 'PHP Job Searching using Zip-Recruiter API'
permlink: php-job-searching-using-zip-recruiter-api
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-26 17:07:30
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- job-searching
- programming
- api
thumbnail: https://steemitimages.com/DQmbzHXM9i9EoNVyJoDU6grdodJGg2DJMEKysn3td8i9LS8/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


# Introduction
The ZipRecruiter Search API enables our search Publisher partners to write software that works with ZipRecruiter’s elevated search product and display the best job search matches to job seekers on their site. 

The ZipRecruiter Search API is a REST-ful API with all requests and responses sent over HTTPS and authenticated by the ‘api_key’ URL parameter. All API responses are returned with HTTP response codes used to denote success (2xx), client-caused failure (4xx), and server-caused failure (5xx). Responses are formatted as JSON.

This [PHP](https://helloacm.com/php-client-of-utopian-api/) library wraps the ZipRecruiter Search API and allows you to do some advanced job searches.

# How to Use?
First, require the unit `class.ziprecruiter.php` and you can create the ZipRecruiter object by passing the APP_KEY.

```
$key = "APP_KEY";
$zip = new ZipRecruiter($key);
```

Then you can search the jobs by giving the paramter `job name`, `location` and `job age` to the `Search` method:

```
$zip->Search("Software Engineer", "London, UK", 25);
```

You then need to check if results are valid by method `CheckResult`. After that, you can filter the jobs by salary range `FilterJobsBySalaryRange` or industry `FilterJobsByIndustry`

# Technology Stack
PHP 7.0 and composer unit test framework.

# Demo
```
<?php
$key = "APP_KEY";
$zip = new ZipRecruiter($key);
$zip->Search("Software Engineer", "London, UK", 25);

if ($zip->CheckResult()) {
  echo "Total Jobs: " . $zip->GetTotalJobs(). "\n";
  $jobs = $zip->FilterJobsBySalaryRange(55000, 75000);
  foreach ($jobs as $job) {
    echo "Job ID: " . $job->id . "\n";
    echo "Company: " . $job->hiring_company->name . "\n";
    echo "Salary Min Annual: " . $job->salary_min_annual . "\n";
    echo "Salary Max Annual: " . $job->salary_max_annual . "\n";
    echo "Job URL: " . $job->url . "\n";
    echo "Published: " . $job->job_age . " days ago.\n";
  }  
  echo count($jobs);
  $jobs = $zip->FilterJobsByIndustry("Technology", $jobs);
  echo "Total Technology jobs: " . count($jobs);
}
```

![](https://steemitimages.com/DQmbzHXM9i9EoNVyJoDU6grdodJGg2DJMEKysn3td8i9LS8/image.png)

# Unit Tests
[Unit tests](https://helloacm.com/using-fluentassertions-library-to-write-a-better-unit-test-in-net-c/) are coming on the way... built on `composer`

# Live Example
The above sample has been integrated live:  https://helloacm.com/software-engineering-jobs/  and this post has been reposted to my blog:  [https://helloacm.com/php-job-searching-using-zip-recruiter-api/](https://helloacm.com/php-job-searching-using-zip-recruiter-api/)

# Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

Github: https://github.com/DoctorLai/ZipRecruiter

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/php-job-searching-using-zip-recruiter-api">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [PHP Job Searching using Zip-Recruiter API](https://steemit.com/@justyy/php-job-searching-using-zip-recruiter-api)
