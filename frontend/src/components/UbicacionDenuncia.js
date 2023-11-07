import React from "react";
import {
  View,
  Modal,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import { Icon } from "@rneui/themed";

import MapView, { Marker, Polyline } from "react-native-maps";

const UbicacionDenuncia = ({
  visibleLugar,
  onClose,
  setVisibleLugar,
  setVisibleAgresor,
  setVisiblePrueba,
  onBackLugar,
  latitud,
  longitud,
  setLatitud,
  setLongitud,
}) => {
  const origin = {
    latitude: -16.504886,
    longitude: -68.130082,
  };
  return (
    <Modal
      visible={visibleLugar}
      onRequestClose={() => setVisibleLugar(false)}
      transparent
      animationType="slide"
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "flex-end",
              marginTop: 12,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                onClose();
                setVisibleLugar(false);
              }}
            >
              <Icon name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Lugar del incidente</Text>
          <Text style={styles.instruction}>
            Seleccione el lugar aproximado de los hechos en el mapa.
          </Text>
          <View style={styles.containerMap}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: origin.latitude,
                longitude: origin.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              onLongPress={(direction) => {
                setLatitud(direction.nativeEvent.coordinate.latitude);
                setLongitud(direction.nativeEvent.coordinate.longitude);
              }}
            >
              {latitud === "" && longitud === "" ? null : (
                <Marker
                  coordinate={{
                    latitude: latitud,
                    longitude: longitud,
                  }}
                  draggable={true}
                  onDragEnd={(direction) => {
                    setLatitud(direction.nativeEvent.coordinate.latitude);
                    setLongitud(direction.nativeEvent.coordinate.longitude);
                  }}
                />
              )}
            </MapView>
          </View>
          <View style={styles.buttonNext}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={() => {
                  onBackLugar();
                  setVisibleLugar(false);
                  setVisibleAgresor(true);
                }}
              >
                <Icon name="arrow-back" size={20} color="blue" type="ionicon" />
              </TouchableOpacity>
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "flex-end",
                flex: 1,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setVisibleLugar(false);
                  setVisiblePrueba(true);
                }}
              >
                <Text style={styles.textNext}>Siguiente</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000c0",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    color: "#000",
    fontSize: 20,
    textAlign: "center",
  },
  instruction: {
    marginVertical: 12,
    fontSize: 14,
  },
  containerMap: {
    width: "100%",
    height: 308,
    borderRadius: 15,
    borderWidth: 0.5,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  buttonNext: {
    flexDirection: "row",
    alignItems: "center",
  },
  textNext: {
    color: "#4f3bce",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold",
  },
  containerSexo: {
    flexDirection: "row",
    marginBottom: 12,
  },
});

export default UbicacionDenuncia;
