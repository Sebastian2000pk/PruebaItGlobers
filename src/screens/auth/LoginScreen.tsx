import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../store/actions";

// Services
import { loginService } from "../../services/authService";

// Componets
import CustomInput from "../../components/CustomInput";
import CustonButton from "../../components/CustomButton";

// Hooks
import { encryptText } from '../../hooks/crypto';

type Props = {
  navigation: any;
};

const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const press = async () => {
    if (email && password) {
      const dataLogin = {
        email: email,
        password: password
      }

      const emailEncrypt = encryptText(email);

      loginService(dataLogin).then(res => {
        dispatch(LoginAction(res.data.token, emailEncrypt));

      }).catch(err => {
        console.warn("Usuario o contraseña incorrectos");
      });
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
