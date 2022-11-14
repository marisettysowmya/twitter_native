import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  PermissionsAndroid,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {imageProfile, imageDefault, imagePlaceholder, imageCamera} from '../assets';
import * as ImagePicker from 'react-native-image-picker';

let profilepic = 'set';
let isVerified = 'set';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const AddTweet = () => {
  const [filePath, setFilePath] = useState({
    data: '',
    uri: '',
  });
  const [fileData, setFileData] = useState('');
  const [fileUri, setFileUri] = useState('');

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "App Camera Permission",
          message:"App needs access to your camera ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.ImagePicker
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (res) => {
      // console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        // console.log('response', JSON.stringify(res));
        setFilePath(res);
        setFileData(res.data);
        setFileUri(res.assets[0].uri);
      }
    });
}

  launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.uri};
        // console.log('response', JSON.stringify(response.assets[0].uri));

        setFilePath(response);
        setFileData(response.data);
        setFileUri(response.assets[0].uri);
      }
    });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.cancelAndTweet}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={{fontSize: 25, color: 'black'}}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tweetButton}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
            Tweet
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tweetDetails}>
        <Image
          style={styles.profileImage}
          source={profilepic == 'set' ? imageProfile : imageDefault}></Image>
        <View>
          <TextInput
            placeholder="What's happening?"
            multiline
            style={styles.tweetInput}
            numberOfLines={8}></TextInput>
        </View>
      </View>
      <View>
      <Image
            source={ (fileUri) ? {uri:fileUri} : null }
            style={styles.addTweetImage}
          />
      </View>
      <View style={styles.iconsContainer}>
      <TouchableOpacity
        style={{marginLeft: 65, width: 65}}
        onPress={this.launchImageLibrary}>
        <Image style={styles.insertImage} source={imagePlaceholder}></Image>
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginLeft: 65, width: 65}}
        onPress={this.cameraLaunch}>
        <Image style={styles.cameraImage} source={imageCamera}></Image>
      </TouchableOpacity>
      </View>
      
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {},

  cancelAndTweet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
  },

  cancelButton: {
    marginLeft: 20,
  },

  tweetButton: {
    marginRight: 20,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: 'rgba(42,169,224,255)',
    justifyContent: 'center',
  },

  tweetDetails: {
    flexDirection: 'row',
    marginTop: 25,
    marginLeft: 5,
  },

  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginVertical: 10,
    marginLeft: 10,
  },

  tweetInput: {
    width: 300,
    margin: 12,
    color: 'black',
    marginLeft: 10,
    marginBottom: 20,
    marginTop: 20,
    fontSize: 20,
  },

  tweetBody: {
    justifyContent: 'space-between',
  },

  addTweetImage: {
    width: 250,
    height: 280,
    borderColor: 'black',
    // borderWidth: 1,
    marginLeft: 70,
    // alignSelf: 'center',
    borderRadius: 10
  },

  iconsContainer: {
    flexDirection: 'row'
  },

  insertImage: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    marginVertical: 10,
    marginLeft: 5,
  },

  cameraImage: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    marginVertical: 10,
    marginLeft: 5,
  },

});

export default AddTweet;