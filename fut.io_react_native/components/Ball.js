import { View,  Image } from "react-native";
import BolaRoxo from "../img/BolaRoxo.png"
function Ball({size, color}){
    return(
        <View style={{alignItems:'center', justifyContent: 'center', borderRadius:30, marginBottom:40, backgroundColor:'#FFFFFF'}}>
            <Image source={BolaRoxo} style={{width: size+40, height: size+40}}/>
        </View>
    )
}

export default Ball