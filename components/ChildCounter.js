import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ChildCounter = ({ count, onIncrement }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador: {count}</Text>
      <Button title="Incrementar" onPress={onIncrement} color="#28A745" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 3,
    width: "80%",
    alignSelf: "center",
    marginTop: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333",
  },
});

export default ChildCounter;

