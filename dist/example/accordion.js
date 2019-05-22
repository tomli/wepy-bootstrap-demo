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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29yZGlvbi5qcyJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCJkYXRhIiwibGlzdCIsImlkIiwibmFtZSIsIm9wZW4iLCJwYWdlcyIsIm1ldGhvZHMiLCJ0b2dnbGUiLCJmb3JFYWNoIiwidiIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxJLEdBQU87QUFDTEMsWUFBTSxDQUNKO0FBQ0VDLFlBQUksSUFETjtBQUVFQyxjQUFNLFNBRlI7QUFHRUMsY0FBTSxLQUhSO0FBSUVDLGVBQU8sQ0FBQyxNQUFELEVBQVMsU0FBVCxFQUFvQixRQUFwQixFQUE4QixVQUE5QjtBQUpULE9BREksRUFPSjtBQUNFSCxZQUFJLElBRE47QUFFRUMsY0FBTSxPQUZSO0FBR0VDLGNBQU0sS0FIUjtBQUlFQyxlQUFPLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxNQUFmLEVBQXVCLFFBQXZCLEVBQWlDLE1BQWpDLEVBQXlDLFNBQXpDO0FBSlQsT0FQSSxFQWFKO0FBQ0VILFlBQUksSUFETjtBQUVFQyxjQUFNLFVBRlI7QUFHRUMsY0FBTSxLQUhSO0FBSUVDLGVBQU8sQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixNQUFqQixFQUF5QixLQUF6QixFQUFnQyxPQUFoQztBQUpULE9BYkksRUFtQko7QUFDRUgsWUFBSSxJQUROO0FBRUVDLGNBQU0sT0FGUjtBQUdFQyxjQUFNLEtBSFI7QUFJRUMsZUFBTyxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLE1BQWhCLEVBQXdCLE1BQXhCLEVBQWdDLE1BQWhDO0FBSlQsT0FuQkksRUF5Qko7QUFDRUgsWUFBSSxJQUROO0FBRUVDLGNBQU0sUUFGUjtBQUdFQyxjQUFNLEtBSFI7QUFJRUMsZUFBTyxDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CLFFBQXBCLEVBQThCLFVBQTlCLEVBQTBDLE9BQTFDO0FBSlQsT0F6Qkk7QUFERCxLLFFBbUNQQyxPLEdBQVU7QUFDUkMsWUFEUSxrQkFDQUwsRUFEQSxFQUNJO0FBQ1YsYUFBS0QsSUFBTCxDQUFVTyxPQUFWLENBQWtCLGFBQUs7QUFDckJDLFlBQUVMLElBQUYsR0FBVUssRUFBRVAsRUFBRixLQUFTQSxFQUFWLEdBQWdCLENBQUNPLEVBQUVMLElBQW5CLEdBQTBCLEtBQW5DO0FBQ0QsU0FGRDtBQUdEO0FBTE8sSzs7OztFQXBDMkJNLGVBQUtDLEk7O2tCQUF2QlosUyIsImZpbGUiOiJhY2NvcmRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgICAgZGF0YSA9IHtcclxuICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnREUnLFxyXG4gICAgICAgICAgICBuYW1lOiAn5b635Zu95paw55S15b2x6L+Q5YqoJyxcclxuICAgICAgICAgICAgb3BlbjogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhZ2VzOiBbJ+azleaWr+WuvuW+tycsICfmsoPnurPCt+i1q+WwlOS9kOagvCcsICfnu7Tlp4bCt+aWh+W+t+aWrycsICfmsoPlsJTlhYvCt+aWvemahuWkmuWkqyddXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ0ZSJyxcclxuICAgICAgICAgICAgbmFtZTogJ+azleWci+aWsOa1qua9ricsXHJcbiAgICAgICAgICAgIG9wZW46IGZhbHNlLFxyXG4gICAgICAgICAgICBwYWdlczogWyfnibnlkJXlvJcnLCAn5oiI6L6+5bCUJywgJ+mYv+S8pumbt+S5gycsICfln4Pph4zlhYvCt+S+r+m6picsICflpI/luIPnvZflsJQnLCAn6Zi/5raF5pavwrfnk6blsJTovr4nXVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdJVCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICfmhI/lpKfliKnmlrDnjrDlrp7kuLvkuYknLFxyXG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFnZXM6IFsn57u05pav5bq36JKCJywgJ+W+t8K36KW/5Y2hJywgJ+e9l+ilv+mHjOWwvCcsICfotLnph4zlsLwnLCAn5a6J5Lic5bC85aWl5bC8J11cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnSlAnLFxyXG4gICAgICAgICAgICBuYW1lOiAn5pel5pys5paw5rWq5r2uJyxcclxuICAgICAgICAgICAgb3BlbjogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhZ2VzOiBbJ+Wkp+Wym+a4micsICfku4rmnZHmmIzlubMnLCAn5ZCJ55Sw5Zac6YeNJywgJ+etseeUsOato+a1qScsICflr7rlsbHkv67lj7gnXVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdVUycsXHJcbiAgICAgICAgICAgIG5hbWU6ICfnvo7lm73ni6znq4vnlLXlvbEnLFxyXG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFnZXM6IFsn56eR5oGp5YWE5byfJywgJ+aYhuaxgMK35aGU5Lym6JKC6K+6JywgJ+WQieWnhuKAoui0vuacqOiuuCcsICflj7LokoLmlofigKLntKLlvrfkvK/moLwnLCAn5aSn5Y2rwrfmnpflpYcnXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG5cclxuICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICB0b2dnbGUgKGlkKSB7XHJcbiAgICAgICAgICB0aGlzLmxpc3QuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgICAgdi5vcGVuID0gKHYuaWQgPT09IGlkKSA/ICF2Lm9wZW4gOiBmYWxzZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuIl19