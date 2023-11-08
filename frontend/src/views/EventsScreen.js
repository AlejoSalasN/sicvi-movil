import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import EventsCard from "../components/EventsCard";

const eventos = [
  {
    title: "Violencia contra la mujer",
    uri: "https://radioondaazul.com/wp-content/uploads/2019/11/03_violencia-contra-la-mujer_26-11-2019.jpg",
    date: "09-18",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor lectus vel purus suscipit, id interdum lectus auctor. Vivamus congue, urna ut porttitor pellentesque, metus purus ullamcorper odio, vitae semper mauris eros eget tortor. Vivamus augue mauris...",
  },
  {
    title: "Violencia contra los niños",
    uri: "http://cd1.eju.tv/wp-content/uploads/2019/03/5c7936d204af0.jpg",
    date: "09-18",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor lectus vel purus suscipit, id interdum lectus auctor. Vivamus congue, urna ut porttitor pellentesque, metus purus ullamcorper odio, vitae semper mauris eros eget tortor. Vivamus augue mauris...",
  },
  {
    title: "Violencia contra los animales",
    uri: "https://img.lagaceta.com.ar/fotos/notas/2020/11/23/podcast-violencia-contra-animales-esta-naturalizada-870049-125327.jpg",
    date: "09-18",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor lectus vel purus suscipit, id interdum lectus auctor. Vivamus congue, urna ut porttitor pellentesque, metus purus ullamcorper odio, vitae semper mauris eros eget tortor. Vivamus augue mauris...",
  },
  {
    title: "Violencia contra el hombre",
    uri: "https://tribunacampeche.com/wp-content/uploads/2021/06/violenciahombresok.jpg",
    date: "09-18",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor lectus vel purus suscipit, id interdum lectus auctor. Vivamus congue, urna ut porttitor pellentesque, metus purus ullamcorper odio, vitae semper mauris eros eget tortor. Vivamus augue mauris...",
  },
  {
    title: "Violencia psocológica",
    uri: "https://radiofelicidad.mx/wp-content/uploads/2020/03/Depositphotos_85074342_l-2015-1024x682.jpg",
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
