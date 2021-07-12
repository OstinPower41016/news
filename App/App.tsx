import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {NavigationContainer} from '@react-navigation/native';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import AppTabBarScreen from './Containers/Root/AppTabBarScreen';

const App = () => {
  return (
    <NavigationContainer>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <AppTabBarScreen />
      </ApplicationProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
