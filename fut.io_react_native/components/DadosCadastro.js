import DadosLogin from "./DadosLogin";
import { Text, View, Button, Image, TextInput, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
function DadosCadastro(props){
    return(
      <View style={styles_dadoscadastro.DadosCadastro} >
          <Text style={{marginLeft: 7, fontSize:30, marginTop: 4, marginBottom: 1}}>Nome:</Text>
          <TextInput onChangeText={props.setNome} style={styles_dadoscadastro.Inputs} value={props.nome} />
          <DadosLogin setSenha={props.setSenha} setEmail={props.setEmail} senha={props.senha} email={props.email}/>
          <Text style={{marginLeft: 7, fontSize:30, marginTop: 4, marginBottom: 1}}>Confirme a Senha:</Text>
          <TextInput onChangeText={props.setConfSenha} style={styles_dadoscadastro.Inputs} value={props.confSenha} />
      </View>
    )
}
const styles_dadoscadastro= StyleSheet.create({
  DadosCadastro: {
    marginTop: 16,
  },
  Inputs: {
    backgroundColor: '#d9d9d9',
    width: 280,
    height: 40,
    borderRadius: 20,
    color: '#828282',
    textAlign: 'center'
  }
});


export default DadosCadastro;
