import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dispatch, AnyAction } from "redux";



export const LoginAction = (token: string, email: string): any => {
  return async (dispatch: Dispatch<AnyAction>) => {
    if (!token || !email) return;

    await AsyncStorage.setItem("token", token);

    dispatch({
      type: "LOGIN",
      payload: {
        token: token,
        email: email
      },
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

export const SetPageAction = (data: any): any => {
  return async (dispatch: Dispatch<AnyAction>) => {

    dispatch({
      type: "PAGE",
      payload: data,
    });
  }
}