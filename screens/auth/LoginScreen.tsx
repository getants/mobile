import React, { useEffect, useRef, useState } from 'react';
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
import { useActions, useNotifications } from '../../hooks';
import { isEqual } from '../../utils/tokens';
import { nhost } from '../../utils/nhost';
import { AuthStackEnum } from '../../utils/enums';
import { registerForPushNotifications } from '../../utils/notification';
import type {
  LoginScreenNavigationProp,
  LoginScreenRouteProp,
  Users,
} from '../../utils/types';

export type InputKey = 'email' | 'password' | 'name' | 'other';

const initialInput = {
  email: '',
  password: '',
};

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
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionText: {
    fontSize: 12,
    color: '#FF0000',
  },
  messages: {
    textAlign: 'center',
  },
});

export type LoginFormInput = {
  email: string;
  password: string;
};

export type Props = {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
};

export const LoginScreen = (props: Props) => {
  const { navigation, route } = props;
  const { message } = route.params ?? {};

  const emailInputRef = useRef(null);
  const { handleUpdateUser } = useActions();
  const { setNotificationStates } = useNotifications();

  const [input, setInput] = useState<LoginFormInput>(initialInput);
  const [errorMessages, setErrorMessages] = useState({
    email: '',
    password: '',
    other: '',
  });

  const shouldDisable =
    isEqual(initialInput, input) ||
    input.email.length < 3 ||
    input.password.length < 8;

  const inputStatus = {
    email: errorMessages.email ? 'danger' : 'basic',
    password: errorMessages.password ? 'danger' : 'basic',
  };

  const renderCaption = (inputKey: Exclude<InputKey, 'name' | 'other'>) => {
    return (
      <View style={styles.captionContainer}>
        <Text style={styles.captionText}>{errorMessages[inputKey]}</Text>
      </View>
    );
  };

  const validate = (inputKey: string) => {
    const isInitial = isEqual(initialInput, input);
    switch (inputKey) {
      case 'email':
        return input.email.length < 3 && !isInitial
          ? 'Should use valid email address'
          : '';
      case 'password':
        return input.password.length < 6 && !isInitial
          ? 'Password should longer than 6 characters'
          : '';
      default:
        return '';
    }
  };

  const changeInput = (key: keyof LoginFormInput, value: string) => {
    const newInputValue = {
      ...input,
      [key]: value,
    };
    setInput(newInputValue);

    const validatedMessage = validate(key);
    setErrorMessages({ ...errorMessages, [key]: validatedMessage });
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
      } else if (error) {
        setErrorMessages({ ...errorMessages, other: error.message });
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

  const handleOnBlur = (inputKey: InputKey) => {
    const validatedMessage = validate(inputKey);
    setErrorMessages({ ...errorMessages, [inputKey]: validatedMessage });
  };

  // Prevent go back to initial stack
  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
      }),
    [navigation],
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
          {message && (
            <Text status="success" style={styles.messages}>
              {message}
            </Text>
          )}

          {errorMessages.other && (
            <Text status="danger" style={styles.messages}>
              Something wrong, please contact admin
            </Text>
          )}

          <Input
            autoFocus
            size="large"
            textContentType="emailAddress"
            keyboardType="email-address"
            placeholder="Email"
            onBlur={() => handleOnBlur('email')}
            caption={() => renderCaption('email')}
            status={inputStatus.email}
            ref={emailInputRef}
            value={input.email}
            onChangeText={(v: string) => changeInput('email', v)}
          />

          <Input
            secureTextEntry
            size="large"
            textContentType="password"
            placeholder="Password"
            onBlur={() => handleOnBlur('password')}
            caption={() => renderCaption('password')}
            status={inputStatus.password}
            value={input.password}
            onChangeText={(v: string) => changeInput('password', v)}
          />

          <Button size="large" disabled={shouldDisable} onPress={handleLogin}>
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
