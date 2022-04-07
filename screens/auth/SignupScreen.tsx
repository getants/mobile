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
import { isEqual, getEnvironment } from '../../utils/tokens';
import { nhost } from '../../utils/nhost';
import { AuthStackEnum } from '../../utils/enums';
import type { LoginScreenNavigationProp } from '../../utils/types';
import type { InputKey } from './LoginScreen';

const { HOST_URL } = getEnvironment();

const styles = StyleSheet.create({
  logo: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 1,
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
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionText: {
    fontSize: 12,
    color: '#FF0000',
  },
  error: {
    textAlign: 'center',
  },
});

export type SignupFormInput = {
  name?: string;
  email: string;
  password: string;
};
export type Props = {
  navigation: LoginScreenNavigationProp;
};

const initialInput = {
  name: '',
  email: '',
  password: '',
};
export const SignupScreen = (props: Props) => {
  const { navigation } = props;

  const [input, setInput] = useState(initialInput);
  const [agree, setAgree] = useState(false);

  const [errorMessages, setErrorMessages] = useState({
    name: '',
    email: '',
    password: '',
    other: '',
  });

  const renderCaption = (inputKey: Exclude<InputKey, 'other'>) => {
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

  const goToLogin = (message?: string) => {
    navigation.navigate(AuthStackEnum.LoginScreen, {
      message,
    });
  };

  const changeInput = (key: keyof SignupFormInput, value: string) => {
    const newInputValue = {
      ...input,
      [key]: value,
    };
    setInput(newInputValue);

    const validatedMessage = validate(key);
    setErrorMessages({ ...errorMessages, [key]: validatedMessage });
  };

  const handleSignup = async () => {
    try {
      await nhost.auth.signUp({
        email: input.email,
        password: input.password,
        options: {
          displayName: input.name,
          metadata: {
            mobile: true,
          },
          redirectTo: `${HOST_URL}/setup?mobile=44`,
        },
      });
      // console.log('response signup', response, HOST_URL, input);

      // goToLogin('Please check your inbox for confirmation link');
    } catch (e) {
      ErrorRecovery.setRecoveryProps({
        currentScreen: AuthStackEnum.SignupScreen,
      });
    }
  };

  const handleOnBlur = (inputType: InputKey) => {
    const validatedMessage = validate(inputType);
    setErrorMessages({ ...errorMessages, [inputType]: validatedMessage });
  };

  const shouldDisableSubmit =
    isEqual(initialInput, input) ||
    input.email.length <= 2 ||
    input.password.length < 8 ||
    !agree;

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

          {errorMessages.other && (
            <Text status="danger" style={styles.error}>
              Something wrong, please contact admin
            </Text>
          )}

          <Input
            autoFocus
            size="large"
            placeholder="Full name"
            value={input.name}
            caption={() => renderCaption('name')}
            onBlur={() => handleOnBlur('name')}
            onChangeText={(v: string) => changeInput('name', v)}
          />

          <Input
            size="large"
            textContentType="emailAddress"
            keyboardType="email-address"
            placeholder="Email"
            value={input.email}
            caption={() => renderCaption('email')}
            onBlur={() => handleOnBlur('email')}
            onChangeText={(v: string) => changeInput('email', v)}
          />

          <Input
            secureTextEntry
            size="large"
            textContentType="password"
            placeholder="Password"
            value={input.password}
            caption={() => renderCaption('password')}
            onBlur={() => handleOnBlur('password')}
            onChangeText={(v: string) => changeInput('password', v)}
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

          <Button appearance="ghost" onPress={() => goToLogin()}>
            Login
          </Button>
        </Layout>
      </Layout>
    </KeyboardAvoidingView>
  );
};
