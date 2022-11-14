import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native'
import React from 'react'
import { imageProfile, imageDefault, imagePlaceholder } from '../assets'

let profilepic = 'set';
let isVerified = 'set';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const AddTweet = () => {
  launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
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
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
      }
    });

  }
  return (
    <View style = {styles.container}>
      
      <View style = {styles.cancelAndTweet}>
        <TouchableOpacity style = {styles.cancelButton}>
            <Text style = {{fontSize: 25, color: 'black'}}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.tweetButton}>
            <Text style = {{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Tweet</Text>
        </TouchableOpacity>
      </View>
      <View  style = {styles.tweetDetails}>
      <Image
        style={styles.profileImage}
        source={profilepic == 'set' ? imageProfile : imageDefault}></Image>
        <View>
        <TextInput  placeholder="What's happening?" multiline style={styles.tweetInput} numberOfLines={8}></TextInput>
        </View>
      </View>
      <TouchableOpacity style = {{marginLeft: 65, width: 65}}>
      <Image style = {styles.insertImage} source = {imagePlaceholder}></Image>
      </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create ({

    container: {

    },

    cancelAndTweet: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        alignItems: 'center'
    },

    cancelButton: {
        marginLeft:20,
    },

    tweetButton: {
        marginRight: 20,
        borderRadius:20,
        paddingHorizontal: 20,
        paddingVertical:5,
        backgroundColor: 'rgba(42,169,224,255)',
        justifyContent: 'center',
    },

    tweetDetails: {
        flexDirection: 'row',
        marginTop:25,
        marginLeft:5,
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
        justifyContent: 'space-between'
      },

      insertImage: {
        height: 50,
        width: 50,
        resizeMode: 'contain',
        marginVertical: 10,
        marginLeft: 5,
      }

})

export default AddTweet