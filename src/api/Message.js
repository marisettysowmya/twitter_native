import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageConstants} from '../constants/AsyncStorageConstants';
import Axios from './Axios';

async function getToken() {
  const userId = await AsyncStorage.getItem(AsyncStorageConstants.USER_ID);
  const token = await AsyncStorage.getItem(AsyncStorageConstants.TOKEN);
  return {userId, token};
}

export const getAllUserMessages = async data => {
  const {userId, token} = await getToken();

  return Axios.pod
};

export const getSingleChatMessages = async data => {
  const {userId, token} = await getToken();

  return new Promise(resolve =>
    setTimeout(resolve, 5000, [
      {text: 'something is here'},
      {text: 'something is here1'},
      {text: 'something is here2'},
    ]),
  );
};

export const postMessage = async data => {
  const {userId, token} = await getToken();

  return new Promise(resolve => setTimeout(resolve, 5000, true));
};
