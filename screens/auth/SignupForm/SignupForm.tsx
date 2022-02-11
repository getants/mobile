import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Button, Input, Layout, Text } from '../../../components';

const SmallHeader = styled(Text)`
  font-weight: bold;
  text-align: center;
`;

export type SignupFormInput = {
  options?: {
    displayName?: string;
  };
  email: string;
  password: string;
};

export type SignupFormProps = {
  onChange?: (input: SignupFormInput) => void;
  onSubmit?: (input: SignupFormInput) => Promise<void>;
  onSwitchView?: () => void;
};

export const SignupForm = (props: SignupFormProps) => {
  const { onSubmit, onSwitchView } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (typeof onSubmit === 'function') {
      onSubmit({
        email,
        password,
        options: { displayName: name },
      });
    }
  };

  const handleSwitchView = () => {
    if (typeof onSwitchView === 'function') {
      onSwitchView();
    }
  };

  return (
    <Layout transparent>
      <SmallHeader category="h5">Signup</SmallHeader>

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

      <Button onPress={handleSubmit}>Signup</Button>

      <Button appearance="ghost" onPress={handleSwitchView}>
        Login
      </Button>
    </Layout>
  );
};
