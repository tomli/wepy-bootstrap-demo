'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'Demo'
    }, _this.components = {
      //      panel: Panel,
      toast: _wepyComToast2.default

      //    mixins = [testMixin]

    }, _this.data = {
      list: [{
        id: 'form',
        name: '表单相关',
        open: false,
        pages: ['button', 'input', 'slider', 'uploader']
      }, {
        id: 'layout',
        name: '布局与容器',
        open: false,
        pages: ['flex', 'grid', 'sizing', 'spacing', 'card', 'jumbotron']
      }, {
        id: 'content',
        name: '内容相关',
        open: false,
        pages: ['article', 'images', 'media', 'text', 'badge', 'list', 'icons', 'shadow', 'spinner', 'progress']
      }, {
        id: 'feedback',
        name: '操作反馈(小程序原生)',
        open: false,
        pages: ['actionsheet', 'dialog', 'alert', 'picker', 'toast']
      }, {
        id: 'nav',
        name: '导航相关',
        open: false,
        pages: ['navbar', 'tabbar', 'searchbar', 'pagination', 'breadcrumb']
      }, {
        id: 'component',
        name: '动态组件',
        open: false,
        pages: ['accordion', 'popover', 'scrollspy']
      }]
    }, _this.methods = {
      toggle: function toggle(id) {
        this.list.forEach(function (v) {
          v.open = v.id === id ? !v.open : false;
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'example/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJ0b2FzdCIsIlRvYXN0IiwiZGF0YSIsImxpc3QiLCJpZCIsIm5hbWUiLCJvcGVuIiwicGFnZXMiLCJtZXRob2RzIiwidG9nZ2xlIiwiZm9yRWFjaCIsInYiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhO0FBQ2pCO0FBQ01DLGFBQU9DOztBQUdiOztBQUxpQixLLFFBT2JDLEksR0FBTztBQUNMQyxZQUFNLENBQ0o7QUFDRUMsWUFBSSxNQUROO0FBRUVDLGNBQU0sTUFGUjtBQUdFQyxjQUFNLEtBSFI7QUFJRUMsZUFBTyxDQUFDLFFBQUQsRUFBVyxPQUFYLEVBQW9CLFFBQXBCLEVBQThCLFVBQTlCO0FBSlQsT0FESSxFQU9KO0FBQ0VILFlBQUksUUFETjtBQUVFQyxjQUFNLE9BRlI7QUFHRUMsY0FBTSxLQUhSO0FBSUVDLGVBQU8sQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixRQUFqQixFQUEyQixTQUEzQixFQUFzQyxNQUF0QyxFQUE4QyxXQUE5QztBQUpULE9BUEksRUFhSjtBQUNFSCxZQUFJLFNBRE47QUFFRUMsY0FBTSxNQUZSO0FBR0VDLGNBQU0sS0FIUjtBQUlFQyxlQUFPLENBQUMsU0FBRCxFQUFZLFFBQVosRUFBc0IsT0FBdEIsRUFBK0IsTUFBL0IsRUFBdUMsT0FBdkMsRUFBZ0QsTUFBaEQsRUFBd0QsT0FBeEQsRUFBaUUsUUFBakUsRUFBMkUsU0FBM0UsRUFBc0YsVUFBdEY7QUFKVCxPQWJJLEVBbUJKO0FBQ0VILFlBQUksVUFETjtBQUVFQyxjQUFNLGFBRlI7QUFHRUMsY0FBTSxLQUhSO0FBSUVDLGVBQU8sQ0FBQyxhQUFELEVBQWdCLFFBQWhCLEVBQTBCLE9BQTFCLEVBQW1DLFFBQW5DLEVBQTZDLE9BQTdDO0FBSlQsT0FuQkksRUF5Qko7QUFDRUgsWUFBSSxLQUROO0FBRUVDLGNBQU0sTUFGUjtBQUdFQyxjQUFNLEtBSFI7QUFJRUMsZUFBTyxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLFdBQXJCLEVBQWtDLFlBQWxDLEVBQWdELFlBQWhEO0FBSlQsT0F6QkksRUErQko7QUFDRUgsWUFBSSxXQUROO0FBRUVDLGNBQU0sTUFGUjtBQUdFQyxjQUFNLEtBSFI7QUFJRUMsZUFBTyxDQUFDLFdBQUQsRUFBYyxTQUFkLEVBQXlCLFdBQXpCO0FBSlQsT0EvQkk7QUFERCxLLFFBeUNQQyxPLEdBQVU7QUFDUkMsWUFEUSxrQkFDQUwsRUFEQSxFQUNJO0FBQ1YsYUFBS0QsSUFBTCxDQUFVTyxPQUFWLENBQWtCLGFBQUs7QUFDckJDLFlBQUVMLElBQUYsR0FBVUssRUFBRVAsRUFBRixLQUFTQSxFQUFWLEdBQWdCLENBQUNPLEVBQUVMLElBQW5CLEdBQTBCLEtBQW5DO0FBQ0QsU0FGRDtBQUdEO0FBTE8sSzs7OztFQXBEdUJNLGVBQUtDLEk7O2tCQUFuQmpCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnRGVtbydcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbi8vICAgICAgcGFuZWw6IFBhbmVsLFxuICAgICAgdG9hc3Q6IFRvYXN0XG4gICAgfVxuXG4vLyAgICBtaXhpbnMgPSBbdGVzdE1peGluXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGxpc3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnZm9ybScsXG4gICAgICAgICAgbmFtZTogJ+ihqOWNleebuOWFsycsXG4gICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgICAgcGFnZXM6IFsnYnV0dG9uJywgJ2lucHV0JywgJ3NsaWRlcicsICd1cGxvYWRlciddXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ2xheW91dCcsXG4gICAgICAgICAgbmFtZTogJ+W4g+WxgOS4juWuueWZqCcsXG4gICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgICAgcGFnZXM6IFsnZmxleCcsICdncmlkJywgJ3NpemluZycsICdzcGFjaW5nJywgJ2NhcmQnLCAnanVtYm90cm9uJ11cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnY29udGVudCcsXG4gICAgICAgICAgbmFtZTogJ+WGheWuueebuOWFsycsXG4gICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgICAgcGFnZXM6IFsnYXJ0aWNsZScsICdpbWFnZXMnLCAnbWVkaWEnLCAndGV4dCcsICdiYWRnZScsICdsaXN0JywgJ2ljb25zJywgJ3NoYWRvdycsICdzcGlubmVyJywgJ3Byb2dyZXNzJ11cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnZmVlZGJhY2snLFxuICAgICAgICAgIG5hbWU6ICfmk43kvZzlj43ppogo5bCP56iL5bqP5Y6f55SfKScsXG4gICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgICAgcGFnZXM6IFsnYWN0aW9uc2hlZXQnLCAnZGlhbG9nJywgJ2FsZXJ0JywgJ3BpY2tlcicsICd0b2FzdCddXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ25hdicsXG4gICAgICAgICAgbmFtZTogJ+WvvOiIquebuOWFsycsXG4gICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgICAgcGFnZXM6IFsnbmF2YmFyJywgJ3RhYmJhcicsICdzZWFyY2hiYXInLCAncGFnaW5hdGlvbicsICdicmVhZGNydW1iJ11cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnY29tcG9uZW50JyxcbiAgICAgICAgICBuYW1lOiAn5Yqo5oCB57uE5Lu2JyxcbiAgICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgICBwYWdlczogWydhY2NvcmRpb24nLCAncG9wb3ZlcicsICdzY3JvbGxzcHknXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRvZ2dsZSAoaWQpIHtcbiAgICAgICAgdGhpcy5saXN0LmZvckVhY2godiA9PiB7XG4gICAgICAgICAgdi5vcGVuID0gKHYuaWQgPT09IGlkKSA/ICF2Lm9wZW4gOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19