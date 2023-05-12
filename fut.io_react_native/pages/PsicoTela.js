import { Text, View, Button, Image, TextInput, ImageBackground, StyleSheet, TouchableOpacity, Pressable, StatusBar  } from "react-native";
import MenuTop from "../components/MenuTop";
import PsicoTxt from "../img/PsicoTxt.png";
import { FlatList } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import Psico from "../components/Psico";

function PsicoTela({navigation}){
    const [data, setData]=useState();
    const [idMensagem, setIdMensagem]=useState(null);
    const [link, setLink]=useState('https://trabalhoedinson.carlosdaniel73.repl.co/chats');
    function setLinkMsm(idChat){
        setIdMensagem(idChat)
        console.log(idMensagem)
        if (!idChat){
            setLink('https://trabalhoedinson.carlosdaniel73.repl.co/chats')
        }else{
            setLink('https://trabalhoedinson.carlosdaniel73.repl.co/mensagens/'+idChat)
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
    const styles_psicotela = StyleSheet.create({
        Background: {
            flex: 1,
            backgroundColor: '#FFFFFF',
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        },
        viewflat: {
            overflow: "hidden",
            marginTop:50,
            marginBottom:50
        }
    });
    return(
        <View style={styles_psicotela.Background}>
            <View>
                <MenuTop navigation={navigation} />
            </View>
            <View style={{alignItems: 'center', marginTop:"15%"}}>
                <TouchableOpacity onPress={()=> setLinkMsm(null) }>
                    <Image source={PsicoTxt} style={{height:55,  width: 180}} />
                </TouchableOpacity>
            </View>
            <View style={styles_psicotela.viewflat}>
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    keyExtractor= {(item) => {
                            if(item.mensagem){
                                return item.id_msg
                            }else{
                                return item.id_chat
                            }
                            
                        }
                    }
                    renderItem={({ item }) => <Psico {...item} setLinkMsm={setLinkMsm}/>
                    }
                />
            </View>
        </View>
    )
}


export default PsicoTela