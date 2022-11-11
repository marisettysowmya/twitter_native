import {Text} from 'react-native';
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const TabNavigator1 = () => {
  return <Text>Tab naivgaor screen 2</Text>;
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Contact">
      <Drawer.Screen name="Home" component={TabNavigator1} />
      <Drawer.Screen name="Contact" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
