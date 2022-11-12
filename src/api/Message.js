export const getAllUserMessages = async userId => {
  return new Promise(resolve =>
    setTimeout(resolve, 5000, [
      {text: 'something is here'},
      {text: 'something is here1'},
      {text: 'something is here2'},
    ]),
  );
};

export const getSingleChatMessages = async userId => {
  return new Promise(resolve =>
    setTimeout(resolve, 5000, [
      {text: 'something is here'},
      {text: 'something is here1'},
      {text: 'something is here2'},
    ]),
  );
};

export const postMessage = async data => {
  return new Promise(resolve => setTimeout(resolve, 5000, true));
};
