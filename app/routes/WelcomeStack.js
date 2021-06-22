import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const screens = {
  Welcome: {
    screen: WelcomeScreen,
  },
  Login: {
    screen: LoginScreen,
  },
  SignUp: {
    screen: SignUpScreen,
  },
};

const WelcomeStack = createStackNavigator(screens);

export default createAppContainer(WelcomeStack);
