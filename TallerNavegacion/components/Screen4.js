// taller 7 agregue esta pantalla para el taller 7 //

import React from 'react';
import { View, Text, Button } from 'react-native';

const Screen4 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla 4</Text>
      <Button title="Volver a Pantalla 1" onPress={() => navigation.navigate('Screen1')} />
    </View>
  );
};

export default Screen4;
