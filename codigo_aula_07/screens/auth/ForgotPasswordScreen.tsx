import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { screenStyles } from '../../styles/ScreenStyles';

/**
 * Tela simples de recuperação de senha.
 * Neste exemplo, apenas exibe mensagens informativas ao usuário.
 */
export function ForgotPasswordScreen() {
  return (
    <View style={screenStyles.container}>
      <Text style={screenStyles.title}>Tela de recuperação de senha</Text>
      <Text style={screenStyles.title}>E-mail e código de verificação enviado!</Text>
    </View>
  );
}
