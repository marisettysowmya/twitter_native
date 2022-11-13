import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {getTweetData, likeTweet, postComment, postRetweet} from '../api/Tweet';
import {
  imageProfile,
  imageTweet,
  imageReply,
  imageRetweet,
  imageLike,
} from '../assets/index';

// handle case of long tweet messages card is getting distorted (use flex for design)
// add a defualt profile picture in case user doesn't has one set
// handle case of multiple images being tagged in a tweet
// wrap image in a container and add resizeMode contain to images

// instead of hard coded values use props for displaying data
const props = {
  tweet: {
    name: '',
    handle: '',
    tweet: '',
    images: ['', ''],
    likes: 10,
    retweets: 23,
    commments: 876,
  },
};

function TweetCard(props) {
  const [tweetData, setTweetData] = useState(props.tweet);

  async function fetchTweet() {
    const tweet = await getTweetData();
    setTweetData(tweet);
  }
  async function handleCommentButtonClick() {
    await postComment();
    await fetchTweet();
  }
  async function handleRetweetButtonClick() {
    // TODO - handle retweet click option
    await postRetweet();
  }
  async function handleLikeButtonClick() {
    await likeTweet();
    await fetchTweet();
  }
  return (
    <View style={styles.tweetContainer}>
      <Image style={styles.profileImage} source={imageProfile}></Image>
      <View style={styles.details}>
        <View style={styles.tweetHeader}>
          <Text style={styles.username}>Nitesh</Text>
          <Text style={styles.handle}>@Kadian</Text>
        </View>
        <View style={styles.tweet}>
          <Text style={styles.tweetMessage}>Hello World</Text>
          <Image style={styles.tweetImage} source={imageTweet}></Image>
        </View>
        <View style={styles.tweetFooter}>
          <TouchableOpacity onPress={handleCommentButtonClick}>
            <View style={styles.footerFields}>
              <Image style={styles.tweetIcons} source={imageReply}></Image>
              <Text>66</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRetweetButtonClick}>
            <View style={styles.footerFields}>
              <Image style={styles.tweetIcons} source={imageRetweet}></Image>
              <Text>1,606</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLikeButtonClick}>
            <View style={styles.footerFields}>
              <Image style={styles.tweetIcons} source={imageLike}></Image>
              <Text>27,808</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tweetContainer: {
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    flexDirection: 'row',
    marginVertical: 5,
    margin: 5,
  },
  profileImage: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginVertical: 20,
    marginLeft: 10,
  },
  details: {
    marginRight: 10,
    marginTop: 10,
  },
  tweetHeader: {
    flexDirection: 'row',
    marginTop: 10,
  },
  username: {
    alignSelf: 'center',
    paddingLeft: 10,
    paddingRight: 5,
    fontWeight: 'bold',
    color: 'black',
  },

  handle: {
    alignSelf: 'center',
  },

  tweet: {
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 5,
  },

  tweetMessage: {
    color: 'black',
  },
  tweetImage: {
    height: 280,
    width: 280,
    marginTop: 20,
    borderRadius: 10,
  },
  tweetFooter: {
    marginVertical: 10,
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  footerFields: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tweetIcons: {
    height: 30,
    marginRight: 5,
    width: 30,
  },
});

export default TweetCard;
