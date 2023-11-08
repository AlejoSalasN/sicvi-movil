import React from "react";
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

const eventos = [
  {
    title: "Violencia contra la mujer",
    uri: "https://radioondaazul.com/wp-content/uploads/2019/11/03_violencia-contra-la-mujer_26-11-2019.jpg",
    date: "09-18",
  },
  {
    title: "Violencia contra los niños",
    uri: "http://cd1.eju.tv/wp-content/uploads/2019/03/5c7936d204af0.jpg",
    date: "09-18",
  },
  {
    title: "Violencia contra los animales",
    uri: "https://img.lagaceta.com.ar/fotos/notas/2020/11/23/podcast-violencia-contra-animales-esta-naturalizada-870049-125327.jpg",
    date: "09-18",
  },
  {
    title: "Violencia contra el hombre",
    uri: "https://tribunacampeche.com/wp-content/uploads/2021/06/violenciahombresok.jpg",
    date: "09-18",
  },
  {
    title: "Violencia psocológica",
    uri: "https://radiofelicidad.mx/wp-content/uploads/2020/03/Depositphotos_85074342_l-2015-1024x682.jpg",
    date: "09-18",
  },
];

const informaciones = [
  {
    title: "En esta parte va el título de la información educativa prueba 1",
    uri: "https://www.ucb.edu.bo/wp-content/uploads/2021/02/violencia.jpg",
    date: "2023-11-01",
  },
  {
    title: "En esta parte va el título de la información educativa prueba 2",
    uri: "http://www.todosayudan.com/wp-content/uploads/et_temp/no_violencia-284294_1050x675.jpg",
    date: "2023-11-01",
  },
  {
    title: "En esta parte va el título de la información educativa prueba 3",
    uri: "https://cdn.elimpulso.com/media/2020/08/violencia-696x418.jpg",
    date: "2023-11-01",
  },
  {
    title: "En esta parte va el título de la información educativa prueba 4",
    uri: "https://diariovoces.com.pe/wp-content/uploads/2020/02/actualidad-feminicidios-peru-2020-ya-son-dos-casos-registrados-primeros-dias-ano-n401619-612x408-644422.jpg",
    date: "2023-11-01",
  },
  {
    title: "En esta parte va el título de la información educativa prueba 5",
    uri: "https://www.ucb.edu.bo/wp-content/uploads/2021/02/violencia.jpg",
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
