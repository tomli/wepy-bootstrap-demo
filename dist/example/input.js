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

var Input = function (_wepy$page) {
  _inherits(Input, _wepy$page);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      orientOptions: { names: ['希腊', '巴比伦', '埃及'],
        placeholderName: '地区',
        idx: -1
      }
    }, _this.methods = {
      bindPickerChange: function bindPickerChange(e) {
        this.orientOptions.idx = e.detail.value;
        this.$emit('picker-emit', this.orientOptions.idx);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Input;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Input , 'example/input'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmpzIl0sIm5hbWVzIjpbIklucHV0IiwiZGF0YSIsIm9yaWVudE9wdGlvbnMiLCJuYW1lcyIsInBsYWNlaG9sZGVyTmFtZSIsImlkeCIsIm1ldGhvZHMiLCJiaW5kUGlja2VyQ2hhbmdlIiwiZSIsImRldGFpbCIsInZhbHVlIiwiJGVtaXQiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsSSxHQUFPO0FBQ0xDLHFCQUFlLEVBQUNDLE9BQU0sQ0FDbEIsSUFEa0IsRUFFbEIsS0FGa0IsRUFHbEIsSUFIa0IsQ0FBUDtBQUliQyx5QkFBaUIsSUFKSjtBQUtiQyxhQUFJLENBQUM7QUFMUTtBQURWLEssUUFTUEMsTyxHQUFVO0FBQ1JDLHNCQURRLDRCQUNVQyxDQURWLEVBQ2E7QUFDbkIsYUFBS04sYUFBTCxDQUFtQkcsR0FBbkIsR0FBeUJHLEVBQUVDLE1BQUYsQ0FBU0MsS0FBbEM7QUFDQSxhQUFLQyxLQUFMLENBQVcsYUFBWCxFQUEwQixLQUFLVCxhQUFMLENBQW1CRyxHQUE3QztBQUNEO0FBSk8sSzs7OztFQVZ1Qk8sZUFBS0MsSTs7a0JBQW5CYixLIiwiZmlsZSI6ImlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgIGRhdGEgPSB7XG4gICAgICAgIG9yaWVudE9wdGlvbnM6IHtuYW1lczpbXG4gICAgICAgICAgICAn5biM6IWKJyxcbiAgICAgICAgICAgICflt7Tmr5TkvKYnLFxuICAgICAgICAgICAgJ+Wfg+WPiiddLFxuICAgICAgICAgIHBsYWNlaG9sZGVyTmFtZTogJ+WcsOWMuicsXG4gICAgICAgICAgaWR4Oi0xXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIGJpbmRQaWNrZXJDaGFuZ2UgKGUpIHtcbiAgICAgICAgICB0aGlzLm9yaWVudE9wdGlvbnMuaWR4ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgICB0aGlzLiRlbWl0KCdwaWNrZXItZW1pdCcsIHRoaXMub3JpZW50T3B0aW9ucy5pZHgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiJdfQ==