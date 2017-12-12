if (typeof require != 'undefined') {
  var React = require('react')

  var {
    getBackgroundColor,
    getFontSize,
    getInitials,
    defaultProps
  } = require('./shared')
  var PropTypes = require('prop-types');
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
  text: PropTypes.any.isRequired,
  size: PropTypes.any.isRequired,
  seed: PropTypes.number,
  color: PropTypes.any,
  single: PropTypes.bool,
  saturation: PropTypes.string,
  brightness: PropTypes.string
}

Initicon.defaultProps = defaultProps

if (typeof module != 'undefined') {
  module.exports = Initicon;
}
