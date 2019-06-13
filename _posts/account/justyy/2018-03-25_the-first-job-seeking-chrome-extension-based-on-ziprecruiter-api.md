
---
title: 'The First Job Seeking Chrome Extension based on ZipRecruiter API'
permlink: the-first-job-seeking-chrome-extension-based-on-ziprecruiter-api
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-25 19:03:45
categories:
- utopian-io
tags:
- utopian-io
- steemapps
- jobs
- programming
- job-search
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1522004403/s4y4wen4h1v11bjqqgme.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


# Job Seeking using JobTools
### What is the project about?
[JobTools](https://helloacm.com/the-first-job-seeking-chrome-extension-based-on-ziprecruiter-api/) is the first Job Seeking Chrome Extension that is based on [ZipRecruiter API](https://helloacm.com/php-job-searching-using-zip-recruiter-api/).  I have previously implemented a PHP Wrapper API for [job searching](https://github.com/DoctorLai/ZipRecruiter) and it is integrated in the [online tool](https://helloacm.com/software-engineering-jobs/) but I think  Chrome Extension is a perfect application entry point that users can easily access.

### Screenshots
Job Searching Setting:
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1522004403/s4y4wen4h1v11bjqqgme.png)

Job Search Results:
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1522004413/b61ij7eaojvfcogwtknd.png)

### Technology Stack
Any applications that can be written in Javascript will eventually be re-written in Javascript. Chrome Extension is an ideal place to host your Javascript applications.

### Roadmap
- FilterJobsBySalaryRange
- FilterJobsByIndustry
- Integrated with Google Maps

## JobSearch Class in Javascript
In the future versions, this will be refactored so that it contains all the data processing.
```
'use strict';

class JobSearch {
	// need app key
	constructor(key) {
		this.key = key;
		this.api = "https://api.ziprecruiter.com/jobs/v1";
		this.keyword = "Software Engineer";
		this.location = "London";
		this.radius = 14;
		this.age = 10;
		this.per = 10;
		this.page = 1;
	}

	GetAPI() {
		let keyword = this.keyword;
		let location = this.location;
		let radius = this.radius;
		let age = this.age;
		let page = this.page;
		let per = this.per;
		keyword = keyword.trim();
		location = location.trim();
		radius = parseInt(radius);
		age = parseInt(age);
		keyword = encodeURIComponent(keyword);
		location = encodeURIComponent(location)		
		return this.api + "?search=" + keyword + "&location=" + location + "&radius_miles=" + radius + "&days_ago=" + age + "&jobs_per_page=" + per + "&page=" + page + "&api_key=" + this.key;
	}

	SetKeyword(keyword) {
		this.keyword = keyword.trim();
	}

	SetLocation(location) {
		this.location = location.trim();
	}

	SetAge(age) {		
		this.age = age;
	}

	SetRadius(radius) {
		this.radius = radius;
	}

	SetPage(page) {
		this.page = page;
	}

	SetPer(per) {
		this.per = per;
	}
}
```

### How to contribute?
Github: https://github.com/DoctorLai/JobTools

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request. 

## Find Your Perfect Job by using JobTools:
Install via Google Webstore: https://chrome.google.com/webstore/detail/job-tools/ghclpimmbjepihhlnklkiemncamklkii

- - -

This page is synchronized from the post: [The First Job Seeking Chrome Extension based on ZipRecruiter API](https://steemit.com/@justyy/the-first-job-seeking-chrome-extension-based-on-ziprecruiter-api)
