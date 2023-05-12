import { Text, View, Button, Image, TextInput, ImageBackground, StyleSheet, TouchableOpacity, Pressable, StatusBar  } from "react-native";
import MenuTop from "../components/MenuTop";
import TaticTxt from "../img/TaticTxt.png";
import { FlatList } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import Tatic from "../components/Tatic";

function TaticTela({navigation}){
    const [data, setData]=useState();
    const [idCompTatic, setIdCompTatic]=useState(null);
    const [link, setLink]=useState('https://trabalhoedinson.carlosdaniel73.repl.co/taticos');
    function setLinkMsm(idTatic){
        setIdCompTatic(idTatic)
        console.log(idCompTatic)
        if (!idTatic){
            setLink('https://trabalhoedinson.carlosdaniel73.repl.co/taticos')
        }else{
            setLink('https://trabalhoedinson.carlosdaniel73.repl.co/compstatic/'+idTatic)
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
    const styles_tatictela = StyleSheet.create({
        Background: {
            flex: 1,
            backgroundColor: '#FFFFFF',
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        },
        viewflat: {
            overflow: "hidden",
            width: idCompTatic ? "90%" : "80%",
            marginLeft: idCompTatic ? "5%" :"10%"
        }
    });
    return(
        <View style={styles_tatictela.Background}>
            <View>
                <MenuTop navigation={navigation} />
            </View>
            <View style={{alignItems: 'center', marginTop:"15%"}}>
                <TouchableOpacity onPress={()=> setLinkMsm(null) }>
                    <Image source={TaticTxt} style={{height:60,  width: 230}} />
                </TouchableOpacity>
            </View>
            <View style={styles_tatictela.viewflat}>
                <FlatList
                    data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor= {(item) => {
                            if(item.descricao){
                                return item.id_comp_tatico
                            }else{
                                return item.id_tatico
                            }
                            
                        }
                    }
                    renderItem={({ item }) => <Tatic {...item} setLinkMsm={setLinkMsm}/>
                    }
                />
            </View>
        </View>
    )
}



export default TaticTela