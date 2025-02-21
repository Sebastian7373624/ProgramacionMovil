//import React from "react";
//import { View } from "react-native";
//import Greeting from "./Greeting";

//const App = () => {
  //return (
    //<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      //<Greeting name="sebastian" />
    //</View>
  //);
//};

//export default App;//


///Ejercisio 2///

//import React from "react";
//import { View } from "react-native";
//import UserDetails from "./UserDetails";

//const App = () => {
  //return (
    //<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      //<UserDetails name="sebastian" age={22} occupation="Ingeniero web" />
    //</View>
  //);
//};

//export default App;


///Ejercisio  3///

//import React from "react";
//import { View } from "react-native";
//import Task from "./Task";

//const App = () => {
  //const exampleTask = { title: "Aprende React Native con javascript", completed: true };

  //return (
    //<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      //<Task task={exampleTask} />
    //</View>
  //);
//};

//export default App;

//Taller 2-1//

//import ToggleText from "./ToggleText";

//const App = () => {
  //return (
    //<div className="flex justify-center items-center h-screen bg-gray-100">
      //<ToggleText />
    //</div>
  //);
//};

//export default App;


//Taller 2-2//

//import React from "react";
//import { SafeAreaView } from "react-native";
//import DynamicForm from "./DynamicForm";

//const App = () => {
  //return (
   // <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f0f0f0" }}>
      //<DynamicForm />
    //</SafeAreaView>
  //);
//};

//export default App;


//Taller 2-3//

//import React from "react";
//import { SafeAreaView } from "react-native";
//import ClickCounter from "./ClickCounter";

//const App = () => {
  //return (
    //<SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f0f0f0" }}>
      //<ClickCounter />
    //</SafeAreaView>
  //);
//};

//export default App;


//Taller 3-1//

//import React, { useState } from "react";
//import { SafeAreaView, View, Text, StyleSheet } from "react-native";
//import RegistrationForm from "./RegistrationForm";

//const App = () => {
  //const [userData, setUserData] = useState(null);

  //return (
    //<SafeAreaView style={styles.container}>
      //<RegistrationForm onRegister={setUserData} />
      //{userData && (
        //<View style={styles.result}>
          //<Text style={styles.text}>Nombre: {userData.name}</Text>
          //<Text style={styles.text}>Correo: {userData.email}</Text>
          //<Text style={styles.text}>Contraseña: {userData.password}</Text>
        //</View>
      //)}
    //</SafeAreaView>
  //);
//};

//const styles = StyleSheet.create({
  //container: {
    //flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    //backgroundColor: "#f0f0f0",
  //},
  //result: {
    //marginTop: 20,
    //padding: 10,
    //borderRadius: 5,
    //backgroundColor: "white",
    //elevation: 3,
    //width: "80%",
    //alignItems: "center",
  //},
  //text: {
    //fontSize: 16,
    //color: "#333",
  //},
//});

//export default App;


//Taller 3-2//

//import React, { useState } from "react";
//import { SafeAreaView, View, Text, StyleSheet } from "react-native";
//import ThemeSwitcher from "./ThemeSwitcher";

//const App = () => {
  //const [theme, setTheme] = useState("light");

  //const themeStyles = theme === "dark" ? styles.darkTheme : styles.lightTheme;

  //return (
    //<SafeAreaView style={[styles.container, themeStyles]}>
      //<ThemeSwitcher onThemeChange={setTheme} />
      //<Text style={styles.text}>El tema actual es: {theme}</Text>
    //</SafeAreaView>
  //);
//};

//const styles = StyleSheet.create({
  //container: {
    //flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
  //},
  //lightTheme: {
    //backgroundColor: "#f0f0f0",
  //},
  //darkTheme: {
    //backgroundColor: "#333",
  //},
  //text: {
    //fontSize: 18,
    //marginTop: 20,
    //color: "#fff",
  //},
//});

//export default App;


//Taller 3-3//

//import React from "react";
//import { SafeAreaView, View, Text, StyleSheet } from "react-native";
//import AlertButton from "./AlertButton";

//const App = () => {
  //const alertMessage = "¡Gracias por presionar el boton ahora vuelva y cargue el codigo de nuevo Xd";

  //return (
    //<SafeAreaView style={styles.container}>
      //<Text style={styles.text}>Presiona el botón para ver la alerta:</Text>
      //<AlertButton message={alertMessage} />
    //</SafeAreaView>
  //);
//};

//const styles = StyleSheet.create({
  //container: {
    //flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    //backgroundColor: "#f0f0f0",
  //},
  //text: {
    //fontSize: 18,
    //marginBottom: 10,
    //color: "#333",
  //},
//});

//export default App;


//Taller 4-1//

//import React from "react";
//import { SafeAreaView } from "react-native";
//import ParentCounter from "./ParentCounter";

//const App = () => {
  //return (
    //<SafeAreaView style={{ flex: 1 }}>
      //<ParentCounter />
    //</SafeAreaView>
  //);
//};

//export default App;


//Taller 4-2//

//import React from "react";
//import { SafeAreaView } from "react-native";
//import ImageGallery from "./ImageGallery";

//const App = () => {
  //return (
    //<SafeAreaView style={{ flex: 1 }}>
      //<ImageGallery />
    //</SafeAreaView>
  //);
//};

//export default App;


//Taller 4-3//

import React from "react";
import { SafeAreaView } from "react-native";
import Game from "./Game";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Game />
    </SafeAreaView>
  );
};

export default App;


