import React, { useState, useEffect } from 'react';
import { Text, View, Platform, StyleSheet } from 'react-native';
import { fontSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);
export const Countdown = ({ minutes = 0.1, isPaused, onProgress, onEnd }) => {
  const interval = React.useRef(null);

  const [millis, setMillis] = useState(null);

  const reset = () => setMillis(minutesToMillis(minutes))
  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current);
        onEnd(reset);
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  useEffect(() => {
    onProgress(millis / minutesToMillis(minutes));
  }, [millis]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }

    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  return (
    <View style={styles.container}>
    <Text style={styles.text }>
      {formatTime(minute)}:{formatTime(seconds)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 70,
    fontWeight: 'bold',
    color: colors.white,
    padding: spacing.sm,
    backgroundColor: 'lightblue',
    textAlign: 'center',
  },
  container: {
    flex: 0.4,
    backgroundColor: 'white',
    width: 205,
    height: 120,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }
});


  // }