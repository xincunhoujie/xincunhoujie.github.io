let element = document.getElementById('footer'); // 根据容器的id获取元素
//element.innerHTML += '<div class="xinhtml">这是新添加的HTML代码</div>'; // 在容器中添加新的HTML代码

element.insertAdjacentHTML('beforebegin', '<div  class="hengfu"><a href="https://weiwei.sitesi.tc/" target="_blank"><img src="/hf.gif" ></a></div>');


//获取视口，判断是否输出导航文字标签=======
//const viewportWidth = document.body.clientWidth;
const viewportWidth = window.innerWidth;
alert(viewportWidth);

 if (viewportWidth > 600) {
            var title7 = document.getElementsByClassName("btn");
        for (var i = 0; i < title7.length; i++) {
                var title8 = document.getElementsByClassName("btn")[i];
                title8.innerHTML += title8.getAttribute('title');
        }
        } else {
            document.write("小于600");
        }



//获取视口，判断是否输出导航文字标签=======结束
