import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageConstants} from '../constants/AsyncStorageConstants';
import Axios from './Axios';

async function getToken() {
  const userId = await AsyncStorage.getItem(AsyncStorageConstants.USER_ID);
  const token = await AsyncStorage.getItem(AsyncStorageConstants.TOKEN);
  return {userId, token};
}

export const updateUserDetails = async user => {
  const {userId, token} = await getToken();
  return Axios.post(`/${userId}/user`, {user}).then(res => {
    return res.data;
  });
};

export const getUserData = async user => {
  let {userId, token} = await getToken();

  if (user) userId = user;

  return Axios.get(`/user/${userId}`).then(res => {
    return res.data;
  });
};

export const getUserTweets = async user => {
  let {userId, token} = await getToken();

  if (user) userId = user;

  return Axios.get(`/user/${userId}/tweets`).then(res => {
    return res.data;
  });
};
