import FutioBlack from "../img/FutioBlack.png";
import FundoMainTela from "../img/FundoMainTela.png";
import TreinoDia from "../img/TreinoDia.png";
import Almoço from "../img/Almoço.png";
import Metas from "../img/Metas.png";

import MenuTop from "../components/MenuTop";
import React, { useEffect, useState } from 'react';
import { Text, View, Platform, Button, Image, TextInput, ImageBackground, StyleSheet, TouchableOpacity, Pressable, StatusBar  } from "react-native";
function InicialTela({navigation}){
    return(
        <Pressable style={styles_inicialtela.BackGround} >
            <ImageBackground source={FundoMainTela} style={styles_inicialtela.fundo}>
                <MenuTop navigation={navigation} />
                <View style={{alignItems: 'center', marginTop:10}}>
                    <Image source={FutioBlack} />
                </View>
                <View style={{marginTop:30}}>
                    <TouchableOpacity onPress={()=> navigation.navigate('TreinoTela')} style={{marginLeft:30, height:140, width:210}}>
                        <Image source={TreinoDia}/>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center',marginTop:70}}>
                    <TouchableOpacity onPress={()=> navigation.navigate('NutriTela')}>
                        <Image source={Almoço} style={{height:140, width:210}} />
                    </TouchableOpacity>   
                </View>
                <View style={{alignItems: 'flex-end',marginTop:70}}>
                    <TouchableOpacity onPress={()=> navigation.navigate('NutriTela')}>
                        <Image source={Metas} style={{height:140, width:210,marginRight:30 }} />
                    </TouchableOpacity>
                </View> 
            </ImageBackground>
        </Pressable>
    )
}

const styles_inicialtela = StyleSheet.create({
    BackGround: {
      flex: 1,
      height:'100%',
      width:'100%',
      backgroundColor: 'white',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    fundo: {
      height: "100%",
      width: "100%"
    },
})

export default InicialTela;