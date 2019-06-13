
---
title: 'The Development of Javascript Library (NPM) to compute the HATA Propagation Model'
permlink: the-development-of-javascript-library-npm-to-compute-the-hata-propagation-model
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-04 22:35:21
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- wireless-propagation
- engineering
- radiowave
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1515105060/kshba6reg5krx41vm7rc.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


The HATA Propagation Model, as described [here, WIKI](https://en.wikipedia.org/wiki/Hata_model) is a known outdoor propagation model that is built from the measurement, in Tokyo. It can be used to predict point-to-point and broadcast communications. 

The model applies to the following parameters:
- Antenna height 1 to 10 meter.
- Base station 30 to 200 meter,
- Link distance from 1 to 10k meter.

I have spent the night developing a JS Library of the HATA model, which can be found in the following places:

- Github: https://github.com/DoctorLai/hata_model
- NPM: https://www.npmjs.com/package/hata_model

# Proof of Work
You'll match my ID (and profile image) in steemit and the NPM project page:  https://npmjs.com/~justyy  
The NPM project page links to github, which has also stated my steemit URL.

# Installation
You can install the package via `npm install hata_model`

# Tests
You can run tests via command `npm test` 
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1515105060/kshba6reg5krx41vm7rc.png)

The tests are built using JS `mocha` unit test library.
```
var should = require('chai').should(),
    wireless = require('../index'),
    hata = wireless.hata;

describe('hata', function() {
  it('case 1', function() {
    hata.Antenna(0, 0, 30);
    hata.SetFrequency(800);
    hata.SetCitySize(1);
    hata.SetCityType(2);
    hata.GetPathLoss(0, 50, 1).should.be.closeTo(160.043, 1e-2);
  }); 

  it('case 2', function() {
    hata.Antenna(0, 0, 25);
    hata.SetFrequency(947);
    hata.SetCitySize(0);
    hata.SetCityType(1);
    hata.GetPathLoss(0, 50, 1).should.be.closeTo(180.323, 1e-2);
  });   
});
```
# Sample Usage
The following shows how easy to use HATA model to compute the [path loss](https://propagationtools.com/wireless/free-space-path-loss-calculator-with-api/) in outdoor scenarios.

```
var hata = require('hata_model').hata;
hata.Antenna(0, 0, 30);
hata.SetFrequency(800);
hata.SetCitySize(1);
hata.SetCityType(2);
console.log(hata.GetPathLoss(0, 50, 1));
```

## Core JS Library (exported by NPM)
```
'use strict';

const compute_lu = (f, hb, hm, d, citysize) => {
	let ch = 0;
	switch (citysize) { // 0 - small, 1 - big
		case 0: ch = 0.8 + (1.1 * Math.log10(f) - 0.7) * hm - 1.56 * Math.log10(f); break;
		case 1: {
			if ((f >= 150) && (f <= 200)) {
				ch = 8.29 * Math.pow(Math.log10(1.54 * hm), 2) - 1.1;
			} else if ((f > 200) && (f <= 1500)) {
				ch = 3.2 * Math.pow(Math.log10(11.75 * hm), 2) - 4.97;
			}
			break;
		}
	}
	return 69.55 + 26.16 * Math.log10(f) - 13.82 * Math.log10(hb) - ch + Math.floor(44.9 - 6.55 * Math.log10(hb)) * Math.log10(d);
}

const compute_lsu = (lu, f) => {
	return lu - 2 * Math.pow(Math.log10(f / 28), 2) - 5.4;
}

const compute_lo = (lu, f) => {
	return lu - 4.78 * Math.pow(Math.log10(f), 2) + 18.33 * Math.log10(f) - 40.94;
}

var hata = (function(){
	// default WIFI 2.4 GHz
	var frequency = 2400;
	// default Antenna (0, 0, 0)
	var _x = 0;
	var _y = 0;
	var _z = 0;
	// city size (0 - small, 1 - big)
	var citysize = 0;
	// type, default to urban
	var type = 0;

	function setUrban() {
		type = 0;
	}
	
	function setSuburban() {
		type = 1;
	}

	function setRural() {
		type = 2;
	}

	function getCitySize() {
		return citysize;
	}

	function setCitySize(v) {
		citysize = v;
	}
	
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
		// Height of base station antenna. Unit: meter (m)
		let hb = _z;
		// Height of mobile station antenna. Unit: meter (m)
		let hm = z;
		let d = getDist(x, y, z, _x, _y, _z);
		let lu = compute_lu(frequency, hb, hm, d, citysize);
		switch(type) {
			case 1: lu = compute_lsu(lu, frequency); break;
			case 2: lu = compute_lo(lu, frequency); break;
		}
		return lu;
	}

	return {
		Antenna: function(x, y, z) {
			setAntenna(x, y, z);
		},

		SetFrequency: function(f) {
			setFreq(f);
		},

		SetCitySize: function(v) {
			setCitySize(v);
		},

		SetCityType: function(v) {
			switch(v) {
				case 0: setUrban(); break;
				case 1: setSuburban(); break;
				case 2: setRural(); break;
			}
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

module.exports = {
	compute_lo, compute_lu, compute_lsu, hata
}
```

# Future Work
It is planed to add the COST HATA model [wiki](https://en.wikipedia.org/wiki/COST_Hata_model) which is the extended model based on the HATA model.

# Contributing
1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D







<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/the-development-of-javascript-library-npm-to-compute-the-hata-propagation-model">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [The Development of Javascript Library (NPM) to compute the HATA Propagation Model](https://steemit.com/@justyy/the-development-of-javascript-library-npm-to-compute-the-hata-propagation-model)
