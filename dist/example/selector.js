'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _radioSelector = require('./../components/radioSelector.js');

var _radioSelector2 = _interopRequireDefault(_radioSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Selector = function (_wepy$page) {
  _inherits(Selector, _wepy$page);

  function Selector() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Selector);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Selector.__proto__ || Object.getPrototypeOf(Selector)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      val: null,
      list: ['普通话', '粤语', '闽南语'],
      list2: ['科恩兄弟', '昆汀·塔伦蒂诺', '吉姆•贾木许', '史蒂文•索德伯格', '大卫·林奇']
    }, _this.$repeat = {}, _this.$props = { "RadioSelector": { "xmlns:v-bind": "", "v-bind:target.sync": "val", "v-bind:options.once": "list", "horizontal": "true" }, "RadioSelector2": { "v-bind:target.sync": "val", "v-bind:options.once": "list2" } }, _this.$events = {}, _this.components = {
      RadioSelector: _radioSelector2.default,
      RadioSelector2: _radioSelector2.default
    }, _this.events = {
      'radio-emit': function radioEmit(value) {
        _wepy2.default.showToast({
          title: '选中"' + _this.val + '"',
          icon: 'none',
          duration: 1000
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Selector;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Selector , 'example/selector'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdG9yLmpzIl0sIm5hbWVzIjpbIlNlbGVjdG9yIiwiZGF0YSIsInZhbCIsImxpc3QiLCJsaXN0MiIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlJhZGlvU2VsZWN0b3IiLCJSYWRpb1NlbGVjdG9yMiIsImV2ZW50cyIsInZhbHVlIiwid2VweSIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxJLEdBQU87QUFDTEMsV0FBSyxJQURBO0FBRUxDLFlBQU0sQ0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLEtBQWQsQ0FGRDtBQUdMQyxhQUFPLENBQUMsTUFBRCxFQUFTLFNBQVQsRUFBb0IsUUFBcEIsRUFBOEIsVUFBOUIsRUFBMEMsT0FBMUM7QUFIRixLLFFBTVJDLE8sR0FBVSxFLFFBQ2ZDLE0sR0FBUyxFQUFDLGlCQUFnQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHNCQUFxQixLQUF4QyxFQUE4Qyx1QkFBc0IsTUFBcEUsRUFBMkUsY0FBYSxNQUF4RixFQUFqQixFQUFpSCxrQkFBaUIsRUFBQyxzQkFBcUIsS0FBdEIsRUFBNEIsdUJBQXNCLE9BQWxELEVBQWxJLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ05DLHFCQUFlQSx1QkFEVDtBQUVOQyxzQkFBZ0JEO0FBRlYsSyxRQUtSRSxNLEdBQVM7QUFDUCxvQkFBYyxtQkFBQ0MsS0FBRCxFQUFXO0FBQ3ZCQyx1QkFBS0MsU0FBTCxDQUFlO0FBQ2JDLGlCQUFPLFFBQVEsTUFBS2IsR0FBYixHQUFtQixHQURiO0FBRWJjLGdCQUFNLE1BRk87QUFHYkMsb0JBQVU7QUFIRyxTQUFmO0FBS0Q7QUFQTSxLOzs7O0VBZjJCSixlQUFLSyxJOztrQkFBdEJsQixRIiwiZmlsZSI6InNlbGVjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgUmFkaW9TZWxlY3RvciBmcm9tICcuLi9jb21wb25lbnRzL3JhZGlvU2VsZWN0b3InXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RvciBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICB2YWw6IG51bGwsXG4gICAgICAgIGxpc3Q6IFsn5pmu6YCa6K+dJywgJ+eypOivrScsICfpl73ljZfor60nXSxcbiAgICAgICAgbGlzdDI6IFsn56eR5oGp5YWE5byfJywgJ+aYhuaxgMK35aGU5Lym6JKC6K+6JywgJ+WQieWnhuKAoui0vuacqOiuuCcsICflj7LokoLmlofigKLntKLlvrfkvK/moLwnLCAn5aSn5Y2rwrfmnpflpYcnXVxuICAgICAgfVxuXG4gICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiUmFkaW9TZWxlY3RvclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGFyZ2V0LnN5bmNcIjpcInZhbFwiLFwidi1iaW5kOm9wdGlvbnMub25jZVwiOlwibGlzdFwiLFwiaG9yaXpvbnRhbFwiOlwidHJ1ZVwifSxcIlJhZGlvU2VsZWN0b3IyXCI6e1widi1iaW5kOnRhcmdldC5zeW5jXCI6XCJ2YWxcIixcInYtYmluZDpvcHRpb25zLm9uY2VcIjpcImxpc3QyXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgUmFkaW9TZWxlY3RvcjogUmFkaW9TZWxlY3RvcixcbiAgICAgICAgUmFkaW9TZWxlY3RvcjI6IFJhZGlvU2VsZWN0b3JcbiAgICAgIH1cblxuICAgICAgZXZlbnRzID0ge1xuICAgICAgICAncmFkaW8tZW1pdCc6ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn6YCJ5LitXCInICsgdGhpcy52YWwgKyAnXCInLFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuIl19