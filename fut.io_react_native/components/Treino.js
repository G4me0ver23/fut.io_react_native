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


function Treino({foto, objetivo, id_treino, descricao, nome, repeticoes, series, setLinkMsm}, {navigation}){
  const Treino1 = "../img/img_funcs/ImgTreinos/Treino1.png"
  const Treino2 = "../img/img_funcs/ImgTreinos/Treino2.png"
  const Treino3 = "../img/img_funcs/ImgTreinos/Treino3.png"
  const Treino1_1 = "../img/img_funcs/ImgTreinos/Treino1-1.png"
  const Treino1_2 = "../img/img_funcs/ImgTreinos/Treino1-2.png"
  const Treino1_3 = "../img/img_funcs/ImgTreinos/Treino1-3.png"
  const Treino2_1 = "../img/img_funcs/ImgTreinos/Treino2-1.png"
  const Treino2_2 = "../img/img_funcs/ImgTreinos/Treino2-2.png"
  const Treino2_3 = "../img/img_funcs/ImgTreinos/Treino2-3.png"
  const Treino3_1 = "../img/img_funcs/ImgTreinos/Treino3-1.png"
  const Treino3_2 = "../img/img_funcs/ImgTreinos/Treino3-2.png"
  const Treino3_3 = "../img/img_funcs/ImgTreinos/Treino3-3.png"

  const styles_t = StyleSheet.create({
    item: {
      flex: 1,
      marginTop: nome ? 100 : 150,
      height: nome ? 450 : 320,
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
      height: nome ? 370 : 280,
      width:"100%"
    }
  });
  function defImg(foto){
    switch(foto){
      case 'Treino1': return require(Treino1)
      case 'Treino2': return require(Treino2)
      case 'Treino3': return require(Treino3)
      case 'Treino1-1': return require(Treino1_1)
      case 'Treino1-2': return require(Treino1_2)
      case 'Treino1-3': return require(Treino1_3)
      case 'Treino2-1': return require(Treino2_1)
      case 'Treino2-2': return require(Treino2_2)
      case 'Treino2-3': return require(Treino2_3)
      case 'Treino3-1': return require(Treino3_1)
      case 'Treino3-2': return require(Treino3_2)
      case 'Treino3-3': return require(Treino3_3)
    }
  }

  return(
      <View style={styles_t.item}>
        <TouchableOpacity onPress={()=> {
            console.log('press') 
            setLinkMsm(id_treino)
          }} style={styles_t.touchflat}>
          <Image source={defImg(foto)} style={styles_t.image} />
        </TouchableOpacity>
        
          {nome ? (
            <Text style={{paddingLeft:15, paddingTop:3, color: 'white', fontSize: 20}}>
              {series+' series de '+repeticoes + ' repetições \n'}{'Descrição: '+descricao}
            </Text>) : (<Text style={{paddingLeft:15, paddingTop:7, color: 'white'}}>
              {'Objetivo: '+objetivo}
            </Text>)

          } 
        
      </View>
  )
}



export default Treino