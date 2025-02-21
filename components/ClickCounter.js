import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Clics: {count}</Text>
      <Button title="Incrementar" onPress={() => setCount(count + 1)} color="#007BFF" />
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
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
    color: "#333",
  },
});

export default ClickCounter;