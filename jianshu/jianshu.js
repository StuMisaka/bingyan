var wrap = document.querySelector(".wrap");
var next = document.getElementById("arrowright");
var prev = document.getElementById("arrowleft");


//var next = document.querySelector(".arrow_right");
//var prev = document.querySelector(".arrow_left");
next.onclick = function () {
    alert("be here");
    next_pic();
}
prev.onclick = function () {
    prev_pic();
}
/*next.addEventListener("click",fn,false);
function fn(){
    alert("be here");
}*/
function next_pic () {
    alert("success");
    var newLeft;
    if(wrap.style.left === "-2400px"){
        newLeft = -600;
    }else{
        newLeft = parseInt(wrap.style.left)-600;
    }
    wrap.style.left = newLeft + "px";
    alert("been here");
}
function prev_pic () {
    var newLeft;
    if(wrap.style.left === "0px"){
        newLeft = -2400;
    }else{
        newLeft = parseInt(wrap.style.left)+600;
    }
    wrap.style.left = newLeft + "px";
}