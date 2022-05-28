import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

// Actions
import { LoginAction } from "../../store/actions";

// Componets
import CustomInput from "../../components/CustomInput";
import CustonButton from "../../components/CustomButton";

// Services
import { registerService } from "../../services/authService";

// Hooks
import { encryptText } from "../../hooks/crypto";

type Props = {
  navigation: any;
};

const RegisterScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const pressRegister = () => {
    if (email && password) {
      const dataRegister = { email, password };
      const emailEncrypt = encryptText(email);

      registerService(dataRegister)
        .then((res) => {
          dispatch(LoginAction(res.data.token, emailEncrypt));
        })
        .catch((err) => console.warn("Error al registrar", err));
    }
  };

  const pressToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text style={styles.textLogo}>Register</Text>
      <CustomInput placeholder="Email" setState={setEmail} />
      <CustomInput
        placeholder="Password"
        setState={setPassword}
        secureTextEntry
      />
      <CustonButton text="Register" onPress={pressRegister} />
      <View style={styles.containerSingUp}>
        <Text style={styles.textSecondary}>
          Do you already have an account?{" "}
        </Text>
        <Pressable onPress={pressToLogin}>
          <Text style={styles.textPrimary}>Sign In</Text>
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

export default RegisterScreen;
