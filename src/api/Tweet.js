export const likeTweet = async data => {
  console.log(data);
  return new Promise(resolve => setTimeout(resolve, 100, true));
};

export const postComment = async data => {
  console.log(data);
  return new Promise(resolve => setTimeout(resolve, 100, true));
};

export const getTweetData = async data => {
  console.log(data);
  return new Promise(resolve => setTimeout(resolve, 100, {}));
};

export const postRetweet = async data => {
  console.log(data);
  return new Promise(resolve => setTimeout(resolve, 100, {}));
};
