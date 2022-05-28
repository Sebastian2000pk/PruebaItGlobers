import axios from "axios";

// import enviroment from "../env/enviroment";
const baseUrl = "https://reqres.in/api";

export const getAllDataService = (page: number = 1) => {
  return axios.get(baseUrl + '/users?page=' + page);
}
