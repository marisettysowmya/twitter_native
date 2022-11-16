import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Animated,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {imageBanner, imageBirthday, imageJoined, imageProfile} from '../assets';
import {TweetCard} from '../components';
import {getUserData, getUserTweets} from '../api/User';
import {FeedString} from '../constants/Feed';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

let animatedHeaderValue = new Animated.Value(0);
const headerMaxHeight = 400;
const headerMinHeight = 0;

const animatedHeaderHeight = animatedHeaderValue.interpolate({
  inputRange: [0, headerMaxHeight - headerMinHeight],
  outputRange: [headerMaxHeight, headerMinHeight],
  extrapolate: 'clamp',
});

animatedHeaderValue.addListener(({value}) => {
  this._value = value;
});

export default function ProfilePage({navigation, route}) {
  const [isFocused, setFocus] = useState('tweets');
  const [userData, setUserData] = useState({});
  const [userTweets, setUserTweets] = useState([]);

  const userId = route?.params?.userId;
  async function fetchUserData() {
    const data = await getUserData(userId);
    const tweets = await getUserTweets(userId);
    setUserData(data);
    setUserTweets(tweets);
  }
  useEffect(() => {
    fetchUserData();
  }, []);
  useEffect(() => {
    stickyIndex();
  }, [animatedHeaderValue._value]);

  const stickyIndex = () => {
    return animatedHeaderValue._value >= 400 ? [0] : '';
  };

  return (
    <SafeAreaView style={styles.profile}>
      <Animated.View style={[styles.header]}>
        <Image style={styles.bannerImage} source={imageBanner} />
        <View style={styles.dpandedit}>
          <Image source={imageProfile} style={styles.profileImage}></Image>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => {
              navigation.navigate('Edit Profile Page');
            }}>
            <Text
              style={{
                borderWidth: 0.5,
                marginRight: 20,
                paddingLeft: 15,
                paddingRight: 13,
                paddingVertical: 5,
                color: 'black',
                fontWeight: 'bold',
                borderRadius: 20,
                borderColor: 'gray',
              }}>
              Edit profile
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.username}>{userData.name}</Text>
          <Text style={styles.handle}>{userData.userName}</Text>
          <Text style={styles.bio}>{userData.bio}</Text>
          <View style={styles.dates}>
            <Image style={styles.birthdayImage} source={imageBirthday}></Image>
            <Text>{userData?.dob?.substring(0, 10)}</Text>
            <Image style={styles.joinedImage} source={imageJoined}></Image>
            <Text>{userData?.createdAt?.substring(0, 10)}</Text>
          </View>
          <View style={styles.followInfo}>
            <TouchableOpacity style={styles.followingContainer}>
              <Text
                style={{color: 'black', fontWeight: 'bold', marginRight: 5}}>
                {userData.numberOfFollowing}
              </Text>
              <Text style={{marginRight: 15}}>Following</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.followersContainer}>
              <Text
                style={{color: 'black', fontWeight: 'bold', marginRight: 5}}>
                {userData.numberOfFollower}
              </Text>
              <Text style={{marginRight: 5}}>Followers</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>

      <ScrollView
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: animatedHeaderValue}}}],
          {useNativeDriver: false},
        )}
        stickyHeaderIndices={stickyIndex()}>
        <View style={{paddingTop: headerMaxHeight}}>
          <View style={styles.tabs}>
            <TouchableOpacity style={styles.tweets}>
              <Text
                style={
                  isFocused == 'tweets' ? styles.focused : styles.tweetText
                }>
                Tweets
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.media}>
              <Text
                style={
                  isFocused == 'media' ? styles.focused : styles.tweetText
                }>
                Media
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.likes}>
              <Text
                style={
                  isFocused == 'likes' ? styles.focused : styles.tweetText
                }>
                Likes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <FlatList
            data={userTweets}
            renderItem={({item}) => (
              <TweetCard key={item.tweetId} tweet={item} />
            )}
            keyExtractor={item => item.tweetId}
            ListEmptyComponent={
              <Text style={styles.emptyList}>
                {FeedString.EMPTY_PROFILE_PAGE_TWEETS}
              </Text>
            }
          />
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          navigation.navigate('MessagesPage', {screen: 'Add Tweet Page'})
        }>
        <Text
          style={{fontSize: 50, margin: -7, color: 'white', fontWeight: '100'}}>
          +
        </Text>
      </TouchableOpacity>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profile: {
    flex: 1,
  },
  header: {
    flexDirection: 'column',
    // left: 0,
    // right: 0,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    // height: headerScrollHeight,
    width: '100%',
    overflow: 'hidden',
    zIndex: 999,
    // STYLE
    borderBottomColor: '#EFEFF4',
    borderBottomWidth: 2,
    height: animatedHeaderHeight,
    // padding: 10,
    // position: 'absolute'
  },
  bannerImage: {
    height: 150,
    width: screenWidth,
    resizeMode: 'cover',
  },

  dpandedit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  profileImage: {
    marginTop: -40,
    height: 90,
    width: 90,
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 45,
    marginLeft: 10,
  },

  editButton: {
    marginTop: 15,
  },

  profileInfo: {
    marginTop: 10,
  },

  username: {
    // alignSelf: 'center',
    fontSize: 23,
    marginLeft: 15,
    marginRight: 5,
    fontWeight: 'bold',
    color: 'black',
  },

  handle: {
    // alignSelf: 'center',
    marginLeft: 15,
  },

  bio: {
    // alignSelf: 'center',
    marginTop: 15,
    marginLeft: 15,
    color: 'black',
    marginRight: 10,
    fontSize: 17,
  },

  dates: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },

  birthdayImage: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
    marginRight: 10,
    marginLeft: 14,
  },

  joinedImage: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    marginLeft: 20,
    marginRight: 10,
  },

  followInfo: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 15,
  },
  followingContainer: {
    flexDirection: 'row',
  },
  followersContainer: {
    flexDirection: 'row',
  },

  tabs: {
    flexDirection: 'row',
    marginTop: 10,
    height: 30,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    // alignItems: 'center'
  },

  tweetText: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  focused: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },

  tweets: {
    flex: 1,
    alignItems: 'center',
  },
  media: {
    flex: 1,
    alignItems: 'center',
  },
  likes: {
    flex: 1,
    alignItems: 'center',
  },

  addButton: {
    backgroundColor: 'rgba(42,169,224,255)',
    borderColor: 'rgba(0,0,0,0.5)',
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 15,
    position: 'absolute',
    right: 35,
    top: 700,
  },
  emptyList: {
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 100,
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
});
