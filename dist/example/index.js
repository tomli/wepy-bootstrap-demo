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
      navigationBarTitleText: 'Demo using bootstrap4'
    }, _this.components = {
      //      panel: Panel,
      toast: _wepyComToast2.default

      //    mixins = [testMixin]

    }, _this.data = {
      list: [{
        id: 'form',
        name: '表单',
        open: false,
        pages: ['button', 'list', 'input', 'slider', 'uploader']
      }, {
        id: 'widget',
        name: '基础组件',
        open: false,
        pages: ['article', 'badge', 'flex', 'footer', 'gallery', 'grid', 'icons', 'loadmore', 'panel', 'preview', 'progress']
      }, {
        id: 'feedback',
        name: '操作反馈',
        open: false,
        pages: ['actionsheet', 'dialog', 'msg', 'picker', 'toast']
      }, {
        id: 'nav',
        name: '导航相关',
        open: false,
        pages: ['navbar', 'tabbar']
      }, {
        id: 'search',
        name: '搜索相关',
        open: false,
        pages: ['searchbar']
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJ0b2FzdCIsIlRvYXN0IiwiZGF0YSIsImxpc3QiLCJpZCIsIm5hbWUiLCJvcGVuIiwicGFnZXMiLCJtZXRob2RzIiwidG9nZ2xlIiwiZm9yRWFjaCIsInYiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhO0FBQ2pCO0FBQ01DLGFBQU9DOztBQUdiOztBQUxpQixLLFFBT2JDLEksR0FBTztBQUNMQyxZQUFNLENBQ0o7QUFDRUMsWUFBSSxNQUROO0FBRUVDLGNBQU0sSUFGUjtBQUdFQyxjQUFNLEtBSFI7QUFJRUMsZUFBTyxDQUFDLFFBQUQsRUFBVyxNQUFYLEVBQW1CLE9BQW5CLEVBQTRCLFFBQTVCLEVBQXNDLFVBQXRDO0FBSlQsT0FESSxFQU9KO0FBQ0VILFlBQUksUUFETjtBQUVFQyxjQUFNLE1BRlI7QUFHRUMsY0FBTSxLQUhSO0FBSUVDLGVBQU8sQ0FBQyxTQUFELEVBQVksT0FBWixFQUFxQixNQUFyQixFQUE2QixRQUE3QixFQUF1QyxTQUF2QyxFQUFrRCxNQUFsRCxFQUEwRCxPQUExRCxFQUFtRSxVQUFuRSxFQUErRSxPQUEvRSxFQUF3RixTQUF4RixFQUFtRyxVQUFuRztBQUpULE9BUEksRUFhSjtBQUNFSCxZQUFJLFVBRE47QUFFRUMsY0FBTSxNQUZSO0FBR0VDLGNBQU0sS0FIUjtBQUlFQyxlQUFPLENBQUMsYUFBRCxFQUFnQixRQUFoQixFQUEwQixLQUExQixFQUFpQyxRQUFqQyxFQUEyQyxPQUEzQztBQUpULE9BYkksRUFtQko7QUFDRUgsWUFBSSxLQUROO0FBRUVDLGNBQU0sTUFGUjtBQUdFQyxjQUFNLEtBSFI7QUFJRUMsZUFBTyxDQUFDLFFBQUQsRUFBVyxRQUFYO0FBSlQsT0FuQkksRUF5Qko7QUFDRUgsWUFBSSxRQUROO0FBRUVDLGNBQU0sTUFGUjtBQUdFQyxjQUFNLEtBSFI7QUFJRUMsZUFBTyxDQUFDLFdBQUQ7QUFKVCxPQXpCSTtBQURELEssUUFtQ1BDLE8sR0FBVTtBQUNSQyxZQURRLGtCQUNBTCxFQURBLEVBQ0k7QUFDVixhQUFLRCxJQUFMLENBQVVPLE9BQVYsQ0FBa0IsYUFBSztBQUNyQkMsWUFBRUwsSUFBRixHQUFVSyxFQUFFUCxFQUFGLEtBQVNBLEVBQVYsR0FBZ0IsQ0FBQ08sRUFBRUwsSUFBbkIsR0FBMEIsS0FBbkM7QUFDRCxTQUZEO0FBR0Q7QUFMTyxLOzs7O0VBOUN1Qk0sZUFBS0MsSTs7a0JBQW5CakIsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdEZW1vIHVzaW5nIGJvb3RzdHJhcDQnXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnRzID0ge1xyXG4vLyAgICAgIHBhbmVsOiBQYW5lbCxcclxuICAgICAgdG9hc3Q6IFRvYXN0XHJcbiAgICB9XHJcblxyXG4vLyAgICBtaXhpbnMgPSBbdGVzdE1peGluXVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGxpc3Q6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJ2Zvcm0nLFxyXG4gICAgICAgICAgbmFtZTogJ+ihqOWNlScsXHJcbiAgICAgICAgICBvcGVuOiBmYWxzZSxcclxuICAgICAgICAgIHBhZ2VzOiBbJ2J1dHRvbicsICdsaXN0JywgJ2lucHV0JywgJ3NsaWRlcicsICd1cGxvYWRlciddXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJ3dpZGdldCcsXHJcbiAgICAgICAgICBuYW1lOiAn5Z+656GA57uE5Lu2JyxcclxuICAgICAgICAgIG9wZW46IGZhbHNlLFxyXG4gICAgICAgICAgcGFnZXM6IFsnYXJ0aWNsZScsICdiYWRnZScsICdmbGV4JywgJ2Zvb3RlcicsICdnYWxsZXJ5JywgJ2dyaWQnLCAnaWNvbnMnLCAnbG9hZG1vcmUnLCAncGFuZWwnLCAncHJldmlldycsICdwcm9ncmVzcyddXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJ2ZlZWRiYWNrJyxcclxuICAgICAgICAgIG5hbWU6ICfmk43kvZzlj43ppognLFxyXG4gICAgICAgICAgb3BlbjogZmFsc2UsXHJcbiAgICAgICAgICBwYWdlczogWydhY3Rpb25zaGVldCcsICdkaWFsb2cnLCAnbXNnJywgJ3BpY2tlcicsICd0b2FzdCddXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJ25hdicsXHJcbiAgICAgICAgICBuYW1lOiAn5a+86Iiq55u45YWzJyxcclxuICAgICAgICAgIG9wZW46IGZhbHNlLFxyXG4gICAgICAgICAgcGFnZXM6IFsnbmF2YmFyJywgJ3RhYmJhciddXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJ3NlYXJjaCcsXHJcbiAgICAgICAgICBuYW1lOiAn5pCc57Si55u45YWzJyxcclxuICAgICAgICAgIG9wZW46IGZhbHNlLFxyXG4gICAgICAgICAgcGFnZXM6IFsnc2VhcmNoYmFyJ11cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICB0b2dnbGUgKGlkKSB7XHJcbiAgICAgICAgdGhpcy5saXN0LmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICB2Lm9wZW4gPSAodi5pZCA9PT0gaWQpID8gIXYub3BlbiA6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19