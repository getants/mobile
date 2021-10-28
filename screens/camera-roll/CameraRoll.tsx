import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Asset } from 'expo-media-library';
import { v4 as uuidv4 } from 'uuid';
import {
  ActivityIndicator,
  FlatList,
  Platform,
  SafeAreaView,
  TouchableHighlight,
  View,
} from 'react-native';
import { IconButton, Card } from 'react-native-paper';
import * as MediaLibrary from 'expo-media-library';
import { endpoint } from '@lib/constants';
import Colors from '@styles/colors';
import type { CameraRollScreenNavigationProp } from '@stacks/Types';

type Props = {
  navigation: CameraRollScreenNavigationProp;
};

const CameraRoll = (props: Props) => {
  const { navigation } = props;

  const onEndReachedThreshold = Platform.OS === 'android' ? 0.1 : 0;

  const [init, setInit] = useState(false);
  const [ready, setReady] = useState(false);

  const [loading, setLoading] = useState(false);

  const [selected, setSelected] = useState<Asset | undefined>();

  const [assets, setAssets] = useState<Asset[]>([]);
  const [endCursor, setEndCursor] = useState('');
  const [hasNextPage, setHasNextPage] = useState(false);

  const bootstrap = async () => {
    setLoading(true);
    const granted = await AsyncStorage.getItem('media-permission');

    if (granted !== 'true') {
      await MediaLibrary.requestPermissionsAsync();
      await AsyncStorage.setItem('media-permission', 'true');
    }

    const response = await MediaLibrary.getAssetsAsync({
      first: 24,
    });
    setAssets(response.assets);
    setEndCursor(response.endCursor);
    setHasNextPage(response.hasNextPage);
    // use this flag to make sure bootstrap run once
    setInit(true);
    setLoading(false);
  };

  const handleOnScroll = useCallback(() => {
    console.log('scrollling ....'); // eslint-disable-line
  }, []);

  const handleLoadMore = useCallback(async () => {
    if (hasNextPage) {
      const response = await MediaLibrary.getAssetsAsync({
        first: 24,
        after: endCursor,
      });
      setAssets(assets.concat(response.assets));
      setEndCursor(response.endCursor);
      setHasNextPage(response.hasNextPage);
      // setTotalCount(response.totalCount);
    }
  }, [assets, endCursor, hasNextPage]);

  const handleUpload = useCallback(async (uri: string) => {
    const { id, ext } = uri.split('?')[1].split('&')
      .reduce<{ [k: string]: any }>((a, c) => {
        const [key, value] = c.split('=');
        /* eslint-disable no-param-reassign */
        a[key] = value;
        return a;
      }, {});

    const random = `${id}-${uuidv4().split('-')[0]}`;
    const formData = new FormData();

    formData.append('image', {
      uri,
      name: `mobile-${random}.${ext.toLowerCase()}`,
      type: `image/${ext.toLowerCase()}`,
    });

    const options = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    };

    setLoading(true);
    const { data } = await axios.post(
      `${endpoint}/upload`,
      formData,
      options,
    );

    if (data && data.success) {
      setLoading(false);
      // navigation.navigate('ItemEditor', { uri: data.upload });
    }
  }, []);

  const handleSelect = useCallback((item) => {
    setSelected(item);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!init) {
      bootstrap();
    }
  }, [init]);

  useEffect(() => {
    if (selected && ready) {
      // navigation.setParams({
      //   isValid: true,
      //   selectedUri: selected.uri,
      //   handleUpload,
      // });
      setReady(false);
    }
  }, [handleUpload, navigation, ready, selected]);

  return (
    <SafeAreaView>

      {(loading) && (
        <ActivityIndicator
          color={Colors.primary}
          size="large"
        />
      )}

      <FlatList
        data={assets}
        horizontal={false}
        initialNumToRender={5}
        keyExtractor={({ id }) => id}
        numColumns={3}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={onEndReachedThreshold}
        onScroll={handleOnScroll}
        renderItem={({ item, separators }) => (
          <TouchableHighlight
            onPress={() => handleSelect(item)}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}
          >
            <>
              {selected && selected.id === item.id && (
                <View>
                  <IconButton
                    icon="check-circle"
                    color={Colors.accent}
                    size={48}
                  />
                </View>
              )}

              <Card>
                <Card.Cover
                  theme={{ roundness: 0 }}
                  source={{ uri: item.uri }}
                />
              </Card>
            </>
          </TouchableHighlight>
        )}
      />
    </SafeAreaView>
  );
};

export default CameraRoll;
