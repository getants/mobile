import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Button, Input, Layout, Text } from '../../../components';

const SmallHeader = styled(Text)`
  font-weight: bold;
  text-align: center;
`;

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
    <Layout transparent>
      <SmallHeader category="h5">Login</SmallHeader>

      <Input
        autoFocus
        size="large"
        textContentType="emailAddress"
        keyboardType="email-address"
        placeholder="Email"
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

      <Button size="large" onPress={handleSubmit}>
        Login
      </Button>

      <Button appearance="ghost" onPress={handleSwitchView}>
        Signup
      </Button>
    </Layout>
  );
};
