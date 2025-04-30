import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from './HomeStack';
import { ReportsScreen } from '../screens/report/ReportsScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { MaterialIcons } from '@expo/vector-icons';

// Define as props esperadas (uma função para logout)
type AppTabsProps = {
  onLogout: () => void;
};

// Cria o tab navigator
const Tab = createBottomTabNavigator();

/**
 * Componente que define as abas principais do aplicativo após o login.
 * Cada aba pode ter uma tela única ou um stack de navegação próprio.
 */
export function AppTabs({ onLogout }: AppTabsProps) {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {/* Aba da esquerda: Stack de navegação (Home → Produtos, Vendas) */}
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="home" size={size} color={color} />,
        }}
      />
      {/* Aba central: Relatórios */}
      <Tab.Screen
        name="Relatórios"
        component={ReportsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="bar-chart" size={size} color={color} />,
        }}
      />
      {/* Aba da direita: Tela de Perfil com botão de logout */}
      <Tab.Screen
        name="Perfil"
        children={() => <ProfileScreen onLogout={onLogout} />}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="person" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
