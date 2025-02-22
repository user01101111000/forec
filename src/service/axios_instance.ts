import axios, {AxiosInstance} from "axios";


const axios_instance: () => AxiosInstance = (): AxiosInstance => {

    return axios.create({
        baseURL: "https://www.themealdb.com/api/json/v1/1",
    });
}


export {axios_instance}