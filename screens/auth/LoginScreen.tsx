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
import { useActions, useFocusEffect, useNotifications } from '../../hooks';
import { nhost } from '../../utils/nhost';
import { AuthStackEnum } from '../../utils/enums';
import { registerForPushNotifications } from '../../utils/notification';
import type { LoginScreenNavigationProp, Users } from '../../utils/types';

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 30,
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
  const { handleUpdateUser } = useActions();
  const { setNotificationStates } = useNotifications();

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
      const { session, error } = await nhost.auth.signIn(input);
      if (session && !error) {
        const token = await registerForPushNotifications();
        if (session.user) {
          setNotificationStates((prev) => ({
            ...prev,
            token,
            hasRegistered: true,
          }));

          // When the type is fixed, remove this cast
          const oldMeta = (session.user as unknown as Users).metadata;
          // We remove the token if user changes his mind
          delete oldMeta.notificationToken;

          await handleUpdateUser(session.user.id, {
            metadata: {
              ...oldMeta,
              ...(token && { notificationToken: token }),
            },
          });

          if (__DEV__) {
            console.info('> Registered Push Notifications!', token);
          }
        }
      }
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
