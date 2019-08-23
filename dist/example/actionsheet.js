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

var Actionsheet = function (_wepy$page) {
    _inherits(Actionsheet, _wepy$page);

    function Actionsheet() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Actionsheet);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Actionsheet.__proto__ || Object.getPrototypeOf(Actionsheet)).call.apply(_ref, [this].concat(args))), _this), _this.methods = {
            open: function open() {
                var res = _wepy2.default.showActionSheet({
                    itemList: ['A', 'B', 'C']
                });

                if (!res.cancel) {
                    console.log(res.tapIndex);
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Actionsheet;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Actionsheet , 'example/actionsheet'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnNoZWV0LmpzIl0sIm5hbWVzIjpbIkFjdGlvbnNoZWV0IiwibWV0aG9kcyIsIm9wZW4iLCJyZXMiLCJ3ZXB5Iiwic2hvd0FjdGlvblNoZWV0IiwiaXRlbUxpc3QiLCJjYW5jZWwiLCJjb25zb2xlIiwibG9nIiwidGFwSW5kZXgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7Ozs7b01BRWpCQyxPLEdBQVU7QUFDTkMsZ0JBRE0sa0JBQ0U7QUFDSixvQkFBSUMsTUFBTUMsZUFBS0MsZUFBTCxDQUFxQjtBQUMzQkMsOEJBQVUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVg7QUFEaUIsaUJBQXJCLENBQVY7O0FBSUEsb0JBQUksQ0FBQ0gsSUFBSUksTUFBVCxFQUFpQjtBQUNiQyw0QkFBUUMsR0FBUixDQUFZTixJQUFJTyxRQUFoQjtBQUNIO0FBQ0o7QUFUSyxTOzs7O0VBRjJCTixlQUFLTyxJOztrQkFBekJYLFciLCJmaWxlIjoiYWN0aW9uc2hlZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbnNoZWV0IGV4dGVuZHMgd2VweS5wYWdlIHtcblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgb3BlbiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IHdlcHkuc2hvd0FjdGlvblNoZWV0KHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbUxpc3Q6IFsnQScsICdCJywgJ0MnXVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFyZXMuY2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXBJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19