import React, { useState } from 'react';
import * as ErrorRecovery from 'expo-error-recovery';
import {
  Button,
  CheckBox,
  Input,
  KeyboardAvoidingView,
  Layout,
  Logo,
  StyleSheet,
  Text,
  View,
} from '../../components';
import { nhost } from '../../utils/nhost';
import { AuthStackEnum } from '../../utils/enums';
import type { LoginScreenNavigationProp } from '../../utils/types';

const styles = StyleSheet.create({
  logo: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  form: {
    flex: 3,
  },
  terms: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export type Props = {
  navigation: LoginScreenNavigationProp;
};

export const SignupScreen = (props: Props) => {
  const { navigation } = props;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const goToLogin = () => {
    navigation.navigate(AuthStackEnum.LoginScreen);
  };

  const handleSignup = async () => {
    try {
      await nhost.auth.signUp({
        email,
        password,
        options: {
          displayName: name,
          metadata: {
            mobile: true,
          },
        },
      });

      goToLogin();
    } catch (e) {
      ErrorRecovery.setRecoveryProps({
        currentScreen: AuthStackEnum.SignupScreen,
      });
    }
  };

  const shouldDisableSubmit =
    !email || email.length <= 2 || !password || password.length < 8 || !agree;

  return (
    <KeyboardAvoidingView>
      <Layout width="100%" height="100%">
        <View style={styles.logo}>
          <Logo size="lg" />
        </View>

        <Layout direction="vertical" gap={10} style={styles.form}>
          <Text category="h5" style={styles.title}>
            Signup
          </Text>

          <Input
            autoFocus
            size="large"
            placeholder="Full name"
            value={name}
            onChangeText={setName}
          />

          <Input
            size="large"
            textContentType="emailAddress"
            keyboardType="email-address"
            placeholder="Email"
            value={email}
            onChangeText={(v) => setEmail(v)}
          />

          <Input
            secureTextEntry
            size="large"
            textContentType="password"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />

          <CheckBox
            style={styles.terms}
            checked={agree}
            onChange={(nextChecked: boolean) => setAgree(nextChecked)}
          >
            Agree with GetAnts Terms of Services
          </CheckBox>

          <Button
            size="large"
            disabled={shouldDisableSubmit}
            onPress={handleSignup}
          >
            Signup
          </Button>

          <Button appearance="ghost" onPress={goToLogin}>
            Login
          </Button>
        </Layout>
      </Layout>
    </KeyboardAvoidingView>
  );
};
