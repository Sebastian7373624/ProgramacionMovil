// taller 2-1 //

import React from 'react';
import { View, Text, Button } from 'react-native';

const QuizScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla de Quiz</Text>
      <Button title="Ir a Imagen" onPress={() => navigation.navigate('Image')} />
    </View>
  );
};

export default QuizScreen;

// taller 2-4 //

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

const QuizScreen = () => {
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
  });

  const questions = [
    {
      id: 'q1',
      question: '¿De donde proviene los pinguinos?',
      options: ['Africa', 'el amazonas', 'polo norte', 'polo sur'],
    },
    {
      id: 'q2',
      question: '¿que es un capibara?',
      options: ['animal', 'Marca de comida', 'un superheroe'],
    },
    {
      id: 'q3',
      question: '¿Cuántos continentes hay en el mundo?',
      options: ['5', '6', '7', '8'],
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cuestionario</Text>
      {questions.map((q) => (
        <View key={q.id} style={styles.questionContainer}>
          <Text style={styles.questionText}>{q.question}</Text>
          <RadioButton.Group
            onValueChange={(newValue) => setAnswers({ ...answers, [q.id]: newValue })}
            value={answers[q.id]}
          >
            {q.options.map((option) => (
              <TouchableOpacity key={option} style={styles.option} onPress={() => setAnswers({ ...answers, [q.id]: option })}>
                <RadioButton value={option} />
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </RadioButton.Group>
        </View>
      ))}
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
    textAlign: 'center',
    marginBottom: 20,
  },
  questionContainer: {
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  optionText: {
    fontSize: 16,
    color: '#444',
    marginLeft: 8,
  },
});

export default QuizScreen;