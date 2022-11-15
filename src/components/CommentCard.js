

import {Text, View, StyleSheet, Image, TouchableOpacity, Button, TextInput} from 'react-native';
import React, {useState} from 'react';
import {
    imageProfile,
  } from '../assets/index';
  

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
    comment:{
        color: 'black',
        paddingLeft: 10,
        paddingRight: 5,
        fontSize: 15,

    },

  });