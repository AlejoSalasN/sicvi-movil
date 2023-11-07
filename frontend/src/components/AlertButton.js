import { Icon } from "@rneui/base";
import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Linking,
} from "react-native";
import * as Location from "expo-location";

const AlertButton = () => {
  const [userLocation, setUserLocation] = useState(null);
  useEffect(() => {
    if (userLocation) {
      // Componer el mensaje con la ubicación
      const url = `https://maps.app.goo.gl/?link=https://maps.google.com/?q=${userLocation.coords.latitude},${userLocation.coords.longitude}`;

      // Reemplaza 'NúmeroDeTelefono' con el número de teléfono de destino
      const phoneNumber = "59167082332";

      // Abrir WhatsApp con el mensaje
      Linking.openURL(`https://wa.me/?text=${url}`);
    }
  }, [userLocation, setUserLocation]);
  const alerta = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status === "granted") {
      // Obtener la ubicación actual
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      setUserLocation(location);
    }
  };

  return (
    <TouchableOpacity onPress={alerta} style={styles.button}>
      <Icon type="ionicon" name="alert-circle" size={48} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 16,
    right: 16,
    zIndex: 1,
  },
});

export default AlertButton;
