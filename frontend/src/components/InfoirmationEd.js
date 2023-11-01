import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const InformationEd = ({ uri, title, description, date }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={{ uri: uri }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <View>
          <Text>{date}</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  content: {},
});

export default InformationEd;
