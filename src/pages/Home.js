import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  AddIcon,
  LoadingImage,
  ProfilePicture,
  HomeIcon,
  SortIcon,
  TwitterIcon,
} from '../assets';
import {TweetCard} from '../components';
import {getSortedFeed, getUserFeed} from '../api/Feed';
import {FeedString, SortTypes, SortTypeString} from '../constants/Feed';
import {useIsFocused} from '@react-navigation/native';

const SortDropdown = props => {
  const {showDropdown, toggleDropdown, fetchSortedFeed} = props;
  
  return (
    <View style={styles.sortDropdown}>
      <Modal
        visible={showDropdown}
        onRequestClose={() => {
          toggleDropdown(false);
          console.log(close)
        }}
        transparent={true}>
        
        <Text
          styles={styles.sortButton}
          onPressOut={() => {
            console.log(false,'fvgbhnjmk,l')

            // fetchSortedFeed(SortTypes.DATE);
            // toggleDropdown(false);
          }}>
          {SortTypeString.DATE}
        </Text>
        <Text
          styles={styles.sortButton}
          onPress={() => {
            fetchSortedFeed(SortTypes.POPULARITY);
            toggleDropdown(false);
          }}>
          {SortTypeString.POPULARITY}
        </Text>
      </Modal>
    </View>
  );
};

const Tab = createBottomTabNavigator();
let userId = 1;
export default function Home({navigation}) {
  const [feedData, setFeedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showDropdown, toggleDropdown] = useState(false);

  const isFocused = useIsFocused();
  async function fetchFeed() {
    const data = await getUserFeed(userId);
    setFeedData(data);
    setIsLoading(false);
  }
  async function fetchSortedFeed(sortType) {
    const data = await getSortedFeed(userId, sortType);
    setFeedData(data);
  }
  useEffect(() => {
    fetchFeed();
  }, [isFocused]);

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.headerIconContainer}
            onPress={() => navigation.openDrawer()}>
            <Image source={ProfilePicture} style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerIconContainer}
            onPress={() => fetchFeed('Ransom')}>
            <Image source={TwitterIcon} style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerIconContainer}
            onPress={() => toggleDropdown(prev => !prev)}>
            <Image source={SortIcon} style={styles.headerIcon} />
          </TouchableOpacity>
        </View>
        {showDropdown && (
          <View style={styles.sortDropdown}>
            <SortDropdown 
              toggleDropdown={toggleDropdown}
              showDropdown={showDropdown}
              fetchSortedFeed={fetchSortedFeed}
            />
          </View>
        )}

        <View style={styles.bodyContainer}>
          {isLoading ? (
            <Image source={LoadingImage} style={styles.loading} />
          ) : (
            <FlatList
              data={feedData}
              renderItem={({item}) => (
                <TweetCard tweet={item} key={item.tweetId} />
              )}
              keyExtractor={item => item.tweetId}
              ListEmptyComponent={
                <Text style={styles.emptyList}>{FeedString.EMPTY_FEED}</Text>
              }
            />
          )}
        </View>
        <View style={styles.addTweetButtonContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('MessagesPage', {screen: 'Add Tweet Page'})
            }>
            <Text style={styles.addbutton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  loading: {
    alignSelf: 'center',
    height: 50,
    width: 50,
    resizeMode: 'contain',
    marginVertical: '50%',
  },
  mainContainer: {flex: 1},
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  headerIconContainer: {margin: 5},
  headerIcon: {height: 25, width: 25, resizeMode: 'contain', borderRadius: 50},
  bodyContainer: {flex: 20, margin: 5, padding: 5},
  sortDropdown: {
    position: 'absolute',
    backgroundColor: 'white',
    // elevation: 5,
    padding: 10,
    height: 50,
    width: 300,
    alignItems: 'center'
  },
  sortButton: {},
  emptyList: {
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 100,
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  addTweetButtonContainer: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    backgroundColor: '#1DA1F2',
    borderRadius: 50,
    padding: 10,
    width: 70,
    height: 70
  },
  addTweetButton: {
    margin: 8,
    height: 40,
    width: 40,
  },
  addbutton:{
    fontSize:50,
    textAlign: 'center',
    color: 'white',
    marginTop: -10
  }
});