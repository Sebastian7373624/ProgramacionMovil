import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import GuessForm from "./GuessForm";

const Game = () => {
  const [correctAnswer] = useState("perico");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎮 Juego de Adivinanzas</Text>
      <Text style={styles.hint}>
        Su nombre proviene de un animal, pero en Colombia también se le conoce 
        como comida. Es un desayuno y cena. ¿Cuál es?
      </Text>
      <GuessForm correctAnswer={correctAnswer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  hint: {
    fontSize: 16,
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default Game;
