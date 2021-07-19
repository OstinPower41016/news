import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  FlatList,
  Animated,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import isEmpty from 'lodash/isEmpty';
import {Text, Card, Button, Icon} from '@ui-kitten/components';

import getPreparedData from '../../utils/getPreparedData';
import styles from './NewsItemStyles';
import {getNewsItem} from '../../api/apiNews';
import NewsFormComment from '../NewsFormComment/NewsFormComment';

interface INewsItem {
  newsItemId: string;
  navigation: any;
}

const CommentIcon = (props: any) => {
  return <Icon {...props} name="message-square-outline" />;
};

const AvatarComment = (props: {username: string}) => {
  const strAvatar = props.username.slice(0, 1).toUpperCase();
  return (
    <View style={styles.avatarComment}>
      <Text style={styles.avatarCommentText}>{strAvatar}</Text>
    </View>
  );
};

const NewsItem: React.FC<INewsItem> = (props: any) => {
  const [newsItem, setNewsItem] = React.useState<any>();
  const [isVisible, setIsVisible] = React.useState<string>('hidden');
  const [position, setPosition] = React.useState<undefined | 'absolute'>(
    'absolute',
  );

  // anim
  React.useEffect(() => {
    if (isVisible === 'hidden') {
      hidden();
    } else if (isVisible === 'visible') {
      setPosition(undefined);
      visible();
    }
  }, [isVisible]);

  const transformAnim = React.useRef(new Animated.Value(-500)).current;

  const hidden = () => {
    Animated.timing(transformAnim, {
      toValue: -500,
      duration: 1000,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) {
        setPosition('absolute');
      }
    });
  };

  const visible = () => {
    Animated.timing(transformAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  //anim

  React.useEffect(() => {
    getNewsItem(props.newsItemId).then((res: any) => {
      setNewsItem(JSON.parse(res));
      props.navigation.setOptions({headerTitle: JSON.parse(res).title});
    });
  }, []);

  const renderComment = ({item}: any) => {
    const [day, month, year] = getPreparedData(item.updatedAt);
    return (
      <Card>
        <Text>{item.username}</Text>
        <Text>{`${day} ${month} ${year}`}</Text>
        <Text>{item.text}</Text>
      </Card>
    );
  };

  return (
    <View>
      {isEmpty(newsItem) && <Text>Loading...</Text>}
      {!isEmpty(newsItem) && (
        <View style={styles.container}>
          <ScrollView style={styles.bodyWrapper} nestedScrollEnabled>
            <Image source={{uri: newsItem.imageURL}} style={styles.image} />
            <Text category="h5" style={[styles.bodyText, styles.description]}>
              {newsItem.title}
            </Text>
            <Text style={styles.bodyText}>{newsItem.body}</Text>
            <View style={styles.bodyText}>
              <Button
                style={styles.buttonComment}
                appearance="outline"
                accessoryRight={CommentIcon}
                onPress={() =>
                  isVisible === 'hidden'
                    ? setIsVisible('visible')
                    : setIsVisible('hidden')
                }>
                Комментировать
              </Button>

              <Animated.View
                style={{
                  transform: [{translateX: transformAnim}],
                  position: position,
                }}>
                <View style={styles.newsFormComments}>
                  <NewsFormComment />
                </View>
              </Animated.View>
              {newsItem.comments.map((item: any) => {
                const [day, month, year] = getPreparedData(item.updatedAt);
                return (
                  <Card key={item.id}>
                    <View style={styles.commnetUser}>
                      <AvatarComment username={item.username} />
                      <View>
                        <Text>{item.username}</Text>
                        <Text
                          style={styles.date}>{`${day} ${month} ${year}`}</Text>
                      </View>
                    </View>
                    <Text style={styles.commentText}>{item.text}</Text>
                  </Card>
                );
              })}
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default NewsItem;
