import React from "react";
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface ButtonProps extends TouchableOpacityProps {  // Propriedade do botão que mantém a interface
    title:string;
}

export function Button ({title, ...rest }: ButtonProps ){  // Função que permite manter as características visuais e que troca somente o texto do botão 
    return(
        <TouchableOpacity 
            style={styles.container}
            {...rest}
        >
            <Text style={styles.text}>  
                { title }
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({  // Características visuais do botão 
    container: {
        backgroundColor: colors.green,
        height: 56,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.heading   
    }
});
