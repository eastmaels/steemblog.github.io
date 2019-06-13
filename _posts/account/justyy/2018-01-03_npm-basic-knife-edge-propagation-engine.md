
---
title: 'NPM - Basic Knife Edge Propagation Engine'
permlink: npm-basic-knife-edge-propagation-engine
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-03 22:30:12
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- wireless-propagation
- npm
- radiowave
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1515018517/yavxwnrg28iw7kxaloqx.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


To model radiowave propagate in outdoor scenarios, we need to understand the knife edge propagation models. The knife edge model described [here](http://www.mike-willis.com/Tutorial/PF7.htm) is a general purpose theoretic model. 

I have spent some time developing the core engine that will be served as the foundation of future knife edge [propagation models](https://propagationtools.com/wireless/free-space-path-loss-calculator-with-api/) such as EP or Bullington.

NPM Project: https://www.npmjs.com/package/knife_edge_propagation
Test Library in Your Browser: https://npm.runkit.com/knife_edge_propagation
Github: https://github.com/DoctorLai/knife_edge_propagation

# Proof of Work
`doctorlai` is my Github ID and you can verify that by checking my github profile page which has the same gravatar image and it shows my steemit URL. You can verify my ID via NPM profile: https://www.npmjs.com/~justyy  that has a few other projects.

# Sample Usage
```
var knife_edge = require('knife_edge_propagation'),
    knife_edge_compute_v = knife_edge.knife_edge_compute_v,
    knife_edge_compute_pathloss = knife_edge.knife_edge_compute_pathloss,
    knife_edge_compute_pathloss_lee = knife_edge.knife_edge_compute_pathloss_lee,   
    knife_edge_compute_h = knife_edge.knife_edge_compute_h;
    
var d1 = 15;
var d2 = 25;
var h = 5;
var r = 0.002;
var v = knife_edge_compute_v(d1, d2, h, r);
var p1 = knife_edge_compute_pathloss(v);
var p2 = knife_edge_compute_pathloss_lee(v);

console.log(v);
console.log(p1);
console.log(p2);

console.log(knife_edge_compute_h(10, 100, 5, 60, 7));
```
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1515018517/yavxwnrg28iw7kxaloqx.png)

# Contributing
1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

# Tests
I have also written a few tests so you can run via `npm test`

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1515018577/jruxfonpdsenyudmivdp.png)

The tests are based on mocha and chai JS Unit test library:

```
var should = require('chai').should(),
    knife_edge = require('../index'),
    knife_edge_compute_v = knife_edge.knife_edge_compute_v,
    knife_edge_compute_pathloss = knife_edge.knife_edge_compute_pathloss,
    knife_edge_compute_pathloss_lee = knife_edge.knife_edge_compute_pathloss_lee, 
    knife_edge_compute_h = knife_edge.knife_edge_compute_h;

describe('knife_edge_compute_v', function() {
  it('knife_edge_compute_v', function() {
    knife_edge_compute_v(15, 25, 5, 0.002).should.be.closeTo(51.6397, 1e-2);
  }); 
});

describe('knife_edge_compute_pathloss', function() {
  it('knife_edge_compute_pathloss', function() {
    knife_edge_compute_pathloss(51.6397).should.be.closeTo(47.165, 1e-2);
  });
});

describe('knife_edge_compute_pathloss_lee', function() {
  it('knife_edge_compute_pathloss_lee', function() {
    knife_edge_compute_pathloss_lee(51.6397).should.be.closeTo(47.216, 1e-2);
  });
});

describe('knife_edge_compute_h', function() {
  it('knife_edge_compute_h', function() {
    knife_edge_compute_h(10, 100, 5, 60, 7).should.be.closeTo(54.818, 1e-2);
  });
});

```

# Computing the Heights
![](https://steemitimages.com/DQmXsZBrDHFxuMh8vj2gE55ZfpuByMxVp7d39jmgPQKcHPy/image.png)
*Image Credit: [here](http://www.mike-willis.com/Tutorial/PF7.htm)*

This is implemented as a helper function `knife_edge_compute_h`

# Core Engine JS Source
```
'use strict';

const knife_edge_compute_v = (d1, d2, h, r) => {
	return h * Math.sqrt(2 * (d1 + d2) / (r * d1 * d2));
}

const knife_edge_compute_pathloss = (v) => {
	if (v >= -0.7) {
		let t = Math.pow(v - 0.1, 2) + 1;
		return 6.9 + 20 * Math.log10(Math.sqrt(t + 1) + v - 0.1);
	}
	return 0;
}

const knife_edge_compute_pathloss_lee = (v) => {
	if (v > 2.4) return -20 * Math.log10(0.225 / v);
	if (v > 1.0) return -20 * Math.log10(0.4 - Math.sqrt(0.1184 - Math.pow(0.38 - 0.1 * v, 2)));
	if (v > 0) return -20 * Math.log10(0.5 * Math.exp(-0.95 * v));
	if (v > -0.8) return -20 * Math.log10(0.5 - 0.62 * v);
	return 0;
}

const knife_edge_compute_h = (d1, d2, h1, h2, h3) => {
	return h2 - h3 - (h1 - h3) * d2 / (d1 + d2);
}

module.exports = {
	knife_edge_compute_v, knife_edge_compute_pathloss, knife_edge_compute_pathloss_lee, knife_edge_compute_h
}
```

As you can see in the source code, the library exports the following methods:

- knife_edge_compute_v
- knife_edge_compute_pathloss
- knife_edge_compute_pathloss_lee
- knife_edge_compute_h

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/npm-basic-knife-edge-propagation-engine">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [NPM - Basic Knife Edge Propagation Engine](https://steemit.com/@justyy/npm-basic-knife-edge-propagation-engine)
