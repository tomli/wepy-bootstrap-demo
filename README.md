# wepy-bootstrap-demo
在wepy开发环境中使用bootstrap来开发微信小程序的小样，包含一些bookstrap官方组件的展示

已经有适合微信开发的WeUI和无数花里胡梢的第三方小程序组件库，为什么还要使用bootstrap？
1. bootstrap有精简，美观， 一致的样式框架。
2. 对许多熟悉bootstrap开发模式的前端小伙伴来说， 用bootstrap写页面可以大大提高开发效率。特别是当你有一个同样熟悉bootstrap的designer作搭档的时候

**安装及使用**

1. Clone项目到本地

        git clone https://github.com/tomli/wepy-bootstrap-demo.git

2. 安装依赖

            npm install      
            
3. 开启wepy实时编译, 在dist目录下生成微信小程序项目， 可以在微信开发工具中导入. app.wxss文件可以看到生成的代码中包含已转换的bootstrap代码
    
            wepy build --watch           


**如何在已有wepy项目中使用bootstrap**

1. 在project.config.json 的 dependencies部分加入以下包：

            "bootstrap": "4.3.1"

3. 在project.config.json 的 devDependencies部分加入以下包：
          
            "wepy-compiler-scss2": "^1.0.3",
            "postcss-bootstrap-wxss": "^1.0.0",
            "wepy-plugin-htmltag": "^1.0.0"
            
4. 安装依赖

            npm install           

5. 在wepy.config.js 的 compilers部分加入以下代码, 使wepy在导入bootstrap的css代码时转换为小程序支持的形式：
                                     
                        
    scss2: {
      // outputStyle: 'compressed',
      // data: '@import "/src/assets/scss/custom.scss',
      // includePaths: [path.join(__dirname, 'src/assets/scss')],
      postcss: {
        plugins: [
          require('postcss-mpvue-wxss')({
            remToRpx: 35,  // 这个参数可以用来调整转换rem单位到rpx单位时使用的比例
            replaceTagSelector: Object.assign(require('postcss-mpvue-wxss/lib/wxmlTagMap'), {
              'button': 'button',
              '*': 'view' // 将覆盖前面的 * 选择器被清理规则
            })
          }),
          require('postcss-bootstrap-wxss')(),
        ]
      }
    },     
              
              
6. 在wepy.config.js 的plugins部分加入以下代码, 使wepy自动将所有html标签转化为小程序支持的标签，并将标签中的样式选择器按照5的转换方式做相应的修改：

        "htmltag": {
           filter: /\.(wxml)$/, //文件后缀匹配
        }

7. 在src\styles\scss\目录下创建文件custom.scss, 在文件中bootstrap导入bootstrap的样式定义(由于小程序不支持所有的css标记， 所以只能部分导入)。如果需要使用自定义样式，可以在这个文件里定义变量来覆盖bootstrap默认的样式，自定义样式的详细方法请参考 https://getbootstrap.com/docs/4.3/getting-started/theming/

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

        <style  lang='scss2' src="./styles/scss/custom.scss">
        </style>

8. 开启wepy实时编译, 在dist目录下生成的app.wxss文件可以看到生成的代码中包含已转换的bootstrap代码

        wepy build --watch
                          
            
            
            
            
