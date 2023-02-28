import React from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import Botao from '../../componentes/botao';
import BotaoCadastro from '../../componentes/botaoCadastro';
import Logo from './componentes/logo';
import Footer from './componentes/footer';


export default function Home({ navigation }) {

    return <>
        <Logo />
        <SafeAreaView style={{ flex: 0.7, alignItems:'center', justifyContent:'center' }}>          
            <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                <Botao />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} >
                <BotaoCadastro />
            </TouchableOpacity>
        </SafeAreaView>
        <Footer />
    </>    
}

