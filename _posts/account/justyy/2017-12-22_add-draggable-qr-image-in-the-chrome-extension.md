
---
title: 'Add Draggable QR Image In the Chrome Extension'
permlink: add-draggable-qr-image-in-the-chrome-extension
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-22 11:56:24
categories:
- utopian-io
tags:
- utopian-io
- qr-image
- chrome-extension
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1513943431/jsa8xhb3oxsyupnzm0hn.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Github: https://github.com/DoctorLai/simple-qr-code
Commit: https://github.com/DoctorLai/simple-qr-code/commit/d146ba6f92602af6659a2a20453f3a820592fa11#diff-84c8cc9cb7404cad0e73f3490195d979
Chrome WebStore: https://chrome.google.com/webstore/detail/offline-qr-code-generator/kfhbhjigpkcbpmknfomdobahejfajado

I have spent some time today adding the Draggable QR Image in the Chrome Extension [Offline QR Code Generator/Editor](https://helloacm.com/how-to-generate-qr-image-using-google-api/)

So you can right click on any page (optionally selecting any text)
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1513943431/jsa8xhb3oxsyupnzm0hn.png)

and drag the QR everywhere!  and you can double click the edit the QR text on the fly.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1513943668/te67zxbi3gvg1nouyyb6.png)

# This change:
https://github.com/DoctorLai/simple-qr-code/blob/master/simple-qr-code/js/contentscript.js

```
function dragElement(elmnt) {
	  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	  if (document.getElementById(elmnt.id + "header")) {
	    /* if present, the header is where you move the DIV from:*/
	    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	  } else {
	    /* otherwise, move the DIV from anywhere inside the DIV:*/
	    elmnt.onmousedown = dragMouseDown;
	  }

	  function dragMouseDown(e) {
	    e = e || window.event;
	    // get the mouse cursor position at startup:
	    pos3 = e.clientX;
	    pos4 = e.clientY;
	    document.onmouseup = closeDragElement;
	    // call a function whenever the cursor moves:
	    document.onmousemove = elementDrag;
	  }

	  function elementDrag(e) {
	    e = e || window.event;
	    // calculate the new cursor position:
	    pos1 = pos3 - e.clientX;
	    pos2 = pos4 - e.clientY;
	    pos3 = e.clientX;
	    pos4 = e.clientY;
	    // set the element's new position:
	    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
	    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	  }

	  function closeDragElement() {
	    /* stop moving when mouse button is released:*/
	    document.onmouseup = null;
	    document.onmousemove = null;
	  }
	}

	dragElement(document.getElementById("weibomiaopaiqrcode"));
```

# Proof of Work
`doctorlai` is my github ID and you can see on my profile page that it has my SteemID URL written.


<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@justyy/add-draggable-qr-image-in-the-chrome-extension">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: [Add Draggable QR Image In the Chrome Extension](https://steemit.com/@justyy/add-draggable-qr-image-in-the-chrome-extension)
