var React = require('react');
var shared = require('./shared');

var Initicon = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    size: React.PropTypes.any.isRequired,
    seed: React.PropTypes.number,
    color: React.PropTypes.any,
    single: React.PropTypes.bool,
    saturation: React.PropTypes.string,
    brightness: React.PropTypes.string
  },
  getDefaultProps: function() {
    return shared.defaultProps
  },
  render: function() {
    if (this.props.color) {
      var backgroundColor = this.props.color;
    } else {
      var backgroundColor = shared.getBackgroundColor(this.props.seed, this.props.saturation, this.props.brightness);
    }
    var fontSize = this.props.single ? (this.props.size)/1.7 : (this.props.size-5)/2;
    return (
      <div style={{ backgroundColor,
                    height: this.props.size + "px",
                    width: this.props.size + "px",
                    fontSize: fontSize + "px",
                    lineHeight: this.props.size + "px" }}>
        {shared.getInitials(this.props.text, this.props.single)}
      </div>
    );
  }
});

module.exports = Initicon;
