import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  ImageProps,
  TouchableWithoutFeedback,
} from 'react-native';
import {getNews} from '../../api/apiNews';
import isEmpty from 'lodash/isEmpty';
import {Card, Avatar, Text, Divider, Icon, Button} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';

import styles from './NewsContentStyles';

interface IHeartIcon extends Partial<ImageProps> {
  isFavorite: boolean;
}

// Icons
const HeartIcon: React.FC<IHeartIcon> = props => {
  const icnoName = props.isFavorite ? 'heart' : 'heart-outline';
  return <Icon {...props} name={icnoName} style={styles.icon} fill="#3366FF" />;
};

const CommentIcon = (props: any) => {
  return (
    <Icon
      {...props}
      name="message-square-outline"
      style={styles.icon}
      fill="#3366FF"
    />
  );
};

const ViewIcon = (props: any) => {
  return (
    <Icon
      {...props}
      name="eye-outline"
      style={[styles.viewIcon, styles.icon]}
      fill="#3366FF"
    />
  );
};
//

const NewsContent = (props: any) => {
  const [data, setData] = React.useState<any>();
  const navigation = useNavigation();

  React.useEffect(() => {
    getNews().then(res => {
      return setData(
        JSON.parse(res!).map((val: any) => {
          const day = new Date(val.updatedAt).getDate();
          const year = new Date(val.updatedAt).getFullYear();
          const months = [
            'Января',
            'Февраля',
            'Марта',
            'Апреля',
            'Мая',
            'Июня',
            'Июля',
            'Августа',
            'Сентября',
            'Октября',
            'Ноября',
            'Декабря',
          ];
          const month = months[new Date(val.updatedAt).getMonth()];

          return {...val, updatedAt: `${day} ${month} ${year}`};
        }),
      );
    });
  }, []);

  const renderItem = ({item}: any) => {
    const {
      id,
      likesCount,
      commentsCount,
      isFavorite,
      imageURL,
      title,
      description,
      avatarCompanyURL,
      companyName,
      updatedAt,
      viewCounts,
    } = item;
    return (
      <Card>
        <View style={styles.headerCard}>
          <View>
            <Avatar source={{uri: avatarCompanyURL}} />
          </View>
          <View>
            <Text>{companyName} </Text>
            <Text style={styles.dateText}>Опубликованно: {updatedAt}</Text>
          </View>
        </View>
        <Divider />
        <View style={styles.contentCard}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('NewsItem', {newsItemId: id})}>
            <View>
              <Text style={styles.title} category="h6">
                {title}
              </Text>
              <Image source={{uri: imageURL}} style={styles.imageNews} />
              <Text style={styles.description} category="">
                {description}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerWrapper}>
            <Button
              accessoryLeft={() => <HeartIcon isFavorite={isFavorite} />}
              appearance="ghost"
              style={[styles.button, styles.headerIconButton]}>
              {likesCount}
            </Button>
            <Button
              accessoryLeft={CommentIcon}
              appearance="ghost"
              style={styles.button}>
              {commentsCount}
            </Button>
          </View>
          <View style={styles.footerWrapper}>
            <ViewIcon />
            <Text style={styles.viewCounts}>{viewCounts}</Text>
          </View>
        </View>
      </Card>
    );
  };

  return (
    <View>
      {isEmpty(data) && <Text>Нет новостей</Text>}
      {!isEmpty(data) && <FlatList data={data} renderItem={renderItem} />}
    </View>
  );
};

export default NewsContent;
