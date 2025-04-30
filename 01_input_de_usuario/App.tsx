import React, { useState } from 'react';
import { View, SafeAreaView, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function App() {

  //Armazenar o nome do usuário com "useState"
  const [nome, setNome] = useState('');

  //mostrar nome através do alert
  const mostrarNome = () => {
    Alert.alert('Nome digitado:', `Olá ${nome}, tudo bem?`)
  }

  return (
    <SafeAreaView style={estilo.container}>

      <Text style={estilo.texto}> Digite seu nome: </Text>

      <TextInput style={estilo.input}
      placeholder='Seu nome aqui'
      value={nome}
      onChangeText={setNome}
      />

      <Button color="green" title="Mostrar Nome" onPress={mostrarNome}/>

    </SafeAreaView>
  );
}

const estilo = StyleSheet.create ({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  texto:{
    fontSize: 20,
    fontWeight: 'bold',
  },

  input:{
    textAlign: 'center',
    width: 250,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 12,
  },
})