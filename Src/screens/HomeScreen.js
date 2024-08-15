// src/screens/HomeScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import Spinner from 'react-native-loading-spinner-overlay';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const handleNavigation = (screen) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate(screen);
    }, 2000); 
  };

  return (
    <LinearGradient
      colors={['#1E3C72', '#2A5298']}
      style={styles.container}
    >
      <Spinner visible={loading} textContent={'Loading...'} textStyle={styles.spinnerTextStyle} />

      <Animatable.Text
        animation="fadeInDown"
        duration={1500}
        style={styles.title}
      >
        Welcome to Storea
      </Animatable.Text>

      <LottieView
        source={require('../Assets/Animation/cat.json')} // Replace with your Lottie file path
        autoPlay
        loop
        style={styles.lottie}
      />

      <Animatable.Text
        animation="fadeInUp"
        duration={2000}
        style={styles.subtitle}
      >
        Your one-stop shop for everything!
      </Animatable.Text>

      <Animatable.View animation="bounceIn" delay={500} style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonProducts]} onPress={() => handleNavigation('Products')}>
          <Text style={styles.buttonText}>Go to Products</Text>
        </TouchableOpacity>
      </Animatable.View>

      <Animatable.View animation="bounceIn" delay={1000} style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonCart]} onPress={() => handleNavigation('Cart')}>
          <Text style={styles.buttonText}>View Cart</Text>
        </TouchableOpacity>
      </Animatable.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 20,
    color: '#B0C4DE',
    marginBottom: 30,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  lottie: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  buttonContainer: {
    marginBottom: 20,
    width: '80%',
  },
  button: {
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 8,
  },
  buttonProducts: {
    backgroundColor: '#4682B4',
  },
  buttonCart: {
    backgroundColor: '#5F9EA0',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  spinnerTextStyle: {
    color: '#FFFFFF',
  },
});

export default HomeScreen;
