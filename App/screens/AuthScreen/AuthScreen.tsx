import React from 'react';
import {View} from 'react-native';
import {Text, Button} from '@ui-kitten/components';
import TextInputMask from 'react-native-text-input-mask';
import {useKeycloak} from '@react-keycloak/native';
import styles from './AuthScreenStyles';
import {NavigationAction} from '@react-navigation/native';

const AuthScreen: React.FC = (props: any) => {
  // const [phoneNumber, setPhoneNumber] = React.useState('');
  const {keycloak, initialized} = useKeycloak();

  // const isDisabledBtnContinue = phoneNumber.length < 18;

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
    // <View style={styles.screen}>
    //   <View>
    //     <View style={styles.titleWrapper}>
    //       <Text style={styles.title} category="h6">
    //         Введите номер телефона
    //       </Text>
    //     </View>
    //     <View style={{flexDirection: 'row', justifyContent: 'center'}}>
    //       <View style={styles.inputWrapper}>
    //         <TextInputMask
    //           style={[styles.input, {color: 'black'}]}
    //           value={phoneNumber}
    //           mask="+7 ([000]) [000]-[00]-[00]"
    //           onChangeText={masked => setPhoneNumber(masked)}
    //           placeholder="Номер телефона"
    //           placeholderTextColor="#ccc"
    //         />
    //       </View>
    //     </View>
    //     <View style={styles.confirmedTextWrapper}>
    //       <Text style={styles.confirmedText}>
    //         Продолжая,вы соглашаетесь со сбором и обработкой персональных данных
    //       </Text>
    //     </View>
    //   </View>
    //   <View style={styles.buttonContainer}>
    //     <View style={styles.buttonGroup}>
    //       <Button
    //         disabled={isDisabledBtnContinue}
    //         onPress={() => keycloak?.login()}>
    //         Продолжить
    //       </Button>

    //       <Button style={styles.signupBtn}>Регистрация</Button>
    //     </View>
    //   </View>
    // </View>
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
