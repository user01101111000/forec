import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {Meal} from "../../types/data/data_types.ts";
import get_one_meal_by_id from "../../service/meals/get_one_meal_by_id.ts";


const useGetMealByID: (id: number) => UseQueryResult<Meal> = (id: number): UseQueryResult<Meal> => {
    return useQuery({
        queryKey: ['meal', id],
        queryFn: (): Promise<Meal> => get_one_meal_by_id(id),
        staleTime: 300000,
        retry: 1,
    })
}
export default useGetMealByID
