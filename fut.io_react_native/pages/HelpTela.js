import React from "react";
import { useState, useContext } from "react";
import { View, Text, TextInput, Vibration, TouchableOpacity, Pressable, Image, StyleSheet, StatusBar, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Seta from "../img/Seta.png";
import { AuthContext } from '../context/authcontext'
import { api } from '../services/api';





function HelpTela() {
  const { user, signed } = useContext(AuthContext)
  const [AlterVisible, setAlterVisible] = useState(false);
  const [Senha, setSenha]=useState()
  const [NovaSenha, setNovaSenha]=useState()
  const [UserUpdate, setUserUpdate]=useState()
  const [UpdateResponse, setUpdateResponse]=useState('')

  const navigation = useNavigation();
  const checkSenha = async (senha, NovaSenha) => {
    const email = await user.email
    const check = await api.post('/updatesenha', { email, senha })
    if (check.data.message) {
      Vibration.vibrate()
      setUpdateResponse(check.data.message)
    } else {
      const us = await user
      us['senha']= await NovaSenha
      setUserUpdate(us)
      const request = await api.put('/users', UserUpdate)
      if (!request){
        Vibration.vibrate() 
      }
      setUpdateResponse(check.data)
    }
  }
  return (
    <Pressable style={styles_configtela.BackGround} onPress={()=>{setAlterVisible(false);setUpdateResponse('')}}>
      <View style={{}}>
        <TouchableOpacity style={{ marginLeft: 0 }} onPress={() => navigation.goBack()}>
          <Image source={Seta} style={{ marginLeft:5 ,marginTop:20,height: 25, width:30, transform: [{ rotate: '180deg' }] }} />
        </TouchableOpacity>
      </View>
      <View style={{}}>
        <Text style={{ marginLeft:10, fontSize: 55, alignSelf:'center', fontWeight: "bold", marginTop:30}}>Ajuda e Feedback</Text>
        <TouchableOpacity onPress={()=>{setAlterVisible(true)}}> 
          <Text style={{marginTop:25,marginLeft:15,fontSize: 25, fontWeight: "bold"}}>{signed ?'Alterar senha '+UpdateResponse : 'Recuperar senha '}</Text> 
          {AlterVisible
          ?<View>
            <TextInput  style={[styles_configtela.Inputs,{marginTop: 4,marginLeft:15}]} onChangeText={setSenha} placeholder="Senha antiga" />
            <TextInput style={[styles_configtela.Inputs,{marginTop: 4,marginLeft:15}]} onChangeText={setNovaSenha} placeholder="Nova senha" />
            <TouchableOpacity style={
              {height:40,
               width:150,
               marginLeft: 16,
               marginTop:4,
               borderRadius:14,
               backgroundColor: '#320754',
               alignItems: 'center'}
              } 
              onPress={()=>{checkSenha(Senha, NovaSenha)}}
            >
              <Text style={{color:'white', paddingTop:5, fontSize:25}}>CONFIRMAR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('ConfigTela')}> 
              <Text style={{marginTop:3, marginLeft:15,fontSize: 25, fontWeight: "bold"}}>Configurações do app </Text>
            </TouchableOpacity>
          </View>
          : 
          <TouchableOpacity onPress={()=> navigation.navigate('ConfigTela')}> 
            <Text style={{marginTop:5,marginBottom:130, marginLeft:15,fontSize: 25, fontWeight: "bold"}}>Configurações do app </Text>
          </TouchableOpacity>
          }      
        </TouchableOpacity>
        
       
        <TextInput style={[styles_configtela.Inputs,{marginTop: 100,marginLeft:15}]} placeholder="Pesquisar ajuda" />
      </View>
      <View>   
        <TouchableOpacity> 
          <Text style={{marginTop:5,marginLeft:15,fontSize: 25, fontWeight: "bold"}}>Enviar Feedback</Text>
        </TouchableOpacity>
      </View>
    </Pressable>
   
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