import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = ({ size = 120 }) => {
  return (
    <Image
      source={require('../assets/logo.png')}
      style={{ width: size, height: size }}
      resizeMode="contain"
    />
  );
};

export default Logo;
