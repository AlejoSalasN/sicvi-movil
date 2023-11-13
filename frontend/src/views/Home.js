import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import Events from "../components/Events";
import Information from "../components/Information";
import Header from "../components/Header";
import AlertButton from "../components/AlertButton";
import axios from "axios";

const eventos = [
  {
    title: "Violencia sexual y de pareja",
    uri: "https://res.cloudinary.com/dkkohwnui/image/upload/v1699455860/eventoVirual_vw9rg0.webp",
    date: "09-18",
  },
  {
    title: "Violencia de genero",
    uri: "https://res.cloudinary.com/dkkohwnui/image/upload/v1699455848/alto_no_mas_violecia_genero_ewuhad.webp",
    date: "09-18",
  },
  {
    title: "Mujer Boliviana",
    uri: "https://res.cloudinary.com/dkkohwnui/image/upload/v1699455786/MujerBoliviana_zunhol.webp",
    date: "09-18",
  },
  // {
  //   title: "Violencia contra el hombre",
  //   uri: "https://i.pinimg.com/736x/3e/f5/76/3ef576743d37759ce97de1ab8b1b3cce.jpg",
  //   date: "09-18",
  // },
  // {
  //   title: "Violencia psocológica",
  //   uri: "https://i.pinimg.com/736x/3e/f5/76/3ef576743d37759ce97de1ab8b1b3cce.jpg",
  //   date: "09-18",
  // },
];

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
  // {
  //   title: "En esta parte va el título de la información educativa prueba 4",
  //   uri: "https://i.pinimg.com/736x/cc/43/2c/cc432c6e99ec675baf1d920fa7212d5c.jpg",
  //   date: "2023-11-01",
  // },
  // {
  //   title: "En esta parte va el título de la información educativa prueba 5",
  //   uri: "https://www.ucb.edu.bo/wp-content/uploads/2021/02/violencia.jpg",
  //   date: "2023-11-01",
  // },
];

const Home = ({ navigation }) => {
  const [eventos, setEventos] = useState([]);
  const [informacion, setInformacion] = useState([]);

  const handleGeetEvents = async () => {
    const result = await axios
      .get("http://192.168.0.8:3000/api/evento")
      .catch((error) => console.error(error));
    const resultInfo = await axios
      .get("http://192.168.0.8:3000/api/informacion-educativa")
      .catch((error) => console.error(error));
    setEventos(result.data);
    setInformacion(resultInfo.data);
  };

  useEffect(() => {
    handleGeetEvents();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Inicio</Text>
      <View style={{ marginBottom: 12 }}>
        <Header
          title={"Eventos"}
          handleOptionPress={() => navigation.navigate("Events")}
        />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {eventos?.map((evento) => (
            <TouchableOpacity key={evento.id_evento}>
              <Events
                title={evento.e_titulo}
                date={evento.e_fecha}
                uri={evento.e_image}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <Header
        title={"Artículos"}
        handleOptionPress={() => navigation.navigate("Information")}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.informationContainer}>
          {informacion?.map((info) => (
            <Information
              key={info.id_informacion}
              title={info.i_titulo}
              uri={info.i_image}
              date={info.i_fecha}
              accesToInformation={() =>
                console.log(`este es el index: ${index}`)
              }
            />
          ))}
        </View>
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
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 6,
  },
  informationContainer: {
    flex: 1,
  },
});

export default Home;
