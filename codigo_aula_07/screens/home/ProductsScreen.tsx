import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { screenStyles } from '../../styles/ScreenStyles';

/**
 * Tela de listagem de produtos.
 * Apenas informa que não há produtos disponíveis.
 */
export function ProductsScreen() {
  return (
    <View style={screenStyles.container}>
      <Text>Nenhum produto disponível</Text>
    </View>
  );
}
