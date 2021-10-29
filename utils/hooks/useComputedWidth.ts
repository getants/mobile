import { useWindowDimensions } from 'react-native';

const useComputedWidth = (width: number | string): number => {
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

export { useComputedWidth };
export default useComputedWidth;
