import {Image, SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {imageLogo, LoadingImage} from './assets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {login} from './api/Login';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import {Login} from './pages/index';
import {AsyncStorageConstants} from './constants/AsyncStorageConstants';
import {LoginNavigator} from './navigation/LoginNavigator';
import AdminDrawerNavigator from './navigation/AdminDrawerNavigator';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  async function handleLogin() {
    const data = await AsyncStorage.getItem(AsyncStorageConstants.CREDENTIALS);
    const credentials = JSON.parse(data);
    if (credentials) {
      const isSuccessful = await login(credentials);
      setIsLoggedIn(isSuccessful);
    }
    setIsLoading(false);
  }
  useEffect(() => {
    handleLogin();
  }, []);

  return (
    <>
      {isLoading ? (
        <SafeAreaView style = {{flex: 1, justifyContent: 'center'}}>
          <Image source={imageLogo} style={styles.loadingImage} />
        </SafeAreaView>
      ) : (
        <NavigationContainer>
          {!isLoggedIn ? <LoginNavigator /> : <DrawerNavigator />}
        </NavigationContainer>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  loadingImage: {
    alignSelf: 'center',
    height: 120,
    width: 120,
    resizeMode: 'contain',
    // marginVertical: '50%',
    // justifyContent: 'center'
  },
});