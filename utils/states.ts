import { useMemo } from 'react';
import { atom, useAtom } from 'jotai';
import type { AppState, StackScreens, Users } from './types';

export const currentScreenAtom = atom<StackScreens | null>(null);
export const isLoggedInAtom = atom<boolean>(false);
export const meAtom = atom<Partial<Users> | null>(null);

export const initialState: AppState = {
  currentScreen: currentScreenAtom,
  isLoggedIn: isLoggedInAtom,
  me: meAtom,
};

export const globalState = atom<AppState | null>(initialState);

export const useScreen = () => {
  const [currentScreen, setCurrentScreen] = useAtom(currentScreenAtom);

  return useMemo(
    () => ({ currentScreen, setCurrentScreen }),
    [currentScreen, setCurrentScreen],
  );
};

export const appStatesAtom = atom({ isReady: false });

export const useAppStates = () => {
  const [appStates, setAppStates] = useAtom(appStatesAtom);

  return {
    appStates,
    setAppStates,
  };
};
