import React from 'react';
import { RootNavigator } from './navigation/RootNavigator';

/**
 * Este componente é o ponto de entrada do app e retorna a árvore de navegação.
 * Toda a navegação (login, tabs, stacks, etc.) é controlada a partir do RootNavigator.
 */
export default function App() {
  return <RootNavigator />;
}