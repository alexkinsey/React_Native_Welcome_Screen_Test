import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import text from '../config/text';
import color from '../config/colors';

const SignUpScreen = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.title}>Sign Up</Text>
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
    backgroundColor: color.secondary,

    alignContent: 'center',
  },
});

export default SignUpScreen;
