import React, {Component} from 'react';
import {
  Alert,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LoginScreen from './loginScreen';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export default class LandingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.showSignUpScreen = this.showSignUpScreen.bind(this);
    this.showLoginScreen = this.showLoginScreen.bind(this);
  }
  showCredentials() {
    Alert.alert(
      `username is ${this.state.username} and password is ${this.state.password}`,
    );
  }
  showSignUpScreen() {
    this.props.navigation.navigate('signup');
  }
  showLoginScreen() {
    this.props.navigation.navigate('login');
  }
  render() {
    return (
      <View style={landingStyles.backgroundContainer}>
        <Image
          style={{
            zIndex: -1,
            width: deviceWidth,
            height: deviceHeight * 1.06,
            position: 'absolute',
          }}
          source={require('../../assets/landingBackground.jpg')}
        />
        <View
          style={{
            justifyContent: 'center',
            marginVertical: deviceHeight * 0.25,
          }}>
          <Text
            style={{
              fontSize: 35,
              color: 'yellow',
              fontFamily: 'Countryside-YdKj',
              alignSelf: 'center',
            }}>
            Making Memories
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: 'white',
              fontFamily: 'Countryside-YdKj',
              marginTop: -12,
              alignSelf: 'center',
            }}>
            Travel with people, make new friends
          </Text>
        </View>

        <View style={landingStyles.buttonsContainer}>
          <TouchableOpacity
            style={{
              ...landingStyles.touchableStyles,
              ...{backgroundColor: 'white'},
            }}
            onPress={this.showSignUpScreen}>
            <Text
              style={{
                alignSelf: 'center',
                color: 'blue',
                fontSize: 16,
              }}>
              Sign up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...landingStyles.touchableStyles,
              ...{backgroundColor: 'blue'},
            }}
            onPress={this.showLoginScreen}>
            <Text
              style={{
                alignSelf: 'center',
                color: 'white',
                fontSize: 16,
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const landingStyles = StyleSheet.create({
  backgroundContainer: {
    justifyContent: 'flex-end',
    flex: 1,
    // alignContent: 'flex-start',
  },
  buttonsContainer: {
    justifyContent: 'flex-end',
    flex: 1,
    marginBottom: deviceHeight * 0.1,
  },
  touchableStyles: {
    borderRadius: 20,
    alignSelf: 'center',
    height: 40,
    width: deviceWidth * 0.7,
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 16,
  },
});
