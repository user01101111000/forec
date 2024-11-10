import {FC} from "react";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {IProvidersProps} from "../../types/components/components_types.ts";


const queryClient = new QueryClient(
    {
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false
            }
        }
    }
);


const Providers: FC<IProvidersProps> = (props: IProvidersProps) => {
    return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
}

export default Providers