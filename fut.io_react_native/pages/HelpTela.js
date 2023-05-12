import React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, StatusBar, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Seta from "../img/Seta.png";



function HelpTela() {
  const navigation = useNavigation();
  return (
    <View style={styles_configtela.BackGround}>
      <View style={{}}>
        <TouchableOpacity style={{ marginLeft: 0 }} onPress={() => navigation.goBack()}>
          <Image source={Seta} style={{ marginLeft:5 ,marginTop:20,height: 25, width:30, transform: [{ rotate: '180deg' }] }} />
        </TouchableOpacity>
      </View>
      <View style={{}}>
        <Text style={{ marginLeft:10, fontSize: 55, alignSelf:'center', fontWeight: "bold", marginTop:30}}>Ajuda e Feedback</Text>
        <TouchableOpacity> 
          <Text style={{marginTop:25,marginLeft:15,fontSize: 25, fontWeight: "bold"}}>Recuperar senha </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('ConfigTela')}> 
          <Text style={{marginTop:5, marginLeft:15,fontSize: 25, fontWeight: "bold"}}>Configurações do app </Text>
        </TouchableOpacity>
       
        <TextInput style={[styles_configtela.Inputs,{marginTop: 110,marginLeft:15}]} placeholder="Pesquisar ajuda" />
      </View>
      <View>   
      <TouchableOpacity> 
          <Text style={{marginTop:5,marginLeft:15,fontSize: 25, fontWeight: "bold"}}>Enviar Feedback</Text>
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
        width: 280,
        height: 40,
        borderRadius: 20,
        color: '#828282',
        textAlign: 'center'
        
      }
})

export default HelpTela;