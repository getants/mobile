import React from 'react';
import {
  KeyboardAvoidingView as NativeKeyboardAvoiding,
  Platform,
} from 'react-native';
import type { KeyboardAvoidingViewProps as NativeKeyboardAvoidingProps } from 'react-native';

export const KeyboardAvoidingView: React.FC<NativeKeyboardAvoidingProps> = ({
  children,
}) => {
  const behavior = Platform.OS === 'ios' ? 'padding' : 'height';
  return (
    <NativeKeyboardAvoiding behavior={behavior} keyboardVerticalOffset={1}>
      {children}
    </NativeKeyboardAvoiding>
  );
};
