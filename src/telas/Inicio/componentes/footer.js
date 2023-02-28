import React from "react";
import { Image, StyleSheet, SafeAreaView } from "react-native";
import footer from '../../../../assets/planetas.png'

export default function Footer() {

    return (
        <SafeAreaView style={{ flex: 1, alignItems:'flex-start'}}>          
            <Image source={footer} style={estilos.footer}/>
        </SafeAreaView>
    );
}


const estilos = StyleSheet.create ( {
    footer: {
        width: 370,
        height: 295
    }
})