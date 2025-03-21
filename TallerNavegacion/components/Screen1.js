import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Taller 1
export function Screen1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen 1</Text>
      <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen2')} />
    </View>
  );
}

// Taller 2
export function Screen1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla 1</Text>
      <Button title="Ir a Pantalla 2" onPress={() => navigation.navigate("Screen2")} />
    </View>
  );
}

// Taller 3
export function Screen1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla 1</Text>
      <Button title="Ir a Pantalla 2" onPress={() => navigation.navigate("Screen2")} />
    </View>
  );
}

// Taller 4
export function Screen1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla 1</Text>
      <Button 
        title="Ir a Screen2" 
        onPress={() => navigation.navigate("Screen2", { mensaje: "Hola desde pantalla 1" })} 
      />
    </View>
  );
}

// Taller 6
export function Screen1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla 1</Text>
      <Button title="Ir a Pantalla 2" onPress={() => navigation.navigate('Screen2')} />
    </View>
  );
}

// Taller 7
export function Screen1({ navigation }) {
  const randomNumber = Math.random();
  let nextScreen = '';

  if (randomNumber < 0.33) {
    nextScreen = 'Screen2';
  } else if (randomNumber < 0.66) {
    nextScreen = 'Screen3';
  } else {
    nextScreen = 'Screen4';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla 1</Text>
      <Button 
        title="Ir a la siguiente pantalla"
        onPress={() => navigation.navigate(nextScreen, { autorizado: nextScreen !== 'Screen4' })} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});




