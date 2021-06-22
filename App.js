import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen'
import Navigator from './app/routes/WelcomeStack'

export default function App() {
  return (
    <Navigator />
  );
}

