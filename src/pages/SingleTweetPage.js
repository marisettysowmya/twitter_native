import {View, Text} from 'react-native';
import React from 'react';
import {TweetCard} from '../components';

export default function SingleTweetPage({navigation, route}) {
  return (
    <View>
      <TweetCard tweet={route.params.tweet} />
    </View>
  );
}
