import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BookMarkPage, Home, NotificationsPage} from '../pages';
import {bellIcon, Bookmark, HomeIcon, MessageIcon, NotificationIcon, ProfilePicture} from '../assets';
import {StackNavigator} from './StackNavigator';

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
            <Image source={HomeIcon} style={styles.icon} />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationsPage"
        component={NotificationsPage}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({}) => (
            <Image source={NotificationIcon} style={styles.icon} />
          ),
        }}
      />
      <Tab.Screen
        name="MessagesPage"
        component={StackNavigator}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({}) => (
            <Image source={MessageIcon} style={styles.icon} />
          ),
        }}
      />
      <Tab.Screen
        name="BookMarkPage"
        component={BookMarkPage}
        options={{
          tabBarLabel: 'Bookmarks',
          tabBarIcon: ({}) => (
            <Image source={Bookmark} style={styles.icon} />
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