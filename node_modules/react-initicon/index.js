'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof require !== 'undefined') var React = require('react');

var Initicon = function (_React$Component) {
  _inherits(Initicon, _React$Component);

  function Initicon() {
    _classCallCheck(this, Initicon);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Initicon).apply(this, arguments));
  }

  _createClass(Initicon, [{
    key: '_getBackgroundColor',
    value: function _getBackgroundColor() {
      var _props = this.props;
      var seed = _props.seed;
      var saturation = _props.saturation;
      var brightness = _props.brightness;
      var color = _props.color;

      if (color) return color;
      var hue = Math.sin(seed);
      hue = hue < 0 ? -hue : hue;
      hue = Math.round(hue * 359) + 1;
      return "hsl(" + hue + "," + saturation + "," + brightness + ")";
    }
  }, {
    key: '_getFontSize',
    value: function _getFontSize() {
      var single = this.props.single;

      return single ? this.props.size / 1.7 : (this.props.size - 5) / 2;
    }
  }, {
    key: '_getInitials',
    value: function _getInitials() {
      var _props2 = this.props;
      var text = _props2.text;
      var single = _props2.single;

      if (text.indexOf(" ") > 0 && !single) {
        return text.split(" ")[0].charAt(0) + text.split(" ")[1].charAt(0);
      } else {
        return text.charAt(0);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { style: { backgroundColor: this._getBackgroundColor(),
            height: this.props.size + "px",
            width: this.props.size + "px",
            fontSize: this._getFontSize() + "px",
            lineHeight: this.props.size + "px",
            borderRadius: '50%',
            display: 'inline-block',
            textAlign: 'center',
            color: '#ffffff' } },
        this._getInitials()
      );
    }
  }]);

  return Initicon;
}(React.Component);

;

if (typeof module !== 'undefined') module.exports = Initicon;