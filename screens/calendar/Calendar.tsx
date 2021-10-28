import React, { useState, useCallback } from 'react';
import {
  Animated,
  Calendar as CalendarComponent,
  Divider,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
} from '@components';
import { format } from 'date-fns';
import styled from 'styled-components/native';
import { useCollapsibleHeader } from '@hooks';
import { Colors } from '@styles/helpers';
import type { CalendarScreenNavigationProp } from '@stacks/Types';

const ScrollView = styled.ScrollView`
  background-color: ${Colors.white};
`;

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

const styles = StyleSheet.create({
  calendar: {
    backgroundColor: Colors.white,
    marginBottom: 10,
  },
});
const calendarTheme = {
  textSectionTitleColor: '#b6c1cd',
  textSectionTitleDisabledColor: '#d9e1e8',
  selectedDayBackgroundColor: '#00adf5',
  selectedDayTextColor: '#ffffff',
  todayTextColor: Colors.primary,
  dayTextColor: '#2d4150',
  textDisabledColor: '#d9e1e8',
  dotColor: '#00adf5',
  selectedDotColor: '#ffffff',
  arrowColor: 'orange',
  disabledArrowColor: '#d9e1e8',
  monthTextColor: Colors.grey,
  indicatorColor: 'blue',
  textDayFontWeight: '300',
  textMonthFontWeight: 'bold',
  textDayHeaderFontWeight: '300',
  textDayFontSize: 16,
  textMonthFontSize: 16,
  textDayHeaderFontSize: 16,
};

export type Props = {
  navigation: CalendarScreenNavigationProp;
};

const Calendar = () => {
  const today = format(new Date(), 'yyyy-MM-dd');

  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [selected, setSelected] = useState(today);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    // wait(200).then(() => setRefreshing(false));
  }, []);

  const onDayPress = (day: any) => {
    setSelected(day.dateString);
  };

  const {
    onScroll,
    containerPaddingTop,
    scrollIndicatorInsetTop,
  } = useCollapsibleHeader();

  const paddingTop = containerPaddingTop - 30;
  const refreshControl = (
    <RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AnimatedScrollView
        refreshControl={refreshControl}
        scrollEventThrottle={8}
        onScroll={onScroll}
        contentContainerStyle={{ paddingTop }}
        scrollIndicatorInsets={{ top: scrollIndicatorInsetTop }}
      >
        <CalendarComponent
          displayLoadingIndicator={false}
          firstDay={1}
          current={today}
          theme={calendarTheme}
          style={styles.calendar}
          onDayPress={onDayPress}
          markedDates={{
            [selected]: {
              // @ts-ignore the @types/react-native-calendars is wrong
              selected: true,
              selectedColor: Colors.primary,
              selectedTextColor: Colors.white,
            },
          }}
        />
        <Divider />
      </AnimatedScrollView>
    </SafeAreaView>
  );
};

export default Calendar;
