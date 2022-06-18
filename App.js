import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/components/Home";
import MeteoApp from "./src/components/MeteoApp";
import TodoApp from "./src/components/TodoApp";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Accueil"
          component={Home}
          options={{
            headerStyle: { backgroundColor: "red" },
          }}
        />
        <Stack.Screen name="TodoApp" component={TodoApp} />
        <Stack.Screen name="MeteoApp" component={MeteoApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
