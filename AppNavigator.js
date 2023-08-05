import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screen/LoginScreen"; // Certifique-se de que o nome do arquivo da tela de login esteja correto e esteja na mesma pasta
import HomeScreen from "./screen/HomeScreen"; // Importe a tela HomeScreen
import DetailsScreen from "./screen/DetailsScreen"; // Importe a tela DetailsScreen

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      {/* Adicione outras rotas aqui, se necessário */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
