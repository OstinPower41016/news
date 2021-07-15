import React from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import isEmpty from 'lodash/isEmpty';
import {Text} from '@ui-kitten/components';

import {getNewsItem} from '../../api/apiNews';

interface INewsItem extends StackNavigationProp<any> {
  newsItemId: string;
}

const NewsItem: React.FC<INewsItem> = (props: any) => {
  const [newsItem, setNewsItem] = React.useState<any>();
  const {newsItemId} = props.route.params;

  React.useEffect(() => {
    getNewsItem(newsItemId).then((res: any) => {
      setNewsItem(JSON.parse(res));
      props.navigation.setOptions({headerTitle: JSON.parse(res).title});
    });
  }, []);


  return (
    <View>
      {isEmpty(newsItem) && <Text>Loading...</Text>}
      {!isEmpty(newsItem) && (
        <View style={styles.container}>
          <ScrollView style={styles.bodyWrapper}>
            <Image source={{uri: newsItem.imageURL}} style={styles.image} />
            <Text style={styles.bodyText}>{newsItem.body}</Text>
            <View></View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 5,
  },
  bodyWrapper: {
    height: '100%',
  },
  bodyText: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
});
