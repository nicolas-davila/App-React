import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Botao = () => (
  <Button icon="" mode="contained" style={estilos.Botao} buttonColor='#4378F3'>
    Login
  </Button>
);

export default Botao;

const estilos = StyleSheet.create({
  Botao: {
    width: 120,
  }
})