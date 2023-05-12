import React, { useContext } from "react";
import { useState } from "react";
import { Button,Switch,View, Text, TextInput, TouchableOpacity, Image, StyleSheet, StatusBar, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Seta from "../img/Seta.png";
import context from "../context/authcontext"
import { AuthContext } from '../context/authcontext'

function ConfigTela() {
  const navigation = useNavigation();
  const { signOut } = useContext(AuthContext);
  const [Ocultar, setOcultar] = useState(false);
  const [Notifocar, setNotificar] = useState(false);
  const toggleSwitch = () => setOcultar(previousState => !previousState);
  const toggleSwitch1 = () => setNotificar(previousState => !previousState);
  const handleLogout = async () => {
    await signOut();
    navigation.navigate('PriTela');
    console.log('saiu')
  };


  return (
    <View style={styles_configtela.BackGround}>
      <View>
        <TouchableOpacity style={{ marginLeft: 0 }} onPress={() => navigation.goBack()}>
          <Image source={Seta} style={{ marginLeft:5 ,marginTop:20,height: 25, width:30, transform: [{ rotate: '180deg' }] }} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ marginLeft:10, fontSize: 55, fontWeight: "bold", marginTop:30, alignSelf:'center'}}>Configurações</Text>
        <Text style={{marginLeft: 17, fontSize:25, marginTop: 50, marginBottom: 1}}>Alterar Nome:</Text>
        <TextInput style={[styles_configtela.Inputs,{marginLeft:15}]} placeholder="Reginaldo da Silva Santos" />
        <Text style={{marginLeft: 17, fontSize: 25, marginTop: 10 }}>Localização</Text>
        <TextInput style={[styles_configtela.Inputs,{marginLeft:15}]} placeholder="Brasil, Maceió, Alagoas, Farol" />   
      </View>
      <View style={{ flexDirection: 'row'}}>
      <Switch
        style={{marginLeft:10,marginTop:12}}
        trackColor={{ false: "lightgray", true: "lightgray" }}
        thumbColor={Ocultar ? "#5F00AA" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={Ocultar}
      />
      <Text style={{marginTop:20 ,marginLeft:7,fontSize: 20, fontWeight: "bold"}}>Ocultar Dados</Text>
      </View>
      <View style={{ flexDirection: 'row'}}>
      <Switch
        style={{marginLeft:10,marginTop:12}}
        trackColor={{ false: "lightgray", true: "lightgray" }}
        thumbColor={Notifocar ? "#5F00AA" : "#f4f3f4"}
        ios_backgroundColor="White"
        onValueChange={toggleSwitch1}
        value={Notifocar}
      />
      <Text style={{marginTop:20 ,marginLeft:10,fontSize: 20, fontWeight: "bold"}}>Notificações</Text>
      </View>
      <View>   
      <TouchableOpacity onPress={()=> handleLogout()}> 
        <Text style={{marginTop:25,marginLeft:15,fontSize: 20, fontWeight: "bold"}}>Sair</Text>
      </TouchableOpacity>
    </View>
      </View>
   
  );
}
const styles_configtela = StyleSheet.create({
    BackGround: {
      flex: 1,
      height:'100%',
      width:'100%',
      backgroundColor: 'white',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    Inputs: {
        backgroundColor: '#d9d9d9',
        width: 300,
        height: 50,
        borderRadius: 35,
        color: '#828282',
        textAlign: 'center'
        
      }
})

export default ConfigTela;