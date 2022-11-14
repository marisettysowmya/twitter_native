import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageConstants} from '../constants/AsyncStorageConstants';

export const login = async data => {
  console.log(data);
  await AsyncStorage.setItem(AsyncStorageConstants.USER_ID, '1');
  await AsyncStorage.setItem(AsyncStorageConstants.TOKEN, 'token');
  await AsyncStorage.setItem(AsyncStorageConstants.TOKEN, 'token');

  return new Promise(resolve => setTimeout(resolve, 100, true));
};

export const signUp = async data => {
  console.log(data);
  return new Promise(resolve => setTimeout(resolve, 100, true));
};
