import FundoPriTela from "../img/FundoPriTela.jpg";
import Futio from "../img/Futio.png";
import Interrogacao from "../img/Interrogacao.png";
import Menu from "../img/Menu.png";
import Enter from "../img/Enter.png";

import React from "react";
import { Text, View, Button, Image, ImageBackground, StyleSheet, TouchableOpacity, StatusBar } from "react-native";


function PriTela({navigation}) {
  return (
    <View style={styles_pritela.Background}>
        <ImageBackground source={FundoPriTela} style={styles_pritela.fundo}>
            <View style={styles_pritela.menutop}>    
                <TouchableOpacity>
                    <Image source={Menu} style={{height:25,width:30, marginLeft: 15, marginTop: 8}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={Interrogacao} style={{height:39, width: 39, marginRight:10}}/>
                </TouchableOpacity>
            </View>

            <View style={{alignItems: 'center', height: '36%' }}>
                <Image source={Futio} style={{width: "50%",height:'30%'}}/>
            </View>

            <View style={{alignItems: 'center'}}>    
                <TouchableOpacity onPress={()=> navigation.navigate('LoginTela')}>
                    <Image source={Enter} style={{height:65,width:215, marginTop: 70}}/>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
  );
}
const styles_pritela = StyleSheet.create({
  Background: {
    height: '100%',
    width: "100%",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  fundo: {
    height: "100%",
    width: "100%"
  },
  menutop: {
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});


export default PriTela;