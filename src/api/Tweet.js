import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageConstants} from '../constants/AsyncStorageConstants';
import Axios from './Axios';

async function getToken() {
  const userId = await AsyncStorage.getItem(AsyncStorageConstants.USER_ID);
  const token = await AsyncStorage.getItem(AsyncStorageConstants.TOKEN);
  return {userId, token};
}

export const likeTweet = async tweetId => {
  const {userId = 8, token} = await getToken();
  console.log(`/${userId}/tweets/${tweetId}`, 'url');
  return Axios.post(`/user/${userId}/tweets/${tweetId}`, {
    withCredentials: true,
    auth: {
      username: 'foo',
      password: 'bar',
    },
  })
    .then(res => {
      return res.data;
    })
    .catch(e => console.log(e, 'error'));
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
  const tweetId=7
  return Axios.get(`/user/tweets/${tweetId}/comments`).then(res =>{
    console.log("sssssssssssssssssssss",res.data);
    return res.data;
  });
};

export const postComment = async data => {
  // const {userId, token} = await getToken();
  console.log(data)
  return Axios.post(`/user/tweets/comments`, data).then(res => {
    return res.data;
  }).catch(error => console.log(error.response.request._response));
  console.log(tweetId);
  return new Promise(resolve => setTimeout(resolve, 100, true));
};

export const getTweetData = async tweetId => {
  const {userId, token} = await getToken();

  return Axios.get(`/user/tweets/${tweetId}`).then(res => {
    return res.data;
  });
};

export const postRetweet = async (tweetId, tweet) => {
  const {userId, token} = await getToken();
  return Axios.post(`/${userId}/retweets`, {tweet}).then(res => {
    return res.data;
  });
};

export const postTweet = async tweetText => {
  const {userId, token} = await getToken();
  return Axios.post(`/user/tweets`, {tweet}).then(res => {
    return res.data;
  }).catch((error) => console.log( error.response.request._response ) );;
};

export const addBookmark = async tweetId => {
  const {userId, token} = await getToken();
  return Axios.post(`/user/bookmark`, {
    tweetId: tweetId,
  }).then(res => {
    return res.data;
  });
};
