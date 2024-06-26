import { useContext } from 'react';
import { useTheme as useKittenTheme } from '@ui-kitten/components';
import { ThemeContext } from '../components/ThemeProvider';
import { ColorMap } from '../utils/constants';

type ColorKey = keyof typeof ColorMap;
export type Colors = ReturnType<typeof mapColors>;

export const mapColors = (themeObj: Record<string, string>) =>
  (Object.keys(ColorMap) as Array<ColorKey>).reduce((colors, key) => {
    const colorId: string = ColorMap[key];
    return {
      ...colors,
      [key]: themeObj[colorId],
    };
  }, {} as Record<ColorKey, string>);

export const useTheme = () => {
  const theme = useKittenTheme();
  const colors: Colors = mapColors(theme);
  const { appearance, toggleAppearance } = useContext(ThemeContext);

  return {
    theme,
    colors,
    appearance,
    toggleAppearance,
  };
};
