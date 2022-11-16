import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { imageProfile } from '../assets';


export default function MessageScreenCard({navigation, data}) {
  return (
      <View style={styles.tweetContainer}>
        <Image style={styles.profileImage} source={imageProfile}></Image>

        <View style={styles.details}>
          <View style={styles.tweetHeader}>
            {/* <Text style={styles.username}>{data.name}</Text>
            <Text style={styles.handle}>@{data.userName}</Text> */}
            <Text style={styles.username}>dummy</Text>
            <Text style={styles.handle}>@dummy</Text>
          </View>
          <Text style={styles.message}>This is the last dummy message</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  tweetContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    marginVertical: 5,
    margin: 10,
    paddingTop: 5,
  },
  profileImage: {
    height: 50,
    width: 50,
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
    fontSize: 15
  },

  handle: {
    alignSelf: 'center',
    fontSize: 15
  },
  message:{
    alignSelf: 'center',
    paddingLeft: 10,
    paddingRight: 5,
    paddingTop: 5,
    color: 'black',
    fontSize: 15
  }

});