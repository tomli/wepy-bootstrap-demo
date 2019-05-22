# wepy-bootstrap-demo
在wepy开发环境中使用bootstrap来开发微信小程序的小样，包含一些bookstrap官方组件的展示


_已经有适合微信开发的WeUI和无数花里胡梢的第三方小程序组件库，为什么还要使用bootstrap？
1. Bootstrap有精简，美观，一致的样式框架，即使是审美水平欠佳的码农也可以作出美观大方的界面。
2. 对许多熟悉Bootstrap开发模式的前端小伙伴来说， bootstrap的强大和灵活可以大大提高开发效率。特别是当你有一个同样熟悉bootstrap的designer作搭档的时候。
3. Bootstrap4有极其好用的定制化功能，改几个参数就能给项目作出不同风格的Theme。_


**安装及使用**

1. Clone项目到本地

        git clone https://github.com/tomli/wepy-bootstrap-demo.git

2. 安装依赖

            npm install      
            
3. 开启wepy实时编译, 在dist目录下生成微信小程序项目， 可以在微信开发工具中导入. 
    打开app.wxss文件可以看到生成的代码中包含已转换的bootstrap代码
    
            wepy build --watch           

**如何在已有小程序项目中直接使用bootstrap**

   下载 [dist/app.wxss](URL 'https://github.com/tomli/wepy-bootstrap-demo/tree/master/dist/app.wxss') 文件后，将里面的代码全部copy到你的app.wxss文件中， 或将文件名改掉后在你的app.wxss文件中import进来.


**扫码体验**

  ![Bootstrap](https://github.com/tomli/wepy-bootstrap-demo/blob/master/src/images/qrcode3.png) 
  

**如何在已有wepy项目中使用bootstrap**


1. 在project.config.json 的 dependencies部分加入以下包：

            "bootstrap": "4.3.1"

3. 在project.config.json 的 devDependencies部分加入以下包：
          
        "wepy-compiler-sass": "^1.3.12",
        "wepy-plugin-htmltag": "^1.0.0",
        "wepy-plugin-bootstrap": "^1.0.5",
            
4. 安装依赖

            npm install           

5. 在wepy.config.js 中加入以下代码, 使wepy在导入bootstrap的css代码时转换为小程序支持的形式：  
                                                          
     ```     
      plugins: {
        'bootstrap': {
          filter: /(app|index)\.(wxss)$/, // 匹配需转换的css文件
          remToRpx: 35// 这个参数可以用来调整转换rem单位到rpx单位时使用的比例
        },
        'htmltag': {
          filter: /\.(wxml)$/, // 文件后缀匹配
        }
      },

6. 在src\styles\scss\目录下创建文件custom.scss, 在文件中bootstrap导入bootstrap的样式定义(由于小程序不支持所有的css标记， 所以只能部分导入)。如果需要使用自定义样式，可以在这个文件里定义变量来覆盖bootstrap默认的样式，自定义样式的详细方法请参考 https://getbootstrap.com/docs/4.3/getting-started/theming/

     ``` 
         // Required
         @import "node_modules/bootstrap/scss/functions";
         @import "node_modules/bootstrap/scss/variables";
         @import "node_modules/bootstrap/scss/mixins";
         
         //需要覆盖的样式参数可以在这里定义
         //$font-size-base:              0.8rem; // Assumes the browser default, typically `16px`
         
         // Optional
         @import "node_modules/bootstrap/scss/reboot";
         @import "node_modules/bootstrap/scss/type";
         @import "node_modules/bootstrap/scss/images";
         @import "node_modules/bootstrap/scss/code";
         @import "node_modules/bootstrap/scss/grid";
         @import "node_modules/bootstrap/scss/list-group";
         @import "node_modules/bootstrap/scss/buttons";
         @import "node_modules/bootstrap/scss/transitions";
         @import "node_modules/bootstrap/scss/card";
         @import "node_modules/bootstrap/scss/media";
         @import "node_modules/bootstrap/scss/close";
         @import "node_modules/bootstrap/scss/nav";
         @import "node_modules/bootstrap/scss/breadcrumb";
         @import "node_modules/bootstrap/scss/badge";
         @import "node_modules/bootstrap/scss/forms";
         @import "node_modules/bootstrap/scss/jumbotron";
         @import "node_modules/bootstrap/scss/utilities/align";
         @import "node_modules/bootstrap/scss/utilities/background";
         @import "node_modules/bootstrap/scss/utilities/borders";
         @import "node_modules/bootstrap/scss/utilities/clearfix";
         @import "node_modules/bootstrap/scss/utilities/display";
         @import "node_modules/bootstrap/scss/utilities/embed";
         @import "node_modules/bootstrap/scss/utilities/flex";
         @import "node_modules/bootstrap/scss/utilities/float";
         @import "node_modules/bootstrap/scss/utilities/position";
         @import "node_modules/bootstrap/scss/utilities/screenreaders";
         @import "node_modules/bootstrap/scss/utilities/shadows";
         @import "node_modules/bootstrap/scss/utilities/sizing";
         @import "node_modules/bootstrap/scss/utilities/spacing";
         @import "node_modules/bootstrap/scss/utilities/text";
         @import "node_modules/bootstrap/scss/utilities/visibility";

7. 在app.wpy文件中加入以下代码，让wepy可以将上一步中加入的scss编译成css

        <style  lang='scss' src="./styles/scss/custom.scss">
        </style>

8. 开启wepy实时编译, 在dist目录下生成的app.wxss文件可以看到生成的代码中包含已转换的bootstrap代码

        wepy build --watch
                          
            
            
            
            
