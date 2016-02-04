class Initicon extends React.Component {
  static propTypes: {
    text: React.PropTypes.string.isRequired,
    size: React.PropTypes.any.isRequired,
    seed: React.PropTypes.number,
    color: React.PropTypes.any,
    single: React.PropTypes.bool,
    saturation: React.PropTypes.string,
    brightness: React.PropTypes.string
  };

  static defaultProps: {
    size: 75,
    saturation: "80%",
    brightness: "40%",
    color: false,
    single: false
  };

  _getBackgroundColor() {
    let {seed, saturation, brightness, color} = this.props
    if (color) return color
    var hue = Math.sin(seed)
    hue = hue < 0 ? -hue : hue
    hue = Math.round(hue * 359) + 1
    return "hsl(" + hue + "," + saturation + "," + brightness + ")"
  }

  _getFontSize() {
    let {single} = this.props
    return single ? (this.props.size)/1.7 : (this.props.size-5)/2
  }

  _getInitials() {
    let {text, single} = this.props
    if (text.indexOf(" ") > 0 && !single) {
      return text.split(" ")[0].charAt(0) + text.split(" ")[1].charAt(0)
    } else {
      return text.charAt(0)
    }
  }

  render() {
    return (
      <div style={{ backgroundColor: this._getBackgroundColor(),
                    height: this.props.size + "px",
                    width: this.props.size + "px",
                    fontSize: this._getFontSize() + "px",
                    lineHeight: this.props.size + "px" }}>
        {this._getInitials()}
      </div>
    )
  }
};

module.exports = Initicon;
