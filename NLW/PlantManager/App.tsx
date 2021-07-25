import React from 'react';
import AppLoading from "expo-app-loading"; //Importação do sistema de loading

import Routes from './src/routes';  // Forma de indexar as páginas do aplicativo
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';

export default function App(){
  const [ fontsLoaded ] = useFonts({   // Fontes escolhidas para o app
    Jost_400Regular,
    Jost_600SemiBold
  });
  
  if (!fontsLoaded)   // Tela de loading usada enquanto carrega as fontes
     return <AppLoading />

  return (  // Retorna a indexação 
    <Routes /> 
  )
}
