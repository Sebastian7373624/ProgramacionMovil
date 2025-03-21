// taller 2-1 //

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Pantalla de Imagen</Text>
      <Image 
        source={{ uri: 'https://via.placeholder.com/150' }} 
        style={styles.image} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 20,
  }
});

export default ImageScreen;

// taller 2-2 basicamente es el primer codigo pero con mas cosas//

import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const images = [
  'https://via.placeholder.com/200/FF5733/FFFFFF',
  'https://via.placeholder.com/200/33FF57/FFFFFF',
  'https://via.placeholder.com/200/5733FF/FFFFFF',
  'https://via.placeholder.com/200/FFFF33/000000',
  'https://via.placeholder.com/200/FF33FF/FFFFFF',
  'https://via.placeholder.com/200/33FFFF/000000',
];

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galería de Imágenes</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {images.map((img, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image source={{ uri: img }} style={styles.image} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    paddingTop: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  imageWrapper: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 5,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6, 
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default ImageScreen;
