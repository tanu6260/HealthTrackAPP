import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import BottomNav from "./navigation/BottomNav";
import { HealthDataProvider } from "./utlis/contextData";

const App = () => {
  return (
    <HealthDataProvider>
  <NavigationContainer>
    <BottomNav/>
  </NavigationContainer>
  </HealthDataProvider>
   )
}

export default App;