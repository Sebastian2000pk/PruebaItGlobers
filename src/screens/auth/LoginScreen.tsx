import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { Login } from "../../store/actions";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const press = async () => {
    if (email && password) {
      dispatch(Login(email, password));
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text style={styles.textLogo}>Login</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Pressable
        onPress={press}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "red" : "blue",
          },
          styles.input,
        ]}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textLogo: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    padding: 10,
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  buttonPressed: {
    backgroundColor: "red",
  },
});

export default LoginScreen;
