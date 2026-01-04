import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface DataTimerProps {
  currentTime: string;
}

const DataTimer: React.FC<DataTimerProps> = ({ currentTime }) => {
  return <Text style={styles.text}>Aktualna data i godzina: {currentTime}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default DataTimer;