import React from 'react';
import {
  KeyboardAvoidingView as NativeKeyboardAvoiding,
  Platform,
} from 'react-native';
import type { KeyboardAvoidingViewProps as NativeKeyboardAvoidingProps } from 'react-native';

export const KeyboardAvoidingView: React.FC<NativeKeyboardAvoidingProps> = ({
  children,
}) => {
  const behavior = Platform.OS === 'ios' ? 'padding' : undefined;
  return (
    <NativeKeyboardAvoiding behavior={behavior}>
      {children}
    </NativeKeyboardAvoiding>
  );
};
