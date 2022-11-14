import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorageConstants from '../constants/AsyncStorageConstants';

async function getToken() {
  const userId = await AsyncStorage.getItem(AsyncStorageConstants.USER_ID);
  const token = await AsyncStorage.getItem(AsyncStorageConstants.TOKEN);
  return {userId, token};
}

export const likeTweet = async data => {
  const {userId, token} = getToken();

  console.log(data);
  return new Promise(resolve => setTimeout(resolve, 100, true));
};

export const postComment = async data => {
  const {userId, token} = getToken();

  console.log(data);
  return new Promise(resolve => setTimeout(resolve, 100, true));
};

export const getTweetData = async data => {
  const {userId, token} = getToken();

  console.log(data);
  return new Promise(resolve => setTimeout(resolve, 100, {}));
};

export const postRetweet = async data => {
  const {userId, token} = getToken();

  console.log(data);
  return new Promise(resolve => setTimeout(resolve, 100, {}));
};
