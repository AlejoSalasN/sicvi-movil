import { Icon } from "@rneui/themed";
import React, { useState } from "react";
import {
  View,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import SelectSexo from "./SelectSexo";

const InformacionAgresor = ({
  visibleAgresor,
  onClose,
  setVisibleDenuncia,
  setVisibleAgresor,
  setVisibleLugar,
  onBackAgresor,
  nombre_a,
  paterno_a,
  materno_a,
  direccion_a,
  setNombre_a,
  setPaterno_a,
  setMaterno_a,
  setDireccion_a,
  setSexo_a,
}) => {
  return (
    <Modal
      visible={visibleAgresor}
      onRequestClose={() => setVisibleAgresor(false)}
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
                setVisibleAgresor(false);
              }}
            >
              <Icon name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Información del agresor</Text>
          <TextInput
            placeholder="Nombre"
            style={styles.input}
            value={nombre_a}
            onChangeText={(value) => setNombre_a(value)}
          />
          <TextInput
            placeholder="Paterno"
            style={styles.input}
            value={paterno_a}
            onChangeText={(text) => setPaterno_a(text)}
          />
          <TextInput
            placeholder="Materno"
            style={styles.input}
            value={materno_a}
            onChangeText={(text) => setMaterno_a(text)}
          />
          <TextInput
            placeholder="Dirección"
            style={styles.input}
            value={direccion_a}
            onChangeText={(text) => setDireccion_a(text)}
          />
          <SelectSexo setSexo={setSexo_a} />
          <View style={styles.buttonNext}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={() => {
                  onBackAgresor();
                  setVisibleAgresor(false);
                  setVisibleDenuncia(true);
                }}
              >
                <Icon name="arrow-back" size={20} color="blue" type="ionicon" />
              </TouchableOpacity>
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "flex-end",
                flex: 1,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setVisibleAgresor(false);
                  setVisibleLugar(true);
                }}
              >
                <Text style={styles.textNext}>Siguiente</Text>
              </TouchableOpacity>
            </View>
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
  input: {
    borderBottomWidth: 0.5,
    paddingHorizontal: 12,
    color: "#7f7777",
    paddingHorizontal: 10,
    marginVertical: 12,
    fontSize: 14,
  },
  buttonNext: {
    flexDirection: "row",
    alignItems: "center",
  },
  textNext: {
    color: "#4f3bce",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold",
  },
});

export default InformacionAgresor;
