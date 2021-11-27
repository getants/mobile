import React, { useState } from 'react';
import {
  Button,
  TextField,
  Text,
} from 'react-native-ui-lib';
import { Flex } from '../Flex';
import { style as s } from '../../utils/tokens';

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
    <Flex>
      <Text style={{ textAlign: 'center' }}>Signup</Text>

      <TextField
        autoFocus
        placeholder="Full name"
        value={input.displayName}
        onChangeText={(v: string) => changeInput('displayName', v)}
      />

      <TextField
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
        label="Signup"
        titleStyle={s('py-10')}
        onPress={handleSubmit}
      />

      <Button
        outline
        label="Login"
        titleStyle={s('py-5')}
        onPress={handleSwitchView}
      />
    </Flex>
  );
};
