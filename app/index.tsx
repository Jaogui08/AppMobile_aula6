import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './css/style';
import LottieView from 'lottie-react-native';
import { router } from 'expo-router';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/Water Loader.json")}
        style={{ width: "100%", height: "100%" }}
        autoPlay
        loop={false}
        onAnimationFinish={() => router.navigate('login')}
      />
      <StatusBar style="auto" />
    </View>
  );
}