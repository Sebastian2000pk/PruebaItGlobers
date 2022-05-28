import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { Login } from "../../store/actions";

// Componets
import CustomInput from "../../components/CustomInput";
import CustonButton from "../../components/CustomButton";

type Props = {
  navigation: any;
};

const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const press = async () => {
    if (email && password) {
      dispatch(Login(email, password));
    }
  };

  const pressRegister = () => {
    navigation.navigate("Register")
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text style={styles.textLogo}>Login</Text>
      <CustomInput placeholder="Email" setState={setEmail} />
      <CustomInput
        placeholder="Password"
        setState={setPassword}
        secureTextEntry
      />
      <CustonButton text="Login" onPress={press} />
      <View style={styles.containerSingUp}>
        <Text style={styles.textSecondary}>Don't have an account? </Text>
        <Pressable onPress={pressRegister}>
          <Text style={styles.textPrimary}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerSingUp: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  textLogo: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 30,
    fontWeight: "bold",
  },
  textSecondary: {
    color: "#99a1b1",
  },
  textPrimary: {
    color: "#0041c4",
    fontWeight: "bold",
  },
});

export default LoginScreen;
