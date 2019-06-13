
---
title: 'JobTools Update: Manage Your Favorite Jobs'
permlink: jobtools-update-manage-your-favorite-jobs
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-19 00:55:45
categories:
- utopian-io
tags:
- utopian-io
- jobs
- programming
- witness-category
- software
thumbnail: https://cdn.utopian.io/posts/3685e2ae528d7a952d5d3f0e3e86502eceb2image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


# Introduction to JobTools
[JobTools](https://helloacm.com/jobtools-update-manage-your-favorite-jobs/) is the first and currently only ONE Job Seeking Tools in Chrome Extension. It is based on ZipRecuriter [Job Seeking API](https://helloacm.com/php-job-searching-using-zip-recruiter-api/).

# Motivation of the New Features
When you are browsing a list of jobs, you want to save the good ones (potential good fit) to your favorites and then later, you can submit applications one by one. This phrase is job filtering, where a 'saved-job-list' will be very useful.

# New Features
This commit: [here](https://github.com/DoctorLai/JobTools/commit/2f7703f08ab4169fe44ff06c0f14c275041296cb) adds the following:

1. Save Job by clicking the image button
2. Save-Job Tab
3. Removing Job Button from the Favorite List
4. Clear All Saved Job

# Technology Stack
Javascript in Chrome Browser

# How to Implement?
The `saved_jobs` is a Javascript dictionary that is saved to the browser.

```
let saved_jobs = {}

// load it when app starts
if (settings['saved_jobs']) {
    let saved_jobs_s = settings['saved_jobs'];
    // saved jobs 
    if (saved_jobs_s) {
        try {
            saved_jobs = JSON.parse(saved_jobs_s);
        } catch (e) {
            console.log(e);
            saved_jobs = {};
        }
    }
    // refresh the list
    load_job_list(saved_jobs, $("div#saved_jobs"));
}
```

load and save the job:

```

// save a job
const save_a_job = (id, title, company, date, min_salary, max_salary, location, url) => {
    saved_jobs[id] = {
        "title": title,
        "company": company,
        "date": date,
        "min_salary": min_salary,
        "max_salary": max_salary,
        "location": location,
        "url": url
    };
    saveSettings(false);
}

// remove a job
const remove_a_job = (id) => {
    delete saved_jobs[id];
    saveSettings(false);
}
```

# Screenshots
Click the 'Save' Image Button to save a job.
![image.png](https://cdn.utopian.io/posts/3685e2ae528d7a952d5d3f0e3e86502eceb2image.png)

Manage favorite jobs in Job Tab
![image.png](https://cdn.utopian.io/posts/ef5afbd7a5b711b7c22c5975674182b0f341image.png)

# Installation (Add to Your Browser)
You can install the extension at [Chrome Webstore](https://chrome.google.com/webstore/detail/job-tools/ghclpimmbjepihhlnklkiemncamklkii).  

For Opera browsers, the workaround is to first install [Chrome Extension Gadget](https://addons.opera.com/en/extensions/details/download-chrome-extension-9/).

And similarly for Firefox, you can install [Chrome Store Foxified](https://addons.mozilla.org/en-US/firefox/addon/chrome-store-foxified/) before you install JobTools.

# Contribution
Fully Open Source: https://github.com/DoctorLai/JobTools  You can either submit a Pull Request or open a issue (for suggestions and bug reports)

-----------------------------------
## Support me and my work as a [witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by 
1. voting me [here](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), or
2. voting me as [a proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/jobtools-update-manage-your-favorite-jobs">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [JobTools Update: Manage Your Favorite Jobs](https://steemit.com/@justyy/jobtools-update-manage-your-favorite-jobs)
