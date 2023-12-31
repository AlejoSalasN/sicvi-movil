import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Icon } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";

const PruebaDenuncia = ({
  visiblePrueba,
  onClose,
  setVisiblePrueba,
  setVisibleLugar,
  onBackPrueba,
  archivos,
  setArchivos,
  addFile,
  onFinish,
}) => {
  const [image, setImage] = useState(null);

  const [detalles, setDetalles] = useState("");
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      base64: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].base64);
    }
  };
  return (
    <Modal
      visible={visiblePrueba}
      onRequestClose={() => setVisiblePrueba()}
      transparent
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
                setVisiblePrueba(false);
              }}
            >
              <Icon name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Pruebas</Text>
          <TouchableOpacity
            onPress={() => pickImage()}
            style={{ marginVertical: 12 }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                name="file"
                size={14}
                color="#7f7777"
                style={{ marginRight: 6 }}
                type="font-awesome"
              />
              <Text style={{ color: "#7f7777", fontSize: 14, marginLeft: 6 }}>
                Seleccionar archivo
              </Text>
            </View>
          </TouchableOpacity>
          {image ? (
            <View style={styles.fileContainer}>
              <Image
                style={styles.file}
                source={{ uri: "data:image/webp;base64," + image }}
              />
            </View>
          ) : null}

          <Text style={{ color: "#7f7777", fontSize: 14, marginLeft: 10 }}>
            Detalles:
          </Text>
          <TextInput
            placeholder="Describa el archivo subido..."
            style={styles.input}
            multiline
            value={detalles}
            onChangeText={(text) => setDetalles(text)}
            numberOfLines={5}
            maxLength={100}
          />
          <View style={styles.buttonNext}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={() => {
                  onBackPrueba();
                  setVisiblePrueba(false);
                  setVisibleLugar(true);
                }}
              >
                <Icon name="arrow-back" size={20} color="blue" type="ionicon" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setArchivos();
                  addFile();
                }}
              >
                <Icon
                  name="plus-circle"
                  size={20}
                  color="blue"
                  type="font-awesome"
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "flex-end",
                flex: 1,
              }}
            >
              <TouchableOpacity onPress={() => onFinish}>
                <Text style={styles.textNext}>Finilizar</Text>
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
    marginBottom: 6,
  },
  fileContainer: {
    width: "100%",
    height: 308,
    borderRadius: 15,
    borderWidth: 0.5,
  },
  file: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  input: {
    borderWidth: 0.5,
    color: "#7f7777",
    paddingHorizontal: 10,
    marginVertical: 12,
    fontSize: 14,
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
});

export default PruebaDenuncia;
