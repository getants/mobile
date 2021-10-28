import React, { useState } from 'react';
import {
  Button,
  Input as TextInput,
  Text as Title,
} from 'react-native-elements';
import { style as s } from '@/utils/tokens';
import { Flex } from '../Flex';

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

const SignupForm = (props: SignupFormProps) => {
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
      <Title style={{ textAlign: 'center' }}>
        Signup
      </Title>

      <TextInput
        autoFocus
        label="Full name"
        style={s('mb-10')}
        value={input.displayName}
        onChangeText={(value) => changeInput('displayName', value)}
      />

      <TextInput
        autoFocus
        label="Email"
        style={s('mb-10')}
        value={input.email}
        onChangeText={(value) => changeInput('email', value)}
      />

      <TextInput
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
        Signup
      </Button>

      <Button
        // contentStyle={s('pt-10 pb-10')}
        onPress={handleSwitchView}
      >
        Login
      </Button>
    </Flex>
  );
};

export default SignupForm;
