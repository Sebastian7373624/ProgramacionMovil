import React from "react";
import { Text, View } from "react-native";

const UserDetails = ({ name, age, occupation }) => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 18 }}>Nombre: {name}</Text>
      <Text style={{ fontSize: 18 }}>Edad: {age}</Text>
      <Text style={{ fontSize: 18 }}>Ocupación: {occupation}</Text>
    </View>
  );
};

export default UserDetails;
