import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon, Button} from '@ui-kitten/components';

import NewsScreen from '../../screens/NewsScreen/NewsScreen';

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
          // headerRight: () => (
          //   <Button accessoryRight={ChevronIcon} appearance="ghost"></Button>
          // ),
        }}
      />
    </NewsStack.Navigator>
  );
};

export default NewsStackScreen;

const styles = StyleSheet.create({});
