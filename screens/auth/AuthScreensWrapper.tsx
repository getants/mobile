import React from 'react';
import { useAssets } from 'expo-asset';
import styled from 'styled-components/native';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Flex } from '../../components';

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

export const AuthScreensWrapper: React.FC<Props> = (props) => {
  const { children } = props;
  /* eslint-disable-next-line global-require */
  const [assets, error] = useAssets([require('../../assets/logo-curve.png')]);

  if (!assets || error) {
    return <SmallHeader>Please wait...</SmallHeader>;
  }

  const imageUri = { uri: assets[0]?.uri ?? 'fallback-uri' };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Flex height="100%" justify="space-between" backgroundColor="white">
        <LogoBackground source={imageUri} />

        <Flex
          width="100%"
          justify="space-around"
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
