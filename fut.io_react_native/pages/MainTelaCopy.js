import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View, Button, Image, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";

import TreinoTela from "./TreinoTela/TreinoTela";
import NutriTela from "./NutriTela/NutriTela";
import TaticTela from "./TaticTela/TaticTela";
import PsicoTela from "./PsicoTela/PsicoTela";
import Halter from "../img/Halter.png"
import Nutri from "../img/Nutri.png"
import Tatico from "../img/Tatico.png"
import Psico from "../img/Psico.png"
import InicialTela from "../pages/InicialTela";
import Ball from "../components/Ball";


const Tab = createBottomTabNavigator();
function MainTelaC() {
  return(
    <Tab.Navigator 
        screenOptions={({route}) => ({
            tabBarStyle: {
                borderTopWidth: 5,
                borderTopColor:'#5F00AA',
                backgroundColor: '#FFFFFF',
                height: 65
            },
            tabBarActiveBackgroundColor : route.name === 'InicialTela' ? '#FFFFFF' : '#D9D9D9',
            
            tabBarLabel: () => null
            })}
         initialRouteName="InicialTela"
    >
        <Tab.Screen name="TreinoTela" component={TreinoTela}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <Image
                        source={Halter}
                        style={{ width: size+20, height: size+20, color:color }}
                    />
                ),
            }}
        />
        <Tab.Screen name="NutriTela" component={NutriTela} 
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <Image
                        source={Nutri}
                        style={{ width: size+20, height: size+20, color:color }}
                    />
                ),
            }}
        />
        <Tab.Screen name="InicialTela" component={InicialTela} 
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <Ball size={size}color={color} />
                ),
            }}
        />
        <Tab.Screen name="TaticTela" component={TaticTela} 
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <Image
                        source={Tatico}
                        style={{ width: size+30, height: size+20, color:color }}
                    />
                ),
            }}
        />
        <Tab.Screen name="PsicoTela" component={PsicoTela} 
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <Image
                        source={Psico}
                        style={{ width: size+20, height: size+20, color:color }}
                    />
                ),
            }}
        />
    </Tab.Navigator>
  )
}


export default MainTelaC;