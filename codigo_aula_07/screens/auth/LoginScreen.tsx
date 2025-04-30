import React, { useState } from 'react';
import { Text, TextInput, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/AuthStack';
import { useNavigation } from '@react-navigation/native';
import { loginStyles } from '../../styles/LoginStyles';

// Define as props esperadas (uma função para login)
type Props = {
  onLogin: () => void;
};

/**
 * Tela de login do usuário.
 * Simula um login com validação simples e navegação para a tela de recuperação de senha.
 */
export function LoginScreen({ onLogin }: Props) {
  // Hook para controlar a navegação entre as telas do stack de autenticação
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  // Estados locais para armazenar o usuário e a senha digitados
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === '123') {
      onLogin(); // Chama a função passada como prop
    } else {
      alert('Credenciais inválidas!');
    }
  };

  return (
    <SafeAreaView style={loginStyles.container}>
      <Text style={loginStyles.titlelogin}>Olá, seja bem!</Text>
      {/* Campo de entrada do nome de usuário */}
      <TextInput
        style={loginStyles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />
      {/* Campo de entrada da senha (oculta) */}
      <TextInput
        style={loginStyles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {/* Botão de login */}
      <Button title="Entrar" onPress={handleLogin} />
      {/* Link para recuperação de senha */}
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={loginStyles.link}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}