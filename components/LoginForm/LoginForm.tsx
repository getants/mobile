import React, { useState } from 'react';
import {
  Button,
  Input,
  Text as Title,
} from 'react-native-elements';
import s from '@/utils/tokens';
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
        label="Email"
        style={s('mb-10')}
        value={input.email}
        onChangeText={(value) => changeInput('email', value)}
      />

      <Input
        secureTextEntry
        style={s('mb-20')}
        label="Password"
        value={input.password}
        onChangeText={(value) => changeInput('password', value)}
      />

      <Button
        // mode="contained"
        // contentStyle={s('pt-10 pb-10')}
        style={s('mb-5')}
        onPress={handleSubmit}
      >
        Login
      </Button>

      <Button
        // contentStyle={s('pt-10 pb-10')}
        onPress={handleSwitchView}
      >
        Signup
      </Button>
    </Flex>
  );
};

export default LoginForm;
