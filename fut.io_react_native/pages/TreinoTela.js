import { Text, View, Button, Image, TextInput, ImageBackground, StyleSheet, TouchableOpacity, Pressable, StatusBar  } from "react-native";
import MenuTop from "../components/MenuTop";
import Fisico from "../img/Fisico.png";
import { FlatList } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import Treino from "../components/Treino";

function TreinoTela({navigation}){
    const [data, setData]=useState();
    const [idCompTreino, setIdCompTreino]=useState(null);
    const [link, setLink]=useState('https://trabalhoedinson.carlosdaniel73.repl.co/treinos');
    function setLinkMsm(idTreino){
        setIdCompTreino(idTreino)
        console.log(idCompTreino)
        if (!idTreino){
            setLink('https://trabalhoedinson.carlosdaniel73.repl.co/treinos')
        }else{
            setLink('https://trabalhoedinson.carlosdaniel73.repl.co/compstreino/'+idTreino)
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
    const styles_treinotela = StyleSheet.create({
        Background: {
            flex: 1,
            backgroundColor: '#FFFFFF',
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        },
        viewflat: {
            overflow: "hidden",
            width: idCompTreino ? "90%" : "80%",
            marginLeft: idCompTreino ? "5%" :"10%"
        }
    });
    return(
        <View style={styles_treinotela.Background}>
            <View>
                <MenuTop navigation={navigation} />
            </View>
            <View style={{alignItems: 'center', marginTop:"15%"}}>
                <TouchableOpacity onPress={()=> setLinkMsm(null) }>
                    <Image source={Fisico} style={{height:50,  width: 180}} />
                </TouchableOpacity>
            </View>
            <View style={styles_treinotela.viewflat}>
                
                <FlatList
                    data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor= {(item) => {
                            if(item.nome){
                                return item.id_comp_treino
                            }else{
                                return item.id_treino
                            }
                            
                        }
                    }
                    renderItem={({ item }) => <Treino {...item} setLinkMsm={setLinkMsm}/>
                    }
                />
            </View>
        </View>
    )
}



export default TreinoTela