import {useQuery, UseQueryResult} from "@tanstack/react-query";
import get_all_categories from "../../service/categories/get_all_categories.ts";
import {ICategoryResponse} from "../../types/data/data_types.ts";


const useGetAllCategories: () => UseQueryResult<ICategoryResponse> = (): UseQueryResult<ICategoryResponse> => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: get_all_categories,
        staleTime: 300000,
        retry: 1,
    })
}
export default useGetAllCategories
