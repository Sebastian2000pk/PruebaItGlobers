import React, { useEffect, useState } from "react";
import { View, Text, Pressable, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Services
import { getAllDataService } from "../../services/userService";

// Actions
import { Logout } from "../../store/actions";
import { SetPageAction } from "../../store/actions";

// Hooks
import { decryptText } from "../../hooks/crypto";

// Components
import UserItem from "../../components/UserItem";

const HomeScreen = () => {
  const [userList, setUserList] = useState([]);
  const [email, setEmail] = useState("");
  const [pageSelect, setPageSelect] = useState(1);
  const dispatch = useDispatch();

  const submit = () => {
    dispatch(Logout());
  };

  const page = useSelector((state: any) => state.UserReducer.page);
  const emailEncrypt = useSelector((state: any) => state.AuthReducer.email);

  const changePage = (page: number) => {
    dispatch(SetPageAction(page));
  };

  const getData = () => {
    getAllDataService(pageSelect)
      .then((res) => {
        setUserList(res.data.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  useEffect(() => {
    dispatch(SetPageAction(1));
  }, []);

  useEffect(() => {
    setPageSelect(page);
    getData();
  }, [page]);

  useEffect(() => {
    setEmail(decryptText(emailEncrypt));
  }, [emailEncrypt]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeaderEmail}>{email}</Text>
        <Pressable onPress={submit} style={styles.buttonLeave}>
          <Text style={styles.textleave}>Log Out</Text>
        </Pressable>
      </View>
      <FlatList
        data={userList}
        renderItem={({ item }: any) => (
          <UserItem
            name={item.first_name}
            email={item.email}
            avatar={item.avatar}
          />
        )}
        numColumns={2}
        columnWrapperStyle={styles.containerList}
      />
      <View style={styles.containerPagination}>
        <Pressable onPress={() => changePage(1)} style={[styles.buttonPage, pageSelect == 1 ? styles.pageSelected:{}]}>
          <Text style={styles.textPage}>1</Text>
        </Pressable>
        <Pressable onPress={() => changePage(2)} style={[styles.buttonPage, pageSelect == 2 ? styles.pageSelected:{}]}>
          <Text style={styles.textPage}>2</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",
  },
  container: {
    backgroundColor: "#fff",
    height: "100%",
    flex: 1,
  },
  containerList: {
    flex: 1,
    justifyContent: "space-around",
  },
  containerPagination: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
  },
  buttonPage: {
    backgroundColor: "#2b68e3",
    paddingVertical: 6,
    paddingHorizontal: 15,
    margin: 4,
    borderRadius: 5,
  },
  textPage: {
    color: "white",
  },
  pageSelected: {
    backgroundColor: "#074cd8",
  },
  buttonLeave: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  textleave: {
    color: "white",
  },
  textHeaderEmail: {
    fontSize: 13,
    fontWeight: "bold",
  }
});

export default HomeScreen;
