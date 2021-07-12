import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '@ui-kitten/components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';

import EventsStackScreen from './EventsStackScreen';
import MoreStackScreen from './MoreStackScreen';
import NewsStackScreen from './NewsStackScreen';
import SurveysStackScreens from './SurveysStackScreens';

const AppTab = createBottomTabNavigator();

// Icons
const NewsIcon = (props: any) => <Icon name="book-open-outline" {...props} />;
const SurveyssIcon = (props: any) => (
  <Icon name="checkmark-square-2-outline" {...props} />
);
const EventsIcon = (props: any) => <Icon name="calendar-outline" {...props} />;
const MoreIcon = (props: any) => (
  <Icon name="more-vertical-outline" {...props} />
);

const AllIcon = (props: any) => (
  <Icon style={styles.icon} fill="#8F9BB3" name="star" />
);
//

const BottomTabBar = ({navigation, state}: any) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Новости" icon={NewsIcon} />
    <BottomNavigationTab title="События" icon={EventsIcon} />
    <BottomNavigationTab title="Анкеты" icon={SurveyssIcon} />
    <BottomNavigationTab title="Ещё" icon={MoreIcon} />
  </BottomNavigation>
);

const AppTabBarScreen = () => {
  return (
    <AppTab.Navigator tabBar={props => <BottomTabBar {...props} />}>
      <AppTab.Screen name="News" component={NewsStackScreen} />
      <AppTab.Screen name="Events" component={EventsStackScreen} />
      <AppTab.Screen name="Surveys" component={SurveysStackScreens} />
      <AppTab.Screen name="More" component={MoreStackScreen} />
    </AppTab.Navigator>
  );
};

export default AppTabBarScreen;

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});
