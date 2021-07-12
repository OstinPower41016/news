import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import EventsScreen from '../EventsScreen/EventsScreen';

const EventsStack = createStackNavigator();

const EventsStackScreen = () => {
  return (
    <EventsStack.Navigator>
      <EventsStack.Screen name="Events" component={EventsScreen} />
    </EventsStack.Navigator>
  );
};

export default EventsStackScreen;

const styles = StyleSheet.create({});
