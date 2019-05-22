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

  
  ****[如何在已有wepy项目中使用bootstrap](https://github.com/tomli/wepy-bootstrap-demo/blob/master/howtointro.md)****
  
  
  
**如何在已有小程序项目中直接使用bootstrap**

   下载 [dist/app.wxss](https://github.com/tomli/wepy-bootstrap-demo/blob/master/dist/app.wxss) 文件后，将里面的代码全部copy到你的app.wxss文件中， 或将文件名改掉后在你的app.wxss文件中import进来.
  
  
  
  

**扫码体验**

  ![Bootstrap](https://github.com/tomli/wepy-bootstrap-demo/blob/master/src/images/qrcode3.png) 
  
            
