import React, {
  useCallback,
  useMemo,
  useState,
  createContext,
} from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { Appearance, ColorMap } from '../../utils/enums';
import { theme } from '../../utils/theme';

export type ThemeContextType = {
  Colors: Record<string, string>;
  appearance: Appearance;
  toggleAppearance: () => void;
};

export const ThemeContext = createContext({
  colors: {},
  appearance: Appearance.Light,
  toggleAppearance: () => {},
});

export const mapColors = (t: Record<string, any>, a: Appearance) => Object.keys(ColorMap).reduce((acc, key) => {
  if (!acc[key]) {
    return {
      ...acc,
      [key]: t[a][ColorMap[key]],
    };
  }
  return acc;
}, {});

export const ThemeProvider: React.FC = ({ children }) => {
  const [appearance, setAppearance] = useState(Appearance.Light);

  const toggleAppearance = useCallback(() => {
    const next = appearance === Appearance.Light
      ? Appearance.Dark
      : Appearance.Light;
    setAppearance(next);
  }, [appearance]);

  const value = useMemo(() => ({
    colors: mapColors(theme, appearance),
    appearance,
    toggleAppearance,
  }), [appearance, toggleAppearance]);

  return (
    <ThemeContext.Provider value={value}>
      <ApplicationProvider {...eva} theme={{ ...eva[appearance], ...theme }}>
        {typeof children === 'function' ? children(value) : children}
      </ApplicationProvider>
    </ThemeContext.Provider>
  );
};
