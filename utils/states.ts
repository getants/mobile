import { useEffect, useMemo } from 'react';
import { atom, useAtom } from 'jotai';
import { focusAtom } from "jotai/optics";
// import type { PrimitiveAtom } from 'jotai';
import type { AppState, FocusAtomInput } from '@/utils/types';

export const useFocusAtom = <T>(input: FocusAtomInput<T>) => {
  const { source , key } = input;

  return useMemo(() => {
    if (typeof key === 'string') {
      return focusAtom(source, (optic) => optic.path(key));
    }
    return focusAtom(source, (optic) => optic.pick(key));
  }, [source, key]);
};

export const initialState: AppState = {
  currentScreen: null,
  isLoggedIn: false,
  me: null,
};

export const globalState = atom<AppState | null>(initialState);

export const useAuth = () => {
  // const currentScreenAtom = useFocusAtom({ source: globalState, key: 'currentScreen' });
  const isLoggedInAtom = useFocusAtom({ source: globalState, key: 'isLoggedIn' });
  const meAtom = useFocusAtom({ source: globalState, key: 'me' });

  const [isLoggedIn, setLoggedIn] = useAtom(isLoggedInAtom);
  const [me, setMe] = useAtom(meAtom);
  
  useEffect(() => {
    setLoggedIn(!!me);
  }, [me]);

  return useMemo(
    () =>({ isLoggedIn, me, setMe }),
    [isLoggedIn, me, setMe],
  );
};
