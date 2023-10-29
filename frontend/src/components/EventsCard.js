import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const EventsCard = ({ title, uri, date, description, handleViewEvent }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: uri }} style={styles.image} />
      <Text style={styles.date}>{date}</Text>
      <TouchableOpacity onPress={handleViewEvent}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleViewEvent}>
          <Text style={styles.textButton}>Ver más...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 505,
    marginVertical: 12,
  },
  image: {
    flex: 1,
  },
  title: {
    marginBottom: 12,
    fontSize: 20,
    fontWeight: "500",
  },
  date: {
    fontSize: 14,
    marginVertical: 12,
  },
  description: {
    fontSize: 12,
    marginBottom: 12,
  },
  buttonContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 35,
    borderRadius: 14,
    backgroundColor: "#4f3bce",
  },
  textButton: {
    fontSize: 12,
    color: "#fff",
  },
});

export default EventsCard;
