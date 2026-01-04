import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface UserNameProps {
  name: string;
}

const UserName: React.FC<UserNameProps> = ({ name }) => {
  return <Text style={styles.text}>Imię: {name}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default UserName;