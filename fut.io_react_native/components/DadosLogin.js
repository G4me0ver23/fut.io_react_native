import { Text, View, Button, Image, TextInput, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
function DadosLogin(props){
  return(
      <View>
          <Text style={{marginLeft: 7, fontSize:30, marginTop: 4, marginBottom: 1}}>Email:</Text>
          <TextInput onChangeText={props.setEmail} style={styles_dadoslogin.Inputs} value={props.email} placeholder="ex: silvxcleiton06@gmail.com" keyboardType ='email-address' />
          <Text style={{marginLeft: 7, fontSize:30, marginTop: 4, marginBottom: 1}}>Senha:</Text>
          <TextInput onChangeText={props.setSenha} style={styles_dadoslogin.Inputs} value={props.senha} />
      </View>
  )
}

const styles_dadoslogin= StyleSheet.create({
  DadosLogin: {
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

export default DadosLogin;



