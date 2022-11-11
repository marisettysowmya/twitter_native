import {SortTypes} from '../constants/Feed';

export const getUserFeed = async userId => {
  return new Promise(resolve =>
    setTimeout(resolve, 5000, [
      {text: 'something is here'},
      {text: 'something is here1'},
      {text: 'something is here2'},
    ]),
  );
};

export const getSortedFeed = async ({param, userId}) => {
  if (param === SortTypes.DATE) {
    const feed = await getUserFeed(userId);
    let updatedFeed = feed.sort((a, b) => {
      a.createdAt > b.createdAt;
    });
    return updatedFeed;
  }
  return new Promise(resolve =>
    setTimeout(resolve, 100, [
      {text: 'something is here12'},
      {text: 's2356432'},
      {text: 'somethi24354236273463g is here2'},
    ]),
  );
};

export const getUserBookmarkedFeed = async userId => {
  return new Promise(resolve =>
    setTimeout(resolve, 5000, [
      {text: 'something is here'},
      {text: 'something is here1'},
      {text: 'something is here2'},
    ]),
  );
};
