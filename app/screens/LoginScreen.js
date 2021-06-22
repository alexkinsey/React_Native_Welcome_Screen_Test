import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import text from '../config/text';
import color from '../config/colors';

const LoginScreen = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.title}>Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: text.Title,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    paddingTop: 10,
  },
  background: {
    flex: 1,
    backgroundColor: color.primary,

    alignContent: 'center',
  },
});

export default LoginScreen;
