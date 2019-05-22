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

var Dialog = function (_wepy$page) {
    _inherits(Dialog, _wepy$page);

    function Dialog() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Dialog);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call.apply(_ref, [this].concat(args))), _this), _this.methods = {
            openConfirm: function openConfirm() {
                var res = _wepy2.default.showModal({
                    title: '弹窗标题',
                    content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
                    confirmText: '主操作',
                    cancelText: '辅助操作'
                });

                console.log(res);
                if (res.confirm) {
                    console.log('用户点击主操作');
                } else {
                    console.log('用户点击辅助操作');
                }
            },
            openAlert: function openAlert() {

                var res = _wepy2.default.showModal({
                    content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
                    showCancel: false
                });

                if (res.confirm) {
                    console.log('用户点击确定');
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Dialog;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Dialog , 'example/dialog'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy5qcyJdLCJuYW1lcyI6WyJEaWFsb2ciLCJtZXRob2RzIiwib3BlbkNvbmZpcm0iLCJyZXMiLCJ3ZXB5Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwiY29uZmlybVRleHQiLCJjYW5jZWxUZXh0IiwiY29uc29sZSIsImxvZyIsImNvbmZpcm0iLCJvcGVuQWxlcnQiLCJzaG93Q2FuY2VsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7OzBMQUVqQkMsTyxHQUFVO0FBQ05DLHVCQURNLHlCQUNTO0FBQ1gsb0JBQUlDLE1BQU1DLGVBQUtDLFNBQUwsQ0FBZTtBQUNyQkMsMkJBQU8sTUFEYztBQUVyQkMsNkJBQVMsa0NBRlk7QUFHckJDLGlDQUFhLEtBSFE7QUFJckJDLGdDQUFZO0FBSlMsaUJBQWYsQ0FBVjs7QUFPQUMsd0JBQVFDLEdBQVIsQ0FBWVIsR0FBWjtBQUNBLG9CQUFJQSxJQUFJUyxPQUFSLEVBQWlCO0FBQ2JGLDRCQUFRQyxHQUFSLENBQVksU0FBWjtBQUNILGlCQUZELE1BRU87QUFDSEQsNEJBQVFDLEdBQVIsQ0FBWSxVQUFaO0FBQ0g7QUFDSixhQWZLO0FBZ0JORSxxQkFoQk0sdUJBZ0JPOztBQUVULG9CQUFJVixNQUFNQyxlQUFLQyxTQUFMLENBQWU7QUFDckJFLDZCQUFTLGtDQURZO0FBRXJCTyxnQ0FBWTtBQUZTLGlCQUFmLENBQVY7O0FBS0Esb0JBQUlYLElBQUlTLE9BQVIsRUFBaUI7QUFDYkYsNEJBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0g7QUFDSjtBQTFCSyxTOzs7O0VBRnNCUCxlQUFLVyxJOztrQkFBcEJmLE0iLCJmaWxlIjoiZGlhbG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG5cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICBvcGVuQ29uZmlybSAoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5by556qX5qCH6aKYJyxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5by556qX5YaF5a6577yM5ZGK55+l5b2T5YmN54q25oCB44CB5L+h5oGv5ZKM6Kej5Yaz5pa55rOV77yM5o+P6L+w5paH5a2X5bC96YeP5o6n5Yi25Zyo5LiJ6KGM5YaFJyxcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtVGV4dDogJ+S4u+aTjeS9nCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dDogJ+i+heWKqeaTjeS9nCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye75Li75pON5L2cJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vovoXliqnmk43kvZwnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb3BlbkFsZXJ0ICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICflvLnnqpflhoXlrrnvvIzlkYrnn6XlvZPliY3nirbmgIHjgIHkv6Hmga/lkozop6PlhrPmlrnms5XvvIzmj4/ov7DmloflrZflsL3ph4/mjqfliLblnKjkuInooYzlhoUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiJdfQ==