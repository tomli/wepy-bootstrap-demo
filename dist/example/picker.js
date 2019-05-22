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

var Picker = function (_wepy$page) {
    _inherits(Picker, _wepy$page);

    function Picker() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Picker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Picker.__proto__ || Object.getPrototypeOf(Picker)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            array: ['美国', '中国', '巴西', '日本'],
            index: 0,
            date: '2016-09-01',
            time: '12:01'
        }, _this.methods = {
            bindPickerChange: function bindPickerChange(e) {
                console.log('picker发送选择改变，携带值为', e.detail.value);
                this.index = e.detail.value;
            },
            bindDateChange: function bindDateChange(e) {
                this.date = e.detail.value;
            },
            bindTimeChange: function bindTimeChange(e) {
                this.time = e.detail.value;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Picker;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Picker , 'example/picker'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpY2tlci5qcyJdLCJuYW1lcyI6WyJQaWNrZXIiLCJkYXRhIiwiYXJyYXkiLCJpbmRleCIsImRhdGUiLCJ0aW1lIiwibWV0aG9kcyIsImJpbmRQaWNrZXJDaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsInZhbHVlIiwiYmluZERhdGVDaGFuZ2UiLCJiaW5kVGltZUNoYW5nZSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7MExBRWpCQyxJLEdBQU87QUFDSEMsbUJBQU8sQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FESjtBQUVIQyxtQkFBTyxDQUZKO0FBR0hDLGtCQUFNLFlBSEg7QUFJSEMsa0JBQU07QUFKSCxTLFFBT1BDLE8sR0FBVTtBQUNOQyw0QkFETSw0QkFDWUMsQ0FEWixFQUNlO0FBQ2pCQyx3QkFBUUMsR0FBUixDQUFZLG1CQUFaLEVBQWlDRixFQUFFRyxNQUFGLENBQVNDLEtBQTFDO0FBQ0EscUJBQUtULEtBQUwsR0FBYUssRUFBRUcsTUFBRixDQUFTQyxLQUF0QjtBQUNILGFBSks7QUFLTkMsMEJBTE0sMEJBS1VMLENBTFYsRUFLYTtBQUNmLHFCQUFLSixJQUFMLEdBQVlJLEVBQUVHLE1BQUYsQ0FBU0MsS0FBckI7QUFDSCxhQVBLO0FBUU5FLDBCQVJNLDBCQVFVTixDQVJWLEVBUWE7QUFDZixxQkFBS0gsSUFBTCxHQUFZRyxFQUFFRyxNQUFGLENBQVNDLEtBQXJCO0FBQ0g7QUFWSyxTOzs7O0VBVHNCRyxlQUFLQyxJOztrQkFBcEJoQixNIiwiZmlsZSI6InBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlja2VyIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuXHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgYXJyYXk6IFsn576O5Zu9JywgJ+S4reWbvScsICflt7Topb8nLCAn5pel5pysJ10sXHJcbiAgICAgICAgICAgIGluZGV4OiAwLFxyXG4gICAgICAgICAgICBkYXRlOiAnMjAxNi0wOS0wMScsXHJcbiAgICAgICAgICAgIHRpbWU6ICcxMjowMSdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICBiaW5kUGlja2VyQ2hhbmdlIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGlja2Vy5Y+R6YCB6YCJ5oup5pS55Y+Y77yM5pC65bim5YC85Li6JywgZS5kZXRhaWwudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiaW5kRGF0ZUNoYW5nZSAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJpbmRUaW1lQ2hhbmdlIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19