import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Events = ({ title, date, uri }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: uri }} style={styles.image} />
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 198,
    height: 100,
    backgroundColor: "#7f7777",
    borderRadius: 15,
    marginHorizontal: 12,
  },
  content: {
    flex: 1,
    flexDirection: "row",
  },
  imageContainer: {
    flex: 1,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  image: {
    flex: 1,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  rightContainer: {
    flex: 1,
    padding: 12,
  },
  title: {
    flex: 1,
    fontSize: 11,
    fontWeight: "500",
    color: "#fff",
  },
  dateContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  date: {
    fontSize: 11,
    color: "#fff",
  },
});

export default Events;
