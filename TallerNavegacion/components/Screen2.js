import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Screen2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen 2</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Welcome')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});

// taller 2 //

import React from "react";
import { View, Text, Button } from "react-native";

const Screen2 = ({ navigation }) => {
  return (
    <View>
      <Text>Pantalla 2</Text>
      <Button title="Ir a Pantalla 3" onPress={() => navigation.navigate("Screen3")} />
    </View>
  );
};

export default Screen2;

// taller 3 //

import React from "react";
import { View, Text, Button } from "react-native";

const Screen2 = ({ navigation }) => {
  return (
    <View>
      <Text>Pantalla 2</Text>
      <Button title="Regresar" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Screen2;

// taller 4 //

import React from "react";
import { View, Text, Button } from "react-native";

export default function Screen2({ route, navigation }) {
 const { mensaje } = route.params || {};

  return (
    <View>
      <Text>Pantalla 2</Text>
      <Text>Mensaje recibido: {mensaje}</Text>
      <Button
        title="Ir a Screen3"
        onPress={() => navigation.navigate("Screen3", { dato: "hola desde pantalla 2" })}
      />
    </View>
  );
}

// taller 5 //

import React from 'react';
import { View, Text, Button } from 'react-native';

const Screen2 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla 2</Text>
      <Button title="Ir a Pantalla 3" onPress={() => navigation.navigate('Screen3')} />
    </View>
  );
};

export default Screen2;

// taller 6 //

import React from 'react';
import { View, Text, Button } from 'react-native';

const Screen2 = ({ navigation, route }) => {
  const { autorizado } = route.params || {};

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla 2</Text>
      {autorizado ? (
        <Button title="Ir a Pantalla 3" onPress={() => navigation.navigate('Screen3')} />
      ) : (
        <Text>No tienes permiso para continuar</Text>
      )}
    </View>
  );
};

export default Screen2;
