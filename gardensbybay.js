// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['gardensbybay1.jpg', 'gardensbybay2.jpg', 'irrigation3.jpg','irrigation4.jpg'];
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