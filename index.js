// about us

var slider_img = document.querySelector('.slider-img');
var images = ['certificate1.jpg', 'certificate2.jpg', 'certificate3.jpg'];
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

// australia project

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

// Indo js
var slider_img = document.querySelector('.slider-img');
var images = ['indo1.jpg', 'indo2.jpg', 'indo3.jpg', 'indo4.jpg','indo5.jpg'];
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

// brisbane
var slider_img = document.querySelector('.slider-img');
var images = ['brisbane1.jpg', 'brisbane2.jpg', 'brisbane3.jpg'];
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

// Gallery js
let index = 1;

const moveTo = e => {
    showSlide(index = e)
}

const changeSlide = e => {
    showSlide(index += e)
}

const showSlide = e => {

    const images = document.querySelectorAll('img');
    const indicators = document.querySelectorAll('.slider-indicators span');
    const contents = document.querySelectorAll('.slider-content h3');

    (e > images.length) ? (index = 1) : null;
    (e < 1) ? (index = images.length) : null;

    for (let image of images) {
        image.style.opacity = '0';
    }

    for (let indicator of indicators) {
        indicator.style.width = '8px';
        indicator.style.background = '#ffffffaf';
    }

    for (let content of contents) {
        content.style.scale = '0';
        content.style.opacity = '0';
        content.style.transitionDelay = '.2s';
    }

    images[index - 1].style.opacity = '1';
    indicators[index - 1].style.width = '26px';
    indicators[index - 1].style.background = '#fff';
    contents[index - 1].style.scale = '1';
    contents[index - 1].style.opacity = '1';

}

showSlide();

//Hong kong stadium js

var slider_img = document.querySelector('.slider-img');
var images = ['hkstadium1.jpg', 'hkstadium2.jpg', 'hkstadium3.jpg'];
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

// Irrigation js
var slider_img = document.querySelector('.slider-img');
var images = ['irriagtion1.jpg', 'irrigation2.jpg', 'irrigation3.jpg', 'irrigation4.jpg'];
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

// Login js
function validate(){
    let username = document.getElementById('username').
    value;
    let password = document.getElementById('password').
    value;
    if(username=null || username=="")
    {
      alert("Enter your username");
      return false;
    }
    if(password.length<=5)
    {
      alert("Valid password required.");
      return false;
    }
    else{
      alert("Login successful.");
      return true;
    }
}

// Papua js
var slider_img = document.querySelector('.slider-img');
var images = ['papua1.jpg', 'papua2.jpg', 'papua3.jpg'];
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

// Pumping js
var slider_img = document.querySelector('.slider-img');
var images = ['gardens1.jpg', 'gardens2.jpg', 'gardens3.jpg'];
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

// Recentpost js
// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['palmtree1.jpg', 'palmtree2.jpg', 'palmtree3.jpg', 'palmtree4.jpg'];
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

// Services js

// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['turf1.jpg', 'turf2.jpg'];
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
// Services js

// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['pumpingservices1.jpg', 'pumpingservices2.jpg', 'pumpingservices2.jpg'];
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
// Services js

// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['lake1.jpg', 'lake2.jpg'];
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
// Services js

// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['environment1.jpg', 'environment2.jpg', 'environment3.jpg', 'environment4.jpg','environment5.jpg','environment6.jpg'];
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
// Services js

// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['fogging1.jpg', 'fogging2.jpg'];
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
// Services js

// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['aeration1.jpg', 'aeration2.jpg', 'aeration3.jpg', 'aeration4.jpg'];
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
// Services js

// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['agriculture1.jpg', 'agriculture2.jpg', 'agriculture3.jpg', 'agriculture4.jpg'];
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
// Services js

// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['floating1.jpg', 'floating2.jpg'];
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

//samford js

var slider_img = document.querySelector('.slider-img');
var images = ['samford1.png', 'samford2.jpg', 'samford3.jpg'];
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

//Service js
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// Singapore gardens

// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['singapore1.jpg', 'singapore2.jpg', 'singapore3.jpg'];
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
var images = ['oasis1.jpg', 'oasis2.jpg', 'oasis3.jpg', 'oasis4.jpg'];
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
// Vietnam js

var slider_img = document.querySelector('.slider-img');
var images = ['vietnam1.jpg', 'vietnam2.jpg', 'vietnam3.jpg'];
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
