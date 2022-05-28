import axios from 'axios';

import enviroment from "../env/enviroment";

type User = {
  email: string;
  password: string;
}

export const loginService = async (data: User) => {
  return await axios.post(enviroment.baseUrl + '/login', data);
}

export const registerService = async (data: User) => {
  return await axios.post(enviroment.baseUrl + '/register', data);
}