import React, { useState } from 'react';
import * as ErrorRecovery from 'expo-error-recovery';
import {
  Button,
  Input,
  KeyboardAvoidingView,
  Layout,
  Logo,
  View,
  StyleSheet,
  Text,
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
  },
  form: {
    flex: 3,
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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignup = async () => {
    try {
      await nhost.auth.signUp({
        email,
        password,
        options: { displayName: name },
      });
    } catch (e) {
      ErrorRecovery.setRecoveryProps({
        currentScreen: AuthStackEnum.SignupScreen,
      });
    }
  };

  const goToLogin = () => {
    navigation.navigate(AuthStackEnum.LoginScreen);
  };

  return (
    <KeyboardAvoidingView>
      <Layout width="100%" height="100%">
        <View style={styles.logo}>
          <Logo size="lg" />
        </View>

        <Layout direction="vertical" style={styles.form}>
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

          <Button size="large" onPress={handleSignup}>
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
