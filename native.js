'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react-native');

var View = React.View;
var Text = React.Text;
var StyleSheet = React.StyleSheet;
var PropTypes = React.PropTypes;
var Component = React.Component;

var _require = require('./shared');

var getBackgroundColor = _require.getBackgroundColor;
var getFontSize = _require.getFontSize;
var getInitials = _require.getInitials;

var NativeIniticon = function (_Component) {
  _inherits(NativeIniticon, _Component);

  function NativeIniticon() {
    _classCallCheck(this, NativeIniticon);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NativeIniticon).apply(this, arguments));
  }

  _createClass(NativeIniticon, [{
    key: 'render',
    value: function render() {
      var props = this.props;

      return React.createElement(
        View,
        { style: [styles.icon, {
            backgroundColor: getBackgroundColor(props),
            height: this.props.size,
            width: this.props.size,
            borderRadius: this.props.size / 2
          }, this.props.style]
        },
        React.createElement(
          Text,
          { style: [styles.text, { fontSize: getFontSize(props) }] },
          getInitials(props)
        )
      );
    }
  }]);

  return NativeIniticon;
}(Component);

;

var styles = StyleSheet.create({
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff'
  }
});

module.exports = NativeIniticon;