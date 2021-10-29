import React, { useState } from 'react';
import {
  Button,
  Input,
  Text as Title,
} from 'react-native-elements';
import { style as s } from '@/utils/tokens';
import { useAuth } from '@/utils/states';
import { Flex } from '../Flex';

export type LoginFormInput = {
  email: string;
  password: string;
};

export type LoginFormProps = {
  onChange?: (input: LoginFormInput) => void;
  onSubmit?: (input: LoginFormInput) => Promise<void>;
  onSwitchView?: () => void;
};

const LoginForm = (props: LoginFormProps) => {
  const { onChange, onSubmit, onSwitchView } = props;
  const [input, setInput] = useState<LoginFormInput>({ email: '', password: '' });

  const { isLoggedIn, me, setMe } = useAuth();
  console.log('### isLoggedIn: ', isLoggedIn);
  console.log('### me: ', me);

  const changeInput = (key: keyof LoginFormInput, value: string) => {
    const newInputValue = {
      ...input,
      [key]: value,
    };
    if (typeof onChange === 'function') {
      onChange(newInputValue);
    }
    setInput(newInputValue);
  };

  const handleSubmit = () => {
    if (typeof onSubmit === 'function') {
      onSubmit(input);
    }
    setMe({ email: 'asdfasdfasdfasdfasdfadsf' });
  };

  const handleSwitchView = () => {
    if (typeof onSwitchView === 'function') {
      onSwitchView();
    }
  };

  return (
    <Flex>
      <Title style={{ textAlign: 'center' }}>
        Login
      </Title>

      <Input
        autoFocus
        placeholder="Email"
        value={input.email}
        onChangeText={(value) => changeInput('email', value)}
      />

      <Input
        secureTextEntry
        placeholder="Password"
        value={input.password}
        onChangeText={(value) => changeInput('password', value)}
      />

      <Button
        style={s('mb-5')}
        title="Login"
        titleStyle={s('py-10')}
        onPress={handleSubmit}
      />

      <Button
        type="clear"
        title="Signup"
        titleStyle={s('py-5')}
        onPress={handleSwitchView}
      />
    </Flex>
  );
};

export default LoginForm;
