import {IMealResponse, Meal} from "../../types/data/data_types.ts";
import {AxiosResponse} from "axios";
import {axios_instance} from "../axios_instance.ts";

const get_one_meal_by_id: (id: number) => Promise<Meal> = async (id: number): Promise<Meal> => {

    const response: AxiosResponse<IMealResponse> = await axios_instance().get("/lookup.php", {
        params: {
            "i": id
        }
    })

    return response.data.meals[0];

}


export default get_one_meal_by_id;