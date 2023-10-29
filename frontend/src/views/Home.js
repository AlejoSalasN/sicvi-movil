import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import Events from "../components/Events";
import Information from "../components/Information";
import Header from "../components/Header";

const eventos = [
  {
    title: "Violencia contra la mujer",
    uri: "https://i.pinimg.com/736x/3e/f5/76/3ef576743d37759ce97de1ab8b1b3cce.jpg",
    date: "09-18",
  },
  {
    title: "Violencia contra los niños",
    uri: "https://tierragamer.com/wp-content/uploads/2021/10/Re-Zero-Rem-Arte.jpg",
    date: "09-18",
  },
  {
    title: "Violencia contra los animales",
    uri: "https://i.pinimg.com/736x/3e/f5/76/3ef576743d37759ce97de1ab8b1b3cce.jpg",
    date: "09-18",
  },
  {
    title: "Violencia contra el hombre",
    uri: "https://i.pinimg.com/736x/3e/f5/76/3ef576743d37759ce97de1ab8b1b3cce.jpg",
    date: "09-18",
  },
  {
    title: "Violencia psocológica",
    uri: "https://i.pinimg.com/736x/3e/f5/76/3ef576743d37759ce97de1ab8b1b3cce.jpg",
    date: "09-18",
  },
];

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

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Inicio</Text>
      <View style={{ marginBottom: 12 }}>
        <Header
          title={"Eventos (5)"}
          handleOptionPress={() => navigation.navigate("Events")}
        />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {eventos?.map((evento, index) => (
            <TouchableOpacity key={`indicador-evento-${index}`}>
              <Events {...evento} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          title={"Artículos (5)"}
          handleOptionPress={() => navigation.navigate("Information")}
        />
        <View style={styles.informationContainer}>
          {informaciones?.map((info, index) => (
            <Information
              key={`indicador-informacion-${index}`}
              {...info}
              accesToInformation={() =>
                console.log(`este es el index: ${index}`)
              }
            />
          ))}
        </View>
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
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 6,
  },
  informationContainer: {
    flex: 1,
  },
});

export default Home;
