import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import NewsScreen from '../NewsScreen/NewsScreen';

const NewsStack = createStackNavigator();

const NewsStackScreen = () => {
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen name="News" component={NewsScreen} />
    </NewsStack.Navigator>
  );
};

export default NewsStackScreen;

const styles = StyleSheet.create({});
