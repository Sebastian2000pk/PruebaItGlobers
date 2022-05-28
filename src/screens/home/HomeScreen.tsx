import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { Logout } from "../../store/actions";

// Hooks
import { decryptText } from "../../hooks/crypto";

const HomeScreen = () => {
  const [userList, setUserList] = useState([]);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const submit = () => {
    dispatch(Logout());
  };

  const dataUsers = useSelector((state: any) => state.UserReducer.userList);
  const emailEncrypt = useSelector((state: any) => state.AuthReducer.email);

  useEffect(() => {
    setUserList(dataUsers);
  }, [dataUsers]);

  useEffect(() => {
    setEmail(decryptText(emailEncrypt));
  }, [emailEncrypt]);

  
  return (
    <View>
      <Text>{email}</Text>
      <Pressable onPress={submit}>
        <Text>Log Out</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
