import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {TwitterIcon, imageProfile, bellIcon} from '../assets';

const NotificationCard = () => {
  return (
    <View>
      <TouchableOpacity style={styles.notificationContainer}>
        <Image source={TwitterIcon} style={styles.imageTwitter}></Image>
        <View style={styles.notificationDetails}>
          {/* <Image source={imageProfile} style={styles.notificationImage}></Image> */}
          <Text style={styles.notificationText}>
            Your Verification application was rejected
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.notificationContainer}>
        <Image source={bellIcon} style={styles.imageTwitter}></Image>
        <View style={styles.notificationDetails}>
          <Image source={imageProfile} style={styles.notificationImage}></Image>
          <Text style={styles.notificationText}>
            New Tweet notifications from Ganesh
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },

  imageTwitter: {
    height: 40,
    width: 40,
    marginLeft: 30,
    marginVertical: 10,
  },

  notificationDetails: {
    flexDirection: 'column',
    marginVertical: 10,
    marginLeft: 20,
  },

  notificationText: {
    color: 'black',
    marginTop: 5
  },

  notificationImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
    // marginLeft: 30,
    marginTop: 5,
  },
});

export default NotificationCard;
