import React, {useState} from "react";
import {SafeAreaView, StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard} from "react-native";

import { useNavigation } from "@react-navigation/core";
import { Button } from "../components/Button";  // Componente "Button" que adiciona o botão padrão do app

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function UserIdentification(){  // Constantes usadas para colorir a barra de digitação usando condições de texto vazio ou cheio
    const [isFocused, setIsFocused] = useState (false);   
    const [isFilled, setIsFilled] = useState (false);
    const [name, setName] = useState<string>();

    const navigation = useNavigation();  // Constante usada para navegação entre telas no app 
    
    function handleImputBlur(){   // Função responsável por descolorir a barra de digitação caso o nome ainda não tenha sido digitado
        setIsFocused(false);   
        setIsFilled(!!name);
    }

    function handleImputFocus(){  // Função responsável por colorir a barra de digitação caso o nome seja digitado
        setIsFocused(true);
    }

    function handleInputChange(value: string){  // Função responsável por colorir a barra de digitação caso ainda esteja digitando o nome
        setIsFilled(!!value)
        setName(value);
    }

    function handleSubmit(){  // Função que permite a navegação entre a tela "User Identification" para a tela "Confirmation"
        navigation.navigate('Confirmation')
    }

    // Tela de identificação do usuário

    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
             style={styles.container}
             behavior={Platform.OS === "ios" ? 'padding' : 'height' }  // Característica usada para determinar o espaço usado em cada dispositivo móvel
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.content}> 
                    <View style={styles.form}>
                        <View style={styles.header}> 
                            <Text style={styles.emoji}>  
                               {isFilled ? '😄' : '😀'}
                            </Text> 
                            <Text style={styles.title}>
                               Como podemos {'\n'}
                               chamar você ? 
                            </Text>
                        </View>
                        <TextInput 
                            style={[
                                styles.imput,
                                (isFocused || isFilled) &&   // Condição que avalia o preenchimento da cor na barra de digitação
                                { borderColor: colors.green }
                            ]} 
                            placeholder="Digite um nome"
                            onBlur={handleImputBlur}
                            onFocus={handleImputFocus}
                            onChangeText={handleInputChange}
                            />
                        <View style={styles.footer}>
                              <Button
                                 title="Confirmar"
                                 onPress={handleSubmit}
                              />
                        </View>
                    </View>
                </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({  // Ajustes utilizados para definir características como cor, tamanho e alinhamento dos textos, da imagem, do botão e do emoji
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content: {
        flex: 1,
        width: '100%'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
    },
    emoji: {
        fontSize: 44,
    },
    imput: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20,
    },
    footer: {
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 20,
    }
});
