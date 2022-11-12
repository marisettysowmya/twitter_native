import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MessagesPage} from '../pages';

const Stack = createStackNavigator();

const MessagesStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="All Messages"
        component={MessagesPage}
        options={{
          title: 'All Messages',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            // textAlign: 'center',
          },
        }}
      />
      <Stack.Screen
        name="Chat Page"
        component={MessagesPage}
        options={{title: 'My home'}}
      />
    </Stack.Navigator>
  );
};

export {MessagesStackNavigator};
