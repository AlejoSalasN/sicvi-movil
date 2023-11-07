import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const Centro = ({ uri, title }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: uri }}
        resizeMode="cover"
        style={styles.image}
      >
        <View
          style={{
            backgroundColor: "#000000c0",
            flex: 1,
            justifyContent: "flex-end",
            borderRadius: 15,
            paddingHorizontal: 5,
          }}
        >
          <Text style={styles.title}>{title}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 120,
    marginHorizontal: 6,
    borderRadius: 15,
  },
  image: {
    flex: 1,
    borderRadius: 15,
  },
  title: {
    fontSize: 11,
    fontWeight: "500",
    color: "#fff",
    marginBottom: 12,
  },
});

export default Centro;
