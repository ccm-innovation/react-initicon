if (typeof require != 'undefined') {
  var React = require('react')

  var {
    getBackgroundColor,
    getFontSize,
    getInitials,
    defaultProps
  } = require('./shared')
}

class Initicon extends React.Component {
  render() {
    let {props} = this
    return (
      <div style={{ backgroundColor: getBackgroundColor(props),
                    height: this.props.size + "px",
                    width: this.props.size + "px",
                    fontSize: getFontSize(props) + "px",
                    lineHeight: this.props.size + "px",
                    borderRadius: '50%',
                    display: 'inline-block',
                    textAlign: 'center',
                    color: '#ffffff' }}>
        {getInitials(props)}
      </div>
    )
  }
}

Initicon.propTypes = {
  text: React.PropTypes.string.isRequired,
  size: React.PropTypes.any.isRequired,
  seed: React.PropTypes.number,
  color: React.PropTypes.any,
  single: React.PropTypes.bool,
  saturation: React.PropTypes.string,
  brightness: React.PropTypes.string
}

Initicon.defaultProps = defaultProps

if (typeof module != 'undefined') {
  module.exports = Initicon;
}
