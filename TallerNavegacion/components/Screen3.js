import React from "react";
import { View, Text, Button } from "react-native";

const Screen3 = ({ navigation }) => {
  return (
    <View>
      <Text>Pantalla 3</Text>
      <Button title="Volver a Pantalla 1" onPress={() => navigation.navigate("Screen1")} />
    </View>
  );
};

export default Screen3;

// taller 2 //

import React from "react";
import { View, Text, Button } from "react-native";

const Screen3 = ({ navigation }) => {
  return (
    <View>
      <Text>Pantalla 3</Text>
      <Button title="Ir a Pantalla 1" onPress={() => navigation.navigate("Screen1")} />
    </View>
  );
};

export default Screen3;

// taller 3 //

import React from "react";
import { View, Text, Button } from "react-native";

const Screen3 = ({ navigation }) => {
  return (
    <View>
      <Text>Pantalla 3</Text>
      <Button title="Ir a Pantalla 1" onPress={() => navigation.navigate("Screen1")} />
    </View>
  );
};

export default Screen3;

// taller 4 //

import React from "react";
import { View, Text } from "react-native";

export default function Screen3({ route }) {
  const { dato } = route.params || {};

  return (
    <View>
      <Text>Pantalla 3</Text>
      <Text>Mensaje recibido: {dato}</Text>
    </View>
  );
}

// taller 6 //

import React from 'react';
import { View, Text, Button } from 'react-native';

const Screen3 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla 3</Text>
      <Button 
        title="Reiniciar y volver a Pantalla 1" 
        onPress={() => navigation.reset({
          index: 0,
          routes: [{ name: 'Screen1' }],
        })}
      />
    </View>
  );
};

export default Screen3;

// taller 7 //

import React from 'react';
import { View, Text, Button } from 'react-native';

const Screen3 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla 3</Text>
      <Button title="Ir a Pantalla 4" onPress={() => navigation.navigate('Screen4')} />
      <Button title="Volver a Pantalla 1" onPress={() => navigation.navigate('Screen1')} />
    </View>
  );
};

export default Screen3;


