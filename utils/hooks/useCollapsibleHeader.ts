import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import isEqual from 'fast-deep-equal';
import Constants from 'expo-constants';
import {
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import Colors from '@styles/colors';
import { SAFE_BOUNCE_HEIGHT, HEADER_HEIGHT, OUR_COLORS } from '../constants';
import { getStatusBarHeight } from '../tokens';
import { createHeaderBackground } from './createHeaderBackground';

export type Collapsible = {
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onScrollWithListener: (
    listener: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  ) => (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  containerPaddingTop: number;
  scrollIndicatorInsetTop: number;
  positionY: Animated.AnimatedValue;
  translateY: Animated.AnimatedInterpolation;
  progress: Animated.AnimatedInterpolation;
  opacity: Animated.AnimatedInterpolation;
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
  const {
    navigationOptions = {},
    config = {},
  } = collapsibleOptions || {};

  const {
    headerStyle: userHeaderStyle = {},
  } = navigationOptions;

  const {
    collapsedColor,
    useNativeDriver = true,
  } = config;

  const [headerStyle, setHeaderStyle] = useState(userHeaderStyle);

  const backgroundColor = headerStyle?.backgroundColor ?? OUR_COLORS.primaryColor;

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
  ) => Animated.event(
    [{ nativeEvent: { contentOffset: { y: positionY } } }],
    { useNativeDriver, listener },
  );

  const headerHeight = (headerStyle.height ?? HEADER_HEIGHT) - Constants.statusBarHeight;
  const safeBounceHeightWithHeader = SAFE_BOUNCE_HEIGHT + headerHeight;

  const animatedDiffClampY = Animated.diffClamp(
    positionY,
    0,
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
    const options = {
      ...navigationOptions,
      headerStyle: {
        ...headerStyle,
        transform: [{ translateY }],
        opacity,
      },
      headerBackground: createHeaderBackground({
        translateY,
        opacity,
        backgroundColor,
        collapsedColor: collapsedColor ?? backgroundColor,
        headerBackground: navigationOptions.headerBackground,
      }),
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
    containerPaddingTop: headerHeight + getStatusBarHeight(),
    scrollIndicatorInsetTop: headerHeight,
    positionY,
    translateY,
    progress,
    opacity,
  };
};
