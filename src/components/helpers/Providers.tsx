import {FC, JSX} from "react";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {IProvidersProps} from "../../types/components/components_types.ts";
import {ThemeContextProvider} from "../../context/ThemeContext.tsx";


const queryClient: QueryClient = new QueryClient(
    {
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false
            }
        }
    }
);


const Providers: FC<IProvidersProps> = (props: IProvidersProps): JSX.Element => {
    return <ThemeContextProvider>
        <QueryClientProvider client={queryClient}>{props.children}
        </QueryClientProvider>
    </ThemeContextProvider>


}

export default Providers