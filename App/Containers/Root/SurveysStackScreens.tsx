import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import SurveysScreen from '../SurveyScreen/SurveyScreen';

const SurveysStack = createStackNavigator();

const SurveysStackScreens = () => {
  return (
    <SurveysStack.Navigator>
      <SurveysStack.Screen name="Surveys" component={SurveysScreen} />
    </SurveysStack.Navigator>
  );
};

export default SurveysStackScreens;

const styles = StyleSheet.create({});
