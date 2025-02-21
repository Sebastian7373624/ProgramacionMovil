import React from "react";
import { Text, View } from "react-native";

const Task = ({ task }) => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 18 }}>{task.title}</Text>
      <Text style={{ fontSize: 16, color: task.completed ? "green" : "red" }}>
        {task.completed ? "Completada" : "Pendiente"}
      </Text>
    </View>
  );
};

export default Task;
