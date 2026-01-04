import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DateDisplay from './components/Zad1/DateDisplay';
import MapImage from './components/Zad2/MapImage';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Zad1</Text>
      <DateDisplay />
      <Text>Zad2</Text>
      <MapImage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
