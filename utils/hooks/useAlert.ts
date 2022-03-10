import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';

type Options = {
  title: string;
  message?: string;
};

export const useAlert = () => {
  const [options, setOptions] = useState<Options | null>(null);

  useEffect(() => {
    if (!options) {
      return;
    }

    Alert.alert(
      options.title,
      options.message,
      [
        {
          onPress: () => setOptions(null),
          style: 'cancel',
          text: 'OK',
        },
      ],
      { cancelable: false },
    );
  }, [options]);

  const renderAlert = useCallback((o: Options) => {
    setOptions(o);
  }, []);

  return { renderAlert };
};
