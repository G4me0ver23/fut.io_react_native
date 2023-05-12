import { Text, View, Button, Image, TextInput, ImageBackground, StyleSheet, TouchableOpacity, Pressable, StatusBar  } from "react-native";
import MenuTop from "../components/MenuTop";
import Nutri from "../img/NutriTxt.png";
import { FlatList } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import Dieta from "../components/Nutri";

function NutriTela({navigation}){
    const [data, setData]=useState();
    const [idCompDieta, setIdCompDieta]=useState(null);
    const [link, setLink]=useState('https://trabalhoedinson.carlosdaniel73.repl.co/dietas');
    function setLinkMsm(idDieta){
        setIdCompDieta(idDieta)
        console.log(idCompDieta)
        if (!idDieta){
            setLink('https://trabalhoedinson.carlosdaniel73.repl.co/dietas')
        }else{
            setLink('https://trabalhoedinson.carlosdaniel73.repl.co/compsdieta/'+idDieta)
        }
        console.log(link)
    }
    useEffect(() => {
        fetch(link)
          .then((response) => response.json())
          .then(lista => {
            setData(lista)
            console.log(lista)
            }
        );   
    }, [link]);
    const styles_dietatela = StyleSheet.create({
        Background: {
            flex: 1,
            backgroundColor: '#FFFFFF',
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        },
        viewflat: {
            overflow: "hidden",
            width: idCompDieta ? "90%" : "80%",
            marginLeft: idCompDieta ? "5%" :"10%"
        }
    });
    return(
        <View style={styles_dietatela.Background}>
            <View>
                <MenuTop navigation={navigation} />
            </View>
            <View style={{alignItems: 'center', marginTop:"15%"}}>
                <TouchableOpacity onPress={()=> setLinkMsm(null) }>
                    <Image source={Nutri} style={{height:55,  width: 165}} />
                </TouchableOpacity>
            </View>
            <View style={styles_dietatela.viewflat}>
                <FlatList
                    data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor= {(item) => {
                            if(item.nome){
                                return item.id_comp_dieta
                            }else{
                                return item.id_dieta
                            }
                            
                        }
                    }
                    renderItem={({ item }) => <Dieta {...item} setLinkMsm={setLinkMsm}/>
                    }
                />
            </View>
        </View>
    )
}



export default NutriTela