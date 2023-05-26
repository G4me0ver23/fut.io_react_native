import Cadastro from "../img/Cadastro.png";
import Cadastrar from "../img/Cadastrar.png";
import MenuTop from "../components/MenuTop";
import DadosCadastro from "../components/DadosCadastro";
import { api } from "../services/api"
import { AuthContext } from '../context/authcontext'

import {useState, useEffect, useContext} from "react"
import { Text, View, Button, Image, ImageBackground, SafeAreaView, Platform, StatusBar, Keyboard, StyleSheet, TouchableOpacity, Pressable, Vibration } from "react-native";

function CadastroTela({navigation}) {
  const { signIn, signed } = useContext(AuthContext)
  const [senhaValid, setSenhaValid]= useState(null);
  const [user, setUser]= useState({nome: '', email: '', senha: '', foto: ''});
  const [confSenha, setConfSenha]=useState(null);
  const [senha, setSenha]= useState(null);
  const [email, setEmail]= useState(null);
  const [nome, setNome]= useState(null);
  const [foto, setFoto]= useState("");
  const [cad, setCad]= useState(null);

  useEffect(() => {
    if (senha==confSenha){
      setSenhaValid(true)
      if (senha && nome && email){
        setUser({nome,email,senha,foto})

        setCad(true)
      }
    }
    if (signed) return navigation.navigate('MainTela')
  }, [senha, confSenha, nome, email])

  const handleSubmit = async (user) => {
    const newUser = await api.post('/users', user)
    if (senhaValid && cad){
      return navigation.navigate('LoginTela')
    }else{
      Vibration.vibrate()
    }
    return newUser.status
  }
  
  return (
    <Pressable style={styles_cadastrotela.BackGround} onPress={Keyboard.dismiss} >
      <MenuTop navigation={navigation}/>
      <View style={{alignItems: 'center', marginTop:"40%"}}>
        <Image source={Cadastro} style={{width: '60%',height: '10%'}} />
        <DadosCadastro setCad={setCad} setUser={setUser} setSenhaValid={setSenhaValid} setConfSenha={setConfSenha} setSenha={setSenha} setEmail={setEmail} setNome={setNome} confSenha={confSenha} senha={senha} email={email} nome={nome} />
        <TouchableOpacity style={{marginTop: 20}} onPress={() => handleSubmit(user)}>
          <Image source={Cadastrar} height="17" />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
}
const styles_cadastrotela = StyleSheet.create({
  BackGround: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }})

export default CadastroTela;