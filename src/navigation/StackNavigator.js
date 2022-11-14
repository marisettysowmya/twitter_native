import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AddTweetPage, ChatPage, MessagesPage} from '../pages';

const Stack = createStackNavigator();

const StackNavigator = () => {
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
        component={ChatPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Add Tweet Page"
        component={AddTweetPage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export {StackNavigator};
