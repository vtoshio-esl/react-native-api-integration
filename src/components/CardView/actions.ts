import { CarModel } from "../../models/CarModel"

import { fetchGetCarData } from "../../services/car/getCars"

export const loadCarData = async (
    id: number, 
    setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
    const response = await fetchGetCarData(id);
    
    try {
        if (response != null) 
            setCarData(response);
    } catch (error) {
        console.log('[ERRO] Erro ao salvar estado dos dados do veículo: ', error);
        setCarData(null);
    }
}

export const handlePreviousItem = async (
    carData: CarModel | null,
    setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
    let response = null;
    try {
        if (carData && carData?.id > 1) 
            response = await fetchGetCarData(carData.id - 1);
        if (response) 
            setCarData(response);
    } catch (error) {
        console.log('[ERRO] Erro ao chamar a API: ', error)
    }
}

export const handleNextItem = async (
    carData: CarModel | null,
    setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
    let response = null;
    try {
        if (carData && carData?.id < 10) 
            response = await fetchGetCarData(carData.id + 1);
        if (response) 
            setCarData(response);
    } catch (error) {
        console.log('[ERRO] Erro ao chamar a API: ', error)
    }
}