import { useEffect, useMemo } from 'react';
import { atom, useAtom } from 'jotai';
import type { AppState, StackScreens, UserType } from '@/utils/types';

export const currentScreenAtom = atom<StackScreens | null>(null);
export const isLoggedInAtom = atom<boolean>(false);
export const meAtom = atom<Partial<UserType> | null>(null);

export const initialState: AppState = {
  currentScreen: currentScreenAtom,
  isLoggedIn: isLoggedInAtom,
  me: meAtom,
};

export const globalState = atom<AppState | null>(initialState);

export const useAuth = () => {
  const [currentScreen, setCurrentScreen] = useAtom(currentScreenAtom);
  const [isLoggedIn, setLoggedIn] = useAtom(isLoggedInAtom);
  const [me, setMe] = useAtom(meAtom);
  
  useEffect(() => {
    setLoggedIn(!!me);
  }, [me]);

  return useMemo(
    () =>({ currentScreen, setCurrentScreen, isLoggedIn, me, setMe }),
    [currentScreen, setCurrentScreen, isLoggedIn, me, setMe],
  );
};
