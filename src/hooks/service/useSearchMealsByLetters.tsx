import search_meals_by_letters from "../../service/meals/search_meals_by_letters.ts";
import {useMutation} from "@tanstack/react-query";


const useSearchMealsByLetters = () => {
    return useMutation({
        mutationKey: ['searchMeals'],
        mutationFn: search_meals_by_letters,
    })
}
export default useSearchMealsByLetters;
