import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

interface UserSurnameProps {
  surname: string;
}

class UserSurname extends Component<UserSurnameProps> {
  render() {
    return <Text style={styles.text}>Nazwisko: {this.props.surname}</Text>;
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});

export default UserSurname;