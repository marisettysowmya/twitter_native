import React from 'react';
import {Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BookMarkPage, Home} from '../pages';

const Tab = createBottomTabNavigator();

const MainStackNavigator1 = () => {
  return <Text>Tba navigator screen 2</Text>;
};
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Contact1" component={MainStackNavigator1} />
      <Tab.Screen name="BookMarkPage" component={BookMarkPage} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
