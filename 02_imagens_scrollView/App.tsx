import React from 'react';
import { View, ScrollView, Image, StyleSheet, Text } from 'react-native';

const img1 = require('./assets/img1.png')
const img2 = require('./assets/img2.png')
const img3 = require('./assets/img3.png')
const img4 = require('./assets/img4.png')
const img5 = require('./assets/img5.png')
const img6 = require('./assets/img6.png')
const img7 = require('./assets/img7.png')
const img8 = require('./assets/img8.png')

const styles = StyleSheet.create({
  container:{
    alignItems: 'center', // Centraliza as imagens
    paddingVertical: 30, // Espaço superior e inferior
    backgroundColor: 'lightgray',
    flexDirection: 'column',
    gap: 50,
  },

  titulo:{
    fontSize: 30,
    fontWeight: 'bold',
  },

  primeiro:{
    marginTop: 50,
  },

  ultimo:{
    marginBottom: 50,
  },

  dupla:{
    flexDirection: 'row',
    gap: 20,
  },
  
  imagem:{
    width: 150,
    height: 150,
  },
})

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={[styles.titulo, styles.primeiro]}>
        Logo das Linguagens:
      </Text>

      <View style={styles.dupla}>
        <Image source={img1} style={styles.imagem}/>
        <Image source={img2} style={styles.imagem}/>
      </View>

      <View style={styles.dupla}>
        <Image source={img3} style={styles.imagem}/>
        <Image source={img4} style={styles.imagem}/>
      </View>

      <View style={styles.dupla}>
        <Image source={img5} style={styles.imagem}/>
        <Image source={img6} style={styles.imagem}/>
      </View>

      <View style={[styles.dupla, styles.ultimo]}>  
        <Image source={img7} style={styles.imagem}/>
        <Image source={img8} style={styles.imagem}/>
      </View>
      
    </ScrollView>
  );
}