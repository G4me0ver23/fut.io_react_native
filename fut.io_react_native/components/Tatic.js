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


function Tatic({foto, objetivo, id_tatico, descricao, posicao, beneficios, setLinkMsm}, {navigation}){
  const Ataque = "../img/img_funcs/ImgPosicoes/Ataque.png"
  const Defesa = "../img/img_funcs/ImgPosicoes/Defesa.png"
  const Goleiro = "../img/img_funcs/ImgPosicoes/Goleiro.png"
  const Meio = "../img/img_funcs/ImgPosicoes/Meio.png"
  const Posicao1 = "../img/img_funcs/ImgPosicoes/Posicao1.png"
  const Posicao2 = "../img/img_funcs/ImgPosicoes/Posicao2.png"
  const Posicao3 = "../img/img_funcs/ImgPosicoes/Posicao3.png"
  const Posicao4 = "../img/img_funcs/ImgPosicoes/Posicao4.png"

  const styles_tt = StyleSheet.create({
    item: {
      flex: 1,
      marginTop: descricao ? 20 : 50,
      height: descricao ? 530 : 450,
      width: descricao ? 381 :339,
      borderRadius: 30,
      borderColor:'black',
      borderWidth: 5,
      backgroundColor:'#5F00AA'
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      width:"100%"
    },
    touchflat:{
      height: descricao ? 290 : 415,
      width:"100%"
    }
  });
  function defImg(foto){
    switch(foto){
      case 'Ataque': return require(Ataque)
      case 'Defesa': return require(Defesa)
      case 'Goleiro': return require(Goleiro)
      case 'Meio': return require(Meio)
      case 'Posicao1': return require(Posicao1)
      case 'Posicao2': return require(Posicao2)
      case 'Posicao3': return require(Posicao3)
      case 'Posicao4': return require(Posicao4)
    }
  }

  return(
      <View style={styles_tt.item}>
        <TouchableOpacity onPress={()=> {
            console.log('press') 
            setLinkMsm(id_tatico)
          }} style={styles_tt.touchflat}>
          <Image source={defImg(foto)} style={styles_tt.image} />
        </TouchableOpacity>
        
          {descricao ? (
            <Text style={{paddingLeft:15, paddingTop:3, color: 'white', fontSize: 20}}>
              {'Benefícios: '+beneficios+'\n\n'+'Descrição:\n'+descricao}
            </Text>) : (
            <Text style={{paddingLeft:15, paddingTop:3, color: 'white', fontSize: 20}}>{'Objetivo: '+objetivo}</Text>)
          } 
      </View>
  )
}



export default Tatic