var slideshow = document.querySelector(".slideshow");
var wrap = document.querySelector(".wrap");
var next = document.getElementById("arrowright");
var prev = document.getElementById("arrowleft");
wrap.style.left = '-450px';

next.onclick = function () {
    next_pic();
}
prev.onclick = function () {
    prev_pic();
}

function next_pic () {
  alert("ok");
    var newLeft;
    if(wrap.style.left === "-1350px"){
        newLeft = 0;
    }else{
        newLeft = parseInt(wrap.style.left)-450;
    }
    wrap.style.left = newLeft + "px";
}
function prev_pic () {
    var newLeft;
    if(wrap.style.left === "0px"){
        newLeft = -900;
    }else{
        newLeft = parseInt(wrap.style.left)+450;
    }
    wrap.style.left = newLeft + "px";

}

var timer;
function autoPlay () {
      setInterval(function () {
      next_pic();
  },3000);
}
autoPlay();

/*slideshow.onmouseover = function(){
  clearInterval(timer);
}
slideshow.onmouseout = function(){
  autoPlay();
}*/

