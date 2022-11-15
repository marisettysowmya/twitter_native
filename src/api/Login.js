import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageConstants} from '../constants/AsyncStorageConstants';
import Axios from './Axios';


export const login = async (name, password) => {
  Axios.post(`/login?username=${name}&password=${password}`).then(res => console.log("this", res));
  // Axios.post('/login',data).then(data => console.log(data));

  console.log("data");
  await AsyncStorage.setItem(AsyncStorageConstants.USER_ID, '1');
  await AsyncStorage.setItem(AsyncStorageConstants.TOKEN, 'token');
  await AsyncStorage.setItem(AsyncStorageConstants.TOKEN, 'token');

  // return new Promise(resolve => setTimeout(resolve, 100, true));
};

export const signUp = async (user) => {
  console.log(user)
  Axios.post(`/signup/${user}`).then(res => console.log(res));
  // console.log(res);
  return new Promise(resolve => setTimeout(resolve, 100, true));
};
