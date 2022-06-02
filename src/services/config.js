import axios from "axios";
import { BASE_URL } from "../constants/axios";
export const http = axios.create({
  baseURL: BASE_URL,
});
