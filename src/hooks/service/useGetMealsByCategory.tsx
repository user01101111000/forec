import {useMutation, UseMutationResult} from "@tanstack/react-query";
import get_meals_by_category from "../../service/meals/get_meals_by_category.ts";
import {ICategoryMealResponse} from "../../types/data/data_types.ts";


const useGetMealsByCategory: () => UseMutationResult<ICategoryMealResponse, Error, string, unknown> = (): UseMutationResult<ICategoryMealResponse, Error, string, unknown> => {
    return useMutation({
        mutationKey: ['categoryMeals'],
        mutationFn: get_meals_by_category,
    })
}
export default useGetMealsByCategory;
