import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import ViewCenter from '../../components/ViewCenter';

import NewsContent from '../../components/NewsScreen/NewsContent';

const NewsScreen = (props: any) => {
  return (
    <ViewCenter>
      <NewsContent />
    </ViewCenter>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({});
