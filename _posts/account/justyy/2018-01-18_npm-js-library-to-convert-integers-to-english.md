
---
title: 'NPM Js Library to Convert Integers to English'
permlink: npm-js-library-to-convert-integers-to-english
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-18 20:45:15
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- programming
- npm
- javascript
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1516308136/jca6ap0wozvwznrqpcx0.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


# int2english
`int2english` is a NPM Javascript Library that converts Arabic Integers to English Words.

# Supported Data Range
A valid 64-bit signed integer from -9223372036854775807 to 9223372036854775807.

# Project pages
NPM Package Page:  https://www.npmjs.com/package/int2english
Test `int2english` in the browser: https://npm.runkit.com/int2english
Github: https://github.com/DoctorLai/int2english

## Installation
```
npm install int2english
```

## Usage
```
var IntegerToEnglish = require('int2english').IntegerToEnglish;
console.log(IntegerToEnglish(0));
console.log(IntegerToEnglish(1));
console.log(IntegerToEnglish(11));
console.log(IntegerToEnglish(1234));
console.log(IntegerToEnglish(9999234));
console.log(IntegerToEnglish(-9999234));
```

Output:
```
Zero
One
Eleven
One Thousand Two Hundred Thirty Four
Nine Million Nine Hundred Ninety Nine Thousand Two Hundred Thirty Four
Negative Nine Million Nine Hundred Ninety Nine Thousand Two Hundred Thirty Four
```

## Tests
```
npm test
```

Unit Tests are built on [mocha and chai](https://mochajs.org/).

```
var should = require('chai').should(),
    module = require('../index'),
    IntegerToEnglish = module.IntegerToEnglish;

describe('zero', function() {
  it('0', function() {
    IntegerToEnglish(0).should.equal('Zero');
  });
});

describe('positive', function() {
  it('1', function() {
    IntegerToEnglish(1).should.equal('One');
  });  
  it('123', function() {
    IntegerToEnglish(123).should.equal('One Hundred Twenty Three');
  });  
});

describe('negative', function() {
  it('-1', function() {
    IntegerToEnglish(-1).should.equal('Negative One');
  });  
  it('123', function() {
    IntegerToEnglish(-123).should.equal('Negative One Hundred Twenty Three');
  });  
});
```

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516308136/jca6ap0wozvwznrqpcx0.png)


# Other resources
1. I have written [this API and online tool](https://helloacm.com/tools/convert-arabic-numerals-to-english-words/) that does similar thing.
2. C/C++ [Source code](https://helloacm.com/c-coding-exercise-convert-integer-to-english-words/) that does not support negative numbers.

## Contributing
1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

# Full JS Source Code
```
'use strict';

const IntegerToEnglish = (x) => {
	if (x < 0) {
		return "Negative " + IntegerToEnglish(-x);
	}
    switch(x) {
        case 0: return "Zero";
        case 1: return "One";
        case 2: return "Two";
        case 3: return "Three";
        case 4: return "Four";
        case 5: return "Five";
        case 6: return "Six";
        case 7: return "Seven";
        case 8: return "Eight";
        case 9: return "Nine";
        case 10: return "Ten";
        case 11: return "Eleven";
        case 12: return "Twelve";
        case 13: return "Thirteen";
        case 14: return "Fourteen";
        case 15: return "Fifteen";
        case 16: return "Sixteen";
        case 17: return "Seventeen";
        case 18: return "Eighteen";
        case 19: return "Nineteen";
        case 20: return "Twenty";
        case 30: return "Thirty";
        case 40: return "Forty";
        case 50: return "Fifty";
        case 60: return "Sixty";
        case 70: return "Seventy";
        case 80: return "Eighty";
        case 90: return "Ninety";
        case 100: return "One Hundred";
        case 1000: return "One Thousand";
        case 1000000: return "One Million";
        case 1000000000: return "One Billion";
    }
    // less than 100
    for (let i = 1; i <= 9; i ++) {
        let j = i * 10;
        if ((x >= j) && (x < j + 10)) {
            let r = x - j;
            return IntegerToEnglish(j) + (r > 0 ? (" " + IntegerToEnglish(r)): "");
        }
    }
    // less than 1000
    for (let i = 1; i <= 9; i ++) {
        let j = i * 100;
        if ((x >= j) && (x < j + 100)) {
            let r = x - j;
            return IntegerToEnglish(i) + " Hundred" + (r > 0 ? (" " + IntegerToEnglish(r)): "");
        }
    }
    // less than 10000
    for (let i = 1; i <= 9; i ++) {
        let j = i * 1000;
        if ((x >= j) && (x < j + 1000)) {
            let r = x - j;
            return IntegerToEnglish(i) + " Thousand" + (r > 0 ? (" " + IntegerToEnglish(r)): "");
        }
    }
    // Million
    for (let i = 1; i <= 9; i ++) {
        let j = i * 1000000;
        if ((x >= j) && (x < j + 1000000)) {
            let r = x - j;
            return IntegerToEnglish(i) + " Million" + (r > 0 ? (" " + IntegerToEnglish(r)): "");
        }
    }
    // Billion
    for (let i = 1; i <= 4; i ++) {
        let j = i * 1000000000;
        if ((x >= j) && (x < j + 1000000000)) {
            let r = x - j;
            return IntegerToEnglish(i) + " Billion" + (r > 0 ? (" " + IntegerToEnglish(r)): "");
        }
    }
    // Divide the number into 3-digit groups from left to right
    let output = "";
    let cnt = 0;
    while (x > 0) {
        let y = x % 1000;
        x = Math.floor(x / 1000);
        if (y > 0) { // skip middle-chunk zero
            let t = "";
            if (cnt == 1) t = " Thousand ";
            if (cnt == 2) t = " Million ";
            if (cnt == 3) t = " Billion ";
            output = IntegerToEnglish(y) + t + output;
        }
        cnt ++;
    }
    if (output[output.length - 1] == ' ') { // "Three Thousand " == > "Three Thousand"
        return output.substr(0, output.length - 1);
    }
    return (output);
}

module.exports = {
	IntegerToEnglish 
}
```

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/npm-js-library-to-convert-integers-to-english">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [NPM Js Library to Convert Integers to English](https://steemit.com/@justyy/npm-js-library-to-convert-integers-to-english)
