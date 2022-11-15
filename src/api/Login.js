import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageConstants} from '../constants/AsyncStorageConstants';
import Axios from './Axios';

export const login = async data => {
  console.log(data);
  const xy = await Axios.post(
    `/login?username=foo&password=bar`,
  )
    .then(res => {
      console.log(res.headers);
    })
    .catch(e => console.log(e));

  await AsyncStorage.setItem(AsyncStorageConstants.USER_ID, '13');
  await AsyncStorage.setItem(
    AsyncStorageConstants.TOKEN,
    'JSESSIONID=F3002E8F28A3B75976111B62942D08F6',
  );
  await AsyncStorage.setItem(AsyncStorageConstants.USER_DETAILS, 'userObject');
  return new Promise(resolve => setTimeout(resolve, 100, true));
};

export const signUp = async (user) => {
  console.log(user)
  Axios.post(`/signup/${user}`).then(res => console.log(res));
  // console.log(res);
  return new Promise(resolve => setTimeout(resolve, 100, true));
};
