import React from "react";
import { Image, StyleSheet, SafeAreaView } from "react-native";
import logo from '../../../../assets/logo.png'

export default function Logo() {

    return (
        <SafeAreaView style={{ flex: 1, alignItems:'center'}}>          
            <Image source={logo} style={estilos.logo}/>
        </SafeAreaView>
    );
}


const estilos = StyleSheet.create ( {
    logo: {
        marginTop: 20,
        width: 300,
        height: 70
    }
})