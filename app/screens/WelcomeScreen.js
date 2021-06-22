import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

function WelcomeScreen(props) {
  return (
    <ImageBackground style={styles.background} source={require('../assets/WelcomeScreenBackground.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.title}>Sell what you don't need!</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.signUpButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    resizeMode: 'contain',
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
    width: 250,
    textAlign: 'center',
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 7,
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
  },
  signUpButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecfc4',
  },
});

export default WelcomeScreen;
