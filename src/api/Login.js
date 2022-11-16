import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageConstants} from '../constants/AsyncStorageConstants';
import Axios from './Axios';

export const login = async data => {
  const xy = await Axios.post(
    `/login?username=${data.name}&password=${data.password}`,
    {
      withCredentials: true,
    },
  )
    .then(res => {
      return true;
    })
    .catch(e => {
      return false;
    });
  if (!xy) return xy;
  await AsyncStorage.setItem(AsyncStorageConstants.USER_ID, '13');
  await AsyncStorage.setItem(
    AsyncStorageConstants.TOKEN,
    'JSESSIONID=F3002E8F28A3B75976111B62942D08F6',
  );
  await AsyncStorage.setItem(AsyncStorageConstants.USER_DETAILS, 'userObject');
  // return new Promise(resolve => setTimeout(resolve, 100, true));
  return xy;
};

export const signUp = async user => {
  Axios.post('/signup', user['user'])
    .then(res => console.log('ssssssss', res.data))
    .catch(error => console.log(error.response.request._response));
  return new Promise(resolve => setTimeout(resolve, 100, true));
};
