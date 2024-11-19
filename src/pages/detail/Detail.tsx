import {FC, JSX} from "react";
import DetailContainer from "../../containers/detail/DetailContainer.tsx";
import {useParams} from "react-router-dom";
import useGetMealByID from "../../hooks/service/useGetMealByID.tsx";
import LoadingContainer from "../../components/ui/LoadingContainer.tsx";

const Detail: FC = (): JSX.Element => {


    const {id} = useParams();

    const {data, isLoading, isError, error} = useGetMealByID(parseInt(id as string));


    if (isLoading) return <LoadingContainer/>

    if (isError) return <h1>{error.message}</h1>


    // @ts-ignore
    const ingredients: string[] = Array.from({length: 20}, (_: unknown, i: number): string[] => data![`strIngredient${i + 1}`]).filter(Boolean);
    // @ts-ignore
    const measures: string[] = Array.from({length: 20}, (_: unknown, i: number): string[] => data![`strMeasure${i + 1}`]).filter((x: string) => Boolean(x) && x != " ");


    return <DetailContainer data={data!} ingredients={ingredients} measures={measures}/>
}

export default Detail;