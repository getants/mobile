import React from 'react';
import { useAssets } from 'expo-asset';
import styled from 'styled-components/native';
import {
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Flex } from '@/components';
// import Colors from '@styles/colors';

const LogoBackground = styled.Image`
  width: 100%;
  height: 15%;
  min-height: 150px;
`;
const SmallHeader = styled.Text`
  font-size: 16px;
  color: #999999;
  padding: 10px 0;
`;

export type Props = {
  children: React.ReactNode;
};

const LoginScreen = (props: Props) => {
  const { children } = props;
  const [assets, error] = useAssets([require('@/assets/logo-curve.png')]);

  if (!assets || error) {
    return <SmallHeader>Please wait...</SmallHeader>;
  }

  const imageUri = { uri: assets[0]?.uri ?? 'fallback-uri' };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Flex justify="space-between" height="100%" backgroundColor="white">
        <LogoBackground source={imageUri} />

        <Flex
          justify="space-around"
          width="100%"
          paddingLeft={20}
          paddingRight={20}
          marginBottom={5}
        >
          {children}
        </Flex>
      </Flex>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
