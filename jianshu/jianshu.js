//以下是轮播图的实现
var slideshow = document.querySelector(".slideshow");
var wrap = document.querySelector(".wrap");
var next = document.getElementById("arrowright");
var prev = document.getElementById("arrowleft");
var imgwidth = getComputedStyle(slideshow,null).width;//图片长度字符串形式
var intimgwidth = parseInt(imgwidth);//图片长度数字形式
var index = 1;
var dots = document.getElementsByTagName("span");
var timer = null;
var container = document.querySelector(".slideshow");
//wrap.style.left = '-600px';
wrap.style.left = ('-' + intimgwidth + 'px');
next.onclick = function () {
    next_pic();
}
prev.onclick = function () {
    prev_pic();
}

function next_pic () {
    var newLeft;
    if(wrap.style.left === ('-' + intimgwidth * 2 + 'px')){
        newLeft = 0;
    }else{
        newLeft = parseInt(wrap.style.left)- intimgwidth;
    }
    wrap.style.left = newLeft + "px";
    index++;
    if(index > 2){
      index = 0;
    }
    showCurrentDot();
}
function prev_pic () {
    var newLeft;
    if(wrap.style.left === "0px"){
        newLeft = -2*intimgwidth;
    }else{
        newLeft = parseInt(wrap.style.left)+ intimgwidth;
    }
    wrap.style.left = newLeft + "px";
    index--;
    if(index < 0){
      index = 2;
    }
    showCurrentDot();

}


function autoPlay () {
      timer = setInterval(function () {
      next_pic();
  },3000);
}
autoPlay();

container.onmouseenter = function () {
    clearInterval(timer);
}
container.onmouseleave = function () {
    autoPlay();    
}


function showCurrentDot () {
  for(var i = 0, len = dots.length; i < len; i++){
    dots[i].className = "";
  }
  dots[index].className = "on";
}


//跳转代码！！
/*
for (var i = 0, len = dots.length; i < len; i++){
  (function(i){
    dots[i].onclick = function () {
      var dis = index - i;
      if(index == 2 && parseInt(wrap.style.left) !==-1*intimgwidth*3){
        dis = dis - 3;     
      }
      if(index == 0 && parseInt(wrap.style.left) !== -1*intimgwidth){
        dis = 3 + dis;
      }
      wrap.style.left = (parseInt(wrap.style.left) +  dis * intimgwidth)+"px";
      index = i;
      showCurrentDot();
    }
  })(i);            
}
*/

//以上是轮播图的实现

//以下是瀑布流的实现
var dataint = {
    "data":[
        {
           "h2":"春节“不长肉”的一道素菜，一块钱炒一大盘，聪明人上桌抢着吃!",
           "h5":"春节“不长肉”的一道素菜，一块钱炒一大盘，聪明人上桌抢着吃！大年初三刚过，春节期间就是走亲访友的好时间...",
           "src":'images/articlepic10.jpeg'
        },
        {
           "h2":"西北大学教授岳峰：丑书根本原因是缺乏对书法之“法”的深刻理解",
           "h5":"岳峰，字守一。男，汉族，1969年生，陕西城固县人，中国艺术研究院中国书法院研究员",
            "src":'images/articlepic11.jpg',
        },
        {
            "h2":"鱼那么信任水， 水却煮了鱼",
            "h5":"鱼那么信任水， 水却煮了鱼。 叶子那么信任风， 风却吹落了叶。 人心的冷暖， 总是一直变幻...",
            "src":'images/articlepic12.jpg'
        },
        {
            "h2":"世界顶级科技公司，被称“上海3大养老院”，程序员从来不加班",
            "h5":"程序员，一个被黑的最多的行业，很多人印象中的程序员爱键盘胜过爱女朋友、头发越少技术越高...",
            "src":'images/articlepic13.jpg'
        },
        {
            "h2":"小客厅怎么装修出质感？分分钟燃爆你的家",
            "h5":"几乎所有的人在装修的时候都在不断舍弃的纠结中度过，想放一张大桌子，想加一个投影仪...",
            "src":'images/articlepic14.jpg'
        },
        {
          "h2":"来自“大学生”的自我剖析",
          "h5":"承蒙上天垂怜，我侥幸来到了大学。也不否定自己曾经的努力，但自己也知道自己几斤几两...",
          "src":"images/articlepic15.jpg",
        },
        {
          "h2":"吴孟达《流浪地球》路演，透露星爷白发秘密，一句星仔让人感动",
          "h5":"春节档以来，《流浪地球》票房一路高歌猛进，破50亿指日可待，其他电影如《疯狂的外星人》...",
          "src":"images/articlepic16.jpg",
        },
        {
          "h2":"为什么玩卡的人都说必须要有一张四大行的信用卡?",
          "h5":"虽然四大行申请比较难，额度也不高，活动也不怎么多，但是很多人仍然希望拥有一张四大行的信用卡...",
          "src":"images/articlepic17.jpg",
        },
        {
          "h2":"周末一个人的简餐",
          "h5":"我是北方人，所以对面食有种离不开的习惯，即使现在嫁到一个吃米饭较多的地方来，我也戒不掉我的面食爱好...",
          "src":"images/articlepic18.jpg",
        },
        {
          "h2":"这就是为什么穷人越来越穷，富人越来越富的原因！",
          "h5":"等你们没那么穷了，等你们开始接触到有钱人了，就会知道有钱人比穷人善良多了。 穷人圈子基本是互相踩的...",
          "src":"images/articlepic19.jpg",
        },


    ]
}
  var num = 0;
  var vbutton;
  var vmain = document.getElementById("main");
  vmain.style.height = "2200px";
  var vbox;
  var vbox2;
  var vtitle;
  var vword;
  //var vother;
  var vimg;
  var mainheight;
  var i;
  var loadmore = document.getElementById("loadmorebutton");
  function addmorearticle(){
    vbutton = document.getElementById("loadmorebutton");
    vbutton.parentNode.removeChild(vbutton);
    for(i = 1;i < 6 ;i++){
        vbox = document.createElement("div");
        vbox.className = "articlelabel";
        vmain = document.getElementById("main");
        vmain.appendChild(vbox);
        vbox2 = document.createElement("div");
        vbox2.className = "articleword";
        vbox.appendChild(vbox2);
        vtitle = document.createElement("h2");
        vbox2.appendChild(vtitle);
        vword = document.createElement("h5");
        vbox2.appendChild(vword);
        //vother = document.createElement("h6");
        //vbox2.appendChild(vother);
        vimg = document.createElement("img");
        vbox.appendChild(vimg);
        vtitle.innerHTML = dataint.data[num].h2;
        vword.innerHTML = dataint.data[num].h5;
        vimg.src = dataint.data[num].src;
        //vother.innerHTML = dataint.data[num].h6;
        num += 1;
        mainheight = parseInt(vmain.style.height);
        vmain.style.height = "" + (mainheight + 152 ) + "px" ;
      }
    vbutton = document.createElement("div");
    vmain.appendChild(vbutton);
    if(num === dataint.data.length ){
      vbutton.innerHTML = "没有更多了";
      vbutton.style.color = "#CDC5BF";
    }
    else{
    vbutton.className = "loadmorebutton";
    vbutton.id = "loadmorebutton";
    vbutton.innerHTML = "加载更多";
    loadmore = document.getElementById("loadmorebutton");
    loadmore.addEventListener('click',addmorearticle,false);
    }
}

  loadmore.addEventListener('click',addmorearticle,false);

//以上是瀑布流的实现

//以下是各类动效

function tosignup(){
  window.location.href="signup.html";
}
function tologin(){
  window.location.href="login.html";
}

function towaterfall(){
  window.location.href="waterfall.html";
}



