import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import EventsScreen from '../../screens/EventsScreen/EventsScreen';

const EventsStack = createStackNavigator();

const EventsStackScreen = () => {
  return (
    <EventsStack.Navigator>
      <EventsStack.Screen
        name="Events"
        component={EventsScreen}
        options={{title: 'Cобытия'}}
      />
    </EventsStack.Navigator>
  );
};

export default EventsStackScreen;

const styles = StyleSheet.create({});
