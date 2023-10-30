import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const SignupNext = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>SICVI</Text>
        <TextInput placeholder="Correo electrónico" style={styles.input} />
        <TextInput placeholder="Contraseña" style={styles.input} />
        <TextInput placeholder="Repetir contraseña" style={styles.input} />
        <TouchableOpacity
          onPress={() => navigation.navigate("All")}
          style={styles.createUser}
        >
          <Text style={styles.createUserText}>Crear cuenta</Text>
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
    marginBottom: 24,
  },
  input: {
    width: 308,
    height: 56,
    fontSize: 20,
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
    height: 56,
  },
  createUserText: {
    color: "#59028e",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default SignupNext;
