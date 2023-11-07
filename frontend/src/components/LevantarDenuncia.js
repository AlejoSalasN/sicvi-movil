import React from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Icon } from "@rneui/themed";

const LevantarDenuncia = ({
  visibleDenuncia,
  onClose,
  setVisibleDenuncia,
  setVisibleAgresor,
  anonima,
  setAnonima,
  direccion,
  fecha,
  hora,
  descripcion,
  setDireccion,
  setFecha,
  setHora,
  setDescripcion,
}) => {
  return (
    <Modal
      visible={visibleDenuncia}
      onRequestClose={() => setVisibleDenuncia(false)}
      transparent
      animationType="slide"
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "flex-end",
              marginTop: 12,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                onClose();
                setVisibleDenuncia(false);
              }}
            >
              <Icon name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Levantar denuncia</Text>
          <TouchableOpacity
            style={{ marginVertical: 6, justifyContent: "center" }}
            onPress={() => setAnonima(!anonima)}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={[
                  styles.anonimo,
                  { backgroundColor: anonima ? "#4f3bce" : "#d9d9d9" },
                ]}
              ></View>
              <Text>Anónimo</Text>
            </View>
          </TouchableOpacity>
          <TextInput
            placeholder="Dirección"
            style={styles.input}
            value={direccion}
            onChangeText={(value) => setDireccion(value)}
          />
          <TextInput
            placeholder="Fecha: días-mes-año"
            style={styles.input}
            value={fecha}
            onChangeText={(value) => setFecha(value)}
          />
          <TextInput
            placeholder="hora: --:--"
            style={styles.input}
            value={hora}
            onChangeText={(value) => setHora(value)}
          />
          <Text style={{ color: "#7f7777", fontSize: 14, marginLeft: 10 }}>
            Descripción:
          </Text>
          <TextInput
            placeholder="Describa los hechos..."
            style={styles.input}
            multiline
            value={descripcion}
            onChangeText={(text) => setDescripcion(text)}
            numberOfLines={10}
            maxLength={200}
          />
          <View style={styles.buttonNext}>
            <TouchableOpacity
              onPress={() => {
                setVisibleDenuncia(false);
                setVisibleAgresor(true);
              }}
            >
              <Text style={styles.textNext}>Siguiente</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000c0",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    color: "#000",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 6,
  },
  anonimo: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 12,
  },
  input: {
    borderBottomWidth: 0.5,
    color: "#7f7777",
    paddingHorizontal: 10,
    marginVertical: 12,
    fontSize: 14,
  },
  buttonNext: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  textNext: {
    color: "#4f3bce",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold",
  },
});

export default LevantarDenuncia;
