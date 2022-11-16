import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import {imageBanner, imageProfile} from '../assets';

import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {updateUserDetails} from '../api/User';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageConstants} from '../constants/AsyncStorageConstants';
import {uploadImageToAWS} from '../api/AWSImageApi';
import * as ImagePicker from 'react-native-image-picker';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default function EditProfilePage({navigation}) {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState('');
  const [banner, setBanner] = useState('');
  const [imageData, setImageData] = useState({});

  async function fetchUserInfo() {
    const data = await AsyncStorage.getItem(AsyncStorageConstants.USER_DETAILS);
    const user = JSON.parse(data);
    setName(user.name);
    setHandle(user.userName);
    setBio(user.bio);
    setAvatar(user.avatar);
    setBanner(user.banner);
  }
  useEffect(() => {
    fetchUserInfo();
  }, []);

  const handleSubmit = async () => {
    const data = await AsyncStorage.getItem(AsyncStorageConstants.USER_DETAILS);
    const user = JSON.parse(data);
    const updatedUser = {
      ...user,
      name,
      userName: handle,
      bio,
    };
    await updateUserDetails(updatedUser);
    if (!updatedUser) {
      Alert.alert('Handle already exists.');
      setUserName('');
      return;
    }
    await AsyncStorage.setItem(
      AsyncStorageConstants.USER_DETAILS,
      JSON.stringify(updatedUser),
    );
    navigation.goBack();
  };

  launchImageLibrary = val => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setImageData({
          uri: response.assets[0].uri,
          type: response.assets[0].type,
          name: response.assets[0].fileName,
        });
        if (val === 'banner') setBanner(response.assets[0].uri);
        if (val === 'avatar') setAvatar(response.assets[0].uri);
      }
    });
  };

  const handleProfilePicUpdate = async () => {
    const imageUrl = await uploadImageToAWS(imageData);
    const user = await AsyncStorage.getItem(AsyncStorageConstants.USER_DETAILS);
    const updatedUser = await updateUserDetails({...user, avatar: imageUrl});
    await AsyncStorage.setItem(
      AsyncStorageConstants.USER_DETAILS,
      JSON.stringify(updatedUser),
    );
    navigation.goBack();
  };

  const handleBackgroundPicUpdate = async () => {
    const imageUrl = await uploadImageToAWS(imageData);
    const user = await AsyncStorage.getItem(AsyncStorageConstants.USER_DETAILS);
    const updatedUser = await updateUserDetails({...user, bgPic: imageUrl});
    await AsyncStorage.setItem(
      AsyncStorageConstants.USER_DETAILS,
      JSON.stringify(updatedUser),
    );
    navigation.goBack();
  };

  return (
    <View style={styles.editProfileContainer}>
      <TouchableOpacity
        onPress={() => {
          this.launchImageLibrary('banner');
        }}>
        <Image
          style={styles.bannerImage}
          source={banner ? {uri: banner} : imageBanner}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginLeft: 10, marginRight: 'auto'}}
        onPress={() => {
          this.launchImageLibrary('avatar');
        }}>
        <Image
          source={avatar ? {uri: avatar} : imageProfile}
          style={styles.profileImage}></Image>
      </TouchableOpacity>
      <View style={styles.nameContainer}>
        <Text style={{fontSize: 20}}>Name</Text>
        <TextInput
          placeholder=""
          style={{borderBottomWidth: 0.5, height: 40}}
          value={name}
          onChangeText={name => {
            setName(name);
          }}
        />
      </View>
      <View style={styles.handleContainer}>
        <Text style={{fontSize: 20}}>Handle</Text>
        <TextInput
          placeholder=""
          style={{borderBottomWidth: 0.5, height: 40}}
          value={userName}
          onChangeText={userName => {
            setUserName(userName);
          }}
        />
      </View>
      <View style={styles.bioContainer}>
        <Text style={{fontSize: 20}}>Bio</Text>
        <TextInput
          placeholder=""
          style={{borderBottomWidth: 0.5, height: 40}}
          value={bio}
          onChangeText={bio => {
            setBio(bio);
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => handleSubmit()}>
        <Text
          style={{
            marginRight: 'auto',
            paddingHorizontal: 20,
            paddingVertical: 5,
            color: 'black',
            fontWeight: 'bold',
            borderRadius: 30,
            borderColor: 'gray',
            fontSize: 20,
            backgroundColor: 'rgba(42,169,224,255)',
          }}>
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  editProfileContainer: {},
  bannerImage: {
    height: 150,
    width: screenWidth,
    resizeMode: 'cover',
  },

  profileImage: {
    marginTop: -40,
    height: 90,
    width: 90,
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 45,
    // marginLeft: 10,
  },

  nameContainer: {
    marginTop: 40,
    marginHorizontal: 15,
    // borderWidth: 2
  },

  handleContainer: {
    marginTop: 40,
    marginHorizontal: 15,
    // borderWidth: 2
  },

  bioContainer: {
    marginTop: 40,
    marginHorizontal: 15,
  },

  saveButton: {
    marginTop: 80,
    marginLeft: 15,
    marginRight: 'auto',
  },
});
