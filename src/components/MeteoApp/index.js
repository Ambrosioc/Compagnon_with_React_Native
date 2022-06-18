import * as Location from "expo-location";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert, ActivityIndicator } from "react-native";
import CurrentWheather from "./components/CurrentWeather";
import ForecastsWeather from "./components/ForecastsWeather";

const MeteoApp = ({ navigation }) => {
  const [position, setposition] = useState(null);

  const getPosition = async () => {
    let permission = await Location.requestForegroundPermissionsAsync();

    if (permission.status !== "granted") {
      console.log("ok");
      Alert.alert(
        "Erreur Location",
        "Veuillez donnés accés au gps dans vos paramètre",
        [
          {
            text: "C'est compris",
            onPress: () => navigation.navigate("Home"),
          },
        ]
      );
      return;
    }

    const position = await Location.getCurrentPositionAsync();

    setposition(position);
  };

  useEffect(() => {
    getPosition();
  }, []);

  return position === null ? (
    <ActivityIndicator size="large" color="purpule" />
  ) : (
    <View>
      <CurrentWheather position={position} />
      <ForecastsWeather position={position} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MeteoApp;
