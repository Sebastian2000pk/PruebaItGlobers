import axios from 'axios';

const baseUrl = "https://reqres.in/api";

type User = {
  email: string;
  password: string;
}

export const loginService = async (data: User) => {
  return await axios.post(baseUrl + '/login', data);
}

export const registerService = async (data: User) => {
  return await axios.post(baseUrl + '/register', data);
}