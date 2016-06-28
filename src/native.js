import React, {Component} from 'react';
import {
  PropTypes,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  getBackgroundColor,
  getFontSize,
  getInitials,
  defaultProps,
} from './shared';

class NativeIniticon extends Component {
  render() {
    let {props} = this
    return (
      <View style={[styles.icon, {
                    backgroundColor: getBackgroundColor(props),
                    height: this.props.size,
                    width: this.props.size,
                    borderRadius: this.props.size/2
                  },
                  this.props.style]}
      >
        <Text style={[styles.text, {fontSize: getFontSize(props)}]}>{getInitials(props)}</Text>
      </View>
    );
  }
};

NativeIniticon.propTypes = {
  text: React.PropTypes.string.isRequired,
  size: React.PropTypes.any.isRequired,
  seed: React.PropTypes.number,
  color: React.PropTypes.any,
  single: React.PropTypes.bool,
  saturation: React.PropTypes.string,
  brightness: React.PropTypes.string,
}

NativeIniticon.defaultProps = defaultProps;

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
})

module.exports = NativeIniticon;
