import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {BackButton} from '../assets';

export default function ChatPage({navigation}) {
  function handleCloseButtonClick() {
    navigation.goBack();
  }

  return (
    <View>
      <View style={styles.closeButtonContainer}>
        <TouchableOpacity onPress={handleCloseButtonClick}>
          <Image source={BackButton} style={styles.closeButton} />
        </TouchableOpacity>
      </View>
      <Text>ChatPage</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    height: 30,
    width: 30,
  },
  closeButtonContainer: {
    margin: 20,
  },
});
