import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageConstants} from '../constants/AsyncStorageConstants';
import Axios from './Axios';

async function getToken() {
  const userId = await AsyncStorage.getItem(AsyncStorageConstants.USER_ID);
  const token = await AsyncStorage.getItem(AsyncStorageConstants.TOKEN);
  return {userId, token};
}

export const likeTweet = async tweetId => {
  const {userId, token} = await getToken();
  return Axios.post(`/${userId}/tweets/${tweetId}`, {}).then(res => {
    console.log(res.data);
    return res.data;
  });
};
// export const getUserComment = async data =>{
//   const {userId, token} = await getToken();
//   return new Promise(resolve=> 
//     setTimeout(resolve, 5000,[
//       {id: 1, text: 'something is here'},
//       {id: 2, text: 'something is here1'},
//       {id: 3, text: 'something is here2'},
//     ]),
//   ); 
// };
export const getUserComment = async data => {
  const {userId, token} = await getToken();
  const tweetId=9
  return Axios.get(`/user/tweets/${tweetId}/comments`).then(res =>{
    console.log(res.data);
    return res.data;
  });
};

export const postComment = async tweetId => {
  const {userId, token} = await getToken();

  console.log(tweetId);
  return new Promise(resolve => setTimeout(resolve, 100, true));
};

export const getTweetData = async tweetId => {
  const {userId, token} = await getToken();

  return new Promise(resolve => setTimeout(resolve, 100, {}));
};

export const postRetweet = async (tweetId, tweet) => {
  const {userId, token} = await getToken();
  return Axios.post(`/${userId}/retweets`, {tweet}).then(res => {
    console.log(res.data);
    return res.data;
  });
};

export const postTweet = async tweet => {
  const {userId, token} = await getToken();
  return Axios.post(`/${userId}/tweets`, {tweet}).then(res => {
    console.log(res.data);
    return res.data;
  });
};
