import React, {Component} from 'react';
import {Image, View, StyleSheet} from 'react-native';

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={splashStyle.containerViewStyle}>
        <Image
          style={{
            alignSelf: 'center',
          }}
          source={require('../../assets/spashImage.png')}
        />        
      </View>
    );
  }
}

const splashStyle = StyleSheet.create({
  containerViewStyle: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
});
