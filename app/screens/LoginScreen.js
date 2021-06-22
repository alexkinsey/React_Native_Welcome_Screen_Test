import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import text from '../config/text'

const LoginScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: text.Title,
  }
})

export default LoginScreen;