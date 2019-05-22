'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Web = function (_wepy$page) {
  _inherits(Web, _wepy$page);

  function Web() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Web);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Web.__proto__ || Object.getPrototypeOf(Web)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      url: null,
      path: null,
      title: null
    }, _this.methods = {
      tap: function tap() {
        console.log('do noting from1 ' + this.$name);
      },
      postMessage: function postMessage(e) {
        console.log(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Web, [{
    key: 'onLoad',
    value: function onLoad(res) {
      console.log(res);
      this.url = res.url;
      /*
            this.url = config.AUTH_URL
            if (res.path) {
              const decodePath = decodeURIComponent(res.path)
              this.path = decodePath
              this.url = config.AUTH_URL + '#/' + decodePath
            }
            this.title = res.title
            if (res.title) {
              this.config.navigationBarTitleText = res.title
            }
            this.id = res.id
            */
    }
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(options) {
      console.log(options);
      return {
        title: 'Bootstrap in WePY',
        path: '/pages/web?path=' + encodeURIComponent(this.path)
      };
    }
  }]);

  return Web;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Web , 'pages/web'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYi5qcyJdLCJuYW1lcyI6WyJXZWIiLCJkYXRhIiwidXJsIiwicGF0aCIsInRpdGxlIiwibWV0aG9kcyIsInRhcCIsImNvbnNvbGUiLCJsb2ciLCIkbmFtZSIsInBvc3RNZXNzYWdlIiwiZSIsInJlcyIsIm9wdGlvbnMiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsRzs7Ozs7Ozs7Ozs7Ozs7Z0xBQ25CQyxJLEdBQU87QUFDTEMsV0FBSyxJQURBO0FBRUxDLFlBQU0sSUFGRDtBQUdMQyxhQUFPO0FBSEYsSyxRQU1QQyxPLEdBQVU7QUFDUkMsU0FEUSxpQkFDRDtBQUNMQyxnQkFBUUMsR0FBUixDQUFZLHFCQUFxQixLQUFLQyxLQUF0QztBQUNELE9BSE87QUFJUkMsaUJBSlEsdUJBSUlDLENBSkosRUFJTztBQUNiSixnQkFBUUMsR0FBUixDQUFZRyxDQUFaO0FBQ0Q7QUFOTyxLOzs7OzsyQkFTSEMsRyxFQUFLO0FBQ1ZMLGNBQVFDLEdBQVIsQ0FBWUksR0FBWjtBQUNBLFdBQUtWLEdBQUwsR0FBV1UsSUFBSVYsR0FBZjtBQUNOOzs7Ozs7Ozs7Ozs7O0FBYUs7OztzQ0FDaUJXLE8sRUFBUztBQUN6Qk4sY0FBUUMsR0FBUixDQUFZSyxPQUFaO0FBQ0EsYUFBTztBQUNMVCxlQUFPLG1CQURGO0FBRUxELGNBQU0scUJBQXFCVyxtQkFBbUIsS0FBS1gsSUFBeEI7QUFGdEIsT0FBUDtBQUlEOzs7O0VBdkM4QlksZUFBS0MsSTs7a0JBQWpCaEIsRyIsImZpbGUiOiJ3ZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBXZWIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgdXJsOiBudWxsLFxyXG4gICAgICBwYXRoOiBudWxsLFxyXG4gICAgICB0aXRsZTogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHRhcCAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RvIG5vdGluZyBmcm9tMSAnICsgdGhpcy4kbmFtZSlcclxuICAgICAgfSxcclxuICAgICAgcG9zdE1lc3NhZ2UoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQocmVzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgdGhpcy51cmwgPSByZXMudXJsXHJcbi8qXHJcbiAgICAgIHRoaXMudXJsID0gY29uZmlnLkFVVEhfVVJMXHJcbiAgICAgIGlmIChyZXMucGF0aCkge1xyXG4gICAgICAgIGNvbnN0IGRlY29kZVBhdGggPSBkZWNvZGVVUklDb21wb25lbnQocmVzLnBhdGgpXHJcbiAgICAgICAgdGhpcy5wYXRoID0gZGVjb2RlUGF0aFxyXG4gICAgICAgIHRoaXMudXJsID0gY29uZmlnLkFVVEhfVVJMICsgJyMvJyArIGRlY29kZVBhdGhcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRpdGxlID0gcmVzLnRpdGxlXHJcbiAgICAgIGlmIChyZXMudGl0bGUpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZy5uYXZpZ2F0aW9uQmFyVGl0bGVUZXh0ID0gcmVzLnRpdGxlXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pZCA9IHJlcy5pZFxyXG4gICAgICAqL1xyXG4gICAgfVxyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2Uob3B0aW9ucykge1xyXG4gICAgICBjb25zb2xlLmxvZyhvcHRpb25zKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlOiAnQm9vdHN0cmFwIGluIFdlUFknLFxyXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvd2ViP3BhdGg9JyArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnBhdGgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==