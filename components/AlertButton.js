import React from "react";
import { View, Button, Alert, StyleSheet } from "react-native";

const AlertButton = ({ message }) => {
  const showAlert = () => {
    Alert.alert("Alerta", message);
  };

  return (
    <View style={styles.container}>
      <Button title="Mostrar Alerta" onPress={showAlert} color="#FF5733" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
  },
});

export default AlertButton;