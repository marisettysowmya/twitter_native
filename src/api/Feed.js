import {SortTypes} from '../constants/Feed';

export const getUserFeed = async userId => {
  return new Promise(resolve =>
    setTimeout(resolve, 5000, [
      {id: 1, text: 'something is here'},
      {id: 2, text: 'something is here1'},
      {id: 3, text: 'something is here2'},
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
      {id: 1, text: 'something is here12'},
      {id: 3, text: 's2356432'},
      {id: 2, text: 'somethi24354236273463g is here2'},
    ]),
  );
};

export const getUserBookmarkedFeed = async userId => {
  return new Promise(resolve =>
    setTimeout(resolve, 5000, [
      {id: 1, text: 'something is here'},
      {id: 2, text: 'something is here1'},
      {id: 3, text: 'something is here2'},
    ]),
  );
};
