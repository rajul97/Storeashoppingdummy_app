// src/components/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';

const SplashScreenComponent = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
      navigation.replace('Home');
    }, 5000); 
  }, []);

  return (
    <LinearGradient
      colors={['#FF7E5F', '#FEB47B']}
      style={styles.container}
    >
      <LottieView
        source={require('../Assets/Animation/animeokone.json')} 
        loop
        style={styles.lottie}
      />
      <Text style={styles.title}>Welcome to Storea</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default SplashScreenComponent;
