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
      pages: ['example/index', 'example/selector', 'example/accordioncmp', 'example/list', 'example/article', 'example/card', 'example/jumbotron', 'example/accordion', 'example/text', 'example/shadow', 'example/sizing', 'example/pagination', 'example/popover', 'example/scrollspy', 'example/searchbar', 'example/navbar', 'example/media', 'example/tabbar', 'example/spinner', 'example/spacing', 'example/grid', 'example/flex', 'example/progress', 'example/toast', 'example/actionsheet', 'example/picker', 'example/dialog', 'example/icons', 'example/slider', 'example/breadcrumb', 'example/uploader', 'example/images', 'example/badge', 'example/button',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJ3ZXB5IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQXdERSxzQkFBZTtBQUFBOztBQUFBOztBQUFBLFVBckRmQSxNQXFEZSxHQXJETjtBQUNQQyxhQUFPLENBQ0wsZUFESyxFQUVMLGtCQUZLLEVBR0wsc0JBSEssRUFJTCxjQUpLLEVBS0wsaUJBTEssRUFNTCxjQU5LLEVBT0wsbUJBUEssRUFRTCxtQkFSSyxFQVNMLGNBVEssRUFVTCxnQkFWSyxFQVdMLGdCQVhLLEVBWUwsb0JBWkssRUFhTCxpQkFiSyxFQWNMLG1CQWRLLEVBZUwsbUJBZkssRUFnQkwsZ0JBaEJLLEVBaUJMLGVBakJLLEVBa0JMLGdCQWxCSyxFQW1CTCxpQkFuQkssRUFvQkwsaUJBcEJLLEVBcUJMLGNBckJLLEVBc0JMLGNBdEJLLEVBdUJMLGtCQXZCSyxFQXdCTCxlQXhCSyxFQXlCTCxxQkF6QkssRUEwQkwsZ0JBMUJLLEVBMkJMLGdCQTNCSyxFQTRCTCxlQTVCSyxFQTZCTCxnQkE3QkssRUE4Qkwsb0JBOUJLLEVBK0JMLGtCQS9CSyxFQWdDTCxnQkFoQ0ssRUFpQ0wsZUFqQ0ssRUFrQ0wsZ0JBbENLO0FBbUNMO0FBQ0E7QUFDQTtBQUNBLGlCQXRDSyxDQURBO0FBeUNQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsbUJBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQjtBQXpDRCxLQXFETTtBQUFBLFVBSmZDLFVBSWUsR0FKRjtBQUNYQyxnQkFBVTtBQURDLEtBSUU7O0FBRWIsVUFBS0MsR0FBTCxDQUFTLFdBQVQ7QUFDQSxVQUFLQSxHQUFMLENBQVMsWUFBVDtBQUhhO0FBSWQ7OztFQTFEMEJDLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuLy8gaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuLy8gaW1wb3J0IEpRdWVyeSBmcm9tICdqcXVlcnknXG4vLyBsZXQgJCA9IEpRdWVyeSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4vLyBpbXBvcnQgYm9vdHN0cmFwIGZyb20gJ2Jvb3RzdHJhcCcgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICAnZXhhbXBsZS9pbmRleCcsXG4gICAgICAnZXhhbXBsZS9zZWxlY3RvcicsXG4gICAgICAnZXhhbXBsZS9hY2NvcmRpb25jbXAnLFxuICAgICAgJ2V4YW1wbGUvbGlzdCcsXG4gICAgICAnZXhhbXBsZS9hcnRpY2xlJyxcbiAgICAgICdleGFtcGxlL2NhcmQnLFxuICAgICAgJ2V4YW1wbGUvanVtYm90cm9uJyxcbiAgICAgICdleGFtcGxlL2FjY29yZGlvbicsXG4gICAgICAnZXhhbXBsZS90ZXh0JyxcbiAgICAgICdleGFtcGxlL3NoYWRvdycsXG4gICAgICAnZXhhbXBsZS9zaXppbmcnLFxuICAgICAgJ2V4YW1wbGUvcGFnaW5hdGlvbicsXG4gICAgICAnZXhhbXBsZS9wb3BvdmVyJyxcbiAgICAgICdleGFtcGxlL3Njcm9sbHNweScsXG4gICAgICAnZXhhbXBsZS9zZWFyY2hiYXInLFxuICAgICAgJ2V4YW1wbGUvbmF2YmFyJyxcbiAgICAgICdleGFtcGxlL21lZGlhJyxcbiAgICAgICdleGFtcGxlL3RhYmJhcicsXG4gICAgICAnZXhhbXBsZS9zcGlubmVyJyxcbiAgICAgICdleGFtcGxlL3NwYWNpbmcnLFxuICAgICAgJ2V4YW1wbGUvZ3JpZCcsXG4gICAgICAnZXhhbXBsZS9mbGV4JyxcbiAgICAgICdleGFtcGxlL3Byb2dyZXNzJyxcbiAgICAgICdleGFtcGxlL3RvYXN0JyxcbiAgICAgICdleGFtcGxlL2FjdGlvbnNoZWV0JyxcbiAgICAgICdleGFtcGxlL3BpY2tlcicsXG4gICAgICAnZXhhbXBsZS9kaWFsb2cnLFxuICAgICAgJ2V4YW1wbGUvaWNvbnMnLFxuICAgICAgJ2V4YW1wbGUvc2xpZGVyJyxcbiAgICAgICdleGFtcGxlL2JyZWFkY3J1bWInLFxuICAgICAgJ2V4YW1wbGUvdXBsb2FkZXInLFxuICAgICAgJ2V4YW1wbGUvaW1hZ2VzJyxcbiAgICAgICdleGFtcGxlL2JhZGdlJyxcbiAgICAgICdleGFtcGxlL2J1dHRvbicsXG4gICAgICAvLyAnZXhhbXBsZS93ZXVpL2FjdGlvbnNoZWV0JyxcbiAgICAgIC8vICdleGFtcGxlL3dldWkvcGlja2VyJyxcbiAgICAgIC8vICdleGFtcGxlL3dldWkvdG9hc3QnLFxuICAgICAgJ3BhZ2VzL3dlYidcbiAgICBdLFxuICAgIHdpbmRvdzoge1xuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdCb290c3RyYXAgaW4gV2VQWScsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXG4gICAgfVxuICB9XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbFxuICB9XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnVzZSgncHJvbWlzaWZ5JylcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXG4gIH1cbn1cbiJdfQ==