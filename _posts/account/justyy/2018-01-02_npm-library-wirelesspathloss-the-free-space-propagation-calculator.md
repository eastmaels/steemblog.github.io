
---
title: 'NPM Library: wireless_pathloss - The Free Space Propagation Calculator'
permlink: npm-library-wirelesspathloss-the-free-space-propagation-calculator
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-02 20:44:39
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- propagation
- wireless
- programming
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1514925803/p2d8p1gn3pmummwdebvn.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Github: https://github.com/DoctorLai/freespace
NPM Project: https://www.npmjs.com/package/wireless_pathloss
Test `wireless_pathloss` in browser: https://npm.runkit.com/wireless_pathloss

# Introduction
This is a NPM Js Library that provides the [free space calculation](https://propagationtools.com/wireless/free-space-path-loss-calculator-with-api/) in the wireless field. 

# Install the `wireless_pathloss`

```
npm install wireless_pathloss
```

# Sample Usage
```
var wireless = require('wireless_pathloss');
wireless.wireless.Antenna(0, 0, 300);
wireless.wireless.SetFrequency(947);
console.log(wireless.wireless.GetPathLoss(0, 0, 0));
console.log(wireless.freespace(2400, 300));
console.log(wireless.freespace_k1k2k3(30, 2, 0, 100));
```
This will output:
```
81.51942467445872
89.59664992862537
34
```

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1514925803/p2d8p1gn3pmummwdebvn.png)

# Exposed Methods:
```
module.exports = {
	freespace, freespace_k1k2k3, wireless
}
```

where `wireless` is an object with methods:

```
var wireless = (function(){
	// default WIFI 2.4 GHz
	var frequency = 2400;
	// default Antenna (0, 0, 0)
	var _x = 0;
	var _y = 0;
	var _z = 0;
	
	function setAntenna(ax, ay, az) {
		_x = ax;
		_y = ay;
		_z = az;
	}
	
	function setFreq(f) {
		frequency = f;
	}

	function getFreq() {
		return frequency;
	}

	function getDist(x1, y1, z1, x2, y2, z2) {
		return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2) + (z1 - z2) * (z1 - z2));
	}

	var getPathLoss = function(x, y, z) {
		return freespace(frequency, getDist(x, y, z, _x, _y, _z));
	}

	return {
		Antenna: function(x, y, z) {
			setAntenna(x, y, z);
		},

		SetFrequency: function(f) {
			setFreq(f);
		},

		GetFrequency: function() {
			return getFreq();
		},

		GetDist: function(x, y, z) {
			return getDist(x, y, z, _x, _y, _z);
		},

		GetPathLoss: function(x, y, z) {
			return getPathLoss(x, y, z);
		}
	};
})();
```


## Tests
use `npm test` to run tests

![](https://steemitimages.com/DQmQnBLu2ZWxPDpWSLFMRFoFeTX93wmPHeQKoxgQUTUDKHY/image.png)

```
var should = require('chai').should(),
    wireless_pathloss = require('../index'),
    wireless = wireless_pathloss.wireless,
    freespace = wireless_pathloss.freespace,
    freespace_k1k2k3 = wireless_pathloss.freespace_k1k2k3;

describe('wireless', function() {
  it('wireless', function() {
    wireless.Antenna(0, 0, 300);
    wireless.SetFrequency(947);
    wireless.GetPathLoss(0, 0, 0).should.be.closeTo(81.5194, 1e-2);
  }); 
});

describe('freespace', function() {
  it('freespace', function() {
    freespace(2400, 300).should.be.closeTo(89.5966, 1e-2);
  });
});

describe('freespace_k1k2k3', function() {
  it('freespace_k1k2k3', function() {
    freespace_k1k2k3(30, 2, 0, 100).should.be.closeTo(34, 1e-2);
  });
});

```

## Contributing
1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/npm-library-wirelesspathloss-the-free-space-propagation-calculator">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [NPM Library: wireless_pathloss - The Free Space Propagation Calculator](https://steemit.com/@justyy/npm-library-wirelesspathloss-the-free-space-propagation-calculator)
