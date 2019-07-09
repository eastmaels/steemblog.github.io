
---
title: 'Don''t minify the code in yet, if you intend to work on it outside of Webflow.'
permlink: dontminifythecodeinyetifyouintendtoworkonitoutsideofwebflow-boa2o4b48b
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-01-22 16:59:30
categories:
- coding
tags:
- coding
- development
- technology
- web
- webflow
thumbnail: 'https://cdn.steemitimages.com/DQmP5yWnNxZjcZkku1bfQxAbA46A8KebE3LJ4HvG6AZfzx5/Code_2019-01-23_00-39-21.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I've been using Webflow to draft the design of my custom webpage for a side project. Due to the visual tool limitation, I had to export the raw code and customize the functionalities, and this is when I found the disaster in the JavaScript file <code>webflow.js</code>. Take a look below.

<img src="https://cdn.steemitimages.com/DQmP5yWnNxZjcZkku1bfQxAbA46A8KebE3LJ4HvG6AZfzx5/Code_2019-01-23_00-39-21.png" alt="Code_2019-01-23_00-39-21.png" /><br/>

A fucking huge wall of code without formatting and full with meaningless variables like <code>a</code> and <code>t</code>. This could be any developer's nightmare(maybe not to the damn experienced one), and the disgusting code like this is so uninviting to for anyone to work with. Where is the promised clean code generation by Webflow algorithm?

<h2>Turns out, the code was minified.</h2>

My very limited development vocabulary reminds me of the idea of <em>code minification</em>. Checking the Webflow's <code>/project setting/hosting</code>, it turns out the all the projects has been set to minified HTML and JS by default.

<img src="https://cdn.steemitimages.com/DQmTA7RWZ23LRkfusV21sJFgGdk8JoxN5Cvq6dTgZkaAWUT/chrome_2019-01-23_00-35-50.png" alt="chrome_2019-01-23_00-35-50.png" /><br/>

The solution was easy, to get the readable source code to work outside Webflow, simply uncheck the all the minification options and export the code again. I'm glad the code has become so human-readable eventually.

<img src="https://cdn.steemitimages.com/DQmdwXvcwZtB5XJU2wi3C6BkEzp7WPG9jpp6PfrB7BQ9jZh/Code_2019-01-23_00-40-26.png" alt="Code_2019-01-23_00-40-26.png" /><br/> <br /><center><hr/><em>Posted from my blog with <a href='https://wordpress.org/plugins/steempress/'>SteemPress</a> : https://fr3eze.vornix.blog/dont-minify-the-code-in-yet-if-you-intend-to-work-on-it-outside-of-webflow/ </em><hr/></center> 

- - -

This page is synchronized from the post: ['Don''t minify the code in yet, if you intend to work on it outside of Webflow.'](https://steemit.com/@fr3eze/dontminifythecodeinyetifyouintendtoworkonitoutsideofwebflow-boa2o4b48b)
