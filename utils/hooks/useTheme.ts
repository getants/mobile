import { useContext } from 'react';
import { useTheme as useKittenTheme } from '@ui-kitten/components';
import { ThemeContext } from '../../components/ThemeProvider';
import { ColorMap } from '../constants';

export const mapColors = (themeObj: Record<string, string>) => {
  const keys = Object.keys(ColorMap);
  return keys.reduce((acc, key) => {
    if (!acc[key]) {
      const colorId = ColorMap[key];
      return {
        ...acc,
        [key]: themeObj[colorId],
      };
    }
    return acc;
  }, {} as Record<string, string>);
};

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
