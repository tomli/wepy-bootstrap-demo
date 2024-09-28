'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioSelector = function (_wepy$component) {
  _inherits(RadioSelector, _wepy$component);

  function RadioSelector() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RadioSelector);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RadioSelector.__proto__ || Object.getPrototypeOf(RadioSelector)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      options: null
    }, _this.props = {
      target: {
        default: null,
        twoWay: true
      },
      horizontal: {
        default: false
      },
      options: {
        default: null
      },
      valuePropName: {
        default: null
      }

      /*
      watch = {
        activity (newValue, oldValue) {
          console.log(`num value: ${oldValue} -> ${newValue}`)
          this.activity.frequency = this.activity.frequency || this.options[0].name
        }
      }
      */
    }, _this.methods = {
      changeFre: function changeFre(frequency) {
        this.target = this.valuePropName ? frequency[this.valuePropName] : frequency;
        this.$apply();
        this.$emit('radio-emit', this.target);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RadioSelector, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return RadioSelector;
}(_wepy2.default.component);

exports.default = RadioSelector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvU2VsZWN0b3IuanMiXSwibmFtZXMiOlsiUmFkaW9TZWxlY3RvciIsImRhdGEiLCJvcHRpb25zIiwicHJvcHMiLCJ0YXJnZXQiLCJkZWZhdWx0IiwidHdvV2F5IiwiaG9yaXpvbnRhbCIsInZhbHVlUHJvcE5hbWUiLCJtZXRob2RzIiwiY2hhbmdlRnJlIiwiZnJlcXVlbmN5IiwiJGFwcGx5IiwiJGVtaXQiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBRWlCQSxhOzs7Ozs7Ozs7Ozs7OztvTUFDZkMsSSxHQUFPO0FBQ0xDLGVBQVM7QUFESixLLFFBSVBDLEssR0FBUTtBQUNOQyxjQUFRO0FBQ05DLGlCQUFTLElBREg7QUFFTkMsZ0JBQVE7QUFGRixPQURGO0FBS05DLGtCQUFZO0FBQ1ZGLGlCQUFTO0FBREMsT0FMTjtBQVFOSCxlQUFTO0FBQ1BHLGlCQUFTO0FBREYsT0FSSDtBQVdORyxxQkFBZTtBQUNiSCxpQkFBUztBQURJOztBQUtmOzs7Ozs7OztBQWhCTSxLLFFBd0JSSSxPLEdBQVU7QUFFUkMsZUFGUSxxQkFFRUMsU0FGRixFQUVhO0FBQ25CLGFBQUtQLE1BQUwsR0FBYyxLQUFLSSxhQUFMLEdBQXFCRyxVQUFVLEtBQUtILGFBQWYsQ0FBckIsR0FBcURHLFNBQW5FO0FBQ0EsYUFBS0MsTUFBTDtBQUNBLGFBQUtDLEtBQUwsQ0FBVyxZQUFYLEVBQXlCLEtBQUtULE1BQTlCO0FBQ0Q7QUFOTyxLOzs7Ozs2QkFRRCxDQUNSOzs7O0VBdENvQ1UsZUFBS0MsUzs7a0JBQTNCZixhIiwiZmlsZSI6InJhZGlvU2VsZWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpb1NlbGVjdG9yIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgICAgZGF0YSA9IHtcbiAgICAgICAgb3B0aW9uczogbnVsbFxuICAgICAgfVxuXG4gICAgICBwcm9wcyA9IHtcbiAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgaG9yaXpvbnRhbDoge1xuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlUHJvcE5hbWU6IHtcbiAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICB3YXRjaCA9IHtcbiAgICAgICAgICBhY3Rpdml0eSAobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgbnVtIHZhbHVlOiAke29sZFZhbHVlfSAtPiAke25ld1ZhbHVlfWApXG4gICAgICAgICAgICB0aGlzLmFjdGl2aXR5LmZyZXF1ZW5jeSA9IHRoaXMuYWN0aXZpdHkuZnJlcXVlbmN5IHx8IHRoaXMub3B0aW9uc1swXS5uYW1lXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICovXG4gICAgICBtZXRob2RzID0ge1xuXG4gICAgICAgIGNoYW5nZUZyZShmcmVxdWVuY3kpIHtcbiAgICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMudmFsdWVQcm9wTmFtZSA/IGZyZXF1ZW5jeVt0aGlzLnZhbHVlUHJvcE5hbWVdIDogZnJlcXVlbmN5XG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgIHRoaXMuJGVtaXQoJ3JhZGlvLWVtaXQnLCB0aGlzLnRhcmdldClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgb25Mb2FkKCkge1xuICAgICAgfVxufVxuIl19