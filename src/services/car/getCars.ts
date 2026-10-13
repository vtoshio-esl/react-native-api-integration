import { api } from "../api";
import { CarModel } from "../../models/CarModel";

interface ApiResponse {
    cars: CarModel[]
}

export async function fetchGetCarData(id: number) {
    try {
        const response = await api.get<ApiResponse>('/lamborghini.json')
        const carData = response.data.cars.find((car) => car.id == id) || null

        return carData;
    } catch (error) {
        console.log('[ERRO] Erro ao buscar dados da API: ', error)
    }
}