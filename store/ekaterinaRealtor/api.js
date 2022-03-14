import axios from "axios"
import {
  EKATERINA_REALTOR_USERNAME,
  EKATERINA_REALTOR_PASSWORD
} from "react-native-dotenv"
const ekaterinaRealtor = axios.create({
  baseURL: "https://www.ekaterinarealtor.com/",
  auth: {
    username: EKATERINA_REALTOR_USERNAME,
    password: EKATERINA_REALTOR_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
