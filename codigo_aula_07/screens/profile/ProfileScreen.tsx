import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { screenStyles } from '../../styles/ScreenStyles';

// Define as props esperadas (uma função para logout)
type Props = {
  onLogout: () => void;
};

/**
 * Tela de perfil do usuário.
 * Contém três botões:
 * - Editar perfil
 * - Configurações 
 * - Logout (ativa a função passada por props e encerra a sessão)
 */
export function ProfileScreen({ onLogout }: Props) {
  return (
    <View style={screenStyles.container}>
      {/* Botão sem ação definida */}
      <Button title="Editar meu perfil" onPress={() => {}} />
      {/* Botão sem ação definida */}
      <Button title="Configurações" onPress={() => {}} />
      {/* Botão real que chama a função de logout */}
      <Button title="Logout" onPress={onLogout} color="red" />
    </View>
  );
}
