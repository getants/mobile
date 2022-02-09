import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import { HEADER_HEIGHT } from '../../utils/constants';

type Props = {
  goBack?: (o?: any) => void;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  handleSearch?: (o?: any) => void;
  handleMore?: (o?: any) => void;
};

const styles = StyleSheet.create({
  wrapper: {
    elevation: 0,
    height: HEADER_HEIGHT - Constants.statusBarHeight,
  },
});

const CustomHeader = (props: Props) => {
  const {
    goBack,
    title, // Company name
    subTitle, // Person in charge atm name
    handleSearch,
    handleMore,
  } = props;
  const navigation = useNavigation();

  const handleGoBack = () => {
    if (typeof goBack === 'function') {
      goBack();
    } else {
      navigation.dispatch(CommonActions.goBack());
    }
  };

  return (
    <Appbar.Header style={styles.wrapper}>
      <Appbar.BackAction onPress={handleGoBack} color="white" />
      <Appbar.Content color="white" title={title} subtitle={subTitle} />
      {handleSearch && <Appbar.Action icon="magnify" onPress={handleSearch} />}
      {handleMore && (
        <Appbar.Action icon="dots-vertical" onPress={handleMore} />
      )}
    </Appbar.Header>
  );
};

export default CustomHeader;
