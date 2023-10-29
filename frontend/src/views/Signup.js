import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Signup = () => {
  return (
    <View style={styles.container}>
      <Text>Crear Cuenta</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 15,
  },
});

export default Signup;
