import React from "react";
import { View, Text, StyleSheet } from "react-native";

const User = () => {
  return (
    <View style={styles.container}>
      <Text>Usuario</Text>
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

export default User;
