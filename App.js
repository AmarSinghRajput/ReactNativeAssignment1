import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from './src/screens/landingScreen';
import TabBarNavigator from './src/screens/tabbarnavigator';
import LoginScreen from './src/screens/loginScreen';
import SignUpScreen from './src/screens/signupScreen';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="landing">
        <Stack.Screen
          options={{headerShown: false}}
          name="landing"
          component={LandingScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="signup"
          component={SignUpScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="tabNavigator"
          component={TabBarNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
