import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorageConstants from '../constants/AsyncStorageConstants';

async function getToken() {
  const userId = await AsyncStorage.getItem(AsyncStorageConstants.USER_ID);
  const token = await AsyncStorage.getItem(AsyncStorageConstants.TOKEN);
  return {userId, token};
}

export const updateSettings = async data => {
  const {userId, token} = await getToken();

  return new Promise(resolve => setTimeout(resolve, 100, true));
};

export const deactivateAccount = async data => {
  const {userId, token} = await getToken();

  return new Promise(resolve => setTimeout(resolve, 100, true));
};
