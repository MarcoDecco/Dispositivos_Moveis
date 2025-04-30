import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigation/HomeStack';
import { screenStyles } from '../../styles/ScreenStyles';

/**
 * Tela inicial da aba "Home".
 * Contém botões que navegam para as telas de Produtos e Vendas.
 */
export function HomeScreen() {
  // Hook de navegação com tipagem para o Stack da aba Home
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  return (
    <View style={screenStyles.container}>
      {/* Navega para a tela de Produtos */}
      <Button title="Ir para Produtos" onPress={() => navigation.navigate('Products')} />
      {/* Navega para a tela de Vendas */}
      <Button title="Ir para Vendas" onPress={() => navigation.navigate('Sales')} />
    </View>
  );
}