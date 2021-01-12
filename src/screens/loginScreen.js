import React, {Component} from 'react';
import {
  Alert,
  View,
  Image,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.showCredentials = this.showCredentials.bind(this);
    this.loginUSer = this.loginUSer.bind(this);
    this.imagePressed = this.imagePressed.bind(this);
    this.signupPressed = this.signupPressed.bind(this);
  }
  imagePressed() {
    console.log('image pressed');
  }
  signupPressed() {
    this.props.navigation.navigate('signup');
    // Alert.alert('sign up pressed');
  }
  showCredentials() {
    Alert.alert(
      `username is ${this.state.username} and password is ${this.state.password}`,
    );
  }
  loginUSer() {
    if (this.state.username == 'amar' && this.state.password == 'wwwwww') {
      this.props.navigation.navigate('tabNavigator');
    } else {
      this.showCredentials();
    }
  }
  render() {
    return (
      <View style={loginStyles.containerViewStyle}>
        <Image
          style={{
            // zIndex: -1,
            width: deviceWidth,
            height: deviceHeight * 0.34,
            resizeMode: 'cover',
            position: 'absolute',
          }}
          source={require('../../assets/loginHeader.jpg')}
        />
        <View style={loginStyles.credentialViewStyle}>
          <Text
            style={{
              marginTop: 20,
              alignSelf: 'center',
              fontFamily: 'Countryside-YdKj',
              fontSize: 35,
            }}>
            Login
          </Text>
          <View style={loginStyles.credentialContainerViewStyle}>
            <View
              style={{
                flexDirection: 'column',
                height: 30,
              }}>
              <Text style={{fontSize: 16, margin: 4, color: 'gray'}}>
                username:{' '}
              </Text>
              <TextInput
                style={loginStyles.textFieldStyle}
                editable={true}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="please enter username"
                //   value={this.state.username}
                onChangeText={(userName) => this.setState({username: userName})}
              />
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginTop: 40,
                height: 30,
              }}>
              <Text style={{fontSize: 16, margin: 4, color: 'gray'}}>
                password:{' '}
              </Text>
              <TextInput
                style={loginStyles.textFieldStyle}
                editable={true}
                secureTextEntry={true}
                placeholder="please enter password"
                //   value={this.state.password}
                onChangeText={(pass) => this.setState({password: pass})}
              />
            </View>
            <TouchableOpacity style={{marginTop: 40, alignSelf: 'flex-end'}}>
              <Text>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={loginStyles.touchableStyles}
            onPress={this.loginUSer}>
            <Text style={{alignSelf: 'center', color: 'white', fontSize: 18}}>
              Login
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 40,
              alignSelf: 'center',
            }}>
            <Text>don't have an account?</Text>
            <TouchableOpacity onPress={this.signupPressed}>
              <Text style={{color: 'blue', marginLeft: 4}}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const loginStyles = StyleSheet.create({
  containerViewStyle: {
    // flex: 1,
  },
  credentialViewStyle: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: deviceHeight,
    backgroundColor: 'white',
    marginTop: deviceHeight * 0.28,
  },
  credentialContainerViewStyle: {
    alignSelf: 'center',
    width: deviceWidth * 0.8,
    borderRadius: 8,
  },
  textFieldStyle: {
    // backgroundColor: 'lightblue',
    alignSelf: 'stretch',
    borderBottomColor: 'blue',
    marginRight: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    fontSize: 13,
    borderTopWidth: 0,
    color: 'blue',
    borderBottomWidth: 1.5,
    marginTop: -6,
    textAlignVertical: 'center',
    justifyContent: 'center',
  },
  touchableStyles: {
    borderRadius: 27,
    alignSelf: 'center',
    width: deviceWidth * 0.7,
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 16,
    marginTop: 40,
    height: 54,
    backgroundColor: 'blue',
    width: deviceWidth * 0.6,
    alignItems: 'center',
    alignContent: 'center',
  },
});
