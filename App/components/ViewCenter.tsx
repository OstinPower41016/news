import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ViewCenter: React.FC = props => {
  return <View style={styles.box}>{props.children}</View>;
};

export default ViewCenter;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
