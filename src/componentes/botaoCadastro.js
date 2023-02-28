import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const BotaoCadastro = () => (
    <Button icon="" mode="contained" style={estilos.Botao} buttonColor='#4378F3'>
        Inscrição
    </Button>
);

export default BotaoCadastro;

const estilos = StyleSheet.create({
    Botao: {
        alignItems: 'center',
        width: 120,
        marginTop: 7,
    }
})