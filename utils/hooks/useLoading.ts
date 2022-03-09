import { atom, useAtom } from 'jotai';

const loadingAtom = atom(false);

export const useLoading = () => {
  const [isLoading, setLoading] = useAtom(loadingAtom);

  const toggleLoading = () => setLoading((prevLoading) => !prevLoading);

  return {
    isLoading,
    setLoading,
    toggleLoading,
  };
};
