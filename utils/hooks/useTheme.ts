import { useContext } from 'react';
import { useTheme as useKittenTheme } from '@ui-kitten/components';
import { ThemeContext } from '../../components/ThemeProvider';
import { ColorMap } from '../constants';

export const mapColors = (
  themeObj: Record<string, string>,
) => (Object.keys(ColorMap) as Array<keyof typeof ColorMap>).reduce((colors, key) => {
  const colorId: string = ColorMap[key];
  return {
    ...colors,
    [key]: themeObj[colorId],
  };
}, {} as Record<keyof typeof ColorMap, string>);

export const useTheme = () => {
  const theme = useKittenTheme();
  const colors = mapColors(theme);
  const { appearance, toggleAppearance } = useContext(ThemeContext);

  return {
    theme,
    colors,
    appearance,
    toggleAppearance,
  };
};
