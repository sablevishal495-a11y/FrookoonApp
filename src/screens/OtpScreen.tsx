import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const OtpScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const phone = route.params?.phone || '';

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Verify OTP</Text>

        <View style={{ width: 30 }} />
      </View>

      {/* Title */}
      <Text style={styles.title}>Verify OTP</Text>

      <Text style={styles.subtitle}>
        Send To +91-{phone}
      </Text>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
    paddingTop: 50,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 30,
  },

  back: {
    fontSize: 24,
  },

  headerTitle: {
    color: '#FF7A00',
    fontWeight: '700',
    fontSize: 16,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    color: '#444',
  },
});
