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


function Nutri({foto, objetivo, id_dieta, descricao, nome, unidade, quantidade, setLinkMsm}, {navigation}){
  const Dieta_1 = "../img/img_funcs/ImgNutri/Dieta-1.png"
  const Dieta_2 = "../img/img_funcs/ImgNutri/Dieta-2.png"
  const Dieta_3 = "../img/img_funcs/ImgNutri/Dieta-3.png"
  const Dieta_4 = "../img/img_funcs/ImgNutri/Dieta-2.png"
  const Dieta_5 = "../img/img_funcs/ImgNutri/Dieta-5.png"
  const Dieta = "../img/img_funcs/ImgNutri/Dieta.png"
  const Metas = "../img/img_funcs/ImgNutri/Metas.png"
  const Medidas = "../img/img_funcs/ImgNutri/Medidas.png"

  const styles_d = StyleSheet.create({
    item: {
      flex: 1,
      marginTop: nome ? 80 : 140,
      height: nome ? 430 : 290,
      width: nome ? 381 :339,
      borderRadius: 30,
      borderColor:'black',
      borderWidth: 5,
      backgroundColor:'#36035E'
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      width:"100%"
    },
    touchflat:{
      height: nome ? 290 : 280,
      width:"100%"
    }
  });
  function defImg(foto){
    switch(foto){
      case 'Dieta': return require(Dieta)
      case 'Metas': return require(Metas)
      case 'Medidas': return require(Medidas)
      case 'Dieta-1': return require(Dieta_1)
      case 'Dieta-2': return require(Dieta_2)
      case 'Dieta-3': return require(Dieta_3)
      case 'Dieta-4': return require(Dieta_4)
      case 'Dieta-5': return require(Dieta_5)
    }
  }

  return(
      <View style={styles_d.item}>
        <TouchableOpacity onPress={()=> {
            console.log('press') 
            setLinkMsm(id_dieta)
          }} style={styles_d.touchflat}>
          <Image source={defImg(foto)} style={styles_d.image} />
        </TouchableOpacity>
        
          {nome ? (
            <Text style={{paddingLeft:15, paddingTop:3, color: 'white', fontSize: 20}}>
              {nome+'\n\n'+quantidade+' '+unidade+ '\n'+'Descrição: '+descricao}
            </Text>) : (null)
          } 
      </View>
  )
}



export default Nutri