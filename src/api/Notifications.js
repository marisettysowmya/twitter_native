import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageConstants} from '../constants/AsyncStorageConstants';

async function getToken() {
  const userId = await AsyncStorage.getItem(AsyncStorageConstants.USER_ID);
  const token = await AsyncStorage.getItem(AsyncStorageConstants.TOKEN);
  return {userId, token};
}

export const getUserNotifications = async data => {
  const {userId, token} = getToken();

  return new Promise(resolve =>
    setTimeout(resolve, 5000, [
      {id: 1, text: 'something is here'},
      {id: 2, text: 'something is here1'},
      {id: 3, text: 'something is here2'},
    ]),
  );
};
