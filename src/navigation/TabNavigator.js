import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BookMarkPage, Home, NotificationsPage} from '../pages';
import {ProfilePicture} from '../assets';
import {MessagesStackNavigator} from './StackNavigator';

const Tab = createBottomTabNavigator();

//  TODO-tabBarBadge: 3, for checking the number of messages and notifications

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({}) => (
            <Image source={ProfilePicture} style={styles.icon} />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationsPage"
        component={NotificationsPage}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({}) => (
            <Image source={ProfilePicture} style={styles.icon} />
          ),
        }}
      />
      <Tab.Screen
        name="MessagesPage"
        component={MessagesStackNavigator}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({}) => (
            <Image source={ProfilePicture} style={styles.icon} />
          ),
        }}
      />
      <Tab.Screen
        name="BookMarkPage"
        component={BookMarkPage}
        options={{
          tabBarLabel: 'Bookmarks',
          tabBarIcon: ({}) => (
            <Image source={ProfilePicture} style={styles.icon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  icon: {height: 15, width: 15},
});
