import { View, TextInput,Text, StyleSheet} from "react-native";
import React from "react";

export default function SearchBar(){
  return(
    <View style = {styles.container}> 
      {/* <Text>Seach Bar</Text> */}
      <TextInput
      placeholder="Search"
      style={styles.input}
      // value={props.searchText}
      // onChangeText={(text)=>props.setSearchText(text)}
      // onSubmitEditing={props.onSubmit}
      />
      {/* <Text>somehting is here</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#F0F0F0",
    margin: 10
  },
  input: {
      backgroundColor: '#fff',
      padding: 10,
      color: '#000',
      borderRadius: 10,
      borderWidth: 1,
      // flex: 1
  }
});
