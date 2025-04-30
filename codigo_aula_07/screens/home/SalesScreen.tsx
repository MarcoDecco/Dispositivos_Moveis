import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { screenStyles } from '../../styles/ScreenStyles';

/**
 * Tela de vendas.
 * Exibe apenas uma mensagem informativa indicando que ainda não há vendas registradas.
 */
export function SalesScreen() {
  return (
    <View style={screenStyles.container}>
      <Text>Nenhuma venda registrada.</Text>
    </View>
  );
}