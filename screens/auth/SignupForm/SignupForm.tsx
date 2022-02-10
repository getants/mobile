import React, { useState } from 'react';
import { Button, Input, Text, Layout } from '../../../components';

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
    <Layout>
      <Text style={{ textAlign: 'center' }}>Signup</Text>

      <Input
        autoFocus
        placeholder="Full name"
        value={name}
        onChangeText={setName}
      />

      <Input
        placeholder="Email"
        value={email.toLowerCase()}
        onChangeText={(v) => setEmail(v.toLowerCase())}
      />

      <Input
        secureTextEntry
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
