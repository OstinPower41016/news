import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import MoreScreen from '../../screens/MoreScreen/MoreScreen';

const MoreStack = createStackNavigator();

const MoreStackScreen = () => {
  return (
    <MoreStack.Navigator>
      <MoreStack.Screen
        name="More"
        component={MoreScreen}
        options={{title: 'Eще'}}
      />
    </MoreStack.Navigator>
  );
};

export default MoreStackScreen;

const styles = StyleSheet.create({});
