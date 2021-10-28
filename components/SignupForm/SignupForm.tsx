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
        placeholder="Full name"
        value={input.displayName}
        onChangeText={(value) => changeInput('displayName', value)}
      />

      <TextInput
        placeholder="Email"
        value={input.email}
        onChangeText={(value) => changeInput('email', value)}
      />

      <TextInput
        secureTextEntry
        placeholder="Password"
        value={input.password}
        onChangeText={(value) => changeInput('password', value)}
      />

      <Button
        style={s('mb-5')}
        title="Signup"
        titleStyle={s('py-10')}
        onPress={handleSubmit}
      />

      <Button
        type="clear"
        title="Login"
        titleStyle={s('py-5')}
        onPress={handleSwitchView}
      />
    </Flex>
  );
};

export default SignupForm;
