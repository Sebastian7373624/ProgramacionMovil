import React from "react";
import { View, Image, FlatList, StyleSheet } from "react-native";

const ImageList = ({ images }) => {
  return (
    <FlatList
      data={images}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.imageContainer}>
          <Image source={{ uri: item }} style={styles.image} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    margin: 10,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
  },
});

export default ImageList;

