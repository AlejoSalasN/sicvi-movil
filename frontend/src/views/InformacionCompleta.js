import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import MapView, { Marker } from "react-native-maps";

const InformacionCompleta = ({ navigation, props }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image />
        <Text></Text>
        <View>
          <Text></Text>
        </View>
        <Text></Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default InformacionCompleta;
