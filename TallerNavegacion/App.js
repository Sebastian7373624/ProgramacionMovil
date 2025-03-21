import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './components/WelcomeScreen';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Screen4 from './components/Screen4';
import ImageScreen from './components/ImageScreen';
import OptionsScreen from './components/OptionsScreen';
import QuizScreen from './components/QuizScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const NativeStack = createNativeStackNavigator();

// taller 1 //

export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="Welcome">

        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Screen1" component={Screen1}/>
        <Stack.Screen name="Screen2" component={Screen2}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

// taller 2, 3 y 4 //

const TallerStack = () => (
  <NavigationContainer>
    <Stack.Navigator>

      <Stack.Screen name="Screen1" component={Screen1} options={{ title: "Inicio" }}/>
      <Stack.Screen name="Screen2" component={Screen2} options={{ title: "Segunda Pantalla" }}/>
      <Stack.Screen name="Screen3" component={Screen3} options={{ title: "Tercera Pantalla" }}/>

    </Stack.Navigator>
    
  </NavigationContainer>
);

// taller 5 //

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

    <Text>Pantalla de Inicio</Text>

    <Button title="Ir a Perfil" onPress={() => navigation.replace('Profile')}/>
  </View>
);

const ProfileScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

    <Text>Pantalla de Perfil</Text>

    <Button title="Volver a Inicio" onPress={() => navigation.replace('Home')}/>
  </View>
);

const Taller5 = () => (
  <NavigationContainer>

    <NativeStack.Navigator>

      <NativeStack.Screen name="Home" component={HomeScreen}/>

      <NativeStack.Screen name="Profile" component={ProfileScreen}/>

    </NativeStack.Navigator>
  </NavigationContainer>
);

// taller 6 y 7 //

const Taller67 = () => (
  <NavigationContainer>
    <NativeStack.Navigator>
      <NativeStack.Screen name="Screen1" component={Screen1}/>

      <NativeStack.Screen name="Screen2" component={Screen2}/>

      <NativeStack.Screen name="Screen3" component={Screen3}/>

      <NativeStack.Screen name="Screen4" component={Screen4}/>

    </NativeStack.Navigator>
  </NavigationContainer>
);

// taller parte 2-1, 2-5 y 2-6 //

const TabNavigator = () => (

  <NavigationContainer>
    <Tab.Navigator
    screenOptions={({ route }) => ({
      
      tabBarIcon: ({ color, size }) => {
         let iconName;
          if (route.name === 'Imágenes') iconName = 'image';
          else if (route.name === 'Opciones') iconName = 'cog';
          else if (route.name === 'Cuestionario') iconName = 'clipboard-text';
          return <MaterialCommunityIcons name={iconName} size={size} color={color}/>;
        },
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#fff', paddingBottom: 10, height: 65, paddingHorizontal: 20 },
        tabBarItemStyle: { marginHorizontal: 15 },
      })}
    >
      <Tab.Screen name="Imágenes" component={ImageScreen}/>

      <Tab.Screen name="Opciones" component={OptionsScreen}/>

      <Tab.Screen name="Cuestionario" component={QuizScreen}/>

    </Tab.Navigator>
  </NavigationContainer>
);
