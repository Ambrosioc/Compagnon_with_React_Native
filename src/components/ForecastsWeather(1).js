import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
} from "react-native";

const API_KEY = "653de7a12566023e256f7950af6f508c";

const getForecastWeatherUrl = (lat, lon) =>
  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=fr`;

const ForecastsWeather = ({ position }) => {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    let apiRoute = getForecastWeatherUrl(
      position.coords.latitude,
      position.coords.longitude
    );

    fetch(apiRoute)
      .then((response) => response.json())
      .then((data) => {
        const forecastData = data.list.map((forecast) => {
          const datetime = new Date(forecast.dt * 1000);
          return {
            date: datetime.toLocaleDateString(),
            hour: datetime.getHours(),
            temp: forecast.main.temp,
            icon: forecast.weather[0].icon,
          };
        });

        setForecast(forecastData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.containerForecast}
    >
      {forecast?.map((f, index) => {
        return (
          <SafeAreaView style={styles.forecast} key={index}>
            <Text> {f.date} </Text>
            <Text style={styles.hour}> {f.hour} </Text>
            <Image
              style={styles.img}
              source={{
                uri: `https://openweathermap.org/img/wn/${f.icon}@4x.png`,
              }}
            />
            <Text style={styles.temperature}> {f.temp} </Text>
          </SafeAreaView>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerForecast: {
    flex: 3,
  },
  hour: {
    fontStyle: 12,
  },
  forecast: {
    backgroundColor: "white",
    borderRadius: 50,
    marginRight: 8,
    height: 140,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  temperature: {
    fontSize: 16,
    fontWeight: "bold",
  },
  img: {
    marginVertical: 5,
    height: 50,
    width: 50,
  },
});

export default ForecastsWeather;
