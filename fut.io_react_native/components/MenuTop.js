import { useContext, useState } from "react";
import InterrogacaoRoxa from "../img/InterrogacaoRoxa.png";
import MenuRoxo from "../img/MenuRoxo.png";
import { Text, View, Button, Image, ImageBackground, Modal, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { AuthContext } from '../context/authcontext'

function MenuTop({navigation}) {
  const [hambVisible, setHambVisible] = useState(false);
  const {user} = useContext(AuthContext)
  const [perfUser, setPerfperfUser]=useState({biotipo: null, email: "", foto: "", id_perfUser: 0, nome: "", senha: ""})
  useState(()=>{
    if (user){
      setPerfperfUser(user)
    }
  }, [user])
  function defReq(foto){
    switch(foto){
      case '' : return require('../img/img_funcs/ImgUser/PerfilDefault.png')
      default : return require('../img/Perfil.png')
    }
  }
  return (
    <View style={styles_MenuTop.menutop}> 
      <Modal 
        animationType="none"
        transparent={true}
        opacity={0.3}
        visible={hambVisible} 
      >
          <Pressable onPress={()=>{
              setHambVisible(!hambVisible)
            }} 
            style={{width:"100%", height :"100%", backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
            <View style={
              {width:"60%",
               height :"100%",
               backgroundColor: '#FFFFFF',
               borderBottomRightRadius: 30,
               borderTopRightRadius: 30,
               borderColor: 'black',
               borderWidth:2}}> 
              <TouchableOpacity onPress={()=> navigation.navigate('ContaTela')}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={defReq(perfUser.foto)} style={{height: 55, width: 55, marginTop: 5, marginLeft: 5}}/>
                  <Text style={{color:'black', paddingTop: 12, paddingLeft: 12, fontSize:17}}>{perfUser.nome+'\n'+perfUser.email}</Text>
                </View>  
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('ConfigTela')}>
                <Text style={{color:'#320754', paddingTop: 12, paddingLeft: 12, fontSize:30}}>Configurações</Text> 
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('HelpTela')}>
                <Text style={{color:'#320754', paddingTop: 12, paddingLeft: 12, fontSize:30}}>Ajuda e feedback</Text> 
              </TouchableOpacity>
            </View>
          </Pressable>
      </Modal>  
      <TouchableOpacity onPress={()=>setHambVisible(!hambVisible)}>
        <Image source={MenuRoxo} style={{height:25,width:30, marginLeft: 15, marginTop:8}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('HelpTela')}>
        <Image source={InterrogacaoRoxa} style={{height:39, width: 39, marginRight:10, }}/>
      </TouchableOpacity>
    </View>
  );
}
const styles_MenuTop = StyleSheet.create({
  menutop: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});


export default MenuTop;