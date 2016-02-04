let React = require('react-native')
let Initicon = require('./index')

let {
 View,
 Text,
 StyleSheet,
 PropTypes
} = React;

class NativeIniticon extends Initicon {
  render() {
    return (
      <View style={[styles.icon, {
                    backgroundColor: this._getBackgroundColor(),
                    height: this.props.size,
                    width: this.props.size,
                    borderRadius: this.props.size/2
                  },
                  this.props.style]}
      >
        <Text style={[styles.text, {fontSize: this._getFontSize()}]}>{this._getInitials()}</Text>
      </View>
    );
  }
};

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

module.exports = NativeIniticon;
