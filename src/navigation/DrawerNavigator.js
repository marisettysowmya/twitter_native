import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import {
  EditProfilePage,
  Logout,
  ProfilePage,
  SettingsPage,
  UserListPage,
} from '../pages';
import {Image, StyleSheet} from 'react-native';
import {
  imageEditProfile,
  imageHome,
  imageProfilePageIcon,
  imageSettings,
} from '../assets';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Feed Page">
      <Drawer.Screen
        name="Feed Page"
        component={TabNavigator}
        options={{
          drawerLabel: 'Home',
          drawerLabelStyle: {fontSize: 18, fontWeight: 'bold'},
          drawerIcon: ({}) => (
            <Image source={imageHome} style={styles.homeIcon} />
          ),
          drawerItemStyle: {borderRadius: 50, marginTop: 20},
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          drawerLabel: 'Profile Page',
          drawerIcon: ({}) => (
            <Image source={imageProfilePageIcon} style={styles.homeIcon} />
          ),
          drawerLabelStyle: {fontSize: 18, fontWeight: 'bold'},
          drawerItemStyle: {borderRadius: 50, marginTop: 0},
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsPage}
        options={{
          drawerLabel: 'Settings',
          drawerIcon: ({}) => (
            <Image source={imageSettings} style={styles.homeIcon} />
          ),
          drawerLabelStyle: {fontSize: 18, fontWeight: 'bold'},
          drawerItemStyle: {borderRadius: 50, marginTop: 0},
        }}
      />
      <Drawer.Screen
        name="Edit Profile Page"
        component={EditProfilePage}
        options={{
          drawerLabel: 'Edit profile',
          drawerIcon: ({}) => (
            <Image source={imageEditProfile} style={styles.homeIcon} />
          ),
          drawerLabelStyle: {fontSize: 18, fontWeight: 'bold'},
          drawerItemStyle: {borderRadius: 50, marginTop: 0},
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          drawerLabel: 'Logout',
          drawerIcon: ({}) => (
            <Image source={imageEditProfile} style={styles.homeIcon} />
          ),
          drawerLabelStyle: {fontSize: 18, fontWeight: 'bold'},
          drawerItemStyle: {borderRadius: 50, marginTop: 0},
        }}
      />
      <Drawer.Screen
        name="Follower Page"
        component={UserListPage}
        options={{
          drawerItemStyle: {height: 0},
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  homeIcon: {
    height: 30,
    width: 30,
    marginVertical: 15,
    marginLeft: 15,
  },

  notificationsIcon: {
    height: 25,
    width: 25,
  },

  messagesIcon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },

  bookmarksIcon: {
    height: 25,
    width: 25,
  },
});

export default DrawerNavigator;
