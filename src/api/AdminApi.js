import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageConstants} from '../constants/AsyncStorageConstants';
import Axios from './Axios';

async function getToken() {
  const userId = await AsyncStorage.getItem(AsyncStorageConstants.USER_ID);
  const token = await AsyncStorage.getItem(AsyncStorageConstants.TOKEN);
  return {userId, token};
}

export const getAllUsers = async => {
  const {userId, token} = getToken();

  Axios.get('/user').then(data => console.log(data));
  return new Promise(resolve =>
    setTimeout(resolve, 100, [
      {id: 1, text: 'something is here'},
      {id: 2, text: 'something is here1'},
      {id: 3, text: 'something is here2'},
    ]),
  );
};

export const getAllBlueTickRequests = async => {
  const {userId, token} = getToken();

  return new Promise(resolve =>
    setTimeout(resolve, 5000, [
      {text: 'something is here'},
      {text: 'something is here1'},
      {text: 'something is here2'},
    ]),
  );
};

export const acceptBlueTickRequests = async => {
  const {userId, token} = getToken();

  return new Promise(resolve => setTimeout(resolve, 5000, true));
};

export const rejectBlueTickRequests = async data => {
  const {userId, token} = getToken();

  return new Promise(resolve => setTimeout(resolve, 5000, false));
};
