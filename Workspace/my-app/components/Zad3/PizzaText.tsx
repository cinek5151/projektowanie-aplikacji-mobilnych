import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PizzaText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        <Text style={styles.italic}>Pizza</Text> to bardzo smaczne włoskie danie. 
        Wykonuje się ją z ciasta drożdżowego. 
        Na ciasto wylewa się sos pomidorowy. 
        Na wierzch kładzie się składniki:{' '}
        <Text style={styles.bold}>kiełbasę, ser żółty, oliwki, paprykę</Text>. 
        Istnieje wiele rodzajów <Text style={styles.italic}>pizzy</Text>, może być mięsna, 
        bezmięsna, rybna lub słodka z{' '}
        <Text style={styles.yellow}>ananasem</Text>.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  baseText: {
    fontSize: 16,
    lineHeight: 22,
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  yellow: {
    color: 'gold',
    fontWeight: 'bold',
  },
});

export default PizzaText;