const {Component} = require('react/cjs/react.production.min');

import React, {Component} from 'react';
import {
  FlatList,
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export default class HomeScreenFlatCell extends Component {
  render() {
    return (
      <View style={{height: deviceHeight * 0.3, backgroundColor: 'yellow'}}>
        <Text>Hello world</Text>
      </View>
    );
  }
}
