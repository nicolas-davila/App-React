import React from "react";
import { SafeAreaView, Text } from "react-native";
import TesteModal from "../../componentes/modal";
import FooterInsc from "./componentes/footerInscricao";
import Form from "./componentes/inscricao";

export default function Cadastro() {
    return <>
        <SafeAreaView>
            <Text>Aqui é a tela de inscrição</Text>
            <Form />
            <TesteModal />
        </SafeAreaView>
        <FooterInsc />
    </>
}