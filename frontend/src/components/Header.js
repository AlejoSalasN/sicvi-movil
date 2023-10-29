import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Header = ({ title, handleOptionPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={handleOptionPress}>
          <Text style={styles.textButton}>Ver más...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 12,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
  },
  rightContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 12,
    color: "#4f3bce",
  },
});

export default Header;
