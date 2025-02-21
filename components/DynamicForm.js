import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const DynamicForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleSubmit = () => {
    setSubmittedText(inputValue);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escribe algo..."
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Enviar" onPress={handleSubmit} color="#4CAF50" />
      {submittedText ? <Text style={styles.text}>Texto ingresado: {submittedText}</Text> : null}
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
    marginTop: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },
});

export default DynamicForm;

