import React from 'react';
import {View} from 'react-native';
import {Text, Button} from '@ui-kitten/components';
import TextInputMask from 'react-native-text-input-mask';
import {useKeycloak} from '@react-keycloak/native';
import styles from './AuthScreenStyles';

const AuthScreen: React.FC = (props: any) => {
  const {keycloak, initialized} = useKeycloak();

  if (!initialized) {
    return <Text>Loading ...</Text>;
  }

  if (keycloak?.authenticated) {
    props.navigation.reset({
      index: 0,
      routes: [{name: 'Tabs'}],
    });
  }

  return (
    <View style={styles.screen}>
      <View>
        <Button onPress={() => keycloak?.login()}>Вход</Button>
        <Button style={styles.signupBtn}>Регистрация</Button>
        <View style={styles.confirmedTextWrapper}>
          <Text style={styles.confirmedText}>
            Продолжая,вы соглашаетесь со сбором и обработкой персональных данных
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AuthScreen;
