import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View, TextInput } from "react-native";

const TesteModal = () => {

  const [texto, setTexto] = useState("")
  const [modalVisivel, setModalVisivel] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisivel}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TextInput
            style={styles.modalInput}
            multiline={true}
            numberOfLines={3}
            onChangeText={novoTexto => setTexto(novoTexto)}
            placeholder="Deixe sua opinião aqui sobre o modal!"
            value={texto} />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisivel(!modalVisivel)}
            >
              <Text style={styles.textStyle}>Menos informações</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisivel(true)}
      >
        <Text style={styles.textStyle}>Mais informações</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalInput: {
    marginBottom: 5,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    width: 265,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default TesteModal;