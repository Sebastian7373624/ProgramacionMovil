// taller 2-1 //

import React from 'react';
import { View, Text, Button } from 'react-native';

const OptionsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla de Opciones</Text>
      <Button title="Ir a Quiz" onPress={() => navigation.navigate('Quiz')} />
    </View>
  );
};

export default OptionsScreen;

// taller 2-3 //

import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const options = [
  { id: '1', title: 'Notificaciones' },
  { id: '2', title: 'Modo Oscuro' },
  { id: '3', title: 'Idioma' },
  { id: '4', title: 'Privacidad' },
  { id: '5', title: 'Seguridad' },
  { id: '6', title: 'Acerca de' },
];

const OptionsListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opciones</Text>
      <FlatList
        data={options}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.optionItem}>
            <Text style={styles.optionText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  optionItem: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  optionText: {
    fontSize: 18,
    color: '#555',
  },
});

export default OptionsListScreen;

