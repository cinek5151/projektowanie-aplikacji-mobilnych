import React from 'react';
import { View, StyleSheet } from 'react-native';

const FlexLayout = () => {
  return (
    <View style={styles.container}>
    
      <View style={styles.blueBox} />

      <View style={styles.redBox} />

      <View style={styles.bottomRow}>
        <View style={styles.yellowBox} />
        <View style={styles.yellowBox} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  blueBox: {
    flex: 1,
    backgroundColor: 'blue',
  },
  redBox: {
    flex: 2,
    backgroundColor: 'red',
  },
  bottomRow: {
    flex: 1,
    flexDirection: 'row',
  },
  yellowBox: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});

export default FlexLayout;