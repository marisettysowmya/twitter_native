// import { View, Text } from 'react-native'
// import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  imageProfile,
  imageTweet,
  imageReply,
  imageRetweet,
  imageLike,
} from '../assets/index';
import {deleteUser} from '../api/AdminApi';

const props = {
  props: {
    name: '',
    handle: '',
    tweet: '',
    images: ['', ''],
    likes: 10,
    retweets: 23,
    commments: 876,
  },
};

export default function AdminUserCard(props) {
  const {data} = props;
  async function handleDeleteButtonClick() {
    // send userid here
    await deleteUser(data.userName);
  }
  return (
    <View style={styles.tweetContainer}>
      <Image style={styles.profileImage} source={imageProfile}></Image>

      <View style={styles.details}>
        <View style={styles.tweetHeader}>
          <Text style={styles.username}>{data.name}</Text>
          <Text style={styles.handle}>@{data.userName}</Text>
        </View>
        <View>
          <Text style={styles.dob}>dob: {data.dob}</Text>
        </View>
        <View>
          <Text style={styles.followers}>Followers: {data.numberOfFollower}</Text>
        </View>
        <View>
          <Text style={styles.following}>Following: {data.numberOfFollowing}</Text>
        </View>
      </View>
      <View style={styles.button}>
        <Button title="delete" onPress={() => handleDeleteButtonClick()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tweetContainer: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    marginVertical: 1,
    margin: 10,
    padding: 5,
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
    // marginTop: 5,
    padding: 5
  },
  tweetHeader: {
    flexDirection: 'row',
    marginTop: 10,
    padding: 5
  },
  username: {
    alignSelf: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    fontWeight: 'bold',
    color: 'black',
  },

  handle: {
    alignSelf: 'center',
  },
  dob: {
    color: 'black',
    paddingLeft: 10,
    paddingRight: 5,
  },
  followers: {
    color: 'black',
    paddingLeft: 10,
    paddingRight: 5,
  },
  following: {
    color: 'black',
    paddingLeft: 10,
    paddingRight: 5,
  },

  button: {
    // flex: 1,
    // alignContent: 'flex-end',
    // alignSelf: 'center',
    // justifyContent: 'flex-end',
    // flexDirection: 'row',
    // padding: 10,
    marginTop: 50,
    marginLeft: -40,
    

  },
});
