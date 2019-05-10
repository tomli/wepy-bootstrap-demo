const path = require('path');
var prod = process.env.NODE_ENV === 'production';

module.exports = {
  wpyExt: '.wpy',
  eslint: true,
  cliLogs: !prod,
  build: {
    web: {
      htmlTemplate: path.join('src', 'index.template.html'),
      htmlOutput: path.join('web', 'index.html'),
      jsOutput: path.join('web', 'index.js')
    }
  },
  resolve: {
    alias: {
      counter: path.join(__dirname, 'src/components/counter'),
      '@': path.join(__dirname, 'src')
    },
    aliasFields: ['wepy', 'weapp'],
    modules: ['node_modules']
  },
  compilers: {
    less: {
      compress: prod
    },
    scss2: {
      // outputStyle: 'compressed',
      // data: '@import "/src/assets/scss/custom.scss',
      // includePaths: [path.join(__dirname, 'src/assets/scss')],
      postcss: {
        plugins: [
          require('postcss-mpvue-wxss')({
            cleanSelector: ['*'],
            remToRpx: 35,  //这个参数可以用来调整转换rem单位到rpx单位时使用的比例
            replaceTagSelector: Object.assign(require('postcss-mpvue-wxss/lib/wxmlTagMap'), {
              '*': 'view' // 将覆盖前面的 * 选择器被清理规则
            })
          }),
          require('postcss-bootstrap-wxss')(),
        ]
      }
    },
    /*sass: {
      outputStyle: 'compressed'
    },*/
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-export-extensions',
      ]
    }
  },
  plugins: {
    // 'rpx': {
    //   filter: /\.(wxss|wxml)$/, //文件后缀匹配
    // },
    'htmltag': {
      filter: /\.(wxml)$/, //文件后缀匹配
    }
  },
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}

if (prod) {

  // 压缩sass
  // module.exports.compilers['sass'] = {outputStyle: 'compressed'}

  // 压缩js
  module.exports.plugins = {
    uglifyjs: {
      filter: /\.js$/,
      config: {
      }
    },
    imagemin: {
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        jpg: {
          quality: 80
        },
        png: {
          quality: 80
        }
      }
    }
  }
}