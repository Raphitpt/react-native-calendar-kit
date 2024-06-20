import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SharedValue, useDerivedValue } from 'react-native-reanimated';
import { useTheme } from '../context/ThemeProvider';
import { getWeekNumberOfYear } from '../utils/dateUtils';
import AnimText from './AnimText';
import { months } from 'moment/moment';

interface WeekNumberProps {
  date: SharedValue<number>;
}

const WeekNumber = ({ date }: WeekNumberProps) => {
  const theme = useTheme((state) => ({
    weekNumberBackgroundColor:
      state.weekNumberBackgroundColor || state.colors.surface,
    weekNumber: state.weekNumber,
    weekNumberContainer: state.weekNumberContainer,
  }));

  const monthNames = [
    "Jan.", "Fev.", "Mar.", "Avr.", "Mai", "Jun.",
    "Jui.", "Aoû.", "Sep.", "Oct.", "Nov.", "Dec."
  ];

  const weekNumber = useDerivedValue(() => getWeekNumberOfYear(date.value));
  const month = useDerivedValue(() => {
    const monthIndex = new Date(date.value).getMonth();
    return monthNames[monthIndex];
  });

  return (
    <><View
      style={[
        styles.container,
        { backgroundColor: theme.weekNumberBackgroundColor },
        theme.weekNumberContainer,
      ]}
    >
      <AnimText style={[styles.text, theme.weekNumber]} text={month} />
    </View>
    <View
      style={[
        styles.container,
        { backgroundColor: theme.weekNumberBackgroundColor },
        theme.weekNumberContainer,
      ]}
    >
      <AnimText style={[styles.text, theme.weekNumber]} text={useDerivedValue(() => "Sem " + weekNumber.value)} />

    </View>
    </>
    
  );
};

export default WeekNumber;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DADADA',
    marginHorizontal: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  text: {
    fontSize: 12,
    textAlign: 'center'
  },
});
