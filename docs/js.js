let element = document.getElementById('footer'); // 根据容器的id获取元素
//element.innerHTML += '<div class="xinhtml">这是新添加的HTML代码</div>'; // 在容器中添加新的HTML代码

element.insertAdjacentHTML('beforebegin', '<div  class="hengfu"><a href="https://weiwei.sitesi.tc/" target="_blank"><img src="/hf.gif" ></a></div>');
/*获取视口*/
const viewportWidth = document.body.clientWidth;

alert(viewportWidth);
//获取图标导航的数量
var title7 = document.getElementsByClassName("btn");
//alert(title7.length);
//根据数量将title内容循环输出
for (var i = 0; i < title7.length; i++) {   
  var title8 = document.getElementsByClassName("btn")[i];
  title8.innerHTML += title8.getAttribute('title'); 
   }
