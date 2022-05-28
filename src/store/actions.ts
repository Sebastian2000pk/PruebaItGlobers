import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dispatch, AnyAction } from "redux";



export const Login = (email: string, password: string): any => {
  return async (dispatch: Dispatch<AnyAction>) => {
    if (!email || !password) return;

    const token = email + password;
    await AsyncStorage.setItem("token", token);

    dispatch({
      type: "LOGIN",
      payload: token,
    });
  }
};

export const Logout = (): any => {
  return async (dispatch: Dispatch<AnyAction>) => {

    await AsyncStorage.clear();
  
    dispatch({
      type: "LOGOUT",
    });
  }
};

export const GetUsers = (): any => {
  return async (dispatch: Dispatch<AnyAction>) => {

    const data = await AsyncStorage.getItem('users');

    dispatch({
      type: "GET",
      payload: data,
    });
  }
}