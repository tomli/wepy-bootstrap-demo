'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toast = function (_wepy$page) {
  _inherits(Toast, _wepy$page);

  function Toast() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Toast);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toast.__proto__ || Object.getPrototypeOf(Toast)).call.apply(_ref, [this].concat(args))), _this), _this.methods = {
      openToast: function openToast() {
        wx.showToast({
          title: '已完成',
          icon: 'success',
          duration: 3000
        });
      },
      openLoading: function openLoading() {
        wx.showToast({
          title: '数据加载中',
          icon: 'loading',
          duration: 3000
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Toast;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Toast , 'example/toast'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYXN0LmpzIl0sIm5hbWVzIjpbIlRvYXN0IiwibWV0aG9kcyIsIm9wZW5Ub2FzdCIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJvcGVuTG9hZGluZyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxPLEdBQVU7QUFDUkMsZUFEUSx1QkFDSztBQUNYQyxXQUFHQyxTQUFILENBQWE7QUFDWEMsaUJBQU8sS0FESTtBQUVYQyxnQkFBTSxTQUZLO0FBR1hDLG9CQUFVO0FBSEMsU0FBYjtBQUtELE9BUE87QUFRUkMsaUJBUlEseUJBUU87QUFDYkwsV0FBR0MsU0FBSCxDQUFhO0FBQ1hDLGlCQUFPLE9BREk7QUFFWEMsZ0JBQU0sU0FGSztBQUdYQyxvQkFBVTtBQUhDLFNBQWI7QUFLRDtBQWRPLEs7Ozs7RUFEdUJFLGVBQUtDLEk7O2tCQUFuQlYsSyIsImZpbGUiOiJ0b2FzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2FzdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIG9wZW5Ub2FzdCAoKSB7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICflt7LlrozmiJAnLFxuICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICBkdXJhdGlvbjogMzAwMFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBvcGVuTG9hZGluZyAoKSB7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfmlbDmja7liqDovb3kuK0nLFxuICAgICAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgICAgICBkdXJhdGlvbjogMzAwMFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==