import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import RoutesSesion from "./src/routes/Sesion.routes";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          marginTop: Platform.OS === "android" && 30,
        }}
      >
        <RoutesSesion />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
