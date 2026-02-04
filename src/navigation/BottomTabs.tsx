import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const Dummy = ({ label }: any) => <Text>{label}</Text>;

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{ title: 'HOME' }}
      />

      <Tab.Screen
        name="Categories"
        children={() => <Dummy label="Categories" />}
      />

      <Tab.Screen
        name="Cart"
        children={() => <Dummy label="Cart" />}
      />

      <Tab.Screen
        name="Profile"
        children={() => <Dummy label="Profile" />}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
