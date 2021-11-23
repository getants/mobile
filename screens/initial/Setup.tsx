import React from 'react';
import { ScrollView, Text, Flex } from '../../components';

// const industryOptions = [
//   { label: 'Collecting, Picking', value: 'collect-pick' },
//   { label: 'Repair, Replace', value: 'repair-replace' },
//   { label: 'Care', value: 'care', disabled: true },
// ];

const SetupScreen = () => {
  // const [industries, setIndustries] = useState([]);

  return (
    <ScrollView keyboardShouldPersistTaps="always">
      <Flex>
        <Text>Picker</Text>
        {/* <Picker */}
        {/*   marginT-120 */}
        {/*   placeholder="Favorite Industries (up to 3)" */}
        {/*   value={industries} */}
        {/*   onChange={(items: any) => setIndustries(items)} */}
        {/*   selectionLimit={3} */}
        {/*   // rightIconSource={dropdown} */}
        {/*   mode={Picker.modes.MULTI} */}
        {/* > */}
        {/*   {industryOptions.map(({ label, value, disabled }) => ( */}
        {/*     <Picker.Item */}
        {/*       key={label + value} */}
        {/*       label={label} // use this to translate */}
        {/*       value={value} */}
        {/*       disabled={disabled} */}
        {/*     /> */}
        {/*   ))} */}
        {/* </Picker> */}
      </Flex>
    </ScrollView>
  );
};

export default SetupScreen;
