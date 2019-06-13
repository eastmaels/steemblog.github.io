
---
title: 'NPM Javascript to compute Attenuation By Atmospheric Gases ( ITU-R P.676-9)'
permlink: npm-javascript-to-compute-attenuation-by-atmospheric-gases-itu-r-p-676-9
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-20 00:42:42
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- radiowave
- programming
- wireless-attenuation
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1516408480/jjgq95isvemhip9muy40.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


[ITU-R P.676-9 ](https://www.itu.int/dms_pubrec/itu-r/rec/p/R-REC-P.676-9-201202-S!!PDF-E.pdf) is proposed by International Telecommunication Union that recommends the Attenuation by atmospheric gases which are influenced by `frequency`, `temperature` and `atmospheric pressure` (unit of hpa).

In case of temperature is not known, the mean temperature can be used, where this can be found in document [ITU-R P.1510](https://www.itu.int/dms_pubrec/itu-r/rec/p/R-REC-P.1510-1-201706-I!!PDF-E.pdf)

In [here](https://propagationtools.com/wireless/building-significant-factors-affect-5g-propagation-modelling/), we know that the high frequency radiowave is highly impacted by oxygen absorption and water vapour.  From the below represented figure ,  it is estimated that at 60 GHz, the dB/km attenuation is around 15.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516408480/jjgq95isvemhip9muy40.png)
*[Image Credit](https://propagationtools.com/wireless/wp-content/uploads/2017/05/mmwave-propagation-oxygen-absorption.jpg)*

As you can see, the attenuation consists of several mathematically curves fitting from measurement, and this project is to provide a method to compute the dB/km ([Attenuation By Atmospheric Gases](https://propagationtools.com/wireless/npm-javascript-to-compute-attenuation-by-atmospheric-gases-itu-r-p-676-9/)) given the frequency, temperature and atmospheric pressure.

# Technology Stack
The library is built on Javascript and made public on NPM: https://www.npmjs.com/package/attenuationbyatmosphericgases

# Github
https://github.com/DoctorLai/AttenuationByAtmosphericGases   
Contributions are welcome.
1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

# Unit Tests
Unit tests are built on [mocha and chai](https://mochajs.org) the Javascript unit testing framework, and you can run tests via `npm test`

```
/*
  Unit Tests for Attenuation By Atmospheric Gases
  Built on: mocha and chai
  Tests for frequency ranges from 0 to 350 Ghz
*/

var should = require('chai').should(),
    module = require('../index'),
    GetAirAttenuation = module.GetAirAttenuation;

describe('54', function() {
  it('30', function() {
    GetAirAttenuation(30, 13, 1000).should.be.closeTo(0.0207, 1e-3);
  }); 
});

describe('60', function() {
  it('60', function() {
    GetAirAttenuation(60, 13, 1000).should.be.closeTo(15.097, 1e-3);
  }); 
});

describe('62', function() {
  it('61', function() {
    GetAirAttenuation(61, 13, 1000).should.be.closeTo(14.7173, 1e-3);
  }); 
});

describe('66', function() {
  it('65', function() {
    GetAirAttenuation(65, 13, 1000).should.be.closeTo(3.7769, 1e-3);
  }); 
});

describe('120', function() {
  it('100', function() {
    GetAirAttenuation(100, 13, 1000).should.be.closeTo(0.0252, 1e-3);
  }); 
});

describe('350', function() {
  it('200', function() {
    GetAirAttenuation(200, 13, 1000).should.be.closeTo(0.0101, 1e-3);
  }); 
});
```
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516408922/folgvcoki1rwxurjwkqi.png)

# Samples
```
var GetAirAttenuation = require('attenuationbyatmosphericgases').GetAirAttenuation;
let freq = 60; // 60 GHz
let temperature = 20; // 20 degree
let pressure = 1000; // hpa
console.log(GetAirAttenuation(freq, temperature, pressure));
```
This gives `14.200501629257202`  (dB loss per km).

# Frequency ranges
This library supports from 0 to 350 GHz.

# Roadmap
Currently, this release (init version) only supports the [air (oxygen) absorption](https://propagationtools.com/wireless/npm-javascript-to-compute-attenuation-by-atmospheric-gases-itu-r-p-676-9/). The next version will support [water vapour](https://propagationtools.com/wireless/adding-water-vapour-attenuation-to-npm-library-attenuationbyatmosphericgases/).

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/npm-javascript-to-compute-attenuation-by-atmospheric-gases-itu-r-p-676-9">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [NPM Javascript to compute Attenuation By Atmospheric Gases ( ITU-R P.676-9)](https://steemit.com/@justyy/npm-javascript-to-compute-attenuation-by-atmospheric-gases-itu-r-p-676-9)
