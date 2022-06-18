import { Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Copain</Text>
      <TouchableOpacity onPress={() => navigation.navigate("TodoApp")}>
        <MaterialCommunityIcons
          name="format-list-checks"
          size={100}
          color="green"
        />
        <Text>Todolist</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("MeteoApp")}>
        <MaterialCommunityIcons
          name="weather-partly-cloudy"
          size={100}
          color="blue"
        />
        <Text>Meteo</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 80,
  },
});
