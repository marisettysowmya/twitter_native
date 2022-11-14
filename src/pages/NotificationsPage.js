import {Text, FlatList, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NotificationCard} from '../components';
import {useIsFocused} from '@react-navigation/native';
import {getUserNotifications} from '../api/Notifications';
import {LoadingImage} from '../assets';
import {FeedString} from '../constants/Feed';

let userId = 1;
export default function NotificationsPage({navigation}) {
  const [allNotifications, setAllNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const isFocused = useIsFocused();
  async function getAllNotifications() {
    const data = await getUserNotifications(userId);
    setAllNotifications(data);
    setIsLoading(false);
  }
  useEffect(() => {
    getAllNotifications();
  }, [isFocused]);

  return (
    <>
      {isLoading ? (
        <Image source={LoadingImage} style={styles.loading} />
      ) : (
        <FlatList
          data={allNotifications}
          renderItem={({item}) => (
            <NotificationCard
              tweet={item}
              key={item.id}
              navigation={navigation}
            />
          )}
          keyExtractor={item => item.id}
          ListEmptyComponent={
            <Text style={styles.emptyList}>
              {FeedString.EMPTY_NOTIFICATIONS}
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
