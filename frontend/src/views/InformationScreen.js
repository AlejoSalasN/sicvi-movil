import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Information from "../components/Information";
import AlertButton from "../components/AlertButton";

const informaciones = [
  {
    title: "Atención primaria nate la violencia de genero",
    uri: "https://res.cloudinary.com/dkkohwnui/image/upload/v1699455803/infografia-violencia-genero-atencion-primaria-scaled_v12pbu.jpg",
    date: "2023-11-01",
  },
  {
    title: "Derecho a una vida libre de violencia",
    uri: "https://res.cloudinary.com/dkkohwnui/image/upload/v1699455776/articulo_sobre_la_vioelcia_unek29.jpg",
    date: "2023-11-01",
  },
  {
    title: "Campamento para la defensa de la mujer",
    uri: "https://res.cloudinary.com/dkkohwnui/image/upload/v1699455869/DefensaMujer_rkozpy.jpg",
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
      <AlertButton />
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
