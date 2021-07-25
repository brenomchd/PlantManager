import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';  // Importação das características visuais do app

import { Feather } from '@expo/vector-icons';  // Importação dos ícones do app
import { useNavigation } from '@react-navigation/core';  // Importação do sistema de navegação das telas

import wateringImg from '../assets/watering.png';  // Importação da Imagem de fundo do app 
import colors from '../styles/colors';  // Importação das cores do app
import fonts from '../styles/fonts';  // Importação das fontes do app

export function Welcome (){
    const navigation = useNavigation();

    function handleStart(){  // Função que permite a navegação entre a tela "Welcome" para a tela "User Identification"
        navigation.navigate('UserIdentification');
    }

    // Tela de bem vindo do app usando o SafeAreaView

    return(
        <SafeAreaView style={styles.container}>    
            <View style={styles.wrapper}>
            <Text style={styles.title}>
                Gerencie {'\n'} 
                suas plantas de {'\n'}
                forma fácil
            </ Text>
            
            <Image 
              source={wateringImg} 
              style={styles.image}
              resizeMode="contain"
            />

            <Text style={styles.subtitle}>
                Não esqueça de regar as suas plantas.
                Nós cuidamos de lembrar você sempre que precisar.
            </ Text>

            <TouchableOpacity 
                style={styles.button} 
                activeOpacity={0.7}
                onPress={handleStart}  // Uso da função de navegação entre telas inplementada no botão 
            >
                <Feather 
                    name="chevron-right" 
                    style={styles.buttonIcon}
                />
            </TouchableOpacity>
           </View> 
        </ SafeAreaView>
    )
}

const styles = StyleSheet.create ({  // Ajustes utilizados para definir características como cor, tamanho e alinhamento dos textos, da imagem e do botão
    container: {
        flex: 1,
    }, 
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 34
    }, 
    subtitle: {
       textAlign:'center',
       fontSize: 18,
       paddingHorizontal: 20,
       color: colors.heading,
       fontFamily: fonts.text
    },
    image: {
        height: Dimensions.get('window').width * 0.7
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    buttonIcon: {
        fontSize: 32,
        color: colors.white
    }
});
