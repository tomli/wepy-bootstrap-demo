'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AccordionComponent = function (_wepy$component) {
  _inherits(AccordionComponent, _wepy$component);

  function AccordionComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AccordionComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AccordionComponent.__proto__ || Object.getPrototypeOf(AccordionComponent)).call.apply(_ref, [this].concat(args))), _this), _this.props = ['list'], _this.methods = {
      toggle: function toggle(id) {
        this.list.forEach(function (v) {
          v.open = v.id === id ? !v.open : false;
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  /*
     data = {
          list: [
            {
              id: 'DE',
              name: '德国新电影运动',
              open: false,
              pages: ['法斯宾德', '沃纳·赫尔佐格', '维姆·文德斯', '沃尔克·施隆多夫']
            },
            {
              id: 'FR',
              name: '法國新浪潮',
              open: false,
              pages: ['特吕弗', '戈达尔', '阿伦雷乃', '埃里克·侯麦', '夏布罗尔', '阿涅斯·瓦尔达']
            },
            {
              id: 'IT',
              name: '意大利新现实主义',
              open: false,
              pages: ['维斯康蒂', '德·西卡', '罗西里尼', '费里尼', '安东尼奥尼']
            },
            {
              id: 'JP',
              name: '日本新浪潮',
              open: false,
              pages: ['大岛渚', '今村昌平', '吉田喜重', '筱田正浩', '寺山修司']
            },
            {
              id: 'US',
              name: '美国独立电影',
              open: false,
              pages: ['科恩兄弟', '昆汀·塔伦蒂诺', '吉姆•贾木许', '史蒂文•索德伯格', '大卫·林奇']
            }
          ]
        }
        */


  return AccordionComponent;
}(_wepy2.default.component);

exports.default = AccordionComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29yZGlvbl9jbXAuanMiXSwibmFtZXMiOlsiQWNjb3JkaW9uQ29tcG9uZW50IiwicHJvcHMiLCJtZXRob2RzIiwidG9nZ2xlIiwiaWQiLCJsaXN0IiwiZm9yRWFjaCIsInYiLCJvcGVuIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLGtCOzs7Ozs7Ozs7Ozs7Ozs4TUFxQ25CQyxLLEdBQU0sQ0FBQyxNQUFELEMsUUFFTkMsTyxHQUFVO0FBQ1JDLFlBRFEsa0JBQ0FDLEVBREEsRUFDSTtBQUNWLGFBQUtDLElBQUwsQ0FBVUMsT0FBVixDQUFrQixhQUFLO0FBQ3JCQyxZQUFFQyxJQUFGLEdBQVVELEVBQUVILEVBQUYsS0FBU0EsRUFBVixHQUFnQixDQUFDRyxFQUFFQyxJQUFuQixHQUEwQixLQUFuQztBQUNELFNBRkQ7QUFHRDtBQUxPLEs7O0FBdENoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBRG9EQyxlQUFLQyxTOztrQkFBaENWLGtCIiwiZmlsZSI6ImFjY29yZGlvbl9jbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uQ29tcG9uZW50IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4vKlxyXG4gICBkYXRhID0ge1xyXG4gICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdERScsXHJcbiAgICAgICAgICAgIG5hbWU6ICflvrflm73mlrDnlLXlvbHov5DliqgnLFxyXG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFnZXM6IFsn5rOV5pav5a6+5b63JywgJ+ayg+e6s8K36LWr5bCU5L2Q5qC8JywgJ+e7tOWnhsK35paH5b635pavJywgJ+ayg+WwlOWFi8K35pa96ZqG5aSa5aSrJ11cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnRlInLFxyXG4gICAgICAgICAgICBuYW1lOiAn5rOV5ZyL5paw5rWq5r2uJyxcclxuICAgICAgICAgICAgb3BlbjogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhZ2VzOiBbJ+eJueWQleW8lycsICfmiIjovr7lsJQnLCAn6Zi/5Lym6Zu35LmDJywgJ+Wfg+mHjOWFi8K35L6v6bqmJywgJ+Wkj+W4g+e9l+WwlCcsICfpmL/mtoXmlq/Ct+eTpuWwlOi+viddXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ0lUJyxcclxuICAgICAgICAgICAgbmFtZTogJ+aEj+Wkp+WIqeaWsOeOsOWunuS4u+S5iScsXHJcbiAgICAgICAgICAgIG9wZW46IGZhbHNlLFxyXG4gICAgICAgICAgICBwYWdlczogWyfnu7Tmlq/lurfokoInLCAn5b63wrfopb/ljaEnLCAn572X6KW/6YeM5bC8JywgJ+i0uemHjOWwvCcsICflronkuJzlsLzlpaXlsLwnXVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdKUCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICfml6XmnKzmlrDmtarmva4nLFxyXG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFnZXM6IFsn5aSn5bKb5riaJywgJ+S7iuadkeaYjOW5sycsICflkInnlLDllpzph40nLCAn562x55Sw5q2j5rWpJywgJ+WvuuWxseS/ruWPuCddXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ1VTJyxcclxuICAgICAgICAgICAgbmFtZTogJ+e+juWbveeLrOeri+eUteW9sScsXHJcbiAgICAgICAgICAgIG9wZW46IGZhbHNlLFxyXG4gICAgICAgICAgICBwYWdlczogWyfnp5HmganlhYTlvJ8nLCAn5piG5rGAwrfloZTkvKbokoLor7onLCAn5ZCJ5aeG4oCi6LS+5pyo6K64JywgJ+WPsuiSguaWh+KAoue0ouW+t+S8r+agvCcsICflpKfljavCt+ael+WlhyddXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICAgICovXHJcbiAgICAgIHByb3BzPVsnbGlzdCddXHJcblxyXG4gICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIHRvZ2dsZSAoaWQpIHtcclxuICAgICAgICAgIHRoaXMubGlzdC5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICB2Lm9wZW4gPSAodi5pZCA9PT0gaWQpID8gIXYub3BlbiA6IGZhbHNlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4iXX0=