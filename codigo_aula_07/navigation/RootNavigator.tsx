import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './AuthStack';
import { AppTabs } from './AppTabs';


export function RootNavigator() {
  // Estado que controla se o usuário está logado ou não
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Função para simular o login e o logout
  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    // NavigationContainer encapsula toda a navegação do app
    <NavigationContainer>
      {isAuthenticated ? (
        <AppTabs onLogout={handleLogout} />
      ) : (
        <AuthStack onLogin={handleLogin} />
      )}
    </NavigationContainer>
  );
}