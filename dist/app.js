'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import 'wepy-async-function'
// import JQuery from 'jquery'
// let $ = JQuery // eslint-disable-line no-unused-vars
// import bootstrap from 'bootstrap' // eslint-disable-line no-unused-vars

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['example/index', 'example/accordioncmp', 'example/input', 'example/list', 'example/article', 'example/card', 'example/jumbotron', 'example/accordion', 'example/text', 'example/shadow', 'example/sizing', 'example/pagination', 'example/popover', 'example/scrollspy', 'example/searchbar', 'example/navbar', 'example/media', 'example/tabbar', 'example/spinner', 'example/spacing', 'example/grid', 'example/flex', 'example/progress', 'example/toast', 'example/actionsheet', 'example/picker', 'example/dialog', 'example/icons', 'example/slider', 'example/breadcrumb', 'example/uploader', 'example/images', 'example/badge', 'example/button',
      // 'example/weui/actionsheet',
      // 'example/weui/picker',
      // 'example/weui/toast',
      'pages/web'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'Bootstrap in WePY',
        navigationBarTextStyle: 'black'
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('promisify');
    _this.use('requestfix');
    return _this;
  }

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJ3ZXB5IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQXdERSxzQkFBZTtBQUFBOztBQUFBOztBQUFBLFVBckRmQSxNQXFEZSxHQXJETjtBQUNQQyxhQUFPLENBQ0wsZUFESyxFQUVMLHNCQUZLLEVBR0wsZUFISyxFQUlMLGNBSkssRUFLTCxpQkFMSyxFQU1MLGNBTkssRUFPTCxtQkFQSyxFQVFMLG1CQVJLLEVBU0wsY0FUSyxFQVVMLGdCQVZLLEVBV0wsZ0JBWEssRUFZTCxvQkFaSyxFQWFMLGlCQWJLLEVBY0wsbUJBZEssRUFlTCxtQkFmSyxFQWdCTCxnQkFoQkssRUFpQkwsZUFqQkssRUFrQkwsZ0JBbEJLLEVBbUJMLGlCQW5CSyxFQW9CTCxpQkFwQkssRUFxQkwsY0FyQkssRUFzQkwsY0F0QkssRUF1Qkwsa0JBdkJLLEVBd0JMLGVBeEJLLEVBeUJMLHFCQXpCSyxFQTBCTCxnQkExQkssRUEyQkwsZ0JBM0JLLEVBNEJMLGVBNUJLLEVBNkJMLGdCQTdCSyxFQThCTCxvQkE5QkssRUErQkwsa0JBL0JLLEVBZ0NMLGdCQWhDSyxFQWlDTCxlQWpDSyxFQWtDTCxnQkFsQ0s7QUFtQ0w7QUFDQTtBQUNBO0FBQ0EsaUJBdENLLENBREE7QUF5Q1BDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLE1BRnhCO0FBR05DLGdDQUF3QixtQkFIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCO0FBekNELEtBcURNO0FBQUEsVUFKZkMsVUFJZSxHQUpGO0FBQ1hDLGdCQUFVO0FBREMsS0FJRTs7QUFFYixVQUFLQyxHQUFMLENBQVMsV0FBVDtBQUNBLFVBQUtBLEdBQUwsQ0FBUyxZQUFUO0FBSGE7QUFJZDs7O0VBMUQwQkMsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4vLyBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG4vLyBpbXBvcnQgSlF1ZXJ5IGZyb20gJ2pxdWVyeSdcbi8vIGxldCAkID0gSlF1ZXJ5IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbi8vIGltcG9ydCBib290c3RyYXAgZnJvbSAnYm9vdHN0cmFwJyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgICdleGFtcGxlL2luZGV4JyxcbiAgICAgICdleGFtcGxlL2FjY29yZGlvbmNtcCcsXG4gICAgICAnZXhhbXBsZS9pbnB1dCcsXG4gICAgICAnZXhhbXBsZS9saXN0JyxcbiAgICAgICdleGFtcGxlL2FydGljbGUnLFxuICAgICAgJ2V4YW1wbGUvY2FyZCcsXG4gICAgICAnZXhhbXBsZS9qdW1ib3Ryb24nLFxuICAgICAgJ2V4YW1wbGUvYWNjb3JkaW9uJyxcbiAgICAgICdleGFtcGxlL3RleHQnLFxuICAgICAgJ2V4YW1wbGUvc2hhZG93JyxcbiAgICAgICdleGFtcGxlL3NpemluZycsXG4gICAgICAnZXhhbXBsZS9wYWdpbmF0aW9uJyxcbiAgICAgICdleGFtcGxlL3BvcG92ZXInLFxuICAgICAgJ2V4YW1wbGUvc2Nyb2xsc3B5JyxcbiAgICAgICdleGFtcGxlL3NlYXJjaGJhcicsXG4gICAgICAnZXhhbXBsZS9uYXZiYXInLFxuICAgICAgJ2V4YW1wbGUvbWVkaWEnLFxuICAgICAgJ2V4YW1wbGUvdGFiYmFyJyxcbiAgICAgICdleGFtcGxlL3NwaW5uZXInLFxuICAgICAgJ2V4YW1wbGUvc3BhY2luZycsXG4gICAgICAnZXhhbXBsZS9ncmlkJyxcbiAgICAgICdleGFtcGxlL2ZsZXgnLFxuICAgICAgJ2V4YW1wbGUvcHJvZ3Jlc3MnLFxuICAgICAgJ2V4YW1wbGUvdG9hc3QnLFxuICAgICAgJ2V4YW1wbGUvYWN0aW9uc2hlZXQnLFxuICAgICAgJ2V4YW1wbGUvcGlja2VyJyxcbiAgICAgICdleGFtcGxlL2RpYWxvZycsXG4gICAgICAnZXhhbXBsZS9pY29ucycsXG4gICAgICAnZXhhbXBsZS9zbGlkZXInLFxuICAgICAgJ2V4YW1wbGUvYnJlYWRjcnVtYicsXG4gICAgICAnZXhhbXBsZS91cGxvYWRlcicsXG4gICAgICAnZXhhbXBsZS9pbWFnZXMnLFxuICAgICAgJ2V4YW1wbGUvYmFkZ2UnLFxuICAgICAgJ2V4YW1wbGUvYnV0dG9uJyxcbiAgICAgIC8vICdleGFtcGxlL3dldWkvYWN0aW9uc2hlZXQnLFxuICAgICAgLy8gJ2V4YW1wbGUvd2V1aS9waWNrZXInLFxuICAgICAgLy8gJ2V4YW1wbGUvd2V1aS90b2FzdCcsXG4gICAgICAncGFnZXMvd2ViJ1xuICAgIF0sXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ0Jvb3RzdHJhcCBpbiBXZVBZJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcbiAgICB9XG4gIH1cblxuICBnbG9iYWxEYXRhID0ge1xuICAgIHVzZXJJbmZvOiBudWxsXG4gIH1cblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMudXNlKCdwcm9taXNpZnknKVxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgfVxufVxuIl19