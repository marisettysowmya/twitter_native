import {Image, SafeAreaView, StyleSheet, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {LoadingImage} from './assets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {login} from './api/Login';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import {AdminAllUsersPage, AdminBlueTickRequestPage, Login, Signup} from './pages/index';
import {AsyncStorageConstants} from './constants/AsyncStorageConstants';
import AdminDrawerNavigator from './navigation/AdminDrawerNavigator';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  async function handleLogin() {
    const data = await AsyncStorage.getItem(AsyncStorageConstants.CREDENTIALS);
    const credentials = JSON.parse(data);
    const isSuccessful = await login(credentials);
    setIsLoggedIn(isSuccessful);
    setIsLoading(false);
  }
  
  useEffect(() => {
    handleLogin();
  }, []);

  return (
    <>
      {isLoading ? (
        <SafeAreaView>
          <Image source={LoadingImage} style={styles.loadingImage} />
        </SafeAreaView>
      ) : !isLoggedIn ? (
        <Login />
      ) : (
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  loadingImage: {
    alignSelf: 'center',
    height: 50,
    width: 50,
    resizeMode: 'contain',
    marginVertical: '50%',
  },
});
