import React from 'react';
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthProvider } from './context/authcontext'


import PriTela from "./pages/PriTela";
import LoginTela from "./pages/LoginTela";
import CadastroTela from "./pages/CadastroTela";
import MainTela from "./pages/MainTela";
import ConfigTela from './pages/ConfigTela';
import HelpTela from './pages/HelpTela';
import ContaTela from './pages/ContaTela';
import api from './services/api';





const Stack = createStackNavigator()
function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>        
          <Stack.Screen name="PriTela" component={PriTela} options={{ headerShown: false }} />
          <Stack.Screen name="LoginTela" component={LoginTela} options={{ headerShown: false }} />
          <Stack.Screen name="CadastroTela" component={CadastroTela} options={{ headerShown: false }} />
          <Stack.Screen name="MainTela" component={MainTela} options={{ headerShown: false }} />
          <Stack.Screen name="ConfigTela" component={ConfigTela} options={{ headerShown: false }} />
          <Stack.Screen name="HelpTela" component={HelpTela} options={{ headerShown: false }} />
          <Stack.Screen name="ContaTela" component={ContaTela} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;