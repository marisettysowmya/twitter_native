import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {logout} from '../api/User';

export default function Logout({navigation}) {
  async function handleLogout() {
    await logout();
    navigation.navigate('Login Page');
  }
  return (
    <View>
      <Text> Are you SUre you want to Logout..?</Text>

      <TouchableOpacity>
        <Text onPress={handleLogout}>Confirm</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text onPress={() => navigation.goBack()}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}
