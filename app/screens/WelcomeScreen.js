import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, SafeAreaView } from 'react-native';

import colors from '../config/colors';

function WelcomeScreen({ navigation }) {
  const loginPressed = () => {
    navigation.navigate('Login');
  };
  const signUpPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ImageBackground resizeMode="cover" style={styles.background} source={require('../assets/WelcomeScreenBackground.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.title}>A world of interior design at your fingers</Text>
      </View>
      <SafeAreaView style={styles.loginContainer}>
        <View style={styles.loginButton}>
          <Button color={colors.white} style={styles.button} title="Login" onPress={loginPressed} />
        </View>
        <View style={styles.signUpButton}>
          <Button color={colors.white} style={styles.button} title="Sign Up" onPress={signUpPressed} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 70,
  },
  logo: {
    width: 125,
    height: 125,
  },
  title: {
    paddingTop: 75,
    width: 350,
    textAlign: 'center',
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 15,
  },
  loginContainer: {
    width: '90%',
    flexDirection: 'row',
  },
  loginButton: {
    justifyContent: 'center',
    flex: 1,
    borderTopLeftRadius: 20,
    borderBottomStartRadius: 20,
    height: 70,
    backgroundColor: colors.primary,
  },
  signUpButton: {
    justifyContent: 'center',
    flex: 1,
    borderTopRightRadius: 20,
    borderBottomEndRadius: 20,
    height: 70,
    backgroundColor: colors.secondary,
  },
  button: {
    flex: 1,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
