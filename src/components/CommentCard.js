
// import { View, Text } from 'react-native'
// import React from 'react'
import {Text, View, StyleSheet, Image, TouchableOpacity, Button, TextInput} from 'react-native';
import React, {useState} from 'react';
import {
    imageProfile,
    imageTweet,
    imageReply,
    imageRetweet,
    imageLike,
  } from '../assets/index';
// import { TextInput } from 'react-native-gesture-handler';
  
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

  export default function CommentCard() {
  return (

    <View style={styles.commentContainer}>
        <View style={styles.tweetContainer}>
        <Image style={styles.profileImage} source={imageProfile}></Image>
        {/* <Text>jandcjhaidu</Text> */}
        <View style={styles.details}>
            <View style={styles.tweetHeader}>
            <Text style={styles.username}>Nitesh</Text>
            <Text style={styles.handle}>@Kadian</Text>
            </View>
            <View>
                <Text style={styles.comment}>Hi i am nithesh kadian</Text>
            </View>
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
      margin: 10,
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
      marginRight: 1,
      width: 30,
    },
    comment:{
        color: 'black',
        paddingLeft: 10,
        paddingRight: 5,
        fontSize: 15,

    },
    email:{
        color: 'black',
        paddingLeft: 10,
        paddingRight: 5,
    },
    followers:{
        color: 'black',
        paddingLeft: 10,
        paddingRight: 5,
    },
    following: {
        color: 'black',
        paddingLeft: 10,
        paddingRight: 5,
    },

    button:{
        flex: 1,
        alignContent: 'flex-end',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        padding: 10
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        color: '#000',
        borderRadius: 10,
        borderWidth: 1,
    }

  });