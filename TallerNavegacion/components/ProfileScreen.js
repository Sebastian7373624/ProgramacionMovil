import React from 'react';
import { View, Text, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Pantalla de Perfil</Text>
      <Button title="Volver a Inicio" onPress={() => navigation.replace('Home')} />
    </View>
  );
};

export default ProfileScreen;
