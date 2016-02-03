var React = require('react-native');

var {
  getBackgroundColor,
  getInitials,
  defaultProps
} = require('./shared')

var {
 View,
 Text,
 StyleSheet,
 PropTypes
} = React;

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
    return defaultProps
  },
  render: function() {
    if (this.props.color) {
      var backgroundColor = this.props.color;
    } else {
      var backgroundColor = getBackgroundColor(this.props.seed, this.props.saturation, this.props.brightness);
    }
    var fontSize = this.props.single ? (this.props.size)/1.7 : (this.props.size-5)/2;
    return (
      <View style={[styles.icon, {
                    backgroundColor,
                    height: this.props.size,
                    width: this.props.size
                  },
                  this.props.style]}
      >
        <Text style={[styles.text, {fontSize}]}>{getInitials(this.props.text, this.props.single)}</Text>
      </View>
    );
  }
});

let styles = StyleSheet.create({
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff'
  }
})

module.exports = Initicon;
