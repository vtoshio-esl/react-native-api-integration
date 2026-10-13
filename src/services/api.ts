import { CAR_API_BASE_URL } from "../constants/car";
import axios from "axios";

export const api = axios.create({
    baseURL: CAR_API_BASE_URL,
    timeout: 10_000,
}) 