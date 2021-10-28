import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { JobFactory } from '@lib/test-utils';

import JobItem from './JobItem';

const job = JobFactory.build();

describe('JobItem', () => {
  it('should render when has job data', () => {
    const onPressFn = jest.fn();
    const onApplyFn = jest.fn();
    const onSaveFn = jest.fn();
    const {
      // getByTestId,
      getByText,
      // queryByTestId,
    } = render(
      <JobItem
        job={job}
        onPress={onPressFn}
        onApply={onApplyFn}
        onSave={onSaveFn}
      />,
    );

    const moreButton = getByText('Apply');
    fireEvent.press(moreButton);
    expect(onApplyFn).toHaveBeenCalled();
  });
});
