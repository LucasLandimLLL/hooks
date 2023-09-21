import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet,} from 'react-native';
import React from 'react';

import Home from './src/telas/home';

export default function App() {
  return (
    <SafeAreaView style={estilos.tela}>
      <Home/>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
