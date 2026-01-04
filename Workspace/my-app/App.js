import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DateDisplay from './components/Zad1/DateDisplay';
import MapImage from './components/Zad2/MapImage';
import PizzaText from './components/Zad3/PizzaText';
import FlexLayout from './components/Zad4/FlexLayout';
import UserName from './components/Zad5/UserName';
import UserSurname from './components/Zad5/UserSurname';
import LayoutWithBlocks from './components/Zad6/LayoutWithBlocks';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Zad1</Text>
      <DateDisplay />
      <Text>Zad2</Text>
      <MapImage />
      <Text>Zad3</Text>
      <PizzaText />
      <Text>Zad4</Text>
      <FlexLayout />
      <Text>Zad5</Text>
      <UserName name="Adrian" />
      <UserSurname surname="Kopczyński" />
      <Text>Zad6</Text>
      <LayoutWithBlocks />
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
