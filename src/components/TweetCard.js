import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {getTweetData, likeTweet, postComment, postRetweet} from '../api/Tweet';
import {
  imageProfile,
  imageTweet,
  imageReply,
  imageRetweet,
  imageLike,
  imageDefault,
  imageVerified,
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

  let profilepic = 'set';
  let isVerified = 'set';

  const TweetImageRendering = props => {
    const noOfPics = props.noOfPics;
    if (noOfPics == 1) {
      return (
        <View style={styles.tweetImageContainer}>
          <Image style={styles.tweetImage} source={imageTweet}></Image>
        </View>
      );
    } else if (noOfPics == 2) {
      return (
        <View style={styles.tweetImageContainer}>
          <Image style={styles.tweetImage2_1} source={imageTweet}></Image>
          <Image style={styles.tweetImage2_2} source={imageTweet}></Image>
        </View>
      );
    } else if (noOfPics == 3) {
      return (
        <View style={styles.tweetImageContainer}>
          <Image style={styles.tweetImage3_1} source={imageTweet}></Image>
          <View style={styles.tweetImage3}>
            <Image style={styles.tweetImage3_2} source={imageTweet}></Image>
            <Image style={styles.tweetImage3_3} source={imageTweet}></Image>
          </View>
        </View>
      );
    } else if (noOfPics == 4) {
        return (
        <View style={styles.tweetImageContainer}>
            <View style={styles.tweetImage2}>
            <Image style={styles.tweetImage4_1} source={imageTweet}></Image>
          <Image style={styles.tweetImage4_2} source={imageTweet}></Image>
            </View>
          <View style={styles.tweetImage2}>
            <Image style={styles.tweetImage4_3} source={imageTweet}></Image>
            <Image style={styles.tweetImage4_4} source={imageTweet}></Image>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.tweetContainer}>
      <Image
        style={styles.profileImage}
        source={profilepic == 'set' ? imageProfile : imageDefault}></Image>
      <View style={styles.details}>
        <View style={styles.tweetHeader}>
          <Text style={styles.username}>Nitesh</Text>
          <Text style={styles.handle}>@Kadian</Text>
          <Image
            style={styles.verifiedImage}
            source={isVerified == 'set' ? imageVerified : ''}
          />
        </View>
        <View style={styles.tweet}>
          <View>
            <Text style={styles.tweetMessage}>Hello World</Text>
          </View>
          <TweetImageRendering noOfPics={1} />
        </View>
        <View style={styles.tweetFooter}>
          <TouchableOpacity
            style={styles.footerFields}
            onPress={handleCommentButtonClick}>
            <Image style={styles.tweetIcons} source={imageReply}></Image>
            <Text>66</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerFields}
            onPress={handleRetweetButtonClick}>
            <Image style={styles.tweetIcons} source={imageRetweet}></Image>
            <Text>1,606</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerFields}
            onPress={handleLikeButtonClick}>
            <Image style={styles.tweetIcons} source={imageLike}></Image>
            <Text>27,808</Text>
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
  },
  profileImage: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginVertical: 10,
    marginLeft: 10,
  },
  details: {
    marginRight: 10,
    marginTop: 0,
  },
  tweetHeader: {
    flexDirection: 'row',
    marginTop: 0,
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
    marginVertical: 0,
    paddingRight: 5,
  },

  tweetMessage: {
    color: 'black',
    marginRight: 95,
  },
  tweetImageContainer: {
    flexDirection: 'row',
  },
  tweetImage: {
    height: 250,
    width: 280,
    marginTop: 20,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  tweetImage2_1: {
    height: 250,
    width: 138,
    marginTop: 20,
    marginHorizontal: 2,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    resizeMode: 'cover',
  },
  tweetImage2_2: {
    height: 250,
    width: 138,
    marginTop: 20,
    marginHorizontal: 2,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    resizeMode: 'cover',
  },
  tweetImage3: {
    flexDirection: 'column',
  },
  tweetImage2: {
    flexDirection: 'column',
  },
  tweetImage3_1: {
    height: 250,
    width: 138,
    marginTop: 20,
    marginHorizontal: 2,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    resizeMode: 'cover',
  },
  tweetImage3_2: {
    height: 123,
    width: 138,
    marginTop: 20,
    marginHorizontal: 2,
    marginBottom: 4,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  tweetImage3_3: {
    height: 123,
    width: 138,
    // marginTop: 20,
    marginHorizontal: 2,
    borderBottomRightRadius: 10,
    resizeMode: 'cover',
  },
  tweetImage4_1: {
    height: 123,
    width: 138,
    marginHorizontal: 2,
    marginBottom:4,
    borderTopLeftRadius: 10,
    resizeMode: 'cover',
  },
  tweetImage4_2: {
    height: 123,
    width: 138,
    marginHorizontal: 2,
    borderBottomLeftRadius: 10,
    resizeMode: 'cover',
  },
  tweetImage4_3: {
    height: 123,
    width: 138,
    marginBottom:4,
    marginHorizontal: 2,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  tweetImage4_4: {
    height: 123,
    width: 138,
    marginHorizontal: 2,
    borderBottomRightRadius: 10,
    resizeMode: 'cover',
  },
  
  tweetFooter: {
    width: 300,
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
    resizeMode: 'contain'
  },
  verifiedImage: {
    height: 20,
    width: 20,
    borderRadius: 35,
    marginVertical: 20,
    marginLeft: 5,
  },
});

export default TweetCard;
