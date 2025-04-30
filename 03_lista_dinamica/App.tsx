import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Button, TextInput, Dimensions, Image } from 'react-native';

//Obtem a largura da tela do celular
const screenWidth = Dimensions.get('window').width;

//Obtem a altura da tela do celular
const screenHeight = Dimensions.get('window').height;

const logo = require('./assets/logo_MD.webp')

export default function App() {

  //Estado para armazenar o texto digitado
  const [texto, setTexto] = useState('');

  //Estado para armazenar a lista de itens
  const [item, setItem] = useState<string[]>([]);

  const adicionarItem = () => {
    if(texto.trim()){
      setItem([...item, texto]);
      setTexto('');
    }
  };

  return (
    <SafeAreaView style={estilos.corpo}>

      <View style={estilos.header}>
        <Image source={logo} style={estilos.logo}/>

        <Text style={estilos.texto_header}>
          Lista Dinâmica
        </Text>
      </View>

      <Text style={estilos.texto}>
        Digite um texto para ser adicionado à lista:
      </Text>

      <TextInput
      placeholder={"Escreva aqui..."}
      value={texto}
      onChangeText={setTexto}
      style={estilos.input}
      />
      
      <Button title={"Adicionar"} onPress={adicionarItem}/>

      <ScrollView contentContainerStyle={estilos.scroll}>
        {item.map((item, index) => (
          <Text style={estilos.textoScroll} key={index}>
            - {item}
          </Text>
        ))}
      </ScrollView>

    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  corpo:{
    // backgroundColor: 'lightcyan',
    flex: 1,
    alignItems: 'center',
    gap: 10,
  },

  logo:{
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
  },

  texto_header:{
    position: 'absolute',
    width: screenWidth,
    textAlign: "center",
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },

  header:{
    width: '100%',
    backgroundColor: '#808080',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 40,
  },

  texto:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },

  textoScroll:{
    fontSize: 18,
  },

  input:{
    width: 250,
    borderBottomWidth: 2,
    borderColor: 'black',
    borderRadius: 100,
    textAlign: 'center',
  },

  scroll:{
    width: screenWidth * 0.8,
    resizeMode: 'contain',
    backgroundColor: 'lightblue',
    borderWidth: 1,
    borderColor: 'darkblue',
    borderRadius: 3,
    padding: 5,
    gap: 5,
  },
})