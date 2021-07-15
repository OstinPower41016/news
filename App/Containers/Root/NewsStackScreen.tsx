import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon, Button} from '@ui-kitten/components';

import NewsScreen from '../../screens/NewsScreen/NewsScreen';
import NewsItem from '../../screens/NewsItem/NewsItem';

// interface INewsStackScreen {
//   News: undefined;
//   NewsItem: {newsItemId: string};
// }

// Icon Header
const ChevronIcon = (props: any) => {
  return <Icon name="arrow-ios-downward-outline" {...props} />;
};
//

const NewsStack = createStackNavigator<any>();

const NewsStackScreen = (props: any) => {
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen
        name="News"
        component={NewsScreen}
        options={{
          title: 'Все новости',
          headerRight: () => (
            <Button
              accessoryRight={ChevronIcon}
              onPress={() => props.navigation.setParams({isVisibleModal: true})}
              appearance="ghost"></Button>
          ),
        }}
      />
      <NewsStack.Screen name="NewsItem" component={NewsItem} />
    </NewsStack.Navigator>
  );
};

export default NewsStackScreen;

const styles = StyleSheet.create({});
