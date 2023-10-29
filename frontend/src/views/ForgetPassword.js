import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const ForgetPassword = () => {
  return (
    <View style={styles.container}>
      <Text>ForgetPassword</Text>
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

export default ForgetPassword;
