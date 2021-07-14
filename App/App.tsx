import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {NavigationContainer} from '@react-navigation/native';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {ReactNativeKeycloakProvider} from '@react-keycloak/native';

import keycloak from './keycloak';
import RootScreen from './containers/Root/RootScreen';

const App = () => {
  return (
    <ReactNativeKeycloakProvider
      authClient={keycloak}
      initOptions={{
        redirectUri: 'myapp://Tabs',
      }}>
      <NavigationContainer>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <RootScreen />
        </ApplicationProvider>
      </NavigationContainer>
    </ReactNativeKeycloakProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
