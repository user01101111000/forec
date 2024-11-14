import {ICategoryMealResponse} from "../../types/data/data_types.ts";
import {axios_instance} from "../axios_instance.ts";
import {AxiosResponse} from "axios";

const get_meals_by_category: (c: string) => Promise<ICategoryMealResponse> = async (c: string): Promise<ICategoryMealResponse> => {


    const response: AxiosResponse<ICategoryMealResponse> = await axios_instance().get("/filter.php", {
        params: {
            "c": c
        }
    })

    return response.data
}

export default get_meals_by_category;