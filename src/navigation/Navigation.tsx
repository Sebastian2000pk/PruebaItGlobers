import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

const Navigation = () => {

  const token = useSelector((state: any) => state.AuthReducer.authToken);

  return (
    <NavigationContainer>
      {token ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default Navigation;