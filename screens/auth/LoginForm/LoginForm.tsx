import React, { useState } from 'react';
import {
  Button,
  Layout,
  Input,
  Text,
} from '../../../components';

export type LoginFormInput = {
  email: string;
  password: string;
};

export type LoginFormProps = {
  onChange?: (input: LoginFormInput) => void;
  onSubmit?: (input: LoginFormInput) => Promise<void>;
  onSwitchView?: () => void;
};

export const LoginForm = (props: LoginFormProps) => {
  const { onChange, onSubmit, onSwitchView } = props;
  const [input, setInput] = useState<LoginFormInput>({
    email: '',
    password: '',
  });

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
    <Layout>
      <Text style={{ textAlign: 'center' }}>Login</Text>

      <Input
        autoFocus
        placeholder="Email"
        value={input.email.toLowerCase()}
        onChangeText={(v: string) => changeInput('email', v.toLowerCase())}
      />

      <Input
        secureTextEntry
        placeholder="Password"
        value={input.password}
        onChangeText={(v: string) => changeInput('password', v)}
      />

      <Button onPress={handleSubmit}>
        Login
      </Button>

      <Button ghost onPress={handleSwitchView}>
        Signup
      </Button>
    </Layout>
  );
};
