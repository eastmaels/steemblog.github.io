
---
title: 'Adding Water Vapour Attenuation to NPM Library `AttenuationByAtmosphericGases`'
permlink: adding-water-vapour-attenuation-to-npm-library-attenuationbyatmosphericgases
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-20 22:27:15
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- programming
- wireless
- radiowave-propagation
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1516486883/m0p1m3mgplwyz7vk0alj.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Previously, in [NPM Javascript to compute Attenuation By Atmospheric Gases ( ITU-R P.676-9)](https://propagationtools.com/wireless/npm-javascript-to-compute-attenuation-by-atmospheric-gases-itu-r-p-676-9/), the Javascript Library is published on NPM that computes the attenuation (unit of dB loss per km) given the frequency, temperature and the atmospheric pressure (unit of hPa).

with the latest commits to the package `AttenuationByAtmosphericGases` version 2.0.0, the library allows also computing the attenuation for [water vapour](https://propagationtools.com/wireless/adding-water-vapour-attenuation-to-npm-library-attenuationbyatmosphericgases/). 

As referenced in Page 15 of [ITU-R P.676-9](https://www.itu.int/dms_pubrec/itu-r/rec/p/R-REC-P.676-9-201202-S!!PDF-E.pdf), the water vapour attenuation regarding to frequency of the radiowave, temperature, atmospheric pressure (unit of hPa) and the water-vapour density (unit of g/m3) is given in the following formula:

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516486883/m0p1m3mgplwyz7vk0alj.png)

The latest commits:
- [index.js, sample.js, READMME.md and test/index.js](https://github.com/DoctorLai/AttenuationByAtmosphericGases/commit/88702986bc025f30bf2d4ca3fa12e04b2661caaf#diff-910eb6f57886ca16c136101fb1699231)

# Example
```
var GetWaterAttenuation = require('attenuationbyatmosphericgases').GetWaterAttenuation;
let frequency = 10;
let temperature = 15;
let pressure = 1013; // hpa
let density = 7.5; // g/m3
console.log(GetWaterAttenuation(frequency, temperature, pressure, density));
```

# Frequency ranges
This library supports from 0 to 350 GHz.

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
describe('water', function() {
  it('water', function() {
    GetWaterAttenuation(10, 15, 1013, 7.5).should.be.closeTo(0.28112047608612034, 1e-3);
  }); 
});
```

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/adding-water-vapour-attenuation-to-npm-library-attenuationbyatmosphericgases">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Adding Water Vapour Attenuation to NPM Library `AttenuationByAtmosphericGases`](https://steemit.com/@justyy/adding-water-vapour-attenuation-to-npm-library-attenuationbyatmosphericgases)
