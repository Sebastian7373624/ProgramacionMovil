import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ThemeSwitcher = ({ onThemeChange }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    onThemeChange(newTheme);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tema actual: {isDarkMode ? "Oscuro" : "Claro"}</Text>
      <Button title="Cambiar Tema" onPress={toggleTheme} color={isDarkMode ? "#FFC107" : "#007BFF"} />
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
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
  },
});

export default ThemeSwitcher;