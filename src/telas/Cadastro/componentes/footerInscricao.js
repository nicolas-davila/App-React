import React from "react";
import { Image, StyleSheet, SafeAreaView } from "react-native";
import footerInsc from '../../../../assets/formLogo.png'

export default function FooterInsc() {

    return (
        <SafeAreaView style={{ flex: 1, alignItems:"baseline"}}>          
            <Image source={footerInsc} style={estilos.footer}/>
        </SafeAreaView>
    );
}


const estilos = StyleSheet.create ( {
    footer: {
        width: 400,
        height: 150
    }
})