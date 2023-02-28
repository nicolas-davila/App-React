import React from "react";
import { SafeAreaView, Text } from "react-native";
import Logo from "../Inicio/componentes/logo";
import Formulario from "./componentes/login";
import Footer from "../Inicio/componentes/footer";

export default function Login() {
    return <>
        <Logo />
        <SafeAreaView style={{ flex: 0.7, justifyContent:'center', alignItems:'center' }}>
            <Formulario />
        </SafeAreaView>
        <Footer />
    </>
}