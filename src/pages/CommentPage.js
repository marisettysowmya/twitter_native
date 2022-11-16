import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  FlatList,
  Text,
  Image,
} from 'react-native';
// import { TextInput } from "react-native-gesture-handler";
import CommentCard from '../components/CommentCard';
import {FeedString} from '../constants/Feed';
import {LoadingImage} from '../assets';
import {getUserComment} from '../api/Tweet';

export default function CommentPage() {
  const [commentFeed, setcommentFeed] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const isFocused = useIsFocused();
  async function fetchComment() {
    const data = await getUserComment();
    setcommentFeed(data);
    setIsLoading(false);
  }
  useEffect(() => {
    fetchComment();
  }, []);

  return (
    <>
      <View>
        {/* <CommentCard /> */}
        {isLoading ? (
          <Image source={LoadingImage} style={styles.loading} />
        ) : (
          <FlatList
            data={commentFeed}
            renderItem={({item}) => <CommentCard tweet={item} key={item.id} />}
            keyExtractor={item => item.id}
            ListEmptyComponent={
              <Text style={styles.emptyList}>
                {FeedString.EMPTY_BOOKMARK_FEED}
              </Text>
            }
          />
        )}
        <TextInput placeholder="comment" style={styles.commentbox} />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  commentbox: {
    backgroundColor: '#fff',
    padding: 10,
    color: '#000',
    borderRadius: 10,
    borderWidth: 1,
    // marginTop: 625
  },
});
