## 帮助文档

> [官方网址](https://www.sasscss.com/ "点击查看帮助文档") \
[中文帮助文档](https://sass.xiniushu.com/ "点击查看中文帮助文档")

## 声明变量

#### ① 可使用数据类型

1.  \$my-yanse:#ff0000; 颜色
2.  \$my\_kuan:10px; 数字
3.  \$mystyle\:solid; 属性
4.  \$zifuchuan:"heimao", 字符串
5.  \$bianliang:$my-yanse \$my\_kuan 1px; 调用变量

#### ② 作用域

1.  如果设置在大括号外就全局生效
2.  如果设置在大括号内，就在本括号内生效

#### ③ !default规则

如果前面有声明过这个变量，则用前面的，本身的这个声明变量就隐藏无效。

```css
$bianliang:100px;
$bianliang:200px !default;
```

如上：第二次声明变量值无效，结果是：100px

## 嵌套

#### html结构代码

```html
<div id="content">
    <div class="top">
        <h1>aaa</h1>
        <p>aaa</p>
    </div>
    <div class="tottom">
        <p><a href="#">aaa</a></p>
    </div>
</div>
```

#### 嵌套的scss代码

```css
#content{
    color: #001;
    .top{
        color: #002;
        h1{color: #003;}
        p{color: #003;}

    }
    .bottom{
        color: #002;
        p{
            color: #003;
            a{
                color: #004;
            }
        }

    }
}
```

#### 输出css结果

```css
#content {color: #001;}
#content .top {color: #002;}
#content .top h1 {color: #003;}
#content .top p {color: #003;}
#content .bottom {color: #002;}
#content .bottom p {color: #003;}
#content .bottom p a {color: #004;}
```

#### & 占位符

> 如果嵌套伪类选择器，默认会生成空格，造成无效，所以要用占位符

scss结构

```css
a {
    color: #000;
    &:hover {
        color: #999;
    }
}
```

输出

```css
a {color: #000;}
a:hover {color: #999;}
```

#### 群组选择器 嵌套

```css
div,p,.top,#hong{
    a {
        color: #000;

        &:hover {
            color: #c01212;
        }
    }
}

```

#### 属性嵌套

> 意义不大，基本不会使用到，**这里记录下而已**！

scss结构

```css
div{
    border: {style:solid;width: 2px;color: #000;}
}
```

输出

```css
div {
  border-style: solid;
  border-width: 2px;
  border-color: #000;
}
```

## 导入

> **局部scss文件：**\
> scss文件已下划线\_作为前缀，是不会被转换成css文件的,例：\_daidaoru.scss\
> **全局scss文件：** \
> 不带\_前缀的scss文件是一定会被转成css文件的。\
> **导入局部文件：** \
> @import "daidaoru"; **注：掐头去尾即可**\
> 全局scss和局部scss都可以被导入，导入后被导入的文件中的变量可以直接使用

## 混合器

> 把多个选择器都会使用的一部分样式封装起来，只写一遍，需要的时候调用。\
> 注意：混合器使用最多的地方是CSS HACK ，即：对低版本浏览器最兼容的时候。

#### 普通混合器

```css
@mixin my_border {
    border: 1px solid #f00;
}

div {
    width: 100px;
    @include my_border;
}
```

#### 带参数的混合器

scss结构

```css
@mixin my_border_canshu($width, $style, $color, $size) {
    border: $width $style $color;
    border-radius: $size;
}

div {
    @include my_border_canshu(1px, solid, #f00, 20%);
}
```

输出

```css
div {
  border: 1px solid #f00;
  border-radius: 20%;
}
```

#### 混合器 CSS HACK 实例

```css
@mixin my-bg($fx, $color1, $color2) {
    background: -webkit-linear-gradient($fx, $color1, $color2);
    background: -o-linear-gradient($fx, $color1, $color2);
    background: -moz-linear-gradient($fx, $color1, $color2);
    background: -ms-linear-gradient($fx, $color1, $color2);
}

div {
    @include my-bg(top, #f00, #000);
}

```

## 继承

scss代码结构

```css
.my-parent {
    width: 100px;
    height: 50px;
}

.my-child {
    color: #000;
    @extend .my-parent
}
```

输出结果

```css
.my-parent, .my-child {
  width: 100px;
  height: 50px;
}

.my-child {
  color: #000;
}
```

## 运算（加减乘除模）

> scss中的运算会自动转换单位 \
> 但是相对单位不可以转换，会报错，如1%+1rem

```css
/*计算结果是：29.34646pt*/

div {
    width: 1pt+1cm;
}
```

#### ① 加

> 除了做加法，还有字符串拼接的问题\
> 带双引号的+不带双引号=带双引号的\
> 不带双引号+带双引号=不带双引号的字符串\
> **实际就是：以加号前面的内容为准,第一个内容是字符串结果就是字符串**

```css
p::before {
    content: 'Microsoft' +yahei;
    font-family: A+"yahei";
}

/*结果*/

p::before {
  content: "Microsoftyahei";
  font-family: Ayahei;
}

```

#### ② 减

> 在变量名称中有时会使用 - 号，所以在做减法的时候会造成混乱，程序分不清是减号还是变量名称的一部分\
> 所以**在最减法时，减号前后一定要加空格**

```css
p{
  width: $my-width - $my-max-width;
}
```

#### ③ 除

> 在scss中，除号 / 的作用是除号和分隔符两个用途

```css
p {
    font: 10px/5px; /*失败：不能计算*/
    font: (10px/5px)+px; /*成功:结果2px，加括号后可以计算但是没有了单位*/
    $width: 1000px;
    width: $width/2;/*成功：结果500px*/
    height: (500px/2); /*成功：结果250px*/
    margin: 5px+8px/2px; /*成功：结果9px*/
}
```

> 以下情况被认为是除法

1.  除号两边有变量或方法的返回值
2.  除法计算式被小括号包裹
3.  除法运算式是其他运算式的一部分

#### ④ 插值运算

scss代码

```css
div::after {
    content: "黑猫警长的年龄是 #{50+30} 岁";
}
```

运算结果

```css
div::after {
  content: "黑猫警长的年龄是 80 岁";
}
```

#### ⑤ 颜色运算

> 颜色运算是分段计算\
> 红色与红色计算，绿色与绿色计算，蓝色与蓝色计算\
> **注意：rgba的计算，透明度必须相等才能计算，不然报错！**

scss代码

```css
p {
    color: rgb(1, 2, 3)+rgb(1, 2, 3);
    background: #112233+#445566;
    border-color: rgba(1, 2, 3, 0.5)+ rgba(4, 5, 6, 0.5);
}
```

运算结果

```css
p {
  color: #020406;
  background: #557799;
  border-color: rgba(5, 7, 9, 0.5);
}
```

## 函数

#### ① scss中预定义了很多函数，有些函数甚至可以直接在css中使用

```css
div{
    color:rgba(red, green, blue, alpha);
    background-color: hsl(hue, saturation, lightness);
}
```

#### ② 数学函数

```css
div{
    height: round(4.3)+px; //四舍五入 值：4
    height: ceil(3.1)+px; //向上取整 值：4
    height: floor(3.1)+px; //向下取整 值：3
    height: max(1,2,3,4,5)+px; //取最大值 值：5
    height: min(1,2,3,4,5)+px;//取最小值，值：1
    height: random()+px; //随机数
}
```

#### ③ 字符串函数

```css
div::after{
    content: quote(黑猫警长); //增加双引号
    content:unquote("黑猫警长"); //去掉双引号
    content: to-upper-case(abc); //转大写
    content: to-lower-case(aBhUUU); //转小写
}
```

#### ④ 自定义函数

> `无参函数`

scss结构

```css
@function add() {
    @return 1+2+px;
}
```

结果

```css
div {
  width: 3px;
}
```

> `带参数的函数`

scss结构

```css
@function add($n1, $n2) {
    @return $n1+$n2+px;
}

div {
    width: add(10, 5);
}
```

结果

```css
div {
  width: 15px;
}
```

> `函数小练习`\
> 定义一个带参数的函数get\_width(\$n)\
> 函数内部分别有两个变量分别为60px和10px\
> 函数返回值为`$n乘以两个变量的最大值 + $`n乘以两个变量的最小值

scss代码

```css
@function get_width($n) {
    $kuan1: 60px;
    $kuan2: 10px;
    @return $n*max($kuan1, $kuan2)+$n*min($kuan1, $kuan2);
}

div {
    width: get_width(20);
}
```

输出结果

```css
div {
  width: 1400px;
}
```

## 指令
**注意：条件的小括号可以删除**

scss 代码
```css
$shuzi: 2;

h2 {
    @if $shuzi==1 {
        color: #111;
    }

    @else if $shuzi==2 {
        color: #222;
    }

    @else {
        color: #000;
    }
}
```
输出结果
```css
h2 {
  color: #222;
}
```

#### 指令练习--根据数值条件显示渐变背景颜色
**步骤**
1. 建立混合器
2. 判断数字并返回数字，以供div判断
3. div根据第二步的数值判断显示颜色


```css
@mixin my-bg($color1, $color2) {

    background: -webkit-linear-gradient(top, $color1, $color2);
    background: -o-linear-gradient(top, $color1, $color2);
    background: -moz-linear-gradient(top, $color1, $color2);
    background: -ms-linear-gradient(top, $color1, $color2);

}

@function get-bg($n) {
    @if $n>95 {
        @return 1;
    }

    @else if $n>80 {
        @return 2;
    }

    @else if $n>60 {
        @return 3;
    }

    @else {
        @return 4;
    }
}

div {
    $resule: get-bg(71);

    @if $resule==1 {
        @include my-bg(#f00, #faa)
    }

    @else if $resule==2 {
        @include my-bg(#00f, #0ff)
    }

    @else if $resule==3 {
        @include my-bg(#ff0, #ffa)
    }

    @else if $resule==4 {
        @include my-bg(#000, #111)
    }
}
```