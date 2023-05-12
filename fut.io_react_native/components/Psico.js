import { useState, useEffect } from "react";
import { Text, View, Button, Image, TextInput, ImageBackground, StyleSheet, TouchableOpacity, Pressable, StatusBar  } from "react-native";

/*
import Treino1 from "../img/img_funcs/ImgTreinos/Treino1.png"
import Treino2 from "../img/img_funcs/ImgTreinos/Treino2.png"
import Treino3 from "../img/img_funcs/ImgTreinos/Treino3.png"
import Treino1_1 from "../img/img_funcs/ImgTreinos/Treino1-1.png"
import Treino1_2 from "../img/img_funcs/ImgTreinos/Treino1-2.png"
import Treino1_3 from "../img/img_funcs/ImgTreinos/Treino1-3.png"
import Treino2_1 from "../img/img_funcs/ImgTreinos/Treino2-1.png"
import Treino2_2 from "../img/img_funcs/ImgTreinos/Treino2-2.png"
import Treino2_3 from "../img/img_funcs/ImgTreinos/Treino2-3.png"
import Treino3_1 from "../img/img_funcs/ImgTreinos/Treino3-1.png"
import Treino3_2 from "../img/img_funcs/ImgTreinos/Treino3-2.png"
import Treino3_3 from "../img/img_funcs/ImgTreinos/Treino3-3.png"
*/


function Psico({foto, id_chat, especialidade, descricao, mensagem, remetente, datahora, setLinkMsm}, {navigation}){
  const PerfilPsico1 = "../img/img_funcs/ImgPsico/PerfilPsico1.png"

  const styles_p = StyleSheet.create({
    item: {
      flex: 1,
      height: mensagem? 100: 120,
      width: "100%",
      borderRadius: 5,
      borderColor:'#36035E',
      borderWidth: 1,
      backgroundColor:'white'
    },
    image: {
      resizeMode: 'cover',
      justifyContent: 'center',
      width: mensagem?"16%":"23%",
      borderRadius: 50,
      borderWidth: 1,
      borderColor: 'black'
    },
    touchflat:{
      flex:1,
      paddingTop: 10,
      paddingLeft: 10,
      width:"100%"
    }
  });
  function defImg(foto){
    switch(foto){
      case 'PerfilPsico1': return require(PerfilPsico1)
    }
  }

  return(
      <View style={styles_p.item}>
        <TouchableOpacity onPress={()=> {
            console.log('press') 
            setLinkMsm(id_chat)
          }} style={styles_p.touchflat}>
          <View style={{flexDirection: remetente=='Parceiro' ? 'row-reverse' : 'row'}}>
            <Image source={defImg(foto)} style={styles_p.image} />
            
            
            {mensagem ? (
                <Text style={{color: 'black', fontSize: 20}}>
                {datahora+':\n'+mensagem+'\n'}
                </Text>) : (<Text style={{color: 'black', fontSize: 30}}>
                {especialidade}
                </Text>)
            } 
          </View>
        </TouchableOpacity>
      </View>
  )
}



export default Psico