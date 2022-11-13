export const getUserNotifications = async userId => {
  return new Promise(resolve =>
    setTimeout(resolve, 5000, [
      {text: 'something is here'},
      {text: 'something is here1'},
      {text: 'something is here2'},
    ]),
  );
};
