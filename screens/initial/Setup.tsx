import React, { useState } from 'react';
import {
  ScrollView,
  Picker,
  Text,
  View,
} from '@components';

const industryOptions = [
  { label: 'Collecting, Picking', value: 'collect-pick' },
  { label: 'Repair, Replace', value: 'repair-replace' },
  { label: 'Care', value: 'care', disabled: true },
];

const SetupScreen = () => {
  const [industries, setIndustries] = useState([]);

  return (
    <ScrollView keyboardShouldPersistTaps="always">
      <View flex padding-20>
        <Text text60>Picker</Text>
        <Picker
          marginT-120
          placeholder="Favorite Industries (up to 3)"
          value={industries}
          onChange={(items: any) => setIndustries(items)}
          selectionLimit={3}
          // rightIconSource={dropdown}
          // @ts-ignore
          mode={Picker.modes.MULTI}
        >
          {industryOptions.map(({ label, value, disabled }) => (
            <Picker.Item
              key={label + value}
              label={label} // use this to translate
              value={value}
              disabled={disabled}
            />
          ))}
        </Picker>
      </View>
    </ScrollView>
  );
};

export default SetupScreen;
