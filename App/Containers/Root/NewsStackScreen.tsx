import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from '@ui-kitten/components';

import NewsScreen from '../NewsScreen/NewsScreen';

// Icon Header
const ChevronIcon = (props: any) => {
  return <Icon name="arrow-ios-downward-outline" {...props} />;
};
//

const NewsStack = createStackNavigator();

const NewsStackScreen = () => {
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen
        name="News"
        component={NewsScreen}
        options={{
          title: 'Все новости',
          headerRight: () => <ChevronIcon />,
        }}
      />
    </NewsStack.Navigator>
  );
};

export default NewsStackScreen;

const styles = StyleSheet.create({});
