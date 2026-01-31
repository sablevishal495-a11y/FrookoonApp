<View style={styles.header}>
  <Logo size={50} />
</View>

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LocationScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Enable Device Location</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={{ color:'green', marginTop:20 }}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocationScreen;
