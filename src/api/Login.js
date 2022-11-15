import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageConstants} from '../constants/AsyncStorageConstants';
import Axios from './Axios';

export const login = async data => {
  fetch(
    `https://e7e7-182-156-218-98.in.ngrok.io/login?username=foo&password=bar`,
    {
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'include', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        cookie: 'JSESSIONID=81D736A0F0FFA7B6F78642E11F2D6BC4',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  )
    // .then(res => res.json())
    .then(res => console.log('fetch'));
  const xy = await Axios.post(`/login?username=foo&password=bar`, {
    withCredentials: true,
  })
    .then(res => {
      console.log('axios');
      // console.log(res.request.responseHeaders);
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

export const signUp = async data => {
  console.log(data);
  return new Promise(resolve => setTimeout(resolve, 100, true));
};
