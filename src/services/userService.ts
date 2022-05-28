import axios from "axios";

import enviroment from "../env/enviroment";

export const getAllDataService = (page: number = 1) => {
  return axios.get(enviroment.baseUrl + '/users?page=' + page);
}
