let element = document.getElementById('footer'); // 根据容器的id获取元素
//element.innerHTML += '<div class="xinhtml">这是新添加的HTML代码</div>'; // 在容器中添加新的HTML代码

element.insertAdjacentHTML('beforebegin', '<div  class="hengfu"><a href="https://weiwei.sitesi.tc/" target="_blank"><img src="/hf.gif" ></a></div>');


//var classCount = document.querySelectorAll('.btn').length;
//console.log('数量', classCount);
//alert('数量', classCount)

//var title8 = document.getElementById('btn');
var title7 = document.getElementsByClassName("btn");
alert(title7.length);
var title8 = document.getElementsByClassName("btn")[0];
//div.textContent = title8.getAttribute('title');
//title8.insertAdjacentHTML('beforebegin', title8.getAttribute('title'));
title8.innerHTML += title8.getAttribute('title'); 
