import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ChildCounter from "./ChildCounter";

const ParentCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador en el Padre</Text>
      <ChildCounter count={count} onIncrement={incrementCounter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
});

export default ParentCounter;