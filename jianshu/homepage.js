var skeleton = document.getElementById("skeleton");
var statusbutton = document.getElementById("statusbutton");
var rectangle1 = document.getElementById("rectangle1");
var rectangle2 = document.getElementById("rectangle2");
var rectangle3 = document.getElementById("rectangle3");
var rectangle4 = document.getElementById("rectangle4");
var rectangle5 = document.getElementById("rectangle5");

rectangle1.style.width = "100px";
rectangle2.style.width = "250px";
rectangle3.style.width = "400px";
rectangle4.style.width = "120px";
rectangle5.style.width = "500px";

statusbutton.onclick = function(){
  skeleton.style.display = "block";
    var a1 = setInterval(addwidth1,30);
    function addwidth1() { 
    rectangle1.style.width = parseInt(rectangle1.style.width) + 10 +"px";
    if(parseInt(rectangle1.style.width) > 470 ) {
      window.clearInterval(a1);
      var a2 = setInterval(cutwidth1,30);
      function cutwidth1() { 
      rectangle1.style.width = parseInt(rectangle1.style.width) - 10 +"px";
      if(parseInt(rectangle1.style.width) < 100 ) {
      window.clearInterval(a2);
      }
      }
    }
  } 

  var b1 = setInterval(addwidth2,30);
  function addwidth2() { 
  rectangle2.style.width = parseInt(rectangle2.style.width) + 10 +"px";
  if(parseInt(rectangle2.style.width) > 500 ) {
    window.clearInterval(b1);
    var b2 = setInterval(cutwidth2,30);
    function cutwidth2() { 
    rectangle2.style.width = parseInt(rectangle2.style.width) - 10 +"px";
    if(parseInt(rectangle2.style.width) < 140 ) {
    window.clearInterval(b2);
    }
    }
  }
} 

  var c1 = setInterval(addwidth3,30);
  function addwidth3() { 
  rectangle3.style.width = parseInt(rectangle3.style.width) + 10 +"px";
  if(parseInt(rectangle3.style.width) > 430 ) {
  window.clearInterval(c1);
  var c2 = setInterval(cutwidth3,30);
  function cutwidth3() { 
  rectangle3.style.width = parseInt(rectangle3.style.width) - 10 +"px";
  if(parseInt(rectangle3.style.width) < 250 ) {
  window.clearInterval(c2);
  }
  }
}
} 


var d1 = setInterval(addwidth4,30);
  function addwidth4() { 
  rectangle4.style.width = parseInt(rectangle4.style.width) + 10 +"px";
  if(parseInt(rectangle4.style.width) > 240 ) {
  window.clearInterval(d1);
  var d2 = setInterval(cutwidth4,30);
  function cutwidth4() { 
  rectangle4.style.width = parseInt(rectangle4.style.width) - 10 +"px";
  if(parseInt(rectangle4.style.width) < 100 ) {
  window.clearInterval(d2);
  }
  }
}
} 

var e1 = setInterval(addwidth5,30);
  function addwidth5() { 
  rectangle5.style.width = parseInt(rectangle5.style.width) + 10 +"px";
  if(parseInt(rectangle5.style.width) > 550 ) {
  window.clearInterval(e1);
  var e2 = setInterval(cutwidth5,30);
  function cutwidth5() { 
  rectangle5.style.width = parseInt(rectangle5.style.width) - 10 +"px";
  if(parseInt(rectangle5.style.width) < 100 ) {
  window.clearInterval(e2);
  }
  }
}
} 



}