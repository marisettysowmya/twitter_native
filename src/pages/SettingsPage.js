import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {CloseIcon} from '../assets';

export default function SettingsPage({navigation}) {
  async function handleDeactivateButtonClick() {}
  async function handlePasswordChangeButtonClick() {}
  async function handleBlueTickButtonClick() {}
  async function handleEditProfileButtonClick() {
    navigation.navigate('Edit Profile Page');
  }
  function handleCloseButtonClick() {
    navigation.goBack();
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.closeButtonContainer}>
        <TouchableOpacity onPress={handleCloseButtonClick}>
          <Image source={CloseIcon} style={styles.closeButton} />
        </TouchableOpacity>
      </View>
      <View style={styles.listTab}>
        <TouchableOpacity onPress={handlePasswordChangeButtonClick}>
          <Text style={styles.tab}>Change Password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listTab}>
        <TouchableOpacity onPress={handleDeactivateButtonClick}>
          <Text style={styles.tab}>Deactivate Account</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listTab}>
        <TouchableOpacity onPress={handleBlueTickButtonClick}>
          <Text style={styles.tab}>Apply For BlueTick</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listTab}>
        <TouchableOpacity onPress={handleEditProfileButtonClick}>
          <Text style={styles.tab}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listTab}>
        <TouchableOpacity onPress={() => console.log('Display Mode changed')}>
          <Text style={styles.tab}>Change Display Mode</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 5,
    padding: 5,
  },
  listTab: {
    backgroundColor: 'lightgrey',
    marginVertical: 20,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 30,
  },
  tab: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
  closeButton: {
    height: 30,
    width: 30,
    left: -20,
    top: -20,
  },
  closeButtonContainer: {
    margin: 20,
  },
});
