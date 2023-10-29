import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Information from "../components/Information";

const informaciones = [
  {
    title: "En esta parte va el título de la información educativa prueba 1",
    uri: "https://i.pinimg.com/736x/cc/43/2c/cc432c6e99ec675baf1d920fa7212d5c.jpg",
    date: "2023-11-01",
  },
  {
    title: "En esta parte va el título de la información educativa prueba 2",
    uri: "https://i.pinimg.com/736x/cc/43/2c/cc432c6e99ec675baf1d920fa7212d5c.jpg",
    date: "2023-11-01",
  },
  {
    title: "En esta parte va el título de la información educativa prueba 3",
    uri: "https://i.pinimg.com/736x/cc/43/2c/cc432c6e99ec675baf1d920fa7212d5c.jpg",
    date: "2023-11-01",
  },
  {
    title: "En esta parte va el título de la información educativa prueba 4",
    uri: "https://i.pinimg.com/736x/cc/43/2c/cc432c6e99ec675baf1d920fa7212d5c.jpg",
    date: "2023-11-01",
  },
  {
    title: "En esta parte va el título de la información educativa prueba 5",
    uri: "https://i.pinimg.com/736x/cc/43/2c/cc432c6e99ec675baf1d920fa7212d5c.jpg",
    date: "2023-11-01",
  },
];

const InformationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Informacion</Text>
      <ScrollView>
        {informaciones?.map((info, index) => (
          <Information
            key={`indicador-informacion-${index}`}
            {...info}
            accesToInformation={() => console.log(`este es el index: ${index}`)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 6,
  },
});

export default InformationScreen;
