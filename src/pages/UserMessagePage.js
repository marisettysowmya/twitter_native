import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image}  from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import {imageProfile} from '../assets';
import { BackButton } from "../assets";

export default function UserMessagePage(){
    function handleCloseButtonClick() {
        navigation.goBack();
      }
    return(
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
            <TouchableOpacity onPress={{handleCloseButtonClick}}>
                <Image source={BackButton} style={styles.closeButton} />
            </TouchableOpacity>
            <Image style={styles.profileImage} source={imageProfile}></Image>
                {/* <View style={styles.userContainer}> */}
                    <Text style={styles.username}>Dummy</Text>
                {/* </View> */}
            </View>
            <View style={styles.messageContainer}>

            </View>
            <TextInput
            placeholder="Search"
            style={styles.input}>

            </TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: '#fefefe'
        
    },
    headerContainer:{
        // flex: 1,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // width: 20
        // marginVertical: 5,
        // margin: 10,
        paddingTop: 5,
        backgroundColor: '#efefef',
    },
    messageContainer:{
        flex: 1,
        backgroundColor: '#f7f7f7'
    },
    closeButton:{
        height: 30,
        width: 30,
        marginTop: 20,
        marginLeft: 15
    },
    profileImage: {
        height: 50,
        width: 50,
        borderRadius: 35,
        marginVertical: 10,
        marginLeft: 20,
      },
    username:{
        fontSize: 20,
        color: 'black',
        padding: 20

    },
    handle: {
        fontSize: 15,
        color: 'black'

    },
    input: {
        backgroundColor: '#eaeef4',
        padding: 5,
        color: '#000',
        borderRadius: 20,
        // borderWidth: 1,
        marginBottom: 10,
        marginLeft: 10
        


        // flex: 1
    }
})