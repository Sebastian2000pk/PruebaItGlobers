import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";

type Props = {
  text: string;
  onPress: () => void;
};

const CustonButton = ({ text, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed ? styles.buttonPressed : {},
      ]}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0041c4",
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 15,
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonPressed: {
    backgroundColor: "#074cd8",
  },
});

export default CustonButton;
