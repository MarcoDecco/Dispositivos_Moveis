import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { screenStyles } from '../../styles/ScreenStyles';

/**
 * Tela de relatórios.
 * Informa ao usuário que não há relatórios disponíveis.
 */
export function ReportsScreen() {
  return (
    <View style={screenStyles.container}>
      <Text>Não há relatórios disponíveis.</Text>
    </View>
  );
}