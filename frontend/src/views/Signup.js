import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import SelectSexo from "../components/SelectSexo";

const Signup = ({ navigation }) => {
  const [sexo, setSexo] = useState("");
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>SICVI</Text>
        <TextInput placeholder="Nombre" style={styles.input} />
        <TextInput
          placeholder="Apellido paterno (opcional)"
          style={styles.input}
        />
        <TextInput
          placeholder="Apellido paterno (opcional)"
          style={styles.input}
        />
        <TextInput
          placeholder="Apellido materno (opcional)"
          style={styles.input}
        />
        <TextInput
          type="number"
          placeholder="Número de celular"
          style={styles.input}
          keyboardType="numeric"
        />
        <TextInput
          type="date"
          placeholder="Fecha de nacimiento"
          style={styles.input}
        />
        <SelectSexo setSexo={setSexo} />
        <TouchableOpacity
          onPress={() => navigation.navigate("SignupNext")}
          style={styles.createUser}
        >
          <Text style={styles.createUserText}>Siguiente</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 6,
    color: "#59028e",
    marginBottom: 48,
  },
  input: {
    width: 308,
    height: 46,
    fontSize: 16,
    borderWidth: 0.5,
    borderRadius: 15,
    borderColor: "#7f7777",
    color: "#7f7777",
    paddingHorizontal: 10,
    marginVertical: 6,
  },
  createUser: {
    marginTop: 48,
    borderColor: "#59028e",
    borderRadius: 15,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    width: 308,
    height: 46,
  },
  createUserText: {
    color: "#59028e",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Signup;
