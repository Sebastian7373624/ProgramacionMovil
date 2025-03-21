// taller 2-1 //

import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Pantalla de Inicio</Text>
      <Button title="Ir a Perfil" onPress={() => navigation.replace('Profile')} />
    </View>
  );
};

export default HomeScreen;



