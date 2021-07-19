import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import NewsItemElement from '../../components/NewsItem/NewsItem';

const NewsItem: React.FC = (props: any) => {
  const {newsItemId} = props.route.params;
  return (
    <View>
      <NewsItemElement newsItemId={newsItemId} navigation={props.navigation} />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  
});
