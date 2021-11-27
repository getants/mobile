import React, { useState } from 'react';
import {
  Button,
  Input,
  Text,
  Layout,
} from '../../../components';

export type SignupFormInput = {
  displayName: string;
  email: string;
  password: string;
};

export type SignupFormProps = {
  onChange?: (input: SignupFormInput) => void;
  onSubmit?: (input: SignupFormInput) => Promise<void>;
  onSwitchView?: () => void;
};

const initialInput: SignupFormInput = {
  displayName: '',
  email: '',
  password: '',
};

export const SignupForm = (props: SignupFormProps) => {
  const { onChange, onSubmit, onSwitchView } = props;
  const [input, setInput] = useState<SignupFormInput>(initialInput);

  const changeInput = (key: keyof SignupFormInput, value: string) => {
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
      <Text style={{ textAlign: 'center' }}>Signup</Text>

      <Input
        autoFocus
        placeholder="Full name"
        value={input.displayName}
        onChangeText={(v: string) => changeInput('displayName', v)}
      />

      <Input
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
        Signup
      </Button>

      <Button ghost onPress={handleSwitchView}>
        Login
      </Button>
    </Layout>
  );
};
