import {Text} from 'react-native';
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import {EditProfilePage, ProfilePage, SettingsPage} from '../pages';

const Drawer = createDrawerNavigator();

const TabNavigator1 = () => {
  return <Text>Tab naivgaor screen 2</Text>;
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Feed Page">
      <Drawer.Screen
        name="Feed Page"
        component={TabNavigator}
        options={{drawerLabel: 'Home'}}
      />
      <Drawer.Screen name="Profile" component={ProfilePage} />
      <Drawer.Screen name="Settings" component={SettingsPage} />
      <Drawer.Screen
        name="Edit Profile Page"
        component={EditProfilePage}
        options={{drawerLabel: 'Edit profile'}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
