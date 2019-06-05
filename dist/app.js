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
      pages: ['example/input', 'example/index', 'example/list', 'example/article', 'example/card', 'example/jumbotron', 'example/accordion', 'example/text', 'example/shadow', 'example/sizing', 'example/pagination', 'example/popover', 'example/scrollspy', 'example/searchbar', 'example/navbar', 'example/media', 'example/tabbar', 'example/spinner', 'example/spacing', 'example/grid', 'example/flex', 'example/progress', 'example/toast', 'example/actionsheet', 'example/picker', 'example/dialog', 'example/icons', 'example/slider', 'example/breadcrumb', 'example/uploader', 'example/images', 'example/badge', 'example/button',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJ3ZXB5IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQXVERSxzQkFBZTtBQUFBOztBQUFBOztBQUFBLFVBcERmQSxNQW9EZSxHQXBETjtBQUNQQyxhQUFPLENBQ0wsZUFESyxFQUVMLGVBRkssRUFHTCxjQUhLLEVBSUwsaUJBSkssRUFLTCxjQUxLLEVBTUwsbUJBTkssRUFPTCxtQkFQSyxFQVFMLGNBUkssRUFTTCxnQkFUSyxFQVVMLGdCQVZLLEVBV0wsb0JBWEssRUFZTCxpQkFaSyxFQWFMLG1CQWJLLEVBY0wsbUJBZEssRUFlTCxnQkFmSyxFQWdCTCxlQWhCSyxFQWlCTCxnQkFqQkssRUFrQkwsaUJBbEJLLEVBbUJMLGlCQW5CSyxFQW9CTCxjQXBCSyxFQXFCTCxjQXJCSyxFQXNCTCxrQkF0QkssRUF1QkwsZUF2QkssRUF3QkwscUJBeEJLLEVBeUJMLGdCQXpCSyxFQTBCTCxnQkExQkssRUEyQkwsZUEzQkssRUE0QkwsZ0JBNUJLLEVBNkJMLG9CQTdCSyxFQThCTCxrQkE5QkssRUErQkwsZ0JBL0JLLEVBZ0NMLGVBaENLLEVBaUNMLGdCQWpDSztBQWtDTDtBQUNBO0FBQ0E7QUFDQSxpQkFyQ0ssQ0FEQTtBQXdDUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLG1CQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEI7QUF4Q0QsS0FvRE07QUFBQSxVQUpmQyxVQUllLEdBSkY7QUFDWEMsZ0JBQVU7QUFEQyxLQUlFOztBQUViLFVBQUtDLEdBQUwsQ0FBUyxXQUFUO0FBQ0EsVUFBS0EsR0FBTCxDQUFTLFlBQVQ7QUFIYTtBQUlkOzs7RUF6RDBCQyxlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4vLyBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcbi8vIGltcG9ydCBKUXVlcnkgZnJvbSAnanF1ZXJ5J1xyXG4vLyBsZXQgJCA9IEpRdWVyeSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbi8vIGltcG9ydCBib290c3RyYXAgZnJvbSAnYm9vdHN0cmFwJyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBwYWdlczogW1xyXG4gICAgICAnZXhhbXBsZS9pbnB1dCcsXHJcbiAgICAgICdleGFtcGxlL2luZGV4JyxcclxuICAgICAgJ2V4YW1wbGUvbGlzdCcsXHJcbiAgICAgICdleGFtcGxlL2FydGljbGUnLFxyXG4gICAgICAnZXhhbXBsZS9jYXJkJyxcclxuICAgICAgJ2V4YW1wbGUvanVtYm90cm9uJyxcclxuICAgICAgJ2V4YW1wbGUvYWNjb3JkaW9uJyxcclxuICAgICAgJ2V4YW1wbGUvdGV4dCcsXHJcbiAgICAgICdleGFtcGxlL3NoYWRvdycsXHJcbiAgICAgICdleGFtcGxlL3NpemluZycsXHJcbiAgICAgICdleGFtcGxlL3BhZ2luYXRpb24nLFxyXG4gICAgICAnZXhhbXBsZS9wb3BvdmVyJyxcclxuICAgICAgJ2V4YW1wbGUvc2Nyb2xsc3B5JyxcclxuICAgICAgJ2V4YW1wbGUvc2VhcmNoYmFyJyxcclxuICAgICAgJ2V4YW1wbGUvbmF2YmFyJyxcclxuICAgICAgJ2V4YW1wbGUvbWVkaWEnLFxyXG4gICAgICAnZXhhbXBsZS90YWJiYXInLFxyXG4gICAgICAnZXhhbXBsZS9zcGlubmVyJyxcclxuICAgICAgJ2V4YW1wbGUvc3BhY2luZycsXHJcbiAgICAgICdleGFtcGxlL2dyaWQnLFxyXG4gICAgICAnZXhhbXBsZS9mbGV4JyxcclxuICAgICAgJ2V4YW1wbGUvcHJvZ3Jlc3MnLFxyXG4gICAgICAnZXhhbXBsZS90b2FzdCcsXHJcbiAgICAgICdleGFtcGxlL2FjdGlvbnNoZWV0JyxcclxuICAgICAgJ2V4YW1wbGUvcGlja2VyJyxcclxuICAgICAgJ2V4YW1wbGUvZGlhbG9nJyxcclxuICAgICAgJ2V4YW1wbGUvaWNvbnMnLFxyXG4gICAgICAnZXhhbXBsZS9zbGlkZXInLFxyXG4gICAgICAnZXhhbXBsZS9icmVhZGNydW1iJyxcclxuICAgICAgJ2V4YW1wbGUvdXBsb2FkZXInLFxyXG4gICAgICAnZXhhbXBsZS9pbWFnZXMnLFxyXG4gICAgICAnZXhhbXBsZS9iYWRnZScsXHJcbiAgICAgICdleGFtcGxlL2J1dHRvbicsXHJcbiAgICAgIC8vICdleGFtcGxlL3dldWkvYWN0aW9uc2hlZXQnLFxyXG4gICAgICAvLyAnZXhhbXBsZS93ZXVpL3BpY2tlcicsXHJcbiAgICAgIC8vICdleGFtcGxlL3dldWkvdG9hc3QnLFxyXG4gICAgICAncGFnZXMvd2ViJ1xyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdCb290c3RyYXAgaW4gV2VQWScsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdsb2JhbERhdGEgPSB7XHJcbiAgICB1c2VySW5mbzogbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy51c2UoJ3Byb21pc2lmeScpXHJcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgfVxyXG59XHJcbiJdfQ==