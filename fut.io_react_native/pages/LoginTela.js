import Forget from "../img/Forget.png";
import Login from "../img/Login.png";
import EnterRoxo from "../img/EnterRoxo.png";
import CriarConta from "../img/CriarConta.png";
import MenuTop from "../components/MenuTop";
import DadosLogin from "../components/DadosLogin";
import { AuthContext } from '../context/authcontext'
import { useContext, useState, useEffect} from 'react'

import { Text, View, Button, Image, ImageBackground, SafeAreaView, Keyboard, Platform, StatusBar, StyleSheet, TouchableOpacity, Pressable, Vibration } from "react-native";

function LoginTela({navigation}) {
  const { signIn, signed } = useContext(AuthContext)
  const [user, setUser]= useState({email: '', senha: ''})
  const [senha, setSenha]= useState(null)
  const [email, setEmail]= useState(null)

  useEffect(() => {
    if (senha && email){
      setUser({email, senha})
    }
    if (signed) return navigation.navigate('MainTela')
  }, [senha, email])
  const handleSubmit = async () => {
    if(user){
      console.log('existe')
      await signIn(user)
      if (signed){
        return navigation.navigate('MainTela')
      }else{
        Vibration.vibrate()
      } 
    }else{
        Vibration.vibrate()
    } 
  }
  return (
    <Pressable style={styles_logintela.BackGround} onPress={Keyboard.dismiss} >
      <MenuTop navigation={navigation}/>
      <View style={{alignItems: 'center', marginTop:"40%"}}>
        <Image source={Login} style={{width: 175,height: 70}} />
        <DadosLogin setSenha={setSenha} setEmail={setEmail} setUser={setUser} senha={senha} email={email}/>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={{marginTop: 2}}> 
          <Image source={Forget} style={{marginTop:6, height:14, width:80}} /> 
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 2}} onPress={handleSubmit}> 
          <Image source={EnterRoxo} style={{marginTop:6, height:60, width:200}} /> 
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('CadastroTela')}> 
          <Image source={CriarConta} style={{marginTop:6, height:18, width:110}} /> 
        </TouchableOpacity>
      </View>
    </Pressable>
    
  );
}
const styles_logintela = StyleSheet.create({
  BackGround: {
    flex: 1,
    height:'100%',
    width:'100%',
    backgroundColor: 'white',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
})
/*,
Cadastro:  {
  marginLeft: 41,
}
,
Login:  {
  marginLeft: 82,
}
,
DadosLogin:{
  backgroundColor: '#d9d9d9',
  width: 206,
  height: 33,
  borderRadius: 20,
  margin: 0,
  color: '#828282',
  textAlign: center,
  marginleft: 46,
}
,
DadosLogin:{
  margin: 5,
  textAlign: left,
  marginLeft: 50,
}
})


<View className={styles.Login}>
        <img src={Login} height="57" />
      </View>

      <View>
        <DadosLogin />

        <View>
          <Link to='/helptela'>
            <button
              className={stgen.Botao}
              style={{
                height: 25,
                width: 100,
                marginTop: 2,
                marginLeft: 99
              }}
            >
              <img src={Forget} height="17px" />
            </button>
          </Link>
        </View>

        <View>
          <Link to='/maintela'>
            <button
              className={stgen.Botao}
              style={{
                height: 50,
                width: 145,
                marginLeft: 77
              }}
            >
              <img src={EnterRoxo} height="50px" />
            </button>
          </Link>
        </View>

        <View>
          <Link to='/cadastrotela'>
            <button
              className={stgen.Botao}
              style={{
                height: 25,
                width: 120,
                marginLeft: 91
              }}
            >
              <img src={CriarConta} height="20px" />
            </button>
          </Link>
        </View>
      </View>
*/

export default LoginTela;