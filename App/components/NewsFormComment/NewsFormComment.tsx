import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Input, Button, Card} from '@ui-kitten/components';

interface INewsFormComment {
  style?: any;
}

const NewsFormComment: React.FC<INewsFormComment> = props => {
  return (
    <Card>
      <View style={[styles.card, props.style]}>
        <Input
          size="large"
          multiline={true}
          placeholder="Ваш комментарий..."
          textStyle={{minHeight: 64}}
          style={styles.input}
        />
        <View style={styles.buttonWrapper}>
          <Button size="small" style={styles.button}>
            Отправить
          </Button>
        </View>
      </View>
    </Card>
  );
};

export default NewsFormComment;

const styles = StyleSheet.create({
  card: {},
  input: {
    marginBottom: 10,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    width: '40%',
  },
});
