import React, { useCallback, useMemo, useState, createContext } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { Appearance } from '../../utils/enums';
import { theme } from '../../utils/theme';

export type ThemeContextType = {
  appearance: Appearance;
  toggleAppearance: () => void;
};

export const ThemeContext = createContext({
  appearance: Appearance.Light,
  toggleAppearance: () => {},
});

export const ThemeProvider: React.FC = ({ children }) => {
  const [appearance, setAppearance] = useState(Appearance.Light);

  const toggleAppearance = useCallback(() => {
    const next =
      appearance === Appearance.Light ? Appearance.Dark : Appearance.Light;
    setAppearance(next);
  }, [appearance]);

  const value = useMemo(
    () => ({
      appearance,
      toggleAppearance,
    }),
    [appearance, toggleAppearance],
  );

  return (
    <ThemeContext.Provider value={value}>
      <ApplicationProvider {...eva} theme={{ ...eva[appearance], ...theme }}>
        {typeof children === 'function' ? children(value) : children}
      </ApplicationProvider>
    </ThemeContext.Provider>
  );
};
