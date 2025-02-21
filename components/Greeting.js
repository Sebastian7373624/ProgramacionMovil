import React from "react";
import { Text } from "react-native";

const Greeting = ({ name }) => {
  return <Text style={{ fontSize: 20, textAlign: "center" }}>Hola, {name}!</Text>;
};

export default Greeting;



