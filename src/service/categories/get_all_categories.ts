import {ICategoryResponse} from "../../types/data/data_types.ts";
import {AxiosResponse} from "axios";
import {axios_instance} from "../axios_instance.ts";

const get_all_categories: () => Promise<ICategoryResponse> = async (): Promise<ICategoryResponse> => {


    const response: AxiosResponse<ICategoryResponse> = await axios_instance().get("/categories.php");


    return response.data;

}


export default get_all_categories;