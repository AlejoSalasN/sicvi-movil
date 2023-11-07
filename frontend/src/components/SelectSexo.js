import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const SelectSexo = ({ setSexo }) => {
  const [femenino, setFemenino] = useState(false);
  const [masculino, setMasculino] = useState(false);
  return (
    <View style={styles.containerSexo}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => {
            setMasculino(false);
            setFemenino(true);
            setSexo("Femenino");
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={[
                styles.anonimo,
                { backgroundColor: femenino ? "#4f3bce" : "#d9d9d9" },
              ]}
            />
            <Text>Femenino</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => {
            setFemenino(false);
            setMasculino(true);
            setSexo("Femenino");
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={[
                styles.anonimo,
                { backgroundColor: masculino ? "#4f3bce" : "#d9d9d9" },
              ]}
            />
            <Text>Masculino</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerSexo: {
    flexDirection: "row",
    marginVertical: 12,
  },
  anonimo: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 12,
  },
});

export default SelectSexo;
