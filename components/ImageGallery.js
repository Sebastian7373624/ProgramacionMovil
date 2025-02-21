import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageList from "./ImageList";

const ImageGallery = () => {
  const [images] = useState([
    "https://source.unsplash.com/random/200x150?sig=1",
    "https://source.unsplash.com/random/200x150?sig=2",
    "https://source.unsplash.com/random/200x150?sig=3",
    "https://source.unsplash.com/random/200x150?sig=4",
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galería de Imágenes</Text>
      <ImageList images={images} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default ImageGallery;