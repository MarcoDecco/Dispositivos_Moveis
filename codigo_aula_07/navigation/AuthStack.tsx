import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { ForgotPasswordScreen } from '../screens/auth/ForgotPasswordScreen';

/**
 * Define as rotas no stack de autenticação.
 * Define se cada rota recebe parâmetros ou não.
 */
export type AuthStackParamList = {
  Login: undefined;
  ForgotPassword: undefined;
};

// Cria o stack navigator usando os tipos definidos acima
const Stack = createNativeStackNavigator<AuthStackParamList>();

// Define as props esperadas (uma função para login)
type Props = {
  onLogin: () => void;
};

/**
 * Componente que define as rotas para o fluxo de autenticação:
 * - Tela de login
 * - Tela de recuperação de senha
 */
export function AuthStack({ onLogin }: Props) {
  return (
    <Stack.Navigator initialRouteName="Login">
      {/* Tela de login recebe a função onLogin via props */}
      <Stack.Screen name="Login">
        {(props) => <LoginScreen {...props} onLogin={onLogin} />}
      </Stack.Screen>
      {/* Tela de recuperação de senha (não recebe props extras) */}
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
}
