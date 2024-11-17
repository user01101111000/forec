import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {Meal} from "../../types/data/data_types.ts";
import get_one_meal_by_id from "../../service/meals/get_one_meal_by_id.ts";


const useGetFeaturedMeals: () => UseQueryResult<Meal[]> = (): UseQueryResult<Meal[]> => {
    const ids: number[] = [52772, 52810, 52921, 53068, 52977, 52950, 52785]


    return useQuery({
        queryKey: ['featured'],
        queryFn: async (): Promise<Meal[]> => {


            const data: Meal[] = await Promise.all(ids.map((x: number): Promise<Meal> => get_one_meal_by_id(x)))


            return data;

        },
        staleTime: 300000,
        retry: 1,
    })
}
export default useGetFeaturedMeals
