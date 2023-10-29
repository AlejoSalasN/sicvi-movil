import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import EventsCard from "../components/EventsCard";

const eventos = [
  {
    title: "Violencia contra la mujer",
    uri: "https://i.pinimg.com/736x/3e/f5/76/3ef576743d37759ce97de1ab8b1b3cce.jpg",
    date: "09-18",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor lectus vel purus suscipit, id interdum lectus auctor. Vivamus congue, urna ut porttitor pellentesque, metus purus ullamcorper odio, vitae semper mauris eros eget tortor. Vivamus augue mauris...",
  },
  {
    title: "Violencia contra los niños",
    uri: "https://tierragamer.com/wp-content/uploads/2021/10/Re-Zero-Rem-Arte.jpg",
    date: "09-18",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor lectus vel purus suscipit, id interdum lectus auctor. Vivamus congue, urna ut porttitor pellentesque, metus purus ullamcorper odio, vitae semper mauris eros eget tortor. Vivamus augue mauris...",
  },
  {
    title: "Violencia contra los animales",
    uri: "https://i.pinimg.com/736x/3e/f5/76/3ef576743d37759ce97de1ab8b1b3cce.jpg",
    date: "09-18",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor lectus vel purus suscipit, id interdum lectus auctor. Vivamus congue, urna ut porttitor pellentesque, metus purus ullamcorper odio, vitae semper mauris eros eget tortor. Vivamus augue mauris...",
  },
  {
    title: "Violencia contra el hombre",
    uri: "https://i.pinimg.com/736x/3e/f5/76/3ef576743d37759ce97de1ab8b1b3cce.jpg",
    date: "09-18",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor lectus vel purus suscipit, id interdum lectus auctor. Vivamus congue, urna ut porttitor pellentesque, metus purus ullamcorper odio, vitae semper mauris eros eget tortor. Vivamus augue mauris...",
  },
  {
    title: "Violencia psocológica",
    uri: "https://i.pinimg.com/736x/3e/f5/76/3ef576743d37759ce97de1ab8b1b3cce.jpg",
    date: "09-18",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor lectus vel purus suscipit, id interdum lectus auctor. Vivamus congue, urna ut porttitor pellentesque, metus purus ullamcorper odio, vitae semper mauris eros eget tortor. Vivamus augue mauris...",
  },
];

const EventsScreen = () => {
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
