import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, SafeAreaView } from 'react-native';

import colors from '../config/colors';

function WelcomeScreen(props) {
  return (
    <ImageBackground resizeMode="cover" style={styles.background} source={require('../assets/WelcomeScreenBackground.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.title}>Sell what you don't need!</Text>
      </View>
      <SafeAreaView style={styles.loginContainer}>
        <View style={styles.loginButton}>
          <Button color={colors.white} style={styles.button} title="Login" onPress={() => console.log('press')} />
        </View>
        <View style={styles.signUpButton}>
          <Button color={colors.white} style={styles.button} title="Sign Up" onPress={() => console.log('press')} />
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
    width: 250,
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
    fontWeight: 'bold'
  }
});

export default WelcomeScreen;
