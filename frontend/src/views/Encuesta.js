import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Encuesta = () => {
  return (
    <View style={styles.container}>
      <Text>Encuesta</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
  },
});

export default Encuesta;
