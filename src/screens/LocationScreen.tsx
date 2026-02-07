import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../components/logo';

const LocationScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>

      {/* Header Logo */}


      <Text style={styles.title}>Enable Device Location</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    position: 'absolute',
    top: 50,
  },

  title: {
    fontSize: 18,
    marginBottom: 20,
  },

  button: {
    backgroundColor: 'green',
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 8,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});