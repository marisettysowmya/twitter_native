import {Text, Image, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {LoadingImage} from '../assets';
import {TweetCard} from '../components';
import {getUserBookmarkedFeed} from '../api/Feed';
import {useIsFocused} from '@react-navigation/native';
import {FeedString} from '../constants/Feed';

let userId = 1;
export default function BookMarkPage() {
  const [bookMarkFeed, setBookMarkFeed] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const isFocused = useIsFocused();
  async function fetchFeed() {
    const data = await getUserBookmarkedFeed(userId);
    // console.log(data);
    setBookMarkFeed(data);
    setIsLoading(false);
  }
  useEffect(() => {
    fetchFeed();
    console.log('called');
  }, [isFocused]);

  return (
    <>
      {isLoading ? (
        <Image source={LoadingImage} style={styles.loading} />
      ) : (
        <FlatList
          data={bookMarkFeed}
          renderItem={({item}) => (
            <TweetCard msg={item.bookmarkId} key={item.id} tweet={item.tweet} />
          )}
          keyExtractor={item => item.id}
          ListEmptyComponent={
            <Text style={styles.emptyList}>
              {FeedString.EMPTY_BOOKMARK_FEED}
            </Text>
          }
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  emptyList: {
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 100,
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  loading: {
    alignSelf: 'center',
    height: 50,
    width: 50,
    resizeMode: 'contain',
    marginVertical: '50%',
  },
});
