import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Events from "../components/Events";
import Header from "../components/Header";
import LevantarDenuncia from "../components/LevantarDenuncia";
import InformacionAgresor from "../components/InformacionAgresor";
import UbicacionDenuncia from "../components/UbicacionDenuncia";
import PruebaDenuncia from "../components/PruebaDenuncia";
import AlertButton from "../components/AlertButton";

const centros = [
  {
    uri: "https://res.cloudinary.com/dkkohwnui/image/upload/v1699456335/RosarioCampos_o7z7lc.jpg",
    title: "Lugares alternativos",
  },
  {
    uri: "https://res.cloudinary.com/dkkohwnui/image/upload/v1699456358/LevantateMujer_t7ubqq.jpg",
    title: "Levántate mujer",
  },
  {
    uri: "https://res.cloudinary.com/dkkohwnui/image/upload/v1699456346/fundacion2_jfhtgx.png",
    title: "Casa de la mujer",
  },
  {
    uri: "https://res.cloudinary.com/dkkohwnui/image/upload/v1699456335/RosarioCampos_o7z7lc.jpg",
    title: "Rosatio Campos",
  },
  // {
  //   uri: "https://i.pinimg.com/736x/3e/f5/76/3ef576743d37759ce97de1ab8b1b3cce.jpg",
  //   title: "Levántate mujer",
  // },
];

// const denuncias = [
//   {
//     title: "Abuso Sexual",
//     tipo: "Anónimo",
//   },
//   {
//     title: "Abuso Económico",
//     tipo: "Registrado",
//   },
//   {
//     title: "Acoso callejero",
//     tipo: "Anónimo",
//   },
//   {
//     title: "Abuso Sexual",
//     tipo: "Anónimo",
//   },
//   {
//     title: "Abuso de poder",
//     tipo: "Anónimo",
//   },
// ];

const Denuncia = () => {
  //CLOUDINARY_URL=cloudinary://185959214259264:Fyw4wlre7O5lp7sJxOg3Dxjsi1w@dkkohwnui

  const [visibleDenuncia, setVisibleDenuncia] = useState(false);
  const [visibleAgresor, setVisibleAgresor] = useState(false);
  const [visibleLugar, setVisibleLugar] = useState(false);
  const [visiblePrueba, setVisiblePrueba] = useState(false);

  const [anonima, setAnonima] = useState(false);
  const [direccion, setDireccion] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [nombre_a, setNombre_a] = useState("");
  const [paterno_a, setPaterno_a] = useState("");
  const [materno_a, setMaterno_a] = useState("");
  const [direccion_a, setDireccion_a] = useState("");
  const [sexo_a, setSexo_a] = useState("");

  const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState("");

  const [archivos, setArchivos] = useState({
    archivo: "",
    detalles: "",
  });
  let Prueba = [];

  const handleCancelDenuncia = () => {
    setAnonima(false);
    setDireccion("");
    setFecha("");
    setHora("");
    setDescripcion("");
  };

  const onBackAgresor = () => {
    setNombre_a("");
    setPaterno_a("");
    setMaterno_a("");
    setDireccion_a("");
    setSexo_a("");
  };

  const handleCancelAgresor = () => {
    setAnonima(false);
    setDireccion("");
    setFecha("");
    setHora("");
    setDescripcion("");
    setNombre_a("");
    setPaterno_a("");
    setMaterno_a("");
    setDireccion_a("");
    setSexo_a("");
  };

  const onBackLugar = () => {
    setLatitud("");
    setLongitud("");
  };

  const handleCancelLugar = () => {
    setAnonima(false);
    setDireccion("");
    setFecha("");
    setHora("");
    setDescripcion("");
    setNombre_a("");
    setPaterno_a("");
    setMaterno_a("");
    setDireccion_a("");
    setSexo_a("");
    setLatitud("");
    setLongitud("");
  };

  const onBackPrueba = () => {
    setArchivos({ archivo: "", detalles: "" });
    Prueba = [];
  };

  const handleCancelPrueba = () => {
    setAnonima(false);
    setDireccion("");
    setFecha("");
    setHora("");
    setDescripcion("");
    setNombre_a("");
    setPaterno_a("");
    setMaterno_a("");
    setDireccion_a("");
    setSexo_a("");
    setLatitud("");
    setLongitud("");
    setArchivos({ archivo: "", detalles: "" });
    Prueba = [];
  };

  const addFile = () => {
    Prueba.push(archivos);
    setArchivos({ archivo: "", detalles: "" });
  };

  const onFinish = () => {
    console.log(
      direccion,
      " ",
      latitud,
      " ",
      longitud,
      " ",
      nombre_a,
      " ",
      archivos.detalles
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Denuncia</Text>
      <View style={{ marginBottom: 12 }}>
        <Header title={"Centro de ayuda"} />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {centros?.map((centro, index) => (
            <TouchableOpacity key={`indicador-evento-${index}`}>
              <Events title={centro.title} uri={centro.uri} date={""} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title={"Tipos de Denuncias"} />
        <View style={styles.informationContainer}>
          {denuncias?.map((info, index) => (
            <View key={`denucia-${index}`} style={styles.denunciaItem}>
              <Text style={styles.denunciaTitle}>{info.title}</Text>
              <Text style={styles.denunciaTipo}>{info.tipo}</Text>
            </View>
          ))}
        </View>
        <View style={styles.levantar}>
          <TouchableOpacity
            style={styles.levantarButton}
            onPress={() => setVisibleDenuncia(true)}
          >
            <Text style={styles.levantarText}>Levantar denuncia</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <LevantarDenuncia
        visibleDenuncia={visibleDenuncia}
        onClose={handleCancelDenuncia}
        setVisibleAgresor={setVisibleAgresor}
        setVisibleDenuncia={setVisibleDenuncia}
        anonima={anonima}
        setAnonima={setAnonima}
        direccion={direccion}
        fecha={fecha}
        hora={hora}
        descripcion={descripcion}
        setDireccion={setDireccion}
        setFecha={setFecha}
        setHora={setHora}
        setDescripcion={setDescripcion}
      />
      <InformacionAgresor
        visibleAgresor={visibleAgresor}
        onClose={handleCancelAgresor}
        setVisibleAgresor={setVisibleAgresor}
        setVisibleDenuncia={setVisibleDenuncia}
        setVisibleLugar={setVisibleLugar}
        onBackAgresor={onBackAgresor}
        nombre_a={nombre_a}
        paterno_a={paterno_a}
        materno_a={materno_a}
        direccion_a={direccion_a}
        setNombre_a={setNombre_a}
        setPaterno_a={setPaterno_a}
        setMaterno_a={setMaterno_a}
        setDireccion_a={setDireccion_a}
        setSexo_a={setSexo_a}
      />
      <UbicacionDenuncia
        visibleLugar={visibleLugar}
        onClose={handleCancelLugar}
        setVisibleLugar={setVisibleLugar}
        setVisibleAgresor={setVisibleAgresor}
        setVisiblePrueba={setVisiblePrueba}
        onBackLugar={onBackLugar}
        latitud={latitud}
        longitud={longitud}
        setLatitud={setLatitud}
        setLongitud={setLongitud}
      />
      <PruebaDenuncia
        visiblePrueba={visiblePrueba}
        onClose={handleCancelPrueba}
        setVisiblePrueba={setVisiblePrueba}
        setVisibleLugar={setVisibleLugar}
        onBackPrueba={onBackPrueba}
        archivos={archivos}
        setArchivos={setArchivos}
        addFile={addFile}
        onFinish={onFinish}
      />
      <AlertButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 6,
    color: "black",
  },
  levantar: {
    alignItems: "flex-end",
  },
  levantarButton: {
    backgroundColor: "#59028e",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  levantarText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  informationContainer: {
    marginTop: 12,
  },
  denunciaItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 8,
    borderRadius: 10,
  },
  denunciaTitle: {
    fontSize: 16,
    color: "#333",
  },
  denunciaTipo: {
    fontSize: 16,
    color: "#4f3bce",
    fontWeight: "bold",
  },
});

export default Denuncia;
