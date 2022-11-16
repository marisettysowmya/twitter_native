import {StyleSheet, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {getAllUsers} from '../api/AdminApi';
import {AdminUserCard} from '../components';
import {LoadingImage} from '../assets';

export default function AdminAllUsersPage() {
  const [allUsers, setAllUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const isFocused = useIsFocused();
  async function fetchAllUsers() {
    const data = await getAllUsers();
    setAllUsers(data);
    setIsLoading(false);
  }
  useEffect(() => {
    fetchAllUsers();
  }, [isFocused]);

  return (
    <>
      {isLoading ? (
        <Image source={LoadingImage} style={styles.loading} />
      ) : (
        <FlatList
          data={allUsers}
          renderItem={({item}) => (
            <AdminUserCard key={item.userId} data={item} />
          )}
          keyExtractor={item => item.id}
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
