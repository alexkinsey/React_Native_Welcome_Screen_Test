import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import text from '../config/text'

const SignUpScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Sign Up</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: text.Title,
  }
})

export default SignUpScreen;