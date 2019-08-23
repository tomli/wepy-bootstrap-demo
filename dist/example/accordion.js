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

var Accordion = function (_wepy$page) {
  _inherits(Accordion, _wepy$page);

  function Accordion() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Accordion);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Accordion.__proto__ || Object.getPrototypeOf(Accordion)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      list: [{
        id: 'DE',
        name: '德国新电影运动',
        open: false,
        pages: ['法斯宾德', '沃纳·赫尔佐格', '维姆·文德斯', '沃尔克·施隆多夫']
      }, {
        id: 'FR',
        name: '法國新浪潮',
        open: false,
        pages: ['特吕弗', '戈达尔', '阿伦雷乃', '埃里克·侯麦', '夏布罗尔', '阿涅斯·瓦尔达']
      }, {
        id: 'IT',
        name: '意大利新现实主义',
        open: false,
        pages: ['维斯康蒂', '德·西卡', '罗西里尼', '费里尼', '安东尼奥尼']
      }, {
        id: 'JP',
        name: '日本新浪潮',
        open: false,
        pages: ['大岛渚', '今村昌平', '吉田喜重', '筱田正浩', '寺山修司']
      }, {
        id: 'US',
        name: '美国独立电影',
        open: false,
        pages: ['科恩兄弟', '昆汀·塔伦蒂诺', '吉姆•贾木许', '史蒂文•索德伯格', '大卫·林奇']
      }]
    }, _this.methods = {
      toggle: function toggle(id) {
        this.list.forEach(function (v) {
          v.open = v.id === id ? !v.open : false;
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Accordion;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Accordion , 'example/accordion'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29yZGlvbi5qcyJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCJkYXRhIiwibGlzdCIsImlkIiwibmFtZSIsIm9wZW4iLCJwYWdlcyIsIm1ldGhvZHMiLCJ0b2dnbGUiLCJmb3JFYWNoIiwidiIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxJLEdBQU87QUFDTEMsWUFBTSxDQUNKO0FBQ0VDLFlBQUksSUFETjtBQUVFQyxjQUFNLFNBRlI7QUFHRUMsY0FBTSxLQUhSO0FBSUVDLGVBQU8sQ0FBQyxNQUFELEVBQVMsU0FBVCxFQUFvQixRQUFwQixFQUE4QixVQUE5QjtBQUpULE9BREksRUFPSjtBQUNFSCxZQUFJLElBRE47QUFFRUMsY0FBTSxPQUZSO0FBR0VDLGNBQU0sS0FIUjtBQUlFQyxlQUFPLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxNQUFmLEVBQXVCLFFBQXZCLEVBQWlDLE1BQWpDLEVBQXlDLFNBQXpDO0FBSlQsT0FQSSxFQWFKO0FBQ0VILFlBQUksSUFETjtBQUVFQyxjQUFNLFVBRlI7QUFHRUMsY0FBTSxLQUhSO0FBSUVDLGVBQU8sQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixNQUFqQixFQUF5QixLQUF6QixFQUFnQyxPQUFoQztBQUpULE9BYkksRUFtQko7QUFDRUgsWUFBSSxJQUROO0FBRUVDLGNBQU0sT0FGUjtBQUdFQyxjQUFNLEtBSFI7QUFJRUMsZUFBTyxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLE1BQWhCLEVBQXdCLE1BQXhCLEVBQWdDLE1BQWhDO0FBSlQsT0FuQkksRUF5Qko7QUFDRUgsWUFBSSxJQUROO0FBRUVDLGNBQU0sUUFGUjtBQUdFQyxjQUFNLEtBSFI7QUFJRUMsZUFBTyxDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CLFFBQXBCLEVBQThCLFVBQTlCLEVBQTBDLE9BQTFDO0FBSlQsT0F6Qkk7QUFERCxLLFFBbUNQQyxPLEdBQVU7QUFDUkMsWUFEUSxrQkFDQUwsRUFEQSxFQUNJO0FBQ1YsYUFBS0QsSUFBTCxDQUFVTyxPQUFWLENBQWtCLGFBQUs7QUFDckJDLFlBQUVMLElBQUYsR0FBVUssRUFBRVAsRUFBRixLQUFTQSxFQUFWLEdBQWdCLENBQUNPLEVBQUVMLElBQW5CLEdBQTBCLEtBQW5DO0FBQ0QsU0FGRDtBQUdEO0FBTE8sSzs7OztFQXBDMkJNLGVBQUtDLEk7O2tCQUF2QlosUyIsImZpbGUiOiJhY2NvcmRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgIGRhdGEgPSB7XG4gICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ0RFJyxcbiAgICAgICAgICAgIG5hbWU6ICflvrflm73mlrDnlLXlvbHov5DliqgnLFxuICAgICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgICAgICBwYWdlczogWyfms5Xmlq/lrr7lvrcnLCAn5rKD57qzwrfotavlsJTkvZDmoLwnLCAn57u05aeGwrfmloflvrfmlq8nLCAn5rKD5bCU5YWLwrfmlr3pmoblpJrlpKsnXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdGUicsXG4gICAgICAgICAgICBuYW1lOiAn5rOV5ZyL5paw5rWq5r2uJyxcbiAgICAgICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgICAgICAgcGFnZXM6IFsn54m55ZCV5byXJywgJ+aIiOi+vuWwlCcsICfpmL/kvKbpm7fkuYMnLCAn5Z+D6YeM5YWLwrfkvq/puqYnLCAn5aSP5biD572X5bCUJywgJ+mYv+a2heaWr8K355Om5bCU6L6+J11cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnSVQnLFxuICAgICAgICAgICAgbmFtZTogJ+aEj+Wkp+WIqeaWsOeOsOWunuS4u+S5iScsXG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHBhZ2VzOiBbJ+e7tOaWr+W6t+iSgicsICflvrfCt+ilv+WNoScsICfnvZfopb/ph4zlsLwnLCAn6LS56YeM5bC8JywgJ+WuieS4nOWwvOWlpeWwvCddXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ0pQJyxcbiAgICAgICAgICAgIG5hbWU6ICfml6XmnKzmlrDmtarmva4nLFxuICAgICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgICAgICBwYWdlczogWyflpKflspvmuJonLCAn5LuK5p2R5piM5bmzJywgJ+WQieeUsOWWnOmHjScsICfnrbHnlLDmraPmtaknLCAn5a+65bGx5L+u5Y+4J11cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnVVMnLFxuICAgICAgICAgICAgbmFtZTogJ+e+juWbveeLrOeri+eUteW9sScsXG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIHBhZ2VzOiBbJ+enkeaBqeWFhOW8nycsICfmmIbmsYDCt+WhlOS8puiSguivuicsICflkInlp4bigKLotL7mnKjorrgnLCAn5Y+y6JKC5paH4oCi57Si5b635Lyv5qC8JywgJ+Wkp+WNq8K35p6X5aWHJ11cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cblxuICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgdG9nZ2xlIChpZCkge1xuICAgICAgICAgIHRoaXMubGlzdC5mb3JFYWNoKHYgPT4ge1xuICAgICAgICAgICAgdi5vcGVuID0gKHYuaWQgPT09IGlkKSA/ICF2Lm9wZW4gOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4iXX0=