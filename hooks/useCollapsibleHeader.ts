import { useEffect, useLayoutEffect, useRef, useState } from 'react';
// import deepmerge from 'deepmerge';
import isEqual from 'fast-deep-equal';
import Constants from 'expo-constants';
import {
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  SAFE_BOUNCE_HEIGHT,
  HEADER_HEIGHT,
  OUR_COLORS,
} from '../utils/constants';
import { getStatusBarHeight } from '../utils/tokens';
import { createHeaderBackground } from './createHeaderBackground';

export type Collapsible = {
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onScrollWithListener: (
    listener: (event: NativeSyntheticEvent<NativeScrollEvent>) => void,
  ) => (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  containerPaddingTop: number;
  scrollIndicatorInsetTop: number;
  positionY: Animated.AnimatedValue;
  translateY: Animated.AnimatedInterpolation;
  progress: Animated.AnimatedInterpolation;
  opacity: Animated.AnimatedInterpolation;
  headerHeight: number;
};

export type UseCollapsibleOptions = {
  navigationOptions?: { [key: string]: any };
  config?: {
    useNativeDriver?: boolean;
    collapsedColor?: string;
    // elevation?: number;
    // createHeaderBackground?: (
    //   params: createHeaderBackgroundParams
    // ) => React.ReactNode;
  };
};

export const useCollapsibleHeader = (
  collapsibleOptions?: UseCollapsibleOptions,
): Collapsible => {
  const { navigationOptions = {}, config = {} } = collapsibleOptions || {};

  const { headerStyle: userHeaderStyle = {} } = navigationOptions;

  const { collapsedColor, useNativeDriver = true } = config;

  const [headerStyle, setHeaderStyle] = useState(userHeaderStyle);

  const backgroundColor =
    headerStyle?.backgroundColor ?? OUR_COLORS.primaryColor;

  useEffect(() => {
    if (!isEqual(headerStyle, userHeaderStyle)) {
      setHeaderStyle(userHeaderStyle);
    }
  }, [userHeaderStyle, headerStyle]);

  const navigation = useNavigation();

  const positionY = useRef(new Animated.Value(0)).current;

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: positionY } } }],
    { useNativeDriver },
  );

  const onScrollWithListener = (
    listener: (event: NativeSyntheticEvent<NativeScrollEvent>) => void,
  ) =>
    Animated.event([{ nativeEvent: { contentOffset: { y: positionY } } }], {
      useNativeDriver,
      listener,
    });

  const headerHeight =
    (headerStyle.height ?? HEADER_HEIGHT) - Constants.statusBarHeight;
  const safeBounceHeightWithHeader = SAFE_BOUNCE_HEIGHT + headerHeight;

  const containerPaddingTop = headerHeight + getStatusBarHeight();

  const animatedDiffClampY = Animated.diffClamp(
    positionY,
    headerHeight,
    safeBounceHeightWithHeader,
  );

  const progress = animatedDiffClampY.interpolate({
    inputRange: [SAFE_BOUNCE_HEIGHT, safeBounceHeightWithHeader],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const translateY = Animated.multiply(progress, -headerHeight);
  const opacity = Animated.subtract(1, progress);

  useLayoutEffect(() => {
    const headerBackground = createHeaderBackground({
      translateY,
      opacity,
      backgroundColor,
      collapsedColor: collapsedColor ?? backgroundColor,
      component: navigationOptions.headerBackground,
    });

    const options = {
      ...navigationOptions,
      headerStyle: {
        ...headerStyle,
        transform: [{ translateY }],
        opacity,
      },
      headerBackground,
      headerTransparent: true,
    };
    navigation.setOptions(options);
  }, [
    headerStyle,
    backgroundColor,
    collapsedColor,
    navigationOptions,
    translateY,
    navigation,
    opacity,
  ]);

  return {
    onScroll,
    onScrollWithListener,
    containerPaddingTop,
    scrollIndicatorInsetTop: headerHeight,
    headerHeight,
    positionY,
    translateY,
    progress,
    opacity,
  };
};
