import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface InvitationProps {
  date: string;
  time: string;
  location: string;
  dressCode: string;
}

const InvitationCard: React.FC<InvitationProps> = ({
  date,
  time,
  location,
  dressCode,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Zaproszenie na urodziny</Text>
      <Text>Data: {date}</Text>
      <Text>Godzina: {time}</Text>
      <Text>Miejsce: {location}</Text>
      <Text>Dress code: {dressCode}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
});

export default InvitationCard;