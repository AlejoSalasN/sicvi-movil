import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import EventsCard from "../components/EventsCard";
import AlertButton from "../components/AlertButton";

// const eventos = [
//   {
//     title: "Violencia sexual y de pareja",
//     uri: "https://res.cloudinary.com/dkkohwnui/image/upload/v1699455860/eventoVirual_vw9rg0.webp",
//     date: "09-18",
//   },
//   {
//     title: "Violencia de genero",
//     uri: "https://res.cloudinary.com/dkkohwnui/image/upload/v1699455848/alto_no_mas_violecia_genero_ewuhad.webp",
//     date: "09-18",
//   },
//   {
//     title: "Mujer Boliviana",
//     uri: "https://res.cloudinary.com/dkkohwnui/image/upload/v1699455786/MujerBoliviana_zunhol.webp",
//     date: "09-18",
//   },
// ];

const EventsScreen = () => {
  const [eventos, setEventos] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Eventos</Text>
      <ScrollView>
        {eventos?.map((evento, index) => (
          <EventsCard
            key={`indicador-evento-${index}`}
            {...evento}
            handleViewEvent={() => console.log(`este es el index: ${index}`)}
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

export default EventsScreen;
