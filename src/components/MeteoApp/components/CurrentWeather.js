import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Image, SafeAreaView } from "react-native";
import { ActivityIndicator } from "react-native";

const API_KEY = "302e9e9c8a50b54473cea557edfd5e24";
const getCurrentWeatherUrl = (lat, lon) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

const CurrentWeather = ({ position }) => {
  const [dataCurrentWeather, setDataCurrentWeather] = useState(null);
  // console.log(dataCurrentWeather);

  useEffect(() => {
    let apiRoute = getCurrentWeatherUrl(
      position.coords.latitude,
      position.coords.longitude
    );

    fetch(apiRoute)
      .then((response) => response.json())
      .then((data) => setDataCurrentWeather(data))
      .catch((error) => console.log(error));
  }, []);
  const icon = dataCurrentWeather?.weather[0].icon;

  return dataCurrentWeather !== null ? (
    <SafeAreaView style={styles.currentWeatherContainer}>
      <Text style={styles.name}> {dataCurrentWeather.name} </Text>
      <Text style={styles.today}> Aujourd'hui </Text>
      <Image
        style={styles.img}
        source={{ uri: `https://openweathermap.org/img/wn/${icon}@4x.png` }}
      />
      <Text style={styles.temperature}>{dataCurrentWeather.main.temp} °C</Text>
      <Text style={styles.description}>
        {dataCurrentWeather.weather[0].description}
      </Text>
    </SafeAreaView>
  ) : (
    <ActivityIndicator size="large" color="purple" />
  );
};

const styles = StyleSheet.create({
  currentWeatherContainer: {
    flex: "auto",
    justifyContent: "center",
  },
  name: {
    fontSize: 36,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  today: {
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
    textAlign: "center",
  },
  temperature: {
    fontSize: 45,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  description: {
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
    textAlign: "center",
  },
  img: {
    alignSelf: "center",
    height: 200,
    width: 200,
  },
});

export default CurrentWeather;
