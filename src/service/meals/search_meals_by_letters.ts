import {IMealResponse} from "../../types/data/data_types.ts";
import {AxiosResponse} from "axios";
import {axios_instance} from "../axios_instance.ts";

const search_meals_by_letters: (letter: string) => Promise<IMealResponse> = async (letter: string): Promise<IMealResponse> => {

    const response: AxiosResponse<IMealResponse> = await axios_instance().get("/search.php", {
        params: {
            "f": letter
        }
    })

    return response.data;

}

export default search_meals_by_letters;