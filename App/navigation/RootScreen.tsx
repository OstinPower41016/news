import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import AuthScreen from '../screens/AuthScreen/AuthScreen';
import AppTabBarScreen from './AppTabBarScreen';

const RootStack = createStackNavigator();

const RootScreen = () => {
  return (
    <RootStack.Navigator initialRouteName="Tabs">
      <RootStack.Screen
        name="Auth"
        component={AuthScreen}
        options={{title: 'Авторизация'}}
      />
      <RootStack.Screen
        name="Tabs"
        component={AppTabBarScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default RootScreen;

const styles = StyleSheet.create({});
