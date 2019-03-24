function warterfall(parent,box){
  var vmain = document.getElementById(parent);
  var vbox = getByClass(vmain,box);//得到一个数组，记录所有的图片盒子
  var boxwidth = vbox[0].offsetWidth;//这里得到每个图像盒子的宽度
  var cols = Math.floor((document.documentElement.clientWidth)*0.8/boxwidth);//这里计算有多少列
  vmain.style.cssText = 'width:' + boxwidth * cols + 'px;margin:0 auto';
  var a = [];//记录每一列高度的
  for(var i = 0; i < vbox.length;i++){
      if(i < cols){
          a.push(vbox[i].offsetHeight);//这是第一行直接平铺
      }else{//从第二行开始就开始找最小的高度，开始插入图片
          var minH = Math.min.apply(null,a);//网上给的一种方法，计算最小高度
          var index = getMinhIndex(a,minH);
          vbox[i].style.position = 'absolute';
          vbox[i].style.top = minH + 'px';
          vbox[i].style.left = boxwidth * index + 'px';
          a[index] += vbox[i].offsetHeight;
      }
  }
}
/*整来的俩函数：一个利用class获取元素，一个获取数组中最小值的下标*/ 
//根据class获取元素
function getByClass(parent,className){
  var boxArr = [];//用来存储获取到的所有class为box的元素
  var oElements = parent.getElementsByTagName("*");
  for(var i = 0; i < oElements.length;i++){
      if(oElements[i].className == className){
          boxArr.push(oElements[i]);
      }
  }
  return boxArr;
}
//定义函数获取hArr数组中最小值的下标值
function getMinhIndex(arr,val){
  for(var i in arr){
      if(arr[i] == val){
          return i;
      }
  }
}

function heightofmain(){
  if(parseInt( document.body.clientHeight < 6000 ))
  {
    return true;
  }
  else{
    return false;
  }
}

/*整来的一个函数，判断是否具备加载条件*/ 
function checkScrollSlide(){
  var oParent = document.getElementById('main');
  var oBoxs = getByClass(oParent,'box');
  //获取最后一块数据到顶部的距离+ 它自身一半的距离
  var lastBoxH = oBoxs[oBoxs.length - 1].offsetTop + Math.floor(oBoxs[oBoxs.length - 1].offsetHeight/2);
  //获取滚动条滚动距离
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  // 获取window可视化的高度
  var height = document.body.clientHeight || document.documentElement.clientHeight;
  if(lastBoxH > 4000)
  {return false;}
  return (lastBoxH < scrollTop + height)?true:false;
}




//以上是瀑布流，以下是懒加载
window.onload = function(){
  warterfall("main","box");
  var dataInt = {
      "data":[
          {
            "src":'images/demo1.jpg'
          },
          {
            "src":'images/demo2.jpg'
          },
          {
            "src":'images/demo3.jpg'
          },
          {
            "src":'images/demo4.jpg'
          },
          {
            "src":'images/demo5.jpg'
          },
          {
            "src":'images/demo6.jpg'
          },
          {
            "src":'images/demo7.jpg'
          },
          {
            "src":'images/demo8.jpg'
          },
          {
            "src":'images/demo9.jpg'
          },
          
      ]
  }
  //监听window的滚动条事件
  window.onscroll = function(){
    if(checkScrollSlide()){
      var vmain = document.getElementById('main');
      //将数据块渲染到页面的尾部
    for(var i = 0;i < dataInt.data.length;i++){
      var vbox = document.createElement("div");
      vbox.className = "box";
      vmain.appendChild(vbox);
      var vpic = document.createElement("div");
      vpic.className = "pic";
      vbox.appendChild(vpic);
      var vimg = document.createElement("img");
      vimg.src = dataInt.data[i].src;
      vpic.appendChild(vimg);
    }
      warterfall("main","box");
    }
  }
}



