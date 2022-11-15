import React, { useState } from "react";
import { View, StyleSheet, TextInput, KeyboardAvoidingView, FlatList, Text } from "react-native";
// import { TextInput } from "react-native-gesture-handler";
import CommentCard from "../components/CommentCard";
import { FeedString } from "../constants/Feed";
export default function CommentPage(){
    const [commentFeed, setcommentFeed] = useState([]);

    return(
        <View >
            {/* <CommentCard /> */}
            <KeyboardAvoidingView>
            
            <FlatList
                data={commentFeed}
                renderItem={({item}) => <CommentCard tweet={item} key={item.id} />}
                keyExtractor={item => item.id}
                ListEmptyComponent={
            <Text style={styles.emptyList}>
              {FeedString.EMPTY_BOOKMARK_FEED}
            </Text>
          }
        />
            <TextInput
            placeholder="comment"
            style={styles.commentbox}/>
            </KeyboardAvoidingView>
        </View>
        
    )
}
const styles=StyleSheet.create({
    commentbox:{
        backgroundColor: '#fff',
        padding: 10,
        color: '#000',
        borderRadius: 10,
        borderWidth: 1,
        // marginTop: 625
    }
})