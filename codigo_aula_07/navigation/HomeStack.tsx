import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductsScreen } from '../screens/home/ProductsScreen';
import { SalesScreen } from '../screens/home/SalesScreen';

/**
 * Define as rotas no stack de autenticação.
 * Define se cada rota recebe parâmetros ou não.
 */
export type HomeStackParamList = {
  HomeMain: undefined;
  Products: undefined;
  Sales: undefined;
};

// Cria um stack navigator tipado com as rotas acima
const Stack = createNativeStackNavigator<HomeStackParamList>();

/**
 * Define a pilha de telas que pertencem à aba "Home".
 * Ao navegar dentro da aba, as telas são empilhadas (stack navigation).
 */
export function HomeStack() {
  return (
    <Stack.Navigator>
      {/* Tela principal da aba Home */}
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{ title: 'Início' }} />
      {/* Tela de Produtos */}
      <Stack.Screen name="Products" component={ProductsScreen} options={{ title: 'Produtos' }} />
      {/* Tela de Vendas */}
      <Stack.Screen name="Sales" component={SalesScreen} options={{ title: 'Vendas' }} />
    </Stack.Navigator>
  );
}
