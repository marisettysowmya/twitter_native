import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LoadingImage, ProfilePicture, SortIcon, TwitterIcon} from '../assets';
import {TweetCard} from '../components';
import {getSortedFeed, getUserFeed} from '../api/Feed';
import {FeedString, SortTypes, SortTypeString} from '../constants/Feed';
import {useIsFocused} from '@react-navigation/native';

// TODO - Add Sort Modal

// const SortDropdown = props => {
//   const {toggleDropdown} = props;

//   return (
//     <View style={styles.sortDropdown}>
//       <Text
//         styles={styles.sortButton}
//         onPress={() => {
//           getSortedFeed(SortTypes.DATE);
//           toggleDropdown(false);
//         }}>
//         {SortTypeString.DATE}
//       </Text>
//       <Text
//         styles={styles.sortButton}
//         onPress={() => {
//           getSortedFeed(SortTypes.POPULARITY);
//           toggleDropdown(false);
//         }}>
//         {SortTypeString.POPULARITY}
//       </Text>
//     </View>
//   );
// };

const SortDropdown = props => {
  const {showDropdown, toggleDropdown} = props;

  return (
    <View style={styles.sortDropdown}>
      <Modal
        visible={showDropdown}
        onRequestClose={() => {
          toggleDropdown(false);
        }}
        transparent={true}>
        <Text
          styles={styles.sortButton}
          onPress={() => {
            getSortedFeed(SortTypes.DATE);
            toggleDropdown(false);
          }}>
          {SortTypeString.DATE}
        </Text>
        <Text
          styles={styles.sortButton}
          onPress={() => {
            getSortedFeed(SortTypes.POPULARITY);
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
            />
          </View>
        )}

        <View style={styles.bodyContainer}>
          {isLoading ? (
            <Image source={LoadingImage} style={styles.loading} />
          ) : (
            <FlatList
              data={feedData}
              renderItem={({item}) => <TweetCard tweet={item} key={item.id} />}
              keyExtractor={item => item.id}
              ListEmptyComponent={
                <Text style={styles.emptyList}>{FeedString.EMPTY_FEED}</Text>
              }
            />
          )}
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
    backgroundColor: 'blue',
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
});
