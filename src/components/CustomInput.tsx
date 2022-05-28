import React from "react";
import { TextInput, StyleSheet } from "react-native";

type Props = {
  placeholder?: string;
  setState: (value: any) => void;
  secureTextEntry?: boolean;
};

const CustomInput = ({ placeholder, setState, secureTextEntry }: Props) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      onChangeText={setState}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    paddingHorizontal: 20,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 15,
    alignItems: "center",
    backgroundColor: "#f6f7f9",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  buttonPressed: {
    backgroundColor: "red",
  },
});

export default CustomInput;
