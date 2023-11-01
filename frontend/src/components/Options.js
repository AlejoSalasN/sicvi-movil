import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Option = ({ total, setTotal }) => {
  const [consult, setConsult] = useState("no");
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            consult === "a veces"
              ? setTotal(total - 2 + 3)
              : consult === "rara vez"
              ? setTotal(total - 1 + 3)
              : consult === "no"
              ? setTotal(total + 3)
              : setTotal(total);
            setConsult("sí");
          }}
        >
          <Text
            style={[
              styles.textButton,
              {
                color: consult === "sí" ? "#e80b0b" : "#7f7777",
              },
            ]}
          >
            Sí
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            consult === "sí"
              ? setTotal(total - 3 + 2)
              : consult === "rara vez"
              ? setTotal(total - 1 + 2)
              : consult === "no"
              ? setTotal(total + 2)
              : setTotal(total);
            setConsult("a veces");
          }}
        >
          <Text
            style={[
              styles.textButton,
              {
                color: consult === "a veces" ? "#e80b0b" : "#7f7777",
              },
            ]}
          >
            A veces
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            consult === "sí"
              ? setTotal(total - 3 + 1)
              : consult === "a veces"
              ? setTotal(total - 2 + 1)
              : consult === "no"
              ? setTotal(total + 1)
              : setTotal(total);
            setConsult("rara vez");
          }}
        >
          <Text
            style={[
              styles.textButton,
              {
                color: consult === "rara vez" ? "#e80b0b" : "#7f7777",
              },
            ]}
          >
            Rara vez
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            consult === "sí"
              ? setTotal(total - 3)
              : consult === "a veces"
              ? setTotal(total - 2)
              : consult === "rara vez"
              ? setTotal(total - 1)
              : setTotal(total);
            setConsult("no");
          }}
        >
          <Text
            style={[
              styles.textButton,
              {
                color: consult === "no" ? "#e80b0b" : "#7f7777",
              },
            ]}
          >
            No
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  button: {
    padding: 5,
  },
  textButton: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "500",
  },
});

export default Option;
