import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const MapImage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Poland_CIA_map_PL.png',
        }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 300,
    height: 200,
  },
});

export default MapImage;