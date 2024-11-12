import {createRoot} from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import router from "./route/router.tsx";
import Providers from "./components/helpers/Providers.tsx";
import "./scss/index.scss";


createRoot(document.getElementById('root')!).render(
    <Providers>
        <RouterProvider router={router} future={{
            v7_startTransition: true
        }}/>
    </Providers>
)
