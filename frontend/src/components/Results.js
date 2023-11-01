import React from "react";
import { View, Modal, StyleSheet, Text, TouchableOpacity } from "react-native";

const Results = ({ visible, onClose, respuesta }) => {
  return (
    <Modal
      visible={visible}
      onRequestClose={() => onClose()}
      transparent
      animationType="slide"
      style={{ backgroundColor }}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Resutlado</Text>
          <Text style={styles.message}>{respuesta}</Text>
          <View style={{ marginVertical: 6, alignItems: "flex-end" }}>
            <TouchableOpacity style={{ padding: 5 }} onPress={() => onClose()}>
              <Text
                style={{ color: "#4f3bce", fontSize: 16, fontWeight: "bold" }}
              >
                Ok
              </Text>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 6,
  },
  message: {
    marginVertical: 6,
    fontSize: 14,
    fontWeight: "400",
  },
});

export default Results;
