import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const GuessForm = ({ correctAnswer }) => {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  const checkAnswer = () => {
    if (guess.toLowerCase() === correctAnswer.toLowerCase()) {
      setMessage("✅ ¡Correcto!");
    } else {
      setMessage("❌ Incorrecto, intenta de nuevo.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Adivina la respuesta:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu respuesta..."
        value={guess}
        onChangeText={setGuess}
      />
      <Button title="Verificar" onPress={checkAnswer} color="#6200ea" />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
    padding: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    marginBottom: 10,
  },
  message: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GuessForm;

