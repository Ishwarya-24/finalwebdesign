// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['botanic1.jpg', 'botanic2.jpg', 'botanic3.jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}

// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['anz1.jpg', 'anz2.jpg', 'anz3.jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}

// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['eagle1.jpg', 'eagle2.jpg', 'eagle3.jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}

// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['ips1.jpg', 'ips2.jpg', 'ips3.jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}

// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['stockland1.jpg', 'stockland2.jpg', 'stockland3.jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}