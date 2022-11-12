import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { imageProfile, imageTweet, imageReply, imageRetweet, imageLike } from '../assets/index'

function TweetCard() {
  return (
    <View style = { styles.tweetContainer }>
      <Image style = {styles.profileImage} source={imageProfile}></Image>
      <View style = { styles.details}>
        <View style = {styles.tweetHeader}>
        <Text style = {styles.username}>Nitesh</Text>
        <Text style = {styles.handle}>@Kadian</Text>
        </View>
        <View style = {styles.tweet}>
        <Text style = {styles.tweetMessage}>Hello World</Text>
        <Image style = {styles.tweetImage} source={imageTweet}></Image>
        </View>
        <View style = {styles.tweetFooter}>
        <View style = {styles.footerFields}>
        <Image style = {styles.replyImage} source={imageReply}></Image>
        <Text>66</Text>
        </View>
        <View  style = {styles.footerFields}>
        <Image style = {styles.retweetImage} source={imageRetweet}></Image>
        <Text>1,606</Text>
        </View>
        <View  style = {styles.footerFields}>
        <Image style = {styles.likeImage} source={imageLike}></Image>
        <Text>27,808</Text>
        </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

    tweetContainer: {
        // flex: 1,
        borderBottomWidth:0.5,
        borderColor: 'gray',
        flexDirection: 'row',
        // height:400,
        // marginHorizontal:14
    },

    profileImage: {
        // flex: 1,
        height: 70,
        width:70,
        borderRadius:35,
        marginVertical: 20,
        marginLeft:10
    },

    details: {
        // flex: 5,
        // height:200
        // alignItems: 'center',
        marginRight:10,
        marginTop:10
    },

    tweetHeader: {
        flexDirection: 'row',
        marginTop:10,
        // flex: 1,
        // borderWidth: 5

    },

    username: {
        // flex: 1,
        // borderWidth:2,
        alignSelf: 'center',
        paddingLeft:10,
        paddingRight:5,
        fontWeight: 'bold',
        color: 'black'
    },
    
    handle: {
        // flex:1,
        // borderWidth: 2,
        // color: 'blue',
        alignSelf: 'center',
        // padding:10,
        
    },

    tweet: {
        // flex: 1,
        // borderWidth: 2,
        // paddingHorizontal:10,
        marginHorizontal:10,
        marginVertical:10
    },

    tweetMessage: {
        color: 'black'
    },

    tweetImage: {
        // flex:6,
        height: 280,
        width:280,
        marginTop: 20,
        borderRadius:10
    },

    tweetFooter: {
        marginVertical:10,
        flexDirection: 'row',
        // borderWidth: 2,
        marginHorizontal:10,
        alignItems: 'center'
    },

    footerFields: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    replyImage: {
        // flex:1,
        height: 30,
        marginRight: 5,
        width:30,
    },

    retweetImage: {
        // flex:1,
        // marginLeft:50,
        height: 30,
        marginRight:5,
        width:30,
    },

    likeImage: {
        // flex:1,
        // marginLeft:50,
        marginRight:5,
        height: 23,
        width:23,
    },

})

export default TweetCard
