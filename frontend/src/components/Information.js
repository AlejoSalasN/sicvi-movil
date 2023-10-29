import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

const Information = ({ title, uri, date, accesToInformation }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: uri }} style={styles.image} />
      <TouchableOpacity onPress={accesToInformation}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 290,
    width: "100%",
    marginVertical: 12,
  },
  image: {
    flex: 1,
  },
  title: {
    marginVertical: 12,
    fontSize: 20,
    fontWeight: "500",
  },
  date: {
    fontSize: 14,
  },
});

export default Information;
