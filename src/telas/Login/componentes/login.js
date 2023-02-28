import React from "react";
import { SafeAreaView, TextInput, StyleSheet} from "react-native";
import BotaoLogin from "../../../componentes/botaoLogin";

const Formulario = () => {
  const [email, setEmail] = React.useState('');
  const [senha1, setSenha1] = React.useState('');
  const [senha2, setSenha2] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={estilos.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Digite seu email, ex: 'xxxx@gmail.com'"
      />
      <TextInput
        style={estilos.input}
        onChangeText={setSenha1}
        value={senha1}
        placeholder="Crie uma senha"
      />
      <TextInput
        style={estilos.input}
        onChangeText={setSenha2}
        value={senha2}
        placeholder="Confirme sua senha"
      />
      <BotaoLogin style={estilos.BotaoLogin}/>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  input: {
    marginBottom: 5,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    width: 265,
  },
  BotaoLogin: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Formulario;