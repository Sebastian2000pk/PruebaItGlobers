import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../store/actions";

const HomeScreen = () => {
  const [userList, setUserList] = useState([]);
  const dispatch = useDispatch();

  const submit = () => {
    dispatch(Logout());
  };

  const dataUsers = useSelector((state: any) => state.UserReducer.userList);

  useEffect(() => {
    setUserList(dataUsers);
  }, [dataUsers]);

  return (
    <View>
      <Pressable onPress={submit}>
        <Text>Log Out</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
