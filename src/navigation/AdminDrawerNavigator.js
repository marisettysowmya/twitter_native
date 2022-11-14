import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AdminAllUsersPage, AdminBlueTickRequestPage} from '../pages';

export default function AdminDrawerNavigator() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Admin Requests Page">
      <Drawer.Screen
        name="Admin ALl Users Page"
        component={AdminAllUsersPage}
        options={{drawerLabel: 'All Users'}}
      />
      <Drawer.Screen
        name="Admin Requests Page"
        component={AdminBlueTickRequestPage}
        options={{drawerLabel: 'Blue Tick Requests'}}
      />
    </Drawer.Navigator>
  );
}
