
# 如何在已有wepy项目中使用bootstrap


1. 在project.config.json 的 dependencies部分加入以下包：

            "bootstrap": "4.3.1"

3. 在project.config.json 的 devDependencies部分加入以下包：
          
        "wepy-compiler-sass": "^1.3.12",
        "wepy-plugin-bootstrap": "^1.0.5",
            
4. 安装依赖

            npm install           

5. 在wepy.config.js 中加入以下代码, 使wepy在导入bootstrap的css代码时转换为小程序支持的形式：  
                                                          
     ```     
      plugins: {
        'bootstrap': {
          filter: /(app|index)\.(wxss)$/, // 匹配需转换的css文件
          //  示例： 如果需要转换 index.wxss 和 app.wxss 两个文件, 则将filter设为下面的形式
          // filter: /(app|index)\.(wxss)$/,
          remToRpx: 35// 这个参数可以用来调整转换rem单位到rpx单位时使用的比例
        },
        'htmltag': {
          filter: /\.(wxml)$/, // 文件后缀匹配
        }
      },

6. 在src\styles\scss\目录下创建文件custom.scss, 在文件中bootstrap导入bootstrap的样式定义(由于小程序不支持所有的css标记， 所以只能部分导入)。如果需要使用自定义样式，可以在这个文件里定义变量来覆盖bootstrap默认的样式，自定义样式的详细方法请参考 https://getbootstrap.com/docs/4.3/getting-started/theming/

     ``` 
         
            //需要覆盖的样式参数可以在这里定义
            //$font-size-base:              0.8rem; // Assumes the browser default, typically `16px`
            
            // Required
            @import "node_modules/bootstrap/scss/functions";
            @import "node_modules/bootstrap/scss/variables";
            @import "node_modules/bootstrap/scss/mixins";
        
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
            @import "node_modules/bootstrap/scss/spinners";
            @import "node_modules/bootstrap/scss/close";
            @import "node_modules/bootstrap/scss/nav";
            @import "node_modules/bootstrap/scss/navbar";
            @import "node_modules/bootstrap/scss/breadcrumb";
            @import "node_modules/bootstrap/scss/badge";
            @import "node_modules/bootstrap/scss/forms";
            @import "node_modules/bootstrap/scss/pagination";
            @import "node_modules/bootstrap/scss/progress";
            @import "node_modules/bootstrap/scss/jumbotron";


            // @import "node_modules/bootstrap/scss/utilities";
            @import "node_modules/bootstrap/scss/utilities/align";
            @import "node_modules/bootstrap/scss/utilities/background";
            @import "node_modules/bootstrap/scss/utilities/borders";
            @import "node_modules/bootstrap/scss/utilities/clearfix";
            @import "node_modules/bootstrap/scss/utilities/display";
            @import "node_modules/bootstrap/scss/utilities/embed";
            @import "node_modules/bootstrap/scss/utilities/flex";
            @import "node_modules/bootstrap/scss/utilities/float";
            @import "node_modules/bootstrap/scss/utilities/overflow";
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
                          
            
            
            
            
