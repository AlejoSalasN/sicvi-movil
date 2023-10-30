import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const Signin = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>SICVI</Text>
        <TextInput placeholder="Correo electrónico" style={styles.input} />
        <TextInput placeholder="Contraseña" style={styles.input} />
        <TouchableOpacity
          onPress={() => navigation.navigate("All")}
          style={styles.loginUser}
        >
          <Text style={styles.loginUserText}>Inciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Forget")}>
          <Text style={styles.forgetText}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <View style={styles.omitirContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("All")}>
              <Text style={styles.omitirText}>Omitir</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.omitirContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Signup")}
              style={styles.createUser}
            >
              <Text style={styles.createUserText}>Crear cuenta</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  titleContainer: {},
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
    height: 56,
    fontSize: 20,
    borderWidth: 0.5,
    borderRadius: 15,
    borderColor: "#7f7777",
    color: "#7f7777",
    paddingHorizontal: 10,
    marginVertical: 6,
  },
  loginUser: {
    backgroundColor: "#59028e",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    width: 308,
    height: 56,
    marginVertical: 6,
  },
  loginUserText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  forgetText: {
    color: "#e80b0b",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 48,
  },
  omitirContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  omitirText: {
    color: "#59028e",
    fontSize: 20,
    fontWeight: "bold",
  },
  createUser: {
    borderColor: "#59028e",
    borderRadius: 15,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 56,
  },
  createUserText: {
    color: "#59028e",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Signin;
