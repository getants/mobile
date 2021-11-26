import React, { useState } from 'react';
import { Button, TextField, Text as Title } from '../index';
import { style as s } from '../../utils/tokens';
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
    <Flex>
      <Title style={{ textAlign: 'center' }}>Login</Title>

      <TextField
        autoFocus
        placeholder="Email"
        value={input.email.toLowerCase()}
        onChangeText={(v: string) => changeInput('email', v.toLowerCase())}
      />

      <TextField
        secureTextEntry
        placeholder="Password"
        value={input.password}
        onChangeText={(v: string) => changeInput('password', v)}
      />

      <Button
        style={s('mb-5')}
        label="Login"
        titleStyle={s('py-10')}
        onPress={handleSubmit}
      />

      <Button
        outline
        label="Signup"
        titleStyle={s('py-5')}
        onPress={handleSwitchView}
      />
    </Flex>
  );
};

export default LoginForm;
