
---
title: 'Simple but Powerful Simulated Annealing NPM Library (with Demo)'
permlink: simple-but-powerful-simulated-annealing-npm-library-with-demo
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-24 14:54:54
categories:
- utopian-io
tags:
- utopian-io
- steemstem
- math
- optimisation
- programming
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Extrema_example_original.svg/600px-Extrema_example_original.svg.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


[Simulated Annealing](https://helloacm.com/simulated-annealing/) is a general-purpose meta heuristic optimisation algorithm. It is similar to hill climbing but SA has the ability to jump out of local optimal with a decreasing probability.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Extrema_example_original.svg/600px-Extrema_example_original.svg.png)
*Image Credit: [wiki](https://en.wikipedia.org/wiki/Maxima_and_minima#/media/File:Extrema_example_original.svg)*

We can think of SA as the following scenario: A drunk rabbit jumps randomly as she wants to reach the hill top. As she wakes up gradually little by little, she walks steady to the hill top...

I have created a easy (simple to use) and yet very powerful tiny framework to adopt the SA to general math optimisation problems.

# Technology Stack
Latest [Javascript](https://helloacm.com/how-to-test-element-in-array-in-array-and-array-contains-in-javascript/) (ECMAScript 2016) and wrapped in NPM Library:

# Project Page
NPM: https://www.npmjs.com/package/simulated_annealling

# Unit Test
Unit tests are built upon [mocha and chai](https://mochajs.org) unit testing framework. And you can run test via `npm test`

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516805539/flz4x1fuwycjadokburf.png)

# Demo
The following will use the SA library to search the answer(s) for equation `x*x = 16`

```
var SimulatedAnnealing = require('simulated_annealling').SimulatedAnnealing;

var GetAnswerOfXSquareEqualsSixteen = (function() {
	// parameters
	let options = {
		coolingFactor: 0.09,
		stabilizingFactor: 1.005,
		freezingTemperature: 0.001,
		initialTemperature: 15,
		initialStabilizer: 30
	}

	// final solution 
	let x;
	// current solution
	let cur;

	const getCost = (v) => {
		return Math.abs(v * v - 16);
	}

	const generateNeighbor = () => {
		// neighbour is within 0.5 distance
		cur = x + (Math.random() - 0.5);
		return getCost(cur);
	}

	const generateNewSolution = () => {
		cur = Math.random() * 16; // guess a number between 0 to 16
		x = cur;
		return getCost(cur);
	}

	const acceptNeighbor = () => {
		x = cur;
	}	

	// pass parameters to SA object
	let SA = SimulatedAnnealing(options, generateNewSolution, generateNeighbor, acceptNeighbor);

	// we need to continue simulating if temperature is still high
	while (SA.Do()) {
		// console.log("Temperature: " + SA.GetCurrentTemperature());
		// console.log("GetCurrentEnergy: " + SA.GetCurrentEnergy());
	}

	// final solution
	console.log("Solution is: " + x);
})()
```

This example is also used as a [unit test](https://helloacm.com/unit-test-methods-should-support-float-numbers-comparisons-with-epsilon/) case.

Reposted to my own blog: [https://helloacm.com/simple-but-powerful-simulated-annealing-npm-library-with-demo/](https://helloacm.com/simple-but-powerful-simulated-annealing-npm-library-with-demo/)

# Contributing
Github: https://github.com/DoctorLai/simulated_annealling

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/simple-but-powerful-simulated-annealing-npm-library-with-demo">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Simple but Powerful Simulated Annealing NPM Library (with Demo)](https://steemit.com/@justyy/simple-but-powerful-simulated-annealing-npm-library-with-demo)
