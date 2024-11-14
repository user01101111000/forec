import {useMutation} from "@tanstack/react-query";
import get_meals_by_category from "../../service/meals/get_meals_by_category.ts";


const useGetMealsByCategory = () => {
    return useMutation({
        mutationKey: ['categoryMeals'],
        mutationFn: get_meals_by_category,
    })
}
export default useGetMealsByCategory;
