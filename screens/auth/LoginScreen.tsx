import React, { useCallback, useEffect, useRef, useState } from 'react';
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
import { useFocusEffect } from '../../utils/hooks';
import { nhost } from '../../utils/nhost';
import { AuthStackEnum } from '../../utils/enums';
import type { LoginScreenNavigationProp } from '../../utils/types';

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  form: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export type LoginFormInput = {
  email: string;
  password: string;
};

export type Props = {
  navigation: LoginScreenNavigationProp;
};

export const LoginScreen = (props: Props) => {
  const { navigation } = props;
  const emailInputRef = useRef(null);

  const [input, setInput] = useState<LoginFormInput>({
    email: '',
    password: '',
  });

  const changeInput = (key: keyof LoginFormInput, value: string) => {
    const newInputValue = {
      ...input,
      [key]: value,
    };
    setInput(newInputValue);
  };

  const handleLogin = async () => {
    try {
      await nhost.auth.signIn(input);
    } catch (err) {
      ErrorRecovery.setRecoveryProps({
        currentScreen: AuthStackEnum.SignupScreen,
        error: err,
      });
    }
  };

  const goToSignup = () => {
    navigation.navigate(AuthStackEnum.SignupScreen);
  };

  // Prevent go back to initial stack
  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
      }),
    [navigation],
  );

  useFocusEffect(
    useCallback(() => {
      if (emailInputRef) {
        // Why not do anything?
        (emailInputRef?.current as any).focus();
      }
    }, [emailInputRef]),
  );

  return (
    <KeyboardAvoidingView>
      <Layout width="100%" height="100%">
        <View style={styles.logo}>
          <Logo size="lg" />
        </View>

        <Layout direction="vertical" style={styles.form}>
          <Text category="h5" style={styles.title}>
            Login
          </Text>

          <Input
            autoFocus
            size="large"
            textContentType="emailAddress"
            keyboardType="email-address"
            placeholder="Email"
            ref={emailInputRef}
            value={input.email}
            onChangeText={(v: string) => changeInput('email', v)}
          />

          <Input
            secureTextEntry
            size="large"
            textContentType="password"
            placeholder="Password"
            value={input.password}
            onChangeText={(v: string) => changeInput('password', v)}
          />

          <Button size="large" onPress={handleLogin}>
            Login
          </Button>

          <Button appearance="ghost" onPress={goToSignup}>
            Signup
          </Button>
        </Layout>
      </Layout>
    </KeyboardAvoidingView>
  );
};
