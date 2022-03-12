import { useWindowDimensions } from 'react-native';

export const useComputedWidth = (width: number | string): number => {
  const { width: deviceWidth } = useWindowDimensions();

  if (typeof width === 'string' && width.endsWith('%')) {
    const [percentStr] = width.split('%');
    return (parseInt(percentStr, 10) / 100) * deviceWidth;
  }
  if (typeof width === 'number') {
    return width;
  }
  return 0;
};
